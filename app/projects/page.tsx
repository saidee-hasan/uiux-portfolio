import { FaGithub } from "react-icons/fa";
import { BorderBeam } from "@/components/magicui/border-beam";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="relative w-fit">
      {/* GitHub Icon with styling */}
      <Link
        href="https://github.com/wptasmina"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 relative p-3 rounded-full bg-content text-white dark:bg-white/5 hover:bg-primary/10 transition-colors"
      >
        <FaGithub className="w-5 h-5" />
      </Link>

      {/* BorderBeam Animation */}
      <BorderBeam
        size={60}
        colorFrom="#0ea5e9"
        colorTo="#ec4899"
        duration={5}
        className="top-0 left-0"
      />
    </div>
  );
};

export default Projects;
