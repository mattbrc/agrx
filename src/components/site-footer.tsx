import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-muted/50 border-border border-t px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Main Footer Grid */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {/* Brand Column */}
          <div className="text-center sm:text-left">
            <span className="text-primary text-2xl font-bold">AG Rx</span>
            <p className="text-muted-foreground mt-3 text-sm">
              Performance medicine for men in the pursuit of greatness.
            </p>
          </div>

          {/* Office Hours Column */}
          <div className="text-center sm:text-left">
            <h4 className="text-foreground mb-4 font-semibold">
              Office Hours
            </h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>Mon&ndash;Thu: 8:00 AM&ndash;5:00 PM EST</li>
              <li>Fri: 8:00 AM&ndash;3:00 PM EST</li>
            </ul>
            <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
              Providers offer weekend appointments. Support staff weekend
              availability by request only.
            </p>
          </div>

          {/* Links Column */}
          <div className="text-center sm:text-left">
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
          <div className="text-center sm:text-left">
            <h4 className="text-foreground mb-4 font-semibold">Contact</h4>
            <div className="space-y-2">
              <a
                href="tel:7702435753"
                className="text-muted-foreground hover:text-primary block text-sm transition-colors"
              >
                (770) 243-5753
              </a>
              <a
                href="mailto:contact@agrxhealth.com"
                className="text-muted-foreground hover:text-primary block text-sm transition-colors"
              >
                contact@agrxhealth.com
              </a>
            </div>
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
  );
}
