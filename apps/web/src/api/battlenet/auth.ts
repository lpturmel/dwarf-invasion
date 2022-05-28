import { getEnv } from "../../utils/env";

interface TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
}
export const getBnetToken = async () => {
    const TOKEN_URL = "https://us.battle.net/oauth/token";
    const clientId = getEnv("BNET_CLIENT_ID");
    const clientSecret = getEnv("BNET_CLIENT_SECRET");

    console.log("Bnet client id: ", clientId);
    console.log("Bnet client secret: ", clientSecret);
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
