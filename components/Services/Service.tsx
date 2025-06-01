"use client";

import { DotPattern } from "../magicui/dot-pattern";
import { cn } from "@/lib/utils";
import ServicesCard from "./ServicesCard";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { services } from "@/data/services"; 
import SectionTitle from "../shared/CustomStyle/SectionTitle/SectionTitle";
import { ServerIcon } from "@heroicons/react/24/outline";

 
const Service = () => {
  return (
    <section
      id="services"
      className="section-continar pt-4 pb-20 border"
    >
      <div className="wrapper">
        <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      />

      <div className="text-center relative z-10 mb-10">
        <ShinyButton>Services</ShinyButton>
        <SectionTitle
         heading="Crafting Impactful Digital Experiences"

         subHeading="Turning bold ideas into beautiful, high-performance web solutions—
          powered by modern technology and thoughtful design."
         ></SectionTitle>
      </div>

      <div className="relative z-10 d-grid gap-6">
        {services.map(({ icon, title, description }, index) => (
          <ServicesCard
            key={index}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>


    </section>
  );
};

export default Service;