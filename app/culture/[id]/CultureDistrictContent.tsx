'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export default function CultureDistrictContent({ district, districtKey }: { district: any, districtKey: string }) {
    const { lang } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    const currentLang = mounted ? lang : 'bn';

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <Link href="/culture" className="text-[var(--b)] font-semibold mb-6 inline-block hover:underline">
                ← {currentLang === 'bn' ? 'ফিরে যান' : 'Go Back'}
            </Link>
            <div className={`rounded-3xl overflow-hidden shadow-xl mb-8 bg-gradient-to-br ${district.gradient} text-white p-8 md:p-12`}>
                <h1 className="font-serif text-4xl font-bold mb-4">
                    {districtKey} – {currentLang === 'bn' ? district.titleBn : district.titleEn}
                </h1>
                <p className="text-lg opacity-90">
                    {currentLang === 'bn' ? district.bodyBn : district.bodyEn}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {district.pages.map((page: any, idx: number) => (
                    <Link key={idx} href={`/culture/${district.id}/${idx + 1}`} className="card hover:border-[var(--b)] transition-colors bg-[var(--card)] p-6">
                        <h3 className="font-bold text-xl mb-3">
                            {currentLang === 'bn' ? page.titleBn : page.titleEn}
                        </h3>
                        <p className="text-[var(--mu)] text-sm line-clamp-3">
                            {currentLang === 'bn' ? page.contentBn : page.contentEn}
                        </p>
                        <span className="text-[var(--b)] font-semibold mt-4 block">
                            {currentLang === 'bn' ? 'বিস্তারিত →' : 'Read More →'}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}