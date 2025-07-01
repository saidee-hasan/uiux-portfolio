import { ShinyButton } from "@/components/magicui/shiny-button";
import SectionTitle from "@/components/shared/CustomStyle/SectionTitle/SectionTitle";
import SignupFormDemo from "../signup-form-demo";


export default function Contacts() {
  return (
     <section id="project" className="section-continar pt-4 pb-20 ">
      <div className="wrapper">
        <div className="text-center relative z-0 mb-10">

    <ShinyButton>Let&apos;s Contact</ShinyButton>

        <SectionTitle
        heading="Let’s Collaborate and Begin the work"
        subHeading="Explore a collection of projects that showcase my growth and commitment to building impactful, user-focused web solutions."
        />
      
      {/* forom  */}
       <SignupFormDemo/>

    </div>
    </div>
</section>
  );
}
