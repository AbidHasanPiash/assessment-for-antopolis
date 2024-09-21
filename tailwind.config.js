/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#880808",
        'primary-light': "#a52a2a",

        'variant-1': "#0a4669",
        'variant-1-light': "#0a3659",
        'primary-light': "#a52a2a",

        'variant-2': "#953553",
        'variant-2-light': "#a95c68",

        'variant-3': "#006666",
        'variant-3-light': "#003333",
      },
    },
  },
  plugins: [],
};
