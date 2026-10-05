// ============================================================================
// SchemeSaathi — Internationalization (i18n)
// Supports English and Hindi with extensible structure for more languages.
// ============================================================================

import { Language } from "@/types";

type TranslationKey = string;
type Translations = Record<TranslationKey, string>;

const en: Translations = {
  // ── Site ────────────────────────────────────────────────────────────────
  "site.name": "SchemeSaathi",
  "site.subtitle": "Government Benefits Discovery",
  "site.tagline": "Find Your Benefits. Apply with Confidence.",
  "site.description":
    "Discover Central and State Government schemes based on your eligibility — without uploading documents.",
  "site.disclaimer":
    "SchemeSaathi is not a government website. We help citizens discover government schemes and direct them to official government portals for applications.",
  "site.independentPlatform": "Independent Third-Party Platform",
  "site.footerDisclaimer":
    "SchemeSaathi is an independent third-party platform and is not a government website.",
  "site.footerDescription": "Independent Government Benefits Discovery Platform",

  // ── Nav ────────────────────────────────────────────────────────────────
  "nav.home": "Home",
  "nav.findSchemes": "Find Schemes",
  "nav.categories": "Categories",
  "nav.centralSchemes": "Central Schemes",
  "nav.stateSchemes": "State Schemes",
  "nav.howItWorks": "How It Works",
  "nav.about": "About",
  "nav.privacy": "Privacy",
  "nav.disclaimer": "Disclaimer",
  "nav.reportIssue": "Report Incorrect Information",
  "nav.contact": "Contact",

  // ── Hero ───────────────────────────────────────────────────────────────
  "hero.title": "Find Government Benefits Made for You",
  "hero.subtitle":
    "Discover Central and State Government schemes based on your age, state, occupation, income range, education and other eligibility factors — without uploading documents.",
  "hero.cta.findSchemes": "Find Schemes for Me",
  "hero.cta.browseAll": "Browse All Schemes",
  "hero.search.placeholder": "Search for a scheme, benefit or need...",
  "hero.trust.noDocUpload": "No document upload required for discovery",
  "hero.trust.officialPortals": "Apply directly through official government portals",
  "hero.trust.independent": "Independent third-party platform",

  // ── Categories ─────────────────────────────────────────────────────────
  "categories.title": "What Do You Need Help With?",
  "categories.subtitle":
    "Browse schemes by category to find relevant government benefits.",

  // ── Eligibility Flow ──────────────────────────────────────────────────
  "flow.title": "Find Schemes for Me",
  "flow.step1.title": "What best describes you?",
  "flow.step1.subtitle": "Select one or more that apply",
  "flow.step2.title": "Which state do you live in?",
  "flow.step2.subtitle": "Select your state or union territory",
  "flow.step3.title": "Your age",
  "flow.step3.subtitle": "Enter your current age",
  "flow.step4.title": "Education level",
  "flow.step4.subtitle": "Select your highest education level",
  "flow.step5.title": "Social category",
  "flow.step5.subtitle": "This helps match category-specific schemes",
  "flow.step6.title": "Gender",
  "flow.step6.subtitle": "Some schemes are designed for specific genders",
  "flow.step7.title": "Approximate annual family income",
  "flow.step7.subtitle": "Select the closest range",
  "flow.step8.title": "Disability",
  "flow.step8.subtitle": "There are specific schemes for persons with disabilities",
  "flow.step9.title": "Rural or Urban",
  "flow.step9.subtitle": "Some schemes are area-specific",
  "flow.next": "Next",
  "flow.previous": "Previous",
  "flow.findMySchemes": "Find My Schemes",
  "flow.skip": "Skip",
  "flow.privacy.title": "Your privacy matters",
  "flow.privacy.text":
    "You don't need to upload documents or provide government ID to discover schemes. The information you enter is used only to find potentially relevant schemes.",
  "flow.step": "Step",
  "flow.of": "of",

  // ── Results ────────────────────────────────────────────────────────────
  "results.title": "We found schemes that may be relevant to you",
  "results.count": "potentially relevant schemes",
  "results.noResults": "No matching schemes found",
  "results.noResultsText":
    "Try adjusting your search criteria or browse all available schemes.",
  "results.filter.all": "All",
  "results.filter.central": "Central",
  "results.filter.state": "State",
  "results.filter.strongMatch": "Strong Match",
  "results.sort.bestMatch": "Best Match",
  "results.sort.recentlyVerified": "Recently Verified",
  "results.sort.governmentLevel": "Government Level",
  "results.sort.category": "Category",
  "results.whyThisAppeared": "Why this appeared for you",
  "results.viewScheme": "View Scheme",
  "results.officialApplication": "Official Application",
  "results.compare": "Compare",
  "results.compareSelected": "Compare Selected",
  "results.clearSelection": "Clear Selection",
  "results.selectToCompare": "Select up to 3 schemes to compare",

  // ── Match Badges ──────────────────────────────────────────────────────
  "match.strong": "Strong Match",
  "match.potential": "Potential Match",
  "match.needsVerification": "Needs Verification",
  "match.disclaimer":
    "Final eligibility is determined by the concerned government department.",

  // ── Scheme Detail ─────────────────────────────────────────────────────
  "scheme.about": "About the Scheme",
  "scheme.whoCan": "Who Can Benefit?",
  "scheme.eligibility": "Eligibility",
  "scheme.benefits": "Benefits",
  "scheme.documents": "Documents Generally Required",
  "scheme.documentsDisclaimer":
    "Requirements may vary. Check the official portal before applying.",
  "scheme.howToApply": "How to Apply",
  "scheme.applyOnPortal": "Apply on Official Government Portal",
  "scheme.leavingNotice":
    "Leaving SchemeSaathi and opening the official government website.",
  "scheme.officialSource": "Official Source",
  "scheme.department": "Department",
  "scheme.lastVerified": "Last Verified",
  "scheme.verificationStatus": "Verification Status",
  "scheme.status.verified": "Verified",
  "scheme.status.needsVerification": "Verification Required",
  "scheme.status.outdated": "Information May Be Outdated",
  "scheme.whyThisScheme": "Why are you seeing this scheme?",
  "scheme.whyDisclaimer":
    "Some eligibility conditions may require verification on the official portal.",
  "scheme.reportIssue": "Report incorrect information",

  // ── How It Works ──────────────────────────────────────────────────────
  "howItWorks.title": "How It Works",
  "howItWorks.subtitle":
    "We don't replace government portals. We help you reach the right one.",
  "howItWorks.step1.title": "Tell us what describes you",
  "howItWorks.step1.text":
    "Age, state, occupation and other optional eligibility parameters.",
  "howItWorks.step2.title": "Discover relevant schemes",
  "howItWorks.step2.text":
    "Our matching system identifies schemes that may fit your profile.",
  "howItWorks.step3.title": "Understand before applying",
  "howItWorks.step3.text":
    "See benefits, eligibility, documents and why the scheme appeared.",
  "howItWorks.step4.title": "Apply directly",
  "howItWorks.step4.text": "Go to the official government portal.",

  // ── Trust Section ─────────────────────────────────────────────────────
  "trust.title": "Built Around Transparency",
  "trust.privacy.title": "Privacy First",
  "trust.privacy.text":
    "No Aadhaar or document upload required for scheme discovery.",
  "trust.sources.title": "Official Sources",
  "trust.sources.text":
    "We prioritize official government sources and application portals.",
  "trust.transparent.title": "Transparent Matching",
  "trust.transparent.text":
    "We explain why a scheme appeared in your results.",
  "trust.direct.title": "Direct Application",
  "trust.direct.text":
    "Applications happen on the relevant official government portal.",
  "trust.noPromises.title": "No False Promises",
  "trust.noPromises.text":
    "We never guarantee eligibility or approval.",

  // ── About ─────────────────────────────────────────────────────────────
  "about.title": "What is SchemeSaathi?",
  "about.intro":
    "SchemeSaathi is an independent third-party platform designed to make government scheme discovery simpler and more accessible.",

  // ── Privacy ───────────────────────────────────────────────────────────
  "privacy.title": "Privacy Policy",

  // ── Disclaimer ────────────────────────────────────────────────────────
  "disclaimer.title": "Disclaimer",

  // ── Report ────────────────────────────────────────────────────────────
  "report.title": "Report Incorrect Information",
  "report.scheme": "Scheme",
  "report.reason": "What appears incorrect?",
  "report.explanation": "Optional explanation",
  "report.submit": "Submit Report",
  "report.success": "Thank you for your report. We will review the information.",
  "report.reasons.brokenLink": "Broken official link",
  "report.reasons.eligibilityChanged": "Eligibility changed",
  "report.reasons.inactive": "Scheme appears inactive",
  "report.reasons.incorrectInfo": "Incorrect information",
  "report.reasons.deadlineChanged": "Deadline changed",
  "report.reasons.other": "Other",

  // ── Search ────────────────────────────────────────────────────────────
  "search.askOwnWords": "Ask in your own words",
  "search.placeholder":
    "I'm a 21-year-old student from Bihar looking for scholarships.",
  "search.voiceUnsupported":
    "Voice search is not supported in this browser. Please use text search.",
  "search.examples": "Try searching for:",

  // ── Comparison ────────────────────────────────────────────────────────
  "compare.title": "Compare Schemes",
  "compare.government": "Government",
  "compare.category": "Category",
  "compare.benefit": "Key Benefits",
  "compare.incomeCondition": "Income Condition",
  "compare.ageCondition": "Age Condition",
  "compare.application": "Application",

  // ── Common ────────────────────────────────────────────────────────────
  "common.loading": "Loading...",
  "common.error": "Something went wrong",
  "common.retry": "Retry",
  "common.back": "Back",
  "common.close": "Close",
  "common.learnMore": "Learn More",
  "common.viewAll": "View All",
  "common.central": "Central Government",
  "common.state": "State Government",
};

const hi: Translations = {
  "site.name": "SchemeSaathi",
  "site.subtitle": "सरकारी लाभ खोज",
  "site.tagline": "अपने लाभ खोजें। विश्वास के साथ आवेदन करें।",
  "site.description":
    "अपनी पात्रता के आधार पर केंद्र और राज्य सरकार की योजनाएं खोजें — दस्तावेज़ अपलोड किए बिना।",
  "site.disclaimer":
    "SchemeSaathi एक सरकारी वेबसाइट नहीं है। हम नागरिकों को सरकारी योजनाओं की खोज में मदद करते हैं और आवेदन के लिए उन्हें आधिकारिक सरकारी पोर्टल पर निर्देशित करते हैं।",
  "site.independentPlatform": "स्वतंत्र तृतीय-पक्ष प्लेटफ़ॉर्म",
  "site.footerDisclaimer":
    "SchemeSaathi एक स्वतंत्र तृतीय-पक्ष प्लेटफ़ॉर्म है और यह कोई सरकारी वेबसाइट नहीं है।",
  "site.footerDescription": "स्वतंत्र सरकारी लाभ खोज प्लेटफ़ॉर्म",

  "nav.home": "होम",
  "nav.findSchemes": "योजनाएं खोजें",
  "nav.categories": "श्रेणियां",
  "nav.centralSchemes": "केंद्रीय योजनाएं",
  "nav.stateSchemes": "राज्य योजनाएं",
  "nav.howItWorks": "कैसे काम करता है",
  "nav.about": "हमारे बारे में",
  "nav.privacy": "गोपनीयता",
  "nav.disclaimer": "अस्वीकरण",
  "nav.reportIssue": "गलत जानकारी की रिपोर्ट करें",
  "nav.contact": "संपर्क",

  "hero.title": "आपके लिए बने सरकारी लाभ खोजें",
  "hero.subtitle":
    "अपनी आयु, राज्य, व्यवसाय, आय सीमा, शिक्षा और अन्य पात्रता कारकों के आधार पर केंद्र और राज्य सरकार की योजनाएं खोजें — दस्तावेज़ अपलोड किए बिना।",
  "hero.cta.findSchemes": "मेरे लिए योजनाएं खोजें",
  "hero.cta.browseAll": "सभी योजनाएं देखें",
  "hero.search.placeholder": "योजना, लाभ या आवश्यकता खोजें...",
  "hero.trust.noDocUpload": "खोज के लिए कोई दस्तावेज़ अपलोड आवश्यक नहीं",
  "hero.trust.officialPortals": "आधिकारिक सरकारी पोर्टल के माध्यम से सीधे आवेदन करें",
  "hero.trust.independent": "स्वतंत्र तृतीय-पक्ष प्लेटफ़ॉर्म",

  "categories.title": "आपको किस मदद की जरूरत है?",
  "categories.subtitle":
    "प्रासंगिक सरकारी लाभ खोजने के लिए श्रेणी के अनुसार योजनाएं ब्राउज़ करें।",

  "flow.title": "मेरे लिए योजनाएं खोजें",
  "flow.step1.title": "आपका सबसे अच्छा वर्णन क्या करता है?",
  "flow.step1.subtitle": "एक या अधिक चुनें जो लागू हों",
  "flow.step2.title": "आप किस राज्य में रहते हैं?",
  "flow.step2.subtitle": "अपना राज्य या केंद्र शासित प्रदेश चुनें",
  "flow.step3.title": "आपकी आयु",
  "flow.step3.subtitle": "अपनी वर्तमान आयु दर्ज करें",
  "flow.step4.title": "शिक्षा स्तर",
  "flow.step4.subtitle": "अपना उच्चतम शिक्षा स्तर चुनें",
  "flow.step5.title": "सामाजिक श्रेणी",
  "flow.step5.subtitle": "यह श्रेणी-विशिष्ट योजनाओं से मिलान करने में मदद करता है",
  "flow.step6.title": "लिंग",
  "flow.step6.subtitle": "कुछ योजनाएं विशिष्ट लिंगों के लिए बनाई गई हैं",
  "flow.step7.title": "अनुमानित वार्षिक पारिवारिक आय",
  "flow.step7.subtitle": "निकटतम सीमा चुनें",
  "flow.step8.title": "दिव्यांगता",
  "flow.step8.subtitle": "दिव्यांगजनों के लिए विशिष्ट योजनाएं हैं",
  "flow.step9.title": "ग्रामीण या शहरी",
  "flow.step9.subtitle": "कुछ योजनाएं क्षेत्र-विशिष्ट हैं",
  "flow.next": "अगला",
  "flow.previous": "पिछला",
  "flow.findMySchemes": "मेरी योजनाएं खोजें",
  "flow.skip": "छोड़ें",
  "flow.privacy.title": "आपकी गोपनीयता मायने रखती है",
  "flow.privacy.text":
    "योजनाएं खोजने के लिए आपको दस्तावेज़ अपलोड करने या सरकारी आईडी प्रदान करने की आवश्यकता नहीं है। आपके द्वारा दर्ज की गई जानकारी का उपयोग केवल संभावित रूप से प्रासंगिक योजनाएं खोजने के लिए किया जाता है।",
  "flow.step": "चरण",
  "flow.of": "का",

  "results.title": "हमें आपके लिए प्रासंगिक योजनाएं मिलीं",
  "results.count": "संभावित रूप से प्रासंगिक योजनाएं",
  "results.noResults": "कोई मेल खाती योजना नहीं मिली",
  "results.noResultsText":
    "अपने खोज मानदंड को समायोजित करें या सभी उपलब्ध योजनाएं ब्राउज़ करें।",
  "results.filter.all": "सभी",
  "results.filter.central": "केंद्रीय",
  "results.filter.state": "राज्य",
  "results.filter.strongMatch": "मजबूत मिलान",
  "results.sort.bestMatch": "सर्वश्रेष्ठ मिलान",
  "results.sort.recentlyVerified": "हाल ही में सत्यापित",
  "results.sort.governmentLevel": "सरकार स्तर",
  "results.sort.category": "श्रेणी",
  "results.whyThisAppeared": "यह आपके लिए क्यों दिखाई दिया",
  "results.viewScheme": "योजना देखें",
  "results.officialApplication": "आधिकारिक आवेदन",
  "results.compare": "तुलना करें",
  "results.compareSelected": "चयनित की तुलना करें",
  "results.clearSelection": "चयन साफ़ करें",
  "results.selectToCompare": "तुलना करने के लिए 3 योजनाएं तक चुनें",

  "match.strong": "मजबूत मिलान",
  "match.potential": "संभावित मिलान",
  "match.needsVerification": "सत्यापन आवश्यक",
  "match.disclaimer":
    "अंतिम पात्रता संबंधित सरकारी विभाग द्वारा निर्धारित की जाती है।",

  "scheme.about": "योजना के बारे में",
  "scheme.whoCan": "कौन लाभ उठा सकता है?",
  "scheme.eligibility": "पात्रता",
  "scheme.benefits": "लाभ",
  "scheme.documents": "आमतौर पर आवश्यक दस्तावेज़",
  "scheme.documentsDisclaimer":
    "आवश्यकताएं भिन्न हो सकती हैं। आवेदन करने से पहले आधिकारिक पोर्टल देखें।",
  "scheme.howToApply": "आवेदन कैसे करें",
  "scheme.applyOnPortal": "आधिकारिक सरकारी पोर्टल पर आवेदन करें",
  "scheme.leavingNotice":
    "SchemeSaathi छोड़कर आधिकारिक सरकारी वेबसाइट खोल रहे हैं।",
  "scheme.officialSource": "आधिकारिक स्रोत",
  "scheme.department": "विभाग",
  "scheme.lastVerified": "अंतिम सत्यापन",
  "scheme.verificationStatus": "सत्यापन स्थिति",
  "scheme.status.verified": "सत्यापित",
  "scheme.status.needsVerification": "सत्यापन आवश्यक",
  "scheme.status.outdated": "जानकारी पुरानी हो सकती है",
  "scheme.whyThisScheme": "आप यह योजना क्यों देख रहे हैं?",
  "scheme.whyDisclaimer":
    "कुछ पात्रता शर्तों के लिए आधिकारिक पोर्टल पर सत्यापन आवश्यक हो सकता है।",
  "scheme.reportIssue": "गलत जानकारी की रिपोर्ट करें",

  "howItWorks.title": "यह कैसे काम करता है",
  "howItWorks.subtitle":
    "हम सरकारी पोर्टल की जगह नहीं लेते। हम आपको सही पोर्टल तक पहुंचने में मदद करते हैं।",
  "howItWorks.step1.title": "बताएं कि आपका वर्णन क्या करता है",
  "howItWorks.step1.text": "आयु, राज्य, व्यवसाय और अन्य वैकल्पिक पात्रता पैरामीटर।",
  "howItWorks.step2.title": "प्रासंगिक योजनाएं खोजें",
  "howItWorks.step2.text":
    "हमारी मिलान प्रणाली उन योजनाओं की पहचान करती है जो आपकी प्रोफ़ाइल से मेल खा सकती हैं।",
  "howItWorks.step3.title": "आवेदन करने से पहले समझें",
  "howItWorks.step3.text":
    "लाभ, पात्रता, दस्तावेज़ और योजना क्यों दिखाई दी, देखें।",
  "howItWorks.step4.title": "सीधे आवेदन करें",
  "howItWorks.step4.text": "आधिकारिक सरकारी पोर्टल पर जाएं।",

  "trust.title": "पारदर्शिता पर निर्मित",
  "trust.privacy.title": "गोपनीयता प्रथम",
  "trust.privacy.text": "योजना खोज के लिए कोई आधार या दस्तावेज़ अपलोड आवश्यक नहीं।",
  "trust.sources.title": "आधिकारिक स्रोत",
  "trust.sources.text": "हम आधिकारिक सरकारी स्रोतों और आवेदन पोर्टल को प्राथमिकता देते हैं।",
  "trust.transparent.title": "पारदर्शी मिलान",
  "trust.transparent.text": "हम बताते हैं कि कोई योजना आपके परिणामों में क्यों दिखाई दी।",
  "trust.direct.title": "सीधा आवेदन",
  "trust.direct.text": "आवेदन संबंधित आधिकारिक सरकारी पोर्टल पर होता है।",
  "trust.noPromises.title": "कोई झूठे वादे नहीं",
  "trust.noPromises.text": "हम कभी भी पात्रता या स्वीकृति की गारंटी नहीं देते।",

  "about.title": "SchemeSaathi क्या है?",
  "about.intro":
    "SchemeSaathi एक स्वतंत्र तृतीय-पक्ष प्लेटफ़ॉर्म है जो सरकारी योजना खोज को सरल और अधिक सुलभ बनाने के लिए डिज़ाइन किया गया है।",

  "privacy.title": "गोपनीयता नीति",

  "disclaimer.title": "अस्वीकरण",

  "report.title": "गलत जानकारी की रिपोर्ट करें",
  "report.scheme": "योजना",
  "report.reason": "क्या गलत प्रतीत होता है?",
  "report.explanation": "वैकल्पिक स्पष्टीकरण",
  "report.submit": "रिपोर्ट जमा करें",
  "report.success": "आपकी रिपोर्ट के लिए धन्यवाद। हम जानकारी की समीक्षा करेंगे।",
  "report.reasons.brokenLink": "टूटा आधिकारिक लिंक",
  "report.reasons.eligibilityChanged": "पात्रता बदल गई",
  "report.reasons.inactive": "योजना निष्क्रिय प्रतीत होती है",
  "report.reasons.incorrectInfo": "गलत जानकारी",
  "report.reasons.deadlineChanged": "समय सीमा बदल गई",
  "report.reasons.other": "अन्य",

  "search.askOwnWords": "अपने शब्दों में पूछें",
  "search.placeholder":
    "मैं बिहार से 21 साल का छात्र हूं, छात्रवृत्ति की तलाश में।",
  "search.voiceUnsupported":
    "इस ब्राउज़र में वॉइस सर्च समर्थित नहीं है। कृपया टेक्स्ट सर्च का उपयोग करें।",
  "search.examples": "खोजने का प्रयास करें:",

  "compare.title": "योजनाओं की तुलना करें",
  "compare.government": "सरकार",
  "compare.category": "श्रेणी",
  "compare.benefit": "मुख्य लाभ",
  "compare.incomeCondition": "आय शर्त",
  "compare.ageCondition": "आयु शर्त",
  "compare.application": "आवेदन",

  "common.loading": "लोड हो रहा है...",
  "common.error": "कुछ गलत हो गया",
  "common.retry": "पुनः प्रयास करें",
  "common.back": "वापस",
  "common.close": "बंद करें",
  "common.learnMore": "और जानें",
  "common.viewAll": "सभी देखें",
  "common.central": "केंद्र सरकार",
  "common.state": "राज्य सरकार",
};

const translations: Record<Language, Translations> = { en, hi };

export function t(key: string, lang: Language = "en"): string {
  return translations[lang]?.[key] || translations.en[key] || key;
}

export function getSchemeField(
  scheme: { [key: string]: unknown },
  field: string,
  lang: Language
): unknown {
  if (lang === "hi") {
    const hiField = `${field}Hi`;
    if (scheme[hiField]) return scheme[hiField];
  }
  return scheme[field];
}
