import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { districts } from '@/lib/data';
import CultureDistrictContent from './CultureDistrictContent';

// ১. generateStaticParams যোগ করুন
export function generateStaticParams() {
    return Object.keys(districts).map((key) => ({
        id: districts[key as keyof typeof districts].id,
    }));
}

// ২. একটি আলাদা async কম্পোনেন্ট তৈরি করুন যা params রিড করবে
async function DistrictDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const districtKey = Object.keys(districts).find(key => districts[key as keyof typeof districts].id === id);
    if (!districtKey) notFound();

    const d = districts[districtKey as keyof typeof districts];

    return <CultureDistrictContent district={d} districtKey={districtKey} />;
}

// ৩. মূল পেজে Suspense ব্যবহার করুন
export default function CultureDistrictPage({ params }: { params: Promise<{ id: string }> }) {
    return (
        <Suspense fallback={<div className="py-20 text-center">লোড হচ্ছে...</div>}>
            <DistrictDetails params={params} />
        </Suspense>
    );
}