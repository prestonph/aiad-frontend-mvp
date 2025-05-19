import Hero from "@/components/Hero/Hero";
import Pricing from "@/components/Pricing/Pricing";
import React from "react";
import { VideoGallery } from "@/components/elements/video-gallery";
import { Brands } from "@/components/sections/brands";
import { brandData } from "@/data/brands";
import { videoGalleryData } from "@/data/videoGallery";
import { HowItWorksData } from "@/data/how-it-works";
import { Process } from "@/components/sections/how-it -works";

function Dashboard() {
  return (
    <section>
      <Hero />
      <VideoGallery items={videoGalleryData} />
      <Brands brand={brandData} />
      <Process process={HowItWorksData} />
      <Pricing />
    </section>
    
  );
}

export default Dashboard;
