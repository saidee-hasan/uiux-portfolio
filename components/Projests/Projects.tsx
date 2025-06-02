import { ShinyButton } from "@/components/magicui/shiny-button";
import SectionTitle from "@/components/shared/CustomStyle/SectionTitle/SectionTitle";
import { projects } from "@/data/projects";
import { ProjestCard } from "@/components/Projests/ProjestCard";
import { RainbowButton } from "@/components/magicui/rainbow-button";
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
          {projects.slice(0, 6).map((project, index) => (
            <ProjestCard key={index} {...project} />
          ))}
        </div>

        {/* AllProject button  */}
        <div className="text-center mt-12">
          <Link href="/projects">
            <RainbowButton variant="outline">See All Project</RainbowButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
