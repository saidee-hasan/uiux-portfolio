
import HeroSection from "@/components/HeroSection/HeroSection";
import Faq from "@/components/Faqs/Faq";
import Service from "@/components/Services/Service";
import Projects from "@/components/Projects/Projects";

import Reviews from "@/components/Review/Reviews";
import ContactPage from "./contact/page";
import Developer from "../components/developer/Developer";




export default function Home() {

  return (
    <main>
       <HeroSection/>
       {/* <AboutPage/> */}
       <Developer/>
       <Service/>
       <Projects />
  
       {/* <Blogs/> */}
       <Reviews/>
       <Faq/>
       <ContactPage/>

    </main>
  );
}
