export function ScrollingBanner() {
  const items = [
    "Licensed US Providers",
    "Same-Day Appointments",
    "44 States",
    "US-Compounded Medications",
    "Transparent Pricing",
    "100% Online Process",
  ];

  const content = (
    <>
      {items.map((item, i) => (
        <span key={i} className="mx-6 text-sm font-normal whitespace-nowrap">
          ✦<span className="ml-3">{item}</span>
        </span>
      ))}
    </>
  );

  return (
    <>
      <style>
        {`
          @keyframes scroll-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .marquee-scroll {
            animation: scroll-marquee 25s linear infinite;
          }
        `}
      </style>

      {/* MILITARY promo ribbon */}
      <div className="bg-zinc-950 text-white flex h-9 items-center justify-center px-4">
        <p className="text-center text-xs font-medium tracking-wide sm:text-sm">
          <span className="mr-2" aria-hidden>
            ★
          </span>
          <span className="hidden sm:inline">
            Active Duty, Veterans &amp; First Responders —{" "}
          </span>
          <span className="sm:hidden">Military &amp; First Responders — </span>
          10% off with code{" "}
          <span className="text-primary-light font-bold tracking-widest">
            MILITARY
          </span>
        </p>
      </div>

      {/* Scrolling marquee */}
      <div className="bg-primary text-primary-foreground flex h-9 overflow-hidden">
        {/* Static claim section */}
        <div className="bg-primary flex shrink-0 items-center border-r border-primary-foreground/20 px-4 py-2">
          <span className="text-sm font-medium whitespace-nowrap">
            Built for Operators
          </span>
        </div>

        {/* Scrolling content */}
        <div className="overflow-hidden py-2">
          <div className="marquee-scroll inline-flex">
            {content}
            {content}
          </div>
        </div>
      </div>
    </>
  );
}
