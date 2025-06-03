"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./magicui/border-beam";
import SidebarCard from "./ContactUs/SidebarCard";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8">
      {/* Signup Form Section */}
      <div className="relative shadow-input border overflow-hidden mx-auto w-full max-w-md rounded-xl bg-white p-6 md:p-8 dark:bg-black">
        <BorderBeam duration={8} size={80} />
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Connect With Tasmina
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Let's stay in touch — drop your details or message me directly through this form.
        </p>

        <div>
          <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname" className="text-left">First name</Label>
              <Input id="firstname" placeholder="Your Name" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname" className="text-left">Last name</Label>
              <Input id="lastname" placeholder="Last name" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className="text-left">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          {/* ✅ New textarea here */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message" className="text-left">Your Message</Label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={4}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm dark:border-gray-700 dark:bg-zinc-900 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-md dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900"
            type="submit"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        </form>
        </div>
      </div>

      {/* Sidebar magic-card  */}
      <SidebarCard />
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
