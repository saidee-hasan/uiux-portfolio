// index.ts 


export interface Blog {
    title: string,
    excerpt: string,
    date:  string,
    readTime: string,
    slug: string,
}

//Section Title and subtitle

export interface TitleProps {
  heading: string
}

export interface SectionTitleProps {
  heading: string
  subHeading: string
}

//  Hero CountUp 
export interface StatItem {
  num: number;
  text: string;
}

// BorderBeam 
import type { Transition } from "motion/react";
export interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  transition?: Transition;
  className?: string;
  style?: React.CSSProperties;
  reverse?: boolean;
  initialOffset?: number;
}

// Service 
export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}
// export interface ServicesCardProps {
//   icon: React.ElementType;
//   title: string;
//   description: string;
// };

// @/types/index.ts

// ./types/index.ts
export interface Project {
  title: string;
  description: string;
  image: string;
  preview?: string;

}
