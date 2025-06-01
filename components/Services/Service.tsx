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
      className="relative-overflo px-5 lg:px-8 xl:px-[8%]  bg-black"
    >
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

      <div className="text-center mb-20 relative z-10 mt-10">
        <ShinyButton>Services</ShinyButton>
        <SectionTitle
         heading="Crafting Impactful Digital Experiences"
         subHeading=" Turning bold ideas into beautiful, high-performance web solutions—
          powered by modern technology and thoughtful design."
         ></SectionTitle>
        {/* <h2 className="mt-3 ">
          
        </h2>
        <p className="">
         
        </p> */}

      </div>

      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon, title, description }, index) => (
          <ServicesCard
            key={index}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;