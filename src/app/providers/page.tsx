"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { BookingWidget } from "@/components/booking-widget";

interface Provider {
  name: string;
  title: string;
  image: string | null;
  initials: string;
  bio: string[];
}

const providers: Provider[] = [
  {
    name: "Dr. David Lawrence",
    title: "Founder & Chief Medical Officer",
    image: "/providers/david-lawrence.png",
    initials: "DL",
    bio: [
      "Dr. David Lawrence is the Founder and Chief Medical Officer of Morph Health & Wellness. Dr. Lawrence is a board-certified physician with over 10 years of experience. He is currently practicing in the Emergency Department in Lake Oconee, Georgia.",
      "Dr. Lawrence received his undergraduate degree in Biochemistry from Liberty University in Lynchburg, Virginia, then went on to earning his Doctoral of Medicine from the Medical University of Americas. His Internal Medicine residency training at Mercer University, combined with his career work throughout the pandemic have allowed him to develop a desire to educate patients through preventative wellness. He has seen what he hopes are the darkest days of medicine in this lifetime and believes that prevention is key for a healthier population.",
      "Dr. Lawrence currently resides on Lake Oconee with his wife and two children. He enjoys hunting, boating on the lake, running, spending time with his family, and University of Georgia football. Dr. Lawrence has personally been right where you are today and understands what you are going through. It is his mission to help patients, like you, morph into the best version of themselves.",
    ],
  },
  {
    name: "Dr. Daniel Bennett",
    title: "Medical Doctor",
    image: "/providers/daniel-bennett.png",
    initials: "DB",
    bio: [
      "Dr. Bennett is an Emergency Room physician practicing in Lake Country Georgia in Baldwin and Putnam counties, as well as Northwest Georgia. He earned his Doctorate of Medicine from the University of Texas Southwestern and his undergraduate degree from Baylor University.",
      "He has been practicing medicine for 20 years, and from his experience in treating critical patients has gained a passion for prevention and wellness in daily life. He believes in treating the root cause of problems before they escalate to lifelong illness, and strives to treat patients as a whole from the inside out.",
      "Dr. Bennett lives in Eatonton, Georgia on Lake Oconee with his wife and six kids. In his free time, he enjoys fitness, snowboarding, playing guitar, and boating on the lake with his family. He is looking forward to helping patients become the best version of themselves.",
    ],
  },
  {
    name: "Dr. Lynda A. Szczech",
    title: "Medical Doctor",
    image: "/providers/lynda-szczech.png",
    initials: "LS",
    bio: [
      "Dr. Lynda A. Szczech is known for her nephrologist degree in Berkeley, California. She received her medical degree from Sidney Kimmel Medical College at Thomas Jefferson University and has been in practice for more than 20 years.",
      "Dr. Lynda has specialized in diagnosing and managing kidney disease, including monitoring how other chronic conditions, such as diabetes and high blood pressure affects the kidneys. Dr. Lynda is admired by patients for her extensive knowledge in the field, her professional and personable bed-side manner, and for the great focus and care she gives to each patient\u2019s specific needs.",
      "A personal clinical specialty of hers is developing unique micro-dosing programs for patients who have reached their weight loss goal, who desire to stabilize their progress with hopes to keep their weight off for good!",
    ],
  },
  {
    name: "Rachel Lebolo",
    title: "MSN, APRN, NP-C",
    image: "/providers/rachel-lebolo.png",
    initials: "RL",
    bio: [
      "Rachel Lebolo is a board certified Nurse Practitioner with more than 14 years of experience in the healthcare field. She is currently an Adult-Gerontology Nurse Practitioner and serves patients across Northeast Georgia.",
      "Rachel received her undergraduate degree from Georgia College and State University in Milledgeville, Georgia. After graduation, she worked as a nurse in the Medical and Surgical Trauma Intensive Care Units. She received her graduate degree from The University of Alabama Birmingham in 2014, and decided to pursue a career in cardiology. While treating her patients she saw firsthand that disease prevention is key and that by giving patients the tools and resources they need they can decrease and even avoid the likelihood of further cardiac and health issues.",
      "Rachel currently resides in Gainesville, Georgia with her husband and 3 dogs. She enjoys spending time with family, hiking, mountain biking, and going to church. She is excited to apply her lifelong passion for health and wellness to help coach patients to succeed and navigate their own health journey.",
    ],
  },
  {
    name: "Jaimie Blackwell",
    title: "MSN, APRN, FNP-C, CEN",
    image: "/providers/jamie-blackwell.png",
    initials: "JB",
    bio: [
      "Jaimie Blackwell is a Family Nurse Practitioner in the Emergency Room in Milledgeville, Georgia. She obtained her undergraduate degree from Macon State College and her graduate degree from Malone University in Ohio.",
      "She received twelve years of experience in the Emergency Room as a tech and registered nurse, as well as experience as a Flight Nurse, Over House Supervisor, and Registered Nurse in Ambulatory Care and the Post Ambulatory Care Unit before deciding to go back to school to obtain a dual master\u2019s nursing degree. Along with achieving experience in multiple departments, she has worked towards various additional certifications such as Sexual Assault Nurse Examiner (SANE) training, Certified Emergency Nurse (CEN), Pre-Hospital Trauma Life Support (PHTLS), and Trauma Nursing Core Course (TNCC).",
      "Jaimie currently resides in Milledgeville, Georgia. In her free time, she enjoys spending time with her family and dogs, running, cycling, hiking, weight lifting, and painting. She recognizes methods for maintaining healthy habits in her own life, and loves to encourage and aid others in doing the same.",
    ],
  },
  {
    name: "Victoria Murias",
    title: "DMSc, MPAS, PA-C",
    image: "/providers/victoria-murias.png",
    initials: "VM",
    bio: [
      "Victoria Murias is a board-certified physician assistant who has been practicing Endocrinology for the past 5 years in Miami, Florida. She graduated with a Masters in Physician Assistant Studies from Herbert Wertheim College of Medicine at Florida International University and has most recently completed her Doctorate of Medical Science from the University of Lynchburg in Virginia.",
      "She has a passion for health and wellness which she has been able to implement during her career, and is well versed in disease processes affecting weight and hormonal imbalances.",
      "Victoria resides in Miami, Florida with her husband and small son. She loves cooking and baking fresh balanced meals and treats for her family. Victoria is fluent in both English and Spanish and is excited to help her patients achieve their own wellness goals.",
    ],
  },
  {
    name: "Heather Tillery",
    title: "MSN, APRN, FNP-C",
    image: "/providers/heather-tillery.png",
    initials: "HT",
    bio: [
      "Heather Tillery is a board certified Family Nurse Practitioner with 14 years of experience in the medical field. She achieved her graduate degree at Emory University in Atlanta, and she completed her undergraduate studies at Georgia Southern University.",
      "Heather has primarily worked in heart failure, and is currently a Heart Failure Coordinator in North Georgia. Heather brings her own personal knowledge and passion of health and fitness to Morph, as well. Outside of the workplace, Heather is a professional bodybuilder with a passion for helping people achieve a healthier lifestyle and hormonal balance.",
      "Heather currently resides in Flowery Branch, Georgia and enjoys spending time with her husband and dogs, as well as coaching and training for bodybuilding competitions. Her love of health and fitness shines in and out of the gym, and she is very excited to help patients achieve hormonal health and a healthy lifestyle!",
    ],
  },
  {
    name: "Ellie Burris",
    title: "APRN, FNP-C",
    image: "/providers/ellie-burris.png",
    initials: "EB",
    bio: [
      "Ellie is a board-certified Nurse Practitioner licensed in the state of Florida. She graduated with honors from Herzing University\u2019s Family Nurse Practitioner program, bringing a deep passion for preventative wellness and functional medicine to her practice.",
      "With a rich background in dermatology and operating room nursing at the Medical University of South Carolina, Ellie developed a strong foundation in patient care, which led her to discover her true calling in health optimization. During her nurse practitioner studies, Ellie honed her expertise in preventive care while working at a preventative wellness clinic.",
      "Currently residing in Sarasota, Florida, with her husband and their dog, Ellie is an active member of her local church. Outside of her professional life, she enjoys spending time at the beach, exercising, cooking, and making memories with her family and friends. As part of the team, Ellie is dedicated to guiding patients toward achieving their health goals and unlocking their full wellness potential.",
    ],
  },
];

function ProviderCard({
  provider,
  onReadBio,
}: {
  provider: Provider;
  onReadBio: () => void;
}) {
  return (
    <div className="border-border group flex flex-col overflow-hidden rounded-2xl border bg-white">
      {/* Headshot */}
      <div className="bg-muted relative aspect-[3/4] w-full overflow-hidden">
        {provider.image ? (
          <Image
            src={provider.image}
            alt={provider.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-muted-foreground text-4xl font-bold">
              {provider.initials}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col items-center px-4 py-5 text-center">
        <h3 className="text-foreground text-lg font-semibold">
          {provider.name}
        </h3>
        <p className="text-muted-foreground mt-1 text-sm">{provider.title}</p>
        <Button
          variant="outline"
          size="sm"
          className="mt-4 cursor-pointer"
          onClick={onReadBio}
        >
          Read Bio
        </Button>
      </div>
    </div>
  );
}

export default function ProvidersPage() {
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(
    null
  );

  return (
    <>
      <section className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              Our Team
            </p>
            <h1 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              Meet Your Providers
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Board-certified providers who understand optimization, not just
              symptom management.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {providers.map((provider) => (
              <ProviderCard
                key={provider.name}
                provider={provider}
                onReadBio={() => setSelectedProvider(provider)}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <BookingWidget size="lg" buttonText="Book With a Provider" />
          </div>
        </div>
      </section>

      {/* Bio Dialog */}
      <Dialog
        open={!!selectedProvider}
        onOpenChange={(open) => !open && setSelectedProvider(null)}
      >
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {selectedProvider?.name}
            </DialogTitle>
            <DialogDescription>{selectedProvider?.title}</DialogDescription>
          </DialogHeader>
          <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
            {selectedProvider?.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
