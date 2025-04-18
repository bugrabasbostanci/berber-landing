import Link from "next/link"
import { Droplet, Scissors, WandSparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted-5">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Hizmetlerimiz</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Profesyonel ekibimizle size en iyi hizmeti sunuyoruz
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <Scissors className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Saç Kesimi</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Modern ve klasik saç kesim teknikleriyle istediğiniz stili yaratıyoruz.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <WandSparkles className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Sakal Şekillendirme</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Yüz hatlarınıza uygun sakal şekillendirme ve bakım hizmetleri.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <Droplet className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Saç Boyama</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Profesyonel ürünlerle saç boyama ve renklendirme işlemleri.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/services">
            <Button variant="outline">Tüm Hizmetleri Gör</Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 