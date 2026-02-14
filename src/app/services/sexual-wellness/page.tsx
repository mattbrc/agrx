import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { BookingWidget } from "@/components/booking-widget";

export const metadata: Metadata = {
  title: "Sexual Wellness | AG Rx",
  description:
    "Custom medications and topicals for erectile dysfunction, premature ejaculation, libido, and performance. Discreet consultations with licensed providers in 44 states.",
  openGraph: {
    title: "Sexual Wellness | AG Rx",
    description:
      "Custom medications and topicals for erectile dysfunction, premature ejaculation, libido, and performance. Discreet consultations with licensed providers.",
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const medications = [
  {
    name: "Tadalafil (Sublingual)",
    badge: "Upgraded Cialis",
    benefits: [
      "Dissolves under your tongue 15\u201330 min prior to sexual encounter",
      "Cheaper per dose than traditional tablets",
      "Faster acting: 15\u201330 min vs 1 hour",
    ],
  },
  {
    name: "Sildenafil (Sublingual)",
    badge: "Upgraded Viagra",
    benefits: [
      "Dissolves under your tongue 15\u201330 min prior to sexual encounter",
      "Cheaper per dose than traditional tablets",
      "Faster acting: 15\u201330 min vs 1 hour",
    ],
  },
];

const concerns = [
  {
    title: "Privacy & Confidentiality",
    description:
      "Online consultations are conducted through secure, encrypted platforms that comply with healthcare privacy regulations. Your personal information and discussions are kept strictly confidential.",
  },
  {
    title: "No Judgment",
    description:
      "Our providers approach every consultation with empathy and professionalism. Sexual health issues are common medical concerns that deserve proper attention and care.",
  },
  {
    title: "Strong Doctor-Patient Relationship",
    description:
      "We build meaningful relationships through clear communication and attentive listening, taking the time to understand your needs and provide personalized recommendations.",
  },
  {
    title: "Easy-to-Use Platform",
    description:
      "Our online consultation platform is user-friendly and designed to minimize technical issues, with support available to ensure a smooth experience.",
  },
  {
    title: "Compassionate Care",
    description:
      "We understand that discussing sexual health can be sensitive. Our providers are trained to create a supportive, non-judgmental environment where you can openly discuss your concerns.",
  },
  {
    title: "Clear Expectations",
    description:
      "We provide clear explanations about potential outcomes and work collaboratively with you to develop a personalized treatment plan that meets your goals.",
  },
];

const faqs = [
  {
    question: "What is sexual wellness?",
    answer:
      "Sexual wellness refers to the overall state of physical, emotional, mental, and social well-being related to sexuality. It encompasses sexual satisfaction, function, and intimacy.",
  },
  {
    question: "What are common issues related to sexual wellness?",
    answer:
      "Common issues include erectile dysfunction, premature ejaculation, low libido, difficulty achieving orgasm, hormonal imbalances affecting sexual health, and sexual performance anxiety.",
  },
  {
    question: "What treatments are available for erectile dysfunction?",
    answer:
      "Treatments may include oral medications (such as sildenafil or tadalafil), custom compounded sublingual medications, injections, and lifestyle modifications.",
  },
  {
    question: "How can premature ejaculation be treated?",
    answer:
      "Treatment options may include behavioral techniques, topical numbing agents, oral medications, and counseling to address underlying psychological factors.",
  },
  {
    question: "Can hormonal imbalances affect sexual wellness?",
    answer:
      "Yes, hormonal imbalances such as low testosterone or estrogen levels can significantly impact sexual health. Hormone replacement therapies may be recommended to restore balance and improve sexual function.",
  },
  {
    question: "What can I expect during a consultation?",
    answer:
      "You can expect a comprehensive assessment of your sexual health history, current concerns, and goals. Our specialists will discuss treatment options tailored to your needs and answer any questions you may have.",
  },
  {
    question: "Is my consultation confidential?",
    answer:
      "Yes, confidentiality is a top priority. We adhere to strict privacy policies to ensure your personal information and consultations remain confidential.",
  },
  {
    question: "How soon can I expect to see results?",
    answer:
      "Results vary depending on the treatment chosen and individual factors. Some treatments may show improvement within weeks, while others may take several months for full effectiveness.",
  },
  {
    question: "Are the treatments safe?",
    answer:
      "Yes, all treatments are administered by experienced healthcare professionals and are considered safe when prescribed and monitored appropriately. We prioritize patient safety and efficacy in all our treatments.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SexualWellnessPage() {
  return (
    <>
      {/* ───── 1. Hero ───── */}
      <section className="flex min-h-[60vh] items-center px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
            Sexual Wellness
          </p>
          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Revitalize Your Sex Life
          </h1>
          <p className="text-muted-foreground mx-auto mb-4 max-w-2xl text-lg leading-relaxed">
            Custom medications and topicals to treat erectile dysfunction,
            premature ejaculation, increase endurance and libido, and improve
            climax. Optimize your pleasure and overall sexual health.
          </p>
          <p className="text-foreground mx-auto mb-8 max-w-2xl text-lg font-medium">
            It&apos;s time to get your sex life back.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <BookingWidget size="lg" buttonText="Schedule Consultation" />
          </div>
        </div>
      </section>

      {/* ───── 2. Medications ───── */}
      <section className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Performance &amp; Pleasure
            </p>
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              Sexual Enhancement
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Erectile dysfunction medication that works by suppressing the PDE5
              enzyme, allowing blood to flow more freely through the body for
              better erections and improved sexual function.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {medications.map((med) => (
              <Card key={med.name}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-lg font-semibold">
                      {med.name}
                    </CardTitle>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {med.badge}
                  </Badge>
                  <CardDescription>
                    <ul className="mt-2 space-y-1">
                      {med.benefits.map((benefit, bi) => (
                        <li key={bi} className="flex items-start gap-2">
                          <span className="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <BookingWidget size="sm" buttonText="Book Now" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 3. The AG Rx Difference ───── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Why We&apos;re Different
            </p>
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              The AG Rx Difference
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              We offer a comprehensive approach to revitalizing your sex life
              with custom medications and topicals. Treatments are tailored to
              your specific needs, ensuring the most effective solutions for
              enhancing both performance and pleasure.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-lg font-semibold">
                Personalized Treatments
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every treatment plan is unique, addressing your individual
                concerns and goals. Custom-compounded medications target your
                specific needs for the best possible results.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-lg font-semibold">
                Renewed Confidence
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Expect improvements in sexual function along with a renewed
                sense of confidence and well-being. Our expert guidance and
                support are with you every step of the way.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-lg font-semibold">
                Discreet &amp; Professional
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All consultations are discreet and personalized. Our providers
                approach sensitive topics with empathy and respect in a
                supportive, non-judgmental environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 4. Addressing Concerns ───── */}
      <section className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Your Comfort Matters
            </p>
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              Online Consultations, Zero Awkwardness
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              We understand that discussing sexual health can feel sensitive.
              Here&apos;s how we make the experience comfortable and
              confidential.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {concerns.map((concern) => (
              <div key={concern.title} className="flex flex-col gap-2">
                <h3 className="text-foreground font-semibold">
                  {concern.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {concern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 5. How It Works ───── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              How It Works
            </p>
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              3 Steps to Get Started
            </h2>
          </div>

          <div className="mb-12 grid gap-12 md:grid-cols-3">
            {[
              {
                step: 1,
                title: "Book Your Consultation",
                description:
                  "Schedule a free, discreet virtual consultation with a licensed provider. No surprise fees, no commitments.",
              },
              {
                step: 2,
                title: "Meet With Your Provider",
                description:
                  "Connect virtually with a board-certified provider who assesses your concerns and builds a custom treatment plan for your goals.",
              },
              {
                step: 3,
                title: "Discreet Delivery",
                description:
                  "Your medications ship directly to your door in unmarked packaging from US-licensed pharmacies. Follow-ups handled online.",
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

      {/* ───── 6. FAQ ───── */}
      <section className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              FAQ
            </p>
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              Sexual Wellness Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="text-muted-foreground mt-8 text-center text-sm">
            For personalized advice specific to your health needs, consult with
            a provider at AG Rx or{" "}
            <span className="text-primary font-medium">
              schedule a consultation today
            </span>
            .
          </p>
        </div>
      </section>

      {/* ───── 7. Final CTA ───── */}
      <section className="bg-primary px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-primary-foreground mb-4 text-3xl font-bold">
            Ready to Take the First Step?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Discreet, personalized consultations with expert providers.
            Experience the difference in care that prioritizes your well-being.
          </p>
          <BookingWidget
            variant="secondary"
            size="lg"
            buttonText="Book Your Free Consultation"
          />
        </div>
      </section>
    </>
  );
}
