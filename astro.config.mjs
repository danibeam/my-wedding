// @ts-check
import netlify from "@astrojs/netlify/functions";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    adapter: netlify({}),
});
