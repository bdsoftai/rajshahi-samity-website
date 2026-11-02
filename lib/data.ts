// Stats Data
export const stats = [
    { value: '৪', labelBn: 'জেলা', labelEn: 'Districts' },
    { value: '৫০০+', labelBn: 'সদস্য (ডেমো)', labelEn: 'Members' },
    { value: '১২', labelBn: 'বার্ষিক ইভেন্ট', labelEn: 'Annual Events' },
    { value: '১০০%', labelBn: 'আর্থিক স্বচ্ছতা', labelEn: 'Transparency' },
];

export const features = [
    { id: 'f1', icon: '🤝', titleBn: 'সামাজিক বন্ধন', titleEn: 'Social Bonding', descBn: 'বৃহত্তর রাজশাহীর মানুষদের মধ্যে ভ্রাতৃত্ব ও নেটওয়ার্কিং গড়ে তোলা।', descEn: 'Building brotherhood and networking among the community.' },
    { id: 'f2', icon: '🎓', titleBn: 'শিক্ষা ও ক্যারিয়ার', titleEn: 'Education & Career', descBn: 'শিক্ষার্থীদের জন্য গাইডলাইন, স্কলারশিপ এবং চাকরির সুযোগ তৈরি করা।', descEn: 'Providing guidance and job opportunities for students.' },
    { id: 'f3', icon: '🌱', titleBn: 'বরেন্দ্র উন্নয়ন', titleEn: 'Barind Development', descBn: 'জলবায়ু পরিবর্তন ও বরেন্দ্র অঞ্চলের কৃষি উন্নয়নে কাজ করা।', descEn: 'Working on climate and agricultural development.' },
    { id: 'f4', icon: '🏥', titleBn: 'স্বাস্থ্যসেবা', titleEn: 'Healthcare', descBn: 'সদস্যদের জন্য স্বাস্থ্য ক্যাম্প ও মেডিকেল সহায়তা।', descEn: 'Health camps and medical assistance for members.' },
    { id: 'f5', icon: '🏛️', titleBn: 'সাংস্কৃতিক ঐতিহ্য', titleEn: 'Cultural Heritage', descBn: 'রাজশাহীর ইতিহাস, সংস্কৃতি ও ঐতিহ্য সংরক্ষণ।', descEn: 'Preserving the history and culture of Rajshahi.' },
    { id: 'f6', icon: '💼', titleBn: 'উদ্যোক্তা উন্নয়ন', titleEn: 'Entrepreneurship', descBn: 'নতুন ব্যবসায়িক আইডিয়া ও স্টার্টআপে সহায়তা প্রদান।', descEn: 'Supporting new business ideas and startups.' },
];

export const latestUpdates = [
    { id: 'u1', tagBn: 'উৎসব', tagEn: 'Festival', titleBn: 'পহেলা বৈশাখ মিলনমেলা', titleEn: 'Pohela Boishakh Gathering', descBn: 'সমিতির সদস্যদের নিয়ে বর্ষবরণ আয়োজনের প্রস্তুতি সভা অনুষ্ঠিত।', descEn: 'Preparation meeting held for the New Year celebration.' },
    { id: 'u2', tagBn: 'ইভেন্ট', tagEn: 'Event', titleBn: 'বাৎসরিক পিকনিক রেজিস্ট্রেশন', titleEn: 'Annual Picnic', descBn: 'পরিবারসহ অংশগ্রহণের নিবন্ধন চলছে।', descEn: 'Registration is ongoing for family participation.' },
    { id: 'u3', tagBn: 'কর্মসংস্থান', tagEn: 'Career', titleBn: 'নতুন চাকরির তথ্য', titleEn: 'New Jobs', descBn: 'সদস্যদের রেফারেলে ১০টি নতুন পদের বিজ্ঞপ্তি।', descEn: 'Referral circulars for 10 new positions.' },
    { id: 'u4', tagBn: 'শিক্ষা', tagEn: 'Education', titleBn: 'মেধাবী শিক্ষার্থী সংবর্ধনা', titleEn: 'Student Felicitation', descBn: 'এইচএসসি ও বিশ্ববিদ্যালয়ে সফল শিক্ষার্থীদের সংবর্ধনা।', descEn: 'Felicitation for successful HSC and university students.' },
    { id: 'u5', tagBn: 'স্বাস্থ্য', tagEn: 'Health', titleBn: 'ফ্রি মেডিকেল ক্যাম্প', titleEn: 'Free Medical Camp', descBn: 'আগামী মাসে ঢাকায় বিনামূল্যে স্বাস্থ্য ক্যাম্পের আয়োজন।', descEn: 'Free health camp in Dhaka next month.' },
    { id: 'u6', tagBn: 'সাধারণ', tagEn: 'General', titleBn: 'বার্ষিক সাধারণ সভা', titleEn: 'Annual General Meeting', descBn: '২০২৫ সালের বার্ষিক সাধারণ সভার তারিখ ঘোষণা।', descEn: 'Date announced for the 2025 AGM.' },
];

// Culture/Districts Data
export const districts = {
  'রাজশাহী': { 
    id: 'rajshahi',
    titleBn: 'রেশম ও আম', 
    titleEn: 'Silk & Mango',
    bodyBn: 'পদ্মাপাড়ের শহর, রেশম শিল্প, রাজশাহী বিশ্ববিদ্যালয় ও বরেন্দ্র জাদুঘর।',
    bodyEn: 'The city by the Padma, silk industry, Rajshahi University & Varendra Museum.',
    gradient: 'from-[#0b5e3c] to-[#2a9fd6]',
    pages: [
      { 
        titleBn: 'ইতিহাস ও ঐতিহ্য', titleEn: 'History & Heritage',
        contentBn: 'রাজশাহী শহরের গোড়াপত্তন হয় ১৬৩৪ সালে। মোঘল আমলে এটি রামপুর বোয়ালিয়া নামে পরিচিত ছিল। এই অঞ্চলের ইতিহাস জুড়ে রয়েছে রাণী ভবানী, নবাব আলীবর্দী খাঁ এবং সিরাজউদ্দৌলার মতো ঐতিহাসিক ব্যক্তিত্বদের পদচিহ্ন। এছাড়া বরেন্দ্র জাদুঘর বাংলাদেশের অন্যতম প্রাচীন জাদুঘর, যা এই শহরের সাংস্কৃতিক ঐতিহ্যের সাক্ষী।',
        contentEn: 'The city of Rajshahi was founded in 1634. During the Mughal era, it was known as Rampur Boalia. The history of this region is intertwined with historical figures like Rani Bhabani, Nawab Alivardi Khan, and Siraj-ud-Daulah. Additionally, the Varendra Museum is one of the oldest museums in Bangladesh, witnessing the cultural heritage of this city.'
      },
      { 
        titleBn: 'আম ও রেশম শিল্প', titleEn: 'Mango & Silk Industry',
        contentBn: 'রাজশাহী আমের জন্য বিখ্যাত। এখানকার ল্যাংড়া, ফজলি, ক্ষীরশাপাতি আম সারা দেশে সমাদৃত। ১৮৪০-এর দশকে রাজশাহীতে রেশম চাষের সূচনা হয়। বর্তমানে এখানে রেশমের উপর ভিত্তি করে একটি বড় শিল্প গড়ে উঠেছে। পদ্মা নদীর তীর ঘেঁষে গড়ে ওঠা এই শহর কৃষি ও শিল্পে সমৃদ্ধ।',
        contentEn: 'Rajshahi is famous for its mangoes. Varieties like Langra, Fazli, and Khirshapat are cherished nationwide. Silk cultivation began here in the 1840s. Today, a large industry has developed based on silk. Situated on the banks of the Padma River, this city is rich in both agriculture and industry.'
      }
    ]
  },
  'নাটোর': { 
    id: 'natore',
    titleBn: 'নাটোরের কাঁচাগোল্লা', titleEn: 'Natore’s Kacha Golla',
    bodyBn: 'রাণী ভবানীর স্মৃতি, উত্তরা গণভবন ও ঐতিহ্যবাহী মিষ্টি।',
    bodyEn: 'Memories of Rani Bhabani, Uttara Ganabhaban & traditional sweets.',
    gradient: 'from-[#8a5a00] to-[#d9a441]',
    pages: [
      { 
        titleBn: 'রাণী ভবানীর স্মৃতি', titleEn: 'Memories of Rani Bhabani',
        contentBn: 'নাটোরের ইতিহাস জুড়ে রয়েছে রাণী ভবানীর নাম। তিনি নাটোরের জমিদারি পরিচালনা করতেন এবং প্রজাদের জন্য অনেক কল্যাণকর কাজ করেন। উত্তরা গণভবন (দিঘাপতিয়া রাজপ্রাসাদ) এই জেলার অন্যতম দর্শনীয় স্থান, যা বর্তমানে মিউজিয়াম হিসেবে সংরক্ষিত।',
        contentEn: 'The history of Natore is deeply intertwined with the name of Rani Bhabani. She managed the Natore estate and did extensive welfare work for her subjects. Uttara Ganabhaban (Dighapatia Rajbari) is a major attraction in this district, now preserved as a museum.'
      },
      { 
        titleBn: 'ঐতিহ্যবাহী মিষ্টি ও খাবার', titleEn: 'Traditional Sweets & Food',
        contentBn: 'নাটোরের কাঁচাগোল্লা সারা বাংলাদেশে বিখ্যাত। এর সাথে রয়েছে চমচম ও অন্যান্য মিষ্টির সমাহার। এছাড়া নাটোরের দই ও অন্যান্য খাবার স্থানীয়দের কাছে খুবই প্রিয়। নাটোরের মিষ্টি শুধু খাবারের স্বাদ নয়, এটি শহরের সাংস্কৃতিক পরিচয় বহন করে।',
        contentEn: 'Natore’s Kacha Golla is famous all over Bangladesh. Along with it, there are Chomchom and various other sweets. The local yogurt and other foods are also highly beloved. The sweets of Natore are not just about taste; they carry the cultural identity of the town.'
      }
    ]
  },
  'নওগাঁ': { 
    id: 'naogaon',
    titleBn: 'ধান ও পাহাড়পুর', titleEn: 'Rice & Paharpur',
    bodyBn: 'বাংলাদেশের ধানের ভাণ্ডার ও ইউনেস্কো বিশ্ব ঐতিহ্য পাহাড়পুর বিহার।',
    bodyEn: 'The granary of Bangladesh & UNESCO World Heritage Paharpur Bihar.',
    gradient: 'from-[#6a3d8a] to-[#d96a8a]',
    pages: [
      { 
        titleBn: 'পাহাড়পুর বৌদ্ধ বিহার', titleEn: 'Paharpur Buddhist Bihar',
        contentBn: 'পাহাড়পুর বিহার (সোমপুর মহাবিহার) নওগাঁ জেলার বদলগাছী উপজেলায় অবস্থিত। ধারণা করা হয়, এটি ৮ম শতাব্দীতে পাল রাজা ধর্মপাল নির্মাণ করেন। এশিয়ার সবচেয়ে বড় বৌদ্ধ বিহারগুলোর মধ্যে এটি একটি। ১৯৮৫ সালে ইউনেস্কো এটিকে বিশ্ব ঐতিহ্যবাহী স্থান হিসেবে ঘোষণা করে।',
        contentEn: 'Paharpur Bihar (Somapura Mahavihara) is located in the Badalgachhi upazila of Naogaon. It is believed to be built in the 8th century by the Pala King Dharmapala. It is one of the largest Buddhist monasteries in Asia. In 1985, UNESCO declared it a World Heritage Site.'
      },
      { 
        titleBn: 'ধান ভাণ্ডার ও কৃষি', titleEn: 'Granary & Agriculture',
        contentBn: 'নওগাঁকে বাংলাদেশের ধান ভাণ্ডার বলা হয়। এই জেলার মাটি ও আবহাওয়া ধান চাষের জন্য অত্যন্ত উপযোগী। বরেন্দ্র অঞ্চলের কৃষি অর্থনীতিতে এই জেলা গুরুত্বপূর্ণ ভূমিকা পালন করে। এখানকার কৃষকরা আধুনিক পদ্ধতিতে ধান চাষ করে দেশের খাদ্য চাহিদা মেটাতে সাহায্য করে।',
        contentEn: 'Naogaon is called the granary of Bangladesh. The soil and climate of this district are highly suitable for rice cultivation. It plays a vital role in the agricultural economy of the Barind region. Local farmers use modern methods to help meet the country\'s food demand.'
      }
    ]
  },
  'চাঁপাইনবাবগঞ্জ': { 
    id: 'chapainawabganj',
    titleBn: 'আমের রাজধানী', titleEn: 'Mango Capital',
    bodyBn: 'ছোট সোনা মসজিদ, ঐতিহ্যবাহী আম ও গম্ভীরা লোকগান।',
    bodyEn: 'Choto Sona Mosque, traditional mangoes & Gambhira folk songs.',
    gradient: 'from-[#2d6a4f] to-[#95d5b2]',
    pages: [
      { 
        titleBn: 'ছোট সোনা মসজিদ', titleEn: 'Choto Sona Mosque',
        contentBn: 'চাঁপাইনবাবগঞ্জের শিবগঞ্জ উপজেলায় অবস্থিত ছোট সোনা মসজিদ বাংলার মসলিন ও স্থাপত্যের এক অনন্য নিদর্শন। সুলতান আলাউদ্দিন হোসেন শাহের আমলে এটি নির্মিত হয়। মসজিদের গায়ে সোনার প্রলেপ থাকায় এটি সোনা মসজিদ নামে পরিচিত।',
        contentEn: 'Choto Sona Mosque, located in the Shibganj upazila of Chapainawabganj, is a unique testament to Bengal\'s architecture. It was built during the reign of Sultan Alauddin Husain Shah. It is known as the Golden Mosque due to the gold plating on its walls.'
      },
      { 
        titleBn: 'আম ও লোকসংস্কৃতি', titleEn: 'Mango & Folk Culture',
        contentBn: 'চাঁপাইনবাবগঞ্জ আমের রাজধানী হিসেবে পরিচিত। এখানকার ল্যাংড়া, ফজলি ও অন্যান্য জাতের আম সারা দেশে যায়। এছাড়া এই অঞ্চলের ঐতিহ্যবাহী গম্ভীরা গান ও লোকসংস্কৃতি বাংলার সংস্কৃতিকে সমৃদ্ধ করেছে।',
        contentEn: 'Chapainawabganj is known as the Mango Capital. Varieties like Langra and Fazli from here are shipped across the country. Furthermore, the traditional Gambhira songs and folk culture of this region have enriched the culture of Bengal.'
      }
    ]
  },
};

export const jobs = [
    {
        id: 'j1', typeBn: 'আইন', typeEn: 'Law',
        titleBn: 'জুনিয়র ল\'ইয়ার (আইনজীবী)', titleEn: 'Junior Lawyer',
        locationBn: 'ঢাকা', locationEn: 'Dhaka',
        descBn: 'একটি স্বনামধন্য ল চেম্বারে জুনিয়র ল\'ইয়ার পদে নিয়োগ দেওয়া হবে। এলএলবি ডিগ্রিধারীদের আবেদন করতে বলা হচ্ছে।',
        descEn: 'Recruitment for Junior Lawyer at a renowned law chamber. LLB graduates are encouraged to apply.'
    },
    {
        id: 'j2', typeBn: 'কোর্ট', typeEn: 'Court',
        titleBn: 'লিগ্যাল অ্যাসিস্ট্যান্ট', titleEn: 'Legal Assistant',
        locationBn: 'ঢাকা', locationEn: 'Dhaka',
        descBn: 'সুপ্রিম কোর্টের একজন সিনিয়র অ্যাডভোকেটের জন্য লিগ্যাল অ্যাসিস্ট্যান্ট প্রয়োজন।',
        descEn: 'Legal Assistant needed for a senior advocate at the Supreme Court.'
    },
    {
        id: 'j3', typeBn: 'আইন', typeEn: 'Law',
        titleBn: 'কর্পোরেট লিগ্যাল অ্যাডভাইজার', titleEn: 'Corporate Legal Advisor',
        locationBn: 'ঢাকা', locationEn: 'Dhaka',
        descBn: 'একটি মাল্টিন্যাশনাল কোম্পানিতে কর্পোরেট লিগ্যাল অ্যাডভাইজার পদে নিয়োগ। ৩ বছরের অভিজ্ঞতা প্রয়োজন।',
        descEn: 'Corporate Legal Advisor recruitment in an MNC. 3 years of experience required.'
    },
    {
        id: 'j4', typeBn: 'কোর্ট', typeEn: 'Court',
        titleBn: 'কোর্ট রিপোর্টার', titleEn: 'Court Reporter',
        locationBn: 'রাজশাহী', locationEn: 'Rajshahi',
        descBn: 'রাজশাহী আদালতের জন্য আইনি বিষয়ে অভিজ্ঞ কোর্ট রিপোর্টার নিয়োগ দেওয়া হবে।',
        descEn: 'Court Reporter with legal expertise needed for Rajshahi Court.'
    },
    {
        id: 'j5', typeBn: 'আইন', typeEn: 'Law',
        titleBn: 'লিগ্যাল অফিসার', titleEn: 'Legal Officer',
        locationBn: 'ঢাকা', locationEn: 'Dhaka',
        descBn: 'একটি বেসরকারি ব্যাংকের লিগ্যাল ডিপার্টমেন্টে লিগ্যাল অফিসার পদে নিয়োগ।',
        descEn: 'Legal Officer recruitment in the legal department of a private bank.'
    },
    {
        id: 'j6', typeBn: 'কোর্ট', typeEn: 'Court',
        titleBn: 'কোর্ট ক্লার্ক', titleEn: 'Court Clerk',
        locationBn: 'নাটোর', locationEn: 'Natore',
        descBn: 'নাটোর জেলা জজ কোর্টে কোর্ট ক্লার্ক পদে নিয়োগের জন্য আবেদন আহ্বান করা হচ্ছে।',
        descEn: 'Applications are invited for the post of Court Clerk at Natore District Judge Court.'
    },
    {
        id: 'j7', typeBn: 'আইন', typeEn: 'Law',
        titleBn: 'প্যারালিগ্যাল', titleEn: 'Paralegal',
        locationBn: 'ঢাকা', locationEn: 'Dhaka',
        descBn: 'একটি এনজিওতে প্যারালিগ্যাল পদে নিয়োগ। মানবাধিকার ও আইনি সহায়তা বিষয়ে কাজ করতে হবে।',
        descEn: 'Paralegal recruitment in an NGO. Work on human rights and legal aid.'
    },
    {
        id: 'j8', typeBn: 'কোর্ট', typeEn: 'Court',
        titleBn: 'সেশন কোর্ট অ্যাসিস্ট্যান্ট', titleEn: 'Session Court Assistant',
        locationBn: 'নওগাঁ', locationEn: 'Naogaon',
        descBn: 'নওগাঁ সেশন কোর্টে একজন অ্যাসিস্ট্যান্ট প্রয়োজন। কম্পিউটার জ্ঞান থাকতে হবে।',
        descEn: 'Assistant needed at Naogaon Session Court. Computer literacy required.'
    },
    {
        id: 'j9', typeBn: 'আইন', typeEn: 'Law',
        titleBn: 'লিগ্যাল কনসালট্যান্ট', titleEn: 'Legal Consultant',
        locationBn: 'অনলাইন', locationEn: 'Online',
        descBn: 'একটি আইনি পরামর্শক প্রতিষ্ঠানের জন্য রিমোট লিগ্যাল কনসালট্যান্ট প্রয়োজন।',
        descEn: 'Remote Legal Consultant needed for a legal consulting firm.'
    },
    {
        id: 'j10', typeBn: 'কোর্ট', typeEn: 'Court',
        titleBn: 'জুডিশিয়াল ম্যাজিস্ট্রেট অফিসের সহকারী', titleEn: 'Assistant at Judicial Magistrate Office',
        locationBn: 'চাঁপাইনবাবগঞ্জ', locationEn: 'Chapainawabganj',
        descBn: 'চাঁপাইনবাবগঞ্জ জুডিশিয়াল ম্যাজিস্ট্রেট অফিসে অফিস সহকারী পদে নিয়োগ।',
        descEn: 'Office Assistant recruitment at Chapainawabganj Judicial Magistrate Office.'
    },
    {
        id: 'j11', typeBn: 'আইন', typeEn: 'Law',
        titleBn: 'আইন শিক্ষক (লেকচারার)', titleEn: 'Law Lecturer',
        locationBn: 'রাজশাহী', locationEn: 'Rajshahi',
        descBn: 'একটি বেসরকারি বিশ্ববিদ্যালয়ে আইন বিভাগে লেকচারার পদে নিয়োগ।',
        descEn: 'Law Lecturer recruitment at a private university in Rajshahi.'
    },
    {
        id: 'j12', typeBn: 'কোর্ট', typeEn: 'Court',
        titleBn: 'হাইকোর্ট রিসার্চ অ্যাসিস্ট্যান্ট', titleEn: 'High Court Research Assistant',
        locationBn: 'ঢাকা', locationEn: 'Dhaka',
        descBn: 'হাইকোর্ট বিভাগের একজন বিচারপতির জন্য আইনি গবেষণা সহকারী প্রয়োজন।',
        descEn: 'Legal Research Assistant needed for a High Court Judge.'
    },
];

// Education Data
export const educationCards = [
    {
        id: 'e1', tagBn: 'শিক্ষা', tagEn: 'Education',
        titleBn: 'শিক্ষানগরী রাজশাহী ও রাজশাহী বিশ্ববিদ্যালয়', titleEn: 'Rajshahi University & Education City',
        descBn: 'উচ্চশিক্ষায় রাজশাহীর অবদান, ভর্তি-প্রস্তুতি ও স্কলারশিপ গাইড।',
        descEn: 'Rajshahi\'s contribution to higher education, admission prep, and scholarship guides.',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'e2', tagBn: 'স্বাস্থ্য', tagEn: 'Health',
        titleBn: 'গ্রামীণ স্বাস্থ্যসেবা উন্নয়ন', titleEn: 'Rural Healthcare Development',
        descBn: 'স্বাস্থ্য ক্যাম্প, সচেতনতা ও বিনামূল্যে পরামর্শ কর্মসূচির প্রস্তাব।',
        descEn: 'Proposals for health camps, awareness, and free consultation programs.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'e3', tagBn: 'উন্নয়ন', tagEn: 'Development',
        titleBn: 'কীভাবে এগিয়ে যাবে রাজশাহী?', titleEn: 'How will Rajshahi move forward?',
        descBn: 'সদস্যদের মতামত ও উন্নয়ন পরিকল্পনা নিয়ে আর্টিকেল সিরিজ।',
        descEn: 'Article series on members\' opinions and development plans.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'e4', tagBn: 'শিক্ষা', tagEn: 'Education',
        titleBn: 'বৃত্তি ও স্কলারশিপ সুযোগ', titleEn: 'Scholarship Opportunities',
        descBn: 'দেশি-বিদেশি বিভিন্ন বৃত্তির সর্বশেষ তথ্য ও আবেদন গাইড।',
        descEn: 'Latest info and application guides for domestic and international scholarships.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'e5', tagBn: 'স্বাস্থ্য', tagEn: 'Health',
        titleBn: 'বিশেষজ্ঞ ডাক্তার প্যানেল', titleEn: 'Expert Doctor Panel',
        descBn: 'সদস্যদের জন্য বিশেষজ্ঞ ডাক্তারদের নিয়ে অনলাইন কনসালটেশন।',
        descEn: 'Online consultation with expert doctors for members.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'e6', tagBn: 'উন্নয়ন', tagEn: 'Development',
        titleBn: 'ডিজিটাল শিক্ষা ব্যবস্থা', titleEn: 'Digital Education System',
        descBn: 'প্রযুক্তিনির্ভর শিক্ষা ও অনলাইন লার্নিং প্ল্যাটফর্মের পরিকল্পনা।',
        descEn: 'Plans for technology-driven education and online learning platforms.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'e7', tagBn: 'চিকিৎসা', tagEn: 'Medical',
        titleBn: 'রাজশাহী মেডিকেল কলেজ ও হাসপাতাল', titleEn: 'Rajshahi Medical College & Hospital',
        descBn: 'উত্তরবঙ্গের সর্ববৃহৎ চিকিৎসা প্রতিষ্ঠান। মেডিকেল শিক্ষা ও উন্নত স্বাস্থ্যসেবার কেন্দ্র।',
        descEn: 'The largest healthcare institution in North Bengal. A center for medical education and advanced healthcare.',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'e8', tagBn: 'স্বাস্থ্য', tagEn: 'Health',
        titleBn: 'জেলা হাসপাতাল ও স্বাস্থ্য কমপ্লেক্স', titleEn: 'District Hospitals & Health Complexes',
        descBn: 'রাজশাহী, নাটোর, নওগাঁ ও চাঁপাইনবাবগঞ্জ জেলা হাসপাতালের চিকিৎসা সেবার মান উন্নয়ন।',
        descEn: 'Improving healthcare quality at Rajshahi, Natore, Naogaon, and Chapainawabganj district hospitals.',
        image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'e9', tagBn: 'শিক্ষা', tagEn: 'Education',
        titleBn: 'স্থাপত্য ও প্রকৌশল শিক্ষা', titleEn: 'Architecture & Engineering Education',
        descBn: 'রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (RUET) এবং স্থাপত্য বিভাগের অবদান।',
        descEn: 'Contributions of Rajshahi University of Engineering & Technology (RUET) and architecture departments.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'e10', tagBn: 'উন্নয়ন', tagEn: 'Development',
        titleBn: 'শিক্ষা ও স্বাস্থ্যে ডিজিটাল উদ্ভাবন', titleEn: 'Digital Innovation in Education & Health',
        descBn: 'টেলিমেডিসিন, ই-লার্নিং এবং আধুনিক প্রযুক্তি ব্যবহার করে শিক্ষা ও স্বাস্থ্যসেবা সহজ করা।',
        descEn: 'Using telemedicine, e-learning, and modern tech to make education and healthcare accessible.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'e11', tagBn: 'শিক্ষা', tagEn: 'Education',
        titleBn: 'বিশিষ্ট স্কুল ও কলেজ সমূহ', titleEn: 'Prominent Schools & Colleges',
        descBn: 'রাজশাহী কলেজিয়েট স্কুল, নিউ গভর্নমেন্ট ডিগ্রি কলেজ এবং অন্যান্য ঐতিহ্যবাহী শিক্ষাপ্রতিষ্ঠান।',
        descEn: 'Rajshahi Collegiate School, New Government Degree College, and other heritage educational institutions.',
        image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop'
    },
];
// Barind Data
export const barindCards = [
    { icon: '🌵', title: 'সমস্যা', desc: 'ভূগর্ভস্থ পানির স্তর নেমে যাওয়া, খরা, মরুকরণের ঝুঁকি ও কৃষিতে সেচ-ব্যয় বৃদ্ধি।' },
    { icon: '💧', title: 'সমাধান', desc: 'বৃষ্টির পানি সংরক্ষণ, পুকুর-খাল পুনঃখনন, কম পানির ফসল ও আধুনিক সেচ ব্যবস্থাপনা।' },
    { icon: '🌱', title: 'উন্নয়ন', desc: 'সৌরশক্তিচালিত সেচ, বনায়ন, আম-লিচু-কৃষিভিত্তিক শিল্প ও কর্মসংস্থান।' },
];

// Accounts Data


export const monthlyData = [
    { monthBn: 'জানু', monthEn: 'Jan', income: 45, expense: 20 },
    { monthBn: 'ফেব্রু', monthEn: 'Feb', income: 52, expense: 38 },
    { monthBn: 'মার্চ', monthEn: 'Mar', income: 40, expense: 25 },
    { monthBn: 'এপ্রিল', monthEn: 'Apr', income: 60, expense: 44 },
];

export const transactions = [
    { dateBn: '০৫ জানু', dateEn: '05 Jan', descBn: 'সদস্য চাঁদা', descEn: 'Member Subscription', typeBn: 'আয়', typeEn: 'Income', amount: '৪৫,০০০', amountEn: '45,000' },
    { dateBn: '১৮ জানু', dateEn: '18 Jan', descBn: 'সভা আয়োজন', descEn: 'Meeting Arrangement', typeBn: 'ব্যয়', typeEn: 'Expense', amount: '৮,৫০০', amountEn: '8,500' },
    { dateBn: '১০ ফেব্রু', dateEn: '10 Feb', descBn: 'অনুদান – শুভানুধ্যায়ী', descEn: 'Donation – Well-wisher', typeBn: 'আয়', typeEn: 'Income', amount: '২০,০০০', amountEn: '20,000' },
    { dateBn: '২৫ ফেব্রু', dateEn: '25 Feb', descBn: 'পিকনিক অগ্রিম বুকিং', descEn: 'Picnic Advance Booking', typeBn: 'ব্যয়', typeEn: 'Expense', amount: '৩০,০০০', amountEn: '30,000' },
];

// Gallery Data
export const galleryItems = [
    {
        id: 'g1', titleBn: 'পিকনিক ২০২৫', titleEn: 'Picnic 2025',
        image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'g2', titleBn: 'পহেলা বৈশাখ', titleEn: 'Pohela Boishakh',
        image: 'https://images.unsplash.com/photo-1583083732436-cb3f4a068946?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'g3', titleBn: 'সাধারণ সভা', titleEn: 'General Meeting',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'g4', titleBn: 'পদ্মার পাড়', titleEn: 'Padma Riverside',
        image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'g5', titleBn: 'আম উৎসব', titleEn: 'Mango Festival',
        image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'g6', titleBn: 'মিলনমেলা', titleEn: 'Reunion',
        image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=800&auto=format&fit=crop'
    },
];

// Members Data
export const members = [
    { role: 'সভাপতি', initial: 'ম' },
    { role: 'সাধারণ সম্পাদক', initial: 'স' },
    { role: 'কোষাধ্যক্ষ', initial: 'ক' },
    { role: 'ট্রাস্টি', initial: 'ট' },
    { role: 'ফাউন্ডিং মেম্বার', initial: 'ফ' },
    { role: 'সাংগঠনিক সম্পাদক', initial: 'সা' },
];