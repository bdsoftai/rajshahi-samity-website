'use client';

import { useState, useEffect } from 'react';
import { educationCards } from '@/lib/educationData';
import { useLanguage } from '@/components/LanguageProvider';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// আলাদা ক্যারোসেল কম্পোনেন্ট
 function SectionCarousel({ images, currentLang, onImageClick }: { images: any[], currentLang: string, onImageClick: (img: any) => void }) {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    const prev = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    if (!images || images.length === 0) return null;

    return (
        <div className="relative max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg group mt-6 mb-4">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                {images.map((img, i) => (
                    <div key={i} className="min-w-full relative cursor-pointer" onClick={() => onImageClick(img)}>
                        <img
                            src={img.image}
                            alt={img.titleBn}
                            className="w-full h-[260px] md:h-[368px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                            <h4 className="text-white text-lg font-bold">{currentLang === 'bn' ? img.titleBn : img.titleEn}</h4>
                            <p className="text-gray-200 text-sm line-clamp-2">{currentLang === 'bn' ? img.descBn : img.descEn}</p>
                        </div>
                    </div>
                ))}
            </div>
            {images.length > 1 && (
                <>
                    <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, i) => (
                            <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full transition-all ${index === i ? 'bg-white w-4' : 'bg-white/50'}`} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default function EducationPage() {
    const { lang } = useLanguage();
    const [mounted, setMounted] = useState(false);
    const [selectedImage, setSelectedImage] = useState<any>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentLang = mounted ? lang : 'bn';
    const mainArticle = educationCards.find(c => c.id === 'e1');

    if (!mainArticle) return null;

    return (
        <div className="py-6 w-full max-w-[1440px] mx-auto px-[15px] md:px-[30px]">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--tx)] mb-8 text-center">
                {currentLang === 'bn' ? 'শিক্ষা ও স্বাস্থ্য' : 'Education & Health'}
            </h2>

            {/* শিরোনাম */}
            <div className="text-center mb-10">
                <h1 className="text-2xl md:text-4xl font-serif font-bold text-[var(--tx)] mb-4">
                    {currentLang === 'bn' ? mainArticle.titleBn : mainArticle.titleEn}
                </h1>
                <p className="text-lg text-[var(--mu)] max-w-3xl mx-auto">
                    {currentLang === 'bn' ? mainArticle.descBn : mainArticle.descEn}
                </p>
            </div>

            {/* ভূমিকা (Intro) */}
            {mainArticle.introBn && (
                <div className="prose max-w-none text-[var(--tx)] leading-loose mb-10 bg-[var(--ln)]/10 p-6 rounded-xl border border-[var(--ln)]">
                    <p className="whitespace-pre-line text-sm md:text-base">
                        {currentLang === 'bn' ? mainArticle.introBn : mainArticle.introEn}
                    </p>
                </div>
            )}

            {/* সেকশনভিত্তিক রেন্ডারিং (প্রতিটি সেকশনে আলাদা ক্যারোসেল) */}
            {mainArticle.sections?.map((section: any, idx: number) => (
                <div key={idx} className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--tx)] mb-4 border-l-4 border-[var(--g)] pl-4">
                        {currentLang === 'bn' ? section.titleBn : section.titleEn}
                    </h3>
                    <div className="prose max-w-none text-[var(--tx)] leading-loose mb-2">
                        <p className="whitespace-pre-line text-sm md:text-base text-[var(--mu)]">
                            {currentLang === 'bn' ? section.contentBn : section.contentEn}
                        </p>
                    </div>

                    {/* এখানে সেকশনের নিজস্ব ক্যারোসেল */}
                    <SectionCarousel
                        images={section.images}
                        currentLang={currentLang}
                        onImageClick={(img) => setSelectedImage(img)}
                    />
                </div>
            ))}

            {/* উপসংহার (Conclusion) */}
            {mainArticle.conclusionBn && (
                <div className="prose max-w-none text-[var(--tx)] leading-loose mt-10 bg-[var(--g)]/10 p-6 rounded-xl border-l-4 border-[var(--g)]">
                    <h3 className="text-xl font-bold mb-2">
                        {currentLang === 'bn' ? 'উপসংহার' : 'Conclusion'}
                    </h3>
                    <p className="whitespace-pre-line text-sm md:text-base">
                        {currentLang === 'bn' ? mainArticle.conclusionBn : mainArticle.conclusionEn}
                    </p>
                </div>
            )}

            {/* ইমেজ মডাল */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="bg-[var(--card)] rounded-2xl overflow-hidden max-w-4xl w-full relative animate-in fade-in zoom-in duration-300">
                        <button onClick={() => setSelectedImage(null)} className="absolute top-3 right-3 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full z-10">
                            <X size={24} />
                        </button>
                        <div className="w-full h-[280px] md:h-[575px]">
                            <img src={selectedImage.image} alt="" className="w-full h-full object-contain bg-black" />
                        </div>
                        <div className="p-6 md:p-8">
                            <h3 className="text-xl md:text-3xl font-serif font-bold text-[var(--tx)] mb-3">
                                {currentLang === 'bn' ? selectedImage.titleBn : selectedImage.titleEn}
                            </h3>
                            <p className="text-sm md:text-lg text-[var(--mu)] leading-relaxed">
                                {currentLang === 'bn' ? selectedImage.descBn : selectedImage.descEn}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}