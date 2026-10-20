import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Image from "next/image";

const Arrow = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className="h-4 w-4"
  >
    <path
      d="M4 10h11M11 6l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

        <section className="relative min-h-[650px] overflow-hidden bg-[#f8f5ef] px-6 py-24 lg:min-h-[720px] lg:px-10 lg:py-32">

          {/* Zachte grafische cirkel links */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[310px] -left-[330px] h-[820px] w-[820px] rounded-full bg-[#efe8de]/70 lg:-bottom-[360px] lg:-left-[285px] lg:h-[930px] lg:w-[930px]"
          />

          {/* Buitenste koperlijn */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[250px] -left-[370px] hidden h-[730px] w-[730px] rounded-full border border-[#b85c38]/70 lg:block lg:-bottom-[285px] lg:-left-[315px] lg:h-[810px] lg:w-[810px]"
          />

          {/* Binnenste subtiele lijn */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[310px] -left-[315px] hidden h-[620px] w-[620px] rounded-full border border-[#b85c38]/20 lg:block lg:-bottom-[340px] lg:-left-[255px] lg:h-[690px] lg:w-[690px]"
          />

          {/* Koperpunt */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[15.5%] top-[40%] hidden h-[18px] w-[18px] rounded-full bg-[#b85c38] shadow-[0_0_0_6px_rgba(184,92,56,0.06)] lg:block"
          />

          <div className="relative z-10 mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#686b78]">
                Heckmann
              </p>
            </div>

            <div className="lg:pt-1">
              <Reveal>
              <h2 className="max-w-[980px] min-w-0 text-[clamp(2rem,8vw,2.7rem)] font-medium leading-[1.08] tracking-[-0.055em] [overflow-wrap:anywhere] text-[#101528] lg:text-[clamp(2.7rem,4.8vw,5.15rem)] lg:leading-[1.01] lg:tracking-[-0.06em] lg:[overflow-wrap:normal]">
                <span className="block text-[#10245e]">
                  Geen standaardoplossing,
                </span>

                <span className="block text-[#b85c38]">
                  maar advies dat bij u past.
                </span>
              </h2>
              </Reveal>

              <Reveal delay={0.16}>
              <p className="mt-7 max-w-[720px] min-w-0 text-[16px] leading-7 text-[#66708b] lg:mt-10 lg:text-[18px] lg:leading-9">
                Een hypotheek, verzekering of financiering moet aansluiten op uw
                situatie — niet andersom. Daarom begint goed advies met luisteren,
                vergelijken en kijken naar wat werkelijk nodig is.
              </p>
              </Reveal>
            </div>

          </div>
        </section>

      <section id="diensten" className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="mb-14">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#686b78]">
              Expertise
            </p>
            <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-medium tracking-[-0.055em] text-[#10245e]">
              Waarmee kan Eric helpen?
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Hypotheken",
                headline: <>Wonen begint met <span className="text-[#b85c38]">vertrouwen.</span></>,
                text: "Van uw eerste woning tot oversluiten, verhogen of verhuizen. Persoonlijk advies en begeleiding gedurende het hele traject.",
                href: "/hypotheken",
                background: "#f5e5d8",
                radius: "rounded-[70px_95px_75px_95px]",
              },
              {
                title: "Verzekeringen",
                headline: <>Goed verzekerd. <span className="text-[#b85c38]">Goed geregeld.</span></>,
                text: "Particulier en zakelijk verzekerd op basis van wat u daadwerkelijk nodig heeft, met aandacht voor dekking én prijs.",
                href: "/verzekeringen",
                background: "#e4eaf4",
                radius: "rounded-[95px_70px_95px_75px]",
              },
              {
                title: "Financieringen",
                headline: <>Ruimte voor <span className="text-[#b85c38]">uw plannen.</span></>,
                text: "Advies over consumptief krediet, financial lease, zakelijk krediet en kredietbescherming.",
                href: "/financieringen",
                background: "#e8ebe3",
                radius: "rounded-[85px_105px_80px_100px]",
                wide: true,
              },
            ].map((item, index) => (
              <Reveal
                key={item.title}
                className={item.wide ? "md:col-span-2" : ""}
                direction={index === 0 ? "left" : index === 1 ? "right" : "up"}
                delay={index === 1 ? 0.12 : 0}
              >
              <a
                href={item.href}
                style={{ backgroundColor: item.background }}
                className={[
                  "group relative flex min-h-[440px] flex-col justify-between overflow-hidden p-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_30px_65px_-35px_rgba(16,36,94,0.22)] lg:p-14",
                  item.radius,
                  item.wide ? "md:col-span-2 md:min-h-[350px]" : "",
                ].join(" ")}
              >
                <div className={item.wide ? "max-w-[900px]" : ""}>
                  <p className="mb-10 text-[11px] font-medium uppercase tracking-[0.18em] text-[#10245e]/55">
                    {item.title}
                  </p>

                  <h3 className="max-w-[800px] text-[clamp(2.8rem,4.8vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.065em] text-[#10245e] transition-transform duration-700 group-hover:translate-x-2">
                    {item.headline}
                  </h3>

                  <p className="mt-8 max-w-[530px] text-[15px] leading-7 text-[#10245e]/65 lg:text-[16px]">
                    {item.text}
                  </p>
                </div>

                <div className="mt-10 flex items-end justify-between gap-4">
                  <span className="border-b border-[#10245e]/45 pb-1 text-[14px] font-medium text-[#10245e]">
                    Meer over {item.title.toLowerCase()}
                  </span>

                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#10245e] text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#b85c38]">
                    <Arrow />
                  </span>
                </div>
              </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="over" className="bg-[#29338b] text-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="flex min-h-[620px] flex-col justify-between px-6 py-20 lg:px-10 lg:py-24">
            <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-8 bg-[#ea590a]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/65">
                Ervaring
              </p>
            </div>
            </Reveal>

            <div>
              <Reveal direction="left">
              <div className="flex items-start gap-4">
                <p className="text-[clamp(5rem,11vw,10rem)] font-medium leading-none tracking-[-0.08em]">
                  1989
                </p>
                <span className="mt-3 h-3 w-3 rounded-full bg-[#ea590a] lg:mt-5" />
              </div>
              </Reveal>
              <Reveal delay={0.12}>
              <h2 className="mt-5 max-w-[560px] text-[clamp(2rem,3.4vw,3.8rem)] font-medium leading-[1.03] tracking-[-0.055em]">
                Sindsdien actief in hypotheken en verzekeringen.
              </h2>
              </Reveal>
            </div>
          </div>

          <div className="flex min-h-[620px] items-end bg-[#20286f] px-6 py-20 lg:px-14 lg:py-24">
            <Reveal direction="right" className="max-w-[570px]">
              <p className="text-[19px] leading-8 text-white/85">
                Bij Heckmann heeft u rechtstreeks contact met Eric. Geen
                wisselende adviseurs of onnodige tussenlagen, maar één
                aanspreekpunt dat uw situatie kent.
              </p>
              <a
                href="/contact"
                className="group mt-9 inline-flex items-center gap-3 text-[14px] font-medium"
              >
                Over Heckmann
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 transition-colors group-hover:border-[#ea590a] group-hover:bg-[#ea590a] group-hover:text-white">
                  <Arrow />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="tools" className="bg-[#e5ebf3] px-6 py-24 lg:px-10 lg:py-32">
        <a
          href="/tools"
          aria-label="Ontdek alle tools en praktische informatie"
          className="group mx-auto block max-w-[1440px]"
        >
          <div className="flex items-center justify-between gap-6 border-b border-[#10245e]/20 pb-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#b85c38]">
              Tools & informatie
            </p>
            <span className="text-[12px] text-[#10245e]/50">
              Ontdek de mogelijkheden
            </span>
          </div>

          <div className="grid items-end gap-12 py-16 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20 lg:py-24">
            <Reveal>
              <h2 className="max-w-[950px] text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.94] tracking-[-0.065em] text-[#10245e]">
                Alles wat u
                <br />
                nodig heeft.
                <br />
                <span className="text-[#b85c38]">Op één plek.</span>
              </h2>
            </Reveal>

            <div className="flex flex-col items-start gap-12 lg:items-end">
              <Reveal delay={0.1}>
              <p className="max-w-[360px] text-[17px] leading-8 text-[#10245e]/60">
                Van zorgverzekeringen tot praktische documenten.
                Ontdek de hulpmiddelen en informatie die voor u
                klaarstaan.
              </p>
              </Reveal>

              <Reveal direction="scale" delay={0.18}>
              <span className="flex h-24 w-24 items-center justify-center rounded-full bg-[#10245e] text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#b85c38] lg:h-32 lg:w-32">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-10 w-10 lg:h-14 lg:w-14"
                  aria-hidden="true"
                >
                  <path d="M5 19 19 5M7 5h12v12" />
                </svg>
              </span>
              </Reveal>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#10245e]/20 pt-7">
            <span className="text-[14px] font-medium text-[#10245e]">
              Bekijk alle tools
            </span>
            <span className="text-[14px] text-[#10245e]/45">
              Heckmann
            </span>
          </div>
        </a>
      </section>

      <section
        id="contact"
        className="bg-[#20286f] px-6 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal direction="left">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-8 bg-[#ea590a]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/55">
                Contact
              </p>
            </div>
            <h2 className="max-w-[760px] text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.065em]">
              Een financiële vraag?
              <br />
              Bel Eric.
            </h2>
          </Reveal>

          <Reveal direction="right" className="flex flex-col justify-end">
            <p className="mb-8 max-w-[470px] text-[16px] leading-7 text-white/65">
              Voor vragen over hypotheken, verzekeringen of financieringen kunt
              u rechtstreeks contact opnemen of een contactaanvraag achterlaten.
            </p>

            <a
              href="tel:+31657455675"
              className="flex items-center justify-between border-t border-white/25 py-5 text-xl"
            >
              06 57 45 56 75
              <Arrow />
            </a>

            <a
              href="mailto:info@hhev.nl"
              className="flex items-center justify-between border-t border-b border-white/25 py-5 text-xl"
            >
              info@hhev.nl
              <Arrow />
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#171a2b] px-6 py-8 text-white/55 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 text-[12px] md:flex-row md:items-center md:justify-between">
          <p>© Heckmann Hypotheken & Verzekeringen B.V.</p>
          <p>Keenwerf 25 · 2804 MR Gouda</p>
        </div>
      </footer>
    </main>
  );
}
