/** @type {import("tailwindcss").Config} */

import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  plugins: [],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  tailwindcss: {
    cssPath: '~/assets/styles/index.scss',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 0,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
}
