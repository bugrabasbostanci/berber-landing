"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/sections/Footer"
import { Header } from "@/components/sections/Header"

const services = [
  {
    id: 1,
    name: "Saç Traşı",
    price: "100 ₺",
    duration: "30 dk",
    description: "Modern veya klasik saç kesimi",
  },
  {
    id: 2,
    name: "Sakal Traşı",
    price: "150 ₺",
    duration: "20 dk",
    description: "Profesyonel sakal şekillendirme",
  },
  {
    id: 3,
    name: "Çocuk Traşı",
    price: "250 ₺",
    duration: "25 dk",
    description: "Çocuklara özel saç kesimi",
  },
  {
    id: 4,
    name: "Ağda",
    price: "50 ₺",
    duration: "15 dk",
    description: "Yüz bölgesi ağda uygulaması",
  },
  {
    id: 5,
    name: "Maske",
    price: "50 ₺",
    duration: "20 dk",
    description: "Cilt bakım maskesi",
  },
  {
    id: 6,
    name: "Yıkama-Fön",
    price: "100 ₺",
    duration: "25 dk",
    description: "Saç yıkama ve fön çekimi",
  },
  {
    id: 7,
    name: "Saç Maskesi",
    price: "100 ₺",
    duration: "30 dk",
    description: "Saç bakım maskesi uygulaması",
  },
  {
    id: 8,
    name: "Kaş Şekillendirme",
    price: "50 ₺",
    duration: "15 dk",
    description: "İp/ağda/cımbız ile kaş şekillendirme",
  },
  {
    id: 9,
    name: "Tek Renk Saç Boyası",
    price: "250 ₺",
    duration: "60 dk",
    description: "Profesyonel saç boyama işlemi",
  },
]

const timeSlots = [
  "09:30",
  "10:15",
  "11:00",
  "11:45",
  "12:30",
  "13:15",
  "14:00",
  "14:45",
  "15:30",
  "16:15",
  "17:00",
  "17:45",
  "18:30",
  "19:15",
  "20:00",
  "20:45",
]

export default function AppointmentPage() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    // In a real app, this would submit the appointment data
    alert("Randevunuz başarıyla oluşturuldu!")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold">Randevu Oluştur</h1>
            <p className="text-muted-foreground">Birkaç adımda kolayca randevu alın</p>
          </div>

          <div className="mb-8">
            <div className="flex items-center">
              <div
                className={cn(
                  "flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2",
                  step >= 1 ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground",
                )}
              >
                1
              </div>
              <div className={cn("h-1 w-full", step >= 2 ? "bg-primary" : "bg-muted")} />
              <div
                className={cn(
                  "flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2",
                  step >= 2 ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground",
                )}
              >
                2
              </div>
              <div className={cn("h-1 w-full", step >= 3 ? "bg-primary" : "bg-muted")} />
              <div
                className={cn(
                  "flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2",
                  step >= 3 ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground",
                )}
              >
                3
              </div>
            </div>
            <div className="mt-2 flex justify-between text-xs sm:text-sm">
              <span>Hizmet Seçimi</span>
              <span>Tarih ve Saat</span>
              <span>Onay</span>
            </div>
          </div>

          {step === 1 && (
            <div>
              <h2 className="mb-4 text-lg sm:text-xl font-semibold">Hizmet Seçin</h2>
              <RadioGroup
                value={selectedService?.toString()}
                onValueChange={(value) => setSelectedService(Number(value))}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  {services.map((service) => (
                    <Card
                      key={service.id}
                      className={cn(
                        "cursor-pointer transition-colors hover:border-primary py-0 gap-0",
                        selectedService === service.id && "border-primary",
                      )}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <CardHeader className="pb-2 pt-4 px-4 sm:px-6">
                        <CardTitle className="text-base sm:text-lg">{service.name}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2 px-4 sm:px-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{service.duration}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between px-4 sm:px-6 pb-4">
                        <span className="font-medium">{service.price}</span>
                        <RadioGroupItem value={service.id.toString()} id={service.id.toString()} className="h-5 w-5 border-primary" />
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </RadioGroup>
              <div className="mt-8 flex justify-end">
                <Button onClick={handleNext} disabled={!selectedService} className="w-full sm:w-auto">
                  Devam Et
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="mb-4 text-lg sm:text-xl font-semibold">Tarih ve Saat Seçin</h2>
              <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">Tarih Seçin</CardTitle>
                  </CardHeader>
                  <CardContent >
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border mx-auto"
                      disabled={
                        (date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0); // Bugünün tarihini saat 00:00:00'a ayarla
                          
                          return date < today || date.getDay() === 0; // Geçmiş tarihleri ve pazar günlerini devre dışı bırak
                        }
                      }
                      weekStartsOn={1} // Haftanın ilk günü olarak pazartesi (1) ayarlandı
                      formatters={{
                        formatWeekdayName: (date) => {
                          const dayIndex = date.getDay();
                          // JavaScript'te 0=Pazar, 1=Pazartesi... şeklinde olduğu için düzenleme gerekiyor
                          const weekdayNames = ["Paz", "Pzt", "Sal", "Çrş", "Prş", "Cum", "Cmt"];
                          return weekdayNames[dayIndex];
                        },
                        formatCaption: (month) => {
                          const turkishMonths = [
                            "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", 
                            "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
                          ];
                          return `${turkishMonths[month.getMonth()]} ${month.getFullYear()}`;
                        }
                      }}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">Saat Seçin</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className="w-full text-xs sm:text-sm"
                          onClick={() => setSelectedTime(time)}
                          disabled={!selectedDate}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-between">
                <Button variant="outline" onClick={handleBack} className="order-2 sm:order-1 w-full sm:w-auto">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Geri
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!selectedDate || !selectedTime}
                  className="order-1 sm:order-2 w-full sm:w-auto"
                >
                  Devam Et
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="mb-4 text-lg sm:text-xl font-semibold">Randevu Onayı</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Randevu Detayları</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <div className="font-medium">Seçilen Hizmet</div>
                    <div className="rounded-md bg-muted p-3">
                      {services.find((s) => s.id === selectedService)?.name} -{" "}
                      {services.find((s) => s.id === selectedService)?.price}
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <div className="font-medium">Tarih ve Saat</div>
                    <div className="rounded-md bg-muted p-3">
                      {selectedDate?.toLocaleDateString("tr-TR", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      - {selectedTime}
                    </div>
                  </div>

                  <Separator />

                  <div className="grid gap-2">
                    <div className="font-medium">Toplam Süre</div>
                    <div>{services.find((s) => s.id === selectedService)?.duration}</div>
                  </div>

                  <div className="grid gap-2">
                    <div className="font-medium">Toplam Ücret</div>
                    <div className="text-lg font-bold">{services.find((s) => s.id === selectedService)?.price}</div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                  <Button variant="outline" onClick={handleBack} className="order-2 sm:order-1 w-full sm:w-auto">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Geri
                  </Button>
                  <Button onClick={handleSubmit} className="order-1 sm:order-2 w-full sm:w-auto">
                    Randevuyu Onayla
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
