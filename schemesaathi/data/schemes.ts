// ============================================================================
// SchemeSaathi — Real Government Schemes Dataset
// All scheme information is based on publicly available official data.
// URLs point to official government portals.
// ============================================================================

import { Scheme } from "@/types";

export const schemes: Scheme[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. PM Kisan Samman Nidhi (Central – Agriculture)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "pm-kisan",
    name: "PM-KISAN Samman Nidhi",
    nameHi: "पीएम-किसान सम्मान निधि",
    shortDescription:
      "Income support of ₹6,000 per year to all landholding farmer families across the country.",
    shortDescriptionHi:
      "देश भर के सभी भूमिधारक किसान परिवारों को प्रति वर्ष ₹6,000 की आय सहायता।",
    longDescription:
      "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Government scheme that provides income support of ₹6,000 per year to all landholding farmer families in the country. The amount is paid in three equal instalments of ₹2,000 each, directly transferred to the bank accounts of the beneficiaries. The scheme aims to supplement the financial needs of farmers in procuring various inputs to ensure proper crop health and appropriate yields.",
    longDescriptionHi:
      "प्रधानमंत्री किसान सम्मान निधि (पीएम-किसान) एक केंद्र सरकार की योजना है जो देश में सभी भूमिधारक किसान परिवारों को प्रति वर्ष ₹6,000 की आय सहायता प्रदान करती है। राशि ₹2,000 प्रत्येक की तीन समान किस्तों में सीधे लाभार्थियों के बैंक खातों में हस्तांतरित की जाती है।",
    governmentLevel: "Central",
    department: "Department of Agriculture & Farmers Welfare",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    categories: ["Agriculture"],
    occupations: ["Farmer"],
    genders: ["Male", "Female", "Transgender"],
    socialCategories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    ruralUrban: ["Rural", "Urban"],
    benefits: [
      "₹6,000 per year in three instalments of ₹2,000 each",
      "Direct bank transfer (DBT)",
      "No repayment required",
    ],
    benefitsHi: [
      "₹2,000 प्रत्येक की तीन किस्तों में प्रति वर्ष ₹6,000",
      "प्रत्यक्ष बैंक हस्तांतरण (DBT)",
      "कोई चुकौती आवश्यक नहीं",
    ],
    eligibility: [
      "Must be a landholding farmer family",
      "Must have cultivable landholding as per land records of the respective state/UT",
      "Institutional landholders are excluded",
      "Income tax payers are excluded from the scheme",
    ],
    eligibilityHi: [
      "भूमिधारक किसान परिवार होना चाहिए",
      "संबंधित राज्य/केंद्रशासित प्रदेश के भूमि रिकॉर्ड के अनुसार कृषि योग्य भूमि होनी चाहिए",
      "संस्थागत भूमिधारक बाहर हैं",
      "आयकर दाता इस योजना से बाहर हैं",
    ],
    documents: [
      "Aadhaar card",
      "Land ownership documents",
      "Bank account details",
      "Mobile number linked to Aadhaar",
    ],
    documentsHi: [
      "आधार कार्ड",
      "भूमि स्वामित्व दस्तावेज",
      "बैंक खाता विवरण",
      "आधार से जुड़ा मोबाइल नंबर",
    ],
    howToApply: [
      "Visit the PM-KISAN official portal",
      "Click on 'New Farmer Registration'",
      "Enter Aadhaar number and other required details",
      "Submit the application",
      "Alternatively, contact your local Common Service Centre (CSC)",
    ],
    howToApplyHi: [
      "पीएम-किसान आधिकारिक पोर्टल पर जाएं",
      "'नया किसान पंजीकरण' पर क्लिक करें",
      "आधार नंबर और अन्य आवश्यक विवरण दर्ज करें",
      "आवेदन जमा करें",
      "वैकल्पिक रूप से, अपने स्थानीय सामान्य सेवा केंद्र (CSC) से संपर्क करें",
    ],
    applicationUrl: "https://pmkisan.gov.in/",
    officialSourceUrl: "https://pmkisan.gov.in/",
    sourceName: "PM-KISAN Official Portal",
    lastVerified: "2024-12-01",
    verificationStatus: "verified",
    status: "Active",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. Post-Matric Scholarship for SC (Central – Education)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "post-matric-scholarship-sc",
    name: "Post-Matric Scholarship for SC Students",
    nameHi: "अनुसूचित जाति के छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति",
    shortDescription:
      "Scholarship for SC students studying at post-matriculation or post-secondary stage to enable them to complete their education.",
    shortDescriptionHi:
      "पोस्ट-मैट्रिक या पोस्ट-सेकेंडरी स्तर पर अध्ययनरत अनुसूचित जाति के छात्रों के लिए छात्रवृत्ति।",
    longDescription:
      "The Post-Matric Scholarship for Scheduled Caste Students is a centrally sponsored scheme that provides financial assistance to SC students studying at post-matriculation or post-secondary stage to enable them to complete their education. The scholarship covers maintenance allowance, tuition fees, and other compulsory fees charged by educational institutions.",
    governmentLevel: "Central",
    department: "Department of Social Justice and Empowerment",
    ministry: "Ministry of Social Justice and Empowerment",
    categories: ["Education", "Social Welfare"],
    occupations: ["Student"],
    minAge: 15,
    maxAge: 35,
    genders: ["Male", "Female", "Transgender"],
    educationLevels: [
      "12th",
      "Diploma",
      "Undergraduate",
      "Postgraduate",
      "PhD",
    ],
    socialCategories: ["SC"],
    incomeLimit: 2.5,
    ruralUrban: ["Rural", "Urban"],
    benefits: [
      "Full tuition fees reimbursement",
      "Monthly maintenance allowance",
      "Study tour charges",
      "Book allowance",
    ],
    benefitsHi: [
      "पूर्ण ट्यूशन फीस प्रतिपूर्ति",
      "मासिक रखरखाव भत्ता",
      "अध्ययन यात्रा शुल्क",
      "पुस्तक भत्ता",
    ],
    eligibility: [
      "Must belong to Scheduled Caste",
      "Must be studying at post-matriculation or post-secondary level",
      "Annual family income should not exceed ₹2.5 lakh",
      "Must be a regular student in a recognized institution",
    ],
    eligibilityHi: [
      "अनुसूचित जाति से संबंधित होना चाहिए",
      "पोस्ट-मैट्रिक या पोस्ट-सेकेंडरी स्तर पर अध्ययनरत होना चाहिए",
      "वार्षिक पारिवारिक आय ₹2.5 लाख से अधिक नहीं होनी चाहिए",
      "मान्यता प्राप्त संस्थान में नियमित छात्र होना चाहिए",
    ],
    documents: [
      "Caste certificate",
      "Income certificate",
      "Previous year marksheet",
      "Admission letter/Bonafide certificate",
      "Bank passbook",
      "Aadhaar card",
    ],
    howToApply: [
      "Visit the National Scholarship Portal (NSP)",
      "Register and create an account",
      "Fill in the scholarship application form",
      "Upload required documents",
      "Submit the application before the deadline",
    ],
    applicationUrl: "https://scholarships.gov.in/",
    officialSourceUrl: "https://scholarships.gov.in/",
    sourceName: "National Scholarship Portal",
    lastVerified: "2024-11-15",
    verificationStatus: "verified",
    status: "Active",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. PM Mudra Yojana (Central – Business)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "pm-mudra-yojana",
    name: "Pradhan Mantri MUDRA Yojana (PMMY)",
    nameHi: "प्रधानमंत्री मुद्रा योजना (PMMY)",
    shortDescription:
      "Loans up to ₹10 lakh for non-corporate, non-farm small/micro enterprises.",
    shortDescriptionHi:
      "गैर-कॉर्पोरेट, गैर-कृषि लघु/सूक्ष्म उद्यमों के लिए ₹10 लाख तक का ऋण।",
    longDescription:
      "Pradhan Mantri MUDRA Yojana (PMMY) provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises. These loans are classified as MUDRA loans under three categories: Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 lakh), and Tarun (₹5,00,001 to ₹10 lakh). The scheme aims to fund the unfunded by bringing such enterprises to the formal financial system.",
    governmentLevel: "Central",
    department: "Department of Financial Services",
    ministry: "Ministry of Finance",
    categories: ["Business", "Financial Inclusion"],
    occupations: [
      "Business Owner",
      "Entrepreneur",
      "Self-employed",
      "Artisan",
    ],
    minAge: 18,
    genders: ["Male", "Female", "Transgender"],
    socialCategories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    ruralUrban: ["Rural", "Urban"],
    benefits: [
      "Shishu: Loans up to ₹50,000",
      "Kishore: Loans from ₹50,001 to ₹5 lakh",
      "Tarun: Loans from ₹5,00,001 to ₹10 lakh",
      "No collateral required",
      "No processing fee",
    ],
    benefitsHi: [
      "शिशु: ₹50,000 तक का ऋण",
      "किशोर: ₹50,001 से ₹5 लाख तक का ऋण",
      "तरुण: ₹5,00,001 से ₹10 लाख तक का ऋण",
      "कोई संपार्श्विक आवश्यक नहीं",
      "कोई प्रोसेसिंग शुल्क नहीं",
    ],
    eligibility: [
      "Any Indian citizen who has a business plan for a non-farm income-generating activity",
      "Activity should qualify as manufacturing, processing, trading, or service sector",
      "Loan requirement should be less than ₹10 lakh",
    ],
    documents: [
      "Identity proof (Aadhaar/Voter ID/Passport)",
      "Address proof",
      "Business plan or proposal",
      "Proof of business (if existing)",
      "Passport size photographs",
      "Category certificate (SC/ST/OBC/Minority, if applicable)",
    ],
    howToApply: [
      "Visit any bank, NBFC, or MFI offering MUDRA loans",
      "Alternatively, apply online through the Udyamimitra portal",
      "Submit business plan and required documents",
      "The lending institution will assess the application",
    ],
    applicationUrl: "https://www.mudra.org.in/",
    officialSourceUrl: "https://www.mudra.org.in/",
    sourceName: "MUDRA Official Website",
    lastVerified: "2024-11-20",
    verificationStatus: "verified",
    status: "Active",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. Ayushman Bharat (PM-JAY) (Central – Healthcare)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "ayushman-bharat-pmjay",
    name: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    nameHi:
      "आयुष्मान भारत – प्रधानमंत्री जन आरोग्य योजना (PM-JAY)",
    shortDescription:
      "Health insurance cover of ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
    shortDescriptionHi:
      "माध्यमिक और तृतीयक देखभाल अस्पताल में भर्ती के लिए प्रति परिवार प्रति वर्ष ₹5 लाख का स्वास्थ्य बीमा कवर।",
    longDescription:
      "Ayushman Bharat PM-JAY is the world's largest health assurance scheme, fully funded by the Government of India. It provides health insurance cover of ₹5 lakh per family per year for secondary and tertiary care hospitalization to economically vulnerable families. The scheme covers 3-day pre-hospitalization and 15-day post-hospitalization expenses including diagnostics and medicines.",
    governmentLevel: "Central",
    department: "National Health Authority",
    ministry: "Ministry of Health and Family Welfare",
    categories: ["Healthcare"],
    occupations: [
      "Farmer",
      "Labourer",
      "Homemaker",
      "Senior Citizen",
      "Other",
    ],
    genders: ["Male", "Female", "Transgender"],
    socialCategories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    incomeLimit: 5,
    ruralUrban: ["Rural", "Urban"],
    benefits: [
      "₹5 lakh health insurance cover per family per year",
      "Cashless and paperless treatment at empanelled hospitals",
      "Covers pre and post hospitalization expenses",
      "No cap on family size or age",
      "All pre-existing conditions covered from Day 1",
    ],
    benefitsHi: [
      "प्रति परिवार प्रति वर्ष ₹5 लाख का स्वास्थ्य बीमा कवर",
      "सूचीबद्ध अस्पतालों में कैशलेस और पेपरलेस उपचार",
      "अस्पताल में भर्ती होने से पहले और बाद के खर्चों को कवर करता है",
      "परिवार के आकार या उम्र पर कोई सीमा नहीं",
      "सभी पहले से मौजूद बीमारियां पहले दिन से कवर",
    ],
    eligibility: [
      "Families identified based on SECC 2011 data (rural) and occupational criteria (urban)",
      "No cap on family size, age, or gender",
      "Covers both rural and urban beneficiaries",
      "Beneficiary families can check eligibility on the official portal",
    ],
    documents: [
      "Aadhaar card or any government-issued ID",
      "Ration card",
      "SECC database reference (checked by officials)",
    ],
    howToApply: [
      "Check eligibility on the Ayushman Bharat website or call 14555",
      "Visit the nearest Ayushman Bharat Arogya Mitra at an empanelled hospital",
      "Get the Ayushman card created at a Common Service Centre (CSC)",
    ],
    applicationUrl: "https://pmjay.gov.in/",
    officialSourceUrl: "https://pmjay.gov.in/",
    sourceName: "PM-JAY Official Portal",
    lastVerified: "2024-12-01",
    verificationStatus: "verified",
    status: "Active",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. PM Awas Yojana – Gramin (Central – Housing)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "pmay-gramin",
    name: "Pradhan Mantri Awas Yojana – Gramin (PMAY-G)",
    nameHi: "प्रधानमंत्री आवास योजना – ग्रामीण (PMAY-G)",
    shortDescription:
      "Financial assistance to build pucca houses for rural poor families who are houseless or living in kutcha/dilapidated houses.",
    shortDescriptionHi:
      "ग्रामीण गरीब परिवारों को पक्के मकान बनाने के लिए वित्तीय सहायता।",
    longDescription:
      "PMAY-G provides financial assistance to homeless and those living in kutcha or dilapidated houses in rural areas to construct pucca houses. The assistance is ₹1.20 lakh in plains and ₹1.30 lakh in hilly/difficult areas, along with MGNREGS support for 90/95 person-days of unskilled labour.",
    governmentLevel: "Central",
    department: "Department of Rural Development",
    ministry: "Ministry of Rural Development",
    categories: ["Housing"],
    occupations: ["Farmer", "Labourer", "Homemaker", "Other"],
    genders: ["Male", "Female", "Transgender"],
    socialCategories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    incomeLimit: 2.5,
    ruralUrban: ["Rural"],
    benefits: [
      "₹1.20 lakh assistance in plains",
      "₹1.30 lakh assistance in hilly/difficult areas",
      "90/95 person-days of unskilled labour under MGNREGS",
      "₹12,000 for toilet construction under SBM",
    ],
    benefitsHi: [
      "मैदानी इलाकों में ₹1.20 लाख सहायता",
      "पहाड़ी/कठिन क्षेत्रों में ₹1.30 लाख सहायता",
      "मनरेगा के तहत 90/95 व्यक्ति-दिन अकुशल श्रम",
      "SBM के तहत शौचालय निर्माण के लिए ₹12,000",
    ],
    eligibility: [
      "Must be a resident of a rural area",
      "Must be houseless or living in a kutcha/dilapidated house",
      "Identified through the SECC 2011 database",
      "Should not be a beneficiary of any other housing scheme",
    ],
    documents: [
      "Aadhaar card",
      "Bank account details",
      "MGNREGS job card",
      "BPL/SECC certificate",
    ],
    howToApply: [
      "Beneficiaries are identified through SECC data by Gram Sabha",
      "No separate application is needed for most beneficiaries",
      "Contact the local Panchayat office for assistance",
      "Alternatively, check status on the PMAY-G portal",
    ],
    applicationUrl: "https://pmayg.nic.in/",
    officialSourceUrl: "https://pmayg.nic.in/",
    sourceName: "PMAY-G Official Portal",
    lastVerified: "2024-11-15",
    verificationStatus: "verified",
    status: "Active",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 6. Sukanya Samriddhi Yojana (Central – Women)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "sukanya-samriddhi",
    name: "Sukanya Samriddhi Yojana",
    nameHi: "सुकन्या समृद्धि योजना",
    shortDescription:
      "Small savings scheme for the girl child with attractive interest rates and tax benefits.",
    shortDescriptionHi:
      "आकर्षक ब्याज दरों और कर लाभ के साथ बालिकाओं के लिए लघु बचत योजना।",
    longDescription:
      "Sukanya Samriddhi Yojana is a government-backed savings scheme aimed at the parents of girl children to encourage saving for their education and marriage. The scheme offers one of the highest interest rates among small savings schemes along with tax benefits under Section 80C of the Income Tax Act. The account can be opened from the birth of a girl child until she turns 10.",
    governmentLevel: "Central",
    department: "Department of Posts / Authorized Banks",
    ministry: "Ministry of Finance",
    categories: ["Women", "Financial Inclusion", "Education"],
    occupations: [
      "Student",
      "Farmer",
      "Business Owner",
      "Employee",
      "Homemaker",
      "Other",
    ],
    maxAge: 10,
    genders: ["Female"],
    socialCategories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    ruralUrban: ["Rural", "Urban"],
    benefits: [
      "Attractive interest rate (currently 8.2% p.a.)",
      "Tax benefits under Section 80C",
      "Interest earned is tax-free",
      "Maturity amount is tax-free",
      "Minimum deposit of ₹250 per year",
      "Maximum deposit of ₹1.50 lakh per year",
    ],
    eligibility: [
      "Girl child below the age of 10 years at the time of account opening",
      "Only two accounts per family (one per girl child)",
      "Guardian (parent) must open the account",
      "Indian resident",
    ],
    documents: [
      "Birth certificate of the girl child",
      "Identity proof of parent/guardian",
      "Address proof",
      "Passport size photographs",
    ],
    howToApply: [
      "Visit any post office or authorized bank",
      "Fill the account opening form",
      "Submit required documents",
      "Make the initial deposit (minimum ₹250)",
    ],
    applicationUrl:
      "https://www.indiapost.gov.in/Financial/Pages/Content/Sukanya-Samriddhi-Account.aspx",
    officialSourceUrl:
      "https://www.indiapost.gov.in/Financial/Pages/Content/Sukanya-Samriddhi-Account.aspx",
    sourceName: "India Post",
    lastVerified: "2024-12-01",
    verificationStatus: "verified",
    status: "Active",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 7. PM Skill Development (PMKVY) (Central – Employment)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "pmkvy",
    name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    nameHi: "प्रधानमंत्री कौशल विकास योजना (PMKVY)",
    shortDescription:
      "Free skill development training and certification for Indian youth to enable them to earn a better livelihood.",
    shortDescriptionHi:
      "भारतीय युवाओं को बेहतर आजीविका कमाने में सक्षम बनाने के लिए मुफ्त कौशल विकास प्रशिक्षण और प्रमाणन।",
    longDescription:
      "PMKVY is the flagship scheme of the Ministry of Skill Development & Entrepreneurship. It provides free short-term training (Short Term Training) and Recognition of Prior Learning (RPL) to Indian youth. Successful candidates receive government-recognized certificates, monetary rewards, and placement assistance.",
    governmentLevel: "Central",
    department:
      "National Skill Development Corporation (NSDC)",
    ministry: "Ministry of Skill Development & Entrepreneurship",
    categories: ["Employment", "Education"],
    occupations: ["Student", "Job Seeker", "Labourer", "Other"],
    minAge: 15,
    maxAge: 45,
    genders: ["Male", "Female", "Transgender"],
    educationLevels: [
      "No formal education",
      "Primary",
      "Secondary",
      "10th",
      "12th",
      "Diploma",
      "Undergraduate",
    ],
    socialCategories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    ruralUrban: ["Rural", "Urban"],
    benefits: [
      "Free skill training in various sectors",
      "Government-recognized certification",
      "Monetary reward on successful certification",
      "Placement assistance",
      "Kaushal Bima (insurance) for 3 years",
    ],
    benefitsHi: [
      "विभिन्न क्षेत्रों में मुफ्त कौशल प्रशिक्षण",
      "सरकार द्वारा मान्यता प्राप्त प्रमाणन",
      "सफल प्रमाणन पर मौद्रिक पुरस्कार",
      "नियुक्ति सहायता",
      "3 वर्ष के लिए कौशल बीमा",
    ],
    eligibility: [
      "Indian national",
      "Candidate should possess Aadhaar card",
      "Age and education requirements vary by trade/course",
      "No fee charged for training",
    ],
    documents: [
      "Aadhaar card",
      "Educational certificates",
      "Bank account details",
      "Passport size photographs",
    ],
    howToApply: [
      "Visit the Skill India Portal",
      "Find a training centre near you",
      "Register for the desired course",
      "Attend training and appear for assessment",
    ],
    applicationUrl: "https://www.skillindiadigital.gov.in/",
    officialSourceUrl: "https://www.skillindiadigital.gov.in/",
    sourceName: "Skill India Digital Portal",
    lastVerified: "2024-11-25",
    verificationStatus: "verified",
    status: "Active",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 8. Bihar Student Credit Card (State – Bihar – Education)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "bihar-student-credit-card",
    name: "Bihar Student Credit Card Scheme",
    nameHi: "बिहार स्टूडेंट क्रेडिट कार्ड योजना",
    shortDescription:
      "Education loan up to ₹4 lakh at zero interest for 12th pass students from Bihar for higher education.",
    shortDescriptionHi:
      "बिहार के 12वीं पास छात्रों को उच्च शिक्षा के लिए शून्य ब्याज पर ₹4 लाख तक का शिक्षा ऋण।",
    longDescription:
      "The Bihar Student Credit Card Scheme provides education loans up to ₹4 lakh at zero interest to students who have passed 12th standard from a recognized board in Bihar. The scheme covers tuition fees, living expenses, and other academic costs for higher education courses including professional and technical courses.",
    governmentLevel: "State",
    state: "Bihar",
    department: "Education Department, Government of Bihar",
    categories: ["Education"],
    occupations: ["Student"],
    minAge: 17,
    maxAge: 25,
    genders: ["Male", "Female", "Transgender"],
    educationLevels: ["12th", "Diploma", "Undergraduate", "Postgraduate"],
    socialCategories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    ruralUrban: ["Rural", "Urban"],
    benefits: [
      "Education loan up to ₹4 lakh",
      "Zero interest for the student",
      "Covers tuition fees, living expenses, and academic costs",
      "Repayment starts after course completion and employment",
    ],
    benefitsHi: [
      "₹4 लाख तक का शिक्षा ऋण",
      "छात्र के लिए शून्य ब्याज",
      "ट्यूशन फीस, रहने का खर्च और शैक्षणिक लागत को कवर करता है",
      "कोर्स पूरा होने और रोजगार के बाद चुकौती शुरू होती है",
    ],
    eligibility: [
      "Must be a permanent resident of Bihar",
      "Must have passed 12th from a recognized board in Bihar",
      "Must have secured admission in a recognized institution",
      "Age should not exceed 25 years at the time of application",
    ],
    eligibilityHi: [
      "बिहार का स्थायी निवासी होना चाहिए",
      "बिहार में मान्यता प्राप्त बोर्ड से 12वीं पास होना चाहिए",
      "मान्यता प्राप्त संस्थान में प्रवेश प्राप्त होना चाहिए",
      "आवेदन के समय आयु 25 वर्ष से अधिक नहीं होनी चाहिए",
    ],
    documents: [
      "12th marksheet and certificate",
      "Admission letter",
      "Aadhaar card",
      "Residential certificate of Bihar",
      "Income certificate",
      "Bank account details",
      "2 passport size photographs",
    ],
    howToApply: [
      "Visit the MNSSBY portal (7nishchay-yuvaupmission.bihar.gov.in)",
      "Register with mobile number and Aadhaar",
      "Fill the application form online",
      "Visit the DRCC (District Registration cum Counselling Centre)",
      "Submit documents for verification",
    ],
    applicationUrl: "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
    officialSourceUrl: "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
    sourceName: "7 Nishchay Yuva Upmission, Government of Bihar",
    lastVerified: "2024-11-01",
    verificationStatus: "verified",
    status: "Active",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 9. Stand-Up India (Central – Women/SC/ST – Business)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "stand-up-india",
    name: "Stand-Up India Scheme",
    nameHi: "स्टैंड-अप इंडिया योजना",
    shortDescription:
      "Bank loans between ₹10 lakh and ₹1 crore for SC/ST and women entrepreneurs to set up greenfield enterprises.",
    shortDescriptionHi:
      "अनुसूचित जाति/अनुसूचित जनजाति और महिला उद्यमियों को ग्रीनफील्ड उद्यम स्थापित करने के लिए ₹10 लाख से ₹1 करोड़ के बीच बैंक ऋण।",
    longDescription:
      "Stand-Up India Scheme facilitates bank loans between ₹10 lakh and ₹1 crore to at least one SC/ST borrower and at least one woman borrower per bank branch for setting up a greenfield enterprise. The scheme is specifically designed to promote entrepreneurship among women and SC/ST communities.",
    governmentLevel: "Central",
    department: "Department of Financial Services",
    ministry: "Ministry of Finance",
    categories: ["Business", "Women", "Social Welfare"],
    occupations: ["Entrepreneur", "Business Owner", "Self-employed"],
    minAge: 18,
    genders: ["Male", "Female", "Transgender"],
    socialCategories: ["SC", "ST"],
    ruralUrban: ["Rural", "Urban"],
    benefits: [
      "Bank loans from ₹10 lakh to ₹1 crore",
      "Composite loan covering term loan and working capital",
      "Repayment period of up to 7 years",
      "Margin money of up to 25%",
    ],
    eligibility: [
      "SC/ST entrepreneur OR woman entrepreneur (18 years and above)",
      "Enterprise should be a greenfield project (new enterprise)",
      "In case of non-individual enterprise, 51% shareholding should be held by SC/ST or woman",
      "Borrower should not be in default to any bank/financial institution",
    ],
    documents: [
      "Identity proof",
      "Address proof",
      "Caste certificate (for SC/ST)",
      "Business plan/project report",
      "Proof of business premise",
      "Bank account statements",
    ],
    howToApply: [
      "Visit the Stand-Up India portal (standupmitra.in)",
      "Register and search for loans",
      "Connect with a bank branch",
      "Submit the application with required documents",
    ],
    applicationUrl: "https://www.standupmitra.in/",
    officialSourceUrl: "https://www.standupmitra.in/",
    sourceName: "Stand-Up India Portal",
    lastVerified: "2024-11-20",
    verificationStatus: "verified",
    status: "Active",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 10. Indira Gandhi National Old Age Pension (Central – Senior Citizens)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "ignoaps",
    name: "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",
    nameHi:
      "इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना (IGNOAPS)",
    shortDescription:
      "Monthly pension for BPL elderly citizens aged 60 and above.",
    shortDescriptionHi:
      "60 वर्ष और उससे अधिक आयु के बीपीएल वरिष्ठ नागरिकों के लिए मासिक पेंशन।",
    longDescription:
      "The Indira Gandhi National Old Age Pension Scheme (IGNOAPS) is a component of the National Social Assistance Programme (NSAP). It provides a monthly pension to BPL persons aged 60 years and above. The Central Government contribution is ₹200 per month for persons between 60-79 years and ₹500 per month for persons aged 80 years and above. States may add their own contribution.",
    governmentLevel: "Central",
    department: "Department of Rural Development",
    ministry: "Ministry of Rural Development",
    categories: ["Senior Citizens", "Social Welfare"],
    occupations: ["Senior Citizen", "Other"],
    minAge: 60,
    genders: ["Male", "Female", "Transgender"],
    socialCategories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    incomeLimit: 1,
    ruralUrban: ["Rural", "Urban"],
    benefits: [
      "₹200/month (Central share) for ages 60-79",
      "₹500/month (Central share) for ages 80+",
      "States may add additional amount",
      "Direct bank transfer",
    ],
    benefitsHi: [
      "60-79 आयु के लिए ₹200/माह (केंद्रीय हिस्सा)",
      "80+ आयु के लिए ₹500/माह (केंद्रीय हिस्सा)",
      "राज्य अतिरिक्त राशि जोड़ सकते हैं",
      "प्रत्यक्ष बैंक हस्तांतरण",
    ],
    eligibility: [
      "Age 60 years or above",
      "Must belong to a Below Poverty Line (BPL) household",
      "Indian citizen",
    ],
    documents: [
      "Age proof",
      "BPL certificate or ration card",
      "Aadhaar card",
      "Bank passbook",
      "Passport size photographs",
    ],
    howToApply: [
      "Contact the local Panchayat/Municipality office",
      "Fill the application form",
      "Submit required documents",
      "Some states allow online applications through their NSAP portals",
    ],
    applicationUrl: "https://nsap.nic.in/",
    officialSourceUrl: "https://nsap.nic.in/",
    sourceName: "National Social Assistance Programme",
    lastVerified: "2024-10-15",
    verificationStatus: "verified",
    status: "Active",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 11. UDID for Persons with Disabilities (Central – Disability)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "udid-disability",
    name: "Unique Disability ID (UDID) Card",
    nameHi: "विशिष्ट दिव्यांगजन पहचान पत्र (UDID)",
    shortDescription:
      "Universal ID for persons with disabilities to avail government benefits and schemes seamlessly.",
    shortDescriptionHi:
      "दिव्यांगजनों के लिए सरकारी लाभ और योजनाओं का निर्बाध लाभ उठाने के लिए सार्वभौमिक पहचान पत्र।",
    longDescription:
      "The Unique Disability ID (UDID) project creates a national database for persons with disabilities and provides them with a unique disability identity card. The UDID card serves as a single document for identification, disability certification, and availing benefits from government schemes.",
    governmentLevel: "Central",
    department: "Department of Empowerment of Persons with Disabilities",
    ministry: "Ministry of Social Justice and Empowerment",
    categories: ["Disability", "Social Welfare"],
    occupations: ["Person with Disability", "Student", "Job Seeker", "Other"],
    genders: ["Male", "Female", "Transgender"],
    socialCategories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    disabilityApplicable: true,
    ruralUrban: ["Rural", "Urban"],
    benefits: [
      "Universal disability identity card",
      "Single document for availing all government benefits",
      "Streamlined process for disability certification",
      "Helps in accessing various government schemes for PwD",
    ],
    benefitsHi: [
      "सार्वभौमिक दिव्यांगजन पहचान पत्र",
      "सभी सरकारी लाभों का लाभ उठाने के लिए एकल दस्तावेज",
      "दिव्यांगता प्रमाणन के लिए सुव्यवस्थित प्रक्रिया",
      "दिव्यांगजनों के लिए विभिन्न सरकारी योजनाओं तक पहुंच में मदद करता है",
    ],
    eligibility: [
      "Any person with a disability (as defined under the RPwD Act 2016)",
      "Indian citizen or resident",
      "Applicable for all 21 types of disabilities recognized under the Act",
    ],
    documents: [
      "Aadhaar card",
      "Medical certificate/assessment",
      "Passport size photograph",
      "Address proof",
    ],
    howToApply: [
      "Visit the UDID portal (swavlambancard.gov.in)",
      "Register and fill the application form online",
      "Visit the designated medical authority for assessment",
      "Receive the UDID card upon successful assessment",
    ],
    applicationUrl: "https://www.swavlambancard.gov.in/",
    officialSourceUrl: "https://www.swavlambancard.gov.in/",
    sourceName: "UDID Portal – Swavlamban",
    lastVerified: "2024-11-10",
    verificationStatus: "verified",
    status: "Active",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 12. e-Shram (Central – Labour)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "e-shram",
    name: "e-Shram Portal – Unorganised Workers Registration",
    nameHi: "ई-श्रम पोर्टल – असंगठित श्रमिक पंजीकरण",
    shortDescription:
      "National database for unorganised workers with accidental insurance coverage of ₹2 lakh.",
    shortDescriptionHi:
      "₹2 लाख के दुर्घटना बीमा कवरेज के साथ असंगठित श्रमिकों के लिए राष्ट्रीय डेटाबेस।",
    longDescription:
      "e-Shram is a national portal for creating a comprehensive database of unorganised workers. Registered workers receive an e-Shram card and are entitled to accidental insurance cover of ₹2 lakh under PMSBY. The portal helps in delivering social security benefits to unorganised workers.",
    governmentLevel: "Central",
    department: "Ministry of Labour and Employment",
    ministry: "Ministry of Labour and Employment",
    categories: ["Labour", "Social Welfare"],
    occupations: ["Labourer", "Self-employed", "Artisan", "Homemaker", "Other"],
    minAge: 16,
    maxAge: 59,
    genders: ["Male", "Female", "Transgender"],
    socialCategories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    incomeLimit: 2,
    ruralUrban: ["Rural", "Urban"],
    benefits: [
      "e-Shram card (Universal Account Number)",
      "Accidental insurance of ₹2 lakh (death) and ₹1 lakh (partial disability) under PMSBY",
      "Access to various government welfare schemes",
      "Future social security benefits",
    ],
    benefitsHi: [
      "ई-श्रम कार्ड (यूनिवर्सल अकाउंट नंबर)",
      "PMSBY के तहत ₹2 लाख (मृत्यु) और ₹1 लाख (आंशिक दिव्यांगता) का दुर्घटना बीमा",
      "विभिन्न सरकारी कल्याण योजनाओं तक पहुंच",
      "भविष्य के सामाजिक सुरक्षा लाभ",
    ],
    eligibility: [
      "Unorganised worker aged 16-59 years",
      "Should not be a member of EPFO/ESIC",
      "Should not be an income tax payer",
      "Must have Aadhaar and linked mobile number",
    ],
    documents: [
      "Aadhaar card",
      "Mobile number linked to Aadhaar",
      "Bank account details",
    ],
    howToApply: [
      "Visit the e-Shram portal (eshram.gov.in)",
      "Self-register using Aadhaar and mobile OTP",
      "Alternatively, visit a Common Service Centre (CSC)",
    ],
    applicationUrl: "https://eshram.gov.in/",
    officialSourceUrl: "https://eshram.gov.in/",
    sourceName: "e-Shram Portal",
    lastVerified: "2024-12-01",
    verificationStatus: "verified",
    status: "Active",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 13. PM Ujjwala Yojana (Central – Women/Social Welfare)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "pm-ujjwala",
    name: "Pradhan Mantri Ujjwala Yojana (PMUY)",
    nameHi: "प्रधानमंत्री उज्ज्वला योजना (PMUY)",
    shortDescription:
      "Free LPG connections to women from BPL households to ensure clean cooking fuel.",
    shortDescriptionHi:
      "बीपीएल परिवारों की महिलाओं को स्वच्छ खाना पकाने का ईंधन सुनिश्चित करने के लिए मुफ्त एलपीजी कनेक्शन।",
    longDescription:
      "Pradhan Mantri Ujjwala Yojana provides free LPG connections to women from Below Poverty Line (BPL) households. The scheme aims to safeguard the health of women and children by providing clean cooking fuel and reducing indoor air pollution caused by traditional cooking methods.",
    governmentLevel: "Central",
    department: "Ministry of Petroleum and Natural Gas",
    ministry: "Ministry of Petroleum and Natural Gas",
    categories: ["Women", "Social Welfare", "Healthcare"],
    occupations: ["Homemaker", "Farmer", "Labourer", "Other"],
    minAge: 18,
    genders: ["Female"],
    socialCategories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    incomeLimit: 2.5,
    ruralUrban: ["Rural", "Urban"],
    benefits: [
      "Free LPG connection",
      "Financial support of ₹1,600 for each LPG connection",
      "EMI facility for purchase of stove and first refill",
      "Clean and safe cooking fuel",
    ],
    benefitsHi: [
      "मुफ्त एलपीजी कनेक्शन",
      "प्रत्येक एलपीजी कनेक्शन के लिए ₹1,600 की वित्तीय सहायता",
      "स्टोव और पहली रिफिल की खरीद के लिए EMI सुविधा",
      "स्वच्छ और सुरक्षित खाना पकाने का ईंधन",
    ],
    eligibility: [
      "Women from BPL households",
      "Should be 18 years or above",
      "No existing LPG connection in the household",
      "Name should be in the SECC-2011 data or eligible categories",
    ],
    documents: [
      "BPL certificate/Ration card",
      "Aadhaar card",
      "Bank account details",
      "Passport size photograph",
    ],
    howToApply: [
      "Visit the nearest LPG distributor",
      "Submit the KYC form with required documents",
      "Alternatively, apply online through MyLPG portal",
    ],
    applicationUrl: "https://www.pmuy.gov.in/",
    officialSourceUrl: "https://www.pmuy.gov.in/",
    sourceName: "PMUY Official Portal",
    lastVerified: "2024-11-15",
    verificationStatus: "verified",
    status: "Active",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 14. National Apprenticeship Promotion Scheme (Central – Employment)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "naps",
    name: "National Apprenticeship Promotion Scheme (NAPS)",
    nameHi: "राष्ट्रीय शिक्षुता संवर्धन योजना (NAPS)",
    shortDescription:
      "Provides stipend support and basic training cost reimbursement for apprenticeship training in establishments.",
    shortDescriptionHi:
      "प्रतिष्ठानों में शिक्षुता प्रशिक्षण के लिए वजीफा सहायता और बुनियादी प्रशिक्षण लागत प्रतिपूर्ति प्रदान करता है।",
    longDescription:
      "The National Apprenticeship Promotion Scheme (NAPS) promotes apprenticeship training by providing financial incentives to establishments and apprentices. The government shares 25% of the prescribed stipend (up to ₹1,500/month) with employers and reimburses basic training costs up to ₹7,500 per apprentice for 500 hours.",
    governmentLevel: "Central",
    department: "Directorate General of Training",
    ministry: "Ministry of Skill Development & Entrepreneurship",
    categories: ["Employment", "Education"],
    occupations: ["Student", "Job Seeker", "Other"],
    minAge: 14,
    maxAge: 40,
    genders: ["Male", "Female", "Transgender"],
    educationLevels: [
      "Primary",
      "Secondary",
      "10th",
      "12th",
      "Diploma",
      "Undergraduate",
    ],
    socialCategories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    ruralUrban: ["Rural", "Urban"],
    benefits: [
      "Government shares 25% of stipend (up to ₹1,500/month)",
      "Basic training cost reimbursement up to ₹7,500",
      "Industry-relevant hands-on training",
      "National Apprenticeship Certificate on completion",
    ],
    eligibility: [
      "Indian citizen",
      "Minimum age 14 years (with certain conditions for minors)",
      "Should meet the qualification requirement for the specific trade",
      "Must be enrolled in an establishment for apprenticeship",
    ],
    documents: [
      "Educational certificates",
      "Aadhaar card",
      "Bank account details",
      "Passport size photographs",
    ],
    howToApply: [
      "Visit the Apprenticeship India portal (apprenticeshipindia.gov.in)",
      "Register as an apprentice candidate",
      "Search for apprenticeship opportunities",
      "Apply to establishments offering apprenticeship",
    ],
    applicationUrl: "https://www.apprenticeshipindia.gov.in/",
    officialSourceUrl: "https://www.apprenticeshipindia.gov.in/",
    sourceName: "Apprenticeship India Portal",
    lastVerified: "2024-11-10",
    verificationStatus: "verified",
    status: "Active",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 15. Bihar Mukhyamantri Kanya Utthan Yojana (State – Bihar – Women/Education)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "bihar-kanya-utthan",
    name: "Mukhyamantri Kanya Utthan Yojana – Bihar",
    nameHi: "मुख्यमंत्री कन्या उत्थान योजना – बिहार",
    shortDescription:
      "Financial assistance of up to ₹50,000 for girls from birth to graduation in Bihar to promote girl child education.",
    shortDescriptionHi:
      "बिहार में बालिका शिक्षा को बढ़ावा देने के लिए जन्म से स्नातक तक लड़कियों को ₹50,000 तक की वित्तीय सहायता।",
    longDescription:
      "Mukhyamantri Kanya Utthan Yojana is a flagship scheme of the Government of Bihar that provides financial support to girls at various stages from birth to graduation. The scheme aims to empower girls through education and reduce child marriage. A total of approximately ₹50,000 is provided in instalments at different educational milestones.",
    governmentLevel: "State",
    state: "Bihar",
    department: "Department of Education, Government of Bihar",
    categories: ["Women", "Education"],
    occupations: ["Student"],
    maxAge: 25,
    genders: ["Female"],
    educationLevels: [
      "Primary",
      "Secondary",
      "10th",
      "12th",
      "Undergraduate",
    ],
    socialCategories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    ruralUrban: ["Rural", "Urban"],
    benefits: [
      "₹2,000 at birth",
      "₹1,000 at age 1 (after Aadhaar)",
      "₹2,000 at age 2 (after vaccination)",
      "₹10,000 on passing 12th",
      "₹25,000 on completing graduation",
      "Sanitary napkin allowance and uniform grant",
    ],
    benefitsHi: [
      "जन्म पर ₹2,000",
      "1 वर्ष की आयु पर ₹1,000 (आधार के बाद)",
      "2 वर्ष की आयु पर ₹2,000 (टीकाकरण के बाद)",
      "12वीं पास करने पर ₹10,000",
      "स्नातक पूरा करने पर ₹25,000",
      "सैनिटरी नैपकिन भत्ता और यूनिफॉर्म अनुदान",
    ],
    eligibility: [
      "Must be a permanent resident of Bihar",
      "Applicable only for girls",
      "No income bar for certain components",
      "Must be unmarried for certain educational milestone benefits",
    ],
    documents: [
      "Birth certificate",
      "Aadhaar card",
      "Bank account (in the name of the girl or mother)",
      "Marksheet of relevant examination",
      "Residential certificate",
      "Passport size photograph",
    ],
    howToApply: [
      "Visit the e-Kalyan portal of Bihar Government",
      "Register and fill the application form",
      "Upload required documents",
      "Submit the application before the deadline",
    ],
    applicationUrl: "https://ekalyan.bih.nic.in/",
    officialSourceUrl: "https://ekalyan.bih.nic.in/",
    sourceName: "e-Kalyan, Government of Bihar",
    lastVerified: "2024-11-01",
    verificationStatus: "verified",
    status: "Active",
  },
];
