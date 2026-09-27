import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type Language = 'en' | 'am';

export const TRANSLATIONS = {
  en: {
    // Navbar
    nav_services: 'Services',
    nav_tools: 'Estimator & Tracker',
    nav_about: 'About',
    nav_pricing: 'Pricing',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    nav_book_now: 'Book Now',

    // Hero
    hero_badge: 'ARBA MINCH\'S PREMIER TECH HUB',
    hero_title_1: 'Every PC Problem.',
    hero_title_2: 'Perfectly Fixed.',
    hero_subtitle: 'Hardware & software expertise built on radical transparency, 24-hour turnarounds, and a no-fix, no-fee guarantee — right here in Arba Minch.',
    hero_cta_book: 'Book Free Diagnosis',
    hero_cta_explore: 'Explore Services',
    hero_trusted: 'Trusted by 500+ customers in Arba Minch',
    hero_success_rate: 'Success rate',

    // Stats
    stat_devices: 'Devices Repaired',
    stat_success: 'Success Rate',
    stat_turnaround: 'Avg. Turnaround',
    stat_rating: 'Customer Rating',

    // Services
    services_badge: 'What We Do',
    services_title_1: 'Expert Repairs,',
    services_title_2: 'Every Single Time',
    services_desc: 'From hardware diagnostics to complete system restores — we bring precision, speed, and 100% transparency to every device.',
    services_btn: 'Book Service',

    // Tools
    tools_badge: 'Interactive Tools',
    tools_title_1: 'Instant Estimate &',
    tools_title_2: 'Live Repair Tracker',
    tools_desc: 'Calculate your repair price in seconds or check the live progress of your device in repair.',
    tools_tab_estimator: 'Price Estimator',
    tools_tab_tracker: 'Track Repair Status',

    // About
    about_badge: 'OUR PROMISE',
    about_title_1: 'Built on Trust.',
    about_title_2: 'Delivered with Precision.',
    about_desc: 'We believe in total transparency. Every repair starts with a free diagnosis, a clear written estimate, and your full approval — before we touch anything. No hidden fees, ever.',
    about_item_1: 'Free diagnosis before any work starts',
    about_item_2: 'Written estimate — you approve everything',
    about_item_3: 'No fix, no fee — guaranteed',
    about_item_4: '30-day warranty on all repairs',

    // Pricing
    pricing_badge: 'Pricing',
    pricing_title_1: 'Simple,',
    pricing_title_2: 'Transparent',
    pricing_title_3: 'Pricing',
    pricing_desc: 'No surprises. No hidden fees. You only pay if we fix your device.',

    // Testimonials
    test_badge: 'Customer Stories',
    test_title_1: 'Real People.',
    test_title_2: 'Real Results.',
    test_desc: 'Don\'t just take our word for it — hear what local device owners say about Abule Maintenance.',

    // FAQ
    faq_badge: 'FAQ',
    faq_title_1: 'Common',
    faq_title_2: 'Questions',

    // Contact
    contact_badge: 'Get In Touch',
    contact_title_1: 'Book Your',
    contact_title_2: 'Free Diagnosis',
    contact_desc: 'We are based in Arba Minch. Book online or reach us directly.',
    contact_name_ph: 'Your Full Name',
    contact_phone_ph: 'Phone Number (e.g. 0911...)',
    contact_device_ph: 'Select Device Type',
    contact_issue_ph: 'Describe the issue (e.g. laptop won\'t turn on, blue screen, screen broken...)',
    contact_submit: 'Submit & Send on WhatsApp',
    contact_sending: 'Connecting to WhatsApp...',
    contact_sent: '✓ Thank you! Redirecting to WhatsApp...',

    // CTA
    cta_badge: 'Free Diagnosis Available Now',
    cta_title_1: 'Is Your PC',
    cta_title_2: 'Letting You Down?',
    cta_desc: 'Get a free diagnosis today. No commitment, no surprises — just real answers and fast solutions.',
    cta_btn_book: 'Book Free Diagnosis',
    cta_btn_wa: 'Chat on WhatsApp',
  },

  am: {
    // Navbar
    nav_services: 'አገልግሎቶች',
    nav_tools: 'የዋጋ ተማኔ እና መከታተያ',
    nav_about: 'ስለ እኛ',
    nav_pricing: 'ዋጋዎች',
    nav_faq: 'ጥያቄዎች',
    nav_contact: 'አድራሻ',
    nav_book_now: 'አሁኑኑ ይዘዙ',

    // Hero
    hero_badge: 'የአርባ ምንጭ ቁጥር 1 የቴክኖሎጂ ማዕከል',
    hero_title_1: ' የማንኛውም ኮምፒውተር ችግር።',
    hero_title_2: 'በጥራት ይጠገናል::',
    hero_subtitle: 'በግልጽነት፣ በ24 ሰዓት ፈጣን ጥገና እና ካልተጠበነ ምንም አይከፍሉም ዋስትና የተደገፈ የሃርድዌር እና ሶፍትዌር ጥገና — እዚሁ አርባ ምንጭ።',
    hero_cta_book: 'ነፃ ምርመራ ይዘዙ',
    hero_cta_explore: 'አገልግሎቶችን ይመልከቱ',
    hero_trusted: 'ከ500+ በላይ ደንበኞች በላቀ እርካታ የተገለገሉበት',
    hero_success_rate: 'የስኬት መጠን',

    // Stats
    stat_devices: 'የተጠገኑ ኮምፒውተሮች',
    stat_success: 'የጥገና ስኬት መጠን',
    stat_turnaround: 'አማካይ የጥገና ጊዜ',
    stat_rating: 'የደንበኞች አስተያየት',

    // Services
    services_badge: 'አገልግሎቶቻችን',
    services_title_1: 'የላቀ የጥገና ሙያ፣',
    services_title_2: 'ሁልጊዜም በጥራት',
    services_desc: 'ከሃርድዌር ምርመራ እስከ ሙሉ የሲስተም እድሳት — ለእያንዳንዱ መሳሪያ ፈጣን እና ታማኝ ጥገና እንሰጣለን።',
    services_btn: 'ጥገና ይዘዙ',

    // Tools
    tools_badge: 'የጥገና መሳሪያዎች',
    tools_title_1: 'የዋጋ ግምት እና',
    tools_title_2: 'የጥገና ሁኔታ መከታተያ',
    tools_desc: 'የጥገና ዋጋዎን በሰከንዶች ውስጥ ያሰሉ ወይም የተሰጠዎትን የጥገና ቲኬት ቁጥር በመጠቀም ያሉበትን ደረጃ ይከታተሉ።',
    tools_tab_estimator: 'የዋጋ ማሰያ',
    tools_tab_tracker: 'የጥገና ሁኔታ መከታተያ',

    // About
    about_badge: 'ቃላችን',
    about_title_1: 'በእምነት የተገነባ።',
    about_title_2: 'በጥራት የተከናወነ።',
    about_desc: 'እያንዳንዱ ጥገና በነፃ ምርመራ እና ግልጽ በሆነ የዋጋ ስምምነት ይጀምራል። ካልተጠገነ ምንም አይከፍሉም።',
    about_item_1: 'ስራ ከመጀመሩ በፊት ነፃ ምርመራ',
    about_item_2: 'በጽሁፍ የቀረበ ግልፅ የዋጋ ግምት',
    about_item_3: 'ካልተጠገነ ምንም አይከፍሉም',
    about_item_4: 'ለ30 ቀናት የሚቆይ ዋስትና',

    // Pricing
    pricing_badge: 'ዋጋዎች',
    pricing_title_1: 'ቀላል እና',
    pricing_title_2: 'ግልጽ',
    pricing_title_3: 'የጥገና ዋጋዎች',
    pricing_desc: 'ምንም አይነት ድብቅ ክፍያ የለም። የምትከፍሉት መሳሪያዎ ሲጠገን ብቻ ነው።',

    // Testimonials
    test_badge: 'የደንበኞች አስተያየት',
    test_title_1: 'እውነተኛ ደንበኞች።',
    test_title_2: 'እውነተኛ ውጤቶች።',
    test_desc: 'ስለ አቡሌ ቴክኖሎጂ የአርባ ምንጭ ከተማ ደንበኞች የተናገሩትን ያንብቡ።',

    // FAQ
    faq_badge: 'ተደጋጋሚ ጥያቄዎች',
    faq_title_1: 'የተለመዱ',
    faq_title_2: 'ጥያቄዎች',

    // Contact
    contact_badge: 'ያግኙን',
    contact_title_1: 'ነፃ ምርመራዎን',
    contact_title_2: 'አሁኑኑ ይዘዙ',
    contact_desc: 'አድራሻችን አርባ ምንጭ ነው። በኦንላይን ወይም በቀጥታ ያግኙን።',
    contact_name_ph: 'ሙሉ ስምዎን ያስገቡ',
    contact_phone_ph: 'ስልክ ቁጥር (ምሳሌ፡ 0911...)',
    contact_device_ph: 'የመሳሪያውን አይነት ይምረጡ',
    contact_issue_ph: 'የችግሩን አይነት ይግለጹ (ምሳሌ፡ ላፕቶፕ አይበራም፣ ስክሪን ተሰብሯል...)',
    contact_submit: 'በዋትሳፕ (WhatsApp) ይላኩ',
    contact_sending: 'ወደ ዋትሳፕ በመገናኘት ላይ...',
    contact_sent: '✓ እናመሰግናለን! ወደ ዋትሳፕ በመዛወር ላይ...',

    // CTA
    cta_badge: 'ነፃ ምርመራ አሁኑኑ ያግኙ',
    cta_title_1: 'ኮምፒውተርዎ',
    cta_title_2: 'ቸግሮዎታል?',
    cta_desc: 'ዛሬውኑ ነፃ ምርመራ ያግኙ። ምንም አይነት ድብቅ ክፍያ የለም — ፈጣን እና ታማኝ ጥገና።',
    cta_btn_book: 'ነፃ ምርመራ ይዘዙ',
    cta_btn_wa: 'በዋትሳፕ ያውሩን',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof TRANSLATIONS['en']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('abule_lang');
    return (saved === 'am' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('abule_lang', lang);
  };

  const t = (key: keyof typeof TRANSLATIONS['en']): string => {
    return TRANSLATIONS[language][key] || TRANSLATIONS['en'][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
