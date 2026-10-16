"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const items = [
  { label: "Hypotheken", href: "/hypotheken" },
  { label: "Verzekeringen", href: "/verzekeringen" },
  { label: "Financieringen", href: "/financieringen" },
  { label: "Tools & informatie", href: "/tools" },
  { label: "Over Heckmann", href: "/over-heckmann" },
  { label: "Contact", href: "/contact" },
];

function isDarkColor(color: string) {
  const match = color.match(
    /rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s/]+([\d.]+))?\s*\)/
  );

  if (!match) return false;

  const r = Number(match[1]);
  const g = Number(match[2]);
  const b = Number(match[3]);
  const alpha = match[4] === undefined ? 1 : Number(match[4]);

  if (alpha < 0.2) return false;

  const luminance =
    (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  return luminance < 0.48;
}

export default function Navigation({
  className = "",
  persistent = false,
}: {
  className?: string;
  persistent?: boolean;
}) {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkBackground, setDarkBackground] = useState(false);

  const [insuranceSlide, setInsuranceSlide] = useState(0);

  useEffect(() => {
    if (pathname !== "/verzekeringen") return;

    const updateSlide = (event: Event) => {
      const slide = (event as CustomEvent<number>).detail;
      if (typeof slide === "number") {
        setInsuranceSlide(slide);
      }
    };

    window.addEventListener("heckmann:insurance-slide", updateSlide);
    return () => {
      window.removeEventListener("heckmann:insurance-slide", updateSlide);
    };
  }, [pathname]);



  useEffect(() => {
    let frame = 0;

    const updateNavigation = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const hasScrolled = window.scrollY > 105;
        setScrolled(hasScrolled);

        if (!hasScrolled) {
          setMenuOpen(false);
        }

        const x = Math.round(window.innerWidth / 2);
        const y = 42;

        const elements = document.elementsFromPoint(x, y);

        for (const element of elements) {
          if (
            element.closest("[data-navigation]") ||
            element.closest("[data-floating-navigation]") ||
            element === document.documentElement ||
            element === document.body
          ) {
            continue;
          }

          let current: Element | null = element;

          while (current && current !== document.body) {
            const style = window.getComputedStyle(current);
            const background = style.backgroundColor;

            if (
              background &&
              background !== "transparent" &&
              background !== "rgba(0, 0, 0, 0)"
            ) {
              setDarkBackground(isDarkColor(background));
              return;
            }

            current = current.parentElement;
          }
        }
      });
    };

    updateNavigation();

    window.addEventListener("scroll", updateNavigation, {
      passive: true,
    });

    window.addEventListener("resize", updateNavigation);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const foreground = darkBackground ? "#ffffff" : "#10245e";

  return (
    <>
      {/* =====================================================
          NORMALE NAVIGATIE — ALLEEN BOVENAAN
      ===================================================== */}
      <motion.header
        data-navigation
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`${persistent ? "fixed" : "absolute"} inset-x-0 top-0 z-[100] ${
          !persistent
            ? "lg:bg-[#f8f6f1]/25 lg:backdrop-blur-[5px]"
            : ""
        } ${className}`}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[2000px] lg:h-[86px] items-center px-7 lg:px-[3.4vw]">
          <nav className="hidden w-full items-center justify-between lg:flex">

            {/* HOME */}
            <Link
              href="/"
              aria-label="Naar homepage"
              className="group flex shrink-0 items-center gap-3 transition-colors duration-700" 
              style={{ color: foreground }}
            >
              <div className="relative flex h-[38px] w-[38px] items-center justify-center">
                <span className="absolute inset-0 border border-current opacity-30 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45 group-hover:border-[#b85c38]" />

                <span className="relative text-[15px] font-semibold tracking-[-0.06em] text-current">
                  H
                </span>
              </div>

              <span className="text-[12px] font-semibold tracking-[0.08em] text-current">
                HECKMANN
              </span>
            </Link>

            {items.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex shrink-0 items-center gap-3 py-2 text-[13px] font-medium tracking-[-0.015em] transition-colors duration-700"
                    style={{ color: foreground }}
                >
                  <span
                    className={
                      active
                        ? "opacity-100"
                        : "transition-opacity duration-300 group-hover:opacity-55"
                    }
                  >
                    {item.label}
                  </span>

                  {item.href === "/contact" && (
                    <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                      →
                    </span>
                  )}

                  <span
                    className={[
                      "absolute -bottom-1 left-0 h-px bg-[#b85c38] transition-all duration-500",
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </nav>

          {/* MOBILE TOP */}
          <div className="flex w-full items-center justify-between lg:hidden">
            <Link
              href="/"
              aria-label="Naar homepage"
              className="flex items-center gap-3 transition-colors duration-500"
              style={{
                color:
                  pathname === "/verzekeringen"
                    ? insuranceSlide === 0 || insuranceSlide === 3
                      ? "#ffffff"
                      : "#10245e"
                    : foreground,
              }}
            >
              <div className="flex h-8 w-8 items-center justify-center border border-current/25">
                <span className="text-[13px] font-semibold">
                  H
                </span>
              </div>

              <span className="text-[12px] font-semibold tracking-[0.08em]">
                HECKMANN
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Navigatiemenu openen"
              aria-expanded={menuOpen}
              aria-controls="heckmann-mobile-menu"
              className="group flex h-[46px] items-center gap-5 px-5 backdrop-blur-[8px]"
              style={{
                color:
                  pathname === "/verzekeringen"
                    ? insuranceSlide === 0 || insuranceSlide === 3
                      ? "#ffffff"
                      : "#10245e"
                    : foreground,
                border: `1px solid ${
                  (pathname === "/verzekeringen"
                    ? insuranceSlide === 0 || insuranceSlide === 3
                    : darkBackground)
                    ? "rgba(255,255,255,.38)"
                    : "rgba(16,36,94,.24)"
                }`,
                background: (pathname === "/verzekeringen"
                  ? insuranceSlide === 0 || insuranceSlide === 3
                  : darkBackground)
                  ? "rgba(16,36,94,.14)"
                  : "rgba(248,245,239,.35)",
              }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                Menu
              </span>

              <span className="relative h-3.5 w-4" aria-hidden="true">
                <span className="absolute left-0 top-[3px] h-px w-4 bg-current" />
                <span className="absolute bottom-[3px] left-0 h-px w-4 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* =====================================================
          FLOATING CONTROLS — PAS NA SCROLL
      ===================================================== */}
      <AnimatePresence>
        {scrolled && !persistent && (
          <>
            {/* H LINKS */}
            <motion.div
              data-floating-navigation
              initial={{ opacity: 0, x: -18, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed left-5 top-5 z-[110] lg:left-8 lg:top-7"
            >
              <Link
                href="/"
                aria-label="Terug naar homepage"
                className="group flex h-11 w-11 items-center justify-center backdrop-blur-[8px]"
                style={{
                  color: foreground,
                  border: `1px solid ${
                    darkBackground
                      ? "rgba(255,255,255,.38)"
                      : "rgba(16,36,94,.24)"
                  }`,
                  background: darkBackground
                    ? "rgba(16,36,94,.14)"
                    : "rgba(248,245,239,.35)",
                }}
              >
                <span className="text-[15px] font-semibold tracking-[-0.06em] transition-transform duration-500 group-hover:scale-110">
                  H
                </span>
              </Link>
            </motion.div>

            {/* MENU RECHTS */}
            <motion.div
              data-floating-navigation
              initial={{ opacity: 0, x: 18, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-5 top-5 z-[110] lg:right-8 lg:top-7"
            >
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="group flex h-[46px] items-center gap-5 px-5 backdrop-blur-[8px]"
                style={{
                  color: foreground,
                  border: `1px solid ${
                    darkBackground
                      ? "rgba(255,255,255,.38)"
                      : "rgba(16,36,94,.24)"
                  }`,
                  background: darkBackground
                    ? "rgba(16,36,94,.14)"
                    : "rgba(248,245,239,.35)",
                }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                  Menu
                </span>

                <span className="relative h-3.5 w-4">
                  <span
                    className={[
                      "absolute left-0 top-[3px] h-px w-4 bg-current transition-all duration-500",
                      menuOpen
                        ? "translate-y-[4px] rotate-45"
                        : "",
                    ].join(" ")}
                  />

                  <span
                    className={[
                      "absolute bottom-[3px] left-0 h-px w-4 bg-current transition-all duration-500",
                      menuOpen
                        ? "-translate-y-[3px] -rotate-45"
                        : "",
                    ].join(" ")}
                  />
                </span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* =====================================================
          DROPDOWN / MENU PANEL
      ===================================================== */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Menu sluiten"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="fixed inset-0 z-[115] bg-[#071333]/25 backdrop-blur-[2px]"
            />

            <motion.div
              data-floating-navigation
              initial={{
                opacity: 0,
                y: -18,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -14,
                scale: 0.98,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              id="heckmann-mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigatiemenu"
              className="fixed inset-x-3 top-[76px] z-[120] max-h-[calc(100dvh-88px)] overflow-y-auto overscroll-contain bg-[#10245e] text-white shadow-[0_30px_90px_rgba(16,36,94,.2)] sm:inset-x-auto sm:right-5 sm:w-[440px] lg:right-8 lg:top-[88px]"
            >
              <div className="px-7 pb-7 pt-8 lg:px-9 lg:pb-9">
                <p className="mb-7 text-[9px] uppercase tracking-[0.3em] text-white/45">
                  Navigatie
                </p>

                <nav>
                  {items.map((item, index) => {
                    const active = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between border-t border-white/15 py-4"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-5 text-[9px] text-white/35">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span
                            className={[
                              "text-[clamp(1.35rem,2vw,1.8rem)] tracking-[-0.04em] transition-colors duration-300",
                              active
                                ? "text-[#df8b67]"
                                : "text-white group-hover:text-[#df8b67]",
                            ].join(" ")}
                          >
                            {item.label}
                          </span>
                        </div>

                        <span className="text-[#df8b67] transition-transform duration-500 group-hover:translate-x-2">
                          →
                        </span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-7 border-t border-white/15 pt-6">
                  <p className="text-[11px] leading-5 text-white/45">
                    Persoonlijk financieel advies.
                    <br />
                    Sinds 1989.
                  </p>
                </div>
              </div>

              <div className="h-1 w-full bg-[#b85c38]" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
