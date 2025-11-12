'use client';

import { useState } from 'react';
import { Flame, CheckCircle, Star, BarChart3, Palette, Plus, TrendingUp } from 'lucide-react';
import { translations, Language } from '@/lib/translations';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('fr');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  
  const t = translations[language];
  const appStoreLink = "https://apps.apple.com/fr/app/habitdaily/id6754026468";

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation language={language} setLanguage={setLanguage} translations={t} />

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 animate-float">
            <img
              src="/1024.png"
              alt="HabitDaily logo"
              className="w-full h-full object-contain rounded-3xl shadow-2xl shadow-blue-500/30"
            />
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <img
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                className="h-12 md:h-14 w-auto"
              />
            </a>

            <button
              onClick={() => scrollToSection("features")}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 transition-all hover:-translate-y-1"
            >
              {t.hero.learnMore}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              🚀 {t.features.title}
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Flame className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.features.streak.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {t.features.streak.desc}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.features.stats.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {t.features.stats.desc}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.features.custom.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {t.features.custom.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Widgets Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              📱 {t.widgets.title}
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {t.widgets.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.widgets.today.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {t.widgets.today.desc}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Flame className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.widgets.streak.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {t.widgets.streak.desc}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20 transition-all hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.widgets.stats.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {t.widgets.stats.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-24 px-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              ⚡ {t.howItWorks.title}
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Plus className="w-12 h-12" />,
                step: "1",
                title: t.howItWorks.step1.title,
                desc: t.howItWorks.step1.desc,
              },
              {
                icon: <CheckCircle className="w-12 h-12" />,
                step: "2",
                title: t.howItWorks.step2.title,
                desc: t.howItWorks.step2.desc,
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                step: "3",
                title: t.howItWorks.step3.title,
                desc: t.howItWorks.step3.desc,
              },
              {
                icon: <Star className="w-12 h-12" />,
                step: "4",
                title: t.howItWorks.step4.title,
                desc: t.howItWorks.step4.desc,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-lg shadow-blue-500/50">
                  {item.step}
                </div>
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              ❓ {t.faq.title}
            </h2>
            <p className="text-lg text-white/70">{t.faq.subtitle}</p>
          </div>

          <div className="space-y-4">
            {t.faq.questions.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition"
                >
                  <span className="text-lg font-semibold text-white pr-4">
                    {item.q}
                  </span>
                  <span
                    className={`text-3xl text-white/60 transition-transform ${
                      activeFAQ === index ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFAQ === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-8 pb-6 text-white/70 leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer translations={t} />
    </div>
  );
}