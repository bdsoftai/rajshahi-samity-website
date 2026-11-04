'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { X } from 'lucide-react';
import { EducationCard } from '@/lib/educationData';

export default function EducationDetailContent({ item }: { item: EducationCard }) {
    const { lang } = useLanguage();
    const currentLang = lang || 'bn';
    const [selectedImage, setSelectedImage] = useState<any>(null);

    return (
        <div className="py-6 w-full max-w-[1440px] mx-auto px-[15px] md:px-[30px]">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--tx)] mb-8 text-center">
                {currentLang === 'bn' ? 'শিক্ষা ও স্বাস্থ্য' : 'Education & Health'}
            </h2>

            {/* শিরোনাম ও বিবরণ */}
            <div className="text-center mb-10">
                <span className="tag mb-3 inline-block px-3 py-1 bg-[var(--g)]/10 text-[var(--g)] rounded-full text-sm font-semibold">
                    {currentLang === 'bn' ? item.tagBn : item.tagEn}
                </span>
                <h1 className="text-2xl md:text-4xl font-serif font-bold text-[var(--tx)] mb-4">
                    {currentLang === 'bn' ? item.titleBn : item.titleEn}
                </h1>
                <p className="text-lg text-[var(--mu)] max-w-3xl mx-auto">
                    {currentLang === 'bn' ? item.descBn : item.descEn}
                </p>
            </div>

            {/* সেকশনভিত্তিক রেন্ডারিং */}
            {item.sections && item.sections.map((section: any, idx: number) => (
                <div key={idx} className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--tx)] mb-4 border-l-4 border-[var(--g)] pl-4">
                        {currentLang === 'bn' ? section.titleBn : section.titleEn}
                    </h3>
                    <div className="prose max-w-none text-[var(--tx)] leading-loose mb-6">
                        <p className="whitespace-pre-line text-sm md:text-base text-[var(--mu)]">
                            {currentLang === 'bn' ? section.contentBn : section.contentEn}
                        </p>
                    </div>

                    {/* সেকশনের নিচের কার্ড */}
                    {section.card && (
                        <div
                            onClick={() => setSelectedImage(section.card)}
                            className="card group hover:border-[var(--g)] transition-all flex flex-col bg-[var(--card)] overflow-hidden !p-0 rounded-2xl shadow-sm hover:shadow-xl cursor-pointer max-w-2xl mx-auto border border-transparent"
                        >
                            <div className="w-full h-56 md:h-72 overflow-hidden">
                                <img
                                    src={section.card.image}
                                    alt={currentLang === 'bn' ? section.card.titleBn : section.card.titleEn}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5 md:p-6 flex flex-col flex-1">
                                <h4 className="font-bold text-lg md:text-xl mb-2 text-[var(--tx)] group-hover:text-[var(--g)] transition-colors">
                                    {currentLang === 'bn' ? section.card.titleBn : section.card.titleEn}
                                </h4>
                                <p className="text-sm md:text-base text-[var(--mu)] flex-1">
                                    {currentLang === 'bn' ? section.card.descBn : section.card.descEn}
                                </p>
                                <span className="text-[var(--g)] text-sm md:text-base font-semibold mt-4 inline-block">
                                    {currentLang === 'bn' ? 'বিস্তারিত পড়ুন →' : 'Read More →'}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* গ্যালারি ইমেজ কার্ডসমূহ (যদি থাকে) */}
            {item.galleryImages && item.galleryImages.length > 0 && (
                <div className="mt-12">
                    <h3 className="text-2xl font-serif font-bold text-[var(--tx)] mb-6 text-center">
                        {currentLang === 'bn' ? 'আরও দেখুন' : 'Explore More'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {item.galleryImages.map((data: any, idx: number) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedImage(data)}
                                className="card group hover:border-[var(--g)] transition-all flex flex-col h-full bg-[var(--card)] overflow-hidden !p-0 rounded-2xl shadow-sm hover:shadow-xl cursor-pointer border border-transparent"
                            >
                                <div className="w-full h-56 md:h-64 lg:h-72 overflow-hidden relative">
                                    <img
                                        src={data.image}
                                        alt={currentLang === 'bn' ? data.titleBn : data.titleEn}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5 md:p-6 flex flex-col flex-1">
                                    <h4 className="font-bold text-lg md:text-xl mb-2 text-[var(--tx)] group-hover:text-[var(--g)] transition-colors line-clamp-2">
                                        {currentLang === 'bn' ? data.titleBn : data.titleEn}
                                    </h4>
                                    <p className="text-sm md:text-base text-[var(--mu)] flex-1 line-clamp-3 leading-relaxed">
                                        {currentLang === 'bn' ? data.descBn : data.descEn}
                                    </p>
                                    <span className="text-[var(--g)] text-sm md:text-base font-semibold mt-4 inline-block">
                                        {currentLang === 'bn' ? 'বিস্তারিত পড়ুন →' : 'Read More →'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* ইমেজ ও ডিটেইলস মডাল (পপ-আপ) */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-[var(--card)] rounded-2xl overflow-hidden max-w-2xl w-full relative animate-in fade-in zoom-in duration-300 shadow-2xl">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-3 right-3 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full z-10 transition-colors"
                        >
                            <X size={20} />
                        </button>
                        <div className="w-full h-64 md:h-96">
                            <img
                                src={selectedImage.image}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--tx)] mb-3">
                                {currentLang === 'bn' ? selectedImage.titleBn : selectedImage.titleEn}
                            </h3>
                            <p className="text-sm md:text-base text-[var(--mu)] leading-relaxed">
                                {currentLang === 'bn' ? selectedImage.descBn : selectedImage.descEn}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}