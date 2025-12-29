import { Button } from "@/components/ui/button";
import { BookingWidget } from "@/components/booking-widget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollingBanner } from "@/components/scrolling-banner";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Scrolling Banner */}
      <div className="fixed top-0 z-50 w-full">
        <ScrollingBanner />
      </div>

      {/* Header */}
      <header className="border-border/50 bg-background/80 fixed top-9 z-40 w-full border-b backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="text-primary text-2xl font-bold">AG Rx</div>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <BookingWidget />
          </div>
          <div className="md:hidden">
            <BookingWidget buttonText="Book" size="sm" />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/road-running-hero.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/40 md:bg-black/20" />
        <div className="relative z-10 mx-auto max-w-4xl text-center [text-shadow:_0_2px_12px_rgb(0_0_0_/_40%)]">
          <h1 className="font-heading mb-6 text-4xl font-bold italic tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Partner in{" "}
            <span className="text-accent">Health & Wellness</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Experience personalized healthcare designed around you. Our team of
            experts is dedicated to helping you achieve optimal health and
            well-being.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <BookingWidget size="lg" />
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <a href="#services">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-foreground mb-12 text-center text-3xl font-bold">
            Our Services
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Primary Care",
                description:
                  "Comprehensive health assessments and ongoing care for your everyday health needs.",
              },
              {
                title: "Wellness Programs",
                description:
                  "Customized programs to help you achieve your health and fitness goals.",
              },
              {
                title: "Preventive Care",
                description:
                  "Proactive screenings and health maintenance to keep you at your best.",
              },
            ].map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            About AG Rx
          </h2>
          <p className="text-muted-foreground text-lg">
            We believe in a patient-centered approach to healthcare. Our clinic
            combines modern medical expertise with personalized attention to
            ensure you receive the care you deserve. From routine check-ups to
            specialized treatments, we&apos;re here to support your health
            journey.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-primary-foreground mb-4 text-3xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Book your appointment today and take the first step toward better
            health.
          </p>
          <BookingWidget variant="secondary" size="lg" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Contact Us
          </h2>
          <div className="text-muted-foreground space-y-2">
            <p>123 Wellness Way, Suite 100</p>
            <p>Your City, State 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: hello@agrx.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-border border-t px-6 py-8">
        <div className="text-muted-foreground mx-auto max-w-6xl text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AG Rx. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
