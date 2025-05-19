import Hero from "@/components/Hero/Hero";
import React from "react";
import { VideoGallery } from "@/components/elements/video-gallery";
import { Brands } from "@/components/sections/brands";
import { brandData } from "@/data/brands";
import { videoGalleryData } from "@/data/videoGallery";
import { HowItWorksData } from "@/data/how-it-works";
import { Process } from "@/components/sections/how-it -works";
import { CTA } from "@/components/sections/cta";
import { ctadata } from "@/data/cta";
import { Pricing } from "@/components/sections/pricing";
import { PricingData } from "@/data/pricing";
import { Separator } from "@/components/ui/seperator";
import { FeatureSection } from "@/components/sections/feature-section";
import { featureData } from "@/data/feature";

function Dashboard() {
  return (
    <section>
      <Hero />
      <VideoGallery items={videoGalleryData} />
      <Brands brand={brandData} />
      <FeatureSection feature={featureData} />
      <Process process={HowItWorksData} />
      <Pricing pricing={PricingData} />
      <Separator className='bg-[#252D33] my-8 container' />
      <CTA
        cta={ctadata}
        className="pt-[50px] md:pt-[75px] xl:pt-[100px] 2xl:pt-[124px] sec_space_bottom3"
        btnClassName="rounded-full border border-[#41494D] hover:border-transparent text-white"
        animatedBtn
      />
    </section>
  );
}

export default Dashboard;
