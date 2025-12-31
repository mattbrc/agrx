import { PolicyLayout } from "@/components/policy-layout";

const tableOfContents = [
  { id: "your-rights", title: "Your Rights" },
  { id: "your-choices", title: "Your Choices" },
  { id: "our-uses", title: "Our Uses and Disclosures" },
  { id: "your-rights-detailed", title: "Your Rights (Detailed)" },
  { id: "your-choices-detailed", title: "Your Choices (Detailed)" },
  { id: "how-we-use", title: "How We Use or Share Your Information" },
  { id: "our-responsibilities", title: "Our Responsibilities" },
  { id: "changes", title: "Changes to the Terms of this Notice" },
];

export default function HipaaPage() {
  return (
    <PolicyLayout
      title="HIPAA Privacy Policy"
      subtitle="Your Information. Your Rights. Our Responsibilities."
      lastUpdated="December 30, 2025"
      tableOfContents={tableOfContents}
    >
      <p className="text-muted-foreground mb-8 text-lg">
        This notice describes how medical information about you may be used and
        disclosed and how you can get access to this information. Please review
        it carefully.
      </p>

      {/* Your Rights Summary */}
      <section id="your-rights" className="mb-12">
        <h2 className="text-foreground mb-4 text-2xl font-bold">Your Rights</h2>
        <p className="text-muted-foreground mb-4">You have the right to:</p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-6">
          <li>Get a copy of your paper or electronic medical record</li>
          <li>Correct your paper or electronic medical record</li>
          <li>Request confidential communication</li>
          <li>Ask us to limit the information we share</li>
          <li>Get a list of those with whom we&apos;ve shared your information</li>
          <li>Get a copy of this privacy notice</li>
          <li>Choose someone to act for you</li>
          <li>
            File a complaint if you believe your privacy rights have been
            violated
          </li>
        </ul>
      </section>

      {/* Your Choices Summary */}
      <section id="your-choices" className="mb-12">
        <h2 className="text-foreground mb-4 text-2xl font-bold">
          Your Choices
        </h2>
        <p className="text-muted-foreground mb-4">
          You have some choices in the way that we use and share information as
          we:
        </p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-6">
          <li>Tell family and friends about your condition</li>
          <li>Provide disaster relief</li>
          <li>Include you in a hospital directory</li>
          <li>Provide mental health care</li>
          <li>Market our services and sell your information</li>
          <li>Raise funds</li>
        </ul>
      </section>

      {/* Our Uses and Disclosures Summary */}
      <section id="our-uses" className="mb-12">
        <h2 className="text-foreground mb-4 text-2xl font-bold">
          Our Uses and Disclosures
        </h2>
        <p className="text-muted-foreground mb-4">
          We may use and share your information as we:
        </p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-6">
          <li>Treat you</li>
          <li>Run our organization</li>
          <li>Bill for your services</li>
          <li>Help with public health and safety issues</li>
          <li>Do research</li>
          <li>Comply with the law</li>
          <li>Respond to organ and tissue donation requests</li>
          <li>Work with a medical examiner or funeral director</li>
          <li>
            Address workers&apos; compensation, law enforcement, and other
            government requests
          </li>
          <li>Respond to lawsuits and legal actions</li>
        </ul>
      </section>

      {/* Your Rights Detailed */}
      <section id="your-rights-detailed" className="mb-12">
        <h2 className="text-foreground mb-4 text-2xl font-bold">
          Your Rights (Detailed)
        </h2>
        <p className="text-muted-foreground mb-6">
          When it comes to your health information, you have certain rights.
          This section explains your rights and some of our responsibilities to
          help you.
        </p>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Get an electronic or paper copy of your medical record
        </h3>
        <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6">
          <li>
            You can ask to see or get an electronic or paper copy of your
            medical record and other health information we have about you. Ask
            us how to do this.
          </li>
          <li>
            We will provide a copy or a summary of your health information,
            usually within 30 days of your request. We may charge a reasonable,
            cost-based fee.
          </li>
        </ul>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Ask us to correct your medical record
        </h3>
        <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6">
          <li>
            You can ask us to correct health information about you that you
            think is incorrect or incomplete. Ask us how to do this.
          </li>
          <li>
            We may say &quot;no&quot; to your request, but we&apos;ll tell you
            why in writing within 60 days.
          </li>
        </ul>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Request confidential communications
        </h3>
        <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6">
          <li>
            You can ask us to contact you in a specific way (for example, home
            or office phone) or to send mail to a different address.
          </li>
          <li>We will say &quot;yes&quot; to all reasonable requests.</li>
        </ul>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Ask us to limit what we use or share
        </h3>
        <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6">
          <li>
            You can ask us not to use or share certain health information for
            treatment, payment, or our operations. We are not required to agree
            to your request, and we may say &quot;no&quot; if it would affect
            your care.
          </li>
          <li>
            If you pay for a service or health care item out-of-pocket in full,
            you can ask us not to share that information for the purpose of
            payment or our operations with your health insurer. We will say
            &quot;yes&quot; unless a law requires us to share that information.
          </li>
        </ul>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Get a list of those with whom we&apos;ve shared information
        </h3>
        <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6">
          <li>
            You can ask for a list (accounting) of the times we&apos;ve shared
            your health information for six years prior to the date you ask, who
            we shared it with, and why.
          </li>
          <li>
            We will include all the disclosures except for those about
            treatment, payment, and health care operations, and certain other
            disclosures (such as any you asked us to make). We&apos;ll provide
            one accounting a year for free but will charge a reasonable,
            cost-based fee if you ask for another one within 12 months.
          </li>
        </ul>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Get a copy of this privacy notice
        </h3>
        <p className="text-muted-foreground mb-6">
          You can ask for a paper copy of this notice at any time, even if you
          have agreed to receive the notice electronically. We will provide you
          with a paper copy promptly.
        </p>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Choose someone to act for you
        </h3>
        <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6">
          <li>
            If you have given someone medical power of attorney or if someone is
            your legal guardian, that person can exercise your rights and make
            choices about your health information.
          </li>
          <li>
            We will make sure the person has this authority and can act for you
            before we take any action.
          </li>
        </ul>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          File a complaint if you feel your rights are violated
        </h3>
        <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6">
          <li>
            You can complain if you feel we have violated your rights by
            contacting us.
          </li>
          <li>
            You can file a complaint with the U.S. Department of Health and
            Human Services Office for Civil Rights by sending a letter to 200
            Independence Avenue, S.W., Washington, D.C. 20201, calling
            1-877-696-6775, or visiting www.hhs.gov/ocr/privacy/hipaa/complaints/.
          </li>
          <li>We will not retaliate against you for filing a complaint.</li>
        </ul>
      </section>

      {/* Your Choices Detailed */}
      <section id="your-choices-detailed" className="mb-12">
        <h2 className="text-foreground mb-4 text-2xl font-bold">
          Your Choices (Detailed)
        </h2>
        <p className="text-muted-foreground mb-4">
          For certain health information, you can tell us your choices about
          what we share. If you have a clear preference for how we share your
          information in the situations described below, talk to us. Tell us
          what you want us to do, and we will follow your instructions.
        </p>
        <p className="text-muted-foreground mb-4">
          In these cases, you have both the right and choice to tell us to:
        </p>
        <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6">
          <li>
            Share information with your family, close friends, or others
            involved in your care
          </li>
          <li>Share information in a disaster relief situation</li>
          <li>Include your information in a hospital directory</li>
        </ul>
        <p className="text-muted-foreground mb-4">
          If you are not able to tell us your preference, for example if you are
          unconscious, we may go ahead and share your information if we believe
          it is in your best interest. We may also share your information when
          needed to lessen a serious and imminent threat to health or safety.
        </p>
        <p className="text-muted-foreground mb-4">
          In these cases we never share your information unless you give us
          written permission:
        </p>
        <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6">
          <li>Marketing purposes</li>
          <li>Sale of your information</li>
          <li>Most sharing of psychotherapy notes</li>
        </ul>
        <p className="text-muted-foreground mb-4">In the case of fundraising:</p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-6">
          <li>
            We may contact you for fundraising efforts, but you can tell us not
            to contact you again.
          </li>
        </ul>
      </section>

      {/* How We Use or Share */}
      <section id="how-we-use" className="mb-12">
        <h2 className="text-foreground mb-4 text-2xl font-bold">
          How We Use or Share Your Health Information
        </h2>
        <p className="text-muted-foreground mb-6">
          We typically use or share your health information in the following
          ways.
        </p>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Treat you
        </h3>
        <p className="text-muted-foreground mb-2">
          We can use your health information and share it with other
          professionals who are treating you.
        </p>
        <p className="text-muted-foreground mb-6 italic">
          Example: A doctor treating you for an injury asks another doctor about
          your overall health condition.
        </p>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Run our organization
        </h3>
        <p className="text-muted-foreground mb-2">
          We can use and share your health information to run our practice,
          improve your care, and contact you when necessary.
        </p>
        <p className="text-muted-foreground mb-6 italic">
          Example: We use health information about you to manage your treatment
          and services.
        </p>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Bill for your services
        </h3>
        <p className="text-muted-foreground mb-2">
          We can use and share your health information to bill and get payment
          from health plans or other entities.
        </p>
        <p className="text-muted-foreground mb-6 italic">
          Example: We give information about you to your health insurance plan
          so it will pay for your services.
        </p>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          How else can we use or share your health information?
        </h3>
        <p className="text-muted-foreground mb-6">
          We are allowed or required to share your information in other ways –
          usually in ways that contribute to the public good, such as public
          health and research. We have to meet many conditions in the law before
          we can share your information for these purposes. For more information
          see: www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/index.html.
        </p>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Help with public health and safety issues
        </h3>
        <p className="text-muted-foreground mb-2">
          We can share health information about you for certain situations such
          as:
        </p>
        <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6">
          <li>Preventing disease</li>
          <li>Helping with product recalls</li>
          <li>Reporting adverse reactions to medications</li>
          <li>Reporting suspected abuse, neglect, or domestic violence</li>
          <li>
            Preventing or reducing a serious threat to anyone&apos;s health or
            safety
          </li>
        </ul>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Do research
        </h3>
        <p className="text-muted-foreground mb-6">
          We can use or share your information for health research.
        </p>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Comply with the law
        </h3>
        <p className="text-muted-foreground mb-6">
          We will share information about you if state or federal laws require
          it, including with the Department of Health and Human Services if it
          wants to see that we&apos;re complying with federal privacy law.
        </p>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Respond to organ and tissue donation requests
        </h3>
        <p className="text-muted-foreground mb-6">
          We can share health information about you with organ procurement
          organizations.
        </p>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Work with a medical examiner or funeral director
        </h3>
        <p className="text-muted-foreground mb-6">
          We can share health information with a coroner, medical examiner, or
          funeral director when an individual dies.
        </p>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Address workers&apos; compensation, law enforcement, and other
          government requests
        </h3>
        <p className="text-muted-foreground mb-2">
          We can use or share health information about you:
        </p>
        <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6">
          <li>For workers&apos; compensation claims</li>
          <li>
            For law enforcement purposes or with a law enforcement official
          </li>
          <li>With health oversight agencies for activities authorized by law</li>
          <li>
            For special government functions such as military, national
            security, and presidential protective services
          </li>
        </ul>

        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Respond to lawsuits and legal actions
        </h3>
        <p className="text-muted-foreground mb-6">
          We can share health information about you in response to a court or
          administrative order, or in response to a subpoena.
        </p>
      </section>

      {/* Our Responsibilities */}
      <section id="our-responsibilities" className="mb-12">
        <h2 className="text-foreground mb-4 text-2xl font-bold">
          Our Responsibilities
        </h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-6">
          <li>
            We are required by law to maintain the privacy and security of your
            protected health information.
          </li>
          <li>
            We will let you know promptly if a breach occurs that may have
            compromised the privacy or security of your information.
          </li>
          <li>
            We must follow the duties and privacy practices described in this
            notice and give you a copy of it.
          </li>
          <li>
            We will not use or share your information other than as described
            here unless you tell us we can in writing. If you tell us we can,
            you may change your mind at any time. Let us know in writing if you
            change your mind.
          </li>
        </ul>
        <p className="text-muted-foreground mt-4">
          For more information see:
          www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html.
        </p>
      </section>

      {/* Changes */}
      <section id="changes" className="mb-12">
        <h2 className="text-foreground mb-4 text-2xl font-bold">
          Changes to the Terms of this Notice
        </h2>
        <p className="text-muted-foreground">
          We can change the terms of this notice, and the changes will apply to
          all information we have about you. The new notice will be available
          upon request, in our office, and on our web site.
        </p>
      </section>
    </PolicyLayout>
  );
}
