export type ActionBtnType = {
	enable: boolean
	label: string
	link: string
}

export type ServiceDetailsType = {
	title: string
	short_description: string
	image: string
}

export type PricingCardType = {
	name: string
	key?: string
	popular?: boolean
	price: string
	price_label?: string
	sub_title?: string
	features: {
		name: string
		enable: boolean
	}[]
	action_btn: ActionBtnType
	button_color?: string
}

export type SingleBlogType = {
	data: {
		title: string
		image: string
		date: string
	}
	content: string
	slug: string
}
