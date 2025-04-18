"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const pathname = usePathname()
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-semibold">
          <span>The Barber Shop</span>
          <span className="text-xs text-muted-foreground">Men&apos;s Club</span>
        </div>
        <nav className="hidden md:flex md:gap-6">
          <Link href="/" className="text-sm font-medium text-primary">
            Ana Sayfa
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Hizmetler
          </Link>
          <Link
            href={pathname === "/" ? "#how-it-works" : "/#how-it-works"}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Nasıl Çalışır
          </Link>
          <Link
            href={pathname === "/" ? "#reviews" : "/#reviews"}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Yorumlar
          </Link>
          <Link
            href={pathname === "/" ? "#contact" : "/#contact"}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            İletişim
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/appointment" className="hidden md:block">
            <Button>Randevu Al</Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menü</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="hover:text-primary">
                  Ana Sayfa
                </Link>
                <Link href="/services" className="hover:text-primary">
                  Hizmetler
                </Link>
                <Link href={pathname === "/" ? "#how-it-works" : "/#how-it-works"} className="hover:text-primary">
                  Nasıl Çalışır
                </Link>
                <Link href={pathname === "/" ? "#reviews" : "/#reviews"} className="hover:text-primary">
                  Yorumlar
                </Link>
                <Link href={pathname === "/" ? "#contact" : "/#contact"} className="hover:text-primary">
                  İletişim
                </Link>
                <Link href="/appointment">
                  <Button className="w-full">Randevu Al</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
} 