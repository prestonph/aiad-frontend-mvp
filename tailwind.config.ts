import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: '',
	theme: {
    	container: {
    		center: true
    	},
    	extend: {
    		colors: {
    			border: 'hsl(var(--border))',
    			'menu-arrow': 'hsl(var(--menu-arrow))',
    			'menu-arrow-active': 'hsl(var(--menu-arrow-active))',
    			'menu-menu-foreground': 'hsl(var(--menu-foreground))',
    			default: {
    				'50': 'hsl(var(--default-50) / <alpha-value>)',
    				'100': 'hsl(var(--default-100) / <alpha-value>)',
    				'200': 'rgb(18 27 33 / var(--tw-bg-opacity, 1))',
    				'300': 'hsl(var(--default-300) / <alpha-value>)',
    				'400': 'hsl(var(--default-400) / <alpha-value>)',
    				'500': 'hsl(var(--default-500) / <alpha-value>)',
    				'600': 'hsl(var(--default-600) / <alpha-value>)',
    				'700': 'hsl(var(--default-700) / <alpha-value>)',
    				'800': 'hsl(var(--default-800) / <alpha-value>)',
    				'900': 'hsl(var(--default-900) / <alpha-value>)',
    				'950': 'hsl(var(--default-950) / <alpha-value>)',
    				DEFAULT: 'hsl(var(--default) / <alpha-value>)',
    				foreground: 'hsl(var(--default-foreground) / <alpha-value>)'
    			},
    			black: {
    				'2': 'var(--black-2)',
    				DEFAULT: 'var(--black)',
    				'old-2': 'var(--black-old-2)'
    			},
    			white: {
    				'2': 'var(--white-2)',
    				'3': 'var(--white-3)',
    				DEFAULT: 'var(--white)'
    			},
    			theme: {
    				'100': 'var(--theme-100)',
    				'300': 'var(--theme-300)',
    				DEFAULT: 'var(--theme)'
    			},
    			primary: {
    				'50': 'var(--primary-50)',
    				'100': 'var(--primary-100)',
    				'200': 'var(--primary-200)',
    				'300': 'var(--primary-300)',
    				'400': 'var(--primary-400)',
    				'500': 'var(--primary-500)',
    				'600': 'var(--primary-600)',
    				'700': 'var(--primary-700)',
    				'800': 'var(--primary-800)',
    				'900': 'var(--primary-900)',
    				'950': 'var(--primary-950)',
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			action: {
    				DEFAULT: 'var(--action)'
    			},
    			gray: {
    				'2': 'var(--gray-2)',
    				DEFAULT: 'var(--gray)'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			success: {
    				DEFAULT: 'hsl(var(--success) / <alpha-value>)',
    				foreground: 'hsl(var(--success-foreground) / <alpha-value>)'
    			},
    			info: {
    				DEFAULT: 'hsl(var(--info) / <alpha-value>)',
    				foreground: 'hsl(var(--info-foreground) / <alpha-value>)'
    			},
    			warning: {
    				DEFAULT: 'hsl(var(--warning) / <alpha-value>)',
    				foreground: 'hsl(var(--warning-foreground) / <alpha-value>)'
    			},
    			sec_bg: {
    				'2': 'var(--sec_bg-2)',
    				'3': 'var(--sec_bg-3)',
    				DEFAULT: 'var(--sec_bg)'
    			},
    			btn: {
    				'bg-main': 'var(--btn-bg-main)',
    				'bg-hover': 'var(--btn-bg-hover)',
    				'text-main': 'var(--btn-text-main)',
    				'text-hover': 'var(--btn-text-hover)',
    				'bg-hover2': 'var(--btn2-bg-hover)',
    				'text-hover2': 'var(--btn2-text-hover)',
    				border: 'var(--btn-border)'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar))'
    			},
    			header: {
    				DEFAULT: 'hsl(var(--header))'
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
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			theme: '20px',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		fontFamily: {
    			primary: [
    				'DM Sans',
    				'sans-serif'
    			],
    			plus_jakarta_sans: [
    				'Plus Jakarta Sans',
    				'sans-serif'
    			]
    		},
    		keyframes: {
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
    			characters: {
    				'0%,75%,100%': {
    					opacity: '0',
    					transform: 'rotateY(-90deg)'
    				},
    				'25%,50%': {
    					opacity: '1',
    					transform: 'rotateY(0deg)'
    				}
    			},
    			'wc-y-anim': {
    				'0%': {
    					transform: 'translateY(-30px)'
    				},
    				'100%': {
    					transform: 'translateY(0)'
    				}
    			}
    		},
    		animation: {
    			'wc-y-anim': 'wc-y-anim 3s ease-in-out infinite alternate'
    		},
    		transformOrigin: {
    			'origin-1': '50% 0'
    		},
    		backgroundImage: {
    			'gradient-180': 'linear-gradient(180deg, var(--tw-gradient-stops))',
    			'gradient-92': 'linear-gradient(91.59deg, var(--tw-gradient-stops))',
    			'gradient-120': 'linear-gradient(120.51deg, var(--tw-gradient-stops))',
    			'gradient-160': 'linear-gradient(160deg, var(--tw-gradient-stops))',
    			'gradient-105': 'linear-gradient(105.52deg, var(--tw-gradient-stops))',
    			'gradient-89': 'linear-gradient(89.68deg, var(--tw-gradient-stops))',
    			'gradient-105-full': 'linear-gradient(105.52deg, #FF856A 0%, #FFED4E 34%, #4BFFF4 69%, #7F52FF 100%)',
    			'gradient-135-full': 'linear-gradient(135deg, rgba(255, 133, 107, 1) 0%, rgba(255, 228, 69, 1) 33%, rgba(81, 252, 255, 1) 66%, rgba(125, 89, 255, 1) 100%)'
    		},
    		boxShadow: {
    			integration: '10px 10px 45px rgba(0, 0, 0, 0.07)',
    			base: '0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)',
    			base2: '0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)',
    			base3: '16px 10px 40px rgba(15, 23, 42, 0.22)',
    			deep: '-2px 0px 8px rgba(0, 0, 0, 0.16)',
    			dropdown: '0px 4px 8px rgba(0, 0, 0, 0.08)',
    			testi: '0px 4px 24px rgba(0, 0, 0, 0.06)',
    			todo: 'rgba(235 233 241, 0.6) 0px 3px 10px 0px'
    		},
    		dropShadow: {
    			'1': '0px 30px 30px rgba(28, 32, 49, 0.13)',
    			'2': '0px -30px 50px rgba(40, 41, 54, 0.15)',
    			'3': '0px 40px 50px rgba(23, 34, 63, 0.1)',
    			'4': '0px 40px 50px rgba(34, 40, 72, 0.08)'
    		},
    		variants: {
    			space: [
    				'responsive',
    				'direction'
    			]
    		}
    	}
    },
	plugins: [require('tailwindcss-animate'), require('@xpd/tailwind-3dtransforms')],
} satisfies Config

export default config

