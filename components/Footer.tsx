'use client';

import Link from 'next/link';
import { Flame } from 'lucide-react';

interface FooterProps {
  translations: any;
}

export default function Footer({ translations }: FooterProps) {
  const appStoreLink = "https://apps.apple.com/fr/app/habitdaily/id6754026468";

  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <Flame className="w-7 h-7 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">
            {translations.hero.title}
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8 text-white/70">
          <Link href="/privacy" className="hover:text-white transition">
            {translations.footer.privacy}
          </Link>
          <Link href="/terms" className="hover:text-white transition">
            {translations.footer.terms}
          </Link>
          <a
            href={appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition">
  
            {translations.footer.support}
          </a>
          
          <a  href="mailto:olivier.codes@gmail.com"
            className="hover:text-white transition"
          >
            {translations.footer.contact}
          </a>
        </div>

        <p className="text-white/50 text-sm mb-4">
          © 2025 {translations.footer.copyright}
        </p>
        <p className="text-white/60 text-sm">🔥 {translations.footer.cta}</p>
      </div>
    </footer>
  );
}