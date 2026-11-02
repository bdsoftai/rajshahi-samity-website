import { latestUpdates } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Next.js 16 Instant Navigation এরর সমাধানের জন্য এই লাইনটি যুক্ত করা হলো
export const instant = false;

export default async function UpdateDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const update = latestUpdates.find((u) => u.id === id);
    if (!update) notFound();

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <Link href="/" className="text-[var(--b)] font-semibold mb-6 inline-block hover:underline">
                ← ফিরে যান (Go Back)
            </Link>
            <div className="card p-8 border-t-8 border-t-[var(--b)] shadow-lg">
                <span className="tag mb-4">{update.tagBn}</span>
                <h1 className="text-3xl font-serif font-bold text-[var(--tx)] mb-4">{update.titleBn}</h1>
                <h2 className="text-xl text-[var(--mu)] mb-6">{update.titleEn}</h2>
                <div className="prose max-w-none text-[var(--tx)] leading-relaxed space-y-4">
                    <p>{update.descBn}</p>
                    <p className="text-[var(--mu)]">{update.descEn}</p>
                    <p className="mt-8 pt-6 border-t border-[var(--ln)] text-sm text-[var(--mu)]">
                        * এটি একটি ডেমো পেজ। ভবিষ্যতে এখানে বিস্তারিত আপডেট ও ছবি যুক্ত করা হবে।
                    </p>
                </div>
            </div>
        </div>
    );
}