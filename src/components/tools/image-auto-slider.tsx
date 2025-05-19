import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { cn } from '@/lib/utils'

type Props = {
	slides: string[]
	identity?: string
	spreed?: number
	width?: number
	height?: number
	className?: string
}

export const ImageAutoSlider = ({
	slides,
	identity = 'brand_logo',
	spreed = 60,
	width = 183,
	height = 39,
	className,
}: Props) => (
	<div dir='ltr'>
		{slides && slides.length && (
			<div>
				<Marquee speed={spreed} direction='left'>
					{slides.map((slide, i) => (
						<div
							className={cn('me-[40px] lg:me-[60px] xl:me-[116px]', className)}
							key={`${identity}-${i}`}
						>
							<Image
								width={width}
								height={height}
								className='w-auto'
								style={{ height: height }}
								src={slide}
								alt='Brand Logo'
							/>
						</div>
					))}
				</Marquee>
			</div>
		)}
	</div>
)
