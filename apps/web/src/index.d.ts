declare var Deno: DenoEnvInterop;

interface DenoEnvInterop {
    env: {
        get: (variable: string) => string;
    };
}
