import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			gridTemplateColumns: {
				'18': 'repeat(18, minmax(0, 1fr))',
			},
			colors: {
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
				'element': {
					'hydrogen': '#06b6d4',
					'alkali': '#dc2626',
					'alkaline-earth': '#ea580c',
					'transition': '#2563eb',
					'post-transition': '#059669',
					'metalloid': '#7c3aed',
					'nonmetal': '#0891b2',
					'halogen': '#16a34a',
					'noble-gas': '#e11d48',
					'lanthanide': '#f97316',
					'actinide': '#dc2626',
					'unknown': '#6b7280',
				},
				// Element category colors - light mode
				alkali: '#ff6e6c',
				alkaline: '#ffc15e',
				transition: '#88d9e6',
				post_transition: '#b0a3f5',
				metalloid: '#8adbbc',
				nonmetal: '#7dace4',
				noble: '#f2b5d4',
				lanthanide: '#ffa69e',
				actinide: '#ff7e5f',
				unknown: '#c7c7c7',
				
				// Dark mode element colors (slightly brighter for contrast)
				'dark-alkali': '#ff8a88',
				'dark-alkaline': '#ffd17e',
				'dark-transition': '#a8e9f6',
				'dark-post_transition': '#d0c3ff',
				'dark-metalloid': '#aaebdc',
				'dark-nonmetal': '#9dbcf4',
				'dark-noble': '#f2c5e4',
				'dark-lanthanide': '#ffb6ae',
				'dark-actinide': '#ff9e7f',
				'dark-unknown': '#e7e7e7',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'radioactive-pulse': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '1',
					},
					'50%': {
						transform: 'scale(1.1)',
						opacity: '0.8',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
				'scale-in': 'scale-in 0.2s ease-out',
				'slide-up': 'slide-up 0.3s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'radioactive': 'radioactive-pulse 2s infinite',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
