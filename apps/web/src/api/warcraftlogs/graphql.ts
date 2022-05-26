export const client = (access_token: string) => {
    const BASE_API_URL = "https://www.warcraftlogs.com/api/v2/client";
    return {
        query: async function <T>(queryValue: string, variables?: any) {
            const response = await fetch(BASE_API_URL, {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + access_token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: queryValue,
                    variables,
                }),
            });

            const json = (await response.json()) as T;
            return json;
        },
    };
};
