import { CustomCursor } from "@/components/shared/CustomCursor";
import Navbar from "@/components/shared/navbar";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-white">
      <Navbar />

      <CustomCursor
        innerSize={8}
        outerSize={40}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "red",
        }}
        outerStyle={{
          border: "2px solid red",
        }}
      />
    </div>
  );
}
