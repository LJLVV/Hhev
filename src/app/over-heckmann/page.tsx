"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Navigation from "@/components/Navigation";

const ease = [0.22, 1, 0.36, 1] as const;

export default function OverHeckmannPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#10245e]">
      <Navigation />

      <section className="px-7 pb-28 pt-36 lg:px-12 lg:pb-40 lg:pt-44">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e5dd]">
                <Image
                  src="/eric-heckmann.png"
                  alt="Eric Heckmann"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.24em] text-[#10245e]/45">
                Eric Heckmann · Persoonlijk financieel adviseur
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="max-w-[550px]"
            >
              <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[#b85c38]">
                Aangenaam
              </p>
              <h2 className="mb-9 text-[clamp(3.5rem,5vw,6rem)] leading-[0.9] tracking-[-0.06em]">
                Eric
                <br />
                Heckmann.
              </h2>
              <p className="mb-7 text-[clamp(1.3rem,1.8vw,1.8rem)] leading-[1.5] tracking-[-0.025em]">
                Ik geloof dat goed advies niet begint bij een verzekering,
                maar bij de persoon tegenover mij.
              </p>
              <p className="text-[16px] leading-8 text-[#10245e]/60">
                Daarom neem ik de tijd om u te leren kennen. Wat vindt u
                belangrijk? Welke risico's wilt u afdekken en welke kunt
                u zelf dragen? Pas als ik uw situatie goed begrijp, kijk
                ik welke oplossingen daarbij passen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white px-7 py-28 lg:px-12 lg:py-44">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.65fr_1fr] lg:gap-28">
          <div>
            <p className="sticky top-32 text-[11px] uppercase tracking-[0.3em] text-[#b85c38]">
              Mijn kijk op verzekeren
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
          >
            <h2 className="mb-12 text-[clamp(2.8rem,4.5vw,5rem)] leading-[1.02] tracking-[-0.055em]">
              Niet alles hoeft
              <br />
              verzekerd te worden.
            </h2>

            <div className="max-w-[680px] space-y-7 text-[17px] leading-[1.9] text-[#10245e]/65">
              <p>
                Sommige verzekeringen zijn noodzakelijk of simpelweg
                verstandig. Maar dat betekent niet dat ieder risico
                automatisch verzekerd moet worden.
              </p>
              <p>
                Wat voor de één een groot financieel risico is, kan voor
                een ander prima zelf te dragen zijn. Daarom kijk ik naar
                uw financiële situatie, uw wensen en natuurlijk uw budget.
              </p>
              <p>
                Samen bepalen we wat verstandig is om te verzekeren en
                wat misschien helemaal niet nodig is. Dat geldt voor
                particulieren én ondernemers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#10245e] px-7 py-28 text-white lg:px-12 lg:py-44">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="mx-auto max-w-[1180px]"
        >
          <p className="mb-12 text-[11px] uppercase tracking-[0.3em] text-[#d58a68]">
            Hoe ik ernaar kijk
          </p>

          <blockquote className="text-[clamp(2.8rem,5.5vw,6.5rem)] leading-[1.08] tracking-[-0.055em]">
            “Een verzekering is als een{" "}
            <span className="text-[#d58a68]">reddingsboei.</span>
            ”
          </blockquote>

          <p className="ml-auto mt-12 max-w-[540px] text-[18px] leading-8 text-white/55">
            Hoe belangrijk die is, hangt af van hoe goed u kunt zwemmen
            en hoe ver u van de kant bent.
          </p>
        </motion.div>
      </section>

      <section className="bg-[#f8f6f1] px-7 py-28 lg:px-12 lg:py-44">
        <div className="mx-auto grid min-w-0 max-w-[1280px] grid-cols-1 gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-28">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="min-w-0 max-w-full text-[clamp(2.6rem,8vw,3.5rem)] leading-[1.08] tracking-[-0.06em] lg:text-[clamp(3rem,5vw,6rem)] lg:leading-[0.95]"
          >
            Passend advies.
            <br />
            <span className="text-[#b85c38]">
              <span className="lg:hidden">
                Geen standaard-<br />oplossing.
              </span>
              <span className="hidden lg:inline">
                Geen standaardoplossing.
              </span>
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="min-w-0 max-w-full space-y-7 break-normal text-[17px] leading-[1.9] text-[#10245e]/65"
          >
            <p>
              Ik zal niet altijd de goedkoopste verzekering kunnen aanbieden.
              Online is er vaak wel ergens een lagere premie te vinden.
              Maar een lage premie vertelt niet het hele verhaal.
            </p>
            <p>
              Ik vind het belangrijker dat u goed verzekerd bent voor de
              risico's die er werkelijk toe doen. Dat de voorwaarden passen
              bij uw situatie en dat u weet waar u aan toe bent.
            </p>
            <p>
              Het liefst kijk ik naar uw verzekeringen als geheel. Zo kan
              ik helpen voorkomen dat u dubbel verzekerd bent, onnodige
              kosten maakt of belangrijke risico's over het hoofd ziet.
            </p>
            <p>
              En misschien nog wel zo prettig: u heeft één vertrouwd
              aanspreekpunt. Iemand die uw situatie kent en bij wie u
              terechtkunt met uw vragen. Ook nadat een verzekering is
              afgesloten.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-7 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1280px]">
          <p className="mb-8 text-[11px] uppercase tracking-[0.3em] text-[#b85c38]">
            Persoonlijk kennismaken
          </p>
          <h2 className="min-w-0 max-w-full text-[clamp(2.75rem,9.3vw,3.85rem)] leading-[1.05] tracking-[-0.06em] lg:max-w-[1050px] lg:text-[clamp(3.8rem,7vw,8rem)] lg:leading-[0.92] lg:tracking-[-0.065em]">
            Laten we eens
            <br />
            <span className="text-[#b85c38]">kennismaken.</span>
          </h2>

          <div className="mt-14 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <p className="max-w-[570px] text-[18px] leading-8 text-[#10245e]/60">
              Ik maak graag tijd voor een vrijblijvend gesprek. Dan kijken
              we samen naar uw situatie en wat ik voor u kan betekenen.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-8 border-b border-[#10245e]/30 pb-4 text-[17px]"
            >
              Neem contact op
              <span className="text-[26px] text-[#b85c38] transition-transform duration-300 group-hover:translate-x-2">
                ↗
              </span>
            </Link>
          </div>

          <p className="mt-24 text-[32px] italic tracking-[-0.04em] text-[#10245e]/70">
            Eric Heckmann
          </p>
        </div>
      </section>
    </main>
  );
}
