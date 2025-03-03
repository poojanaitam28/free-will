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
        "custom-pink": "#dc125c",
        'input-bg':'#f8fafc',
        'input-border':'#d1d1d1',
        'info-bg':'#2a5474',
        'warning':'#d23800',
        'warning-bg':'#fff4f0',
        'btn-bg':'#487799',
      },

      fontWeight:{
        'light-bold':500
      },

      fontSize:{
        12:'12px',
        14:'14px',
        16:'16px',
        18:'18px',
        20:'20px',
        22:'22px',
        24:'24px',
        26:'26px',
        28:'28px',
        30:'30px',
        32:'32px',
        34:'34px'
      }
    },
  },
  plugins: [],
};
