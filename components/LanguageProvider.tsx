'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'bn' | 'en';
type LanguageContextType = {
    lang: Language;
    toggleLang: () => void;
};

// ডিফল্ট ভ্যালু দিয়ে কন্টেক্সট তৈরি
const LanguageContext = createContext<LanguageContextType>({
    lang: 'bn',
    toggleLang: () => { },
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>('bn');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedLang = localStorage.getItem('lang') as Language;
        if (savedLang) {
            setLang(savedLang);
        }
    }, []);

    const toggleLang = () => {
        const newLang = lang === 'bn' ? 'en' : 'bn';
        setLang(newLang);
        localStorage.setItem('lang', newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            <div className={mounted ? '' : 'invisible'}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}