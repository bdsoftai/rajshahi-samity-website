// lib/educationData.ts

export interface GalleryImage {
    image: string;
    titleBn: string;
    titleEn: string;
    descBn: string;
    descEn: string;
}

// সেকশন কার্ডের জন্য ইন্টারফেস (এখন একাধিক ছবি নিতে পারবে)
export interface ArticleSection {
    titleBn: string;
    titleEn: string;
    contentBn: string;
    contentEn: string;
    images: GalleryImage[]; // card এর বদলে images
}

export interface EducationCard {
    id: string;
    tagBn: string;
    tagEn: string;
    titleBn: string;
    titleEn: string;
    descBn: string;
    descEn: string;
    image: string;
    introBn?: string;
    introEn?: string;
    sections?: ArticleSection[];
    conclusionBn?: string;
    conclusionEn?: string;
    galleryImages?: GalleryImage[];
    fullContentBn?: string;
    fullContentEn?: string;
}

export const educationCards: EducationCard[] = [
    {
        id: 'e1',
        tagBn: 'শিক্ষা',
        tagEn: 'Education',
        titleBn: 'শিক্ষা, স্বাস্থ্য ও উন্নয়ন: রাজশাহীর ভবিষ্যৎ গড়ার তিন স্তম্ভ',
        titleEn: 'Education, Health & Development: Three Pillars of Rajshahi\'s Future',
        descBn: 'রাজশাহী জেলা সমিতি ঢাকার ডেমো পেজের এই সেকশনে তিনটি গুরুত্বপূর্ণ বিষয়—শিক্ষা, স্বাস্থ্য ও উন্নয়ন—নিয়ে বিস্তারিত আলোচনা তুলে ধরা হলো।',
        descEn: 'This section of Rajshahi Zila Samity Dhaka\'s demo page discusses three important topics—education, health, and development.',

        image: '/education/shikkha/shikkha-1.png',

        introBn: `রাজশাহী জেলা সমিতি ঢাকার ডেমো পেজের এই সেকশনে তিনটি গুরুত্বপূর্ণ বিষয়—শিক্ষা, স্বাস্থ্য ও উন্নয়ন—নিয়ে বিস্তারিত আলোচনা তুলে ধরা হলো। শিক্ষানগরী রাজশাহীর উচ্চশিক্ষার ঐতিহ্য, গ্রামীণ স্বাস্থ্যসেবার উন্নয়ন পরিকল্পনা এবং রাজশাহীর ভবিষ্যৎ উন্নয়নে সদস্যদের মতামত ও পরিকল্পনা—এই তিন ক্ষেত্র একসাথে রাজশাহীর সার্বিক অগ্রগতির পথ তৈরি করে।`,
        introEn: `This section of Rajshahi Zila Samity Dhaka discusses three important topics—education, health, and development. The higher education tradition of Rajshahi, rural healthcare development plans, and members' opinions on Rajshahi's future development—these three areas together create the path for Rajshahi's overall progress.`,

        sections: [
            {
                titleBn: 'শিক্ষা: শিক্ষানগরী রাজশাহী ও রাজশাহী বিশ্ববিদ্যালয়',
                titleEn: 'Education: Rajshahi University & Education City',
                contentBn: `রাজশাহী দীর্ঘদিন ধরে "শিক্ষানগরী" হিসেবে পরিচিত, যার মূল ভিত্তি রাজশাহী বিশ্ববিদ্যালয়। ১৯৫৩ সালের ৬ জুলাই প্রতিষ্ঠিত এই বিশ্ববিদ্যালয় বাংলাদেশের দ্বিতীয় প্রাচীন বিশ্ববিদ্যালয় এবং উত্তরবঙ্গের উচ্চশিক্ষার প্রধান কেন্দ্র। বর্তমানে এখানে ৯টি অনুষদের অধীনে ৫৯টি বিভাগ রয়েছে এবং শিক্ষার্থী সংখ্যা প্রায় ৩৮,০০০। বিশ্ববিদ্যালয়ের সবুজ ক্যাম্পাস শুধু শিক্ষারই নয়, শহরের সাংস্কৃতিক জীবনকেও সমৃদ্ধ করেছে—চারুকলা অনুষদের বৈশাখী শোভাযাত্রা তার উজ্জ্বল উদাহরণ।

রাজশাহীর উচ্চশিক্ষায় অবদান কেবল বিশ্ববিদ্যালয়ে সীমাবদ্ধ নয়। এখানে রয়েছে রাজশাহী কলেজ, রাজশাহী মেডিকেল কলেজ, বাংলাদেশ ইনস্টিটিউট অফ ম্যানেজমেন্ট (বিআইএম) এবং বহু সরকারি ও বেসরকারি শিক্ষাপ্রতিষ্ঠান। এসব প্রতিষ্ঠান উত্তরবঙ্গের শিক্ষার্থীদের জন্য উচ্চশিক্ষার দরজা খুলে দিয়েছে এবং দেশের শিক্ষিত জনশক্তি গড়ে তোলায় গুরুত্বপূর্ণ ভূমিকা রাখছে।

ভর্তি-প্রস্তুতি ও স্কলারশিপ গাইড: বিশ্ববিদ্যালয়ে ভর্তিচ্ছু শিক্ষার্থীদের জন্য সঠিক প্রস্তুতি অত্যন্ত গুরুত্বপূর্ণ। রাজশাহী বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার জন্য সাধারণত এইচএসসি পর্যায়ের পাঠ্যক্রম অনুসরণ করা হয়, পাশাপাশি বিগত বছরের প্রশ্ন সমাধান ও মডেল টেস্ট অনুশীলন করা যায়।`,
                contentEn: `Rajshahi has long been known as the "City of Education," with the University of Rajshahi at its core. Established on July 6, 1953, it is the second oldest university in Bangladesh and the main center of higher education in North Bengal. Currently, it has 59 departments under 9 faculties with approximately 38,000 students. The university's green campus has enriched not only education but also the cultural life of the city.

Rajshahi's contribution to higher education is not limited to the university alone. It is home to Rajshahi College, Rajshahi Medical College, Bangladesh Institute of Management (BIM), and many government and private institutions. These institutions have opened the doors of higher education for students of North Bengal and are playing an important role in building the nation's educated workforce.

Admission Prep & Scholarship Guide: Proper preparation is crucial for students seeking university admission. For the Rajshahi University admission test, HSC-level curriculum is generally followed, along with solving past papers and practicing model tests.`,
                images: [
                    { image: '/education/shikkha/shikkha-1.png', titleBn: 'শিক্ষা ছবি ১', titleEn: 'Education Image 1', descBn: 'রাজশাহী বিশ্ববিদ্যালয়ের ক্যাম্পাস।', descEn: 'Rajshahi University campus.' },
                    { image: '/education/shikkha/shikkha-2.png', titleBn: 'শিক্ষা ছবি ২', titleEn: 'Education Image 2', descBn: 'শিক্ষার্থীদের ভর্তি পরীক্ষার প্রস্তুতি।', descEn: 'Students preparing for admission.' },
                    { image: '/education/shikkha/shikkha-3.png', titleBn: 'শিক্ষা ছবি ৩', titleEn: 'Education Image 3', descBn: 'রাজশাহীর শিক্ষাপ্রতিষ্ঠান।', descEn: 'Educational institutions of Rajshahi.' },
                    { image: '/education/shikkha/shikkha-4.png', titleBn: 'শিক্ষা ছবি ৪', titleEn: 'Education Image 4', descBn: 'বিশ্ববিদ্যালয়ের সবুজ ক্যাম্পাস।', descEn: 'The green campus of the university.' },
                ]
            },
            {
                titleBn: 'স্বাস্থ্য: গ্রামীণ স্বাস্থ্যসেবা উন্নয়ন',
                titleEn: 'Health: Rural Healthcare Development',
                contentBn: `রাজশাহী শহরে উন্নত চিকিৎসা সুবিধা থাকলেও গ্রামীণ জনগোষ্ঠীর জন্য স্বাস্থ্যসেবা এখনও চ্যালেঞ্জিং। রাজশাহী মেডিকেল কলেজ হাসপাতাল উত্তরবঙ্গের প্রধান রেফারেল হাসপাতাল হলেও গ্রামের মানুষদের জন্য বিশেষজ্ঞ চিকিৎসা ও আধুনিক সুবিধা পাওয়া কঠিন। এই বাস্তবতা বিবেচনা করে রাজশাহী জেলা সমিতি ঢাকার পক্ষ থেকে নিম্নলিখিত কর্মসূচির প্রস্তাব করা হচ্ছে:

স্বাস্থ্য ক্যাম্প — গ্রামীণ এলাকায় নিয়মিত মেডিকেল ক্যাম্প আয়োজনের মাধ্যমে সাধারণ রোগ নির্ণয়, ওষুধ বিতরণ ও প্রয়োজনীয় ক্ষেত্রে শহরের হাসপাতালে রেফারেল দেওয়া হবে। বিশেষজ্ঞ চিকিৎসকদের স্বেচ্ছাসেবায় এই ক্যাম্প পরিচালিত হবে।

সচেতনতা কর্মসূচি — ডায়াবেটিস, উচ্চ রক্তচাপ, ক্যান্সার ও সংক্রামক রোগ সম্পর্কে গ্রামীণ জনগোষ্ঠীর মধ্যে সচেতনতা তৈরি করা হবে।`,
                contentEn: `Although Rajshahi city has advanced medical facilities, healthcare for the rural population remains challenging. Rajshahi Medical College Hospital is the main referral hospital in North Bengal, but specialized treatment and modern facilities are difficult for rural people. Considering this reality, Rajshahi Zila Samity Dhaka proposes:

Health Camps — Regular medical camps in rural areas for disease diagnosis, medicine distribution, and referral to city hospitals. Specialized doctors will volunteer for these camps.

Awareness Programs — Creating awareness about diabetes, hypertension, cancer, and infectious diseases among rural populations.`,
                images: [
                    { image: '/education/shasto/shasto-1.png', titleBn: 'স্বাস্থ্য ছবি ১', titleEn: 'Health Image 1', descBn: 'গ্রামীণ স্বাস্থ্য ক্যাম্প।', descEn: 'Rural health camp.' },
                    { image: '/education/shasto/shasto-2.png', titleBn: 'স্বাস্থ্য ছবি ২', titleEn: 'Health Image 2', descBn: 'চিকিৎসকের পরামর্শ।', descEn: 'Doctor\'s consultation.' },
                    { image: '/education/shasto/shasto-3.png', titleBn: 'স্বাস্থ্য ছবি ৩', titleEn: 'Health Image 3', descBn: 'মেডিকেল ক্যাম্প।', descEn: 'Medical camp.' },
                    { image: '/education/shasto/shasto-4.png', titleBn: 'স্বাস্থ্য ছবি ৪', titleEn: 'Health Image 4', descBn: 'স্বাস্থ্যসেবা প্রদান।', descEn: 'Providing healthcare.' },
                    { image: '/education/shasto/shasto-5.png', titleBn: 'স্বাস্থ্য ছবি ৫', titleEn: 'Health Image 5', descBn: 'রোগী পরীক্ষা।', descEn: 'Patient examination.' },
                    { image: '/education/shasto/shasto-6.png', titleBn: 'স্বাস্থ্য ছবি ৬', titleEn: 'Health Image 6', descBn: 'স্বাস্থ্য সচেতনতা।', descEn: 'Health awareness.' },
                ]
            },
            {
                titleBn: 'উন্নয়ন: কৃষকদের আধুনিক সেচ ব্যবস্থার প্রশিক্ষণ',
                titleEn: 'Development: Training Farmers on Modern Irrigation',
                contentBn: `রাজশাহীর উন্নয়ন একটি বহুমুখী বিষয়, যেখানে কৃষি, শিল্প, শিক্ষা ও অবকাঠামো—সব দিকই গুরুত্বপূর্ণ। এই সেকশনে সদস্যদের মতামত ও উন্নয়ন পরিকল্পনা নিয়ে একটি আর্টিকেল সিরিজ প্রকাশ করা হবে, যেখানে বিভিন্ন দিক থেকে রাজশাহীর অগ্রগতির পথ নিয়ে আলোচনা হবে।

মতামত ও পরিকল্পনা: সদস্যদের কাছ থেকে প্রাপ্ত মতামতের ভিত্তিতে কয়েকটি প্রধান উন্নয়ন ক্ষেত্র চিহ্নিত করা যায়—বরেন্দ্র অঞ্চলের পানি সংকট মোকাবিলায় টেকসই সেচ ব্যবস্থা, রেশম শিল্পের পুনরুজ্জীবন, আম প্রক্রিয়াজাতকরণ শিল্পের সম্প্রসারণ, এবং তথ্যপ্রযুক্তি ও দক্ষতা উন্নয়নে বিনিয়োগ।`,
                contentEn: `The development of Rajshahi is a multifaceted issue where agriculture, industry, education, and infrastructure are all important. An article series on members' opinions and development plans will be published here.

Opinions & Plans: Based on members' opinions, several key development areas can be identified—sustainable irrigation to address the water crisis in the Barind region, revival of the silk industry, expansion of mango processing industries, and investment in IT and skill development.`,
                images: [
                    { image: '/education/unnoyon/unnoyon-1.png', titleBn: 'উন্নয়ন ছবি ১', titleEn: 'Development Image 1', descBn: 'কৃষকদের প্রশিক্ষণ।', descEn: 'Farmers training.' },
                    { image: '/education/unnoyon/unnoyon-2.png', titleBn: 'উন্নয়ন ছবি ২', titleEn: 'Development Image 2', descBn: 'আধুনিক সেচ ব্যবস্থা।', descEn: 'Modern irrigation system.' },
                    { image: '/education/unnoyon/unnoyon-3.png', titleBn: 'উন্নয়ন ছবি ৩', titleEn: 'Development Image 3', descBn: 'কৃষি উন্নয়ন।', descEn: 'Agricultural development.' },
                ]
            }
        ],

        conclusionBn: `শিক্ষা, স্বাস্থ্য ও উন্নয়ন—এই তিন ক্ষেত্র একে অপরের সঙ্গে জড়িত। শিক্ষিত জনশক্তি স্বাস্থ্যসচেতন সমাজ গড়ে তোলে, আর স্বাস্থ্যবান জনগোষ্ঠী উন্নয়নের প্রধান চালিকাশক্তি। রাজশাহী জেলা সমিতি ঢাকার এই সেকশন সেই লক্ষ্যেই সদস্যদের জ্ঞান, অভিজ্ঞতা ও মতামতকে একত্রিত করার একটি প্ল্যাটফর্ম হিসেবে কাজ করবে।`,
        conclusionEn: `Education, health, and development—these three areas are interconnected. An educated workforce builds a health-conscious society, and a healthy population is the main driver of development. This section of Rajshahi Zila Samity Dhaka will serve as a platform to bring together members' knowledge, experience, and opinions for this purpose.`,

        galleryImages: []
    },
    
];