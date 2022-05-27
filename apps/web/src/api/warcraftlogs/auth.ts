const TOKEN_URL = "https://www.warcraftlogs.com/oauth/token";

interface TokenResponse {
    token_type: string;
    expires_in: number;
    access_token: string;
}
export const getToken = async () => {
    const clientId = import.meta.env.WARCRAFTLOGS_CLIENT_ID;
    const clientSecret = import.meta.env.WARCRAFTLOGS_CLIENT_SECRET;

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
        console.log(tokenResponse.text());
    }
    return null;
};
