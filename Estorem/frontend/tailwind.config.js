/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tailprimary: "#27C690",
        tailsecondary: "#9CB2AA",
        tailtertiary: "#B2D8CB",
        bgprimary: "#FAFCFF",
        bgsecondary: "#E3FAFB",
      },
      fontFamily: {
        roboto: ["Roboto", "ui-sans-serif"],
        poppins: ["Poppins", "ui-sans-serif"],
        lato: ["Lato", "SFMono-ui-monospace"],
      }
    },
  },
  plugins: [],
}