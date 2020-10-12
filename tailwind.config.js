module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "1/4": "25%",
        "1/3": "33%",
        "5/8": "62.5%",
        "1/2": "50%",
        "3/4": "75%",
      },
    },
  },
  variants: {},
  plugins: [],
};
