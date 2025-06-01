import MagicCardDemo from '@/components/magic-card-demo';
import { BorderBeam } from '@/components/magicui/border-beam';
import Title from '@/components/shared/CustomStyle/Title/Title';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaGithub } from 'react-icons/fa';

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
    
        </section>
    
    </>
  )
}

export default Blogs; 