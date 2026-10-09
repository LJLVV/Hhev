"use client";

import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  useEffect,
  useRef,
} from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const situations = [
  {
    number: "01",
    title: "Uw eerste woning",
    text: "Wat kunt u verantwoord lenen en welke hypotheek past bij uw situatie?",
  },
  {
    number: "02",
    title: "Verhuizen",
    text: "We bekijken uw bestaande hypotheek én de mogelijkheden voor uw volgende woning.",
  },
  {
    number: "03",
    title: "Oversluiten of verhogen",
    text: "Lagere lasten, verbouwen of extra financiële ruimte? We bekijken wat mogelijk is.",
  },
];

const steps = [
  ["01", "Kennismaken", "Uw situatie, wensen en mogelijkheden."],
  ["02", "Vergelijken", "Geldverstrekkers, rente én voorwaarden."],
  ["03", "Regelen", "Van aanvraag tot taxatie en notaris."],
  ["04", "Afronden", "Begeleiding totdat alles geregeld is."],
];

export default function HypothekenPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTextY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -90]
  );

  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.03, 1.12]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [1, 0.85, 0]
  );

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.72;
    }
  }, []);

  return (
    <main className="overflow-hidden bg-[#f5f2ec] text-[#10245e]">

      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease }}
        className="absolute inset-x-0 top-0 z-50"
      >
        <div className="mx-auto flex h-[110px] max-w-[1600px] items-center justify-between px-8">

          <Link href="/" className="group">
            <img
              src="/heckmann-logo-transparent.png"
              alt="Heckmann"
              className="w-[150px] transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Link>

          <nav className="hidden items-center gap-9 text-[12px] font-medium text-[#10245e] lg:flex">
            <Link href="/hypotheken" className="relative">
              Hypotheken
              <span className="absolute -bottom-3 left-0 h-px w-full bg-[#b85c38]" />
            </Link>

            <Link
              href="/verzekeringen"
              className="transition-opacity duration-300 hover:opacity-45"
            >
              Verzekeringen
            </Link>

            <Link
              href="/financieringen"
              className="transition-opacity duration-300 hover:opacity-45"
            >
              Financieringen
            </Link>

            <Link
              href="/#tools"
              className="transition-opacity duration-300 hover:opacity-45"
            >
              Tools
            </Link>

            <Link
              href="/#over"
              className="transition-opacity duration-300 hover:opacity-45"
            >
              Over Heckmann
            </Link>

            <Link
              href="/#contact"
              className="group ml-4 flex items-center gap-4 rounded-full border border-[#10245e]/20 px-6 py-3 transition-all duration-300 hover:bg-[#10245e] hover:text-white"
            >
              Contact
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </nav>

        </div>
      </motion.header>


      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] overflow-hidden"
      >
        {/* video */}
        <motion.div
          style={{ scale: videoScale }}
          className="absolute inset-y-0 right-0 w-[63%]"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source
              src="/hypotheken-hero.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-[#e8c9a0]/[0.035]" />
        </motion.div>

        {/* zachte fade */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,#f5f2ec 0%,#f5f2ec 34%,rgba(245,242,236,.96) 40%,rgba(245,242,236,.72) 46%,rgba(245,242,236,.18) 57%,rgba(245,242,236,0) 68%)",
          }}
        />

        {/* HERO COPY */}
        <motion.div
          style={{
            y: heroTextY,
            opacity: heroOpacity,
          }}
          className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1600px] items-center px-8 pt-10"
        >
          <h1
            className="max-w-[830px] text-[clamp(4.5rem,7.3vw,8rem)] font-normal leading-[0.86] tracking-[-0.07em] text-[#10245e]"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            <span className="block overflow-hidden pb-[0.07em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.15,
                  delay: 0.45,
                  ease,
                }}
                className="block"
              >
                Een hypotheek
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-[0.07em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.15,
                  delay: 0.58,
                  ease,
                }}
                className="block"
              >
                voor wat er
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-[0.1em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.15,
                  delay: 0.71,
                  ease,
                }}
                className="block"
              >
                <motion.span
                  initial={{ color: "#10245e" }}
                  animate={{ color: "#b85c38" }}
                  transition={{
                    duration: 0.8,
                    delay: 1.45,
                  }}
                >
                  hierna
                </motion.span>{" "}
                komt.
              </motion.span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-8 z-30 text-[18px] text-[#10245e]/45"
        >
          ↓
        </motion.div>
      </section>


        {/* =========================================================
            KENNISMAKEN + VERANTWOORD — ÉÉN VERHAAL
        ========================================================= */}
        <section className="relative overflow-hidden bg-white px-8 py-24 lg:py-32">
          <div className="relative mx-auto max-w-[1500px]">

            {/* BOVENSTE VERHAAL */}
            <div className="grid gap-12 lg:grid-cols-[1.12fr_.88fr]">

              <motion.div
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.85, ease }}
              >
                <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#10245e]/40">
                  Kennismaken
                </p>

                <h2 className="max-w-[790px] text-[clamp(3.6rem,5.6vw,6.4rem)] font-normal leading-[0.91] tracking-[-0.06em] text-[#10245e]">
                  Eerst weten
                  <br />
                  waar u aan toe bent.
                </h2>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease,
                }}
                className="max-w-[470px] pt-10 lg:justify-self-end"
              >
                <p className="text-[17px] leading-8 text-[#10245e]/60">
                  Het eerste hypotheekgesprek is gratis. We bekijken rustig
                  uw situatie en mogelijkheden, zonder dat u ergens aan vastzit.
                </p>

                <Link
                  href="/#contact"
                  className="group mt-8 inline-flex items-center gap-5 text-[13px] font-medium text-[#10245e]"
                >
                  Plan een eerste gesprek

                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{
                      duration: 1.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-[#b85c38]"
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

            </div>


            {/* VERBINDING */}
            <div className="relative my-10 h-[150px] lg:my-14 lg:h-[180px]">

              {/* subtiele achtergrondwoorden */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <span className="whitespace-nowrap text-[clamp(3rem,7vw,7rem)] tracking-[-0.07em] text-[#10245e]/[0.025]">
                  luisteren · begrijpen · adviseren
                </span>
              </motion.div>


              {/* gebogen SVG route */}
              <svg
                viewBox="0 0 1400 180"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full overflow-visible"
              >
                <motion.path
                  d="M 35 48 C 310 48, 345 132, 690 92 C 995 56, 1110 115, 1360 115"
                  fill="none"
                  stroke="rgba(16,36,94,0.10)"
                  strokeWidth="1"
                />

                <motion.path
                  d="M 35 48 C 310 48, 345 132, 690 92 C 995 56, 1110 115, 1360 115"
                  fill="none"
                  stroke="#b85c38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.8,
                    ease,
                  }}
                />
              </svg>


              {/* STARTPUNT */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.1,
                  ease,
                }}
                className="absolute left-[1.8%] top-[22%] h-3 w-3 rounded-full bg-[#b85c38]"
              />


              {/* MIDDENLABEL */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.75,
                  ease,
                }}
                className="absolute left-[48%] top-[38%] -translate-x-1/2 bg-white px-5 py-2"
              >
                <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-[#10245e]/45">
                  Een hypotheek die klopt
                </span>
              </motion.div>


              {/* EINDPIJL */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: 1.55,
                  ease,
                }}
                className="absolute right-[1.5%] top-[58%] flex h-11 w-11 items-center justify-center rounded-full bg-[#b85c38] text-[21px] text-white"
              >
                →
              </motion.div>

            </div>


            {/* ONDERSTE VERHAAL */}
            <div className="grid gap-12 lg:grid-cols-[1.35fr_.65fr] lg:items-end">

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.9,
                  ease,
                }}
              >
                <h2 className="max-w-[1060px] text-[clamp(3.7rem,6vw,6.9rem)] font-normal leading-[0.89] tracking-[-0.065em] text-[#10245e]">
                  Niet wat maximaal
                  <br />
                  kan.{" "}
                  <span className="text-[#b85c38]">
                    Wat verantwoord voelt.
                  </span>
                </h2>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.18,
                  ease,
                }}
                className="pb-2 lg:justify-self-end"
              >
                <p className="max-w-[430px] text-[17px] leading-8 text-[#10245e]/58">
                  We kijken naar uw maandlasten, toekomstplannen en financiële
                  ruimte. Niet alleen naar het maximale bedrag dat een
                  geldverstrekker wil financieren.
                </p>
              </motion.div>

            </div>

          </div>
        </section>


      {/* =========================================================
          SITUATIES — INTERACTIEVE REGELS
      ========================================================= */}
      <section className="bg-[#f5f2ec] px-8 py-32 lg:py-44">
        <div className="mx-auto max-w-[1500px]">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
            className="mb-20 flex items-end justify-between"
          >
            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#10245e]/40">
                Uw situatie
              </p>

              <h2 className="text-[clamp(3.5rem,5.5vw,6.2rem)] leading-[.95] tracking-[-0.06em]">
                Waar staat u nu?
              </h2>
            </div>

            <span className="hidden text-[12px] text-[#10245e]/40 lg:block">
              Kies uw situatie ↓
            </span>
          </motion.div>

          <div className="border-t border-[#10245e]/15">
            {situations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                  ease,
                }}
                className="group relative cursor-default overflow-hidden border-b border-[#10245e]/15"
              >
                {/* Hover background — schuift als één vlak van links naar rechts */}
                <div
                  className="absolute inset-0 origin-left scale-x-0 transition-transform duration-[650ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
                  style={{
                    background:
                      "linear-gradient(90deg, #10245e 0%, #10245e 50%, #b85c38 50%, #b85c38 100%)",
                  }}
                />

                <div className="relative z-10 grid min-h-[145px] items-center gap-6 px-0 transition-[padding] duration-500 ease-out group-hover:px-8 md:grid-cols-[.9fr_1.1fr_40px]">

                  <h3 className="text-[clamp(1.8rem,2.5vw,2.8rem)] tracking-[-0.045em] text-[#10245e] transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="max-w-[560px] text-[15px] leading-7 text-[#10245e]/55 transition-colors duration-300 group-hover:text-white/80">
                    {item.text}
                  </p>

                  <span className="-translate-x-4 text-[24px] text-white opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================
          MEER DAN ALLEEN RENTE — ORGANISCHE VISUALS
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#fbfaf7] px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-[1550px] items-center gap-20 xl:grid-cols-[0.72fr_1.28fr] xl:gap-24">

          {/* LINKERKANT */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease }}
            className="relative z-20 xl:-translate-y-4"
          >
            <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.34em] text-[#10245e]/45">
              Verder kijken
            </p>

            <h2 className="max-w-[610px] text-[clamp(4.5rem,7vw,8.4rem)] font-normal leading-[0.84] tracking-[-0.07em] text-[#10245e]">
              Meer dan
              <br />
              alleen
              <br />
              <span className="text-[#b85c38]">rente.</span>
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.25, ease }}
              className="mt-10 h-px w-28 origin-left bg-[#b85c38]/60"
            />

            <p className="mt-9 max-w-[490px] text-[18px] leading-8 text-[#10245e]/62">
              Heckmann vergelijkt meerdere geldverstrekkers. Daarbij kijken
              we niet alleen naar rente, maar ook naar de voorwaarden die
              later verschil kunnen maken.
            </p>
          </motion.div>

          {/* ORGANISCHE BEELDEN */}
          <div className="relative min-h-[690px] w-full lg:min-h-[760px]">

            {/* zachte koperkleurige verbinding achter de vormen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.15, ease }}
              className="pointer-events-none absolute left-[49%] top-[49%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[38%_62%_44%_56%/58%_36%_64%_42%] bg-[#b85c38]/20 blur-[38px]"
            />

            {/* RENTE */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 35, scale: 0.94 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.05, ease }}
              whileHover={{ scale: 1.025, rotate: -1 }}
              className="group absolute left-[0%] top-[4%] h-[340px] w-[58%] origin-bottom-right overflow-hidden border border-[#b85c38]/35 shadow-[0_24px_70px_rgba(16,36,94,0.08)]"
              style={{
                clipPath:
                  "polygon(7% 13%, 24% 2%, 50% 4%, 72% 15%, 91% 34%, 100% 58%, 96% 84%, 78% 96%, 52% 92%, 30% 100%, 12% 89%, 2% 68%, 0% 39%)",
                borderRadius: "38% 50% 30% 45% / 40% 35% 52% 48%",
              }}
            >
              <img
                src="/rente.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-9 left-10 z-10 text-white">
                <h3 className="text-[30px] font-normal tracking-[-0.035em]">
                  Rente
                </h3>
                <p className="mt-2 max-w-[230px] text-[15px] leading-6 text-white/72">
                  De scherpe rente, passend bij uw situatie.
                </p>
                <span className="mt-5 block text-2xl text-white/80 transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </motion.div>

            {/* VOORWAARDEN */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -15, scale: 0.94 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease }}
              whileHover={{ scale: 1.025, rotate: 1 }}
              className="group absolute right-[0%] top-[0%] h-[325px] w-[41%] origin-bottom-left overflow-hidden border border-[#b85c38]/35 shadow-[0_24px_70px_rgba(16,36,94,0.08)]"
              style={{
                clipPath:
                  "polygon(24% 1%, 54% 0%, 79% 10%, 96% 31%, 100% 59%, 91% 82%, 69% 93%, 39% 97%, 15% 88%, 2% 69%, 5% 43%, 11% 18%)",
                borderRadius: "48% 42% 44% 34% / 40% 47% 38% 55%",
              }}
            >
              <img
                src="/voorwaarden.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/15 to-transparent" />

              <div className="absolute bottom-9 left-9 z-10 text-white">
                <h3 className="text-[27px] font-normal tracking-[-0.035em]">
                  Voorwaarden
                </h3>
                <p className="mt-2 max-w-[210px] text-[15px] leading-6 text-white/75">
                  Wat vandaag past, moet later ook blijven werken.
                </p>
                <span className="mt-5 block text-2xl text-white/80 transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </motion.div>

            {/* VERHUIZEN */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 55, scale: 0.94 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.24, ease }}
              whileHover={{ scale: 1.025, rotate: 1 }}
              className="group absolute bottom-[0%] left-[1%] h-[385px] w-[45%] origin-top-right overflow-hidden border border-[#b85c38]/35 shadow-[0_24px_70px_rgba(16,36,94,0.08)]"
              style={{
                clipPath:
                  "polygon(13% 15%, 39% 3%, 70% 0%, 94% 12%, 100% 34%, 91% 54%, 76% 70%, 62% 91%, 40% 100%, 18% 94%, 4% 74%, 0% 46%)",
                borderRadius: "44% 32% 48% 38% / 35% 50% 42% 55%",
              }}
            >
              <img
                src="/verhuizen.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-10 left-10 z-10 text-white">
                <h3 className="text-[29px] font-normal tracking-[-0.035em]">
                  Verhuizen
                </h3>
                <p className="mt-2 max-w-[210px] text-[15px] leading-6 text-white/75">
                  Ook als uw volgende woning al in beeld komt.
                </p>
                <span className="mt-5 block text-2xl text-white/80 transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </motion.div>

            {/* WONINGWAARDE */}
            <motion.div
              initial={{ opacity: 0, x: 45, y: 50, scale: 0.94 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.32, ease }}
              whileHover={{ scale: 1.025, rotate: -1 }}
              className="group absolute bottom-[1%] right-[0%] h-[360px] w-[57%] origin-top-left overflow-hidden border border-[#b85c38]/35 shadow-[0_24px_70px_rgba(16,36,94,0.08)]"
              style={{
                clipPath:
                  "polygon(8% 24%, 25% 8%, 49% 1%, 75% 5%, 94% 19%, 100% 42%, 96% 68%, 80% 87%, 55% 98%, 29% 95%, 10% 82%, 0% 61%)",
                borderRadius: "34% 48% 42% 52% / 42% 36% 52% 44%",
              }}
            >
              <img
                src="/woningwaarde.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/15 to-transparent" />

              <div className="absolute bottom-10 left-10 z-10 text-white">
                <h3 className="text-[29px] font-normal tracking-[-0.035em]">
                  Woningwaarde
                </h3>
                <p className="mt-2 max-w-[230px] text-[15px] leading-6 text-white/75">
                  Verandert de waarde, dan kunnen uw mogelijkheden meebewegen.
                </p>
                <span className="mt-5 block text-2xl text-white/80 transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================================
          PROCES — GEEN VIER VAKKEN
      ========================================================= */}
      <section className="bg-white px-8 py-32 lg:py-48">
        <div className="mx-auto max-w-[1500px]">

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="mb-24"
          >
            <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#10245e]/40">
              Van gesprek tot sleutel
            </p>

            <h2 className="max-w-[950px] text-[clamp(3.8rem,6vw,6.8rem)] leading-[.92] tracking-[-0.06em]">
              We blijven erbij
              <br />
              tot het geregeld is.
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-[20px] h-px bg-[#10245e]/15" />

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                ease,
              }}
              className="absolute left-0 right-0 top-[20px] h-px origin-left bg-[#b85c38]"
            />

            <div className="grid gap-12 md:grid-cols-4">
              {steps.map(([number, title, text], index) => (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: 0.2 + index * 0.12,
                    ease,
                  }}
                  className="relative pt-16"
                >
                  <span className="absolute left-0 top-[14px] h-[13px] w-[13px] rounded-full border-[3px] border-white bg-[#b85c38]" />

                  <span className="text-[10px] tracking-[0.2em] text-[#b85c38]">
                    {number}
                  </span>

                  <h3 className="mt-5 text-[27px] tracking-[-0.04em]">
                    {title}
                  </h3>

                  <p className="mt-4 max-w-[270px] text-[14px] leading-7 text-[#10245e]/55">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          BELASTINGAANGIFTE
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#f5f2ec] px-8 py-36 lg:py-52">
        <motion.span
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="pointer-events-none absolute -right-8 -top-16 text-[clamp(15rem,30vw,34rem)] font-medium leading-none tracking-[-0.09em] text-[#10245e]/[0.035]"
        >
          01
        </motion.span>

        <div className="relative z-10 mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[.55fr_1.45fr]">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] text-[#10245e]/40"
          >
            Extra service
          </motion.p>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease }}
              className="max-w-[1000px] text-[clamp(3.7rem,6.2vw,7rem)] leading-[.92] tracking-[-0.06em]"
            >
              Hypotheek geregeld?
              <br />
              <span className="text-[#b85c38]">
                Dan helpen we verder.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease,
              }}
              className="mt-10 max-w-[650px] text-[17px] leading-8 text-[#10245e]/58"
            >
              Regelt Heckmann uw hypotheek en bent u in
              loondienst? Dan doen we de belastingaangifte
              van het eerste jaar gratis.
            </motion.p>
          </div>
        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#b85c38] px-8 py-24 text-white lg:py-32">
        <Link
          href="/#contact"
          className="group mx-auto flex max-w-[1500px] items-end justify-between gap-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-white/60">
              Kennismaken
            </p>

            <h2 className="text-[clamp(3.7rem,7vw,8rem)] leading-[.87] tracking-[-0.07em]">
              Praat eens met
              <br />
              Heckmann.
            </h2>
          </motion.div>

          <motion.span
            whileHover={{ x: 12 }}
            className="mb-3 text-[clamp(3rem,6vw,7rem)] font-light"
          >
            →
          </motion.span>
        </Link>
      </section>

    </main>
  );
}
