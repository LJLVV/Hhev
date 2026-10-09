"use client";

import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

import Navigation from "@/components/Navigation";
import ToolsExperience from "@/components/ToolsExperience";
const ease = [0.22, 1, 0.36, 1] as const;

export default function ToolsPage() {
  const [typedHelp, setTypedHelp] = useState("");
  const helpText = "helpen?";

  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroLeft = useTransform(heroProgress, [0, 1], [0, -150]);
  const heroRight = useTransform(heroProgress, [0, 1], [0, 150]);
  const heroFade = useTransform(heroProgress, [0, 0.75, 1], [1, 0.9, 0]);



  useEffect(() => {
    let index = 0;

    const start = window.setTimeout(() => {
      const timer = window.setInterval(() => {
        index += 1;
        setTypedHelp(helpText.slice(0, index));

        if (index >= helpText.length) {
          window.clearInterval(timer);
        }
      }, 150);
    }, 850);

    return () => window.clearTimeout(start);
  }, []);

  return (
    <main className="overflow-hidden bg-[#f8f6f1] text-[#10245e]">

      {/* NAV */}
      <Navigation />


      {/* =====================================================
          HERO — INTERACTIEVE TOOL INDEX
      ===================================================== */}
      <section
        ref={heroRef}
        className="relative overflow-hidden px-7 pb-4 pt-40 lg:px-12 lg:pb-6 lg:pt-44"
      >
        {/* subtiele bewegende achtergrondlijn */}
        <motion.div
          style={{ scaleX: heroProgress }}
          className="absolute left-0 top-[31%] h-px w-full origin-left bg-[#b85c38]/25"
        />

        <div className="relative mx-auto max-w-[1550px]">

          {/* intro */}
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease }}
            >
              <p className="mb-7 text-[10px] uppercase tracking-[0.34em] text-[#b85c38]">
                Tools & informatie
              </p>

              <motion.h1
                style={{ x: heroLeft, opacity: heroFade }}
                className="max-w-[650px] text-[clamp(3.7rem,6vw,7rem)] leading-[0.88] tracking-[-0.065em]"
              >
                Waar kunnen
                <br />
                we u mee
                <br />
                <span className="text-[#b85c38]">
                  {typedHelp}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1 inline-block h-[0.78em] w-[3px] bg-[#b85c38] align-baseline"
                  />
                </span>
              </motion.h1>
            </motion.div>

            <motion.div
              style={{ x: heroRight, opacity: heroFade }}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="ml-auto max-w-[470px] pb-3"
            >
              <p className="text-[17px] leading-8 text-[#10245e]/55">
                Van zorgverzekering vergelijken tot praktische documenten.
                Kies hieronder direct wat u nodig heeft.
              </p>
            </motion.div>
          </div>


        </div>
      </section>

      <ToolsExperience />

      <section className="relative overflow-hidden bg-white px-7 py-32 lg:px-12 lg:py-48">
        <div className="mx-auto max-w-[1500px]">

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease }}
            className="grid gap-16 lg:grid-cols-[1.25fr_.55fr] lg:items-end"
          >
            <h2 className="text-[clamp(4.5rem,8vw,9rem)] leading-[0.82] tracking-[-0.07em]">
              Niet gevonden
              <br />
              wat u zoekt?
            </h2>

            <div>
              <p className="mb-10 max-w-[430px] text-[17px] leading-8 text-[#10245e]/55">
                Neem gerust contact op. Dan kijken we samen wat u nodig heeft
                en waar u de juiste informatie kunt vinden.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-6 border-b border-[#10245e]/25 pb-3 text-[15px]"
              >
                Neem contact op
                <span className="text-[#b85c38] transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
