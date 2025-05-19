import { cn } from "@/lib/utils";
import { ImageAutoSlider } from "../tools/image-auto-slider";
import { SectionWrapper } from "../wrapper/section-wrapper";

type Props = {
  brand: string[];
  className?: string;
};



export const Brands = ({ brand, className }: Props) => (
  <div className={cn("sec_space_top3 sec_space_bottom4", className)}>
    <SectionWrapper>
      <div className="text-center">
        <h2 className="text-2xl lg:text-2xl font-bold mb-16">
        Trusted by 1000+ brands and professionals worldwide.
        </h2>
      </div>
      <div className="has_fade_anim">
        <ImageAutoSlider slides={brand} />
      </div>
    </SectionWrapper>
  </div>
);
