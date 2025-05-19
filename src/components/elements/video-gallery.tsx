import { SectionWrapper } from '../wrapper/section-wrapper'

type Props = {
	items: string[]
}

export const VideoGallery = ({ items }: Props) => (
	<div className='pt-[17px] relative'>
		<SectionWrapper className='container 2xl:max-w-[1750px]'>
			{items && items.length && (
				<div className='grid gap-[15px] xl:gap-[30px] 2xl:gap-[40px] grid-cols-2 md:grid-cols-4'>
					{items.map((item, i) => (
						<div
							key={`gallery_item-${i}`}
							className='rounded-theme overflow-hidden inline-block first:translate-y-0 md:first:-translate-y-[30px] xl:first:-translate-y-[60px] 2xl:first:-translate-y-[90px] last:translate-y-0 md:last:-translate-y-[30px] xl:last:-translate-y-[60px] 2xl:last:-translate-y-[90px] has_fade_anim'
							data-fade-offset='0'
						>
							<video
								src={item}
								autoPlay
								loop
								muted
								className='w-full h-full object-cover rounded-theme'
							></video>
						</div>
					))}
				</div>
			)}
		</SectionWrapper>
	</div>
)
