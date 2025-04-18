import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Profesyonel Berber Hizmetleri
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Kolayca randevu alın ve zamanınızı en iyi şekilde değerlendirin. Kaliteli hizmet, uygun fiyatlar.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/appointment" className="w-full">
                <Button size="lg" className="w-full">
                  Hemen Randevu Al
                </Button>
              </Link>
              <Link href="/services" className="w-full">
                <Button size="lg" variant="outline" className="w-full">
                  Hizmetleri Gör
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto aspect-video w-full overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Berber Salonu"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
} 