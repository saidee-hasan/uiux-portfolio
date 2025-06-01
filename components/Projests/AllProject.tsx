import { RainbowButton } from '@/components/magicui/rainbow-button';
import Link from "next/link";


export default function AllProject() {
  return (
    <>
   

    
      <div className="text-center mt-12">
        <Link herf="/projects">
            <RainbowButton variant="outline">
              AllProject
          </RainbowButton>
        </Link>
      </div>
    </>
  )
}
