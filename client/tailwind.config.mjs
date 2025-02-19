/** @type {import('tailwindcss').Config} */
export default {
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
        'genie': {
          'primary': '#EED45E',    // Gold
          'secondary': '#D4B84B',  // Darker gold
          'accent': '#EED45E',     // Gold
          'glow': '#F5E6A5'        // Light gold glow
        }
      },
      animation: {
        'genie-shine': 'shine 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite'
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-500% 0' },
          '100%': { backgroundPosition: '500% 0' }
        }
      }
    },
  },
  plugins: [],
};
