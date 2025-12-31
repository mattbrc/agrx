import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookingWidget } from "@/components/booking-widget";
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
          <h2 className="text-foreground mb-12 text-center text-3xl font-bold sm:text-4xl">
            Our Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Weight Management",
                description:
                  "Custom medications for appetite suppression, glucose control, and",
                highlight: "weight loss",
                image: "/female-mountain-runner.JPG",
              },
              {
                title: "Testosterone Therapy",
                description: "Natural supplements boost hormones and",
                highlight: "testosterone ",
                descriptionEnd: "production.",
                image: "/ski.JPG",
              },
              {
                title: "Peptide Therapy",
                highlight: "Peptides",
                description:
                  "enhance wellness: anti-aging, strength, energy, and sleep.",
                highlightFirst: true,
                image: "/cycle-performance.JPG",
              },
              {
                title: "Hormone Therapy",
                description: "Bioidentical",
                highlight: "hormone therapy",
                descriptionEnd: " for menopause symptom relief and balance.",
                image: "/horse-bw.png",
              },
              {
                title: "Virtual Primary Care",
                description: "Convenient online visits for",
                highlight: "personalized medical care",
                descriptionEnd: " and wellness support.",
                image: "/grass-bw.png",
              },
              {
                title: "Sexual Wellness",
                description: "Custom medications to enhance and improve",
                highlight: "sexual health",
                descriptionEnd: ", endurance, and libido.",
                image: "/lion-bw.png",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group relative h-[500px] overflow-hidden rounded-2xl bg-zinc-200"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-white/90">
                    {service.highlightFirst ? (
                      <>
                        <span className="text-primary font-medium">
                          {service.highlight}
                        </span>{" "}
                        {service.description}
                      </>
                    ) : (
                      <>
                        {service.description}{" "}
                        <span className="text-primary font-medium">
                          {service.highlight}
                        </span>
                        {service.descriptionEnd}
                      </>
                    )}
                  </p>
                  <BookingWidget size="sm" buttonText="Book Now →" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              How It Works
            </p>
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              Begin Your Journey In
            </h2>
            <div className="relative mt-2 inline-block">
              <span className="text-primary text-3xl font-bold sm:text-4xl">
                3 Easy Steps
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5C47 2 153 2 199 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-primary"
                />
                <path
                  d="M1 7C47 3.5 153 3.5 199 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-primary/60"
                />
              </svg>
            </div>
          </div>

          <div className="mb-12 grid gap-12 md:grid-cols-3">
            {[
              {
                step: 1,
                title: "Book Your Consultation",
                description:
                  "No Hidden Fees – Our virtual consultations and follow-up check-ins, conducted by a licensed medical professional, are 100% complimentary.",
              },
              {
                step: 2,
                title: "Meet With Your Provider",
                description:
                  "Meet with your board certified provider to craft your personal, customized treatment plan for your unique health needs.",
              },
              {
                step: 3,
                title: "Get Prescriptions Delivered",
                description:
                  "Experience the ultimate convenience of having your prescriptions delivered right to your doorstep.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-muted mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full sm:h-40 sm:w-40">
                  <span className="text-primary text-5xl font-bold sm:text-6xl">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-foreground mb-3 text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <BookingWidget size="lg" buttonText="Get Started Today" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/50 px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-foreground mb-6 text-3xl font-bold sm:text-4xl">
              Our Mission
            </h2>
            <p className="text-muted-foreground mb-4 text-lg">
              As a modern telehealth company, you won&apos;t have to go out of
              your way to see a doctor. You can get real prescriptions from a
              licensed physician from the comfort of your own home.
            </p>
            <p className="text-muted-foreground mb-8 text-lg">
              By providing an elite patient experience with our board-certified
              physicians and practitioners, delivering the highest quality
              research-based medicine, and striving to focus on preventative
              health and total wellness, at AG Rx, our mission is to guide you
              in your own transformation, as you achieve the ultimate results
              you desire.
            </p>
            <Button asChild>
              <a href="#contact">Our Providers</a>
            </Button>
          </div>
          <div className="hidden lg:block">
            <img
              src="/female-run.JPG"
              alt="Woman running at sunset"
              className="h-[750px] w-full rounded-2xl object-cover object-bottom"
            />
          </div>
        </div>
      </section>

      {/* Licensed States Section */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Image
              src="/licensed-states-2.jpeg"
              alt="Map showing 44 licensed states"
              width={600}
              height={400}
              className="rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-foreground mb-2 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Licensed
            </h2>
            <h2 className="mb-2 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              <span className="text-foreground">In </span>
              <span className="text-primary">44</span>
            </h2>
            <h2 className="text-foreground mb-6 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              States
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Our board-certified providers are licensed to practice
              telemedicine across 44 states, bringing expert healthcare directly
              to you.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center gap-3">
                <span className="bg-primary h-2 w-2 rounded-full" />
                <span className="text-muted-foreground">
                  Board-certified medical professionals
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-primary h-2 w-2 rounded-full" />
                <span className="text-muted-foreground">
                  Licensed for telemedicine practice
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-primary h-2 w-2 rounded-full" />
                <span className="text-muted-foreground">
                  Compliant with state regulations
                </span>
              </li>
            </ul>
            <BookingWidget buttonText="Meet with a provider in my state" />
          </div>
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

      {/* Footer */}
      <footer className="bg-muted/50 border-border border-t px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Main Footer Grid */}
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {/* Brand Column */}
            <div className="text-center md:text-left">
              <span className="text-primary text-2xl font-bold">AG Rx</span>
              <p className="text-muted-foreground mt-3 text-sm">
                Your trusted partner in personalized healthcare and wellness.
              </p>
            </div>

            {/* Links Column */}
            <div className="text-center">
              <h4 className="text-foreground mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/hipaa"
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    HIPAA Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="text-center md:text-right">
              <h4 className="text-foreground mb-4 font-semibold">Contact</h4>
              <a
                href="mailto:contact@agrxhealth.com"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                contact@agrxhealth.com
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-border my-10 border-t" />

          {/* Bottom Row */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Compliance Badge */}
            <div className="flex items-center gap-3">
              <Image
                src="/healthcareLogo.png"
                alt="HIPAA Compliant"
                width={32}
                height={32}
              />
              <div className="text-sm">
                <span className="text-foreground font-medium">HIPAA</span>
                <span className="text-muted-foreground"> Compliant</span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} AG Rx. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
