import { ShinyButton } from "@/components/magicui/shiny-button";
import SectionTitle from "@/components/shared/CustomStyle/SectionTitle/SectionTitle";
import SignupFormDemo from "../signup-form-demo";


export default function Contacts() {
  return (
     <section id="project" className="section-continar pt-4 pb-20 ">
      <div className="wrapper bg-black/60">
        <div className="text-center relative z-10 mb-10">

        <ShinyButton>Contact</ShinyButton>
        <SectionTitle
        heading="ContactUs"
        subHeading="Explore a collection of projects that showcase my growth and commitment to building impactful, user-focused web solutions."
        />
      
      {/* forom  */}
       <SignupFormDemo/>

    </div>
    </div>
</section>
  );
}
