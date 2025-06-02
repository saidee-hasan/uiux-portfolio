import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";
import { Project } from "@/types";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";

export function ProjestCard({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  image,
}: Project) {
  return (
    <Card className="relative w-[350px] overflow-hidden flex flex-col">
      <CardHeader>
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className="pb-4 rounded-t-lg"
        />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Button key={index} variant="outline" className="text-xs">
            {tech}
          </Button>
        ))}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 mt-auto">
        <div className="flex items-center gap-4">
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            <button
              className="btnSocial shadow-[0.05rem_0.05rem_0.1rem_#ccc,-0.05rem_-0.05rem_0.1rem_#fff] 
              border-[rgba(0,0,0,0.2)]  
             hover:shadow-[inset_0.05rem_0.05rem_0.1rem_#ccc,inset_-0.05rem_-0.05rem_0.1rem_#fff] "
            >
              <FaGithub className="w-5 h-5" />
            </button>
          </Link>

          <Link href={demoLink} target="_blank" rel="noopener noreferrer">
            <button
              className="btnSocial shadow-[0.05rem_0.05rem_0.1rem_#ccc,-0.05rem_-0.05rem_0.1rem_#fff] 
              border-[rgba(0,0,0,0.2)]  
             hover:shadow-[inset_0.05rem_0.05rem_0.1rem_#ccc,inset_-0.05rem_-0.05rem_0.1rem_#fff] "
            >
              <FaGlobe className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </CardFooter>

      <BorderBeam duration={8} size={100} />
    </Card>
  );
}
