import type { Metadata } from "next";
import { headers } from "next/headers";
import { isLocale } from "@/lib/i18n";
import {
  getWoodProtectContent,
  type WoodProtectLocale,
} from "@/lib/wood-protect-content";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LightboxFigure } from "@/components/LightboxFigure";
import { PhotoParityHero } from "@/components/ProductParityHero";
import { SurfaceCard } from "@/components/SurfaceCard";

const woodChallengeAssets = [
  "Verwitterte Holzfassade im Abendlicht.png",
  "Regennasse Terrasse mit Weitblick.png",
  "Verwitterte Holzdielen mit Moos.png",
  "Holzpflege im goldenen Abendlicht.png",
] as const;
const woodApplicationAsset = "Modernes Holzhaus am Bergsee.png";
export const metadata: Metadata = {
  title: "PURE Wood Protect | Transparent Timber Surface Protection | PURE",
  description:
    "Thin transparent surface technology for visible timber and object-specific validation.",
};
function H({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-heading section-heading--narrow">
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}
export default function PureWoodProtectPage() {
  const segment = headers().get("x-pure-locale") || "en";
  const locale: WoodProtectLocale = isLocale(segment) ? segment : "en";
  const t = getWoodProtectContent(locale);
  const asset = (de: string, en: string) => (locale === "de" ? de : en);
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Start", href: locale === "de" ? "/de" : "/en" },
          { label: t.name },
        ]}
      />
      <PhotoParityHero
        variant="wood"
        eyebrow={t.name}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        primary={{ label: t.heroCta, href: "#technology" }}
        secondary={{ label: t.testCta, href: "#test-area" }}
      />
      <section className="section section--surface">
        <div className="container">
          <H
            eyebrow={t.relationEyebrow}
            title={t.relationTitle}
            intro={t.relationCopy}
          />
          <div className="floor-protect-relation">
            <strong>PURE SURFACE PROTECT</strong>
            <span>↓</span>
            <strong>PURE WOOD PROTECT</strong>
          </div>
        </div>
      </section>
      <section className="section" id="challenge">
        <div className="container">
          <H
            eyebrow={t.challengeEyebrow}
            title={t.challengeTitle}
            intro={t.challengeCopy}
          />
          <div className="wood-protect-card-grid wood-protect-card-grid--four">
            {t.challenge.map((title, index) => (
              <SurfaceCard className="wood-protect-card" surface="wood-context" backgroundAsset={woodChallengeAssets[index]} key={title}>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{woodChallengeCopy[locale][index]}</p>
              </SurfaceCard>
            ))}
          </div>
          <p className="surface-protect-statement">{t.statement}</p>
        </div>
      </section>
      <section className="section section--surface" id="technology">
        <div className="container">
          <H eyebrow={t.techEyebrow} title={t.techTitle} />
          <div className="wood-protect-steps">
            {t.steps.map(([title, copy], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="fire-protect-rule">{t.rule}</div>
        </div>
      </section>
      <section className="section" id="applications">
        <div className="container">
          <H eyebrow="APPLICATIONS" title={t.applicationsTitle} />
          <div className="wood-protect-card-grid">
            {t.applications.map(([title, copy]) => (
              <SurfaceCard className="wood-protect-card" surface="wood-application" backgroundAsset={woodApplicationAsset} key={title}>
                <span aria-hidden="true">{title.slice(0, 2)}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </SurfaceCard>
            ))}
          </div>
          <LightboxFigure
            file="02_wood_asset_page19.jpeg"
            alt={asset(
              "Illustratives Holzoberflächen-Kommunikationsvisual",
              "Illustrative timber-surface communication visual",
            )}
            caption={asset(
              "Illustratives Kommunikationsvisual – keine reale Referenz.",
              "Illustrative communication visual — not a real reference.",
            )}
            zoomLabel={locale === "de" ? "Vergrößern" : "Enlarge"}
            closeLabel={locale === "de" ? "Schließen" : "Close"}
          />
        </div>
      </section>
      <section className="section section--surface" id="test-area">
        <div className="container">
          <H
            eyebrow={t.evidenceEyebrow}
            title={t.evidenceTitle}
            intro={t.speciesNote}
          />
          <div className="wood-protect-species">
            {t.species.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <div className="surface-protect-qa">
            {t.test.map(([title, copy], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <H eyebrow={t.weatherEyebrow} title={t.weatherTitle} />
          <ul className="wood-protect-weather">
            {t.weather.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <div className="wood-protect-qa">
            {t.qa.map(([title, copy], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--surface">
        <div className="container">
            <H eyebrow="REGULATORY" title={t.regTitle} />
          <div className="fire-protect-regulatory">
            {t.reg.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
            <H eyebrow="LIFECYCLE VALUE" title={t.lifecycleTitle} />
          <div className="surface-protect-lifecycle">
            {t.lifecycle.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <div className="fire-protect-columns">
            <article>
              <h3>
                {locale === "de"
                  ? "DOKUMENTIERTE / PLAUSIBLE BASIS"
                  : "DOCUMENTED / PLAUSIBLE BASIS"}
              </h3>
              <ul>
                {t.strengths.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
            <article>
              <h3>
                {locale === "de"
                  ? "NICHT PAUSCHAL ABLEITBAR"
                  : "NOT GENERALLY DERIVABLE"}
              </h3>
              <ul>
                {t.limits.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <section className="section section--surface">
        <div className="container">
          <div className="final-cta">
            <h2>{t.finalTitle}</h2>
            <p>{t.finalCopy}</p>
            <a className="btn btn--primary" href="#test-area">
              {t.project}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const woodChallengeCopy = {
  de: [
    "UV, Regen und Temperaturwechsel verändern Farbe und Oberfläche.",
    "Feuchteaufnahme hängt stark von Holzart, Aufbau und Exposition ab.",
    "Schmutz und biologische Beläge beeinflussen Pflege und Erscheinungsbild.",
    "Pflegeintervalle und Nachbehandlung müssen objektspezifisch geplant werden."
  ],
  en: [
    "UV, rain and temperature changes alter colour and surface appearance.",
    "Moisture uptake depends strongly on wood species, build-up and exposure.",
    "Dirt and biological deposits influence maintenance and appearance.",
    "Care intervals and recoating need project-specific planning."
  ]
} as const;
