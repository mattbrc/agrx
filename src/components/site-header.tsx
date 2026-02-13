"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BookingWidget } from "@/components/booking-widget";
import { ScrollingBanner } from "@/components/scrolling-banner";

const PATIENT_PORTAL_URL = "https://joinemrg.com/patient-portal?clinicId=16";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    if (mobileOpen && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [mobileOpen]);

  const linkClass =
    "text-muted-foreground hover:text-foreground rounded-lg px-3 py-2 text-sm transition-colors";

  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <ScrollingBanner />
      </div>

      <header className="border-border/50 bg-background/80 fixed top-9 z-40 w-full border-b backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="text-primary text-2xl font-bold">
            AG Rx
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <a
              href={isHome ? "#services" : "/#services"}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href={isHome ? "#about" : "/#about"}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <Link
              href="/providers"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Providers
            </Link>
            <BookingWidget />
            <Button variant="outline" size="default" asChild>
              <a
                href={PATIENT_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Patient Portal
              </a>
            </Button>
          </div>

          {/* Mobile: buttons + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <BookingWidget buttonText="Book" size="sm" />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground flex h-8 w-8 items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="5" x2="17" y2="5" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="15" x2="17" y2="15" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown - animated */}
        <div
          ref={menuRef}
          className="overflow-hidden transition-all duration-300 ease-in-out md:hidden"
          style={{ maxHeight: menuHeight }}
        >
          <div className="bg-background/95 border-border/50 border-t backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              {[
                {
                  content: (
                    <Link
                      href="/"
                      onClick={() => setMobileOpen(false)}
                      className={linkClass}
                    >
                      Home
                    </Link>
                  ),
                },
                {
                  content: (
                    <a
                      href={isHome ? "#services" : "/#services"}
                      onClick={() => setMobileOpen(false)}
                      className={linkClass}
                    >
                      Services
                    </a>
                  ),
                },
                {
                  content: (
                    <a
                      href={isHome ? "#about" : "/#about"}
                      onClick={() => setMobileOpen(false)}
                      className={linkClass}
                    >
                      About
                    </a>
                  ),
                },
                {
                  content: (
                    <Link
                      href="/providers"
                      onClick={() => setMobileOpen(false)}
                      className={linkClass}
                    >
                      Providers
                    </Link>
                  ),
                },
                {
                  content: (
                    <a
                      href={PATIENT_PORTAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className={linkClass}
                    >
                      Patient Portal
                    </a>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="transition-all duration-300 ease-out"
                  style={{
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen
                      ? "translateY(0)"
                      : "translateY(-8px)",
                    transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                  }}
                >
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
