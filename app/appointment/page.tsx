"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import { format } from "date-fns"
import { tr } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"

import { cn } from "@/lib/utils"

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

const staff = [
  {
    id: 1,
    name: "Deniz Akbulut",
    role: "Berber",
    experience: "10 yıl",
    specialties: "Saç kesimi, sakal şekillendirme",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Mert Kara",
    role: "Çalışan",
    experience: "5 yıl",
    specialties: "Saç boyama, yıkama",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function AppointmentPage() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedStaff, setSelectedStaff] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  // Form fields
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    // In a real app, this would submit the appointment data
    setIsSubmitted(true)
  }

  const isTimeSlotPassed = (date: Date | undefined, timeSlot: string): boolean => {
    if (!date) return false

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // If selected date is in the future, time slot is not passed
    if (date.getTime() > today.getTime()) return false

    // If selected date is today, check if the time has passed
    if (date.getTime() === today.getTime()) {
      const [hoursStr, minutesStr] = timeSlot.split(":")
      const hours = Number.parseInt(hoursStr, 10)
      const minutes = Number.parseInt(minutesStr, 10)

      const slotTime = new Date()
      slotTime.setHours(hours, minutes, 0, 0)

      // Current time (without any buffer)
      const currentTime = new Date()

      // Debug logs
      console.log(`Time slot: ${timeSlot}`)
      console.log(`Current time: ${currentTime.toLocaleTimeString()}`)
      console.log(`Is passed: ${slotTime <= currentTime}`)

      // Return true if the time slot has already passed
      return slotTime <= currentTime
    }

    return false
  }

  // For debugging - show current time in UI
  const formattedCurrentTime = format(currentTime, "HH:mm:ss")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold">Randevu Oluştur</h1>
            <p className="text-muted-foreground">Birkaç adımda kolayca randevu alın</p>
            {/* Debug info - would be removed in production */}
            <p className="text-xs text-muted-foreground mt-1">Sistem saati: {formattedCurrentTime}</p>
          </div>

          {!isSubmitted ? (
            <>
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
                  <span>Tarih ve Saat</span>
                  <span>Personel Seçimi</span>
                  <span>Onay</span>
                </div>
              </div>

              {step === 1 && (
                <div>
                  <h2 className="mb-4 text-lg sm:text-xl font-semibold">Tarih ve Saat Seçin</h2>
                  <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base sm:text-lg">Tarih Seçin</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => {
                            setSelectedDate(date)
                            setSelectedTime(null) // Reset time when date changes
                          }}
                          className="rounded-md border mx-auto"
                          disabled={(date) => {
                            const today = new Date()
                            today.setHours(0, 0, 0, 0)
                            return date < today || date.getDay() === 0 // Bugünden önceki günler ve Pazar günleri kapalı
                          }}
                          locale={tr}
                        />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base sm:text-lg">Saat Seçin</CardTitle>
                        {selectedDate ? (
                          <CardDescription>
                            {format(selectedDate, "d MMMM yyyy, EEEE", { locale: tr })} için uygun saatler
                          </CardDescription>
                        ) : (
                          <CardDescription>Lütfen önce bir tarih seçin</CardDescription>
                        )}
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => {
                            const isPassed = isTimeSlotPassed(selectedDate, time)
                            return (
                              <Button
                                key={time}
                                variant={selectedTime === time ? "default" : "outline"}
                                className={cn("w-full text-xs sm:text-sm", isPassed && "opacity-50 cursor-not-allowed")}
                                onClick={() => setSelectedTime(time)}
                                disabled={!selectedDate || isPassed}
                              >
                                {time}
                              </Button>
                            )
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button onClick={handleNext} disabled={!selectedDate || !selectedTime} className="w-full sm:w-auto">
                      Devam Et
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="mb-4 text-lg sm:text-xl font-semibold">Personel Seçin</h2>
                  <RadioGroup
                    value={selectedStaff?.toString()}
                    onValueChange={(value) => setSelectedStaff(Number(value))}
                  >
                    <div className="grid gap-4 md:grid-cols-2">
                      {staff.map((person) => (
                        <Card
                          key={person.id}
                          className={cn(
                            "cursor-pointer transition-colors hover:border-primary gap-0",
                            selectedStaff === person.id && "border-primary",
                          )}
                          onClick={() => setSelectedStaff(person.id)}
                        >
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-4">
                              <div className="h-16 w-16 rounded-full overflow-hidden bg-muted">
                                <Image
                                  src={person.image || "/placeholder.svg"}
                                  alt={person.name}
                                  width={100}
                                  height={100}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <CardTitle className="text-base sm:text-lg">{person.name}</CardTitle>
                                <CardDescription>{person.role}</CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Deneyim:</span>
                                <span className="text-muted-foreground">{person.experience}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Uzmanlık:</span>
                                <span className="text-muted-foreground">{person.specialties}</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-end">
                            <RadioGroupItem
                              value={person.id.toString()}
                              id={person.id.toString()}
                              className="h-5 w-5 border-primary"
                            />
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </RadioGroup>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-between">
                    <Button variant="outline" onClick={handleBack} className="order-2 sm:order-1 w-full sm:w-auto">
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Geri
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={!selectedStaff}
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
                      <CardTitle>Randevu Detayları</CardTitle>
                      <CardDescription>Lütfen bilgilerinizi girin ve randevunuzu onaylayın</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <Label htmlFor="fullName">Ad Soyad</Label>
                          <Input
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Adınız ve soyadınız"
                            required
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="phone">Telefon</Label>
                          <Input
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="05XX XXX XX XX"
                            required
                          />
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <div className="font-medium">Seçilen Tarih ve Saat</div>
                          <div className="rounded-md bg-muted p-3">
                            {selectedDate && format(selectedDate, "d MMMM yyyy, EEEE", { locale: tr })} - {selectedTime}
                          </div>
                        </div>

                        <div className="grid gap-2">
                          <div className="font-medium">Seçilen Personel</div>
                          <div className="rounded-md bg-muted p-3 flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden bg-background">
                              <Image
                                src={staff.find((s) => s.id === selectedStaff)?.image || "/placeholder.svg"}
                                alt={staff.find((s) => s.id === selectedStaff)?.name || "Personel"}
                                width={40}
                                height={40}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">{staff.find((s) => s.id === selectedStaff)?.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {staff.find((s) => s.id === selectedStaff)?.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                      <Button variant="outline" onClick={handleBack} className="order-2 sm:order-1 w-full sm:w-auto">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Geri
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        disabled={!fullName || !phone}
                        className="order-1 sm:order-2 w-full sm:w-auto"
                      >
                        Randevuyu Onayla
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-12 w-12 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Randevunuz Onaylandı!</h2>
              <p className="mb-8 max-w-md text-muted-foreground">
                Randevu detaylarınız size gönderilecektir. Randevunuzu görüntülemek veya
                değiştirmek için hesabınıza giriş yapabilirsiniz.
              </p>
              <div className="w-full max-w-md rounded-lg border bg-card p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Ad Soyad:</span>
                    <span>{fullName}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Tarih:</span>
                    <span>{selectedDate && format(selectedDate, "d MMMM yyyy, EEEE", { locale: tr })}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Saat:</span>
                    <span>{selectedTime}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Personel:</span>
                    <span>{staff.find((s) => s.id === selectedStaff)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Telefon:</span>
                    <span>{phone}</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button onClick={() => (window.location.href = "/")}>Ana Sayfaya Dön</Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
