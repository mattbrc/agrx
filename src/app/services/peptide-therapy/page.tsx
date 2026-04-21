import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { BookingWidget } from "@/components/booking-widget";

export const metadata: Metadata = {
  title: "Peptide Therapy | AG Rx",
  description:
    "Unlock your body's potential with targeted peptide protocols for muscle growth, anti-aging, cognitive function, recovery, and more. Licensed providers in 44 states.",
  openGraph: {
    title: "Peptide Therapy | AG Rx",
    description:
      "Unlock your body's potential with targeted peptide protocols for muscle growth, anti-aging, cognitive function, recovery, and more.",
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Peptide {
  name: string;
  benefits: string[];
}

interface PeptideCategory {
  category: string;
  peptides: Peptide[];
}

const peptideCategories: PeptideCategory[] = [
  {
    category: "Muscle Building & Strength",
    peptides: [
      {
        name: "CJC 1295 / Ipamorelin",
        benefits: [
          "Stimulates HGH",
          "Promotes fat loss without affecting blood sugar or tissue growth",
          "Improves sleep quality",
          "Increased energy and endurance",
          "Improved cellular repair",
          "Increased bone density and collagen production",
          "Accelerated healing and improved immune system",
          "Increase in muscle mass",
        ],
      },
      {
        name: "MK-677",
        benefits: [
          "Promotes fat loss",
          "Increased bone density",
          "Increase in lean body mass and muscle mass",
          "Improves sleep quality",
          "Increased energy and endurance",
          "Improved cellular repair",
        ],
      },
      {
        name: "IGF-1 LR3",
        benefits: [
          "Increases lean body mass and decreases fat",
          "Increases regenerative properties of nerve tissues",
          "Up-regulates anti-oxidant benefits",
          "Promotes hyperplasia in muscle cells for fuller muscle tissues",
        ],
      },
      {
        name: "Sermorelin",
        benefits: [
          "Increase in lean body mass",
          "Promotes fat loss",
          "Increased energy and strength",
          "Accelerated wound healing",
          "Improved cardiovascular and immune function",
          "Improves sleep quality and bone density",
          "Improved skin quality and higher collagen density",
          "Increased IGF-1",
        ],
      },
      {
        name: "Sermorelin + Ipamorelin",
        benefits: [
          "Promotes fat loss",
          "Increased collagen production",
          "Increase in lean body mass",
          "Improves sleep quality",
          "Increased energy and endurance",
          "Improved cellular repair",
        ],
      },
      {
        name: "Tesamorelin",
        benefits: [
          "Restores growth hormone",
          "Reduces visceral and abdominal fat",
          "Improves metabolism",
          "Increases energy",
          "Reduces risk of cardiovascular events",
          "Reduces triglycerides",
        ],
      },
      {
        name: "MOTS-C",
        benefits: [
          "Regulates metabolic processes and increases metabolism",
          "Promotes weight loss",
          "Converts glucose into usable energy",
          "Helps prevent diabetes and obesity",
          "Promotes renewal of cellular turnover",
          'Known as the "exercise replacement" peptide',
        ],
      },
    ],
  },
  {
    category: "Sleep",
    peptides: [
      {
        name: "CJC 1295 / Ipamorelin",
        benefits: [
          "Stimulates HGH",
          "Improves sleep quality",
          "Promotes fat loss without affecting blood sugar",
          "Increased energy and endurance",
          "Improved cellular repair and immune system",
        ],
      },
      {
        name: "DSIP",
        benefits: [
          "Improved sleeping patterns",
          "Reduction of chronic pain",
          "Regulation of circadian rhythm",
        ],
      },
    ],
  },
  {
    category: "Fountain of Youth",
    peptides: [
      {
        name: "Epithalon",
        benefits: [
          "Regulates cell cycle through telomerase activity up-regulation",
          "Increases and restores telomere length",
          "Improves glucose tolerance and decreases insulin and triglyceride levels",
          "Improvement on disturbed sleeping patterns",
          "Activates gene expression and protein synthesis in target tissues",
        ],
      },
      {
        name: "GHK-Cu",
        benefits: [
          "Improved skin elasticity",
          "Reduces hyper-pigmentation and skin spots",
          "Stimulates skin collagen",
          "Improves overall skin appearance",
          "Reduces inflammation",
          "Improves wound healing and reduces infections",
          "Increases hair growth and follicle size",
          "Increases production of stem cells",
        ],
      },
    ],
  },
  {
    category: "Sexual Enhancement",
    peptides: [
      {
        name: "Kisspeptin-10",
        benefits: [
          "Increases testosterone",
          "Increased energy",
          "Improves cognitive function",
          "Beneficial for low libido",
        ],
      },
      {
        name: "Bremelanotide PT-141",
        benefits: [
          "Beneficial for low libido",
          "Increases energy",
          "Beneficial for ED (erectile dysfunction)",
          "Helps enhance sexual satisfaction",
        ],
      },
    ],
  },
  {
    category: "Recovery & Healing",
    peptides: [
      {
        name: "BPC-157",
        benefits: [
          "Supports cognitive performance",
          "Supports joint health",
          "Protects against drug-induced damage",
          "Accelerated wound healing",
          "Ligament healing (knee, rotator cuff)",
          "Benefits for stomach ulcers",
          "Promotes fat loss",
        ],
      },
      {
        name: "GHK-Cu",
        benefits: [
          "Improved skin elasticity",
          "Reduces inflammation",
          "Improves wound healing and reduces infections",
          "Stimulates skin collagen",
          "Increases hair growth and follicle size",
          "Increases production of stem cells",
        ],
      },
    ],
  },
  {
    category: "Hair & Skin",
    peptides: [
      {
        name: "GHK-Cu",
        benefits: [
          "Improved skin elasticity",
          "Reduces hyper-pigmentation and skin spots",
          "Stimulates skin collagen",
          "Improves overall skin appearance",
          "Reduces inflammation",
          "Improves wound healing and reduces infections",
          "Increases hair growth and follicle size",
          "Increases production of stem cells",
        ],
      },
      {
        name: "Melanotan II",
        benefits: [
          "Analog of alpha-melanocyte stimulating hormone (a-MSH)",
          "Promotes natural skin tanning",
          "Provides a protective mechanism against UV rays",
        ],
      },
    ],
  },
  {
    category: "Cognitive Function",
    peptides: [
      {
        name: "Selank",
        benefits: [
          "Increases learning aptitude and memory processes",
          "Enhanced mental concentration",
          "Decreased anxiety and stress",
          "Better and steadier mood",
        ],
      },
      {
        name: "Semax",
        benefits: [
          "Enhanced mental concentration",
          "Increased attention and short-term memory",
          "Can help during recovery from stroke/hypoxia",
          "Helpful in the treatment of ADHD",
          "Neuroprotection against various types of stress and damage",
          "Decreased anxiety and stress levels",
        ],
      },
      {
        name: "Dihexa",
        benefits: [
          "Improves cognitive function",
          "Helps in treatment of Alzheimer\u2019s and Parkinson\u2019s Disease",
          "Improves long and short-term memory",
          "Helps manage depression",
          "Enhances creative thinking and social interaction",
          "Improves focus",
        ],
      },
    ],
  },
  {
    category: "Energy",
    peptides: [
      {
        name: "CJC 1295 / Ipamorelin",
        benefits: [
          "Stimulates HGH",
          "Promotes fat loss without affecting blood sugar",
          "Improves sleep quality",
          "Increased energy and endurance",
          "Improved cellular repair and immune system",
          "Increase in muscle mass and collagen production",
        ],
      },
      {
        name: "NAD+",
        benefits: [
          "Anti-aging",
          "Helps prevent disease",
          "Increases cellular repair",
        ],
      },
    ],
  },
];

const reasons = [
  "Anti-aging effects \u2014 improved skin elasticity, reduced wrinkles, and a more youthful appearance",
  "Muscle growth and strength \u2014 enhanced mass, endurance, and physical performance",
  "Improved metabolism \u2014 weight management and fat loss support",
  "Enhanced cognitive function \u2014 better memory, focus, and mental clarity",
  "Mood enhancement \u2014 better mood regulation and emotional well-being",
  "Increased energy levels \u2014 combat fatigue and promote an active lifestyle",
  "Faster recovery from injury \u2014 accelerated tissue repair for muscle strains and joint issues",
  "Immune system support \u2014 immune-modulating properties for overall health",
  "Improved sleep quality \u2014 regulated sleep patterns and deeper rest",
  "Hormonal balance \u2014 support for growth hormone and IGF-1 levels",
  "Joint and bone health \u2014 promote cartilage synthesis and bone density",
  "Cardiovascular health \u2014 cardio-protective effects that support heart health",
];

const faqs = [
  {
    question: "What is Peptide Therapy?",
    answer:
      "Peptide Therapy involves the use of specific peptides\u2014short chains of amino acids\u2014to regulate and influence bodily functions at the cellular level. Peptides can promote healing, enhance immune function, improve metabolism, and support overall wellness.",
  },
  {
    question: "What are the benefits of Peptide Therapy?",
    answer:
      "Benefits include anti-aging effects (improved skin elasticity, reduced wrinkles), increased muscle mass and strength, enhanced cognitive function, improved mood and sleep quality, accelerated injury recovery, and immune system support.",
  },
  {
    question: "How is Peptide Therapy administered?",
    answer:
      "Peptide Therapy can be administered via subcutaneous injections, topical creams, oral capsules, or nasal sprays. The method depends on the specific peptide and the desired therapeutic effect.",
  },
  {
    question: "Who can benefit from Peptide Therapy?",
    answer:
      "Athletes looking to enhance recovery and muscle growth, individuals seeking anti-aging benefits, those managing chronic conditions, and anyone interested in improving their overall well-being and performance.",
  },
  {
    question: "Is Peptide Therapy safe?",
    answer:
      "When prescribed and administered by qualified healthcare providers, Peptide Therapy is generally considered safe. Peptides used in therapy are often naturally occurring in the body or derived from synthetic versions that mimic natural peptides. Potential side effects and interactions should be discussed with your provider.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary depending on the specific peptide, method of administration, and individual factors such as health status and goals. Some individuals may experience benefits within a few weeks, while others may require longer-term treatment for optimal results.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "Peptide Therapy is generally well-tolerated. Common side effects may include mild irritation at the injection site, temporary changes in appetite, or fatigue. Serious side effects are rare but should be discussed with your healthcare provider.",
  },
  {
    question: "How often will I need treatments?",
    answer:
      "Frequency depends on the specific peptide, your health goals, and how your body responds. Treatment plans are tailored to each individual, with some peptides requiring daily administration and others less frequently.",
  },
  {
    question: "Can Peptide Therapy be combined with other treatments?",
    answer:
      "Yes, Peptide Therapy can often be combined with other treatments and therapies to enhance overall results. Your healthcare provider will determine the best approach based on your health profile and goals.",
  },
  {
    question: "Is Peptide Therapy covered by insurance?",
    answer:
      "We do not accept insurance, but we do accept HSA and FSA accounts as well as CareCredit. Our transparent cash-pay pricing means no surprise bills or insurance headaches.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PeptideTherapyPage() {
  return (
    <>
      {/* ───── 1. Hero ───── */}
      <section className="flex min-h-[60vh] items-center px-6 pt-40 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
            Peptide Therapy
          </p>
          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Unlock Your Body&apos;s Potential
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg leading-relaxed">
            Harness peptides for optimal wellness. From anti-aging and
            rejuvenation to increased strength, cognitive improvement, enhanced
            healing, and better sleep &mdash; peptides are the key to reaching
            your best potential through your body&apos;s natural processes.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <BookingWidget size="lg" buttonText="Schedule Consultation" />
            <Button variant="outline" size="lg" asChild>
              <a href="#peptides">Explore Peptides</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ───── 2. Peptide Categories (Accordions) ───── */}
      <section id="peptides" className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Our Peptides
            </p>
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              Naturally Boosted Wellness
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Browse peptides by category. Each targets specific areas of health
              and performance, with protocols tailored to your goals.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {peptideCategories.map((cat, ci) => (
              <AccordionItem key={ci} value={`cat-${ci}`}>
                <AccordionTrigger className="text-base font-semibold">
                  {cat.category}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    {cat.peptides.map((peptide) => (
                      <div key={peptide.name}>
                        <h4 className="text-foreground mb-2 font-semibold">
                          {peptide.name}
                        </h4>
                        <ul className="space-y-1">
                          {peptide.benefits.map((benefit, bi) => (
                            <li
                              key={bi}
                              className="text-muted-foreground flex items-start gap-2 text-sm"
                            >
                              <span className="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <BookingWidget buttonText="Find Your Protocol" />
          </div>
        </div>
      </section>

      {/* ───── 3. Is Peptide Therapy Right for You? ───── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Is It Right for You?
            </p>
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              12 Reasons to Consider Peptide Therapy
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              If any of these apply to you, peptide therapy may be the right
              next step. Set up a consultation with one of our providers today.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="bg-primary mt-1.5 h-2 w-2 shrink-0 rounded-full" />
                <span className="text-muted-foreground text-sm">{reason}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <BookingWidget buttonText="Book a Consultation" />
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
              We believe in harnessing the power of peptides to unlock your
              body&apos;s full potential. Small chains of amino acids play a
              crucial role in regulating bodily functions and can be instrumental
              in achieving holistic health improvements.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-lg font-semibold">
                Comprehensive Wellness
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Peptides offer a multifaceted approach targeting anti-aging,
                rejuvenation, strength, cognitive enhancement, mood improvement,
                healing, immunity, and sleep quality. Versatile solutions
                tailored to your specific needs.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-lg font-semibold">
                Personalized Treatment Plans
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Each individual&apos;s wellness journey is unique. Our
                experienced providers create personalized plans integrating
                peptide therapies to address your specific health goals,
                maximizing your potential.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-lg font-semibold">
                Transformative Results
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From enhancing skin elasticity and reducing wrinkles to boosting
                immune function and promoting faster recovery, peptide therapies
                significantly enhance your quality of life with visible results.
              </p>
            </div>
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
                  "Schedule a free virtual consultation with a licensed provider. No surprise fees, no commitments.",
              },
              {
                step: 2,
                title: "Meet With Your Provider",
                description:
                  "Connect virtually with a board-certified provider who builds a custom peptide protocol based on your labs, goals, and lifestyle.",
              },
              {
                step: 3,
                title: "Get Your Prescriptions Delivered",
                description:
                  "Your peptides ship directly to your door from US-licensed pharmacies. Refills and follow-ups handled online.",
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
              Peptide Therapy Questions
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
            Ready to Unlock Your Potential?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Take charge of your wellness today. Book a free consultation with a
            licensed provider and discover what peptide therapy can do for you.
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
