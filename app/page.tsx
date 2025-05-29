
import Hero from "@/components/Hero";
import AboutPage from "./about/page";
import Blogs from "./blogs/page";
import Projects from "./projects/page";
import Faq from "@/components/Faq";

export default function Home() {

  return (
    <div>
      <Hero/>
      <AboutPage/>
      <Blogs/>
      <Projects />
      <Faq/>
    </div>
  );
}
