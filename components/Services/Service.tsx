"use client";

import { DotPattern } from "../magicui/dot-pattern";
import { cn } from "@/lib/utils";
import ServicesCard from "./ServicesCard";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { services } from "@/data/services"; 
import SectionTitle from "../shared/CustomStyle/SectionTitle/SectionTitle";

const Service = () => {
  return (
    <section
      id="services"
      className="section-continar pt-4 pb-20"
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
          <ShinyButton>Our Expertise</ShinyButton>
          <SectionTitle
            heading="Innovative UI/UX & Web Solutions"
            subHeading="Empowering brands through creative design and cutting-edge technology to deliver engaging, user-centric digital experiences."
          />
        </div>

        <div className="d-grid gap-6">
          {services.map((service, index) => (
            <ServicesCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
