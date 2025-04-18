import {
  Contact,
  Footer,
  Header,
  Hero,
  HowItWorks,
  Reviews,
  Services
} from "@/components/sections"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
