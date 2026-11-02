'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export default function EducationDetailContent({ item }: { item: any }) {
    const { lang } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentLang = mounted ? lang : 'bn';

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <Link href="/education" className="text-[var(--g)] font-semibold mb-6 inline-block hover:underline">
                ← {currentLang === 'bn' ? 'ফিরে যান' : 'Go Back'}
            </Link>

            <div className="card p-8 md:p-10 shadow-lg border-t-8 border-t-[var(--g)] bg-[var(--card)]">
                {/* নির্দিষ্ট কার্ডের ছবি */}
                <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-6 shadow-md">
                    <img
                        src={item.image}
                        alt={currentLang === 'bn' ? item.titleBn : item.titleEn}
                        className="w-full h-full object-cover"
                    />
                </div>

                <span className="tag mb-4">{currentLang === 'bn' ? item.tagBn : item.tagEn}</span>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-[var(--tx)] mb-6">
                    {currentLang === 'bn' ? item.titleBn : item.titleEn}
                </h1>

                <div className="prose max-w-none text-[var(--tx)] leading-loose">
                    <p className="text-lg">
                        {currentLang === 'bn' ? item.descBn : item.descEn}
                    </p>

                    <div className="mt-8 p-4 bg-[var(--ln)]/20 rounded-lg border border-[var(--ln)]">
                        <p className="text-sm font-semibold text-[var(--mu)]">
                            {currentLang === 'bn'
                                ? '* এটি একটি ডেমো পেজ। ভবিষ্যতে এখানে বিস্তারিত আর্টিকেল, শিক্ষক/ডাক্তারদের তথ্য এবং অন্যান্য প্রয়োজনীয় লিংক যুক্ত করা হবে।'
                                : '* This is a demo page. Detailed articles, teacher/doctor info, and other necessary links will be added here in the future.'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}