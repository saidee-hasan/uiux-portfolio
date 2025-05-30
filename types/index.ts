// index.ts 

export interface Project {
    title: string,
    description: string,
    technologies: string[],
    githubLink: string,
    demoLink: string,
    image: string,
}

export interface Blog {
    title: string,
    excerpt: string,
    date:  string,
    readTime: string,
    slug: string,
}

//Section Title and subtitle
export interface SectionTitleProps {
  heading: string
  subHeading: string
}

//  Hero CountUp 
export interface StatItem {
  num: number;
  text: string;
}

export interface CountUps {
  end: number;
  duration?: number;
  delay?: number;
}
