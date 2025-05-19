import Image from 'next/image'
import { delayTime } from '../../lib/delayTime'
import { SectionWrapper } from '../wrapper/section-wrapper'
import { TitleSection } from './title-section'

type Props = {
	process: {
		
			title: string
			details: string
			items: {
				name: string
				details: string
				icon: string
			}[]
	}
}

export const Process = ({ process }: Props) => {
	const { title, details, items } = process
	return (
		<section className='sec_space_top4'>
			<SectionWrapper>
				<TitleSection title={title} details={details} html />
				{items && items.length && (
					<div className='mt-[60px] flex justify-start lg:justify-between flex-wrap gap-[30px] '>
						{items.slice(0, 3).map((item, i) => (
							<div
								key={`process_item-${i}`}
								className='max-w-full md:max-w-[47%] lg:max-w-[280px] text-center relative bg-[#ebedef36] lg:bg-transparent p-[30px] lg:p-0 rounded-theme lg:rounded-0 has_fade_anim'
								data-delay={delayTime(i + 1)}
							>
								{i === 0 && (
									<div className='hidden xl:block absolute start-full top-[55%] w-1/2 2xl:w-full -translate-y-1/2'>
										<Image
											width={183}
											height={128}
											src='/Assets/how-it-works/shape-1.png'
											alt='shape'
										/>
									</div>
								)}
								{i === 1 && (
									<div className='hidden xl:block absolute start-full top-[23%] w-1/2 2xl:w-full -translate-y-1/2'>
										<Image
											width={183}
											height={128}
											src='/Assets/how-it-works/shape-2.png'
											alt='shape'
										/>
									</div>
								)}
								<div className='w-[60px] h-[60px] lg:w-[92px] lg:h-[92px] mx-auto flex justify-center items-center border border-[#0720321a] rounded-theme mb-[25px] lg:mb-[45px]'>
									<Image
										width={28}
										height={34}
										src={item.icon}
										className='max-w-[20px] lg:max-w-[28px]'
										alt='icon'
									/>
								</div>
								<div className='mb-[15px] md:mb-[25px] max-w-full lg:max-w-[60%] mx-auto'>
									<h2 className='text-[25px]'>{item.name}</h2>
								</div>
								<p className='text'>{item.details}</p>
							</div>
						))}
					</div>
				)}
			</SectionWrapper>
		</section>
	)
}
