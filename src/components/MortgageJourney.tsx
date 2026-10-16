"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

const steps = [
  {
    title: "Kennismaken",
    text: "We beginnen met uw situatie, wensen en mogelijkheden.",
  },
  {
    title: "Vergelijken",
    text: "We vergelijken geldverstrekkers op rente en voorwaarden.",
  },
  {
    title: "Regelen",
    text: "Van aanvraag tot taxatie en notaris begeleiden we het traject.",
  },
  {
    title: "Afronden",
    text: "We blijven betrokken totdat alles geregeld is.",
  },
];

function JourneyStep({
  title,
  text,
  index,
  progress,
}: {
  title: string;
  text: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const center = (index + 0.5) / 4;

  const opacity = useTransform(
    progress,
    index === 0
      ? [0, 0.01, center + 0.07, Math.min(1, center + 0.19)]
      : [
          Math.max(0, center - 0.19),
          center - 0.07,
          center + 0.07,
          Math.min(1, center + 0.19),
        ],
    [index === 0 ? 1 : 0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [center - 0.19, center, center + 0.19],
    [55, 0, -55]
  );

  const scale = useTransform(
    progress,
    [center - 0.19, center, center + 0.19],
    [0.94, 1, 0.94]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center"
    >
      <span className="mb-8 h-px w-20 bg-[#b85c38]" />

      <h3 className="text-[clamp(3rem,7vw,8rem)] leading-[0.95] tracking-[-0.07em] text-white">
        {title}
      </h3>

      <p className="mx-auto mt-8 max-w-[540px] px-6 text-[17px] leading-8 text-white/65">
        {text}
      </p>
    </motion.div>
  );
}

export default function MortgageJourney() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const lineScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  return (
    <section
      ref={ref}
      className="relative h-[400vh] bg-[#10245e] text-white"
    >
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden">

        <div className="mx-auto w-full max-w-[1500px] px-8 pt-20 lg:pt-24">
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-white/40">
            Van gesprek tot sleutel
          </p>

          <h2 className="text-[clamp(2.5rem,4.5vw,5.5rem)] leading-[0.95] tracking-[-0.06em]">
            We blijven erbij
            <br />
            <span className="text-white/55">
              tot het geregeld is.
            </span>
          </h2>
        </div>

        <div className="relative mx-auto min-h-0 w-full max-w-[1500px] flex-1 px-8">
          {steps.map((step, index) => (
            <JourneyStep
              key={step.title}
              {...step}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <div className="mx-auto w-full max-w-[1500px] px-8 pb-12">
          <div className="mb-5 grid grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <span
                key={step.title}
                className="text-center text-[10px] uppercase tracking-[0.12em] text-white/45"
              >
                <span className="hidden sm:inline">
                  {step.title}
                </span>
                <span className="sm:hidden">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
            ))}
          </div>

          <div className="h-[2px] w-full bg-white/15">
            <motion.div
              style={{ scaleX: lineScale }}
              className="h-full w-full origin-left bg-[#b85c38]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
