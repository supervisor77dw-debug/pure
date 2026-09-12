import type { Metadata } from "next";
import { headers } from "next/headers";
import { isLocale } from "@/lib/i18n";
import {
  getBoatProtectContent,
  type BoatProtectLocale,
} from "@/lib/boat-protect-content";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PhotoParityHero } from "@/components/ProductParityHero";

const boatCardMaterials = ["teak", "polymer", "leather", "metal", "joint", "finish"] as const;

export const metadata: Metadata = {
  title: "PURE Boat Protect | Premium Yacht Surface Protection | PURE",
  description:
    "Thin flexible surface-protection technology for premium yacht surfaces and zone-specific validation.",
};
function H({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-heading section-heading--narrow">
      {eyebrow ? (
        <span className="section-heading__eyebrow">{eyebrow}</span>
      ) : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}
export default function PureBoatProtectPage() {
  const segment = headers().get("x-pure-locale") || "en";
  const locale: BoatProtectLocale = isLocale(segment) ? segment : "en";
  const t = getBoatProtectContent(locale);
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Start", href: locale === "de" ? "/de" : "/en" },
          { label: t.name },
        ]}
      />
      <PhotoParityHero
        variant="boat"
        eyebrow={t.name}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        primary={{ label: t.heroCta, href: "#technology" }}
        secondary={{ label: t.zoneCta, href: "#test-area" }}
        facts={t.heroFacts.map(([value]) => ({
          value,
          label:
            locale === "de"
              ? "B · laut Marine-Unterlagen"
              : "B · according to marine documentation",
          note: value.includes("3")
            ? locale === "de"
              ? "abhängig von Nutzung und Exposition"
              : "depending on use and exposure"
            : undefined,
        }))}
      />
      <section className="section">
        <div className="container">
          <H
            eyebrow={t.challengeEyebrow}
            title={t.challengeTitle}
            intro={t.challengeCopy}
          />
          <div className="surface-protect-four-grid">
            {t.challenge.map((x) => (
              <article className="surface-protect-card" key={x}>
                <h3>{x}</h3>
              </article>
            ))}
          </div>
          <p className="surface-protect-statement">{t.statement}</p>
        </div>
      </section>
      <section className="section section--surface" id="technology">
        <div className="container">
          <H eyebrow={t.techEyebrow} title={t.techTitle} />
          <div className="boat-protect-steps">
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
      <section className="section" id="zones">
        <div className="container">
          <H eyebrow="YACHT ZONES" title={t.zonesTitle} />
          <div className="boat-protect-zones">
            {t.zones.map(([title, copy], index) => (
              <article data-material={boatCardMaterials[index]} key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--surface" id="test-area">
        <div className="container">
          <H eyebrow={t.compatEyebrow} title={t.compatTitle} />
          <div className="boat-protect-compat">
            {t.compat.map(([title, copy], index) => (
              <article data-material={boatCardMaterials[index]} key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="surface-protect-note">{t.sika}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <H
            eyebrow={t.performanceEyebrow}
            title="Documented performance basis."
          />
          <div className="water-protect-evidence">
            {t.performance.map(([title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--surface">
        <div className="container">
          <H eyebrow={t.qaEyebrow} title={t.qaTitle} />
          <ol className="boat-protect-qa">
            {t.qa.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ol>
          <p className="surface-protect-statement">{t.qaStatement}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <H title={t.marineTitle} />
          <div className="boat-protect-routes">
            {t.marineRoutes.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--surface">
        <div className="container">
          <H title={t.lifecycleTitle} />
          <div className="surface-protect-lifecycle">
            {t.lifecycle.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <div className="fire-protect-warning">
            <h3>{t.charterTitle}</h3>
            <p>{t.charterCopy}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <H title={t.limitsTitle} />
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
