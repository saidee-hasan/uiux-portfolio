import { CustomCursor } from "@/components/shared/CustomCursor";
import AboutPage from "./about/page";
import Blogs from "./blogs/page";
import Projects from "./projects/page";




export default function Home() {
  return (
    <div className=" ">
      <AboutPage/>
      <Blogs/>
      <Projects />


      <CustomCursor
        innerSize={8}
        outerSize={40}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#ec4899",
        }}
        outerStyle={{
          border: "2px solid #0ea5e9",
        }}
      />

    </div>
  );
}
