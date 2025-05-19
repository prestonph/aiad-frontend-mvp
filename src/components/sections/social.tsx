import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { cn } from '@/lib/utils'

type SocialType = {
	name: string
	link: string
	value?: string
}

type Props = {
	item: SocialType
	className?: string
}

export const SocialShare = ({ item, className }: Props) => {
	switch (item.name) {
		case 'Fb':
			return (
				<Link
					href={item.link}
					target='_blank'
					key={item.link}
					className={cn('relative z-10', className)}
				>
					<FaFacebookF />
				</Link>
			)
		case 'Tw':
			return (
				<Link
					href={item.link}
					target='_blank'
					key={item.link}
					className={cn('relative z-10', className)}
				>
					<FaTwitter />
				</Link>
			)
		case 'In':
			return (
				<Link
					href={item.link}
					target='_blank'
					key={item.link}
					className={cn('relative z-10', className)}
				>
					<FaInstagram />
				</Link>
			)
		case 'Li':
			return (
				<Link
					href={item.link}
					target='_blank'
					key={item.link}
					className={cn('relative z-10', className)}
				>
					<FaLinkedin />
				</Link>
			)
	}
}
