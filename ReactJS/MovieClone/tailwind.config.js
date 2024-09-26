import { getImageUrl } from './src/utils/constants';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'banner-image': `url(${getImageUrl}${banner})`,
      }
    },
  },
  plugins: [],
}
