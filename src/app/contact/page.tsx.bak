"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
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

export default function ContactPage() {
  const [typedText, setTypedText] = useState("");
  const heroRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: contactProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(heroProgress, [0, 1], [0, -150]);
  const phoneX = useTransform(heroProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(
    heroProgress,
    [0, 0.75, 1],
    [1, 0.8, 0]
  );

  const detailsX = useTransform(
    contactProgress,
    [0, 0.5, 1],
    [-100, 0, -45]
  );

  const formX = useTransform(
    contactProgress,
    [0, 0.5, 1],
    [100, 0, 45]
  );

  useEffect(() => {
    const text = "helpen?";
    let index = 0;

    const timeout = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        index += 1;
        setTypedText(text.slice(0, index));

        if (index >= text.length) {
          window.clearInterval(interval);
        }
      }, 145);
    }, 850);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <main className="overflow-hidden bg-[#f8f6f1] text-[#10245e]">

      {/* NAV */}
      <Navigation />


      {/* HERO — CONTACT KEUZE */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen flex-col overflow-hidden px-7 pb-10 pt-32 lg:px-12 lg:pt-36"
      >
        <div className="mx-auto flex w-full max-w-[1550px] flex-1 flex-col">

          {/* INTRO BOVEN */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="flex items-end justify-between border-b border-[#10245e]/15 pb-7"
          >
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#b85c38]">
              Contact
            </p>

            <p className="hidden text-[12px] text-[#10245e]/35 lg:block">
              Persoonlijk contact met Heckmann
            </p>
          </motion.div>


          {/* CENTRALE VRAAG */}
          <motion.div
            style={{ opacity: heroOpacity }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.1, ease }}
            className="relative z-20 flex min-h-[240px] items-center justify-center py-12 lg:min-h-[300px]"
          >
            <motion.h1
              style={{
                y: useTransform(
                  heroProgress,
                  [0, 1],
                  [0, -70]
                ),
              }}
              className="text-center text-[clamp(3.5rem,6.5vw,7.5rem)] leading-[0.9] tracking-[-0.07em]"
            >
              Zullen we even{" "}
              <span className="text-[#b85c38]">
                praten?
              </span>
            </motion.h1>
          </motion.div>


          {/* TWEE CONTACTKEUZES */}
          <div className="relative grid flex-1 border-y border-[#10245e]/15 lg:grid-cols-2">

            {/* middenlijn */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.45, ease }}
              className="absolute bottom-0 left-1/2 top-0 z-30 hidden w-px origin-top bg-[#10245e]/15 lg:block"
            />


            {/* BELLEN */}
            <motion.a
              href="tel:+31657455675"
              style={{
                x: useTransform(
                  heroProgress,
                  [0, 1],
                  [0, -110]
                ),
              }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.25, ease }}
              className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden border-b border-[#10245e]/15 p-8 lg:min-h-[360px] lg:border-b-0 lg:p-12"
            >
              {/* blauwe hoverlaag */}
              <div className="absolute inset-0 origin-left scale-x-0 bg-[#10245e] transition-transform duration-700 ease-out group-hover:scale-x-100" />

              {/* klein koper accent */}
              <div className="absolute bottom-0 left-0 h-[5px] w-0 bg-[#b85c38] transition-all duration-700 group-hover:w-full" />

              <div className="relative z-10 flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#10245e]/35 transition-colors duration-500 group-hover:text-white/45">
                  Liever direct?
                </span>

                <motion.span
                  className="text-[32px] text-[#b85c38] transition-colors duration-500 group-hover:text-white"
                  whileHover={{
                    x: 8,
                    y: -8,
                  }}
                >
                  ↗
                </motion.span>
              </div>

              <div className="relative z-10">
                <motion.div
                  className="overflow-hidden"
                >
                  <span className="block text-[clamp(3.7rem,6vw,7rem)] leading-none tracking-[-0.065em] transition-colors duration-500 group-hover:text-white">
                    Bellen
                  </span>
                </motion.div>

                <div className="grid grid-rows-[0fr] transition-all duration-700 group-hover:mt-8 group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="translate-y-8 text-[clamp(1.8rem,2.7vw,3.2rem)] tracking-[-0.045em] text-[#d58a68] opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                      06-57455675
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>


            {/* BERICHT */}
            <motion.a
              href="#contactverzoek"
              style={{
                x: useTransform(
                  heroProgress,
                  [0, 1],
                  [0, 110]
                ),
              }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.35, ease }}
              className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden p-8 lg:min-h-[360px] lg:p-12"
            >
              {/* koper hoverlaag */}
              <div className="absolute inset-0 origin-right scale-x-0 bg-[#b85c38] transition-transform duration-700 ease-out group-hover:scale-x-100" />

              {/* blauwe accentlijn */}
              <div className="absolute bottom-0 right-0 h-[5px] w-0 bg-[#10245e] transition-all duration-700 group-hover:w-full" />

              <div className="relative z-10 flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#10245e]/35 transition-colors duration-500 group-hover:text-white/55">
                  Een vraag achterlaten?
                </span>

                <motion.span
                  className="text-[32px] text-[#b85c38] transition-colors duration-500 group-hover:text-white"
                  whileHover={{ y: 8 }}
                >
                  ↓
                </motion.span>
              </div>

              <div className="relative z-10">
                <span className="block text-[clamp(3.7rem,6vw,7rem)] leading-[0.9] tracking-[-0.065em] transition-colors duration-500 group-hover:text-white">
                  Bericht
                  <br />
                  sturen
                </span>

                <div className="grid grid-rows-[0fr] transition-all duration-700 group-hover:mt-8 group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="translate-y-8 text-[20px] text-white opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-80">
                      Contactverzoek invullen ↓
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>

          </div>


          {/* SCROLL */}
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex justify-center pt-7 text-[#10245e]/25"
          >
            ↓
          </motion.div>

        </div>
      </section>


      {/* CONTACTZONE */}
      <section
        ref={contactRef}
        className="relative overflow-hidden bg-[#10245e] px-7 py-32 text-white lg:px-12 lg:py-44"
      >
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-24 lg:grid-cols-2">

            {/* DETAILS */}
            <motion.div
              style={{ x: detailsX }}
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease }}
            >
              <p className="mb-8 text-[10px] uppercase tracking-[0.34em] text-white/35">
                Heckmann
              </p>

              <h2 className="max-w-[650px] text-[clamp(3.8rem,6vw,7rem)] leading-[0.86] tracking-[-0.065em]">
                Persoonlijk
                <br />
                contact.
                <br />
                <span className="text-[#d58a68]">
                  Zoals het hoort.
                </span>
              </h2>

              <div className="mt-20 max-w-[520px] border-t border-white/15">

                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-[130px_1fr] border-b border-white/15 py-6"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                    Telefoon
                  </span>

                  <a
                    href="tel:+31657455675"
                    className="transition-colors hover:text-[#d58a68]"
                  >
                    06-57455675
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="grid grid-cols-[130px_1fr] border-b border-white/15 py-6"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                    E-mail
                  </span>

                  <a
                    href="mailto:info@hhev.nl"
                    className="transition-colors hover:text-[#d58a68]"
                  >
                    info@hhev.nl
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.16 }}
                  className="grid grid-cols-[130px_1fr] border-b border-white/15 py-6"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                    Adres
                  </span>

                  <span>
                    Keenwerf 25
                    <br />
                    2804 MR Gouda
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.24 }}
                  className="grid grid-cols-[130px_1fr] py-6"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                    Regio
                  </span>

                  <span>
                    Zuid-Holland & Utrecht
                  </span>
                </motion.div>

              </div>
            </motion.div>


            {/* FORM */}
            <motion.div
              style={{ x: formX }}
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease,
              }}
              className="lg:pt-20"
            >
              <p className="mb-10 text-[10px] uppercase tracking-[0.34em] text-[#d58a68]">
                Contactverzoek
              </p>

              <p className="mb-14 max-w-[500px] text-[18px] leading-8 text-white/55">
                Laat uw gegevens en vraag achter. Dan kan er contact met u
                worden opgenomen.
              </p>

              <form
                id="contactverzoek"
                onSubmit={(event) => event.preventDefault()}
                className="space-y-9"
              >
                <label className="group block">
                  <span className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-white/35">
                    Naam
                  </span>

                  <input
                    type="text"
                    className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-4 text-[20px] text-white outline-none transition-colors duration-500 placeholder:text-white/20 focus:border-[#d58a68]"
                    placeholder="Uw naam"
                  />
                </label>

                <label className="group block">
                  <span className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-white/35">
                    E-mail
                  </span>

                  <input
                    type="email"
                    className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-4 text-[20px] text-white outline-none transition-colors duration-500 placeholder:text-white/20 focus:border-[#d58a68]"
                    placeholder="uw@email.nl"
                  />
                </label>

                <label className="group block">
                  <span className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-white/35">
                    Telefoon
                  </span>

                  <input
                    type="tel"
                    className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-4 text-[20px] text-white outline-none transition-colors duration-500 placeholder:text-white/20 focus:border-[#d58a68]"
                    placeholder="06 ..."
                  />
                </label>

                <label className="group block">
                  <span className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-white/35">
                    Waar kunnen we mee helpen?
                  </span>

                  <textarea
                    rows={4}
                    className="w-full resize-none border-0 border-b border-white/20 bg-transparent px-0 py-4 text-[20px] text-white outline-none transition-colors duration-500 placeholder:text-white/20 focus:border-[#d58a68]"
                    placeholder="Vertel kort waar uw vraag over gaat..."
                  />
                </label>

                <motion.button
                  type="submit"
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  className="group mt-5 flex items-center gap-8 border-b border-[#d58a68] pb-3 text-[15px]"
                >
                  Verstuur contactverzoek

                  <span className="text-[24px] text-[#d58a68] transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </motion.button>
              </form>

              <p className="mt-8 max-w-[470px] text-[12px] leading-6 text-white/30">
                Het formulier is in deze ontwerpversie nog niet gekoppeld aan
                e-mailverzending.
              </p>
            </motion.div>

          </div>
        </div>
      </section>


      {/* AFSLUITING */}
      <section className="relative bg-[#f8f6f1] px-7 py-32 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1500px]">

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease }}
            className="grid gap-14 lg:grid-cols-[1.25fr_.55fr] lg:items-end"
          >
            <h2 className="text-[clamp(4rem,7vw,8rem)] leading-[0.84] tracking-[-0.07em]">
              Sinds 1989
              <br />
              persoonlijk
              <br />
              <span className="text-[#b85c38]">
                financieel advies.
              </span>
            </h2>

            <div>
              <p className="mb-8 text-[16px] leading-8 text-[#10245e]/50">
                Hypotheken, verzekeringen en financieringen met aandacht voor
                uw situatie en wat daarin echt belangrijk is.
              </p>

              <Link
                href="/"
                className="group inline-flex items-center gap-6 border-b border-[#10245e]/20 pb-3 text-[14px]"
              >
                Terug naar home
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
