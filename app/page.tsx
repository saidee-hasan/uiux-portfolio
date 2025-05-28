
import Faq from "@/components/Faq";
import AboutPage from "./about/page";
import Blogs from "./blogs/page";
import Projects from "./projects/page";

export default function Home() {

  return (
    <div>
      <AboutPage/>
      <Blogs/>
      <Projects />
      <Faq/>
    </div>
  );
}
