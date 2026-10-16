"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

import Navigation from "@/components/Navigation";
const ease = [0.22, 1, 0.36, 1] as const;

const options = [
  {
    title: "Consumptief krediet",
    label: "Privé",
    text: "Financiering voor persoonlijke uitgaven en plannen, afgestemd op uw financiële situatie.",
    background:
      "radial-gradient(circle at 25% 30%, rgba(214,162,122,.9), transparent 28%), linear-gradient(135deg,#65493d,#1d2c4d 65%,#10245e)",
  },
  {
    title: "Financial Lease",
    label: "Mobiliteit",
    text: "Een zakelijke financieringsmogelijkheid voor bijvoorbeeld een auto of ander bedrijfsmiddel.",
    background:
      "radial-gradient(circle at 72% 42%, rgba(255,255,255,.22), transparent 20%), linear-gradient(120deg,#171d2a,#526275 52%,#151b29)",
  },
  {
    title: "Zakelijk krediet",
    label: "Ondernemen",
    text: "Financiële ruimte voor zakelijke investeringen, groei of andere ondernemingsplannen.",
    background:
      "radial-gradient(circle at 68% 20%, rgba(184,92,56,.7), transparent 22%), linear-gradient(145deg,#d8c4aa,#816959 45%,#10245e)",
  },
  {
    title: "Kredietbescherming",
    label: "Zekerheid",
    text: "Bescherming rondom een krediet wanneer onverwachte omstandigheden invloed hebben op uw financiële situatie.",
    background:
      "radial-gradient(circle at 35% 60%, rgba(184,92,56,.35), transparent 25%), linear-gradient(140deg,#09152f,#10245e 55%,#243d73)",
  },
];

export default function FinancieringenPage() {
  const pageRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const optionsRef = useRef<HTMLElement>(null);
  const networkRef = useRef<HTMLElement>(null);
  const closingRef = useRef<HTMLElement>(null);

  const [activeOption, setActiveOption] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.4,
  });

  const heroWordOne = useTransform(
    smoothScroll,
    [0, 0.18],
    [0, -90]
  );

  const heroWordTwo = useTransform(
    smoothScroll,
    [0, 0.18],
    [0, 75]
  );

  const heroWordThree = useTransform(
    smoothScroll,
    [0, 0.18],
    [0, -55]
  );

  const heroLineHeight = useTransform(
    smoothScroll,
    [0, 0.28],
    ["0%", "100%"]
  );

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: optionsProgress } = useScroll({
    target: optionsRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: networkProgress } = useScroll({
    target: networkRef,
    offset: ["start 80%", "end 30%"],
  });

  const { scrollYProgress: closingProgress } = useScroll({
    target: closingRef,
    offset: ["start end", "end start"],
  });

  const networkDraw = useTransform(
    networkProgress,
    [0, 0.65],
    [0, 1]
  );

  // HERO — uitvliegen tijdens doorscrollen
  const heroTitleX = useTransform(heroProgress, [0, 1], [0, -170]);
  const heroSecondX = useTransform(heroProgress, [0, 1], [0, 190]);
  const heroCopperX = useTransform(heroProgress, [0, 1], [0, -110]);
  const heroFade = useTransform(heroProgress, [0, 0.72, 1], [1, 0.85, 0]);

  // KAARTEN — doorlopende beweging
  const cardsY = useTransform(optionsProgress, [0, 0.5, 1], [110, 0, -90]);

  // DONKERBLAUWE SECTIE
  const networkTitleY = useTransform(networkProgress, [0, 0.6, 1], [75, 0, -60]);
  const networkTextX = useTransform(networkProgress, [0, 0.65, 1], [90, 0, -45]);

  // AFSLUITING
  const closingTitleX = useTransform(closingProgress, [0, 0.5, 1], [-110, 0, -45]);
  const closingTextX = useTransform(closingProgress, [0, 0.5, 1], [100, 0, 45]);

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#f8f6f1] text-[#10245e]"
    >

      {/* =========================================================
          NAV
      ========================================================= */}
      <Navigation />


      {/* =========================================================
          HERO — TYPOGRAFIE
      ========================================================= */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center px-7 pb-20 pt-32 lg:px-12"
      >

        {/* verticale koperlijn */}
        <div className="absolute left-[52%] top-0 hidden h-full w-px bg-[#10245e]/7 lg:block">
          <motion.div
            style={{ height: heroLineHeight }}
            className="w-full bg-[#b85c38]/65"
          />
        </div>


        <div className="relative mx-auto w-full max-w-[1550px]">

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease,
            }}
            className="mb-9 text-[10px] uppercase tracking-[0.34em] text-[#10245e]/40"
          >
            Financieringen
          </motion.p>


          <h1 className="relative z-10 max-w-[790px] text-[clamp(5rem,8.2vw,9rem)] font-normal leading-[0.78] tracking-[-0.08em]">

            <motion.span
              style={{ x: heroTitleX, opacity: heroFade }}
              initial={{ opacity: 0, x: -160 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.12, ease }}
              className="block"
            >
              Ruimte
            </motion.span>

            <motion.span
              style={{ x: heroSecondX, opacity: heroFade }}
              initial={{ opacity: 0, x: 170 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="block pl-[5vw]"
            >
              voor wat u
            </motion.span>

            <motion.span
              style={{ x: heroCopperX, opacity: heroFade }}
              initial={{ opacity: 0, y: 110 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, delay: 0.3, ease }}
              className="block text-[#b85c38]"
            >
              wilt realiseren.
            </motion.span>

          </h1>


          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              ease,
            }}
            className="ml-auto mt-14 max-w-[470px] text-[17px] leading-8 text-[#10245e]/58 lg:mr-[7%]"
          >
            Privé of zakelijk: we kijken eerst naar wat u nodig heeft en
            vervolgens naar een financieringsmogelijkheid die daarbij past.
          </motion.p>


          {/* MOBIEL — losse zwevende woorden */}
          <div className="relative mt-14 h-[180px] w-full lg:hidden">
            {[
              { word: "privé", pos: "left-[5%] top-[8%]", color: "text-[#10245e]/45", delay: 0 },
              { word: "ondernemen", pos: "right-[1%] top-[30%]", color: "text-[#10245e]/50", delay: 0.6 },
              { word: "mobiliteit", pos: "left-[9%] bottom-[26%]", color: "text-[#b85c38]/75", delay: 1.2 },
              { word: "zekerheid", pos: "right-[5%] bottom-[3%]", color: "text-[#10245e]/45", delay: 1.8 },
            ].map(({ word, pos, color, delay }) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay, ease }}
                className={`absolute ${pos} ${color} text-[11px] uppercase tracking-[0.2em]`}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* zwevende woorden */}
          <motion.span
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
              className="absolute right-[5%] top-[0%] hidden text-[13px] uppercase tracking-[0.24em] text-[#10245e]/30 lg:block"
          >
            privé
          </motion.span>

          <motion.span
            animate={{ y: [0, 11, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
              className="absolute right-[20%] top-[21%] hidden text-[13px] uppercase tracking-[0.24em] text-[#10245e]/30 lg:block"
          >
            ondernemen
          </motion.span>

          <motion.span
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
              className="absolute right-[6%] top-[41%] hidden text-[13px] uppercase tracking-[0.24em] text-[#b85c38]/55 lg:block"
          >
            mobiliteit
          </motion.span>

          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 6.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[19%] top-[56%] hidden text-[13px] uppercase tracking-[0.24em] text-[#10245e]/30 lg:block"
          >
            zekerheid
          </motion.span>

        </div>


        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-[18px] text-[#10245e]/30 lg:block"
        >
          ↓
        </motion.div>

      </section>


      {/* =========================================================
          VIER MOGELIJKHEDEN — INTERACTIEVE 2 × 2
      ========================================================= */}
      <section
        ref={optionsRef}
        className="relative bg-white px-7 py-28 lg:px-12 lg:py-40"
      >

        <div className="mx-auto max-w-[1500px]">

          {/* INTRO */}
          <div className="mb-20 grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-end">

            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease }}
            >
              <p className="mb-7 text-[10px] uppercase tracking-[0.34em] text-[#10245e]/40">
                Financieringsmogelijkheden
              </p>

              <h2 className="text-[clamp(4rem,7vw,7.8rem)] leading-[0.86] tracking-[-0.065em]">
                Vier manieren.
                <br />
                <span className="text-[#b85c38]">
                  Eén vertrekpunt.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.12, ease }}
              className="pb-2"
            >
              <p className="max-w-[450px] text-[17px] leading-8 text-[#10245e]/55">
                Kies een mogelijkheid om meer te lezen. We bekijken altijd
                eerst wat past bij uw plannen en financiële situatie.
              </p>
            </motion.div>

          </div>


          {/* 2 × 2 GRID */}
          <div className="grid gap-5 lg:grid-cols-2">

            {options.map((option, index) => (
              <motion.button
                key={option.title}
                type="button"
                layoutId={`finance-card-${index}`}
                onClick={() => setActiveOption(index)}
                initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -120 : 120,
                    y: index < 2 ? 55 : 95,
                    scale: 0.92,
                    rotate: index % 2 === 0 ? -1.5 : 1.5,
                  }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                  }}
                viewport={{
                  once: true,
                  margin: "-70px",
                }}
                transition={{
                  duration: 0.95,
                  delay: index * 0.08,
                  ease,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative min-h-[330px] overflow-hidden text-left lg:min-h-[390px]"
              >

                {/* placeholder media */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: option.background,
                  }}
                  transition={{
                    duration: 0.7,
                    ease,
                  }}
                />

                {/* rustige overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#07132f]/80 via-[#07132f]/28 to-transparent" />

                {/* hover licht */}
                <div className="absolute inset-0 bg-white/0 transition-colors duration-700 group-hover:bg-white/[0.04]" />


                <div className="relative z-10 flex h-full min-h-[330px] flex-col justify-between p-8 text-white lg:min-h-[390px] lg:p-11">

                  <div className="flex items-start justify-between">

                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                      {option.label}
                    </span>

                    <motion.span
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-[20px] text-white"
                      whileHover={{
                        scale: 1.08,
                        rotate: 45,
                      }}
                      transition={{ duration: 0.35 }}
                    >
                      ↗
                    </motion.span>

                  </div>


                  <div>
                    <h3 className={`max-w-[570px] leading-[0.92] tracking-[-0.06em] ${
                      option.title === "Kredietbescherming"
                        ? "text-[clamp(2.5rem,4vw,4.8rem)]"
                        : "text-[clamp(2.5rem,4vw,4.8rem)]"
                    }`}>
                      {option.title === "Kredietbescherming" ? (
                        <>
                          <span className="lg:hidden">
                            Krediet-<br />bescherming
                          </span>
                          <span className="hidden lg:inline">
                            {option.title}
                          </span>
                        </>
                      ) : (
                        option.title
                      )}
                    </h3>

                    <div className="mt-7 flex items-center gap-4">
                      <span className="h-px w-8 bg-[#d58a68]" />

                      <span className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                        Bekijk mogelijkheid
                      </span>
                    </div>
                  </div>

                </div>


                {/* subtiele sweep */}
                <motion.div
                  className="pointer-events-none absolute -bottom-[60%] -right-[25%] h-[90%] w-[70%] rounded-full border border-white/15"
                  whileHover={{
                    scale: 1.2,
                    x: -20,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.9,
                    ease,
                  }}
                />

              </motion.button>
            ))}

          </div>

        </div>


        {/* =======================================================
            OPEN KAART — VLIEGT NAAR VOREN
        ======================================================= */}
        <AnimatePresence>
          {activeOption !== null && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setActiveOption(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07132f]/65 px-5 py-8 backdrop-blur-md lg:px-12"
            >

              <motion.div
                layoutId={`finance-card-${activeOption}`}
                onClick={(event) => event.stopPropagation()}
                transition={{
                  layout: {
                    duration: 0.65,
                    ease,
                  },
                }}
                className="relative h-[min(720px,86vh)] w-full max-w-[1180px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,.3)]"
                style={{
                  background: options[activeOption].background,
                }}
              >

                <div className="absolute inset-0 bg-gradient-to-r from-[#07132f]/92 via-[#07132f]/62 to-[#07132f]/15" />


                {/* decoratieve cirkel */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                    ease,
                  }}
                  className="absolute -right-[12%] -top-[30%] h-[85%] w-[55%] rounded-full border border-white/15"
                />


                {/* CLOSE */}
                <motion.button
                  type="button"
                  onClick={() => setActiveOption(null)}
                  initial={{
                    opacity: 0,
                    rotate: -45,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                    ease,
                  }}
                  whileHover={{
                    rotate: 90,
                    scale: 1.08,
                  }}
                  className="absolute right-7 top-7 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-[24px] text-white lg:right-10 lg:top-10"
                >
                  ×
                </motion.button>


                {/* CONTENT */}
                <div className="relative z-20 flex h-full max-w-[800px] flex-col justify-end p-8 text-white lg:p-16">

                  <motion.p
                    initial={{
                      opacity: 0,
                      x: -35,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.22,
                      ease,
                    }}
                    className="mb-6 text-[10px] uppercase tracking-[0.32em] text-[#e0a184]"
                  >
                    {options[activeOption].label}
                  </motion.p>


                  <div className="overflow-hidden">
                    <motion.h3
                      initial={{
                        y: "110%",
                      }}
                      animate={{
                        y: 0,
                      }}
                      transition={{
                        duration: 0.75,
                        delay: 0.18,
                        ease,
                      }}
                      className="text-[clamp(3.8rem,7vw,7.5rem)] leading-[0.86] tracking-[-0.07em]"
                    >
                      {options[activeOption].title}
                    </motion.h3>
                  </div>


                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    animate={{
                      scaleX: 1,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.4,
                      ease,
                    }}
                    className="my-8 h-px w-24 origin-left bg-[#d58a68]"
                  />


                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.45,
                      ease,
                    }}
                    className="max-w-[600px] text-[17px] leading-8 text-white/70 lg:text-[18px]"
                  >
                    {options[activeOption].text}
                  </motion.p>


                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.58,
                      ease,
                    }}
                    className="mt-10"
                  >
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-5 border-b border-white/25 pb-3 text-[15px]"
                    >
                      Bespreek de mogelijkheden

                      <span className="text-[#e0a184] transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </Link>
                  </motion.div>

                </div>

              </motion.div>

            </motion.div>

          )}
        </AnimatePresence>

      </section>


      {/* =========================================================
          AANBIEDERS — VERBINDINGSLIJNEN
      ========================================================= */}
      <section
        ref={networkRef}
        className="relative min-h-[900px] overflow-hidden bg-[#10245e] px-7 py-32 text-white lg:px-12 lg:py-44"
      >

        <div className="relative z-10 mx-auto max-w-[1500px]">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-[10px] uppercase tracking-[0.34em] text-white/40"
          >
            Onafhankelijk kijken
          </motion.p>


          <motion.h2
              style={{ y: networkTitleY }}
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease }}
            className="max-w-[1000px] text-[clamp(4rem,7vw,8rem)] leading-[0.86] tracking-[-0.065em]"
          >
            Niet gebonden
            <br />
            aan één
            <br />
            <span className="text-[#d58a68]">
              aanbieder.
            </span>
          </motion.h2>


          <motion.p
              style={{ x: networkTextX }}
            initial={{ opacity: 0, x: 100, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease,
            }}
            className="ml-auto mt-12 max-w-[510px] text-[17px] leading-8 text-white/60"
          >
            Heckmann werkt met geselecteerde aanbieders. Vanuit uw situatie
            bekijken we welke financieringsmogelijkheid en offerte passend is.
          </motion.p>

        </div>



        {/* MOBIEL NETWERK — VERTICAAL GEANIMEERD */}
        <div className="relative mx-auto mt-16 w-full max-w-[420px] lg:hidden">

          <div className="relative grid grid-cols-[1fr_54px_1fr] items-center gap-x-2">

            {/* DRIE INVOEREN */}
            <div className="flex flex-col gap-8">
              {["mogelijkheid", "aanbieder", "voorwaarden"].map((label, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.2,
                    ease,
                  }}
                  className="flex h-[58px] items-center border-b border-white/15"
                >
                  <span className="text-[10px] uppercase tracking-[0.13em] text-white/55">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* LIJNEN NAAR HET MIDDELPUNT */}
            <div className="relative h-[250px]">
              <svg
                viewBox="0 0 54 250"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full overflow-visible"
                fill="none"
              >
                {[
                  "M0 35 C22 35 22 125 54 125",
                  "M0 125 L54 125",
                  "M0 215 C22 215 22 125 54 125",
                ].map((path, index) => (
                  <motion.path
                    key={index}
                    d={path}
                    stroke={index === 1 ? "#d58a68" : "rgba(255,255,255,.35)"}
                    strokeWidth={index === 1 ? 1.7 : 1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 1.15,
                      delay: 0.35 + index * 0.2,
                      ease,
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* UW SITUATIE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.65 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              className="relative z-10 flex aspect-square w-full max-w-[145px] items-center justify-center justify-self-center rounded-full border border-[#d58a68]/65 bg-[#10245e] text-center"
            >
              <span className="text-[10px] uppercase leading-5 tracking-[0.2em] text-white/85">
                uw
                <br />
                situatie
              </span>
            </motion.div>

          </div>

          {/* UITGAANDE VERBINDING */}
          <div className="ml-auto flex w-[42%] flex-col items-center">

            <svg
              viewBox="0 0 2 90"
              className="h-[90px] w-[2px]"
              fill="none"
            >
              <motion.path
                d="M1 0 L1 90"
                stroke="#d58a68"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 1.15, ease }}
              />
            </svg>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 1.5, ease }}
              className="mt-3 border border-white/25 px-7 py-4 text-center"
            >
              <span className="text-[11px] uppercase tracking-[0.24em] text-white/75">
                offerte
              </span>
            </motion.div>

          </div>

        </div>

        {/* desktop netwerk */}
        <div className="relative mx-auto mt-24 hidden h-[330px] max-w-[1300px] lg:block">

          <svg
            viewBox="0 0 1300 330"
            className="absolute inset-0 h-full w-full"
            fill="none"
          >
            <motion.path
              d="M80 50 C 350 50, 520 165, 760 165"
              stroke="rgba(255,255,255,.22)"
              strokeWidth="1"
              style={{ pathLength: networkDraw }}
            />

            <motion.path
              d="M80 165 C 370 165, 500 165, 760 165"
              stroke="#b85c38"
              strokeWidth="1.5"
              style={{ pathLength: networkDraw }}
            />

            <motion.path
              d="M80 280 C 350 280, 520 165, 760 165"
              stroke="rgba(255,255,255,.22)"
              strokeWidth="1"
              style={{ pathLength: networkDraw }}
            />

            <motion.path
              d="M1220 80 C 1050 80, 960 165, 760 165"
              stroke="rgba(255,255,255,.16)"
              strokeWidth="1"
              style={{ pathLength: networkDraw }}
            />
          </svg>


          <span className="absolute left-0 top-[32px] text-[11px] uppercase tracking-[0.25em] text-white/40">
            mogelijkheid
          </span>

          <span className="absolute left-0 top-[147px] text-[11px] uppercase tracking-[0.25em] text-white/40">
            aanbieder
          </span>

          <span className="absolute left-0 top-[262px] text-[11px] uppercase tracking-[0.25em] text-white/40">
            voorwaarden
          </span>

          <span className="absolute right-0 top-[62px] text-[11px] uppercase tracking-[0.25em] text-white/40">
            offerte
          </span>


          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease,
            }}
            className="absolute left-[58.45%] top-[43%] flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d58a68]/55 bg-[#10245e] text-center"
          >
            <span className="text-[11px] uppercase leading-5 tracking-[0.23em] text-white/75">
              uw
              <br />
              situatie
            </span>
          </motion.div>

        </div>

      </section>


      {/* =========================================================
          AFSLUITING
      ========================================================= */}
      <section
        ref={closingRef}
        className="relative bg-[#f8f6f1] px-7 py-32 lg:px-12 lg:py-48"
      >

        <div className="mx-auto max-w-[1500px]">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.95, ease }}
            className="grid gap-16 lg:grid-cols-[1.15fr_.65fr] lg:items-end"
          >

            <motion.h2
                style={{ x: closingTitleX }}
                initial={{ opacity: 0, x: -130 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease }} className="text-[clamp(4rem,7vw,8rem)] leading-[0.97] lg:leading-[0.87] tracking-[-0.065em]">
              Financieren
              <br />
              begint met
              <br />
              <span className="text-[#b85c38]">
                de juiste vraag.
              </span>
            </motion.h2>


            <motion.div
                style={{ x: closingTextX }}
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.18, ease }} className="pb-2">

              <p className="max-w-[450px] text-[17px] leading-8 text-[#10245e]/58">
                Consumptief, zakelijk of voor een leaseoplossing: we bekijken
                eerst wat u nodig heeft en welke mogelijkheid daarbij past.
              </p>

              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-5 border-b border-[#10245e]/20 pb-3 text-[16px]"
              >
                Bespreek de mogelijkheden

                <motion.span
                  animate={{ x: [0, 7, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-[#b85c38]"
                >
                  →
                </motion.span>
              </Link>

            </motion.div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}
