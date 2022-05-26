import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), solid()],
    adapter: netlify(),
});
