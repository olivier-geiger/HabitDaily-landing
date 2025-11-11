'use client';

import { useState } from 'react';
import { translations, Language } from '@/lib/translations';
import Navigation from '@/components/Navigation';

export default function TermsPage() {
  const [language, setLanguage] = useState<Language>('fr');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation language={language} setLanguage={setLanguage} translations={t} showBackButton />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-black text-white mb-4">{t.terms.title}</h1>
        <p className="text-white/60 text-sm mb-12">{t.terms.effectiveDate}</p>

        <div className="space-y-8">
          {t.terms.sections.map((section: any, index: number) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                {section.title}
              </h2>
              <p className="text-white/70 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}