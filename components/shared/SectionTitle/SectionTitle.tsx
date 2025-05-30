type SectionTitleProps = {
  heading: string
  subHeading: string
}

export default function SectionTitle({ heading, subHeading}: SectionTitleProps) {
  return (
    <div className="flex justify-center items-center flex-col py-6">
      
      <h3 className="section-title">
        {heading}
      </h3>
      <p className="text-[#D99904] pb-2">{subHeading}</p>
    </div>
  );
}
