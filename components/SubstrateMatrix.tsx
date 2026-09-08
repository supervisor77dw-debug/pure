export interface SubstrateRow {
  name: string;
  status: string;
  remark: string;
}

// Desktop renders a table; mobile renders the same data as stacked cards (CSS-driven visibility).
export function SubstrateMatrix({ rows }: { rows: SubstrateRow[] }) {
  return (
    <div className="substrate-matrix">
      <table className="substrate-matrix__table technical-table">
        <thead>
          <tr>
            <th scope="col">Untergrund</th>
            <th scope="col">Status</th>
            <th scope="col">Bemerkung</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td data-label="Untergrund">{row.name}</td>
              <td data-label="Status">{row.status}</td>
              <td data-label="Bemerkung">{row.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
