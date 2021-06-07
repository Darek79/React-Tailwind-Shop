module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      100: "300px",
      full: "100%",
    },
    fontSize: {
      tiny: ".50rem",
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
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
    borderColor: (theme) => ({
      ...theme,
      light: "#f7fff7",
      dark: "#0f181a",
    }),
    minWidth: {
      logo: "32rem",
    },
    extend: {
      translate: {
        74: "18.5rem",
      },
      zIndex: {
        "-10": "-10",
      },
      colors: {
        light: "#f7fff7",
        dark: "0f181a",
      },
      gridTemplateColumns: {
        mobile: "1fr",
        desktop: "1fr",
      },
      gridTemplateRows: {
        default: "auto 1fr auto",
      },
      inset: {
        per10: "10%",
        per20: "20%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
