'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export default function JobDetailContent({ job }: { job: any }) {
    const { lang } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    const currentLang = mounted ? lang : 'bn';

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <Link href="/jobs" className="text-[var(--g)] font-semibold mb-6 inline-block hover:underline">
                ← {currentLang === 'bn' ? 'ফিরে যান' : 'Go Back'}
            </Link>
            <div className="card p-8 md:p-10 shadow-lg border-t-8 border-t-[var(--g)] bg-[var(--card)]">
                <span className="tag mb-4">{currentLang === 'bn' ? job.typeBn : job.typeEn}</span>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-[var(--tx)] mb-2">
                    {currentLang === 'bn' ? job.titleBn : job.titleEn}
                </h1>
                <p className="text-[var(--mu)] font-semibold mb-6 flex items-center gap-1">
                    📍 {currentLang === 'bn' ? job.locationBn : job.locationEn}
                </p>
                <div className="prose max-w-none text-[var(--tx)] leading-loose">
                    <h3 className="text-xl font-bold mb-2">{currentLang === 'bn' ? 'বিস্তারিত:' : 'Details:'}</h3>
                    <p>{currentLang === 'bn' ? job.descBn : job.descEn}</p>
                    <div className="mt-8 p-4 bg-[var(--ln)]/20 rounded-lg border border-[var(--ln)]">
                        <p className="text-sm font-semibold text-[var(--mu)]">
                            {currentLang === 'bn'
                                ? '* এটি একটি ডেমো পেজ। ভবিষ্যতে এখানে আবেদনের নিয়ম, যোগাযোগের ঠিকানা এবং অন্যান্য তথ্য যুক্ত করা হবে।'
                                : '* This is a demo page. Application rules, contact info, and other details will be added here in the future.'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}