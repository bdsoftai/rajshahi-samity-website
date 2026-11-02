'use client';

import { useState } from 'react';
import { members } from '@/lib/data';

export default function MembersPage() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <>
            <h2 className="text-2xl font-serif mb-4">ফাউন্ডিং মেম্বার ও ট্রাস্টি</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {members.map((m) => (
                    <div key={m.role} className="card text-center">
                        <div className="w-16 h-16 rounded-full bg-[var(--b)] text-white grid place-items-center text-2xl mx-auto mb-2">
                            {m.initial}
                        </div>
                        <b className="block">নাম (নমুনা)</b>
                        <span className="text-sm text-[var(--mu)]">{m.role}</span>
                    </div>
                ))}
            </div>

            <div className="card">
                <h3 className="font-semibold mb-3">সদস্য হওয়ার আবেদন</h3>
                {submitted ? (
                    <p className="text-[var(--g)] font-semibold">✔ ডেমো: আবেদন গৃহীত হয়েছে</p>
                ) : (
                    <form
                        className="flex flex-wrap gap-2"
                        onSubmit={(e) => {
                            e.preventDefault();
                            setSubmitted(true);
                        }}
                    >
                        <input required placeholder="নাম" className="px-3 py-2 rounded-lg border border-[var(--ln)] bg-[var(--card)]" />
                        <input required placeholder="মোবাইল" className="px-3 py-2 rounded-lg border border-[var(--ln)] bg-[var(--card)]" />
                        <select className="px-3 py-2 rounded-lg border border-[var(--ln)] bg-[var(--card)]">
                            <option>রাজশাহী</option>
                            <option>নাটোর</option>
                            <option>নওগাঁ</option>
                            <option>চাঁপাইনবাবগঞ্জ</option>
                        </select>
                        <button type="submit" className="btn btn-green">আবেদন করুন</button>
                    </form>
                )}
            </div>
        </>
    );
}