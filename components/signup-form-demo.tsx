"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./magicui/border-beam";
import SidebarCard from "./ContactUs/SidebarCard";

export default function SignupFormDemo() {
  // Form state includes firstname, lastname, email, subject, and message
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  // Loading state for form submission
  const [loading, setLoading] = useState(false);
  // Success message after email sent
  const [success, setSuccess] = useState("");
  // Error message if email sending fails
  const [error, setError] = useState("");

  // Handle changes in input and textarea fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    // Your EmailJS credentials here
    const SERVICE_ID = "service_p79zsoh";
    const TEMPLATE_ID = "template_py17lim";
    const USER_ID = "IYWUUuxVvar1I4x64";

    // Template parameters must match your EmailJS template variables
    const templateParams = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // Send email with EmailJS
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(
        () => {
          setLoading(false);
          setSuccess("Your message has been sent successfully. Thank you!");
          setFormData({ firstname: "", lastname: "", email: "", subject: "", message: "" }); // Reset form
        },
        (error) => {
          setLoading(false);
          setError("Sorry, there was an error sending your message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8">
      {/* Form container */}
      <div className="relative shadow-input border overflow-hidden mx-auto w-full max-w-md rounded-xl bg-white p-6 md:p-8 dark:bg-black">
        {/* Decorative border animation */}
        <BorderBeam duration={8} size={80} />

        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Connect Us
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Let`&apos`s stay in touch — drop your details or message me directly through this form.
        </p>

        {/* Contact form */}
        <form className="my-8" onSubmit={handleSubmit}>
          {/* First and last name inputs */}
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname" className="text-left">
                First name
              </Label>
              <Input
                id="firstname"
                placeholder="Your Name"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname" className="text-left">
                Last name
              </Label>
              <Input
                id="lastname"
                placeholder="Last name"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
          </div>

          {/* Email input */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className="text-left">
              Email Address
            </Label>
            <Input
              id="email"
              placeholder="example@domain.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          {/* Subject input */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="subject" className="text-left">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="Subject of your message"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          {/* Message textarea */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message" className="text-left">
              Your Message
            </Label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={4}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm dark:border-gray-700 dark:bg-zinc-900 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          {/* Submit button */}
          <button
            disabled={loading}
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-md dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
          >
            {loading ? "Sending..." : "Send Message →"}
            <BottomGradient />
          </button>

          {/* Display success or error messages */}
          {success && (
            <p className="mt-4 text-green-600 dark:text-green-400 font-medium">
              {success}
            </p>
          )}
          {error && (
            <p className="mt-4 text-red-600 dark:text-red-400 font-medium">
              {error}
            </p>
          )}

          {/* Divider */}
          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        </form>
      </div>

      {/* Sidebar component */}
      <SidebarCard />
    </div>
  );
}

// Decorative bottom gradient for the button
const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

// Wrapper container for label + input pairs with spacing
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
