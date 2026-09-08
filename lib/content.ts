// Loads editorial content from /content and splits it into H2-level sections
// so page templates can place each section into the correct design slot
// without hard-coding copy inside components.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const CONTENT_ROOT = path.join(process.cwd(), 'content');

export interface ContentSection {
  heading: string;
  html: string;
}

export interface ParsedContent {
  frontmatter: Record<string, unknown>;
  intro: ContentSection | null;
  sections: ContentSection[];
  getSection: (headingMatch: string) => ContentSection | undefined;
}

function splitSections(body: string): { intro: ContentSection | null; sections: ContentSection[] } {
  const lines = body.split(/\r?\n/);
  const blocks: { heading: string; lines: string[] }[] = [];
  let current: { heading: string; lines: string[] } | null = null;

  for (const line of lines) {
    const h1 = /^#\s+(.*)/.exec(line);
    const h2 = /^##\s+(.*)/.exec(line);
    if (h1) {
      current = { heading: h1[1].trim(), lines: [] };
      blocks.push(current);
    } else if (h2) {
      current = { heading: h2[1].trim(), lines: [] };
      blocks.push(current);
    } else if (current) {
      current.lines.push(line);
    } else {
      current = { heading: '', lines: [line] };
      blocks.push(current);
    }
  }

  const rendered = blocks.map((b) => ({
    heading: b.heading,
    html: marked.parse(b.lines.join('\n').trim(), { async: false }) as string
  }));

  const intro = rendered.length && rendered[0].heading !== '' ? rendered[0] : null;
  const sections = intro ? rendered.slice(1) : rendered;
  return { intro, sections };
}

export function getContentByPath(relPath: string): ParsedContent {
  const filePath = path.join(CONTENT_ROOT, relPath);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const { intro, sections } = splitSections(content);

  return {
    frontmatter: data,
    intro,
    sections,
    getSection: (headingMatch: string) =>
      sections.find((s) => s.heading.toLowerCase().includes(headingMatch.toLowerCase()))
  };
}

export interface ListItem {
  label: string;
  text: string;
}

// Extracts markdown list items of the form "**Label** – description" (or plain bullets) from a
// rendered section's HTML, so page templates can turn editorial bullet lists into cards.
export function extractListItems(html: string | undefined): ListItem[] {
  if (!html) return [];
  const items = [...html.matchAll(/<li>(.*?)<\/li>/gs)].map((m) => m[1]);
  return items.map((raw) => {
    const match = /<strong>([^<]+)<\/strong>\s*[–—-]?\s*(.*)/s.exec(raw);
    if (match) {
      return { label: match[1].replace(/<[^>]+>/g, '').trim(), text: match[2].replace(/<[^>]+>/g, '').trim() };
    }
    return { label: raw.replace(/<[^>]+>/g, '').trim(), text: '' };
  });
}

// Extracts plain <h3> subsection titles + following paragraph text from a section's HTML.
export function extractSubsections(html: string | undefined): { heading: string; text: string }[] {
  if (!html) return [];
  const blocks = html.split(/<h3>/).slice(1);
  return blocks.map((block) => {
    const [headingPart, ...rest] = block.split('</h3>');
    const bodyHtml = rest.join('</h3>');
    const text = bodyHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return { heading: headingPart.trim(), text };
  });
}

// Internal editorial/coder instructions (e.g. "Redaktionsregel:", "Coder-Regel:") must never
// reach the rendered page — they are authoring guidance, not customer-facing copy.
export function stripEditorialNotes(html: string | undefined): string {
  if (!html) return '';
  return html.replace(/<p>(?:(?!<\/p>).)*(Redaktionsregel|Coder-Regel|UI-Hinweis)(?:(?!<\/p>).)*<\/p>/gs, '');
}

// Returns only the HTML that appears before the first <h3> heading in a section.
export function beforeFirstHeading(html: string | undefined): string {
  if (!html) return '';
  const idx = html.search(/<h[34]>/);
  return idx === -1 ? html : html.slice(0, idx);
}

// Extracts a markdown table's body rows (as plain-text cell arrays) from rendered section HTML.
export function extractTableRows(html: string | undefined): string[][] {
  if (!html) return [];
  const tableMatch = /<table>(.*?)<\/table>/s.exec(html);
  if (!tableMatch) return [];
  const bodyMatch = /<tbody>(.*?)<\/tbody>/s.exec(tableMatch[1]);
  const bodyHtml = bodyMatch ? bodyMatch[1] : tableMatch[1];
  const rows = [...bodyHtml.matchAll(/<tr>(.*?)<\/tr>/gs)].map((m) => m[1]);
  return rows.map((row) => [...row.matchAll(/<td[^>]*>(.*?)<\/td>/gs)].map((c) => c[1].replace(/<[^>]+>/g, '').trim()));
}
