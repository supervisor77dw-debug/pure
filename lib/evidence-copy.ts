import type { EvidenceClass } from './data';
import type { Locale } from './i18n';

type EvidenceCopy = {
  label: string;
  description: string;
};

export const EVIDENCE_COPY: Record<Locale, Record<EvidenceClass, EvidenceCopy>> = {
  de: {
    A: {
      label: 'extern geprüft',
      description: 'Extern geprüfte Ergebnisse mit definiertem Prüfgegenstand und dokumentierten Bedingungen.'
    },
    B: {
      label: 'intern dokumentiert',
      description: 'Nachvollziehbare interne Dokumentation, Projektdokumentation oder dokumentierte technische Quelle.'
    },
    C: {
      label: 'berechnet / modelliert',
      description: 'Berechnete oder modellierte Werte mit transparenten Annahmen und Grenzen.'
    },
    D: {
      label: 'Entwicklungsstatus',
      description: 'Entwicklungsstatus, geplanter Prüfpfad oder technische Hypothese ohne fertigen Leistungsclaim.'
    }
  },
  en: {
    A: {
      label: 'externally tested',
      description: 'Externally tested results with a defined test subject and documented conditions.'
    },
    B: {
      label: 'internally documented',
      description: 'Traceable internal documentation, project documentation or documented technical source.'
    },
    C: {
      label: 'calculated / modelled',
      description: 'Calculated or modelled values with transparent assumptions and limits.'
    },
    D: {
      label: 'development status',
      description: 'Development status, planned test path or technical hypothesis without a finished performance claim.'
    }
  }
};
