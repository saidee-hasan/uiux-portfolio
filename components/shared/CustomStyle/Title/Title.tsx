import { TitleProps } from "@/types";


export default function Title({heading}: TitleProps) {
  return (
    <div className="relative mx-auto pb-4 md:pb-8 text-2xl md:text-3xl lg:text-4xl text-center">
      <div className="relative-overflo mx-auto w-fit sm:overflow-visible">
        <h2 className="heading-title-color mx-auto mt-2.5 w-fit title-text-color">
          {heading}
        </h2>

        <span
                className="right-line  bg-gradient-to-l md:-right-50  lg:-right-56 "
         ></span>
              
        <span
                className="right-line -left-30 bg-gradient-to-r md:-left-50  lg:-left-56 "
         ></span>
      </div>
    </div>
  )
}
