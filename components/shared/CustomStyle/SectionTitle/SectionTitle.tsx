
// type SectionTitleProps = {
//   heading: string
//   subHeading: string
// }

import { SectionTitleProps } from "@/types";

export default function SectionTitle({ heading, subHeading}: SectionTitleProps) {
  return (
    <div className="flex items-center justify-center flex-col py-6">
      
      <h3 className="section-title">
        {heading}
      </h3>
      <p className="text-content dark:text-gray-400 text-xl max-w-2xl  mx-auto pb-3">{subHeading}</p>
    </div>
  );
}
