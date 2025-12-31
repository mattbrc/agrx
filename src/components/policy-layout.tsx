import Link from "next/link";

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface PolicyLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  tableOfContents?: TableOfContentsItem[];
  children: React.ReactNode;
}

export function PolicyLayout({
  title,
  subtitle,
  lastUpdated,
  tableOfContents,
  children,
}: PolicyLayoutProps) {
  return (
    <div className="bg-muted/50 min-h-screen">
      {/* Header */}
      <header className="border-border/50 bg-background/80 sticky top-0 z-40 border-b backdrop-blur-sm">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-primary text-2xl font-bold">
            AG Rx
          </Link>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <p className="text-muted-foreground mb-2 text-sm uppercase tracking-widest">
            AG Rx
          </p>
          <h1 className="text-foreground mb-4 text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground mb-4 text-lg">{subtitle}</p>
          )}
          <p className="text-muted-foreground text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Table of Contents */}
        {tableOfContents && tableOfContents.length > 0 && (
          <div className="mb-12">
            <h2 className="text-foreground mb-6 text-lg font-bold">
              Table of Contents
            </h2>
            <ol className="space-y-3">
              {tableOfContents.map((item, index) => (
                <li key={item.id} className="flex gap-6">
                  <span className="text-muted-foreground w-8">
                    {index + 1}.
                  </span>
                  <a
                    href={`#${item.id}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Policy Content */}
        <div className="prose prose-zinc max-w-none">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-border/50 border-t py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} AG Rx. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
