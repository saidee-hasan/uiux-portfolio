
import Navbar from "@/components/navbar";
import AnimatedCursor from "react-animated-cursor"
export default function Home() {
  return (
 <div className='min-h-screen bg-gray-900'>
  <Navbar />
  <h1 className="text-4xl text-white">hellow</h1>


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
