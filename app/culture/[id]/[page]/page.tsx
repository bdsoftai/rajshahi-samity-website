import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { districts } from '@/lib/data';
import CultureDetailContent from './CultureDetailContent';

export function generateStaticParams() {
    const paths: { id: string; page: string }[] = [];
    Object.keys(districts).forEach((key) => {
        const d = districts[key as keyof typeof districts];
        d.pages.forEach((_, idx) => {
            paths.push({ id: d.id, page: String(idx + 1) });
        });
    });
    return paths;
}

async function DetailPageContent({ params }: { params: Promise<{ id: string; page: string }> }) {
    const { id, page } = await params;
    const pageIndex = parseInt(page) - 1;

    const districtKey = Object.keys(districts).find(key => districts[key as keyof typeof districts].id === id);
    if (!districtKey) notFound();

    const d = districts[districtKey as keyof typeof districts];
    const detail = d.pages[pageIndex];
    if (!detail) notFound();

    return <CultureDetailContent district={d} detail={detail} districtKey={districtKey} pageIndex={pageIndex} />;
}

export default function CultureDetailPage({ params }: { params: Promise<{ id: string; page: string }> }) {
    return (
        <Suspense fallback={<div className="py-20 text-center">লোড হচ্ছে...</div>}>
            <DetailPageContent params={params} />
        </Suspense>
    );
}