import type { Locale } from '@/lib/i18n';
import { EvidenceBadge } from './EvidenceBadge';

const content = {
  de: {
    gfrpTitle: 'Interne GFK-Vergleichsversuche',
    gfrpIntro: 'Historische interne Vergleichsversuche untersuchten thermische Oberflächenwirkung und Kondensatbildung an GFK-Prüfkörpern mit und ohne PURE-THERMO-Beschichtung. Die Ergebnisse gelten ausschließlich für die jeweiligen dokumentierten Versuchsaufbauten und stellen keine externe Zertifizierung dar.',
    tests: [
      {
        title: 'Kondensation',
        text: 'In einem internen Kältekammervergleich zeigte ein mit 10 mm PURE Thermo beschichteter GFK-Prüfkörper unter den dokumentierten Versuchsbedingungen eine deutlich verzögerte und reduzierte sichtbare Kondensatbildung gegenüber der unbeschichteten Referenz.',
        note: 'Nach 3,5 h: deutlicher Kondensatfilm auf der unbeschichteten Referenz; geringe sichtbare Kondensatbildung auf der beschichteten Vergleichsfläche.'
      },
      {
        title: 'Kälte',
        text: 'Im dokumentierten internen Vergleich wurde bei einer äußeren Oberflächentemperatur um 0 °C auf der beschichteten Probe eine etwa 5 °C höhere Temperatur als auf der unbeschichteten Vergleichsfläche beobachtet.',
        note: 'Interner Versuchsaufbau · GFK + PURE Thermo · nicht auf andere Bauteile übertragbar.'
      },
      {
        title: 'Wärmeeintrag',
        text: 'Beim internen Wärmevergleich wurde eine mittlere Temperaturdifferenz T1–T2 von ca. 38 °C am unbeschichteten GFK und ca. 60 °C am mit 10 mm PURE Thermo beschichteten GFK dokumentiert.',
        note: 'Evidence B · interne Vergleichsmessung · keine externe Leistungsprüfung.'
      }
    ],
    gateEyebrow: 'Offener Entwicklungs- und Prüfpfad',
    gateTitle: 'Vom Kennwert zur belastbaren Anwendung',
    gateIntro: 'Die folgenden Gates beschreiben den vorgesehenen Validierungsweg. Sie sind nicht als bereits abgeschlossen zu verstehen.',
    gates: [
      'Rezeptur / Produktidentität / technische Daten',
      'Wärmeleitfähigkeit / Diffusion / Wasseraufnahme / Haftung / Dauerhaftigkeit',
      'routenspezifische Brand- und Emissionsnachweise',
      'Pilotobjekt und unabhängiges Monitoring',
      'externe Bewertung / Energieberater / Bauverbände / ggf. DIBt- oder ETA-Pfad'
    ]
  },
  en: {
    gfrpTitle: 'Internal GFRP comparative tests',
    gfrpIntro: 'Historical internal comparative tests examined thermal surface effects and condensation formation on GFRP test specimens with and without a PURE THERMO coating. The results apply exclusively to the documented test setups and do not constitute external certification.',
    tests: [
      {
        title: 'Condensation',
        text: 'In an internal cold-chamber comparison, a GFRP test specimen coated with 10 mm of PURE Thermo showed visibly delayed and reduced condensation compared with the uncoated reference under the documented test conditions.',
        note: 'After 3.5 h: a distinct condensate film on the uncoated reference; low visible condensation on the coated comparison surface.'
      },
      {
        title: 'Cold exposure',
        text: 'In the documented internal comparison, at an external surface temperature around 0 °C, the temperature observed on the coated specimen was approximately 5 °C higher than on the uncoated comparison surface.',
        note: 'Internal test setup · GFRP + PURE Thermo · not transferable to other components.'
      },
      {
        title: 'Heat input',
        text: 'The internal heat comparison documented a mean temperature difference T1–T2 of approximately 38 °C on uncoated GFRP and approximately 60 °C on GFRP coated with 10 mm of PURE Thermo.',
        note: 'Evidence B · internal comparative measurement · not an external performance test.'
      }
    ],
    gateEyebrow: 'Open development and test path',
    gateTitle: 'From characteristic value to validated application',
    gateIntro: 'The following gates describe the intended validation path. They must not be understood as already completed.',
    gates: [
      'Formulation / product identity / technical data',
      'Thermal conductivity / diffusion / water absorption / adhesion / durability',
      'Route-specific fire and emissions evidence',
      'Pilot project and independent monitoring',
      'External assessment / energy consultants / construction associations / DIBt or ETA route where applicable'
    ]
  }
} as const;

export function PureThermoEvidenceEnrichment({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <>
      <section className="section thermo-gfrp-evidence" data-asset-status="EVIDENCE_ASSET_RIGHTS_PENDING">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <EvidenceBadge evidenceClass="B" locale={locale} />
            <h2>{copy.gfrpTitle}</h2>
            <p>{copy.gfrpIntro}</p>
          </div>
          <div className="thermo-gfrp-grid">
            {copy.tests.map((test) => (
              <article key={test.title}>
                <h3>{test.title}</h3>
                <p>{test.text}</p>
                <small>{test.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">{copy.gateEyebrow}</span>
            <h2>{copy.gateTitle}</h2>
            <p>{copy.gateIntro}</p>
          </div>
          <div className="route-step-grid thermo-stage-gates">
            {copy.gates.map((gate, index) => (
              <article className="route-step" key={gate}>
                <span>Gate {index + 1}</span>
                <strong>{gate}</strong>
                <small>{locale === 'de' ? 'offen' : 'open'}</small>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}