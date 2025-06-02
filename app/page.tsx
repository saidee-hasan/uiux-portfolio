
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutPage from "./about/page";
import Blogs from "./blogs/page";
import Faq from "@/components/Faq";
import Service from "@/components/Services/Service";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skill/Skills";
import Reviews from "@/components/Review/Reviews";
import ContactPage from "./contact/page";




export default function Home() {

  return (
    <main>
       <HeroSection/>
       {/* <AboutPage/> */}
       <Service/>
       <Projects />
       <Skills/>
       {/* <Blogs/> */}
       <Reviews/>
       <Faq/>
       <ContactPage/>

    </main>
  );
}
