'use client'

import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import hasFadeAnim from '@/lib/animation/hasFadeAnim'

type Props = {
	children: React.ReactNode
	className?: string
}

export const SectionWrapper = ({ children, className }: Props) => {
	const containerRef = useRef<HTMLDivElement>(null!)

	useGSAP(
		() => {
			hasFadeAnim()
		},
		{ scope: containerRef }
	)

	return (
		<div className={className ?? 'container'} ref={containerRef}>
			{children}
		</div>
	)
}
