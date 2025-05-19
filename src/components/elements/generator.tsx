import { Button } from '@/components/ui/button'
import { Input, InputColor } from '@/components/ui/input'

export const Generator = () => (
	<form
		className='max-w-[860px] bg-white rounded-full flex gap-[10px] md:gap-[20px] mx-auto has_fade_anim'
		data-delay='0.60'
	>
		<Input
			type='text'
			placeholder='Get started by entering your products website URL'
			className='p-0 px-[15px] md:px-[30px] border-0 bg-transparent text-black w-full h-auto text-[14px] md:text-[18px] placeholder:font-light placeholder:text-[#A1A9AE]'
		/>
		<Button
			variant='primary2'
			className='hover:bg-btn-bg-main m-[5px] text-[12px] md:text-[16px]'
		>
			<span className='btn-span' data-text='Generate'>
				Generate
			</span>
		</Button>
	</form>
)
