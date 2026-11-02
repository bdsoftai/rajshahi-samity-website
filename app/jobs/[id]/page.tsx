import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { jobs } from '@/lib/data';
import JobDetailContent from './JobDetailContent';

export function generateStaticParams() {
    return jobs.map((job) => ({ id: job.id }));
}

async function JobDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const job = jobs.find((j) => j.id === id);
    if (!job) notFound();
    return <JobDetailContent job={job} />;
}

export default function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    return (
        <Suspense fallback={<div className="py-20 text-center text-[var(--mu)]">লোড হচ্ছে...</div>}>
            <JobDetails params={params} />
        </Suspense>
    );
}