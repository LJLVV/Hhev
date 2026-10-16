"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import MortgageJourney from "@/components/MortgageJourney";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
} from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const situations = [
  {
    title: "Uw eerste woning",
    text: "Wat kunt u verantwoord lenen en welke hypotheek past bij uw situatie?",
    detail:
      "Bij een eerste woning komt veel tegelijk kijken. Heckmann brengt eerst uw inkomen, financiële ruimte en toekomstplannen in beeld. Daarna vergelijken we verschillende geldverstrekkers op rente én voorwaarden, zodat duidelijk wordt wat u verantwoord kunt lenen en welke hypotheek daarbij past.",
  },
  {
    title: "Verhuizen",
    text: "We bekijken uw bestaande hypotheek én de mogelijkheden voor uw volgende woning.",
    detail:
      "Bij een verhuizing kijken we niet alleen naar de financiering van uw nieuwe woning, maar ook naar uw huidige hypotheek. We bekijken welke voorwaarden u kunt meenemen, wat de verkoop van uw huidige woning betekent en welke mogelijkheden passen bij de volgende stap.",
  },
  {
    title: "Oversluiten of verhogen",
    text: "Lagere lasten, verbouwen of extra financiële ruimte? We bekijken wat mogelijk is.",
    detail:
      "Wilt u uw hypotheek aanpassen, verhogen of oversluiten? Dan bekijken we wat financieel verstandig is en welke kosten en voorwaarden daarbij horen. Bijvoorbeeld voor een verbouwing, verduurzaming, lagere maandlasten of extra financiële ruimte.",
  },
];



export default function HypothekenPage() {
  const [activeSituation, setActiveSituation] = useState<number | null>(null);
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
    <main className="bg-[#fbfaf7] text-[#10245e]">
      {/* HEADER */}
      <Navigation />


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
          className="absolute inset-0 w-full lg:inset-y-0 lg:right-0 lg:left-auto lg:w-[63%]"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover object-center"
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
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg,#f5f2ec 0%,#f5f2ec 34%,rgba(245,242,236,.96) 40%,rgba(245,242,236,.72) 46%,rgba(245,242,236,.18) 57%,rgba(245,242,236,0) 68%)",
          }}
        />

        {/* Mobiele overlay: video beeldvullend, tekst leesbaar */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071329]/85 via-[#071329]/35 to-[#071329]/20 lg:hidden"
        />

        {/* HERO COPY */}
        <motion.div
          style={{
            y: heroTextY,
            opacity: heroOpacity,
          }}
          className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1600px] items-end px-6 pb-[18svh] pt-28 lg:items-center lg:px-8 lg:pb-0 lg:pt-10"
        >
          <h1
            className="max-w-[830px] text-[clamp(2.9rem,11vw,4.6rem)] font-normal leading-[0.99] tracking-[-0.055em] text-white lg:text-[clamp(4.5rem,7.3vw,8rem)] lg:leading-[0.86] lg:tracking-[-0.07em] lg:text-[#10245e]"
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
                  className="text-[#b85c38]"
                  initial={false}
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
          className="absolute bottom-8 left-6 z-30 text-[18px] text-white/75 lg:left-8 lg:text-[#10245e]/45"
        >
          ↓
        </motion.div>
      </section>


        {/* =========================================================
            KENNISMAKEN + VERANTWOORD — ÉÉN VERHAAL
        ========================================================= */}
        <section className="relative overflow-hidden bg-white px-6 py-16 lg:px-8 lg:py-32">
          <div className="relative mx-auto max-w-[1500px]">

            {/* BOVENSTE VERHAAL */}
            <div className="grid gap-6 lg:grid-cols-[1.12fr_.88fr] lg:gap-12">

              <motion.div
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.85, ease }}
              >
                <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#10245e]/40 lg:mb-7">
                  Kennismaken
                </p>

                <h2 className="max-w-[790px] text-[clamp(2.65rem,10vw,3.6rem)] font-normal leading-[1.02] tracking-[-0.06em] text-[#10245e] lg:text-[clamp(3.6rem,5.6vw,6.4rem)] lg:leading-[0.91]">

                  <span className="block overflow-hidden">
                    <motion.span
                      initial={{ opacity: 0, x: -120 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 1,
                        ease,
                      }}
                      className="block"
                    >
                      Eerst weten
                    </motion.span>
                  </span>

                  <span className="block overflow-hidden">
                    <motion.span
                      initial={{ opacity: 0, x: -150 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 1.05,
                        delay: 0.14,
                        ease,
                      }}
                      className="block"
                    >
                      waar u aan toe bent.
                    </motion.span>
                  </span>

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
                className="max-w-[470px] pt-0 lg:justify-self-end lg:pt-10"
              >
                <p className="text-[16px] leading-7 text-[#10245e]/60 lg:text-[17px] lg:leading-8">
                  Het eerste hypotheekgesprek is gratis. We bekijken rustig
                  uw situatie en mogelijkheden, zonder dat u ergens aan vastzit.
                </p>

                <Link
                  href="/contact"
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
            <div className="hidden lg:block lg:my-14 lg:h-[180px] relative   lg: lg:">

              {/* subtiele achtergrondwoorden */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex"
              >
                <span className="whitespace-nowrap text-[clamp(3rem,7vw,7rem)] tracking-[-0.07em] text-[#10245e]/[0.025]">
                  luisteren · begrijpen · adviseren
                </span>
              </motion.div>


              {/* gebogen SVG route */}
              <svg
                viewBox="0 0 1400 180"
                preserveAspectRatio="none"
                className="absolute inset-0 hidden h-full w-full overflow-visible lg:block"
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
                className="absolute left-[1.8%] top-[22%] hidden h-3 w-3 rounded-full bg-[#b85c38] lg:block"
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
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white py-2 lg:left-[48%] lg:top-[38%] lg:-translate-x-1/2 lg:translate-y-0 lg:px-5"
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
                className="absolute right-[1.5%] top-[58%] hidden h-11 w-11 items-center justify-center rounded-full bg-[#b85c38] text-[21px] text-white lg:flex"
              >
                →
              </motion.div>

            </div>


            {/* ONDERSTE VERHAAL — TEKST LINKS / STATEMENT RECHTS */}
            <div className="grid gap-9 lg:grid-cols-[.62fr_1.38fr] lg:items-end lg:gap-24">

              {/* BIJTEKST LINKS */}
              <motion.div
                initial={{ opacity: 0, x: -70, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{
                  duration: 0.95,
                  ease,
                }}
                className="max-w-[390px] pb-3"
              >
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: 0.12,
                    ease,
                  }}
                  className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#b85c38] lg:text-[#10245e]/40"
                >
                  Persoonlijk advies
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease,
                  }}
                  className="text-[16px] leading-7 text-[#10245e]/58 lg:text-[17px] lg:leading-8"
                >
                  We kijken naar uw maandlasten, toekomstplannen en financiële
                  ruimte. Niet alleen naar het maximale bedrag dat een
                  geldverstrekker wil financieren.
                </motion.p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 90 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.45,
                    ease,
                  }}
                  className="mt-6 h-px bg-[#b85c38] lg:mt-9"
                />
              </motion.div>


              {/* GROOT STATEMENT RECHTS */}
              <motion.div
                initial={{ opacity: 0, x: 110, y: 55 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 1.05,
                  ease,
                }}
                className="lg:justify-self-end"
              >
                <h2 className="max-w-[930px] text-[clamp(2.55rem,9vw,3.5rem)] font-normal leading-[1.04] tracking-[-0.06em] text-[#10245e] lg:text-[clamp(3.5rem,5.7vw,6.7rem)] lg:leading-[0.89] lg:tracking-[-0.065em]">

                  <motion.span
                    initial={{ opacity: 0, x: 65 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.85,
                      delay: 0.08,
                      ease,
                    }}
                    className="block"
                  >
                    Niet wat maximaal
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0, x: 85 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.85,
                      delay: 0.18,
                      ease,
                    }}
                    className="block"
                  >
                    kan.
                  </motion.span>

                  <motion.span
                    initial={{
                      opacity: 0,
                      x: 120,
                      clipPath: "inset(0 100% 0 0)",
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      clipPath: "inset(0 0% 0 0)",
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.32,
                      ease,
                    }}
                    className="block text-[#b85c38]"
                  >
                    Wat verantwoord voelt.
                  </motion.span>

                </h2>
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
              {situations.map((item, index) => {
                const active = activeSituation === index;

                return (
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
                    className="relative overflow-hidden border-b border-[#10245e]/15"
                  >
                    {/* Blauw / koper vlak */}
                    <div
                      className={[
                        "pointer-events-none absolute inset-0 origin-left transition-transform duration-[650ms] ease-[cubic-bezier(.22,1,.36,1)]",
                        active ? "scale-x-100" : "scale-x-0",
                      ].join(" ")}
                      style={{
                        background:
                          "linear-gradient(90deg, #10245e 0%, #10245e 50%, #b85c38 50%, #b85c38 100%)",
                      }}
                    />

                    {/* Klikbare hoofdregel */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveSituation(active ? null : index)
                      }
                      className="group relative z-10 grid w-full cursor-pointer gap-6 px-0 py-10 text-left transition-[padding] duration-500 ease-out hover:px-8 md:grid-cols-[.9fr_1.1fr_40px] md:items-center"
                    >
                      <h3
                        className={[
                          "text-[clamp(1.8rem,2.5vw,2.8rem)] tracking-[-0.045em] transition-colors duration-300",
                          active
                            ? "text-white"
                            : "text-[#10245e] group-hover:text-[#b85c38]",
                        ].join(" ")}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={[
                          "max-w-[560px] text-[15px] leading-7 transition-colors duration-300",
                          active
                            ? "text-white/80"
                            : "text-[#10245e]/55",
                        ].join(" ")}
                      >
                        {item.text}
                      </p>

                      <span
                        className={[
                          "justify-self-end text-[25px] transition-all duration-500",
                          active
                            ? "rotate-90 text-white"
                            : "text-[#b85c38] group-hover:translate-x-2",
                        ].join(" ")}
                      >
                        →
                      </span>
                    </button>

                    {/* Extra informatie — opent alleen rechts */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: active ? "auto" : 0,
                        opacity: active ? 1 : 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.65,
                          ease,
                        },
                        opacity: {
                          duration: active ? 0.45 : 0.2,
                          delay: active ? 0.15 : 0,
                        },
                      }}
                      className="relative z-10 overflow-hidden"
                    >
                      <div className="grid md:grid-cols-[.9fr_1.1fr_40px]">
                        <div />

                        <motion.div
                          initial={false}
                          animate={{
                            y: active ? 0 : 25,
                          }}
                          transition={{
                            duration: 0.55,
                            delay: active ? 0.12 : 0,
                            ease,
                          }}
                          className="max-w-[650px] border-t border-white/25 pb-12 pt-7"
                        >
                          <p className="text-[17px] leading-8 text-white/90">
                            {item.detail}
                          </p>

                          <div className="mt-8 flex items-center gap-4">
                            <span className="h-px w-10 bg-white/45" />
                            <span className="text-[10px] uppercase tracking-[0.26em] text-white/55">
                              Persoonlijk hypotheekadvies
                            </span>
                          </div>
                        </motion.div>

                        <div />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
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
          <div className="relative flex w-full flex-col items-center gap-7 py-4 lg:block lg:min-h-[760px] lg:py-0">

            {/* subtiele gloed in het midden */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease }}
              className="pointer-events-none hidden lg:block absolute left-[50%] top-[50%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b85c38]/10 blur-[70px]"
            />


            {/* RENTE — breed en vloeiend */}
            <motion.div
              initial={{ opacity: 0, x: 55, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.9, delay: 0.05, ease }}
              className="group relative aspect-square w-full max-w-[325px] shrink-0 lg:absolute lg:left-[5%] lg:top-[5%] lg:h-[325px] lg:w-[325px] lg:max-w-none overflow-hidden shadow-[0_25px_70px_rgba(16,36,94,0.08)]"
              style={{
                borderRadius: "50%",
              }}
            >
              <img
                src="/rente.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.045]"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/65 via-black/18 to-transparent transition-opacity duration-700 group-hover:opacity-90" />

              <div className="absolute bottom-12 left-0 right-0 z-10 px-6 text-center text-white lg:bottom-10 lg:px-8 transition-transform duration-700 ease-out group-hover:-translate-y-1">
                <h3 className="text-[30px] font-normal tracking-[-0.035em]">
                  Rente
                </h3>
                <p className="mx-auto mt-2 max-w-[260px] text-[15px] leading-6 text-white/75">
                  De scherpe rente, passend bij uw situatie.
                </p>
              </div>
            </motion.div>


            {/* VOORWAARDEN — hoger en rustiger */}
            <motion.div
              initial={{ opacity: 0, x: 55, y: -20, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.9, delay: 0.14, ease }}
              className="group relative aspect-square w-full max-w-[325px] shrink-0 lg:absolute lg:right-[3%] lg:top-[0%] lg:h-[325px] lg:w-[325px] lg:max-w-none overflow-hidden shadow-[0_25px_70px_rgba(16,36,94,0.08)]"
              style={{
                borderRadius: "50%",
              }}
            >
              <img
                src="/voorwaarden.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.045]"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/58 via-black/15 to-transparent transition-opacity duration-700 group-hover:opacity-90" />

              <div className="absolute bottom-12 left-0 right-0 z-10 px-6 text-center text-white lg:bottom-10 lg:px-8 transition-transform duration-700 ease-out group-hover:-translate-y-1">
                <h3 className="text-[28px] font-normal tracking-[-0.035em]">
                  Voorwaarden
                </h3>
                <p className="mx-auto mt-2 max-w-[260px] text-[15px] leading-6 text-white/75">
                  Wat vandaag past, moet later ook blijven werken.
                </p>
              </div>
            </motion.div>


            {/* VERHUIZEN — verticale zachte vorm */}
            <motion.div
              initial={{ opacity: 0, x: -45, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.9, delay: 0.23, ease }}
              className="group relative aspect-square w-full max-w-[325px] shrink-0 lg:absolute lg:bottom-[0%] lg:left-[5%] lg:h-[325px] lg:w-[325px] lg:max-w-none overflow-hidden shadow-[0_25px_70px_rgba(16,36,94,0.08)]"
              style={{
                borderRadius: "50%",
              }}
            >
              <img
                src="/verhuizen.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.045]"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/68 via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-90" />

              <div className="absolute bottom-12 left-0 right-0 z-10 px-6 text-center text-white lg:bottom-10 lg:px-8 transition-transform duration-700 ease-out group-hover:-translate-y-1">
                <h3 className="text-[29px] font-normal tracking-[-0.035em]">
                  Verhuizen
                </h3>
                <p className="mx-auto mt-2 max-w-[260px] text-[15px] leading-6 text-white/75">
                  Ook als uw volgende woning al in beeld komt.
                </p>
              </div>
            </motion.div>


            {/* WONINGWAARDE — breed, laag en elegant */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.9, delay: 0.31, ease }}
              className="group relative aspect-square w-full max-w-[325px] shrink-0 lg:absolute lg:bottom-[2%] lg:right-[3%] lg:h-[325px] lg:w-[325px] lg:max-w-none overflow-hidden shadow-[0_25px_70px_rgba(16,36,94,0.08)]"
              style={{
                borderRadius: "50%",
              }}
            >
              <img
                src="/woningwaarde.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.045]"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/68 via-black/18 to-transparent transition-opacity duration-700 group-hover:opacity-90" />

              <div className="absolute bottom-12 left-0 right-0 z-10 px-6 text-center text-white lg:bottom-10 lg:px-8 transition-transform duration-700 ease-out group-hover:-translate-y-1">
                <h3 className="text-[29px] font-normal tracking-[-0.035em]">
                  Woningwaarde
                </h3>
                <p className="mx-auto mt-2 max-w-[290px] text-[15px] leading-6 text-white/75">
                  Verandert de waarde, dan kunnen uw mogelijkheden meebewegen.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      <MortgageJourney />

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
          href="/contact"
          className="group mx-auto flex max-w-[1500px] flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10"
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
            className="self-end pr-2 text-[3.5rem] font-light leading-none transition-transform group-hover:translate-x-2 lg:mb-3 lg:self-auto lg:pr-0 lg:text-[clamp(3rem,6vw,7rem)]"
          >
            →
          </motion.span>
        </Link>
      </section>

    </main>
  );
}
