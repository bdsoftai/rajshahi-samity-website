'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { jobs } from '@/lib/data';
import { useLanguage } from '@/components/LanguageProvider';

export default function JobsPage() {
    const [filter, setFilter] = useState('');
    const { lang } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    const currentLang = mounted ? lang : 'bn';

    const filtered = filter
        ? jobs.filter((j) => (currentLang === 'bn' ? j.typeBn : j.typeEn) === filter)
        : jobs;

    return (
        <div className="py-6">
            <h2 className="text-3xl font-serif font-bold text-[var(--tx)] mb-2 text-center md:text-left">
                {currentLang === 'bn' ? 'কর্মসংস্থান' : 'Employment'}
            </h2>
            <p className="text-[var(--mu)] mb-6 text-center md:text-left text-sm md:text-base">
                {currentLang === 'bn' ? 'সদস্য ও বৃহত্তর জনগোষ্ঠীর জন্য চাকরি, প্রশিক্ষণ ও ক্যারিয়ার তথ্য।' : 'Job, training, and career information for members and the public.'}
            </p>

            <div className="flex flex-wrap gap-3 items-center mb-6 bg-[var(--card)] p-3 md:p-4 rounded-xl border border-[var(--ln)] justify-center md:justify-start">
                <label className="font-semibold text-[var(--tx)] text-sm md:text-base">
                    {currentLang === 'bn' ? 'ফিল্টার করুন:' : 'Filter:'}
                </label>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-[var(--ln)] bg-[var(--bg)] text-[var(--tx)] outline-none focus:border-[var(--g)] text-sm md:text-base w-full md:w-auto"
                >
                    <option value="">{currentLang === 'bn' ? 'সব ধরন' : 'All Types'}</option>
                    <option value={currentLang === 'bn' ? 'আইন' : 'Law'}>{currentLang === 'bn' ? 'আইন' : 'Law'}</option>
                    <option value={currentLang === 'bn' ? 'কোর্ট' : 'Court'}>{currentLang === 'bn' ? 'কোর্ট' : 'Court'}</option>
                </select>
            </div>

            {/* মোবাইলে ২টি করে (grid-cols-2) এবং ডেস্কটপে ৩টি করে (lg:grid-cols-3) */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {filtered.map((j) => (
                    <div key={j.id} className="card flex flex-col h-full border-t-4 border-t-[var(--g)] bg-[var(--card)] p-3 md:p-4">
                        <span className="tag self-start text-xs md:text-sm">{currentLang === 'bn' ? j.typeBn : j.typeEn}</span>
                        <h3 className="font-bold text-sm md:text-lg mt-2 mb-1 text-[var(--tx)] line-clamp-2">
                            {currentLang === 'bn' ? j.titleBn : j.titleEn}
                        </h3>
                        <p className="text-xs md:text-sm text-[var(--mu)] mb-2 md:mb-3 flex items-center gap-1">
                            📍 {currentLang === 'bn' ? j.locationBn : j.locationEn}
                        </p>
                        <p className="text-xs md:text-sm text-[var(--mu)] flex-1 line-clamp-3 mb-3 md:mb-4">
                            {currentLang === 'bn' ? j.descBn : j.descEn}
                        </p>
                        <Link
                            href={`/jobs/${j.id}`}
                            className="btn btn-green text-xs md:text-sm w-full text-center py-1.5 md:py-2"
                        >
                            {currentLang === 'bn' ? 'বিস্তারিত দেখুন' : 'View Details'}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}