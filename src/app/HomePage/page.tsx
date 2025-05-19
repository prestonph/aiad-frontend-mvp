import Hero from "@/components/Hero/Hero";
import Pricing from "@/components/Pricing/Pricing";
import React from "react";
import { VideoGallery } from "@/components/elements/video-gallery";
import { Brands } from "@/components/sections/brands";
import { brandData } from "@/data/brands";
import { videoGalleryData } from "@/data/videoGallery";
import { HowItWorksData } from "@/data/how-it-works";
import { Process } from "@/components/sections/how-it -works";
import { CTA } from "@/components/sections/cta";
import { ctadata } from "@/data/cta";

function Dashboard() {
  return (
    <section>
      <Hero />
      <VideoGallery items={videoGalleryData} />
      <Brands brand={brandData} />
      <Process process={HowItWorksData} />
      <Pricing />
      <CTA
							cta={ctadata}
							className='pt-[50px] md:pt-[75px] xl:pt-[100px] 2xl:pt-[124px] sec_space_bottom3'
							btnClassName='rounded-full border border-[#41494D] hover:border-transparent text-white'
							animatedBtn
						/>
    </section>
    
  );
}

export default Dashboard;
