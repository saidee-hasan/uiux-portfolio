
// type SectionTitleProps = {
//   heading: string
//   subHeading: string
// }

import { SectionTitleProps } from "@/types";

export default function SectionTitle({ heading, subHeading}: SectionTitleProps) {
  return (
    <section className="flex items-center justify-center flex-col py-6">
      
      <h2 className="section-title">
        {heading}
      </h2>
      <p className="section-desc text-center">{subHeading}</p>
    </section>
  );
}
