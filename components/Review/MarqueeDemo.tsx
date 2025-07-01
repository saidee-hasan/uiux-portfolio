'use client'
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Jack Daniels",
    username: "@jack_d",
    body: "The design system you created reduced our development time by 40%. Absolutely game-changing!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill Smith",
    username: "@jillux",
    body: "Our conversion rates increased by 28% after implementing your UX recommendations. Stellar work!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John Reynolds",
    username: "@john_product",
    body: "The accessibility audit uncovered issues we never considered. Now our app works for everyone!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane Cooper",
    username: "@jane_ceo",
    body: "Your microinteractions made our product feel premium. Users can't stop complimenting the feel!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny Wilson",
    username: "@jenny_dev",
    body: "The design system documentation is so thorough, our engineers are actually excited to use it!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James Rodriguez",
    username: "@james_cto",
    body: "Your user testing methodology revealed pain points we'd been missing for years. Incredible insights!",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Sarah Johnson",
    username: "@sarah_pm",
    body: "The onboarding flow you designed reduced our support tickets by 65%. Worth every penny!",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Michael Chen",
    username: "@mike_ux",
    body: "Your component library is so robust, we've adopted it across all our products. Consistency achieved!",
    img: "https://avatar.vercel.sh/michael",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  isTyping = false,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  isTyping?: boolean;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isTyping) {
      setDisplayedText(body);
      return;
    }

    if (currentIndex < body.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(body.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 10 + Math.random() * 30); // Random typing speed

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, body, isTyping]);

  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "transition-all duration-300 hover:scale-[1.02]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={40}
          height={40}
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm">
        {displayedText}
        {isTyping && currentIndex < body.length && (
          <span className="ml-0.5 inline-block h-4 w-1 animate-pulse bg-gray-900 dark:bg-gray-100"></span>
        )}
      </blockquote>
      <div className="absolute bottom-3 right-3 text-xs text-gray-500 dark:text-gray-400">
        {isTyping ? "Typing..." : "Just now"}
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTypingActive, setIsTypingActive] = useState(true);

  // Rotate through reviews with typing effect
  useEffect(() => {
    if (!isTypingActive) return;

    const interval = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change typing review every 5 seconds

    return () => clearInterval(interval);
  }, [isTypingActive]);

  return (
    <div className="relative py-12 dark:bg-black bg-white flex w-full flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
        Client Testimonials
      </h2>
      
      <div className="relative w-full max-w-7xl mx-auto">
        <Marquee pauseOnHover className="[--duration:20s] mb-4">
          {firstRow.map((review, index) => (
            <div key={review.username} className="mx-2">
              <ReviewCard 
                {...review} 
                isTyping={isTypingActive && typingIndex === index}
              />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, index) => (
            <div key={review.username} className="mx-2">
              <ReviewCard 
                {...review} 
                isTyping={isTypingActive && typingIndex === index + firstRow.length}
              />
            </div>
          ))}
        </Marquee>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>
      </div>

      {/* Controls (for demo purposes) */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => setIsTypingActive(!isTypingActive)}
          className="px-4 py-2 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {isTypingActive ? "Pause Typing" : "Resume Typing"}
        </button>
        <button
          onClick={() => setTypingIndex((prev) => (prev + 1) % reviews.length)}
          className="px-4 py-2 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Next Message
        </button>
      </div>
    </div>
  );
}