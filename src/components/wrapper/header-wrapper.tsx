'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/utils/utils'

type Props = {
	children: React.ReactNode
}

export const HeaderWrapper = ({ children }: Props) => {
	const [scroll, setScroll] = useState<boolean>(false)

	useEffect(() => {
		window.addEventListener('scroll', scrollHeader)
	}, [])

	const scrollHeader = () => {
		if (window.scrollY >= 20) {
			setScroll(true)
		} else {
			setScroll(false)
		}
	}

	return (
		<header
			className={cn(
				scroll ? 'fixed backdrop-blur-md' : 'absolute',
				'top-0 left-0 w-full z-[99]'
			)}
		>
			{children}
		</header>
	)
}
