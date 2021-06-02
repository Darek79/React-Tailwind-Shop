module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "Arial"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      light: "#f7fff7",
      dark: "#0f181a",
    }),
    textColor: (theme) => ({
      ...theme,
      light: "#f7fff7",
      dark: "#0f181a",
    }),
    minWidth: {
      logo: "32rem",
    },
    extend: {
      colors: {
        light: "#f7fff7",
        dark: "0f181a",
      },
      gridTemplateColumns: {
        mobile: "10px 1fr 10px",
        desktop: "10% 1fr 10%",
      },
      gridTemplateRows: {
        default: "auto 1fr auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
