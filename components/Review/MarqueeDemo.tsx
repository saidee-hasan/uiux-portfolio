'use client'
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { useEffect, useState } from "react";

// List of common US first names
const firstNames = [
  'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Elijah', 'Charlotte', 'William',
  'Sophia', 'James', 'Amelia', 'Benjamin', 'Isabella', 'Lucas', 'Mia', 'Henry',
  'Evelyn', 'Alexander', 'Harper', 'Michael'
];

// List of common US last names
const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
  'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'
];

// Random business-related review texts
const reviewTexts = [
  "Your design system cut our development time in half! Absolute game-changer for our team.",
  "The UX improvements increased our conversion rate by 35%. Stellar work!",
  "Our customer satisfaction scores went through the roof after your redesign.",
  "The accessibility audit uncovered issues we never considered. Now our app works for everyone!",
  "Your microinteractions made our product feel premium. Users love the new experience!",
  "The onboarding flow you designed reduced our support tickets by 60%. Worth every penny!",
  "Your component library is so robust, we've adopted it across all our products.",
  "The performance optimizations you suggested made our app 3x faster on mobile.",
  "Your A/B testing framework helped us identify the perfect pricing strategy.",
  "The branding you created perfectly captures our company's mission and values.",
  "Your analytics dashboard gives us insights we never had before. Data-driven decisions made easy!",
  "The mobile app you designed has a 4.9-star rating in both app stores. Phenomenal!",
  "Your content strategy increased our organic traffic by 200% in just three months.",
  "The email templates you designed have double the open rate of our previous ones.",
  "Your social media strategy grew our following by 10,000 in the first month alone.",
  "The video content you produced explains our product better than we ever could.",
  "Your SEO recommendations got us to the first page of Google for our main keywords.",
  "The chatbot you implemented handles 80% of customer inquiries automatically.",
  "Your marketplace design increased transactions by 45% month over month.",
  "The gamification elements you added boosted user engagement by 300%."
];

// Generate random reviews
const generateReviews = () => {
  return Array.from({ length: 16 }, () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const username = `@${firstName.toLowerCase()}${Math.floor(Math.random() * 90 + 10)}`;
    const img = `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 50)}.jpg`;
    const body = reviewTexts[Math.floor(Math.random() * reviewTexts.length)];
    
    return {
      name: `${firstName} ${lastName}`,
      username,
      body,
      img,
    };
  });
};

const reviews = generateReviews();

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
            <div key={`${review.username}-${index}`} className="mx-2">
              <ReviewCard 
                {...review} 
                isTyping={isTypingActive && typingIndex === index}
              />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, index) => (
            <div key={`${review.username}-${index}`} className="mx-2">
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