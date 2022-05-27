import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/edge-functions";
import tailwind from "@astrojs/tailwind";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), solid()],
    adapter: netlify(),
});
