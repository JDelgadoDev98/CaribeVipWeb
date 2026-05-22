import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://caribe-vip-web.caribevip-travel.workers.dev',
  integrations: [tailwind()],
});
