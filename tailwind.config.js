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
      "3/5": "60%",
      "3/4": "75%",
      100: "300px",
      full: "100%",
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    fontFamily: {
      sans: ["Roboto", "Arial"],
    },
    extend: {
      backgroundColor: {
        light: "#f7fff7",
        dark: "#0f181a",
        darkHover: "#253c41",
      },
      borderColor: {
        light: "#f7fff7",
        dark: "#0f181a",
      },
      textColor: {
        light: "#f7fff7",
        dark: "#0f181a",
      },
      width: {
        70: "70%",
        30: "30%",
      },
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
        mobile: "10px 1fr 10px",
        desktop: "10% 1fr 10%",
        xldesktop: "10% 1fr 10%",
      },
      gridTemplateRows: {
        default: "auto 1fr auto",
      },
      inset: {
        per10: "10%",
        per20: "20%",
      },
      minWidth: {
        logo: "32rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
