import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    esbuild: {
      drop:
        process.env.NODE_ENV === "production" ? ["console", "debugger"] : [],
    },
  },
});
