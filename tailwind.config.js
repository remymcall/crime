module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme=>({
        'rectangle1' : "url('/src/assets/rectangle12.png')",
        signBg: "url('/src/assets/rec.png')",
      })
    },
  },
  plugins: [],
}