'use client';

import Link from 'next/link';
import { stats, latestUpdates, features } from '@/lib/data';
import { useLanguage } from '@/components/LanguageProvider';

export default function HomePage() {
  const { lang } = useLanguage();

  return (
    <div className="space-y-10 pb-10">
      {/* Hero Section */}
      <section className="hero-gradient rounded-3xl px-6 py-12 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0 bg-white ring-8 ring-white/20 shadow-2xl flex items-center justify-center">
          <img src="/logo.png" alt="Logo" className="w-full h-full object-contain p-2" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-3">
            {lang === 'bn' ? 'আমাদের শিকড়, আমাদের সমিতি' : 'Our Roots, Our Community'}
          </h1>
          <p className="opacity-90 text-lg mb-6">
            {lang === 'bn'
              ? 'রাজশাহী · নাটোর · নওগাঁ · চাঁপাইনবাবগঞ্জ – ঢাকায় বসবাসরত বৃহত্তর রাজশাহীবাসীর মিলনমেলা।'
              : 'Rajshahi · Natore · Naogaon · Chapainawabganj – A gathering of the community living in Dhaka.'}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <Link href="/members" className="btn btn-primary shadow-lg">
              {lang === 'bn' ? 'সদস্য হোন' : 'Become a Member'}
            </Link>
            <Link href="/culture" className="btn btn-outline backdrop-blur-sm">
              {lang === 'bn' ? 'ঐতিহ্য দেখুন' : 'Explore Culture'}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="card text-center flex flex-col justify-center py-6 bg-gradient-to-br from-[var(--card)] to-[var(--ln)]/20">
            <b className="block text-3xl md:text-4xl text-[var(--g)] font-serif mb-1">{s.value}</b>
            <span className="text-sm font-medium text-[var(--mu)]">
              {lang === 'bn' ? s.labelBn : s.labelEn}
            </span>
          </div>
        ))}
      </div>

      {/* Features / Our Goals (6 Cards) */}
      <div>
        <h2 className="text-2xl font-serif mb-4 flex items-center gap-2">
          <span className="w-2 h-6 bg-[var(--g)] rounded-full inline-block"></span>
          {lang === 'bn' ? 'আমাদের লক্ষ্য' : 'Our Goals'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <Link key={f.id} href={`/feature/${f.id}`} className="card group hover:border-[var(--g)] transition-colors block">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform origin-left">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2 line-clamp-1">{lang === 'bn' ? f.titleBn : f.titleEn}</h3>
              <p className="text-sm text-[var(--mu)] leading-relaxed line-clamp-2">
                {lang === 'bn' ? f.descBn : f.descEn}
              </p>
              <span className="text-[var(--g)] text-sm font-semibold mt-3 inline-block">
                {lang === 'bn' ? 'বিস্তারিত →' : 'Details →'}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Latest Updates (6 Cards) */}
      <div>
        <h2 className="text-2xl font-serif mb-4 flex items-center gap-2">
          <span className="w-2 h-6 bg-[var(--b)] rounded-full inline-block"></span>
          {lang === 'bn' ? 'সর্বশেষ আপডেট' : 'Latest Updates'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {latestUpdates.map((u) => (
            <Link key={u.id} href={`/update/${u.id}`} className="card flex flex-col h-full border-t-4 border-t-[var(--b)] group hover:border-[var(--b)] transition-colors">
              <span className="tag self-start">{lang === 'bn' ? u.tagBn : u.tagEn}</span>
              <h3 className="font-semibold text-lg mt-2 mb-1 line-clamp-2 group-hover:text-[var(--b)] transition-colors">
                {lang === 'bn' ? u.titleBn : u.titleEn}
              </h3>
              <p className="text-sm text-[var(--mu)] flex-1 line-clamp-3">
                {lang === 'bn' ? u.descBn : u.descEn}
              </p>
              <span className="text-[var(--b)] text-sm font-semibold mt-3 inline-block">
                {lang === 'bn' ? 'বিস্তারিত →' : 'Read More →'}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}