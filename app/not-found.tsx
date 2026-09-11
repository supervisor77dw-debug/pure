import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="container not-found-page__inner">
        <span className="section-heading__eyebrow">PURE TECHNOLOGY PLATFORM</span>
        <h1>404</h1>
        <p>The requested page could not be found.</p>
        <div className="hero__ctas">
          <Link className="btn btn--primary" href="/en">Back to platform</Link>
          <Link className="btn btn--secondary btn--dark" href="/en/project-request">Discuss a project</Link>
        </div>
      </div>
    </main>
  );
}
