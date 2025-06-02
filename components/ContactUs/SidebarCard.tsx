"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "../magicui/magic-card";
import { useTheme } from "next-themes";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBuildingCommunity,
  IconDevicesSearch,
  IconMailSpark,
  IconBrandGithub,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";


export default function SidebarCard() {
  const { theme } = useTheme();
  return (
    <>
      {/* Login Section (MagicCard) */}
      <div className="mx-auto w-full max-w-md bg-none">
        <Card className="border-none shadow-lg">
          <MagicCard
            // gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="p-0"
          >
            <CardHeader className="border-b p-4">
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>

            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 py-8">
                {/* Full-width section on all screen sizes */}
                <div className="border md:col-span-4 p-4 rounded-md font-medium shadow text-center">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center border-2 border-dashed rounded-full">
                    <IconBuildingCommunity className="w-6 h-6 " />
                  </div>
                  <div className="mt-4">Sylhet, Bangladesh</div>
                </div>

                {/* Two columns below on medium screens and icons */}
                <div className="border rounded-md md:col-span-2 shadow text-center">
                  <div className="w-16 h-16 mt-4 mx-auto flex items-center justify-center border-2 border-dashed rounded-full">
                    <IconDevicesSearch className="w-6 h-6 " />
                  </div>

                  {/* <div className="mt-4 border p-4"> */}
                    <div className="mt-4 border py-2 bg-black flex flex-row items-center justify-center space-x-2">
                      {[
                        { icon: IconBrandGithub },
                        { icon: IconBrandFacebook },
                        { icon: IconBrandInstagram },
                        { icon: IconBrandLinkedin },
                      ].map(({ icon: Icon }, index) => (
                        <button
                          key={index}
                          className="group/btn h-8 flex items-center justify-center gap-2 rounded-md bg-gray-50 px-2 text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] relative"
                          type="button"
                        >
                          <Icon className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />
                          <BottomGradient />
                        </button>
                      ))}
                    </div>
                  {/* </div> */}

                </div>
                {/* Two columns below on medium screens  */}
                <div className="border p-4 rounded-md md:col-span-2 shadow">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center border-2 border-dashed rounded-full">
                    <IconMailSpark className="w-6 h-6 " />
                  </div>
                  <div className="mt-4 text-xs text-gray-400">
                    tasmina163@gmail.com
                  </div>
                </div>
              </div>
            </CardContent>
          </MagicCard>
        </Card>
      </div>
    </>
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
