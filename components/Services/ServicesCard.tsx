"use client";
import { Service } from "@/types";
import { MagicCard } from "../magicui/magic-card";
import { useTheme } from "next-themes";





const ServicesCard = ({ icon: Icon, title, description }: Service) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex flex-col h-full">
      <div className="group relative flex flex-col h-full">
        <MagicCard 
          className="relative glass rounded-2xl p-8 gradient-border transition-all duration-300 hover:-translate-y-1 flex flex-col flex-grow"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          {/* Icon Section */}
          <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 animate-float">
            <Icon className="w-7 h-7" strokeWidth={1.5} />
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold">{title}</h3>

          {/* Description - flex-grow makes sure text expands and aligns properly */}
          <p className="dark:text-gray-400 leading-relaxed flex-grow">{description}</p>
        </MagicCard>
      </div>
    </div>
  );
};

export default ServicesCard;