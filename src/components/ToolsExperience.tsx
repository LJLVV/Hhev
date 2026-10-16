"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const topics = [
  {
    id: "zorg",
    title: "Zorgverzekering",
    subtitle: "Vergelijken wat bij u past.",
    color: "#E4EAF4",
    position: "left-[12%] top-[9%]",
  },
  {
    id: "uitvaart",
    title: "Uitvaart",
    subtitle: "Uw wensen voor later.",
    color: "#F5E5D8",
    position: "right-[12%] top-[9%]",
  },
  {
    id: "duurzaam",
    title: "Verduurzamen",
    subtitle: "Een woning die vooruit kan.",
    color: "#E8EBE3",
    position: "left-1/2 -translate-x-1/2 bottom-[4%]",
  },
  {
    id: "documenten",
    title: "Documenten",
    subtitle: "Praktische informatie bij de hand.",
    color: "#F0E8DE",
    position: "right-[12%] bottom-[12%]",
  },
  {
    id: "kaarten",
    title: "Vergelijkingskaarten",
    subtitle: "Inzicht in uw mogelijkheden.",
    color: "#DCE4EF",
    position: "left-1/2 -translate-x-1/2 -bottom-[85px] translate-y-[180px]",
  },
] as const;

const visibleTopics = topics.filter(
  (topic) => topic.id !== "documenten" && topic.id !== "kaarten"
);

type TopicId = (typeof topics)[number]["id"];

export default function ToolsExperience() {
  const [active, setActive] = useState<TopicId | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const openTopic = (id: TopicId) => {
    setActive(id);

    window.setTimeout(() => {
      detailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 120);
  };
  const selected = topics.find((topic) => topic.id === active);

  return (
    <section className="relative overflow-hidden bg-[#f8f6f1] px-6 pb-40 pt-8 text-[#10245e] lg:px-12">
      <div className="mx-auto max-w-[1450px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-5 flex flex-col items-center gap-3 text-center"
        >
          <span className="h-10 w-px bg-[#b85c38]/50" />
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#b85c38]">
            Ontdek de mogelijkheden
          </p>
          <p className="max-w-[430px] text-[15px] leading-7 text-[#10245e]/50">
            Selecteer een onderwerp om verder te gaan.
          </p>
        </motion.div>

        <div className="relative hidden h-[690px] lg:block">
          <div className="pointer-events-none absolute left-1/2 top-[44%] h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#10245e]/10" />
          <div className="pointer-events-none absolute left-1/2 top-[44%] h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#b85c38]/30" />

          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease }}
            className="absolute left-1/2 top-[44%] flex h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#10245e] text-center text-white shadow-[0_30px_90px_rgba(16,36,94,0.18)]"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#d58a68]">
              Heckmann
            </span>
            <span className="mt-4 text-[30px] leading-[1.05] tracking-[-0.05em]">
              Tools &
              <br />
              informatie
            </span>
            <span className="mt-4 text-[12px] text-white/50">
              Kies uw onderwerp
            </span>
          </motion.div>

          {visibleTopics.map((topic, index) => (
            <div
              key={topic.id}
              className={
                topic.id === "duurzaam"
                  ? "absolute left-1/2 top-[580px] -translate-x-1/2"
                  : `absolute ${topic.position}`
              }
            >
            <motion.button
              key={topic.id}
              type="button"
              onClick={() => openTopic(topic.id)}
              initial={{ opacity: 0, scale: 0.7, y: 35 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: index * 0.12, ease }}
              whileHover={{ scale: 1.08, y: -8 }}
              style={{ backgroundColor: topic.color }}
              className={`group relative flex h-[185px] w-[185px] flex-col items-center justify-center rounded-full p-5 text-center shadow-[0_20px_50px_rgba(16,36,94,0.08)] transition-shadow duration-500 hover:shadow-[0_30px_70px_rgba(16,36,94,0.16)] ${topic.position}`}
            >
              <span className={`font-medium leading-tight tracking-[-0.04em] ${(topic.id as string) === "kaarten" ? "text-[17px]" : "text-[19px]"}`}>
                {(topic.id as string) === "kaarten" ? (
                  <>
                    Vergelijkings-
                    <br />
                    kaarten
                  </>
                ) : (
                  topic.title
                )}
              </span>
              <span className="mt-3 max-w-[145px] text-[12px] leading-5 text-[#10245e]/55">
                {topic.subtitle}
              </span>
              <span className="mt-3 text-[19px] text-[#b85c38] transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </motion.button>
            </div>
          ))}
        </div>

        {/* Mobiel: ruimtelijke, verspringende onderwerpen */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {visibleTopics.map((topic, index) => (
            <motion.button
              key={topic.id}
              type="button"
              onClick={() => openTopic(topic.id)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.65 }}
              style={{ backgroundColor: topic.color }}
              className={`flex aspect-square flex-col items-center justify-center rounded-full p-4 text-center ${
                index === 2 ? "col-span-2 mx-auto w-[55%]" : ""
              }`}
            >
              <span className="text-[clamp(13px,3.7vw,19px)] font-medium leading-tight tracking-[-0.04em]">
                {(topic.id as string) === "kaarten" ? (
                  <>
                    Vergelijkings-
                    <br />
                    kaarten
                  </>
                ) : (
                  topic.title
                )}
              </span>
              <span className="mt-3 text-[11px] text-[#10245e]/55">
                Ontdek meer ↗
              </span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              ref={detailRef}
              initial={{ opacity: 0, y: 55, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.65, ease }}
              className="relative mx-auto mt-48 max-w-[1100px] overflow-hidden rounded-[35px] bg-white p-7 shadow-[0_30px_100px_rgba(16,36,94,0.08)] md:p-12 lg:mt-48 lg:rounded-[55px] lg:p-16"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-7 top-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#f8f6f1] text-[23px] transition-colors hover:bg-[#f0e8de]"
                aria-label="Sluiten"
              >
                ×
              </button>

              <span className="text-[11px] uppercase tracking-[0.28em] text-[#b85c38]">
                Tools & informatie
              </span>

              <h3 className="mb-5 mt-5 max-w-[750px] pr-10 text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-[-0.06em]">
                {selected.title}
              </h3>

              <p className="mb-10 max-w-[550px] text-[16px] leading-7 text-[#10245e]/55">
                {selected.subtitle}
              </p>

              {/* De inhoud per onderwerp volgt hieronder */}

              {active === "zorg" && (
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      label: "Particulier",
                      text: "Vergelijk zorgverzekeringen op basis van uw situatie en zorgwensen.",
                      href: "https://zorgverzekering.upiva.nl/Vergelijker/Keuzescherm/?cid=b30c123c-cd4a-4e65-ba5e-3b35ad1e4528",
                    },
                    {
                      label: "Zelfstandig",
                      text: "De zorgvergelijker voor zelfstandig ondernemers.",
                      href: "https://zorgverzekering.upiva.nl/Vergelijker/Keuzescherm/?cid=099df93d-2045-48f1-8e49-cf73e753c686",
                    },
                    {
                      label: "Informatie & offerte",
                      text: "Meer informatie over zorgverzekeringen en een offerte aanvragen.",
                      href: "https://info.upiva.nl/tpc-heckmann-hypotheken-en-verzekeringen",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-[220px] flex-col justify-between rounded-[28px] bg-[#e4eaf4] p-7 transition-transform duration-500 hover:-translate-y-2"
                    >
                      <span className="text-[12px] uppercase tracking-[0.15em] text-[#b85c38]">
                        {item.label}
                      </span>
                      <p className="text-[16px] leading-6">{item.text}</p>
                      <span className="self-end text-[25px]">↗</span>
                    </a>
                  ))}
                </div>
              )}

              {active === "uitvaart" && (
                <a
                  href="https://funnel.uitvaart.asr.nl/heckmann-hypotheken-en-verzekeringen-249670/inventarisatietool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[220px] flex-col justify-between rounded-[28px] bg-[#f5e5d8] p-7 transition-transform duration-500 hover:-translate-y-2"
                >
                  <span className="block text-[21px] font-normal leading-[1.2] tracking-[-0.04em]">
                    Uw uitvaartwensen inventariseren
                  </span>
                  <span className="mt-5 block text-[16px] leading-6 text-[#10245e]/70">
                    Maak via a.s.r. een indicatie van uw wensen en de bijbehorende kosten.
                  </span>
                  <span className="mt-4 self-end text-[25px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              )}

              {active === "duurzaam" && (
                <a
                  href="https://www.verbeterjehuis.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[220px] flex-col justify-between rounded-[28px] bg-[#e8ebe3] p-7 transition-transform duration-500 hover:-translate-y-2"
                >
                  <span className="block text-[21px] font-normal leading-[1.2] tracking-[-0.04em]">
                    Ontdek Verbeterjehuis
                  </span>
                  <span className="mt-5 block text-[16px] leading-6 text-[#10245e]/70">
                    Bekijk welke verduurzamings-
                    <br />
                    maatregelen bij uw woning passen.
                  </span>
                  <span className="mt-4 self-end text-[25px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              )}

              {active === "documenten" && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Herbouwwaardemeter",
                    "Werkgeversverklaring NHG",
                    "Schadeaangifte algemeen",
                    "Inboedelwaardemeter",
                    "Digitaal aanrijdingsformulier",
                    "Verbouwingsspecificatie",
                    "Toelichting verbouwingsspecificatie",
                  ].map((item) => (
                    <div key={item} className="rounded-[22px] bg-[#f0e8de] p-6">
                      <p className="text-[16px]">{item}</p>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.13em] text-[#b85c38]">
                        Wordt bijgewerkt
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {active === "kaarten" && (
                <div className="grid gap-4 md:grid-cols-3">
                  {["Hypotheek", "Risico’s afdekken", "Vermogen opbouwen"].map(
                    (item) => (
                      <div key={item} className="rounded-[26px] bg-[#dce4ef] p-7">
                        <h4 className="min-h-[80px] text-[26px] leading-tight tracking-[-0.04em]">
                          {item}
                        </h4>
                        <p className="mt-6 text-[11px] uppercase tracking-[0.15em] text-[#b85c38]">
                          Wordt gecontroleerd
                        </p>
                      </div>
                    )
                  )}
                </div>
              )}

              {(active === "documenten" || active === "kaarten") && (
                <p className="mt-7 max-w-[650px] text-[13px] leading-6 text-[#10245e]/50">
                  De bestaande bestanden worden gecontroleerd en waar nodig
                  bijgewerkt voordat ze beschikbaar worden gesteld.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
