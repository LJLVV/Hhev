"use client";

import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import Navigation from "@/components/Navigation";
const ease = [0.22, 1, 0.36, 1] as const;

export default function VerzekeringenPage() {
  const horizontalRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 22,
    mass: 0.35,
  });

  const x = useTransform(
    smoothProgress,
    [0, 1],
    ["0vw", "-300vw"]
  );

  const lineWidth = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const videoScale = useTransform(
    smoothProgress,
    [0, 0.28],
    [1.02, 1.1]
  );

  const videoX = useTransform(
    smoothProgress,
    [0, 0.28],
    ["0%", "8%"]
  );

  const slideTwoLine = useTransform(
    smoothProgress,
    [0.22, 0.48],
    ["8%", "92%"]
  );

  const slideTwoDot = useTransform(
    smoothProgress,
    [0.22, 0.48],
    ["8%", "92%"]
  );

  const slideThreeRotate = useTransform(
    smoothProgress,
    [0.45, 0.75],
    [-8, 3]
  );

  const slideFourScale = useTransform(
    smoothProgress,
    [0.72, 1],
    [0.9, 1]
  );

  return (
    <main className="bg-[#fbfaf7] text-[#10245e]">

      {/* =========================================================
          VASTE NAVIGATIE
      ========================================================= */}
      <Navigation persistent />


      {/* =========================================================
          HORIZONTALE STORY
      ========================================================= */}
      <div
        ref={horizontalRef}
        className="relative h-[400vh]"
      >
        <div className="sticky top-0 h-screen overflow-hidden">

          <motion.div
            style={{ x }}
            className="flex h-full w-[400vw]"
          >

            {/* =====================================================
                SLIDE 01 — MEDIA
            ===================================================== */}
            <section className="relative h-screen w-screen shrink-0 overflow-hidden bg-[#07132f] text-white">

              <motion.video
                style={{
                  scale: videoScale,
                  x: videoX,
                }}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source
                  src="/verzekeringen-hero.mp4"
                  type="video/mp4"
                />
              </motion.video>

              <div className="absolute inset-0 bg-[#06122d]/25" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#07132f]/80 via-[#07132f]/30 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />


              <div className="relative z-10 mx-auto flex h-full max-w-[1600px] items-end px-7 pb-28 lg:px-12 lg:pb-20">

                <div className="max-w-[1080px]">

                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15,
                      ease,
                    }}
                    className="mb-7 text-[10px] uppercase tracking-[0.34em] text-white/55"
                  >
                    Verzekeringen
                  </motion.p>


                  <h1 className="text-[clamp(4rem,7.4vw,8.5rem)] font-normal leading-[0.86] tracking-[-0.065em]">

                    <span className="block overflow-hidden">
                      <motion.span
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.15,
                          ease,
                        }}
                        className="block"
                      >
                        Niet alles hoeft
                      </motion.span>
                    </span>

                    <span className="block overflow-hidden">
                      <motion.span
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.28,
                          ease,
                        }}
                        className="block"
                      >
                        verzekerd.
                      </motion.span>
                    </span>

                  </h1>


                  <motion.p
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.65,
                      ease,
                    }}
                    className="mt-7 text-[clamp(1.5rem,2.4vw,2.7rem)] tracking-[-0.04em] text-[#d58a68]"
                  >
                    Wel wat ertoe doet.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.9,
                      ease,
                    }}
                    className="mt-7 max-w-[520px] text-[15px] leading-7 text-white/65 lg:text-[16px]"
                  >
                    Goed verzekeren begint met kijken naar uw situatie en de
                    risico&apos;s die voor u echt van belang zijn.
                  </motion.p>

                </div>

              </div>


              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.1,
                }}
                className="absolute bottom-8 right-10 z-20 hidden items-center gap-5 text-[10px] uppercase tracking-[0.25em] text-white/55 lg:flex"
              >
                Scroll om verder te kijken

                <motion.span
                  animate={{ x: [0, 8, 0] }}
                  transition={{
                    duration: 1.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </motion.div>

            </section>


            {/* =====================================================
                SLIDE 02 — RISICO
            ===================================================== */}
            <section className="relative flex h-screen w-screen shrink-0 items-center overflow-hidden bg-[#f5f2ec]">

              <div className="mx-auto w-full max-w-[1500px] px-8 lg:px-14">

                <div className="grid items-end gap-16 lg:grid-cols-[1fr_.8fr]">

                  <div>
                    <p className="mb-8 text-[10px] uppercase tracking-[0.34em] text-[#10245e]/40">
                      Eerst begrijpen
                    </p>

                    <h2 className="max-w-[850px] text-[clamp(4rem,7vw,8.5rem)] leading-[0.86] tracking-[-0.065em]">
                      Wat kunt u
                      <br />
                      <span className="text-[#b85c38]">
                        zelf dragen?
                      </span>
                    </h2>
                  </div>


                  <div className="pb-3">
                    <p className="max-w-[440px] text-[18px] leading-8 text-[#10245e]/60">
                      Niet ieder dekking hoeft automatisch verzekerd te worden.
                      We kijken naar uw financiële situatie, premie en voorwaarden
                      en bepalen waar verzekeren echt waarde toevoegt.
                    </p>
                  </div>

                </div>


                {/* INTERACTIEVE LIJN */}
                <div className="relative mt-28">

                  <div className="h-px w-full bg-[#10245e]/15" />

                  <motion.div
                    style={{ width: slideTwoLine }}
                    className="absolute left-0 top-0 h-px bg-[#b85c38]"
                  />

                  <motion.div
                    style={{ left: slideTwoDot }}
                    className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-[#f5f2ec] bg-[#b85c38] shadow-[0_0_0_1px_rgba(184,92,56,.35)]"
                  />

                  <div className="mt-6 flex justify-between text-[11px] uppercase tracking-[0.22em] text-[#10245e]/45">
                    <span>Zelf dragen</span>
                    <span>Verzekeren</span>
                  </div>

                </div>

              </div>


              <div className="pointer-events-none absolute -bottom-[15vw] -right-[7vw] h-[34vw] w-[34vw] rounded-full border border-[#b85c38]/15" />

              <div className="pointer-events-none absolute -bottom-[10vw] -right-[2vw] h-[24vw] w-[24vw] rounded-full border border-[#b85c38]/20" />

            </section>


            {/* =====================================================
                SLIDE 03 — SITUATIE
            ===================================================== */}
            <section className="relative flex h-screen w-screen shrink-0 items-center overflow-hidden bg-white">

              {/* groot typografisch watermerk */}
              <motion.div
                style={{ rotate: slideThreeRotate }}
                className="pointer-events-none absolute -right-[6vw] top-[8vh] select-none text-[27vw] font-medium leading-none tracking-[-0.09em] text-[#10245e]/[0.025]"
              >
                U
              </motion.div>


              <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 lg:px-14">

                <div className="grid gap-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center">

                  <div>

                    <p className="mb-8 text-[10px] uppercase tracking-[0.34em] text-[#10245e]/40">
                      Prijs & kwaliteit
                    </p>

                    <h2 className="text-[clamp(4rem,6.8vw,8rem)] leading-[0.88] tracking-[-0.065em]">
                      Niet alleen
                      <br />
                      de premie telt.
                      <br />
                      <span className="text-[#b85c38]">
                        De dekking ook.
                      </span>
                    </h2>

                    <p className="mt-10 max-w-[500px] text-[17px] leading-8 text-[#10245e]/55">
                      Een lage premie is prettig, maar alleen als de verzekering
                      ook past wanneer u haar nodig heeft. Daarom kijken we
                      naar de verhouding tussen prijs, dekking en voorwaarden.
                    </p>

                  </div>


                  {/* LOSSE WOORDEN — GEEN CARDS */}
                  <div className="relative h-[430px]">

                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="absolute left-[8%] top-[5%] text-[clamp(2rem,3.6vw,4.6rem)] tracking-[-0.055em]"
                    >
                      wensen
                    </motion.span>

                    <motion.span
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.12,
                        ease,
                      }}
                      className="absolute right-[4%] top-[26%] text-[clamp(2.4rem,4.7vw,5.7rem)] tracking-[-0.06em] text-[#b85c38]"
                    >
                      risico
                    </motion.span>

                    <motion.span
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.2,
                        ease,
                      }}
                      className="absolute bottom-[25%] left-[0%] text-[clamp(2rem,4vw,4.8rem)] tracking-[-0.055em] text-[#10245e]/55"
                    >
                      budget
                    </motion.span>

                    <motion.span
                      initial={{ opacity: 0, y: 45 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.3,
                        ease,
                      }}
                      className="absolute bottom-[3%] right-[10%] text-[clamp(2.5rem,5vw,6rem)] tracking-[-0.065em]"
                    >
                      zekerheid
                    </motion.span>


                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        delay: 0.15,
                        ease,
                      }}
                      className="absolute left-[47%] top-[2%] h-[92%] w-px origin-top rotate-[24deg] bg-[#10245e]/10"
                    />

                  </div>

                </div>

              </div>

            </section>


            {/* =====================================================
                SLIDE 04 — OVERZICHT / CONTACT
            ===================================================== */}
            <section className="relative flex h-screen w-screen shrink-0 items-center overflow-hidden bg-[#10245e] text-white">

              <motion.div
                style={{ scale: slideFourScale }}
                className="pointer-events-none absolute -right-[13vw] -top-[19vw] h-[58vw] w-[58vw] rounded-full border border-white/10"
              />

              <motion.div
                style={{ scale: slideFourScale }}
                className="pointer-events-none absolute -right-[4vw] -top-[9vw] h-[39vw] w-[39vw] rounded-full border border-[#b85c38]/35"
              />


              <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8 lg:px-14">

                <p className="mb-8 text-[10px] uppercase tracking-[0.34em] text-white/45">
                  Goed geregeld
                </p>

                <h2 className="max-w-[1100px] text-[clamp(4.2rem,7.4vw,8.8rem)] leading-[0.86] tracking-[-0.07em]">
                  Eén aanspreekpunt.
                  <br />
                  <span className="text-[#d58a68]">
                    Een helder overzicht.
                  </span>
                </h2>


                <div className="mt-14 grid max-w-[950px] gap-10 border-t border-white/15 pt-9 md:grid-cols-2">

                  <p className="max-w-[410px] text-[17px] leading-8 text-white/62">
                    Waar dat passend is, brengen we verzekeringen samen. Dat houdt
                    het overzichtelijk en helpt onnodige of dubbele dekking
                    te voorkomen — voor particuliere én zakelijke situaties.
                  </p>

                  <div className="flex items-end md:justify-end">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-5 text-[16px]"
                    >
                      Bespreek uw verzekeringen

                      <motion.span
                        animate={{ x: [0, 6, 0] }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="text-[#d58a68]"
                      >
                        →
                      </motion.span>
                    </Link>
                  </div>

                </div>

              </div>

            </section>

          </motion.div>


          {/* =========================================================
              PROGRESS — VAST ONDERAAN
          ========================================================= */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-40 h-[3px] bg-black/5">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full origin-left bg-[#b85c38]"
            />
          </div>

        </div>
      </div>

    </main>
  );
}
