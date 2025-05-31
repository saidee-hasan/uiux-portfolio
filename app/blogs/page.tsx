import MagicCardDemo from '@/components/magic-card-demo';
import { BorderBeam } from '@/components/magicui/border-beam';
import Title from '@/components/shared/CustomStyle/Title/Title';
import Image from 'next/image';
import React from 'react'

const Blogs = () => {
  return (
    <>
    Blogs page

        <section className="section-continar">
          <Title heading="Projects"></Title>
          <MagicCardDemo />
    
          <div
                className="dark:text-light-bg to-light-theme relative mx-auto w-fit rounded-md border bg-gradient-to-b from-white px-3 py-2 text-sm shadow lg:mx-0 dark:from-[#17122dcc] dark:to-[#17122d5f]"
              >
                #1 Platform for Online Learning
                <Image
                  className="absolute right-0 bottom-0 left-0 mx-auto"
                  src="/star-blaze.png"
                  alt="btnBg"
                  width={100}
                  height={100}
                />
                <BorderBeam  colorFrom="#0ea5e9" size={70} />
              </div>
    
        </section>
    
    </>
  )
}

export default Blogs; 