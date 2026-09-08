export interface EvidenceScopeProps {
  proves: string[];
  doesNotProve: string[];
}

// Mandatory two-part evidence framing: what is proven vs. what is not automatically proven.
export function EvidenceScope({ proves, doesNotProve }: EvidenceScopeProps) {
  return (
    <div className="evidence-scope">
      <div className="evidence-scope__panel evidence-scope__panel--proves">
        <h3>Was dieser Nachweis belegt</h3>
        <ul>
          {proves.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="evidence-scope__panel evidence-scope__panel--limits">
        <h3>Was dieser Nachweis nicht automatisch belegt</h3>
        <ul>
          {doesNotProve.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
