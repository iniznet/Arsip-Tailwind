module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        mercury: {
          "50": "#FFFFFF",
          "100": "#FFFFFF",
          "200": "#FFFFFF",
          "300": "#F7F7F7",
          "400": "#F0F0F0",
          "500": "#E8E8E8",
          "600": "#DBDBDB",
          "700": "#CFCFCF",
          "800": "#C2C2C2",
          "900": "#B5B5B5"
        }
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")]
};
