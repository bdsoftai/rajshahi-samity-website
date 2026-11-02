import { features } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Next.js 16 Instant Navigation এরর সমাধানের জন্য এই লাইনটি যুক্ত করা হলো
export const instant = false;

export default async function FeatureDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const feature = features.find((f) => f.id === id);
    if (!feature) notFound();

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <Link href="/" className="text-[var(--g)] font-semibold mb-6 inline-block hover:underline">
                ← ফিরে যান (Go Back)
            </Link>
            <div className="card p-8 border-t-8 border-t-[var(--g)] shadow-lg">
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h1 className="text-3xl font-serif font-bold text-[var(--tx)] mb-4">{feature.titleBn}</h1>
                <h2 className="text-xl text-[var(--mu)] mb-6">{feature.titleEn}</h2>
                <div className="prose max-w-none text-[var(--tx)] leading-relaxed space-y-4">
                    <p>{feature.descBn}</p>
                    <p className="text-[var(--mu)]">{feature.descEn}</p>
                    <p className="mt-8 pt-6 border-t border-[var(--ln)] text-sm text-[var(--mu)]">
                        * এটি একটি ডেমো পেজ। ভবিষ্যতে এখানে বিস্তারিত আর্টিকেল ও ছবি যুক্ত করা হবে।
                    </p>
                </div>
            </div>
        </div>
    );
}