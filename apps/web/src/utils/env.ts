export const getEnv = (variableName: string) => {
    const devEnv = {
        WARCRAFTLOGS_CLIENT_ID: import.meta.env.WARCRAFTLOGS_CLIENT_ID,
        WARCRAFTLOGS_SECRET_ID: import.meta.env.WARCRAFTLOGS_CLIENT_SECRET,
        BNET_CLIENT_ID: import.meta.env.BNET_CLIENT_ID,
        BNET_CLIENT_SECRET: import.meta.env.BNET_CLIENT_SECRET,
    };
    return import.meta.env.DEV
        ? devEnv[variableName]
        : Deno.env.get(variableName);
};
