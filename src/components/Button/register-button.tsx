'use client'

import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

interface RegisterButtonProps {
	className?: string
}

export const RegisterButton = ({ className }: RegisterButtonProps) => {
	const router = useRouter()

	const onClick = () => {
		router.push('/register')
	}

	return (
		<Button
			variant='primary'
			size='sm'
			onClick={onClick}
			className={cn(
				className,
				'md:block rounded-[10px] border-2 border-theme hover:bg-transparent'
			)}
		>
			<span>Sign up</span>
		</Button>
	)
}
