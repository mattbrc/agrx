import type { Metadata } from "next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { BookingWidget } from "@/components/booking-widget";

export const metadata: Metadata = {
  title: "Virtual Primary Care | AG Rx",
  description:
    "Convenient, affordable virtual primary care from board-certified providers. $125 per visit or $25/month membership. No insurance needed, no hidden fees.",
  openGraph: {
    title: "Virtual Primary Care | AG Rx",
    description:
      "Convenient, affordable virtual primary care from board-certified providers. $125 per visit or $25/month membership.",
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const canTreat = [
  "Aches & Pains",
  "Acne",
  "Allergies (Seasonal)",
  "Anxiety/Depression (mild to moderate)",
  "Asthma",
  "Bacterial Infections",
  "Bronchitis",
  "COVID-19",
  "Cold",
  "Constipation",
  "Cough",
  "Diabetes",
  "Ear Discomfort",
  "Eye Discomfort",
  "Fatigue",
  "Fever",
  "Flu",
  "GERD/Acid Reflux",
  "Gout",
  "Hemorrhoids",
  "Hives/Rashes",
  "Hormone Evaluation",
  "Hypertension",
  "Ingrown Hair/Infection",
  "Kidney Stones",
  "Lab Tests",
  "Lifestyle Improvement",
  "Mononucleosis",
  "Muscle Discomfort",
  "Nasal/Sinus Discomfort",
  "Osteoarthritis",
  "Osteoporosis",
  "Prescription Refills",
  "Respiratory Infection",
  "Sexual Health",
  "Sore Throat",
  "Stomach Pain",
  "Sunburn",
  "Thyroid Disease",
  "Toenail Fungus",
  "UTI",
  "Chronic Care",
  "Primary Care",
  "Urgent Care",
];

const cannotTreat = [
  "Benign Prostatic Hyperplasia",
  "Cardiac Disorders",
  "Colon Cancer Screening",
  "Coronary Artery Disease",
  "DVT",
  "Dental Pain",
  "Dizziness/Imbalance",
  "Neurological Disorders",
  "Rectal Bleeding",
];

const testimonials = [
  {
    name: "Kevin D.",
    text: "The AG Rx Virtual Primary Care program is such a lifesaver. Recently my family and I all came down with a stomach bug. Instead of having to shuffle everyone to sit and wait to be seen at an urgent care, I was able to get us anti-nausea medications right away! We just had to have a quick check-in with Dr. Lawrence, fill out the pharmacy forms, and our medication was sent to our local pharmacy. So grateful for AG Rx primary care for sparing us the time and struggle that day.",
  },
  {
    name: "Brian T.",
    text: "A while back I was in need of some physical therapy after an injury, but the physical therapist I had worked with before was completely booked up and I wasn\u2019t going to be able to get in for months. AG Rx Virtual Primary Care was able to get me a special referral to see a physical therapist who could get me in right away, and I was able to start getting treated immediately. Thanks Dr. L!",
  },
  {
    name: "Austin B.",
    text: "I had the easiest time using AG Rx\u2019s Virtual Primary Care to get my little boy taken care of! Late one night around Thanksgiving, my 18-month-old became sick and had a terrible rash. I just scheduled a virtual call with Dr. Lawrence and sent him images for closer inspection. Through the virtual appointment, my son was able to get treated efficiently and effectively. He also made sure to follow up on his healing processes. It was so refreshing to be able to get fast, attentive service I could trust. Thank you AG Rx!!",
  },
];

const faqs = [
  {
    question: "What does it cost?",
    answer:
      "Virtual Primary Care adult appointments are $125 per visit. Pediatric appointments are $95 per visit. Primary Care Memberships are only $25 per month.",
  },
  {
    question: "Why choose the membership?",
    answer:
      "The membership offers access to your provider via phone or text at your convenience. Have a quick question you want to run by your provider? No problem \u2014 we can help answer those questions and put your mind at ease. Members also receive exclusive discounts on our services.",
  },
  {
    question: "Can I get prescriptions or refill a prescription?",
    answer:
      "Yes, our board-certified providers will provide you with a prescription if necessary for the symptoms and diagnosis you\u2019re being seen for. They can also refill existing prescriptions through a Virtual Primary Care appointment.",
  },
  {
    question: "Which pharmacy do you use?",
    answer:
      "We will utilize the pharmacy of your choice, in the location that best serves you.",
  },
  {
    question: "Will you bill my insurance?",
    answer:
      "We do not accept any form of insurance. There is no insurance co-pay. Our services are $125 per visit for Adult Virtual Primary Care and $95 for Pediatric Virtual Primary Care. We do accept HSA and FSA accounts as well as CareCredit.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function VirtualPrimaryCarePage() {
  return (
    <>
      {/* ───── 1. Hero ───── */}
      <section className="flex min-h-[60vh] items-center px-6 pt-40 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
            Virtual Primary Care
          </p>
          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your Health, Your Way
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg leading-relaxed">
            Whether you&apos;re managing a chronic condition, seeking preventive
            care, or addressing a sudden health concern, our Virtual Primary
            Care services make staying healthy simple and stress-free &mdash;
            accessible, affordable, and tailored to your needs.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <BookingWidget size="lg" buttonText="Book a Virtual Visit" />
          </div>
        </div>
      </section>

      {/* ───── 2. Why Choose AG Rx ───── */}
      <section className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Why AG Rx
            </p>
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              Healthcare That Works for You
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-lg font-semibold">
                Convenience at Your Fingertips
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Forget the hassle of waiting rooms and rigid appointment
                schedules. Connect with trusted providers from the comfort of
                your home or wherever life takes you.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-lg font-semibold">
                Affordable &amp; Transparent Pricing
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Straightforward pricing with no insurance and no hidden fees.
                Whether you prefer per-visit payments or the extra perks of a
                monthly membership, AG Rx fits your budget.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-lg font-semibold">
                Comprehensive Care, Anywhere
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For everyday health concerns, our board-certified providers are
                here to help. Stay on top of your health without disrupting your
                busy schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 3. Membership ───── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
                Membership
              </p>
              <h2 className="text-foreground mb-2 text-3xl font-bold sm:text-4xl">
                Only $25/Month
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Get more from your healthcare with a monthly membership.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-primary mt-2 h-2 w-2 shrink-0 rounded-full" />
                  <span className="text-muted-foreground">
                    <span className="text-foreground font-medium">
                      Access on your terms
                    </span>{" "}
                    &mdash; reach your provider via phone or text for quick
                    questions and guidance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary mt-2 h-2 w-2 shrink-0 rounded-full" />
                  <span className="text-muted-foreground">
                    <span className="text-foreground font-medium">
                      Exclusive discounts
                    </span>{" "}
                    &mdash; save on additional services when you need them
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary mt-2 h-2 w-2 shrink-0 rounded-full" />
                  <span className="text-muted-foreground">
                    <span className="text-foreground font-medium">
                      Peace of mind
                    </span>{" "}
                    &mdash; get support whenever you need it without scheduling
                    an appointment
                  </span>
                </li>
              </ul>
              <BookingWidget buttonText="Join Membership" />
            </div>
            <div className="border-border rounded-2xl border p-8 text-center">
              <p className="text-muted-foreground mb-2 text-sm font-medium uppercase tracking-widest">
                Per Visit Pricing
              </p>
              <div className="mb-6 space-y-4">
                <div>
                  <p className="text-foreground text-4xl font-bold">$125</p>
                  <p className="text-muted-foreground text-sm">
                    Adult Virtual Visit
                  </p>
                </div>
                <div className="bg-border mx-auto h-px w-16" />
                <div>
                  <p className="text-foreground text-4xl font-bold">$95</p>
                  <p className="text-muted-foreground text-sm">
                    Pediatric Virtual Visit
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-xs">
                No insurance needed. HSA/FSA &amp; CareCredit accepted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 4. How It Works ───── */}
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
                title: "Book Your Virtual Visit",
                description:
                  "Schedule an appointment online by choosing a date and time that fits your needs and availability.",
              },
              {
                step: 2,
                title: "Connect With Your Provider",
                description:
                  "Meet virtually with a trusted, board-certified provider who will listen, assess, and guide your care plan.",
              },
              {
                step: 3,
                title: "Receive Personalized Care",
                description:
                  "Whether it\u2019s a prescription, a referral, or lifestyle advice, we ensure your health goals are met.",
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
            <BookingWidget size="lg" buttonText="Book a Virtual Visit" />
          </div>
        </div>
      </section>

      {/* ───── 5. What We Treat ───── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Our Scope
            </p>
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              What We Can Treat
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="can-treat">
              <AccordionTrigger className="text-base font-semibold">
                What can you treat through Virtual Primary Care?
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 sm:grid-cols-3">
                  {canTreat.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="bg-primary h-1.5 w-1.5 shrink-0 rounded-full" />
                      <span className="text-muted-foreground text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cannot-treat">
              <AccordionTrigger className="text-base font-semibold">
                What can&apos;t you treat with Virtual Primary Care?
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 sm:grid-cols-3">
                  {cannotTreat.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="bg-destructive h-1.5 w-1.5 shrink-0 rounded-full" />
                      <span className="text-muted-foreground text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ───── 6. Testimonials ───── */}
      <section className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Real Patients
            </p>
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
              What Our Patients Say
            </h2>
          </div>
          <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border-border bg-card flex min-w-[85vw] shrink-0 snap-center flex-col gap-4 rounded-2xl border p-6 sm:min-w-0"
              >
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-semibold">
                    {t.name}
                  </span>
                  <span className="text-amber-500 text-sm tracking-wider">
                    {"\u2605".repeat(5)}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            ))}
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
              Common Questions
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
        </div>
      </section>

      {/* ───── 8. Final CTA ───── */}
      <section className="bg-primary px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-primary-foreground mb-4 text-3xl font-bold">
            Affordable, Accessible, Reliable Care
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            AG Rx is here to simplify the healthcare experience. Take the next
            step in prioritizing your health &mdash; join our membership or book
            your first appointment today.
          </p>
          <BookingWidget
            variant="secondary"
            size="lg"
            buttonText="Book Your Virtual Visit"
          />
        </div>
      </section>
    </>
  );
}
