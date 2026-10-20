import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE, PRODUCTS_HUB, SUPPORT_EMAIL } from '../config/site';
import { blogPosts } from '../data/blog/posts';

const productBase = PRODUCT_BASE;

const productQuickStats = [
  { strong: 'Windows PC', label: 'Platform' },
  { strong: '3', label: 'Plans' },
  { strong: 'USD', label: 'Currency' },
  { strong: 'Worldwide', label: 'Market' },
] as const;

export const en: Translations = {
  site: {
    name: 'Aion 2 Cheats',
    domain: 'getaion2cheats.net',
    title: 'Aion 2 Cheats | Private ESP, Radar & Soft Aim for PC',
    description:
      'Aion 2 cheats for Windows PC — player ESP, flight markers, gathering nodes, 2D radar, and optional soft aim. Weekly, monthly, and lifetime plans on Steam and PURPLE.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: PRODUCTS_HUB, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Aion 2 on Windows PC',
    eyebrow: 'Private Aion 2 cheats',
    titleLine1: 'Aion 2 Cheats',
    titleLine2: 'ESP, Radar & Soft Aim',
    subtitle:
      'Private Aion 2 cheats for Windows PC — player ESP, faction filters, flight markers, gathering nodes, 2D radar, and optional soft aim. Plus HWID Spoofer, UGC tool, and Skin Changer utilities.',
    ctaPrimary: 'Buy now',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Platform',
    modes: ['Steam global PC', 'PURPLE client', 'Windows 10 & 11', 'Intel / AMD'],
    metrics: [...productQuickStats],
  },
  productQuickStats: [...productQuickStats],
  features: {
    eyebrow: 'Cheat features',
    title: 'Aion 2 modules you can inspect',
    subtitle:
      'Player ESP, flight markers, gathering nodes, radar, and soft aim taken from the current product listing—no invented farming bots.',
    items: [
      {
        title: 'Player ESP',
        subtitle: 'Faction, class, and distance',
        desc: 'Read nearby Daevas with nameplates, class, level, faction, distance, and flying state before you commit.',
        bullets: [
          'Box, skeleton, and nameplate readouts',
          'Class, level, and faction filters',
          'Health bar and view-direction cues',
          'Flying or grounded state plus off-screen arrows',
        ],
        tags: ['aion 2 ESP', 'player ESP', 'faction filter'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:min-h-full',
      },
      {
        title: 'Compatibility',
        subtitle: 'Global PC on Windows',
        desc: 'Windows 10 and 11 on the global Steam or PURPLE client. Re-check status after game updates before launching.',
        bullets: ['Windows 10 and 11', 'Steam and PURPLE global PC', 'Review status after patches'],
        tags: ['Windows PC', 'Steam', 'PURPLE'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Soft Aim',
        subtitle: 'Optional targeting help',
        desc: 'Combat option on the listing—leave it off until you confirm current status and accept the extra risk combat modules add.',
        bullets: [
          'Aim key, FOV, and smoothness',
          'Bone selection and visible check',
          'Ignore friendly faction or party',
        ],
        tags: ['aion 2 soft aim', 'aim assist'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Flight Markers',
        subtitle: 'Track aerial targets',
        desc: 'Highlight flying targets, altitude, wing or glide state, and sky contested zones so aerial combat is easier to read.',
        bullets: ['Aerial target ESP', 'Altitude and wing-state readouts', 'Sky contested zone highlights'],
        tags: ['flight ESP', 'aerial markers'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Gathering Nodes',
        subtitle: 'Ore, herbs, and loot',
        desc: 'Node ESP highlights ore, herbs, materials, chests, and loot objects with distance filters.',
        bullets: ['Node ESP with material filters', 'Chest and loot object markers', 'Max world distance filter'],
        tags: ['node ESP', 'gathering'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Radar',
        subtitle: 'Local 2D awareness',
        desc: '2D radar sits next to ESP so you can rotate around nearby players, bosses, and nodes without covering the screen.',
        bullets: ['Player and faction color coding', 'Boss and node markers', 'Adjustable range and zoom'],
        tags: ['aion 2 radar', '2D radar'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Overlay Options',
        subtitle: 'Keep the HUD readable',
        desc: 'Stream-proof overlay, combat mode that hides world ESP, custom crosshair, and color sets keep the interface usable.',
        bullets: ['Stream-proof overlay option', 'Combat mode to hide world ESP', 'Custom crosshair and colors'],
        tags: ['overlay', 'stream-proof'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Configuration',
        subtitle: 'Save what you use',
        desc: 'Custom menu keys, panic keys, and saveable configs keep the overlay readable instead of leaving every toggle on.',
        bullets: ['Custom menu and panic keys', 'Saveable configuration profiles', 'Visible and hidden color sets'],
        tags: ['configs', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'A single-game listing for Aion 2',
    subtitle:
      'Copy, plans, and guides stay on Aion 2 instead of mixing unrelated games into one catalog. Listed features only—ESP, flight markers, nodes, radar, and soft aim.',
    usLabel: 'Aion 2 Cheats',
    otherLabel: 'Typical listing',
    rows: [
      {
        title: 'Aion 2 only',
        desc: 'The catalog, pricing, and guides stay locked to Aion 2 rather than bundling other titles.',
      },
      {
        title: 'Listed features only',
        desc: 'We document overlays that appear on the live listing and skip unverified automation extras.',
      },
      {
        title: 'Week, month, and lifetime plans',
        desc: 'Pick a $15 weekly pass, a $35 monthly plan, or a $150 lifetime license. Checkout shows the latest access notes.',
      },
      {
        title: 'Status before launch',
        desc: 'Game updates can shift compatibility. Confirm Support notes after every patch.',
      },
      {
        title: 'Windows PC requirements',
        desc: 'Windows 10/11 on Steam or PURPLE. Full functionality may require vendor Cloud DMA notes where listed.',
      },
      {
        title: 'Support on the record',
        desc: 'Open Support for order, install, or overlay questions and include your receipt email plus OS build.',
      },
    ],
    metrics: [
      { value: '$15', title: 'Weekly plan', desc: 'Seven-day access billed in USD.' },
      { value: '$35', title: 'Monthly plan', desc: 'Thirty-day access billed in USD.' },
      { value: '$150', title: 'Lifetime plan', desc: 'One-time USD purchase for long-term access.' },
      { value: 'PC', title: 'Official platform', desc: 'Aion 2 global service on Windows through Steam and PURPLE.' },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to a configured overlay in',
    titleHighlight: 'three clear steps',
    intro:
      'Confirm compatibility, finish checkout, then follow vendor notes for Windows PC and the global Steam or PURPLE client before you launch Aion 2.',
    ctaPrimary: 'Compare plans',
    ctaSecondary: 'Setup questions',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Confirm status and requirements',
        desc: 'Read Support and FAQ notes after any Aion 2 client update.',
      },
      {
        step: 'Step 2',
        title: 'Choose a plan and complete checkout',
        desc: 'Select weekly, monthly, or lifetime for the private suite, or pick a utility product.',
      },
      {
        step: 'Step 3',
        title: 'Configure ESP, radar, and keys',
        desc: 'Enable readable ESP and radar first, then save a conservative profile.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Windows PC',
    subtitle: 'Check compatibility notes after Aion 2 updates before you launch.',
    items: [
      'Windows 10 & 11',
      'Steam global PC',
      'PURPLE client',
      'Intel / AMD',
      'Saveable configs',
      'Discord support',
      'HWID utility',
      'External loader',
    ],
  },
  cheats: {
    eyebrow: 'Main suite',
    title: 'Aion 2 Private Cheats',
    subtitle: 'Full module list — ESP, flight markers, nodes, radar, and optional soft aim.',
    viewAll: 'View main suite',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        tier: 'Private',
        name: 'Main',
        title: 'Aion 2 Private Cheats',
        desc: 'Player ESP, faction filters, flight markers, gathering nodes, radar, and optional soft aim for Windows PC.',
        features: ['Player ESP', 'Soft aim', 'Flight markers', 'Radar', 'Gathering nodes', 'Saveable configs'],
        more: 40,
        href: productBase,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Shop',
    title: 'Aion 2 products',
    subtitle: 'Private cheats, HWID Spoofer, UGC tool, and Skin Changer — four focused utilities for PC.',
    viewAll: 'View all products',
    get: 'Buy',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'Main suite',
        title: 'Aion 2 Private Cheats',
        subtitle: 'ESP, radar, and soft aim',
        desc: 'Monthly and lifetime access to the private Aion 2 overlay suite on Windows PC.',
        features: ['Player ESP', 'Soft aim', 'Flight markers', '2D radar', 'Gathering nodes'],
        more: 40,
        href: productBase,
      },
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Hardware flag recovery',
        desc: 'Disk serial tools, MAC rotation, compatibility scan, and post-spoof verification.',
        features: ['Disk serial tools', 'MAC rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 6,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account tools',
        title: 'UGC tool',
        subtitle: 'Restriction detection',
        desc: 'Ban detection, live status verification, and supported recovery workflows.',
        features: ['Ban detection', 'Live status checks', 'One-click workflows', 'Error reporting'],
        more: 6,
        href: `${productBase}game-accounts/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Skin Changer',
        subtitle: 'Cosmetic preview',
        desc: 'Skin library, live preview, loadout manager, and restore tools for supported cosmetics.',
        features: ['Skin library', 'Live preview', 'Loadout manager', 'Restore & reset'],
        more: 6,
        href: `${productBase}skin-changer/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Guides',
    title: 'AION 2 guides and updates',
    subtitle:
      'Explore AION 2 guides, gameplay tips, class information, game updates, compatibility news, and product-related information.',
    latestTitle: 'Latest Aion 2 guides',
    latestSubtitle: 'Filter by topic or sort to find ESP, radar, setup, and anti-cheat articles.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: blogPosts.map(({ tag, title, slug, image, desc, date, readTime }) => ({
      tag,
      title,
      slug,
      image,
      desc,
      date,
      readTime,
    })),
  },
  toolkit: {
    eyebrow: 'Cheat menu',
    title: 'Aion 2 overlay menu, organized',
    subtitle: 'Modules grouped so you can tune ESP, radar, and soft aim without cluttering the HUD.',
    items: [
      { num: '01', label: 'ESP', title: 'Player and world readouts', desc: 'Faction filters, bosses, nodes, and portals with distance caps.' },
      { num: '02', label: 'Aim', title: 'Optional soft aim', desc: 'FOV, smoothness, bone selection, and visible check toggles.' },
      { num: '03', label: 'Radar', title: '2D awareness', desc: 'Faction colors, boss dots, and zoom beside ESP.' },
      { num: '04', label: 'Flight', title: 'Aerial markers', desc: 'Altitude, wing state, and contested sky zones.' },
      { num: '05', label: 'World', title: 'PvE routing', desc: 'Quest objectives, dungeons, and gathering filters.' },
      { num: '06', label: 'Profiles', title: 'Saveable configs', desc: 'Menu key, panic key, and cloud-friendly presets.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 steps',
    titleBefore: 'From status check to',
    titleHighlight: 'a saved config.',
    subtitle: 'A straight path from reviewing Aion 2 compatibility to a profile you can reuse.',
    ctaLabel: 'See current plans',
    ctaHref: productBase,
    ctaSecondary: 'Read setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check current status',
        desc: 'Read Support notes on getaion2cheats.net after any Aion 2 client update.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose a plan',
        desc: 'Select the $15 weekly, $35 monthly, or $150 lifetime plan, then continue to checkout.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Follow Windows PC instructions',
        desc: 'Use vendor setup notes for Steam or PURPLE. Confirm Cloud DMA requirements if listed.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save a conservative profile',
        desc: 'Enable the ESP and radar options you can read, then save the config.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Notes',
    title: 'Quick tips',
    items: [
      { num: '01', title: 'After patches', desc: 'Check Support before you fly into contested airspace after an Aion 2 update.' },
      { num: '02', title: 'Start slow', desc: 'Use default ESP distance and keep soft aim off until the HUD feels clean.' },
      { num: '03', title: 'Discord help', desc: 'Stuck on loader or configs? Ask in Discord with your order email ready.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Aion 2 Cheats support',
    subtitle: 'Loader, HWID, checkout, and account help.',
    channels: [
      {
        icon: 'users',
        title: 'Before you buy',
        desc: 'Ask about plans and what each product includes.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'messageCircle',
        title: 'Community forum',
        desc: 'See how other players fixed loader, HWID, and account issues—and read moderator replies on open threads.',
        linkLabel: 'Browse forum',
        href: '/forum/',
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Compatibility, bans and setup answers.',
        linkLabel: 'View FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Discord',
        desc: 'Support online 24/7.',
        linkLabel: 'Join Discord',
        href: DISCORD_URL,
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The email you used at checkout on getaion2cheats.net.' },
      { title: 'Platform', desc: 'Windows 10 or 11, Steam or PURPLE client, and your Aion 2 build.' },
      { title: 'Error detail', desc: 'Screenshot or exact text from the loader or game client.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Aion 2 cheats FAQ',
    subtitle: 'Compatibility, plans, utilities, and setup — straight answers before you buy.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Aion 2 cheats are currently compatible?',
        a: 'Open Support and FAQ on getaion2cheats.net before purchase or launch, especially after an Aion 2 client update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Checkout provides access and setup instructions. Follow those notes plus the setup guide for Windows PC before launching Aion 2.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party Aion 2 software?',
        a: 'Yes. Any third-party modification can conflict with published anti-bot measures and may lead to account action. You use this software at your own risk.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Aion 2 on Windows 10/11 PC through the global Steam or PURPLE client. macOS, Linux, and consoles are not listed.',
      },
      {
        num: '05',
        q: 'What plans are available?',
        a: 'The main suite, UGC tool, and Skin Changer offer a $15 weekly pass, $35 monthly plan, and $150 lifetime license in USD. HWID Spoofer uses $15 weekly and $35 monthly only.',
      },
      {
        num: '06',
        q: 'Where are products listed?',
        a: 'All four products live at getaion2cheats.net/products/ with feature lists and checkout via our secure redirect.',
      },
    ],
  },
  footer: {
    tagline: 'Aion 2 cheats — ESP, flight markers, and plans for Windows PC.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: productBase, label: 'Aion 2 private cheats', ariaLabel: 'Main suite' },
      { href: PRODUCTS_HUB, label: 'All products', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read Aion 2 guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Aion 2 Cheats | PC ESP & Utilities',
      description:
        'About Aion 2 Cheats — private suite, utilities, and guides for the global Aion 2 PC client at getaion2cheats.net.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Aion 2 Cheats documents listed overlay tools and utilities for the global Aion 2 PC client. We publish setup guides, plan comparisons, and compatibility notes.',
            'Game and product names are for identification only.',
          ],
        },
        {
          heading: 'What we sell',
          paragraphs: [
            'Aion 2 Private Cheats (Monthly and Lifetime), HWID Spoofer, UGC tool, and Skin Changer utilities. The blog covers ESP, radar, flight combat, and anti-cheat context.',
            'Pages update when the client or loader changes. Check Support before you play after patches.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            `Use Discord or ${SUPPORT_EMAIL} for loader errors, compatibility, and checkout questions. Include your order email, client platform, and Windows version.`,
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy | Aion 2 Cheats',
      description: 'How getaion2cheats.net handles analytics, cookies and contact data.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect basic analytics such as page views, device type, browser and approximate region through Google Analytics when enabled. Checkout runs on external pages. We do not store payment card data on getaion2cheats.net.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics show which guides and product pages people use so we can fix broken links and improve pages. Support tickets keep the email and message you send until the issue is closed.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: ['We use basic analytics cookies. You can block cookies in your browser. The site still works without them.'],
        },
        {
          heading: 'Support',
          paragraphs: ['For privacy questions, use the Support page. Purchase and refund rules are in Terms & Conditions.'],
        },
      ],
    },
    terms: {
      title: 'Terms for Aion 2 Cheats | License & Refunds',
      description: 'Terms for buying Aion 2 cheats on getaion2cheats.net — license use, delivery, refunds and account risk.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: October 2026. By using getaion2cheats.net or buying a product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell Aion 2 Private Cheats access and utilities (HWID Spoofer, UGC tool, Skin Changer) through a portal and Windows loader for Steam or PURPLE.',
            'Product pages list what is included when you buy. Features can change when Aion 2 or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. getaion2cheats.net does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your plan and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes unless we confirm a fault on our side for a supported setup. Contact Support with order email, Windows version, client build, and error details.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Aion 2 can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check compatibility notes before every session.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: ['For terms, billing, or loader questions, use the Support page. See also our Privacy Policy.'],
        },
      ],
    },
    support: {
      title: 'Aion 2 Cheats Support | Setup & Checkout',
      description: 'Support for Aion 2 loader setup, HWID spoofing, and checkout help at getaion2cheats.net.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'Aion 2 Cheats home',
    checkoutAria: 'Start checkout for Aion 2 private cheats',
    discordAria: 'Join Aion 2 Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
