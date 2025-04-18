import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nasıl Çalışır?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Üç basit adımda randevunuzu oluşturun
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-bold">Hizmet Seçin</h3>
            </div>
            <p className="text-sm text-muted-foreground">İhtiyacınız olan hizmeti seçin ve detayları inceleyin.</p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-bold">Tarih ve Saat Seçin</h3>
            </div>
            <p className="text-sm text-muted-foreground">Size uygun olan tarih ve saati takvimden seçin.</p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-bold">Randevuyu Onaylayın</h3>
            </div>
            <p className="text-sm text-muted-foreground">Bilgilerinizi girin ve randevunuzu onaylayın.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/appointment">
            <Button>Randevu Al</Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 