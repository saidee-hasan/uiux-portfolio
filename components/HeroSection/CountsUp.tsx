
import { StatItem } from '@/types';
import CountUp from 'react-countup';


const stats:  StatItem[] = [
    {
        num: 2,
        text: "Years of experience",
    },
    {
        num: 26,
        text: "Projects completed",
    },
    {
        num: 10,
        text: "Technologies mastered",
    },
    {
        num: 500,
        text: "Code commits",
    },
]


export const CountsUp = () => {
  return (
  <section className="py-8">
  <div className="border rounded-lg p-6">
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {stats.map(({ num, text }, index) => (
        <div
          key={index}
          className="flex items-center gap-4 justify-center xl:justify-start"
        >
          <CountUp
            end={num}
            duration={5}
            delay={0.5}
            className="text-3xl md:text-4xl font-extrabold text-primary"
          />
          <p
            className={`text-sm md:text-base text-muted-foreground ${
              text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
            }`}
          >
            {text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}
