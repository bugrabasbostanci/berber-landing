import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-4">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-sm">The Barber Shop</span>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/brbrshpdnz/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.facebook.com/brbrshpdnz/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          <div className="text-center sm:text-right text-xs text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} The Barber Shop.</span>
            <span className="ml-1 opacity-75">
              Dev:{" "}
              <a href="https://www.linkedin.com/in/bugrabasbostanci/" className="hover:text-primary transition-colors" target="_blank">
                bb
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
} 