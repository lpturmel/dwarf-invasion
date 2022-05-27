const TOKEN_URL = "https://www.warcraftlogs.com/oauth/token";

interface TokenResponse {
    token_type: string;
    expires_in: number;
    access_token: string;
}

const getEnv = (variableName: string) => {
    return process.env.NODE_ENV === "development"
        ? import.meta.env[variableName]
        : Deno.env.get(variableName);
};
export const getToken = async () => {
    const clientId = getEnv("WARCRAFTLOGS_CLIENT_ID");
    const clientSecret = getEnv("WARCRAFTLOGS_CLIENT_SECRET");

    console.log("Client id: ", clientId);
    console.log("Client secret: ", clientSecret);
    const encodedCreds = btoa(clientId + ":" + clientSecret);
    const encodedAuth = `Basic ${encodedCreds}`;

    const body = new URLSearchParams({
        grant_type: "client_credentials",
    });

    const tokenResponse = await fetch(TOKEN_URL, {
        method: "POST",
        headers: {
            Authorization: encodedAuth,
            "Content-Type": "application/x-www-form-urlencoded",
        },

        body: body.toString(),
    });

    if (tokenResponse.status === 200) {
        const token = (await tokenResponse.json()) as TokenResponse;

        return token;
    } else {
        console.log("Token request response code: ", tokenResponse.status);
        console.log(await tokenResponse.text());
    }
    console.log(process.env.NODE_ENV);
    return null;
};
