'use client';

import { useState, useEffect } from 'react';
import { galleryItems } from '@/lib/data';
import { useLanguage } from '@/components/LanguageProvider';
import { X } from 'lucide-react';

export default function GalleryPage() {
    const [open, setOpen] = useState<typeof galleryItems[0] | null>(null);
    const { lang } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    const currentLang = mounted ? lang : 'bn';

    return (
        <div className="py-6">
            <h2 className="text-3xl font-serif font-bold text-[var(--tx)] mb-6 text-center">
                {currentLang === 'bn' ? 'ফটো গ্যালারি' : 'Photo Gallery'}
            </h2>

            {/* মোবাইলে ২টি করে এবং ডেস্কটপে ৩টি করে ছবি */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {galleryItems.map((g) => (
                    <div
                        key={g.id}
                        onClick={() => setOpen(g)}
                        className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all"
                    >
                        <img
                            src={g.image}
                            alt={currentLang === 'bn' ? g.titleBn : g.titleEn}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Overlay Text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3 md:p-4">
                            <span className="text-white font-semibold text-sm md:text-base">
                                {currentLang === 'bn' ? g.titleBn : g.titleEn}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {open && (
                <div
                    onClick={() => setOpen(null)}
                    className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 cursor-pointer animate-in fade-in duration-300"
                >
                    <button
                        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        onClick={() => setOpen(null)}
                    >
                        <X size={24} />
                    </button>
                    <img
                        src={open.image}
                        alt={currentLang === 'bn' ? open.titleBn : open.titleEn}
                        className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
                    />
                    <h3 className="text-white text-xl font-bold mt-4">
                        {currentLang === 'bn' ? open.titleBn : open.titleEn}
                    </h3>
                    <p className="text-white/60 text-sm mt-2">
                        {currentLang === 'bn' ? 'বন্ধ করতে যেকোনো জায়গায় ক্লিক করুন' : 'Click anywhere to close'}
                    </p>
                </div>
            )}
        </div>
    );
}