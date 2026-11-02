'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from './LanguageProvider';

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { lang } = useLanguage();

    // সার্ভার এবং ক্লায়েন্ট রেন্ডারিং মিসম্যাচ এড়াতে
    useEffect(() => {
        setMounted(true);
    }, []);

    // যাতে প্রথম লোডে টেক্সট ভেঙে না যায়
    const currentLang = mounted ? lang : 'bn';

    return (
        <header className="sticky top-0 z-50 bg-[var(--card)] border-b border-[var(--ln)] backdrop-blur-md bg-opacity-90">
            <div className="max-w-[1050px] mx-auto flex items-center gap-2 px-4 py-2">
                <img
                    src="/logo.png"
                    alt="লোগো"
                    className="w-10 h-10 rounded-full object-cover shrink-0 bg-white"
                />

                <h1 className="flex-1 font-serif text-[var(--tx)] font-bold text-base md:text-lg transition-all duration-300">
                    {currentLang === 'bn' ? 'রাজশাহী জেলা সমিতি ঢাকা' : 'Rajshahi Zila Samity Dhaka'}
                </h1>

                <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>

                <button
                    className="md:hidden p-2 text-[var(--tx)]"
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <nav className={`max-w-[1050px] mx-auto px-3 pb-3 ${open ? 'block' : 'hidden'} md:block`}>
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                    {[
                        ['/', currentLang === 'bn' ? 'হোম' : 'Home'],
                        ['/culture', currentLang === 'bn' ? 'ঐতিহ্য' : 'Culture'],
                        ['/jobs', currentLang === 'bn' ? 'কর্মসংস্থান' : 'Jobs'],
                        ['/education', currentLang === 'bn' ? 'শিক্ষা-স্বাস্থ্য' : 'Education'],
                        ['/barind', currentLang === 'bn' ? 'বরেন্দ্রভূমি' : 'Barind'],
                        ['/accounts', currentLang === 'bn' ? 'অ্যাকাউন্টস' : 'Accounts'],
                        ['/gallery', currentLang === 'bn' ? 'গ্যালারি' : 'Gallery'],
                        ['/members', currentLang === 'bn' ? 'সদস্য' : 'Members'],
                    ].map(([href, label]) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-base font-semibold transition-all duration-200 ${isActive
                                        ? 'bg-[var(--g)] text-white shadow-md'
                                        : 'text-[var(--mu)] hover:bg-[var(--ln)]/40 hover:text-[var(--tx)]'
                                    }`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
}