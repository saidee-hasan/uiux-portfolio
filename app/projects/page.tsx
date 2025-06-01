import { ShinyButton } from "@/components/magicui/shiny-button";
import SectionTitle from "@/components/shared/CustomStyle/SectionTitle/SectionTitle";
import { projects } from "@/data/projects";
import { ProjestCard } from "@/components/Projests/ProjestCard";
import AllProject from "@/components/Projests/AllProject";
import { RainbowButton } from '@/components/magicui/rainbow-button';
import Link from "next/link";

const Projects = () => {
  return (
    <section id="project" className="section-continar pt-4 pb-20 ">
      <div className="wrapper bg-black/60">
        <div className="text-center relative z-10 mb-10">
          <ShinyButton>Project</ShinyButton>
          <SectionTitle
            heading="Showcase of My Work"
            subHeading="Explore a collection of projects that showcase my growth and commitment to building impactful, user-focused web solutions."
          />
        </div>
        {/* More content here */}
        <div className="relative z-10 d-grid gap-6 shadow-2xl">
          {projects.map((project, index) => (
            <ProjestCard key={index} {...project} />
          ))}
        </div>


        <AllProject/>
      </div>
    </section>
  );
};

export default Projects;
