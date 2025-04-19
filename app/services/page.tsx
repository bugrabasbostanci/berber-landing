import Link from "next/link"
import { Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/sections/Footer"
import { Header } from "@/components/sections/Header"

const services = [
  {
    id: 1,
    name: "Saç Traşı",
    price: "300 ₺",
    duration: "30 dk",
    description: "Modern veya klasik saç kesimi",
    details:
      "Yıkama, kesim ve şekillendirme dahildir. Deneyimli berberlerimiz yüz şeklinize ve saç tipinize uygun kesim önerileri sunacaktır.",
  },
  {
    id: 2,
    name: "Sakal Traşı",
    price: "150 ₺",
    duration: "20 dk",
    description: "Profesyonel sakal şekillendirme",
    details:
      "Sakal yıkama, şekillendirme ve düzeltme işlemlerini içerir. Yüz hatlarınıza uygun sakal modelleri için öneriler alabilirsiniz.",
  },
  {
    id: 3,
    name: "Çocuk Traşı",
    price: "250 ₺",
    duration: "25 dk",
    description: "Çocuklara özel saç kesimi",
    details: "Çocuklar için özel olarak tasarlanmış saç kesim hizmeti. Rahat ve eğlenceli bir deneyim sunuyoruz.",
  },
  {
    id: 4,
    name: "Ağda",
    price: "50 ₺",
    duration: "15 dk",
    description: "Yüz bölgesi ağda uygulaması",
    details: "Profesyonel ürünlerle yüz bölgesi için ağda uygulaması. Hassas ciltler için özel bakım içerir.",
  },
  {
    id: 5,
    name: "Maske",
    price: "50 ₺",
    duration: "20 dk",
    description: "Cilt bakım maskesi",
    details: "Cildinizin ihtiyacına göre özel olarak seçilen maskeler ile derinlemesine bakım ve temizlik sağlar.",
  },
  {
    id: 6,
    name: "Yıkama-Fön",
    price: "100 ₺",
    duration: "25 dk",
    description: "Saç yıkama ve fön çekimi",
    details: "Saç tipinize uygun şampuan ve bakım ürünleriyle yıkama ve profesyonel fön ile şekillendirme.",
  },
  {
    id: 7,
    name: "Saç Maskesi",
    price: "100 ₺",
    duration: "30 dk",
    description: "Saç bakım maskesi uygulaması",
    details: "Saç tipinize özel seçilen bakım maskeleri ile saçlarınızı canlandırın ve besleyin.",
  },
  {
    id: 8,
    name: "Kaş Şekillendirme",
    price: "50 ₺",
    duration: "15 dk",
    description: "İp/ağda/cımbız ile kaş şekillendirme",
    details: "Yüz hatlarınıza uygun kaş şekillendirme. İp, ağda veya cımbız teknikleriyle profesyonel uygulama.",
  },
  {
    id: 9,
    name: "Tek Renk Saç Boyası",
    price: "250 ₺",
    duration: "60 dk",
    description: "Profesyonel saç boyama işlemi",
    details: "Kaliteli ürünlerle tek renk saç boyama işlemi. Renk danışmanlığı ve saç bakım önerileri dahildir.",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hizmetlerimiz</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Profesyonel berber hizmetlerimiz ile tanışın
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">{service.details}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{service.duration}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <span className="text-lg font-bold">{service.price}</span>
                    <Link href={`/appointment?service=${service.id}`}>
                      <Button variant="outline" size="sm">
                        Randevu Al
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* Mobil için sabit randevu butonu */}
      <div className="fixed bottom-4 right-4 left-4 z-50 md:hidden">
        <Link href="/appointment" className="w-full block">
          <Button size="lg" className="w-full shadow-lg">
            Randevu Al
          </Button>
        </Link>
      </div>
    </div>
  )
}
