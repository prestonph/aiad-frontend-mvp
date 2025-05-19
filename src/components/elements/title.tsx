import { markdownify } from '@/lib/convert'
import { cn } from '@/lib/utils'

type Props = {
	text: string
	className?: string
	html?: boolean
	heading?: boolean
}

export const Title = ({ text, className, html = false, heading = false }: Props) => (
	<>
		{heading ? (
			html ? (
				<h1
					className={cn(
						'text-[30px] md:text-[40px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] [&>img]:inline-block',
						className
					)}
					dangerouslySetInnerHTML={markdownify(text)}
				/>
			) : (
				<h1
					className={cn(
						'text-[30px] md:text-[40px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px]',
						className
					)}
				>
					{text}
				</h1>
			)
		) : html ? (
			<h2
				className={cn('sec_title1 [&>img]:inline-block', className)}
				dangerouslySetInnerHTML={markdownify(text)}
			/>
		) : (
			<h2 className={cn('sec_title1', className)}>{text}</h2>
		)}
	</>
)
