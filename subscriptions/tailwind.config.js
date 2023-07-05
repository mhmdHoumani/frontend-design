/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
        ss: "450px",
      },
      fontSize: {
        title: ["40px", { lineHeight: "56.25px", fontWeight: "semibold" }],
        subTitle: ["24px", { lineHeight: "33.75px", fontWeight: "semibold" }],
        headline: ["28px", { lineHeight: "39.50px" }],
        bigger: ["32px", { lineHeight: "48px" }],
      },
      colors: {
        primaryBlue: "#090979",
        primaryPink: "#FF00CA",
        secondaryYellow: "#FFD704",
        secondaryGray: "#E5D6FE",
        transparent: "transparent",
        current: "currentColor",
        darkBlue: "#201fb1",
        bgGray: "#f8f8f8",
        paleGray: "#b5b5b5",
        txtGray: "#313131",
        lightGreen: "#30D5C8",
        darkPink: "#B559C4",
        blue: {
          primary: "#22778A",
          secondary: "#9BCDD8",
        },
        black: {
          primary: "#171110",
          secondary: "#201312",
        },
        white: {
          primary: "#FFFCF8",
          secondary: "#E2D7CA",
        },
      },
      boxShadow: {
        card: "0px 3px 6px #00000029",
        editor: "0px 8px 8px #DDD0D0",
      },
      borderRadius: {
        "4xl": "40px",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
};
