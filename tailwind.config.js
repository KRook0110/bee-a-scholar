/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,jsx,tsx,ts}"],
  theme: {
  	fontFamily: {
  		display: ["Poppins", "sans-serif"],
  		body: ["Questrial", "sans-serif"]
  	},
  	extend: {
  		borderRadius: {
  			DEFAULT: '8px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        primary: {
          light: "#3089D6",
          DEFAULT: "#1C429A",
          dark: "#03081B",
        },
        secondary: {
          light: "#FFD690",
          DEFAULT: "#FFBD5A", 
          dark: "#EDA740",
        },
        lightBlue: {
          DEFAULT: "#63B8F6",
        },
        // background: {
        //     DEFAULT: "#f5f5f5",
        //     900 :
        // }
        background: colors.neutral,
        alert: colors.red,
       
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
