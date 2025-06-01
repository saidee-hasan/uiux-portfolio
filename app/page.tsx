
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutPage from "./about/page";
import Blogs from "./blogs/page";
import Projects from "./projects/page";
import Faq from "@/components/Faq";
import Service from "@/components/Services/Service";



export default function Home() {

  return (
    <main>
       <HeroSection/>
       <AboutPage/>
       <Service/>
       <Projects />
       <Blogs/>
       <Faq/>
    </main>
  );
}
