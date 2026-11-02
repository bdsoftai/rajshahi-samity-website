import { barindCards } from '@/lib/data';

export default function BarindPage() {
    return (
        <>
            <h2 className="text-2xl font-serif mb-4">বরেন্দ্রভূমি: সমস্যা, সমাধান ও উন্নয়ন</h2>
            <div className="grid md:grid-cols-3 gap-3 mb-4">
                {barindCards.map((c) => (
                    <div key={c.title} className="card">
                        <h3 className="font-semibold">{c.icon} {c.title}</h3>
                        <p className="text-sm text-[var(--mu)] mt-1">{c.desc}</p>
                    </div>
                ))}
            </div>
            <div className="card">
                <h3 className="font-semibold">সমিতির ভূমিকা</h3>
                <p className="text-sm text-[var(--mu)] mt-1">
                    গবেষক ও সদস্যদের লেখা বিস্তারিত আর্টিকেল, নীতি-প্রস্তাব এবং স্থানীয় উদ্যোগে সহায়তা এই সেকশনে প্রকাশিত হবে।
                </p>
            </div>
        </>
    );
}