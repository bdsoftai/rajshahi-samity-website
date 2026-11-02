'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export default function CultureDetailContent({ district, detail, districtKey, pageIndex }: { district: any, detail: any, districtKey: string, pageIndex: number }) {
    const { lang } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    const currentLang = mounted ? lang : 'bn';

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <Link href={`/culture/${district.id}`} className="text-[var(--b)] font-semibold mb-6 inline-block hover:underline">
                ← {currentLang === 'bn' ? 'ফিরে যান' : 'Go Back'}
            </Link>
            <div className="card p-8 md:p-10 shadow-lg border-t-8 border-t-[var(--b)] bg-[var(--card)]">
                <span className="tag mb-4">{districtKey}</span>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-[var(--tx)] mb-6">
                    {currentLang === 'bn' ? detail.titleBn : detail.titleEn}
                </h1>
                <div className="prose max-w-none text-[var(--tx)] leading-loose">
                    <p>{currentLang === 'bn' ? detail.contentBn : detail.contentEn}</p>
                </div>

                <div className="mt-10 pt-6 border-t border-[var(--ln)] flex justify-between items-center">
                    <span className="text-sm text-[var(--mu)]">
                        {currentLang === 'bn' ? `পেজ ${pageIndex + 1} / ${district.pages.length}` : `Page ${pageIndex + 1} / ${district.pages.length}`}
                    </span>
                    {pageIndex === 0 ? (
                        <Link href={`/culture/${district.id}/2`} className="text-[var(--b)] font-semibold hover:underline">
                            {currentLang === 'bn' ? 'পরবর্তী পেজ →' : 'Next Page →'}
                        </Link>
                    ) : (
                        <Link href={`/culture/${district.id}/1`} className="text-[var(--b)] font-semibold hover:underline">
                            {currentLang === 'bn' ? '← আগের পেজ' : '← Previous Page'}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}