"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

import Navigation from "@/components/Navigation";
const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const quote = "Persoonlijk financieel advies begint met goed luisteren.";
  const [typedQuote, setTypedQuote] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        index += 1;
        setTypedQuote(quote.slice(0, index));

        if (index >= quote.length) {
          if (interval) clearInterval(interval);
          setTypingDone(true);
        }
      }, 52);
    }, 1000);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.72, 1],
    [1, 0.85, 0]
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] overflow-hidden bg-[#dfe7ed]"
    >
      {/* FOTO — minimale correctie zodat stadhuis rechter staat */}
      <motion.div
        initial={{ scale: 1.035, opacity: 0 }}
        animate={{ scale: 1.015, opacity: 1 }}
        transition={{
          duration: 1.8,
          ease,
        }}
        className="absolute -inset-[1.5%]"
        style={{
          rotate: "0.35deg",
        }}
      >
        <Image
          src="/heckmann-hero.jpg"
          alt="Stadhuis van Gouda"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Alleen een extreem subtiele warme tint */}
      <div className="pointer-events-none absolute inset-0 bg-[#f5c98c]/[0.035]" />

      {/* HEADER */}
      <Navigation />

      {/* HERO */}
      <motion.div
        style={{
          y: heroY,
          opacity: heroOpacity,
        }}
        className="relative z-20 mx-auto min-h-[100svh] max-w-[1500px] px-7 lg:px-12"
      >
        {/* LOGO LINKS */}
        <motion.div
          initial={{
            opacity: 0,
            x: -45,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.6,
            delay: 0.25,
            ease,
          }}
          className="absolute left-7 top-[29%] w-[min(440px,39vw)] lg:left-12"
        >
          <Image
            src="/heckmann-logo-transparent.png"
            alt="Heckmann Hypotheken & Verzekeringen"
            width={1200}
            height={440}
            priority
            className="h-auto w-full"
          />
        </motion.div>

        {/* QUOTE RECHTS VAN STADHUIS */}
        <motion.div
          initial={{
            opacity: 0,
            x: 55,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.8,
            delay: 1.05,
            ease,
          }}
          className="absolute right-7 top-[43%] w-[min(450px,31vw)] lg:right-12"
        >
          <p
            className="text-[clamp(1.8rem,2.7vw,3rem)] leading-[1.08] tracking-[-0.035em] text-[#10245e]"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 400,
            }}
          >
            {typedQuote}
            {!typingDone && typedQuote.length > 0 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 0.85,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="ml-[3px] inline-block h-[0.9em] w-px translate-y-[0.06em] bg-[#10245e]"
              />
            )}
          </p>
        </motion.div>
      </motion.div>

      {/* MINIMALE SCROLL INDICATOR */}
      <motion.a
        href="#intro"
        aria-label="Scroll naar beneden"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 2.25,
          ease,
        }}
        className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3 text-[#10245e]/65"
      >
        <span className="text-[9px] uppercase tracking-[0.28em]">
          Scroll
        </span>

        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-lg"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
