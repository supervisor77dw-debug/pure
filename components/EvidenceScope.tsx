export interface EvidenceScopeProps {
  proves: string[];
  doesNotProve: string[];
  locale?: 'de' | 'en';
}

// Mandatory two-part evidence framing: what is proven vs. what is not automatically proven.
export function EvidenceScope({ proves, doesNotProve, locale = 'de' }: EvidenceScopeProps) {
  return (
    <div className="evidence-scope">
      <div className="evidence-scope__panel evidence-scope__panel--proves">
        <h3>{locale === 'de' ? 'Was dieser Nachweis belegt' : 'What this evidence shows'}</h3>
        <ul>
          {proves.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="evidence-scope__panel evidence-scope__panel--limits">
        <h3>{locale === 'de' ? 'Was dieser Nachweis nicht automatisch belegt' : 'What this evidence does not automatically show'}</h3>
        <ul>
          {doesNotProve.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
