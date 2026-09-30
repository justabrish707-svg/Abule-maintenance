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
    hero_badge: "ARBA MINCH'S PREMIER TECH HUB",
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
    tools_title_2: 'Live Status Tracker',
    tools_desc: 'Calculate your repair price in seconds or check the real-time repair progress of your device.',
    tools_tab_estimator: '🧮 Price Estimator',
    tools_tab_tracker: '🔎 Track Repair Status',
    tools_select_device: '1. Select Device',
    tools_select_issue: '2. Select Primary Issue',
    tools_est_summary: 'Estimated Price Summary',
    tools_turnaround: 'Turnaround:',
    tools_perk_1: 'Free written estimate before work starts',
    tools_perk_2: 'No-Fix, No-Fee Guarantee',
    tools_perk_3: '30-Day warranty on parts & repair',
    tools_book_telegram: '✈️ Book This Estimate on Telegram',
    tools_book_form: '📝 Pre-fill Contact Form Below',
    tools_search_ph: 'Enter Ticket ID (e.g. AB-4801)',
    tools_search_btn: 'Track 🔎',
    tools_searching: 'Searching...',
    tools_demo_tickets: 'Try Demo Tickets:',
    tools_ticket_not_found: 'No ticket found for "{query}". Please check your ticket ID.',
    tools_ticket_owner: 'Owner:',
    tools_ticket_updated: 'Updated Recently',
    tools_ticket_issue: '📝 Reported Issue:',

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
    test_desc: "Don't just take our word for it — hear what local device owners say about Abule Maintenance.",

    // FAQ
    faq_badge: 'FAQ',
    faq_title_1: 'Common',
    faq_title_2: 'Questions',

    // Contact
    contact_badge: 'Get In Touch',
    contact_title_1: 'Book Your',
    contact_title_2: 'Free Diagnosis',
    contact_desc: 'We are based in Arba Minch. Book online or reach us directly.',
    contact_direct_channels: 'Direct Channels',
    contact_schedule_title: 'Schedule Diagnosis',
    contact_name_ph: 'Your Full Name',
    contact_phone_ph: 'Phone Number (e.g. 0911...)',
    contact_device_ph: 'Select Device Type',
    contact_issue_ph: "Describe the issue (e.g. laptop won't turn on, blue screen, screen broken...)",
    contact_submit: 'Submit & Send on Telegram',
    contact_sending: 'Connecting to Telegram...',
    contact_sent: '✓ Thank you! Opening Telegram...',
    contact_rate_wait: '⏳ Please wait {sec}s before sending another request.',

    // Footer
    footer_ticker: 'Currently accepting new repairs in Arba Minch — average 24h turnaround.',
    footer_desc: "Arba Minch's most trusted PC repair & maintenance service. Fast, transparent, and guaranteed.",
    footer_rights: 'Abule Tech. All rights reserved.',
    footer_location: 'Made in Arba Minch, Ethiopia',

    // CTA
    cta_badge: 'Free Diagnosis Available Now',
    cta_title_1: 'Is Your PC',
    cta_title_2: 'Letting You Down?',
    cta_desc: 'Get a free diagnosis today. No commitment, no surprises — just real answers and fast solutions.',
    cta_btn_book: 'Book Free Diagnosis',
    cta_btn_wa: 'Chat on Telegram',
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
    hero_title_1: ' የማንኛውም ኮምፒውተር ችግር',
    hero_title_2: 'በጥራት ይጠገናል!',
    hero_subtitle: 'በግልጽነት፣ በ24 ሰዓት ፈጣን ጥገና እና ካልተጠገነ ምንም አይከፍሉም ዋስትና የተደገፈ የሃርድዌር እና ሶፍትዌር ጥገና — እዚሁ አርባ ምንጭ።',
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
    tools_tab_estimator: '🧮 የዋጋ ማሰያ',
    tools_tab_tracker: '🔎 የጥገና ሁኔታ መከታተያ',
    tools_select_device: '1. መሳሪያ ይምረጡ',
    tools_select_issue: '2. ዋና ችግሩን ይምረጡ',
    tools_est_summary: 'የተገመተ የዋጋ ማጠቃለያ',
    tools_turnaround: 'የሚወስደው ጊዜ:',
    tools_perk_1: 'ስራ ከመጀመሩ በፊት ነፃ የተፃፈ የዋጋ ግምት',
    tools_perk_2: 'ካልተጠገነ ክፍያ የለም',
    tools_perk_3: 'የ30 ቀናት የጥገና እና ዕቃዎች ዋስትና',
    tools_book_telegram: '✈️ ይህንን ግምት በቴሌግራም ይዘዙ',
    tools_book_form: '📝 ቅጹን ከታች ይሙሉ',
    tools_search_ph: 'የቲኬት ቁጥር ያስገቡ (ምሳሌ፡ AB-4801)',
    tools_search_btn: 'ፈልግ 🔎',
    tools_searching: 'በመፈለግ ላይ...',
    tools_demo_tickets: 'የናሙና ቲኬቶችን ይሞክሩ:',
    tools_ticket_not_found: 'ለቲኬት ቁጥር "{query}" ምንም አልተገኘም። እባክዎ ቁጥሩን ያረጋግጡ።',
    tools_ticket_owner: 'ባለቤት:',
    tools_ticket_updated: 'በቅርቡ የተዘመነ',
    tools_ticket_issue: '📝 የተገለፀ ችግር:',

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
    contact_direct_channels: 'የቀጥታ መገናኛዎች',
    contact_schedule_title: 'ምርመራ ይመዝግቡ',
    contact_name_ph: 'ሙሉ ስምዎን ያስገቡ',
    contact_phone_ph: 'ስልክ ቁጥር (ምሳሌ፡ 0911...)',
    contact_device_ph: 'የመሳሪያውን አይነት ይምረጡ',
    contact_issue_ph: 'የችግሩን አይነት ይግለጹ (ምሳሌ፡ ላፕቶፕ አይበራም፣ ስክሪን ተሰብሯል...)',
    contact_submit: 'በቴሌግራም (Telegram) ይላኩ',
    contact_sending: 'ወደ ቴሌግራም በመገናኘት ላይ...',
    contact_sent: '✓ እናመሰግናለን! ወደ ቴሌግራም በመዛወር ላይ...',
    contact_rate_wait: '⏳ እባክዎ ሌላ ከመላክዎ በፊት {sec} ሰከንድ ይጠብቁ።',

    // Footer
    footer_ticker: 'በአርባ ምንጭ አዲስ ጥገናዎችን በመቀበል ላይ እንገኛለን — አማካይ 24 ሰዓት።',
    footer_desc: 'የአርባ ምንጭ ታማኝ የኮምፒውተር ጥገና አገልግሎት። ፈጣን፣ ግልጽ እና ዋስትና ያለው።',
    footer_rights: 'አቡሌ ቴክ። መብቱ በሕግ የተጠበቀ ነው።',
    footer_location: 'አርባ ምንጭ፣ ኢትዮጵያ',

    // CTA
    cta_badge: 'ነፃ ምርመራ አሁኑኑ ያግኙ',
    cta_title_1: 'ኮምፒውተርዎ',
    cta_title_2: 'ቸግሮዎታል?',
    cta_desc: 'ዛሬውኑ ነፃ ምርመራ ያግኙ። ምንም አይነት ድብቅ ክፍያ የለም — ፈጣን እና ታማኝ ጥገና።',
    cta_btn_book: 'ነፃ ምርመራ ይዘዙ',
    cta_btn_wa: 'በቴሌግራም ያውሩን',
  },
} as const;

export type TranslationKey = keyof typeof TRANSLATIONS['en'];
