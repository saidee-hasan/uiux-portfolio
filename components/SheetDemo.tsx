'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Bars3Icon } from "@heroicons/react/24/outline"
import Link from "next/link"
import ModeToggle from "./shared/ModeToggle"

export function SheetDemo() {
  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Bars3Icon className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-lg">Menu</SheetTitle>
        </SheetHeader>

        {/* ✅ Menu items here */}
        <div className="py-4 space-y-4">
          {menuItems.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="block text-base font-medium text-gray-100 px-4 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
         <div className="px-2"> <ModeToggle/> </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
