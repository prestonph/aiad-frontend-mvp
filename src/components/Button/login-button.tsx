'use client'

import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

interface LoginButtonProps {
	className?: string
}

export const LoginButton = ({ className }: LoginButtonProps) => {
	const router = useRouter()

	const onClick = () => {
		router.push('/login')
	}

	return (
		<Button
			variant='outline3'
			size='sm'
			onClick={onClick}
			className={cn(className, 'rounded-[10px] text-white')}
		>
			<span>Login</span>
		</Button>
	)
}
