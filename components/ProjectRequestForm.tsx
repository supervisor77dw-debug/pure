'use client';

import { useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { submitProjectRequest, type ProjectRequestPayload, validateProjectRequest } from '@/lib/project-request';
import type { Locale } from '@/lib/i18n';

export function ProjectRequestForm({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  const searchParams = useSearchParams();
  const productLabels: Record<string, string> = de ? { 'pure-thermo': 'PURE THERMO', 'pure-liquid-heat': 'PURE LIQUID HEAT', 'pure-surface-protect': 'PURE SURFACE PROTECT' } : { 'pure-thermo': 'PURE THERMO', 'pure-liquid-heat': 'PURE LIQUID HEAT', 'pure-surface-protect': 'PURE SURFACE PROTECT' };
  const contextLabels: Record<string, string> = de ? { planning: 'Planung / Architektur', pilot: 'Pilotprojekt', industry: 'Industrie / Anwendung', partnership: 'Partnerschaft' } : { planning: 'Planning / architecture', pilot: 'Pilot project', industry: 'Industry / application', partnership: 'Partnership' };
  const productParam = searchParams.get('product') || '';
  const contextParam = searchParams.get('context') || '';
  const [form, setForm] = useState<ProjectRequestPayload>({ name: '', company: '', email: '', phone: '', product: productLabels[productParam] || productParam, projectType: contextLabels[contextParam] || contextParam, location: '', message: '', callbackRequested: false, privacyAccepted: false, website: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const update = (key: keyof ProjectRequestPayload, value: string | boolean) => setForm((current) => ({ ...current, [key]: value }));
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateProjectRequest(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setState('loading');
    try { await submitProjectRequest(form); setState('success'); } catch { setState('error'); }
  };
  const input = (key: keyof ProjectRequestPayload, label: string, required = false, type = 'text') => <label className="project-request-form__field"><span>{label}{required ? ' *' : ''}</span><input type={type} value={String(form[key] || '')} onChange={(event) => update(key, event.target.value)} aria-invalid={Boolean(errors[key])} />{errors[key] ? <small className="project-request-form__error">{errors[key]}</small> : null}</label>;
  return <div className="project-request-form">
    {state === 'success' ? <div className="form-status form-status--success" role="status">{de ? 'Ihre Anfrage wurde angenommen.' : 'Your request was accepted.'}</div> : null}
    {state === 'error' ? <div className="form-status form-status--error" role="alert">{de ? 'Die Anfrage konnte nicht übermittelt werden. Bitte versuchen Sie es später erneut.' : 'The request could not be submitted. Please try again later.'}</div> : null}
    <form onSubmit={submit} noValidate>
      <div className="project-request-form__grid">{input('name', de ? 'Name' : 'Name', true)}{input('company', de ? 'Unternehmen' : 'Company')}{input('email', de ? 'E-Mail' : 'Email', true, 'email')}{input('phone', de ? 'Telefon' : 'Phone', false, 'tel')}{input('product', de ? 'Produkt / Technologie' : 'Product / technology')}{input('projectType', de ? 'Projektart' : 'Project type')}{input('location', de ? 'Standort / Land' : 'Location / country')}</div>
      <label className="project-request-form__field"><span>{de ? 'Nachricht / Projektbeschreibung' : 'Message / project description'} *</span><textarea rows={6} value={form.message} onChange={(event) => update('message', event.target.value)} aria-invalid={Boolean(errors.message)} />{errors.message ? <small className="project-request-form__error">{errors.message}</small> : null}</label>
      <label className="project-request-form__checkbox"><input type="checkbox" checked={form.callbackRequested} onChange={(event) => update('callbackRequested', event.target.checked)} />{de ? 'Gewünschten Rückruf angeben' : 'Request a callback'}</label>
      <label className="project-request-form__checkbox"><input type="checkbox" checked={form.privacyAccepted} onChange={(event) => update('privacyAccepted', event.target.checked)} aria-invalid={Boolean(errors.privacyAccepted)} />{de ? 'Ich akzeptiere die Datenschutzhinweise.' : 'I accept the privacy notice.'} *</label>{errors.privacyAccepted ? <small className="project-request-form__error">{errors.privacyAccepted}</small> : null}
      <label className="project-request-form__honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => update('website', event.target.value)} /></label>
      <button className="btn btn--primary" type="submit" disabled={state === 'loading'}>{state === 'loading' ? (de ? 'Wird gesendet …' : 'Sending …') : (de ? 'Anfrage prüfen' : 'Submit request')}</button>
    </form>
  </div>;
}
