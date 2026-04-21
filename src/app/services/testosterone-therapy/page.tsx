import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
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
  title: "Testosterone Therapy | AG Rx",
  description:
    "Personalized testosterone optimization with TRT, Enclomiphene, HCG, and more. Custom protocols from licensed providers in 44 states. Book a free consultation.",
  openGraph: {
    title: "Testosterone Therapy | AG Rx",
    description:
      "Personalized testosterone optimization with TRT, Enclomiphene, HCG, and more. Custom protocols from licensed providers in 44 states.",
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const symptoms = [
  "Chronic fatigue or low energy",
  "Decreased libido or sexual desire",
  "Erectile dysfunction",
  "Loss of muscle mass or strength",
  "Increased body fat",
  "Brain fog or poor concentration",
  "Mood changes or irritability",
  "Decreased stamina or endurance",
  "Reduced bone density",
  "Poor sleep quality",
];

const programs = [
  {
    name: "TRT",
    badge: "Most Popular",
    description:
      "Enhance vitality and strength with physician-supervised testosterone replacement therapy in rapid, moderate, and long-acting formulas.",
  },
  {
    name: "Enclomiphene Citrate",
    badge: "Fertility-Friendly",
    description:
      "Boost testosterone naturally by stimulating your body\u2019s own production through the hypothalamic-pituitary-gonadal axis \u2014 without exogenous testosterone.",
  },
  {
    name: "HCG Injections",
    badge: "Natural Production",
    description:
      "Stimulate testosterone production naturally while preserving fertility and maintaining testicular size and function.",
  },
  {
    name: "MCT Oil TRT",
    badge: "Seed-Oil Free",
    description:
      "Enhance vitality and strength with seed-oil-free testosterone replacement therapy formulated with MCT oil for superior absorption.",
  },
];

const differentiators = [
  {
    title: "Custom Treatment Plans",
    description:
      "Tailored protocols based on your labs, symptoms, and goals \u2014 not cookie-cutter prescriptions.",
  },
  {
    title: "Bioidentical Hormones",
    description:
      "Chemically identical to what your body produces, promoting natural synergy with your hormonal processes.",
  },
  {
    title: "Safe & Monitored Care",
    description:
      "Experienced providers monitor your progress closely, adjusting treatment to ensure optimal levels and minimize side effects.",
  },
  {
    title: "Natural Production Support",
    description:
      "We don\u2019t just replace \u2014 we stimulate your body\u2019s own testosterone production for long-term hormonal balance.",
  },
  {
    title: "Individualized Prescriptions",
    description:
      "Every prescription is based on comprehensive health assessments and hormone testing \u2014 optimized for your unique physiology.",
  },
  {
    title: "Transparent Care",
    description:
      "No hidden fees, no insurance games. Clear pricing and open communication throughout your journey.",
  },
];

const faqs = [
  {
    question: "What is Testosterone Therapy?",
    answer:
      "Testosterone Therapy involves the administration of testosterone to increase low levels of this hormone in the body. It is prescribed to individuals experiencing symptoms of low testosterone, also known as hypogonadism.",
  },
  {
    question: "Who can benefit from Testosterone Therapy?",
    answer:
      "Testosterone Therapy is beneficial for men with clinically low testosterone levels (typically below 300 ng/dL) who are experiencing symptoms such as fatigue, decreased libido, erectile dysfunction, mood changes, decreased muscle mass, and reduced bone density.",
  },
  {
    question: "How is Testosterone Therapy administered?",
    answer:
      "Testosterone can be administered in several forms, including injections (intramuscular or subcutaneous), topical gels, patches, buccal tablets, and pellets implanted under the skin. The choice depends on patient preference, convenience, and treatment goals.",
  },
  {
    question: "What are the potential benefits of Testosterone Therapy?",
    answer:
      "Benefits may include increased energy levels, improved mood and sense of well-being, enhanced libido and sexual function, increased muscle mass and strength, improved bone density, and better cognitive function.",
  },
  {
    question: "Is Testosterone Therapy safe?",
    answer:
      "When prescribed and monitored by a qualified healthcare provider, Testosterone Therapy is generally safe and effective for most men with hypogonadism. Risks and benefits should be carefully discussed, especially in men with pre-existing conditions.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results can vary depending on the individual, the severity of testosterone deficiency, and the chosen method of administration. Some men experience improvements in symptoms within weeks to months of starting therapy.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "Common side effects may include acne, oily skin, fluid retention, increased red blood cell count, and breast tissue changes. Monitoring and management of these side effects are essential during treatment.",
  },
  {
    question: "Can Testosterone Therapy increase the risk of prostate cancer?",
    answer:
      "Current research suggests that testosterone therapy does not increase the risk of prostate cancer in men with normal prostate exams and testosterone levels. Men with a history of prostate cancer may require careful monitoring.",
  },
  {
    question: "How often will my testosterone levels be monitored?",
    answer:
      "Initially, testosterone levels may be checked frequently to assess response to therapy. Once stable levels are achieved, monitoring is typically every 3 to 6 months.",
  },
  {
    question: "Is Testosterone Therapy covered by insurance?",
    answer:
      "We do not accept insurance, but we do accept HSA and FSA accounts as well as CareCredit. Our transparent cash-pay pricing means no surprise bills or insurance headaches.",
  },
  {
    question: "What\u2019s the difference between TRT and Enclomiphene?",
    answer:
      "TRT provides exogenous testosterone directly, while Enclomiphene stimulates your body\u2019s own testosterone production through the hypothalamic-pituitary-gonadal axis. Enclomiphene is often preferred for men who want to preserve fertility.",
  },
  {
    question: "Will Testosterone Therapy affect my fertility?",
    answer:
      "Traditional TRT can reduce sperm production. If fertility is a concern, we offer alternatives like Enclomiphene Citrate and HCG injections that support testosterone levels while preserving spermatogenesis.",
  },
  {
    question: "How are medications delivered?",
    answer:
      "All medications are shipped directly to your door from US-licensed pharmacies. Shipments are discreet and typically arrive within 7\u201310 business days. Refills are handled automatically based on your protocol schedule.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free virtual consultation with one of our licensed providers. We\u2019ll review your symptoms, health history, and labs to determine the best protocol for you. If you have recent bloodwork, bring it along \u2014 if not, we can order it.",
  },
];

const trustSignals = [
  {
    title: "Licensed in 44 States",
    description:
      "Board-certified providers licensed for telemedicine across the continental US.",
  },
  {
    title: "HIPAA Compliant",
    description:
      "Your health data is protected with enterprise-grade security and encryption.",
  },
  {
    title: "US-Licensed Pharmacies",
    description:
      "All medications sourced from accredited, US-based compounding pharmacies.",
  },
  {
    title: "Discreet Delivery",
    description:
      "Medications shipped directly to your door in unmarked packaging.",
  },
  {
    title: "Ongoing Provider Support",
    description:
      "Real follow-ups with your provider \u2014 not a chatbot. Available when you need them.",
  },
  {
    title: "HSA / FSA Accepted",
    description:
      "Use your pre-tax health accounts. We also accept CareCredit financing.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function TestosteroneTherapyPage() {
  return (
    <>
      {/* ───── 1. Hero ───── */}
      <section className="flex min-h-[60vh] items-center px-6 pt-40 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
            Testosterone Therapy
          </p>
          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Personalized Hormone Optimization
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg leading-relaxed">
            Custom performance-peaking treatment plans developed through natural
            and bioidentical supplementation, resulting in maximum changes in
            your hormone levels with superior results. Synthetic testosterone
            therapy in rapid, moderate, and long-acting formulas combined with
            individual prescriptions to stimulate your body&apos;s natural
            production.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <BookingWidget size="lg" buttonText="Schedule Consultation" />
            <Button variant="outline" size="lg" asChild>
              <a href="#programs">View Programs</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ───── 2. Symptoms ───── */}
      <section className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Recognize the Signs
            </p>
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              Are You Experiencing These Symptoms?
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Low testosterone affects millions of men. If you&apos;re
              experiencing any of these, it may be time to check your levels.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            {symptoms.map((symptom) => (
              <div key={symptom} className="flex items-center gap-3">
                <span className="bg-primary h-2 w-2 shrink-0 rounded-full" />
                <span className="text-muted-foreground">{symptom}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <BookingWidget buttonText="Get Your Levels Checked" />
          </div>
        </div>
      </section>

      {/* ───── 3. Programs ───── */}
      <section id="programs" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Treatment Programs
            </p>
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              Choose Your Protocol
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {programs.map((program) => (
              <Card key={program.name}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-lg font-semibold">
                      {program.name}
                    </CardTitle>
                    <Badge variant="secondary">{program.badge}</Badge>
                  </div>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <BookingWidget size="sm" buttonText="Book Now" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 4. The AG Rx Difference ───── */}
      <section className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Why We&apos;re Different
            </p>
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              The AG Rx Difference
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              We specialize in personalized hormone optimization that combines
              natural supplements and custom testosterone therapy for superior
              results.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => (
              <div key={d.title} className="flex flex-col gap-2">
                <h3 className="text-foreground text-lg font-semibold">
                  {d.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 5. Treatment Details ───── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Treatment Options
            </p>
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              In-Depth Treatment Breakdown
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Our expert providers will help you find the perfect solution for
              your needs and health goals. Here are the treatment options
              available.
            </p>
          </div>

          <div className="space-y-16">
            {/* TRT */}
            <div>
              <h3 className="text-foreground mb-4 text-2xl font-bold">
                Testosterone Replacement Therapy (TRT)
              </h3>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Testosterone Replacement Therapy is a specialized medical
                  treatment designed to address testosterone deficiencies in
                  individuals whose hormone levels have dropped below normal
                  ranges. We offer TRT as a transformative solution to enhance
                  vitality, strength, and overall quality of life.
                </p>
                <p>
                  Through TRT, we optimize testosterone levels to alleviate
                  symptoms associated with low testosterone \u2014 fatigue,
                  decreased stamina, loss of muscle mass, and diminished sexual
                  desire. Our treatment protocols are tailored to each
                  individual&apos;s specific needs, delivering a revitalization
                  of energy, improved physical performance, and enhanced mental
                  clarity.
                </p>
              </div>
              <div className="mt-6">
                <BookingWidget size="sm" buttonText="Start TRT" />
              </div>
            </div>

            {/* Enclomiphene */}
            <div>
              <h3 className="text-foreground mb-4 text-2xl font-bold">
                Enclomiphene Citrate
              </h3>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Enclomiphene citrate is a selective estrogen receptor modulator
                  (SERM) that naturally boosts testosterone levels. Unlike
                  traditional TRT, enclomiphene works by stimulating your
                  body&apos;s own production of testosterone through the
                  hypothalamic-pituitary-gonadal axis \u2014 making it a
                  preferred choice for men looking to enhance performance without
                  exogenous testosterone.
                </p>
                <p>
                  By blocking estrogen receptors at the hypothalamus,
                  enclomiphene signals the pituitary gland to increase secretion
                  of FSH and LH, which stimulate the testes to produce more
                  testosterone naturally. This approach maintains healthy
                  testosterone levels while supporting fertility and preserving
                  spermatogenesis.
                </p>
              </div>
              <div className="mt-6">
                <BookingWidget
                  size="sm"
                  buttonText="Learn About Enclomiphene"
                />
              </div>
            </div>

            {/* HCG */}
            <div>
              <h3 className="text-foreground mb-4 text-2xl font-bold">
                HCG Injections
              </h3>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Human chorionic gonadotropin (HCG) injections stimulate
                  testosterone production naturally, offering a targeted approach
                  to enhancing hormonal balance. HCG mimics luteinizing hormone
                  (LH) in the body, which plays a critical role in stimulating
                  the testes to produce testosterone.
                </p>
                <p>
                  This approach supports the body&apos;s natural processes
                  without introducing exogenous testosterone, making it ideal for
                  men seeking to enhance performance, libido, and energy levels
                  while preserving fertility and maintaining testicular size and
                  function.
                </p>
              </div>
              <div className="mt-6">
                <BookingWidget size="sm" buttonText="Ask About HCG" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 6. How It Works ───── */}
      <section className="bg-muted/50 px-6 py-24">
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
                  "Schedule a free virtual consultation with a licensed provider. No surprise fees, no commitments.",
              },
              {
                step: 2,
                title: "Meet With Your Provider",
                description:
                  "Connect virtually with a board-certified provider who builds a custom testosterone protocol based on your labs, goals, and lifestyle.",
              },
              {
                step: 3,
                title: "Get Your Prescriptions Delivered",
                description:
                  "Your medications ship directly to your door from US-licensed pharmacies. Refills and follow-ups handled online.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-background mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full sm:h-40 sm:w-40">
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

      {/* ───── 7. FAQ ───── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              FAQ
            </p>
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              Testosterone Therapy Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
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

      {/* ───── 8. Why Choose AG Rx ───── */}
      <section className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Trust & Safety
            </p>
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              Why Choose AG Rx
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Your health deserves the highest standard of care, privacy, and
              convenience.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {trustSignals.map((signal) => (
              <div key={signal.title} className="flex flex-col gap-2">
                <h3 className="text-foreground font-semibold">
                  {signal.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 9. Final CTA ───── */}
      <section className="bg-primary px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-primary-foreground mb-4 text-3xl font-bold">
            Ready to Optimize Your Testosterone?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Take charge of your hormone health today. Book a free consultation
            with a licensed provider and discover what personalized care can do
            for you.
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
