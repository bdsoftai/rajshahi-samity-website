'use client';

import { useState, useEffect } from 'react';
import { monthlyData, transactions } from '@/lib/data';
import { useLanguage } from '@/components/LanguageProvider';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

export default function AccountsPage() {
    const { lang } = useLanguage();
    const [mounted, setMounted] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    // চার্টের ওরিয়েন্টেশন (উল্লম্ব বা অনুভূমিক)
    const [isVertical, setIsVertical] = useState(true);

    useEffect(() => setMounted(true), []);
    const currentLang = mounted ? lang : 'bn';

    const totalIncome = monthlyData.reduce((acc, curr) => acc + curr.income, 0);
    const totalExpense = monthlyData.reduce((acc, curr) => acc + curr.expense, 0);
    const balance = totalIncome - totalExpense;

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? monthlyData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === monthlyData.length - 1 ? 0 : prev + 1));
    };

    const activeData = monthlyData[activeIndex];
    const maxValue = Math.max(...monthlyData.flatMap((d) => [d.income, d.expense]));

    return (
        <div className="py-6 max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-[var(--tx)] mb-6 text-center">
                {currentLang === 'bn' ? 'অ্যাকাউন্টস ও আয়-ব্যয়' : 'Accounts & Financials'}
            </h2>

            {/* Top Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="card border-l-4 border-l-[var(--g)] bg-[var(--card)] p-4">
                    <span className="text-sm text-[var(--mu)] font-medium">
                        {currentLang === 'bn' ? 'মোট আয়' : 'Total Income'}
                    </span>
                    <div className="text-2xl font-bold text-[var(--g)] mt-1 font-serif">
                        {totalIncome}K
                    </div>
                </div>
                <div className="card border-l-4 border-l-[var(--b)] bg-[var(--card)] p-4">
                    <span className="text-sm text-[var(--mu)] font-medium">
                        {currentLang === 'bn' ? 'মোট ব্যয়' : 'Total Expense'}
                    </span>
                    <div className="text-2xl font-bold text-[var(--b)] mt-1 font-serif">
                        {totalExpense}K
                    </div>
                </div>
                <div className="card border-l-4 border-l-[var(--tx)] bg-[var(--card)] p-4 col-span-2 md:col-span-1">
                    <span className="text-sm text-[var(--mu)] font-medium">
                        {currentLang === 'bn' ? 'বর্তমান ব্যালেন্স' : 'Current Balance'}
                    </span>
                    <div className="text-2xl font-bold text-[var(--tx)] mt-1 font-serif">
                        {balance}K
                    </div>
                </div>
            </div>

            {/* Chart Section */}
            <div className="card mb-8 p-6 bg-[var(--card)]">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <h3 className="font-serif text-xl font-bold text-[var(--tx)]">
                        {currentLang === 'bn' ? 'মাসিক আয়-ব্যয়ের চিত্র' : 'Monthly Income vs Expense'}
                    </h3>

                    {/* Controls: Rotation & Month Navigation */}
                    <div className="flex items-center gap-3">
                        {/* Rotation Toggle Button */}
                        <button
                            onClick={() => setIsVertical(!isVertical)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--ln)] text-xs font-semibold text-[var(--mu)] hover:bg-[var(--ln)]/30 transition-all"
                            title="Rotate Chart"
                        >
                            <RotateCcw size={14} />
                            {currentLang === 'bn'
                                ? (isVertical ? 'অনুভূমিক করুন' : 'উল্লম্ব করুন')
                                : (isVertical ? 'Horizontal' : 'Vertical')}
                        </button>

                        {/* Prev/Next Buttons */}
                        <div className="flex items-center gap-1 border-l border-[var(--ln)] pl-3">
                            <button onClick={handlePrev} className="p-1.5 rounded-full hover:bg-[var(--ln)]/30 text-[var(--mu)]">
                                <ChevronLeft size={18} />
                            </button>
                            <span className="text-sm font-bold text-[var(--tx)] min-w-[60px] text-center">
                                {currentLang === 'bn' ? activeData.monthBn : activeData.monthEn}
                            </span>
                            <button onClick={handleNext} className="p-1.5 rounded-full hover:bg-[var(--ln)]/30 text-[var(--mu)]">
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex justify-end gap-4 text-sm text-[var(--mu)] mb-6">
                    <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-sm bg-[var(--g)]"></span>
                        {currentLang === 'bn' ? 'আয়' : 'Income'}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-sm bg-[var(--b)]"></span>
                        {currentLang === 'bn' ? 'ব্যয়' : 'Expense'}
                    </span>
                </div>

                {/* Dynamic Bar Chart (Vertical/Horizontal) */}
                <div
                    key={`${activeIndex}-${isVertical}`}
                    className={`flex ${isVertical ? 'flex-row items-end justify-center h-64 gap-8' : 'flex-col justify-center h-64 gap-4'} animate-in fade-in zoom-in duration-500`}
                >
                    {monthlyData.map((d, idx) => {
                        const isActive = idx === activeIndex;
                        return (
                            <div
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`cursor-pointer group flex ${isVertical ? 'flex-col items-center w-full max-w-[60px] h-full justify-end' : 'flex-row items-center w-full h-12'}`}
                            >
                                {/* Bars container */}
                                <div className={`flex ${isVertical ? 'flex-row items-end gap-2 h-full w-full justify-center' : 'flex-col justify-center gap-1 w-full h-full'}`}>
                                    {/* Income Bar */}
                                    <div
                                        className={`bg-[var(--g)] rounded-t-sm transition-all duration-500 ${isActive ? 'opacity-100 shadow-md' : 'opacity-60 group-hover:opacity-90'} ${isVertical ? 'w-1/2' : 'h-1/2 w-full rounded-l-sm'}`}
                                        style={isVertical
                                            ? { height: `${(d.income / maxValue) * 100}%` }
                                            : { width: `${(d.income / maxValue) * 100}%` }
                                        }
                                    />
                                    {/* Expense Bar */}
                                    <div
                                        className={`bg-[var(--b)] rounded-t-sm transition-all duration-500 ${isActive ? 'opacity-100 shadow-md' : 'opacity-60 group-hover:opacity-90'} ${isVertical ? 'w-1/2' : 'h-1/2 w-full rounded-l-sm'}`}
                                        style={isVertical
                                            ? { height: `${(d.expense / maxValue) * 100}%` }
                                            : { width: `${(d.expense / maxValue) * 100}%` }
                                        }
                                    />
                                </div>

                                {/* Label */}
                                <span className={`text-xs font-bold ${isActive ? 'text-[var(--tx)]' : 'text-[var(--mu)]'} ${isVertical ? 'mt-2' : 'ml-3 min-w-[40px]'}`}>
                                    {currentLang === 'bn' ? d.monthBn : d.monthEn}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Active Month Details */}
                <div className="mt-6 p-3 bg-[var(--ln)]/20 rounded-lg text-center">
                    <p className="text-sm text-[var(--tx)] font-medium">
                        {currentLang === 'bn' ? 'নির্বাচিত মাস:' : 'Selected Month:'}
                        <span className="font-bold mx-1 text-[var(--g)]">{currentLang === 'bn' ? activeData.monthBn : activeData.monthEn}</span>
                        | {currentLang === 'bn' ? 'আয়' : 'Income'}: <span className="font-bold text-[var(--g)]">{activeData.income}K</span>
                        | {currentLang === 'bn' ? 'ব্যয়' : 'Expense'}: <span className="font-bold text-[var(--b)]">{activeData.expense}K</span>
                    </p>
                </div>
            </div>

            {/* Transactions Table */}
            <h3 className="font-serif text-xl font-bold text-[var(--tx)] mb-4">
                {currentLang === 'bn' ? 'সাম্প্রতিক লেনদেন' : 'Recent Transactions'}
            </h3>
            <div className="overflow-x-auto rounded-xl border border-[var(--ln)] shadow-sm">
                <table className="w-full text-sm">
                    <thead className="bg-[var(--g)] text-white">
                        <tr>
                            <th className="p-3 text-left font-medium">
                                {currentLang === 'bn' ? 'তারিখ' : 'Date'}
                            </th>
                            <th className="p-3 text-left font-medium">
                                {currentLang === 'bn' ? 'বিবরণ' : 'Description'}
                            </th>
                            <th className="p-3 text-left font-medium">
                                {currentLang === 'bn' ? 'ধরন' : 'Type'}
                            </th>
                            <th className="p-3 text-right font-medium">
                                {currentLang === 'bn' ? 'টাকা (৳)' : 'Amount (৳)'}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-[var(--card)]">
                        {transactions.map((t, i) => (
                            <tr key={i} className="border-b border-[var(--ln)] last:border-0 hover:bg-[var(--ln)]/20 transition-colors">
                                <td className="p-3 whitespace-nowrap text-[var(--mu)]">
                                    {currentLang === 'bn' ? t.dateBn : t.dateEn}
                                </td>
                                <td className="p-3 text-[var(--tx)] font-medium">
                                    {currentLang === 'bn' ? t.descBn : t.descEn}
                                </td>
                                <td className="p-3">
                                    <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${(currentLang === 'bn' ? t.typeBn : t.typeEn) === (currentLang === 'bn' ? 'আয়' : 'Income')
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                        }`}>
                                        {currentLang === 'bn' ? t.typeBn : t.typeEn}
                                    </span>
                                </td>
                                <td className="p-3 text-right font-bold text-[var(--tx)]">
                                    {currentLang === 'bn' ? t.amount : t.amountEn}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}