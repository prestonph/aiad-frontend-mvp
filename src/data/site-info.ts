type Logo = {
	width: number
	height: number
	text?: string
	getSrc: (type: LogoType) => string
	type: {
		default: string
		detailed: string
	}
}

export enum LogoType {
	default = 'default',
	detailed = 'detailed',
}

export const title = 'Ads Video AI'
export const description =
	'Ads Video AI is a real early-stage AI video app that scales with you, check out our stage program.'
export const baseUrl = 'snapifyapp.com'

export const socials = [
	{
		name: 'Fb',
		link: 'https://www.facebook.com/',
		value: '750,000',
	},
	{
		name: 'Tw',
		link: 'https://twitter.com/',
		value: '750,000',
	},
	{
		name: 'In',
		link: 'https://www.instagram.com/',
		value: '750,000',
	},
	{
		name: 'Li',
		link: 'https://www.behance.net/',
		value: '750,000',
	},
]

export const logo: Logo = {
	getSrc: (type) => `/assets/imgs/logo/${type}.png`,
	width: 115,
	height: 32,
	type: {
		default: 'logo',
		detailed: 'logo-detailed',
	},
}

export const publicFooterLinks = [
	{
		name: 'About',
		path: '#',
	},
	{
		name: 'Contact Us',
		path: '#',
	},
]
