import MagicCardDemo from '@/components/magic-card-demo';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Title from '@/components/shared/CustomStyle/Title/Title';

import React from 'react'
import { GithubIcon } from 'lucide-react';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { ShinyButton } from '@/components/magicui/shiny-button';
import CustomButton from '@/components/ui/CustomButton';
import { FaGithub, FaGlobe } from 'react-icons/fa';



const Blogs = () => {
  return (
    <>
    Blogs page

        <section className="section-continar">
          <Title heading="Blogs"></Title>
          <MagicCardDemo />
    
          <div
                className="dark:text-light-bg to-light-theme relative mx-auto w-fit rounded-md border bg-gradient-to-b from-white px-3 py-2 text-sm shadow lg:mx-0 dark:from-[#17122dcc] dark:to-[#17122d5f]"
              >
                 {/* GitHub Icon with styling */}
    
                {/* <BorderBeam  colorFrom="#0ea5e9" size={70} /> */}
              </div>


   <div className="my-8 flex gap-6">
    <ShimmerButton className="shadow-2xl">
       <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Shimmer Button
     </span>
     </ShimmerButton>


    {/* rounded-full button  */}
  <ShimmerButton className="rounded-full p-3">
  <span className="shimmerButton-span ">
    <GithubIcon />
  </span>
</ShimmerButton>


<button
  className="px-6 py-2 rounded-full bg-[#e6e6e6] text-[#444] border border-[rgba(0,0,0,0.2)] font-semibold shadow-[inset_0.4rem_0.4rem_1rem_#ccc,inset_-0.4rem_-0.4rem_1rem_#fff] transition duration-300"
>
Full button
</button>


<button
  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#e6e6e6] text-[#444] border border-[rgba(0,0,0,0.2)] font-semibold shadow-[inset_0.4rem_0.4rem_1rem_#ccc,inset_-0.4rem_-0.4rem_1rem_#fff] transition duration-300"
>
   <FaGithub/> 
  <FaGlobe />
</button>

<button
  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#e6e6e6] text-[#444] 
  border-2 border-[#aaa] ring-2 ring-white 
  shadow-[inset_0.4rem_0.4rem_1rem_#ccc,inset_-0.4rem_-0.4rem_1rem_#fff] 
  transition duration-300"
>
  <GithubIcon className="w-5 h-5" />
</button>


<button
  className="px-6 py-2 rounded-full bg-[#e6e6e6] text-[#444] shadow-[0.4rem_0.4rem_1rem_#ccc,-0.4rem_-0.4rem_1rem_#fff] border border-[rgba(0,0,0,0.2)] font-semibold hover:shadow-[inset_0.4rem_0.4rem_1rem_#ccc,inset_-0.4rem_-0.4rem_1rem_#fff] transition duration-300"
>
 <GithubIcon className="w-5 h-5" />
</button>


<button
  className="btnSocial"
>
  <GithubIcon className="w-5 h-5" />
</button>







   </div>
      <BorderBeam
        size={60}
        colorFrom="#0ea5e9"
        colorTo="#ec4899"
        duration={5}
        className="top-0 left-0"
      />

      <RainbowButton variant="outline">
        Rainbow
      </RainbowButton>

    <ShinyButton>Shiny Button</ShinyButton>

    <CustomButton variant="outline">
      Download CV
    </CustomButton>

    

   
        </section>
    
    </>
  )
}

export default Blogs; 