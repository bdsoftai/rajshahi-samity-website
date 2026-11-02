import { educationCards } from '@/lib/data';
import { notFound } from 'next/navigation';
import EducationDetailContent from './EducationDetailContent';

// Server Component-এ instant ব্যবহার করা যাবে
export const instant = false;

export default async function EducationDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const item = educationCards.find((c) => c.id === id);

    if (!item) notFound();

    return <EducationDetailContent item={item} />;
}