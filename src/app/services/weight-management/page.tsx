import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
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
  title: "Weight Management | AG Rx",
  description:
    "Custom prescription weight loss medications for rapid results. GLP-1, Semaglutide, Tesamorelin, and more. No consult fees, unlimited check-ins, as low as $120/month.",
  openGraph: {
    title: "Weight Management | AG Rx",
    description:
      "Custom prescription weight loss medications for rapid results. GLP-1, Semaglutide, Tesamorelin, and more. As low as $120/month.",
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const programs = [
  {
    name: "GLP-1",
    badge: "Most Popular",
    tagline: "GLP-1/GIP for effective weight management.",
  },
  {
    name: "Tesamorelin Peptide",
    badge: "Visceral Fat",
    tagline: "Enhance muscle growth and reduce abdominal fat.",
  },
  {
    name: "CJC 1295 / Ipamorelin",
    badge: "Growth Hormone",
    tagline: "Boost growth hormone levels for muscle growth.",
  },
  {
    name: "MIC B12",
    badge: "Metabolism",
    tagline: "Enhance metabolism and energy for weight loss.",
  },
  {
    name: "Semaglutide Oral Tablets",
    badge: "No Injections",
    tagline: "Convenient oral solution for effective weight loss.",
  },
  {
    name: "Sermorelin Peptide",
    badge: "Anti-Aging",
    tagline: "Stimulate growth hormone for anti-aging and vitality.",
  },
  {
    name: "Tesofensine Peptide",
    badge: "Appetite Control",
    tagline: "Powerful appetite suppressant for effective weight loss.",
  },
];

const treatments = [
  {
    name: "GLP-1 Agonists",
    description: [
      "GLP-1 (Glucagon-like peptide-1) agonists, such as GLP-1/GIP, represent a revolutionary approach to effective weight management. These medications, originally developed to treat type 2 diabetes, have garnered attention for their potent effects on promoting weight loss and improving metabolic health in individuals struggling with obesity or overweight conditions.",
      "GLP-1/GIP offers a dual action by targeting both GLP-1 and GIP (glucose-dependent insulinotropic polypeptide) receptors, effectively regulating glucose levels and promoting weight loss. This once-weekly injectable medication enhances insulin secretion in response to meals and suppresses glucagon release, leading to improved glycemic control and reduced body weight.",
      "By combining medication with personalized lifestyle interventions, we empower our patients to achieve sustainable weight loss and enhance overall metabolic health effectively and safely.",
    ],
  },
  {
    name: "Tesamorelin Peptide",
    description: [
      "Tesamorelin is a synthetic peptide that enhances muscle growth and reduces abdominal fat. It works by stimulating the production and release of growth hormone-releasing hormone (GHRH) from the hypothalamus, which in turn stimulates the pituitary gland to release growth hormone (GH) \u2014 crucial for metabolism, muscle growth, and fat breakdown.",
      "The targeted effects of Tesamorelin on reducing visceral adipose tissue (abdominal fat) are particularly beneficial. By promoting lipolysis (fat breakdown) and enhancing muscle mass, Tesamorelin improves body composition and supports overall metabolic health. Its ability to selectively reduce abdominal fat without affecting subcutaneous fat makes it a preferred choice for those looking to enhance their physical appearance and metabolic function.",
    ],
  },
  {
    name: "CJC 1295 / Ipamorelin",
    description: [
      "CJC 1295 and Ipamorelin are a powerful combination that boosts growth hormone (GH) levels to enhance muscle growth and overall physical performance. CJC 1295 is a synthetic peptide designed to extend the half-life of growth hormone-releasing hormone (GHRH), promoting sustained elevation of GH levels for muscle tissue repair, growth, and recovery.",
      "Ipamorelin complements CJC 1295 by stimulating GH release without significantly affecting cortisol and prolactin levels, making it a well-tolerated option for enhancing muscle mass and reducing body fat. Together, they offer a synergistic approach to optimizing growth hormone production, supporting physical performance, overall health, and vitality.",
    ],
  },
  {
    name: "MIC B12",
    description: [
      "MIC B12 injections combine methionine, inositol, choline (MIC), and vitamin B12 to enhance metabolism and support weight loss. Methionine aids in fat breakdown and prevents fat buildup in the liver. Inositol promotes healthy cell membranes and aids in fat transportation for metabolism. Choline supports liver function by processing fats and excreting cholesterol.",
      "Vitamin B12 plays a crucial role in energy production and metabolism, helping convert fats and proteins into energy. Together, the MIC B12 combination supports metabolic processes, enhances energy levels, and promotes efficient fat metabolism \u2014 a valuable addition to any weight loss program.",
    ],
  },
  {
    name: "Semaglutide Oral Tablets",
    description: [
      "Semaglutide oral tablets provide the benefits of GLP-1 receptor agonist therapy without injections. This innovation allows individuals to experience potent weight management effects in a more accessible, user-friendly format.",
      "The mechanism involves mimicking GLP-1, a hormone that regulates appetite, glucose metabolism, and insulin secretion. By binding to GLP-1 receptors in the brain, Semaglutide reduces appetite, increases feelings of fullness, and promotes weight loss through decreased caloric intake. Once-daily dosing offers convenience and consistency for long-term adherence.",
    ],
  },
  {
    name: "Sermorelin Peptide",
    description: [
      "Sermorelin peptide therapy stimulates the production of growth hormone (GH) to promote anti-aging and enhance vitality. As a GHRH analogue, Sermorelin stimulates the pituitary gland to release more endogenous GH, supporting muscle growth, bone density, immune function, and cognitive health.",
      "By promoting the body\u2019s natural GH production, Sermorelin therapy helps mitigate aging effects by improving skin elasticity, reducing wrinkles, and enhancing skin tone. Increased GH levels also contribute to heightened energy, improved sleep quality, and enhanced mood \u2014 all crucial for maintaining an active lifestyle.",
    ],
  },
  {
    name: "Tesofensine Peptide",
    description: [
      "Tesofensine is a potent appetite suppressant that works by inhibiting the reuptake of neurotransmitters such as dopamine, norepinephrine, and serotonin in the brain \u2014 all crucial for regulating appetite and satiety. By enhancing the activity of these neurotransmitters, Tesofensine reduces food intake, leading to decreased calorie consumption and subsequent weight loss.",
      "Studies have shown that Tesofensine not only suppresses appetite but also enhances metabolic rate, promoting greater fat burning and overall energy expenditure. This dual mechanism makes it a valuable addition to comprehensive weight management strategies.",
    ],
  },
];

const whyChoose = [
  {
    title: "Personalized Care",
    description:
      "Thorough assessments of your medical history, lifestyle, and preferences ensure your treatment plan aligns perfectly with your individual needs.",
  },
  {
    title: "Expert Providers",
    description:
      "Experienced doctors specializing in weight management and hormone therapy, providing expert advice and support every step of the way.",
  },
  {
    title: "Privacy & Confidentiality",
    description:
      "Strict confidentiality standards protect your personal information and ensure a discreet, comfortable experience throughout treatment.",
  },
  {
    title: "Comprehensive Approach",
    description:
      "Medications combined with lifestyle modifications, nutrition guidance, and exercise recommendations for maximum effectiveness.",
  },
  {
    title: "Tailored Medications",
    description:
      "Appetite suppressants, metabolism boosters, and other medications carefully selected and compounded based on your specific needs and goals.",
  },
  {
    title: "Ongoing Support",
    description:
      "Beyond prescribing medications, we provide ongoing support, knowledge, and tools to maintain a healthy lifestyle and achieve lasting results.",
  },
];

const faqs = [
  {
    question: "What are weight management prescriptions?",
    answer:
      "Weight management prescriptions are medications prescribed by healthcare providers to aid in achieving and maintaining a healthy weight. They are used in conjunction with lifestyle modifications such as diet and exercise.",
  },
  {
    question: "Who can benefit from weight management prescriptions?",
    answer:
      "Individuals who have struggled to lose weight through diet and exercise alone. They are typically recommended for individuals with a BMI of 30 or higher, or 27 or higher with obesity-related health conditions.",
  },
  {
    question: "How do weight management prescriptions work?",
    answer:
      "They work in various ways including appetite suppression, increasing metabolism, blocking fat absorption, or affecting neurotransmitters that control hunger and fullness signals in the brain. The specific mechanism depends on the medication prescribed.",
  },
  {
    question: "Are weight management prescriptions safe?",
    answer:
      "When prescribed and monitored by a qualified healthcare provider, weight management prescriptions can be safe and effective. They are prescribed after a thorough evaluation of your health status, medical history, and weight management goals.",
  },
  {
    question: "What are the potential side effects?",
    answer:
      "Common side effects may include nausea, diarrhea, constipation, dry mouth, insomnia, and headache. Serious side effects are rare but should be discussed with your healthcare provider.",
  },
  {
    question: "How long do I need to take the prescriptions?",
    answer:
      "Duration varies depending on individual weight loss goals, response to treatment, and overall health status. Your provider will determine the appropriate length and may adjust the prescription as needed.",
  },
  {
    question:
      "Can prescriptions be combined with other weight loss strategies?",
    answer:
      "Yes, weight management prescriptions are often combined with healthy eating and regular exercise to enhance results. Your provider may recommend a comprehensive approach tailored to your needs.",
  },
  {
    question: "Will I regain weight after stopping?",
    answer:
      "Weight regain can occur if healthy lifestyle habits are not maintained. We work with you to develop sustainable habits for long-term weight management success.",
  },
  {
    question: "How do I get started?",
    answer:
      "Schedule a consultation with one of our licensed providers. During your consultation, we\u2019ll assess your health history, weight loss goals, and recommend personalized treatment options tailored to your needs.",
  },
  {
    question: "Is this covered by insurance?",
    answer:
      "We do not accept insurance, but we do accept HSA and FSA accounts as well as CareCredit. Our transparent cash-pay pricing means no surprise bills or insurance headaches.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function WeightManagementPage() {
  return (
    <>
      {/* ───── 1. Hero ───── */}
      <section className="flex min-h-[60vh] items-center px-6 pt-40 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
            Weight Management
          </p>
          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Effective Weight Loss Without Wasting More Time
          </h1>
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-lg leading-relaxed">
            Custom prescription medications ready to transform your body and
            help you hit your weight goals. Each combination is individually
            compounded and targeted to act directly on your neurotransmitters
            &mdash; resulting in appetite suppression, glucose control, and rapid
            weight loss.
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-sm px-3 py-1 h-auto">
              No Consult Fees
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1 h-auto">
              Unlimited Check-Ins
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1 h-auto">
              Custom Dosing
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1 h-auto">
              As Low as $120/mo
            </Badge>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <BookingWidget size="lg" buttonText="Schedule Consultation" />
            <Button variant="outline" size="lg" asChild>
              <a href="#programs">View Programs</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ───── 2. Programs Grid ───── */}
      <section id="programs" className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Treatment Programs
            </p>
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              Achieve Your Weight Goals
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Whether you&apos;re looking to lose or maintain your overall body
              composition, these medications are built custom for you.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.name}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-lg font-semibold">
                      {program.name}
                    </CardTitle>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {program.badge}
                  </Badge>
                  <CardDescription>{program.tagline}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <BookingWidget size="sm" buttonText="Book Now" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 3. Treatment Details (Accordion) ───── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Treatment Details
            </p>
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              In-Depth Medication Breakdown
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Learn more about each medication option and how it works to help
              you achieve your weight management goals.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {treatments.map((treatment, i) => (
              <AccordionItem key={i} value={`treatment-${i}`}>
                <AccordionTrigger className="text-base font-semibold">
                  {treatment.name}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {treatment.description.map((para, pi) => (
                      <p key={pi} className="text-muted-foreground leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                  <div className="mt-4">
                    <BookingWidget size="sm" buttonText="Get Started" />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
              We understand that weight management is not one-size-fits-all. Our
              providers conduct thorough evaluations to determine the most
              effective treatment plan, combining custom-compounded medications
              with personalized lifestyle guidance for sustainable results.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <h3 className="text-foreground text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
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
                  "Schedule a free virtual consultation with a licensed provider. No surprise fees, no commitments.",
              },
              {
                step: 2,
                title: "Get Your Custom Plan",
                description:
                  "Your provider assesses your health history, goals, and lifestyle to build a personalized weight management protocol with custom-compounded medications.",
              },
              {
                step: 3,
                title: "Medications Delivered to You",
                description:
                  "Your prescriptions ship directly to your door from US-licensed pharmacies. Unlimited check-ins and follow-ups handled online.",
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
              Weight Management Questions
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
            Ready to Transform Your Body?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Custom prescriptions, no consult fees, unlimited check-ins. Take the
            first step toward a healthier you.
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
