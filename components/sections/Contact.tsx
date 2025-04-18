export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">İletişim</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Bize ulaşın ve randevu alın
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">İletişim Bilgileri</h3>
              <p className="text-muted-foreground">Aşağıdaki bağlantılardan bize ulaşabilirsiniz</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Telefon</p>
                  <p className="text-sm text-muted-foreground">0507 913 07 69</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">E-posta</p>
                  <p className="text-sm text-muted-foreground">thebarbershop@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Adres</p>
                  <p className="text-sm text-muted-foreground">Turan Mahallesi, Okçular Sokak, No:7/C, Turgutlu, Manisa</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Çalışma Saatleri</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="font-medium">Pazartesi - Cumartesi</p>
                  <p className="text-muted-foreground">09:30 - 21:00</p>
                </div>
                <div>
                  <p className="font-medium">Pazar</p>
                  <p className="text-muted-foreground">Kapalı</p>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-video overflow-hidden rounded-lg border bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.496276503429!2d27.70323527633046!3d38.4992637700968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9a79657586eb9%3A0xf610a9332b6ce970!2sThe%20Barber%20Shop%20Turgutlu!5e0!3m2!1str!2str!4v1744919454270!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
} 