'use client';

import { useLanguage } from './LanguageProvider';

export default function LanguageToggle() {
    const { lang, toggleLang } = useLanguage();

    return (
        <button
            onClick={toggleLang}
            className="border border-[var(--ln)] rounded-lg px-3 py-1 text-sm font-semibold hover:bg-[var(--ln)]/30 transition-colors h-9 text-[var(--tx)]"
        >
            {lang === 'bn' ? 'EN' : 'বাং'}
        </button>
    );
}