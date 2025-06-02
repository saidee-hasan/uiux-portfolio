"use client";

import { useRef } from "react";
// import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
import { Textarea } from "@/components/ui/textarea"
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShinyButton } from "@/components/magicui/shiny-button";
import SectionTitle from "@/components/shared/CustomStyle/SectionTitle/SectionTitle";

export default function Contacts() {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fefz9ps",
        "template_8dg1gd9",
        form.current!,
        "yaPCDUabVaRAu9loJ"
      )
      .then(
        () => {
          // Swal.fire({
          //   icon: "success",
          //   title: "Email Sent!",
          //   text: "Your message has been sent successfully.",
          // });
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          // Swal.fire({
          //   icon: "error",
          //   title: "Failed to Send",
          //   text: "Something went wrong. Please try again.",
          // });
        }
      );
  };

  return (
    <section id="contact" className="section-continar pt-4 pb-20">
      <div className="wrapper bg-black/60">
        <div className="text-center relative z-10 mb-10">
          <ShinyButton>Contact</ShinyButton>
          <SectionTitle
            heading="Let's Get in Touch"
            subHeading="Have a project in mind or want to connect? Send me a message!"
          />
        </div>

        <div className="flex justify-center">
          <Card className="relative w-full max-w-lg overflow-hidden border border-white/10">
            <form ref={form} onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  I’ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="from_name">Name</Label>
                  <Input
                    id="from_name"
                    name="from_name"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="from_email">Email</Label>
                  <Input
                    id="from_email"
                    name="from_email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Subject" required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message..."
                    required
                  />
                </div>
              </CardContent>

              <CardFooter className="flex justify-end">
                <Button type="submit" variant="secondary" className="w-full">
                  Send Message
                </Button>
              </CardFooter>
            </form>

            {/* Optional animated border glow effect */}
            <BorderBeam duration={8} size={90} />
          </Card>
        </div>
      </div>
    </section>
  );
}
