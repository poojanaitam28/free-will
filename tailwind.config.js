/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#dc125c", 
        "custom-blue" :"#487799",
        "text-blue" : "#2a5474",
        "link-color" :"#0e6ce4",
      },
      transitionProperty: {
        'custom': 'color, background-color, border-color, box-shadow',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      transitionDuration: {
        '150': '150ms',
      },
    },
  },
  plugins: [],
};
