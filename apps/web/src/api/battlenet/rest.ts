import { roster, WowClass } from "../../data/roster";
import { ThumbnailResponse } from "./interfaces/thumbnail";

export const bnetClient = (access_token: string) => {
    const BASE_API_URL = "https://us.api.blizzard.com";

    return {
        get: async function <T>(
            path: string,
            querystring?: {
                [key: string]: string;
            }
        ) {
            const defaultKeys = {
                namespace: "profile-us",
                locale: "en_US",
                access_token,
            };
            const queryKeys = querystring
                ? new URLSearchParams({
                      ...querystring,
                      ...defaultKeys,
                  })
                : new URLSearchParams(defaultKeys);

            const url = `${BASE_API_URL}${path}?${queryKeys.toString()}`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.status === 200) {
                const json = await response.json();

                return json as T;
            } else {
                console.log("Failed url: ", url);
                console.log("Status code: ", response.status);
                console.log("Response body: ", await response.text());
            }

            return null;
        },
    };
};

interface UserThumbnail {
    realm: string;
    name: string;
    access_token: string;
}
export const getUserThumbnail = async (opts: UserThumbnail) => {
    const client = bnetClient(opts.access_token);
    const thumbnailData = await client.get<ThumbnailResponse>(
        `/profile/wow/character/${opts.realm.toLowerCase()}/${opts.name.toLowerCase()}/character-media`
    );
    return thumbnailData;
};
export interface CharacterData extends ThumbnailResponse {
    name: string;
    realm: string;
    wowClass: WowClass;
}
export const getRosterData = async (
    access_token: string
): Promise<CharacterData[]> => {
    return Promise.all(
        roster.map(async (character) => {
            const thumbnailData = await getUserThumbnail({
                name: character.name,
                realm: character.realm,
                access_token,
            });

            return {
                ...thumbnailData,
                name: character.name,
                realm: character.realm,
                wowClass: character.class,
            };
        })
    );
};
