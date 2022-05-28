import { roster } from "../../data/roster";
import { CharacterResponse } from "./responses";

export interface BasicPlayerOptions {
    realm: string;
    name: string;
    region: string;
}

export const getRaiderIOClient = () => {
    const BASE_API_URL = "https://raider.io/api/v1";

    return {
        get: async function <T>(path: string) {
            const url = `${BASE_API_URL}${path}`;
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.status === 200) {
                const json = await response.json();

                return json as T;
            }

            return null;
        },
    };
};

export const getBasicPlayer = async (opts: BasicPlayerOptions) => {
    const api = getRaiderIOClient();
    const data = await api.get<CharacterResponse>(
        `/characters/profile?region=${opts.region}&realm=${opts.realm}&name=${opts.name}`
    );
    return data;
};
