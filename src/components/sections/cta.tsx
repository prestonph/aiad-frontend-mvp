import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ActionBtnType } from '@/types'
import { SectionWrapper } from '../wrapper/section-wrapper'
import { TitleSection } from './title-section'

type Props = {
	cta: {

			title: string
			details: string
			action_btn: ActionBtnType
	}
	className?: string
	btnClassName?: string
	animatedBtn?: boolean
}

export const CTA = ({ cta, className, btnClassName, animatedBtn = false }: Props) => {
	const { title, details, action_btn } = cta
	return (
		<section
			className={cn(
				'sec_space_bottom1 pt-[50px] md:pt-[80px] xl:pt-[110px] 2xl:pt-[180px]',
				className
			)}
		>
			<SectionWrapper>
				<TitleSection title={title} details={details} html titleClassName='max-w-[650px]' />
				{action_btn && action_btn.enable && (
					<div className='mt-[33px] xl:mt-[43px] flex justify-center items-center has_fade_anim'>
						<Link
							href={action_btn.link}
							className={cn(buttonVariants({ variant: 'outline' }), btnClassName)}
						>
							{animatedBtn ? (
								<span className='btn-span' data-text={action_btn.label}>
									{action_btn.label}
								</span>
							) : (
								action_btn.label
							)}
						</Link>
					</div>
				)}
			</SectionWrapper>
		</section>
	)
}
