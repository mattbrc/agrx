export function ScrollingBanner() {
  const items = [
    "Affordable pricing with no hidden fees",
    "Licensed Providers",
    "Same-Day Appointments",
    "US-Sourced Ingredients",
    "Wellness Programs",
    "100% online process",
  ];

  const content = (
    <>
      {items.map((item, i) => (
        <span key={i} className="mx-8 text-sm font-normal whitespace-nowrap">
          ✦<span className="ml-8">{item}</span>
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
      <div className="bg-primary text-primary-foreground flex h-9 overflow-hidden">
        {/* Static "Why AG Rx?" section */}
        <div className="bg-primary flex shrink-0 items-center border-r border-primary-foreground/20 px-4 py-2">
          <span className="text-sm font-medium whitespace-nowrap">
            Why AG Rx?
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
