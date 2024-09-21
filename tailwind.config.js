/** @type {import('tailwindcss').Config} */

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        miniver: ['var(--font-miniver)'],
        sanchez: ['var(--font-sanchez)'],
      },
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
      animation: {
        'scroll': "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}