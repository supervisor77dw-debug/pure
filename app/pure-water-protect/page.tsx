import type { Metadata } from "next";
import { headers } from "next/headers";
import { isLocale } from "@/lib/i18n";
import {
  getWaterProtectContent,
  type WaterProtectLocale,
} from "@/lib/water-protect-content";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AssetFigure } from "@/components/AssetFigure";
import { PhotoParityHero } from "@/components/ProductParityHero";
import { SurfaceCard } from "@/components/SurfaceCard";

const waterChallengeAssets = [
  "Unterwasserblick auf einen bewachsenen Bootsrumpf.png",
  "Luxusyacht im funkelnden Sonnenmeer.png",
  "Unterwasserreinigung eines Bootsrumpfs.png",
  "Luxusyacht im goldenen Hafenlicht.png",
] as const;
export const metadata: Metadata = {
  title: "PURE Water Protect | Marine Easy-to-Clean Surface Technology | PURE",
  description:
    "Ultra-thin easy-to-clean surface technology for defined marine applications.",
};
function Heading({
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
export default function PureWaterProtectPage() {
  const segment = headers().get("x-pure-locale") || "en";
  const locale: WaterProtectLocale = isLocale(segment) ? segment : "en";
  const t = getWaterProtectContent(locale);
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
        variant="water"
        eyebrow={t.name}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        primary={{ label: t.heroCta, href: "#technology" }}
        secondary={{ label: t.pilot, href: "#season" }}
      />
      <section className="section" id="challenge">
        <div className="container">
          <Heading
            eyebrow={t.challengeEyebrow}
            title={t.challengeTitle}
            intro={t.challengeCopy}
          />
          <div className="surface-protect-four-grid">
            {t.challenge.map((x, index) => (
              <SurfaceCard className="surface-protect-card" surface="water-context" backgroundAsset={waterChallengeAssets[index]} key={x}>
                <h3>{x}</h3>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--surface" id="technology">
        <div className="container">
          <Heading eyebrow={t.techEyebrow} title={t.techTitle} />
          <div className="water-protect-steps">
            {t.steps.map(([title, copy], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="water-protect-statement">{t.statement}</div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Heading eyebrow={t.performanceEyebrow} title={t.evidenceTitle} />
          <div className="water-protect-performance">
            {t.performance.map(([value, label]) => (
              <div key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--surface" id="evidence">
        <div className="container">
          <Heading eyebrow={t.evidenceEyebrow} title={t.evidenceTitle} />
          <div className="water-protect-evidence">
            {t.evidence.map(([title, status, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <span className="evidence-badge evidence-badge--{status==='D'?'D':'B'}">
                  {status}
                </span>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="season">
        <div className="container">
          <Heading eyebrow={t.seasonEyebrow} title={t.seasonTitle} />
          <div className="water-protect-season">
            {t.season.map(([title, copy], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="water-protect-statement">{t.seasonStatement}</p>
        </div>
      </section>
      <section className="section section--surface">
        <div className="container">
          <Heading eyebrow={t.applicationsTitle} title={t.applicationsTitle} />
          <div className="water-protect-application-list">
            {t.applications.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <AssetFigure
            file="02_water_problem_hull.jpeg"
            alt={asset(
              "Illustratives Hull-Kommunikationsvisual zu Bewuchs, Reinigung und Oberflächenpflege",
              "Illustrative hull communication visual about fouling, cleaning and surface care",
            )}
            caption={asset(
              "Illustratives Kommunikationsvisual – keine reale Referenz.",
              "Illustrative communication visual — not a real reference.",
            )}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Heading eyebrow={t.environmentEyebrow} title={t.environmentTitle} />
          <div className="fire-protect-columns">
            <article>
              <ul>
                {t.environment.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
            <article>
              <h3>
                {locale === "de"
                  ? "OFFENE NACHWEISFELDER"
                  : "OPEN EVIDENCE FIELDS"}
              </h3>
              <ul>
                {t.open.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <section className="section section--surface">
        <div className="container">
          <Heading
            eyebrow="HYDRODYNAMICS"
            title={t.fuelTitle}
            intro={t.fuelCopy}
          />
          <ul className="water-protect-fuel">
            {t.fuelNeed.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Heading eyebrow={t.qaEyebrow} title={t.qaTitle} />
          <ol className="water-protect-qa">
            {t.qa.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section section--surface">
        <div className="container">
          <Heading eyebrow={t.regEyebrow} title={t.regTitle} />
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
          <Heading eyebrow="RESPONSIBLE CLAIMS" title={t.limitsTitle} />
          <div className="fire-protect-columns">
            <article>
              <h3>
                {locale === "de"
                  ? "DOKUMENTIERTE / VORHANDENE BASIS"
                  : "DOCUMENTED / AVAILABLE BASIS"}
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
          <Heading eyebrow="LIFECYCLE VALUE" title={t.economyTitle} />
          <div className="surface-protect-lifecycle">
            {t.economy.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <div className="final-cta">
            <h2>{t.finalTitle}</h2>
            <p>{t.finalCopy}</p>
            <div className="hero__ctas" style={{ justifyContent: "center" }}>
              <a className="btn btn--primary" href="#season">
                {t.project}
              </a>
              <a className="btn btn--secondary btn--dark" href="#technology">
                {t.zone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
