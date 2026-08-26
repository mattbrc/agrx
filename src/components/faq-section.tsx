import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services from Primary care to custom, individualized treatment plans for patients in Weight Management, Peptide Therapy, Testosterone Therapy, Female Hormone Therapy, Sexual Wellness, and Hair Restoration."
  },
  {
    question: "What makes AG Rx different than other wellness and weight loss clinics?",
    answer: "We pride ourselves on exceptional, above-standard patient care and offering the highest quality products for our patients for the best results. Through our partnership with Elevis Medical Group, we offer our patients a team of physicians and providers who are invested in your care and act as a health and wellness coach throughout your journey. Each of the providers is available at your convenience for check-ins and support, as you need them. They care about you and your success as a person, rather than just another number patient. With that, we want to offer our patients quality products from licensed compounding pharmacies. We source our products from the best of the best across the country to offer you the best prescriptions that are results-driven."
  },
  {
    question: "How do I know if I'm a candidate for testosterone therapy?",
    answer:
      "Candidacy is determined through a combination of symptoms and lab work. Common signs include fatigue, reduced motivation, decreased muscle mass, weight gain, and low libido. During your consultation, our providers will review your bloodwork and health history to determine if TRT is right for you.",
  },
  {
    question: "What's included in a consultation?",
    answer:
      "Your initial consultation includes a comprehensive review of your symptoms, health history, lifestyle, and goals. If you have recent labs, we'll review those. If not, we can order the necessary bloodwork. You'll leave with a clear understanding of your options and a personalized treatment plan if appropriate.",
  },
  {
    question: "How are medications delivered?",
    answer:
      "All medications are shipped directly to your door from US-licensed pharmacies. Shipments are discreet and typically arrive within 7-10 business days. Refills are handled automatically based on your protocol schedule.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We do not accept insurance. Our transparent cash-pay pricing means no surprise bills or insurance headaches.",
  },
  {
    question: "How often will I need follow-up appointments?",
    answer:
      "Follow-up frequency depends on your protocol. Most patients have a check-in at 6-8 weeks after starting treatment, then move to quarterly visits once optimized. All follow-ups are conducted virtually for your convenience.",
  },
];

export function FaqSection() {
  return (
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
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
