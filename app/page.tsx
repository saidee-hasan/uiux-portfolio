'use client'
import AboutPage from "./about/page";
import Blogs from "./blogs/page";
import Projects from "./projects/page";

export default function Home() {

  return (
    <div className=" ">
      <AboutPage/>
      <Blogs/>
      <Projects />
    </div>
  );
}
