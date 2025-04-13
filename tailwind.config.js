module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 90% 70%, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 50%)',
      },
    },
  },
  plugins: [],
}