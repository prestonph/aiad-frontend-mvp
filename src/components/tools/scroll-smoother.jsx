'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { usePathname } from 'next/navigation'
import ScrollSmootherPlugin from "./../../../public/plugins/ScrollSmoother.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmootherPlugin)

export const ScrollSmoother = () => {
	const pathname = usePathname()
	let history = ''

	useGSAP(() => {
		if (history !== pathname) {
			try {
				let device_width = window.innerWidth
				ScrollSmootherPlugin.create({
					smooth: 1,
					effects: device_width < 1025 ? false : true,
					smoothTouch: false,
					normalizeScroll: false,
					ignoreMobileResize: true,
				})
			} catch (e) {
				console.log('scrollSmootherError', e)
			}
		}
	}, [])
	return <div></div>
}
