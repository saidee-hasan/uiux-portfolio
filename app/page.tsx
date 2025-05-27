
import Navbar from "@/components/navbar";
import AnimatedCursor from "react-animated-cursor"

export default function Home() {
  return (
 <div className='min-h-screen bg-gray-900'>
  <Navbar />
  <h1 className="text-4xl text-white">hellow</h1>

<div className="bg-gradient-primary animate-float-up p-8 rounded-md">
  <h1 className="text-3xl font-bold">Hello with Float Up</h1>
</div>

{/* <div className="animate-bounce text-white">Bouncing Element</div> */}

{/* <div className="animate-levitate text-white bg-gradient-primary ">I float softly</div> */}


  <AnimatedCursor
  innerSize={8}
  outerSize={40}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'red'
  }}
  outerStyle={{
    border: '2px solid red'
  }}
/>
    </div>

  );
}
