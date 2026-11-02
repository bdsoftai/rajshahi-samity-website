'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    const { lang } = useLanguage();
    const [mounted, setMounted] = useState(false);
    const [currentYear, setCurrentYear] = useState(2025); // ডিফল্ট একটি বছর

    useEffect(() => {
        setMounted(true);
        // ক্লায়েন্টে লোড হওয়ার পর সঠিক বছরটি সেট করা হবে
        setCurrentYear(new Date().getFullYear());
    }, []);

    const currentLang = mounted ? lang : 'bn';

    return (
        <footer className="border-t border-[var(--ln)] bg-[var(--card)] mt-12">
            <div className="max-w-[1440px] mx-auto px-[15px] md:px-[30px] py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* ১. সংস্থার পরিচিতি */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                            <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full bg-white object-contain p-1" />
                            <h3 className="font-serif font-bold text-lg text-[var(--tx)]">
                                {currentLang === 'bn' ? 'রাজশাহী জেলা সমিতি' : 'Rajshahi Zila Samity'}
                            </h3>
                        </div>
                        <p className="text-sm text-[var(--mu)] leading-relaxed">
                            {currentLang === 'bn'
                                ? 'ঢাকায় বসবাসরত বৃহত্তর রাজশাহীবাসীর সামাজিক, সাংস্কৃতিক ও কল্যাণমূলক সংগঠন।'
                                : 'A social, cultural, and welfare organization for the greater Rajshahi community living in Dhaka.'}
                        </p>
                    </div>

                    {/* ২. কুইক লিংক */}
                    <div className="text-center md:text-left">
                        <h4 className="font-serif font-bold text-lg text-[var(--tx)] mb-4">
                            {currentLang === 'bn' ? 'দ্রুত লিংক' : 'Quick Links'}
                        </h4>
                        <ul className="space-y-2 text-sm text-[var(--mu)]">
                            <li>
                                <Link href="/" className="hover:text-[var(--g)] transition-colors">
                                    {currentLang === 'bn' ? 'হোম' : 'Home'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/members" className="hover:text-[var(--g)] transition-colors">
                                    {currentLang === 'bn' ? 'সদস্য হোন' : 'Become a Member'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/accounts" className="hover:text-[var(--g)] transition-colors">
                                    {currentLang === 'bn' ? 'অ্যাকাউন্টস' : 'Accounts'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:text-[var(--g)] transition-colors">
                                    {currentLang === 'bn' ? 'গ্যালারি' : 'Gallery'}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* ৩. যোগাযোগ ও সোশ্যাল মিডিয়া */}
                    <div className="text-center md:text-left">
                        <h4 className="font-serif font-bold text-lg text-[var(--tx)] mb-4">
                            {currentLang === 'bn' ? 'যোগাযোগ' : 'Contact Us'}
                        </h4>
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-[var(--ln)]/40 flex items-center justify-center text-[var(--mu)] hover:bg-[#1877F2] hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[var(--ln)]/40 flex items-center justify-center text-[var(--mu)] hover:bg-[#FF0000] hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[var(--ln)]/40 flex items-center justify-center text-[var(--mu)] hover:bg-[var(--g)] hover:text-white transition-colors">
                                <Mail size={18} />
                            </a>
                        </div>
                        <p className="text-sm text-[var(--mu)]">
                            📍 {currentLang === 'bn' ? 'রাজশাহী, বাংলাদেশ' : 'Rajshahi, Bangladesh'}
                        </p>
                    </div>

                </div>

                {/* নিচের কপিরাইট অংশ */}
                <div className="pt-6 border-t border-[var(--ln)] text-center text-sm text-[var(--mu)]">
                    © {currentYear} {currentLang === 'bn'
                        ? 'রাজশাহী জেলা সমিতি ঢাকা। সর্বস্বত্ব সংরক্ষিত।'
                        : 'Rajshahi Zila Samity Dhaka. All rights reserved.'}
                </div>
            </div>
        </footer>
    );
}