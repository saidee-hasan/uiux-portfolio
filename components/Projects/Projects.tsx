import { ShinyButton } from "@/components/magicui/shiny-button";
import SectionTitle from "@/components/shared/CustomStyle/SectionTitle/SectionTitle";
import { projects } from "@/data/projects";
import { ProjestCard } from "@/components/Projects/ProjestCard";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="project" className="section-continar pt-4 pb-20">
      <div className="wrapper ">
        <div className="text-center relative z-10 mb-10">
          <ShinyButton>Projects</ShinyButton>
          <SectionTitle
            heading="Our Portfolio of Impactful Work"
            subHeading="Discover our expertly crafted projects that blend creativity, innovation, and user-centered design to elevate brands and digital experiences."
          />
        </div>

        <div className="relative z-10 d-grid gap-6 shadow-2xl">
          {projects.slice(0, 6).map((project, index) => (
            <ProjestCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <RainbowButton variant="outline">Explore All Projects</RainbowButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
