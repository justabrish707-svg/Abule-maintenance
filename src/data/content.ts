// Static content configuration for services, testimonials, pricing, faqs, and stats
export const SERVICES = [
  {
    id: 'hardware',
    icon: '🖥️',
    title: 'Hardware Diagnosis & Repair',
    description: 'From motherboard failures to power supply issues — we identify root causes fast with professional diagnostic tools.',
  },
  {
    id: 'data-recovery',
    icon: '💾',
    title: 'Data Recovery',
    description: 'Lost files? Corrupted drives? We recover your precious data from HDDs, SSDs, and flash drives with industry-grade tools.',
  },
  {
    id: 'software',
    icon: '⚙️',
    title: 'Software & OS Repair',
    description: 'Windows crashes, boot loops, driver conflicts — fixed cleanly. We reinstall, optimize, and configure your OS to run like new.',
  },
  {
    id: 'networking',
    icon: '📡',
    title: 'Network Setup',
    description: 'Professional WiFi and LAN configuration for homes and offices. Get a fast, secure, and reliable connection.',
  },
  {
    id: 'upgrade',
    icon: '🚀',
    title: 'PC Upgrades',
    description: 'RAM, SSD, GPU — we recommend and install the right upgrades to breathe new life into your machine.',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    stars: 5,
    category: 'data',
    text: '"Abule Tech recovered my entire thesis project from a dead hard drive. I was in tears. They saved my academic year. Absolute professionals."',
    name: 'Hirut Bekele',
    role: 'University Student',
    initials: 'HB',
  },
  {
    id: 2,
    stars: 5,
    category: 'hardware',
    text: '"My shop PC was completely down. Abule fixed it within 4 hours and even optimized the whole system. Best PC repair in Arba Minch, hands down."',
    name: 'Dawit Tesfaye',
    role: 'Business Owner',
    initials: 'DT',
  },
  {
    id: 3,
    stars: 5,
    category: 'software',
    text: '"Transparent pricing, fast work, and they explained everything clearly. I finally understand what was wrong with my laptop. Highly recommend!"',
    name: 'Yonas Girma',
    role: 'Freelancer',
    initials: 'YG',
  },
  {
    id: 4,
    stars: 5,
    category: 'hardware',
    text: '"My MacBook had a short circuit on the motherboard. Local shops said it was trash. Abule micro-soldered it back to life! Saved me over $1,000."',
    name: 'Amare Mamo',
    role: 'Software Developer',
    initials: 'AM',
  },
  {
    id: 5,
    stars: 5,
    category: 'data',
    text: '"Recovered 5 years of family photos from a corrupted SD card. Fast, honest, and very reasonable pricing. I am forever grateful."',
    name: 'Tigist Alemu',
    role: 'Photographer',
    initials: 'TA',
  },
  {
    id: 6,
    stars: 5,
    category: 'software',
    text: '"Full OS reinstall and malware cleanup done in less than 3 hours. My slow workstation runs smoother than when I first bought it!"',
    name: 'Biniyam Worku',
    role: 'Graphic Designer',
    initials: 'BW',
  },
];

export const PRICING = [
  {
    id: 'basic',
    name: 'Diagnosis',
    price: 'Free',
    description: 'Know exactly what is wrong before you commit.',
    features: ['Full hardware scan', 'Software audit', 'Repair estimate', 'No obligation'],
    featured: false,
    cta: 'Book Free Check',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '500 ETB',
    description: 'Most common repairs, handled quickly.',
    features: ['OS reinstall & config', 'Driver & update fixes', 'Virus removal', 'Performance tune-up', '7-day warranty'],
    featured: true,
    cta: 'Get Started',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '1,200 ETB',
    description: 'Complex hardware jobs and data recovery.',
    features: ['Advanced hardware repair', 'Data recovery (HDD/SSD)', 'Component replacement', 'Full system rebuild', '30-day warranty'],
    featured: false,
    cta: 'Book Premium',
  },
];

export const FAQS = [
  { q: 'How long does a typical repair take?', a: 'Most repairs are completed within 24–48 hours. Complex hardware jobs or data recovery may take 2–3 days. We will always give you a clear timeline upfront.' },
  { q: 'Do you offer a warranty on repairs?', a: 'Yes. Standard repairs come with a 7-day warranty and Premium repairs come with a 30-day warranty. If the same issue recurs, we fix it for free.' },
  { q: 'Is the diagnosis really free?', a: 'Absolutely. We diagnose your device at no cost and provide a full written quote. You only pay if you decide to proceed with the repair.' },
  { q: 'Do you repair laptops as well?', a: 'Yes! We repair both desktops and laptops, including all major brands: HP, Dell, Lenovo, Asus, Acer, and more.' },
  { q: 'Can you recover data from a physically damaged drive?', a: 'We handle most physical and logical data recovery cases. Success depends on the severity of damage, but we will be transparent about the chances before starting.' },
];

export const STATS = [
  { num: '500+', label: 'Devices Repaired' },
  { num: '98%', label: 'Success Rate' },
  { num: '24h', label: 'Avg. Turnaround' },
  { num: '4.9★', label: 'Customer Rating' },
];
