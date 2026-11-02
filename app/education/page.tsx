'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { educationCards } from '@/lib/data';
import { useLanguage } from '@/components/LanguageProvider';

export default function EducationPage() {
    const { lang } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentLang = mounted ? lang : 'bn';

    return (
        <div className="py-6">
            <h2 className="text-3xl font-serif font-bold text-[var(--tx)] mb-6 text-center">
                {currentLang === 'bn' ? 'শিক্ষা ও স্বাস্থ্য' : 'Education & Health'}
            </h2>

            {/* মোবাইলে ২টি এবং ডেস্কটপে ৩টি কার্ড */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {educationCards.map((c) => (
                    <Link
                        key={c.id}
                        href={`/education/${c.id}`}
                        className="card group hover:border-[var(--g)] transition-all flex flex-col h-full bg-[var(--card)] overflow-hidden !p-0"
                    >
                        {/* ইমেজ সেকশন */}
                        <div className="w-full h-32 md:h-48 overflow-hidden relative">
                            <img
                                src={c.image}
                                alt={currentLang === 'bn' ? c.titleBn : c.titleEn}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <span className="absolute top-2 left-2 tag !bg-white/90 !text-[var(--g)] shadow-sm backdrop-blur-sm">
                                {currentLang === 'bn' ? c.tagBn : c.tagEn}
                            </span>
                        </div>

                        {/* কন্টেন্ট সেকশন */}
                        <div className="p-3 md:p-4 flex flex-col flex-1">
                            <h3 className="font-bold text-sm md:text-base mb-1 text-[var(--tx)] group-hover:text-[var(--g)] transition-colors line-clamp-2 md:line-clamp-1">
                                {currentLang === 'bn' ? c.titleBn : c.titleEn}
                            </h3>
                            <p className="text-xs md:text-sm text-[var(--mu)] flex-1 line-clamp-2">
                                {currentLang === 'bn' ? c.descBn : c.descEn}
                            </p>
                            <span className="text-[var(--g)] text-xs md:text-sm font-semibold mt-3 inline-block">
                                {currentLang === 'bn' ? 'বিস্তারিত →' : 'Read More →'}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}