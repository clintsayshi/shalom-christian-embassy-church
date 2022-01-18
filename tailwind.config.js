module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "secondary-color": "#976327",
        dark: "#755A3B",
      },
    },
    container: false,
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
};
