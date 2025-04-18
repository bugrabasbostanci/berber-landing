import { Button } from "@/components/ui/button"

export function Reviews() {
  return (
    <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-muted-5">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Müşteri Yorumları</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Müşterilerimizin deneyimleri
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                    stroke="#FFD700"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground">
              &quot;Çok profesyonel bir hizmet aldım. Saç kesimim tam istediğim gibi oldu. Kesinlikle tekrar
                geleceğim.&quot;
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div>
                <p className="text-sm font-medium">Ahmet Yılmaz</p>
                <p className="text-xs text-muted-foreground">Düzenli Müşteri</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                    stroke="#FFD700"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground">
                &quot;Sakal şekillendirme konusunda harikalar yaratıyorlar. Personel çok ilgili ve ortam çok temiz.&quot;
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div>
                <p className="text-sm font-medium">Mehmet Kaya</p>
                <p className="text-xs text-muted-foreground">Yeni Müşteri</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={star <= 4 ? "#FFD700" : "#E5E7EB"}
                    stroke={star <= 4 ? "#FFD700" : "#E5E7EB"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground">
                &quot;Randevu sistemi çok pratik. Hızlıca randevu alabiliyor ve istediğim berberi seçebiliyorum.&quot;
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div>
                <p className="text-sm font-medium">Ali Demir</p>
                <p className="text-xs text-muted-foreground">Aylık Müşteri</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button variant="outline">Tüm Yorumları Gör</Button>
        </div>
      </div>
    </section>
  )
} 