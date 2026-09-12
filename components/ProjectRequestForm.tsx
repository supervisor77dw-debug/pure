'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FormEvent, useRef, useState } from 'react';
import { submitProjectRequest, type ProjectRequestPayload, validateProjectRequest } from '@/lib/project-request';
import { localePath, type Locale } from '@/lib/i18n';

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
  const formRef = useRef<HTMLFormElement>(null);
  const errorText: Record<string, string> = de ? { name: 'Name ist erforderlich.', email: 'Eine gültige E-Mail-Adresse ist erforderlich.', message: 'Eine Projektbeschreibung ist erforderlich.', privacyAccepted: 'Die Zustimmung zum Datenschutz ist erforderlich.' } : { name: 'Name is required.', email: 'A valid email address is required.', message: 'Project description is required.', privacyAccepted: 'Privacy consent is required.' };
  const update = (key: keyof ProjectRequestPayload, value: string | boolean) => setForm((current) => ({ ...current, [key]: value }));
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateProjectRequest(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      window.requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }
    setState('loading');
    try { await submitProjectRequest(form); setState('success'); } catch { setState('error'); }
  };
  const input = (key: keyof ProjectRequestPayload, label: string, required = false, type = 'text') => {
    const id = `project-request-${key}`;
    const errorId = `${id}-error`;
    return <label className="project-request-form__field" htmlFor={id}><span>{label}{required ? ' *' : ''}</span><input id={id} name={key} type={type} required={required} value={String(form[key] || '')} onChange={(event) => update(key, event.target.value)} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? errorId : undefined} />{errors[key] ? <small className="project-request-form__error" id={errorId}>{errorText[key]}</small> : null}</label>;
  };
  return <div className="project-request-form">
    {state === 'success' ? <div className="form-status form-status--success" role="status">{de ? 'Ihre Anfrage wurde angenommen.' : 'Your request was accepted.'}</div> : null}
    {state === 'error' ? <div className="form-status form-status--error" role="alert">{de ? 'Die Anfrage konnte nicht übermittelt werden. Bitte versuchen Sie es später erneut.' : 'The request could not be submitted. Please try again later.'}</div> : null}
    <form ref={formRef} onSubmit={submit} noValidate>
      <div className="project-request-form__grid">{input('name', de ? 'Name' : 'Name', true)}{input('company', de ? 'Unternehmen' : 'Company')}{input('email', de ? 'E-Mail' : 'Email', true, 'email')}{input('phone', de ? 'Telefon' : 'Phone', false, 'tel')}{input('product', de ? 'Produkt / Technologie' : 'Product / technology')}{input('projectType', de ? 'Projektart' : 'Project type')}{input('location', de ? 'Standort / Land' : 'Location / country')}</div>
      <label className="project-request-form__field" htmlFor="project-request-message"><span>{de ? 'Nachricht / Projektbeschreibung' : 'Message / project description'} *</span><textarea id="project-request-message" name="message" rows={6} required value={form.message} onChange={(event) => update('message', event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'project-request-message-error' : undefined} />{errors.message ? <small className="project-request-form__error" id="project-request-message-error">{errorText.message}</small> : null}</label>
      <label className="project-request-form__checkbox"><input type="checkbox" checked={form.callbackRequested} onChange={(event) => update('callbackRequested', event.target.checked)} />{de ? 'Gewünschten Rückruf angeben' : 'Request a callback'}</label>
      <label className="project-request-form__checkbox" htmlFor="project-request-privacy"><input id="project-request-privacy" name="privacyAccepted" type="checkbox" required checked={form.privacyAccepted} onChange={(event) => update('privacyAccepted', event.target.checked)} aria-invalid={Boolean(errors.privacyAccepted)} aria-describedby={errors.privacyAccepted ? 'project-request-privacy-error' : undefined} />{de ? 'Ich akzeptiere die ' : 'I accept the '}<Link href={localePath(locale, de ? 'datenschutz' : 'privacy')}>{de ? 'Datenschutzhinweise' : 'privacy notice'}</Link>. *</label>{errors.privacyAccepted ? <small className="project-request-form__error" id="project-request-privacy-error">{errorText.privacyAccepted}</small> : null}
      <label className="project-request-form__honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => update('website', event.target.value)} /></label>
      <button className="btn btn--primary" type="submit" disabled={state === 'loading'}>{state === 'loading' ? (de ? 'Wird gesendet …' : 'Sending …') : (de ? 'Anfrage prüfen' : 'Submit request')}</button>
    </form>
  </div>;
}
