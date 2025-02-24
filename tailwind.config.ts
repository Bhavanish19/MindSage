//@ts-nocheck

import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	extend: {
  		colors: {
  			youtube: '#FF0000',
  			twitter: '#1DA1F2',
  			discord: '#5865F2',
  			github: '#181717',
  			green: {
  				'500': '#24AE7C',
  				'600': '#0D2A1F'
  			},
  			blue: {
  				'500': '#79B5EC',
  				'600': '#152432'
  			},
  			red: {
  				'500': '#F37877',
  				'600': '#3E1716',
  				'700': '#F24E43'
  			},
  			light: {
  				'200': '#E8E9E9'
  			},
  			dark: {
  				'200': '#0D0F10',
  				'300': '#131619',
  				'400': '#1A1D21',
  				'500': '#363A3D',
  				'600': '#76828D',
  				'700': '#ABB8C4'
  			},
  			blue100: '#3821E8',
  			black100: '#23242C',
  			black200: '#1E1F27',
  			black300: '#393A42',
  			purple100: '#9282FA',
  			purple200: '#7865F9',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			'color-1': 'hsl(var(--color-1))',
  			'color-2': 'hsl(var(--color-2))',
  			'color-3': 'hsl(var(--color-3))',
  			'color-4': 'hsl(var(--color-4))',
  			'color-5': 'hsl(var(--color-5))'
  		},
  		fontFamily: {
  			heading: ["var(--font-dmsans)"],
  			default: ["var(--font-inter)"],
  			heading2: ["var(--font-sora)"],
  			sans: ["var(--font-sfpro)"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			grid: {
  				'0%': {
  					transform: 'translateY(-50%)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			loader: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			pump: {
  				'0%, 100%': {
  					transform: 'scale(0.8)'
  				},
  				'50%': {
  					transform: 'scale(1)'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			rainbow: {
  				'0%': {
  					'background-position': '0%'
  				},
  				'100%': {
  					'background-position': '200%'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			loader: 'spin 0.5s linear infinite',
  			pump: 'pump 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			grid: 'grid 15s linear infinite',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			rainbow: 'rainbow var(--speed, 2s) infinite linear'
  		},
		  backgroundImage: {
			therapy: "url('/images2/talking-1.jpg')",
			books: "url('/files/books.jpg')",
			yoga: "url('/files/yoga.webp')",
			'light-pattern': "url('/light-pattern.svg')",
			'dark-pattern': "url('/dark-pattern.svg')"
		  },
		  
  		backgroundSize: {
  			'1': '1rem',
  			'2': '2rem',
  			'3': '3rem',
  			auto: 'auto',
  			cover: 'cover',
  			contain: 'contain',
  			verySmall: '0.5rem'
  		},
  		boxShadow: {
  			grid: '0px 4px 10px 0px rgba(0, 0, 0, 0.05);'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config;

export default config;
