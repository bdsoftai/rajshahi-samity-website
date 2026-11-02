'use client';

import { useState } from 'react';
import Link from 'next/link';
import { districts } from '@/lib/data';
import { useLanguage } from '@/components/LanguageProvider';

const keys = Object.keys(districts) as (keyof typeof districts)[];

export default function CulturePage() {
    const [active, setActive] = useState<keyof typeof districts>('রাজশাহী');
    const d = districts[active];
    const { lang } = useLanguage();

    return (
        <div className="py-6">
            <h2 className="text-3xl font-serif font-bold text-[var(--tx)] mb-6 text-center">
                {lang === 'bn' ? 'ঐতিহ্য ও সংস্কৃতি' : 'Heritage & Culture'}
            </h2>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {keys.map((k) => (
                    <button
                        key={k}
                        onClick={() => setActive(k)}
                        className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all ${active === k
                                ? 'bg-[var(--b)] text-white border-[var(--b)] shadow-md scale-105'
                                : 'border-[var(--ln)] bg-[var(--card)] text-[var(--mu)] hover:bg-[var(--ln)]/40'
                            }`}
                    >
                        {k}
                    </button>
                ))}
            </div>

            {/* Main Featured Card */}
            <div className={`rounded-3xl overflow-hidden shadow-xl mb-8 bg-gradient-to-br ${d.gradient} text-white`}>
                <div className="p-8 md:p-12">
                    <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                        {active} – {lang === 'bn' ? d.titleBn : d.titleEn}
                    </h3>
                    <p className="text-lg opacity-90 mb-6 max-w-2xl">
                        {lang === 'bn' ? d.bodyBn : d.bodyEn}
                    </p>
                    <Link href={`/culture/${d.id}`} className="btn btn-primary">
                        {lang === 'bn' ? 'বিস্তারিত দেখুন' : 'Explore Details'}
                    </Link>
                </div>
            </div>

            {/* 2 Page Details Cards */}
            <div className="grid md:grid-cols-2 gap-6">
                {d.pages.map((page, idx) => (
                    <Link key={idx} href={`/culture/${d.id}/${idx + 1}`} className="card group hover:border-[var(--b)] transition-colors flex flex-col h-full bg-[var(--card)]">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-8 h-8 rounded-full bg-[var(--b)]/20 text-[var(--b)] flex items-center justify-center font-bold">
                                {idx + 1}
                            </span>
                            <h4 className="font-bold text-lg text-[var(--tx)] group-hover:text-[var(--b)] transition-colors">
                                {lang === 'bn' ? page.titleBn : page.titleEn}
                            </h4>
                        </div>
                        <p className="text-[var(--mu)] text-sm leading-relaxed line-clamp-4 flex-1">
                            {lang === 'bn' ? page.contentBn : page.contentEn}
                        </p>
                        <span className="text-[var(--b)] text-sm font-semibold mt-4 inline-block">
                            {lang === 'bn' ? 'আরও পড়ুন →' : 'Read More →'}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}