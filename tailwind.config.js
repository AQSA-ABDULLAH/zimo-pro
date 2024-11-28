
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        flipUp: {
          '0%': { opacity: '0', transform: 'rotateX(-120deg)' },
          '100%': { opacity: '1', transform: 'rotateX(0)' },
        },

        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-90px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        fadeInTop: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        
        fadeInBottom: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(-100px) ' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        fadeRightToLeft: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        zoomInUp: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(120px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },

        fadeDownRight: {
          '0%': { opacity: '0', transform: 'translateY(-80px) translateX(-80px)' },
          '100%': { opacity: '1', transform: 'translateY(0) translateX(0)' },
        },                

        fadeDownLeft: {
          '0%': { opacity: '0', transform: 'translateY(-80px) translateX(80px)' },  // Start from top-right
          '100%': { opacity: '1', transform: 'translateY(0) translateX(0)' },         // End at normal position
        },

        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        flipUp: 'flipUp 1s ease-out forwards',
        fadeDown: 'fadeDown 1s ease-out forwards',
        fadeUp: 'fadeUp 1s ease-out forwards',
        fadeRight: 'fadeRight 1s ease-out forwards',
        fadeRightToLeft: 'fadeRightToLeft 1s ease-out forwards',
        fadeInTop: 'fadeInTop 1s ease-out forwards',
        fadeInBottom: 'fadeInBottom 1s ease-out forwards',
        zoomInUp: 'zoomInUp 1s ease-out forwards',
        fadeDownRight: 'fadeDownRight 1s ease-out forwards',
        fadeDownLeft: 'fadeDownLeft 1s ease-out forwards',
        jump: 'jump 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
