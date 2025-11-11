'use client';

import Link from 'next/link';
import { Star, Globe } from 'lucide-react';
import { Language } from '@/lib/translations';

interface NavigationProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: any;
  showBackButton?: boolean;
}

export default function Navigation({ language, setLanguage, translations, showBackButton = false }: NavigationProps) {
  const appStoreLink = "https://apps.apple.com/fr/app/habitdaily/id6754026468";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {showBackButton ? (
          <Link
            href="/"
            className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium"
          >
            <span>←</span>
            {translations.nav.backToHome}
          </Link>
        ) : (
          <Link href="/" className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
              <Star className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-white hidden md:block">
              {translations.hero.title}
            </span>
          </Link>
        )}

        <div className="flex items-center gap-6">
          {!showBackButton && (
            <>
              <button
                onClick={() => scrollToSection("features")}
                className="hidden md:block text-white/80 hover:text-white transition font-medium"
              >
                {translations.nav.features}
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="hidden md:block text-white/80 hover:text-white transition font-medium"
              >
                {translations.nav.howItWorks}
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="hidden md:block text-white/80 hover:text-white transition font-medium"
              >
                {translations.nav.faq}
              </button>

              <a
                href={appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block hover:scale-105 transition-transform"
              >
                <img
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
              </a>
            </>
          )}

          <button
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition"
          >
            <Globe className="w-4 h-4" />
            {language.toUpperCase()}
          </button>
        </div>
      </div>
    </nav>
  );
}