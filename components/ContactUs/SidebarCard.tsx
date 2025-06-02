import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "../magicui/magic-card";
import { useTheme } from "next-themes";
import { IconMapPin } from "@tabler/icons-react";

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
                    <IconMapPin className="w-6 h-6 " />
                </div>
                  Sylhet, Bangladesh
                </div>

                {/* Two columns below on medium screens */}
                <div className="border p-4 rounded-md md:col-span-2 shadow text-center">
                  Credentials to access
                </div>
                 {/* Two columns below on medium screens  */}
                <div className="border p-4 rounded-md md:col-span-2 shadow">Access your account</div>
              </div>
            </CardContent>

          </MagicCard>
        </Card>
      </div>
    </>
  );
}
