
import { BorderBeam } from "@/components/magicui/border-beam";
import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import SectionTitle from "@/components/shared/CustomStyle/SectionTitle/SectionTitle";
import { projects } from "@/data/projects";
import ProjestCard from "@/components/ProjestCard/ProjestCard";

const Projects = () => {
  return (

    <section
      id="project"
      className="section-continar pt-4 pb-20 border"
    >
      <div className="wrapper">
      <div className="text-center relative z-10 mb-10">
        <ShinyButton>Project</ShinyButton>
        <SectionTitle
         heading="Showcase of My Work"

         subHeading="Explore a collection of projects that showcase my growth and commitment to building impactful, user-focused web solutions."
         ></SectionTitle>
      </div>

      <div className="relative z-10 d-grid gap-6">
        {projects.map(({ title, description, technologies, githubLink, image }, index) => (
          <ProjestCard
            key={index}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>


    </section>
  );
};

export default Projects;
