import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookingWidget } from "@/components/booking-widget";
import { FaqSection } from "@/components/faq-section";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/western-runner.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/40 md:bg-black/20" />
        <div className="relative z-10 mx-auto max-w-4xl text-center [text-shadow:_0_2px_12px_rgb(0_0_0_/_40%)]">
          <h1 className="font-heading mb-6 text-4xl font-bold italic tracking-tight text-white sm:text-5xl lg:text-6xl">
            Live Better With <span className="text-primary-light">AG Rx</span>
          </h1>
          <p className="mx-auto mb-2 max-w-2xl text-lg text-white/90">
            Testosterone optimization, peptide protocols, and weight management
            designed for high performing individuals.
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Delivered by top telehealth providers.
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

      {/* Our Story Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
            Our Story
          </p>
          <h2 className="text-foreground mb-8 text-3xl font-bold sm:text-4xl">
            Built by Men Who Get It
          </h2>
          <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
            <p>
              Acid Gambit was founded on the principle that we have a moral
              obligation to be as fit as possible to protect our families, our
              loved ones, and our communities. AG chases performance
              optimization through the use of structured training programs,
              scientific literature, lifestyle changes, and professional
              training anecdotes.
            </p>
            <p>
              AG Rx is the natural extension of Acid Gambit. Granting access to
              highly experienced medical practitioners and pharmocological
              solutions to problems Acid Gambit could not solve: biological
              limitations we hit in striving for Greatness. We built AG Rx
              because we needed it ourselves. We wanted providers who understood
              optimization. Not just treating disease, but maximizing
              performance. We wanted real protocols, not cookie-cutter
              prescriptions. And we wanted a system that respected our time and
              delivered results.
            </p>
            <p className="text-foreground font-medium">
              Now we&apos;re making that same level of care available across 44
              states.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-foreground mb-12 text-center text-3xl font-bold sm:text-4xl">
            Our Services
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                title: "Testosterone Therapy",
                description: "Physician-supervised",
                highlight: "testosterone optimization",
                descriptionEnd: " to restore energy, strength, and drive.",
                image: "/ski.JPG",
              },
              {
                title: "Peptide Therapy",
                description: "Targeted",
                highlight: "peptide protocols",
                descriptionEnd: " for recovery, performance, and longevity.",
                image: "/cycle-performance.JPG",
              },
              {
                title: "Weight Management",
                description:
                  "Custom medications for appetite suppression, glucose control, and",
                highlight: "weight loss",
                image: "/weightlifter.JPG",
              },
              {
                title: "Sexual Wellness",
                description: "Custom medications to enhance and improve",
                highlight: "sexual health",
                descriptionEnd: ", endurance, and libido.",
                image: "/jets.JPG",
              },
              {
                title: "Virtual Primary Care",
                description: "Convenient online visits for",
                highlight: "ongoing care",
                descriptionEnd: " and medication management.",
                image: "/tree-moon.JPG",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group relative h-[500px] w-full overflow-hidden rounded-2xl bg-stone-200 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
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
                    {service.description}{" "}
                    <span className="font-medium">{service.highlight}</span>
                    {service.descriptionEnd}
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
            <div className="relative inline-block">
              <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
                3 Steps to Get Started
              </h2>
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
                  "Schedule a free virtual consultation with a licensed provider. No surprise fees, no commitments.",
              },
              {
                step: 2,
                title: "Meet With Your Provider",
                description:
                  "Connect virtually with a board-certified provider who builds a custom protocol based on your labs, goals, and lifestyle.",
              },
              {
                step: 3,
                title: "Get Your Prescriptions Delivered",
                description:
                  "Your medications ship directly to your door from US-licensed pharmacies. Refills and follow-ups handled online.",
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

      {/* Licensed States Section */}
      <section className="bg-muted/50 px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Image
              src="/licensed-states.png"
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
              telemedicine across 44 states, bringing expert care directly to
              you.
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
            <BookingWidget buttonText="Meet With a Provider in My State" />
          </div>
        </div>
      </section>

      {/* Why AG Rx Section */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-foreground mb-6 text-3xl font-bold sm:text-4xl">
              Why AG Rx?
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              We&apos;re not another telehealth startup pushing pills through a
              chatbot. AG Rx was built for men who take performance seriously
              and expect their healthcare to keep up.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center gap-3">
                <span className="bg-primary h-2 w-2 rounded-full" />
                <span className="text-muted-foreground">
                  Providers who understand optimization, not just symptom
                  management
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-primary h-2 w-2 rounded-full" />
                <span className="text-muted-foreground">
                  Transparent cash-pay pricing with no insurance games
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-primary h-2 w-2 rounded-full" />
                <span className="text-muted-foreground">
                  Backed by a licensed provider network across 44 states
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-primary h-2 w-2 rounded-full" />
                <span className="text-muted-foreground">
                  Real protocols from US-licensed pharmacies - no grey market,
                  no guesswork
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-primary h-2 w-2 rounded-full" />
                <span className="text-muted-foreground">
                  Ongoing support, not just a one-time script
                </span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/providers">Our Providers</Link>
            </Button>
          </div>
          <div className="hidden lg:block">
            <img
              src="/work.JPG"
              alt="Athletic performance"
              className="h-[750px] w-full rounded-2xl object-cover object-bottom"
            />
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-foreground mb-6 text-3xl font-bold sm:text-4xl">
            Who This Is For
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            AG Rx isn&apos;t for everyone. It&apos;s for men who&apos;ve been
            putting in the work and want their biology to stop fighting them.
          </p>
          <ul className="mb-8 space-y-4 text-left sm:mx-auto sm:max-w-xl">
            <li className="flex items-start gap-3">
              <span className="bg-primary mt-2 h-2 w-2 shrink-0 rounded-full" />
              <span className="text-muted-foreground">
                Veterans and active duty who refuse to let age dictate their
                limits
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary mt-2 h-2 w-2 shrink-0 rounded-full" />
              <span className="text-muted-foreground">
                First responders staying sharp on and off the job
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary mt-2 h-2 w-2 shrink-0 rounded-full" />
              <span className="text-muted-foreground">
                Athletes and lifters who&apos;ve hit a wall despite doing
                everything right
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary mt-2 h-2 w-2 shrink-0 rounded-full" />
              <span className="text-muted-foreground">
                Professionals who need sustained energy, focus, and drive
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary mt-2 h-2 w-2 shrink-0 rounded-full" />
              <span className="text-muted-foreground">
                Men who aren&apos;t done yet and aren&apos;t interested in
                &quot;managing decline&quot;
              </span>
            </li>
          </ul>
          <p className="text-foreground mb-8 text-lg font-medium">
            If that sounds like you, we should talk.
          </p>
          <BookingWidget size="lg" buttonText="Book Your Consultation" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-primary-foreground mb-4 text-3xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            You&apos;ve put in the work. Now get the support to match it.
          </p>
          <BookingWidget
            variant="secondary"
            size="lg"
            buttonText="Book Appointment"
          />
        </div>
      </section>

      <FaqSection />
    </>
  );
}
