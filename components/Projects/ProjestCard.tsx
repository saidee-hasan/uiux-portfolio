"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";
import { Project } from "@/types";
import { useState } from "react";

export function ProjestCard({
  title,
  description,
  image,
  preview,
}: Project) {
  const [showPreview, setShowPreview] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowPreview(false);
    }
  };

  return (
    <>
      {/* Project Card */}
      <Card className="relative w-[350px] overflow-hidden flex flex-col">
        <CardHeader className="p-0">
          <div className="w-full">
            <Image
              src={image}
              alt={title}
              width={350}
              height={240}
              className="w-full h-60 rounded-t-lg object-cover"
              priority
            />
          </div>
          <div className="p-4">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardHeader>

        <CardFooter className="mt-auto flex justify-center pb-4">
          <button
            onClick={() => setShowPreview(true)}
            className="bg-black text-white border border-white px-6 py-2 rounded-md font-semibold text-sm transition-all duration-300 ease-in-out shadow-[0_8px_16px_rgba(0,0,0,0.3),_0_4px_6px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.4),_0_6px_8px_rgba(0,0,0,0.3)] hover:scale-[1.05]"
          >
            Live Preview
          </button>
        </CardFooter>

        <BorderBeam duration={8} size={100} />
      </Card>

      {/* Image Preview Modal */}
      {showPreview && (
        <div
          className="fixed inset-0 mt-14 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg z-[9999]">
            <Image
              src={preview || image}
              alt={title}
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg z-50 shadow-2xl"
            />
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-400 z-[10000]"
              aria-label="Close Preview"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
