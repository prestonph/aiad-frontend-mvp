import React from 'react'
import { cn } from '@/lib/utils'
import { Title } from '@/components/elements/title'

type Props = {
	title: string
	sub_title?: string
	details: string
	heading?: boolean
	html?: boolean
	className?: string
	titleClassName?: string
	detailsClassName?: string
	subTitleClassName?: string
}

export const TitleSection = ({
	title,
	sub_title,
	details,
	heading = false,
	html = false,
	className,
	titleClassName,
	detailsClassName,
	subTitleClassName,
}: Props) => (
	<div className={cn('text-center', className)}>
		{sub_title && (
			<div>
				<span
					className={cn(
						'text-[12px] font-bold uppercase text-primary bg-[#EAFAF2] px-[16px] py-[8px] inline-block rounded-[10px] mb-[17px] has_fade_anim',
						subTitleClassName
					)}
				>
					{sub_title}
				</span>
			</div>
		)}
		<Title
			text={title}
			heading={heading}
			html={html}
			className={cn('max-w-[565px] mx-auto has_fade_anim', titleClassName)}
		/>
		<p
			className={cn(
				'mt-[23px] lg:mt-[33px] max-w-[550px] mx-auto has_fade_anim',
				detailsClassName
			)}
		>
			{details}
		</p>
	</div>
)
