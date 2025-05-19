import Link from 'next/link'
import { description, LogoType, socials } from '@/data/site-info'
import { SocialShare } from '../sections/social'
// import { Logo } from './logo'

type Props = {
	footerNav: {
		name: string
		path: string
	}[]
}

export const Footer = ({ footerNav }: Props) => (
	<footer className='bg-[#121B21] pt-[56px] xl:pt-[96px] 2xl:pt-[146px] pb-[51px] xl:pb-[91px] 2xl:pb-[141px]'>
		<div className='container'>
			<div className='flex flex-col md:flex-row justify-between items-center gap-x-[80px] gap-y-[30px] text-center md:text-start'>
				<div>
					{/* <Logo customHeight={50} customWidth={180} type={LogoType.detailed} /> */}
					<h2 className="font-extrabold text-2xl text-white">
                    Ads Video AI
                  </h2>
				</div>
				<div className='max-w-[365px] lg:max-w-[665px]'>
					<p>{description}</p>
				</div>
			</div>
			<div className='flex justify-between items-center flex-col md:flex-row gap-x-[80px] gap-y-[30px] pt-[44px] mt-[44px] border-t border-[#252D33]'>
				<div>
					{footerNav && footerNav.length && (
						<ul className='flex flex-wrap gap-x-[40px] gap-y-[5px] justify-center md:justify-start'>
							{footerNav.map((item, i) => (
								<li
									key={`footer_nav-${i}`}
									className='text-[18px] leading-[30px] text-secondary hover:text-primary hover:tracking-wide transition-all duration-300'
								>
									<Link href={item.path}>{item.name}</Link>
								</li>
							))}
						</ul>
					)}
				</div>
				<div>
					{socials?.length && (
						<ul className='flex gap-[24px]'>
							{socials.map((item, i) => (
								<li
									key={`social_share-${i}`}
									className='leading-none text-secondary'
								>
									<SocialShare item={item} className='hover:text-primary' />
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	</footer>
)
