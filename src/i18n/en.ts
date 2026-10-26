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
    name: 'Halloween Cheats',
    domain: 'gethalloweencheats.net',
    title: 'Halloween Cheats | Private ESP, Radar & aim assist for PC',
    description:
      'Halloween cheats for Windows PC — player ESP, stalk markers, escape item markers, 2D radar, and optional aim assist. Weekly, monthly, and lifetime plans on Steam.',
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
    status: 'Halloween: The Game on Windows PC',
    eyebrow: 'Private Halloween cheats',
    titleLine1: 'Halloween Cheats',
    titleLine2: 'ESP, Radar & aim assist',
    subtitle:
      'Private Halloween cheats for Windows PC — player ESP, role filters, stalk markers, escape item markers, 2D radar, and optional aim assist. Plus HWID Spoofer, UGC tool, and Skin Changer utilities.',
    ctaPrimary: 'Buy now',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Platform',
    modes: ['Steam global PC', 'Steam PC', 'Windows 10 & 11', 'Intel / AMD'],
    metrics: [...productQuickStats],
  },
  productQuickStats: [...productQuickStats],
  features: {
    eyebrow: 'Cheat features',
    title: 'Halloween: The Game modules you can inspect',
    subtitle:
      'Survivor and Myers ESP, world markers, terror radius cues, radar, and aim assist from the current product listing—no invented bots.',
    items: [
      {
        title: 'Survivor ESP',
        subtitle: 'Health, weapons, and actions',
        desc: 'Read nearby survivors with boxes, skeletons, health state, held weapons, and looting or healing action states.',
        bullets: [
          'Survivor box, skeleton, and name readouts',
          'Health state and held weapon tags',
          'Teammate distance, health, and items',
          'Off-screen arrows and distance caps',
        ],
        tags: ['Halloween survivor ESP', 'survivor ESP', 'teammate tracker'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:min-h-full',
      },
      {
        title: 'Compatibility',
        subtitle: 'Windows PC',
        desc: 'Windows 10 and 11 for Halloween: The Game on Steam PC. Re-check status after game updates before launching.',
        bullets: ['Windows 10 and 11', 'Steam PC client', 'Review status after patches'],
        tags: ['Windows PC', 'Steam', 'Easy Anti-Cheat'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Aim assist',
        subtitle: 'Optional targeting help',
        desc: 'Combat option on the listing—leave it off until you confirm current status and accept the extra risk combat modules add.',
        bullets: [
          'Aim key, FOV, and smoothness',
          'Bone selection and visible check',
          'Draw FOV and max aim distance',
        ],
        tags: ['Halloween aim assist', 'aim assist', 'mod menu'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Myers ESP',
        subtitle: 'Stalk and terror radius',
        desc: 'Track Michael Myers with threat state, proximity warnings, stalk highlights, terror radius, and line-of-sight checks.',
        bullets: ['Myers box, skeleton, and distance', 'Stalking / chasing threat state', 'Terror radius and LOS indicators'],
        tags: ['Myers ESP', 'stalk tracker', 'terror radius'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'World ESP',
        subtitle: 'Items and escape routes',
        desc: 'Weapon and item ESP, hide spots, vehicles, alert objects, and escape route highlights with max world distance.',
        bullets: ['Household weapons and phones', 'Closets, doors, and interactables', 'Rescue and escape objective markers'],
        tags: ['item ESP', 'escape routes', 'Halloween hacks'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Radar',
        subtitle: 'Local 2D awareness',
        desc: '2D radar sits next to ESP so you can track survivors, Myers, and items without covering the screen.',
        bullets: ['Role color coding on radar', 'Survivor and Myers blips', 'Adjustable range and zoom'],
        tags: ['Halloween radar', '2D radar', 'ESP overlay'],
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
    title: 'A single-game listing for Halloween: The Game',
    subtitle:
      'Copy, plans, and guides stay on Halloween: The Game instead of mixing unrelated games into one catalog. Listed features only—ESP, stalk markers, nodes, radar, and aim assist.',
    usLabel: 'Halloween Cheats',
    otherLabel: 'Typical listing',
    rows: [
      {
        title: 'Halloween: The Game only',
        desc: 'The catalog, pricing, and guides stay locked to Halloween: The Game rather than bundling other titles.',
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
        desc: 'Windows 10/11 on Steam. Full functionality may require vendor Cloud DMA notes where listed.',
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
      { value: 'PC', title: 'Official platform', desc: 'Halloween: The Game global service on Windows through Steam.' },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to a configured overlay in',
    titleHighlight: 'three clear steps',
    intro:
      'Confirm compatibility, finish checkout, then follow vendor notes for Windows PC and the global Steam or Steam PC before you launch Halloween: The Game.',
    ctaPrimary: 'Compare plans',
    ctaSecondary: 'Setup questions',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Confirm status and requirements',
        desc: 'Read Support and FAQ notes after any Halloween: The Game client update.',
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
    subtitle: 'Check compatibility notes after Halloween: The Game updates before you launch.',
    items: [
      'Windows 10 & 11',
      'Steam global PC',
      'Steam PC',
      'Intel / AMD',
      'Saveable configs',
      'Discord support',
      'HWID utility',
      'External loader',
    ],
  },
  cheats: {
    eyebrow: 'Main suite',
    title: 'Halloween Private Cheats',
    subtitle: 'Full module list — ESP, stalk markers, nodes, radar, and optional aim assist.',
    viewAll: 'View main suite',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        tier: 'Private',
        name: 'Main',
        title: 'Halloween Private Cheats',
        desc: 'Player ESP, role filters, stalk markers, escape item markers, radar, and optional aim assist for Windows PC.',
        features: ['Player ESP', 'aim assist', 'stalk markers', 'Radar', 'escape item markers', 'Saveable configs'],
        more: 40,
        href: productBase,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Shop',
    title: 'Halloween: The Game products',
    subtitle: 'Private cheats, HWID Spoofer, UGC tool, and Skin Changer — four focused utilities for PC.',
    viewAll: 'View all products',
    get: 'Buy',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'Main suite',
        title: 'Halloween Private Cheats',
        subtitle: 'ESP, radar, and aim assist',
        desc: 'Monthly and lifetime access to the private Halloween: The Game overlay suite on Windows PC.',
        features: ['Player ESP', 'aim assist', 'stalk markers', '2D radar', 'escape item markers'],
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
    title: 'Halloween: The Game guides and updates',
    subtitle:
      'Explore Halloween: The Game guides, gameplay tips, class information, game updates, compatibility news, and product-related information.',
    latestTitle: 'Latest Halloween: The Game guides',
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
    title: 'Halloween: The Game overlay menu, organized',
    subtitle: 'Modules grouped so you can tune ESP, radar, and aim assist without cluttering the HUD.',
    items: [
      { num: '01', label: 'ESP', title: 'Player and world readouts', desc: 'role filters, bosses, nodes, and portals with distance caps.' },
      { num: '02', label: 'Aim', title: 'Optional aim assist', desc: 'FOV, smoothness, bone selection, and visible check toggles.' },
      { num: '03', label: 'Radar', title: '2D awareness', desc: 'Faction colors, boss dots, and zoom beside ESP.' },
      { num: '04', label: 'Flight', title: 'Aerial markers', desc: 'Altitude, wing state, and contested sky zones.' },
      { num: '05', label: 'World', title: 'Haddonfield routing', desc: 'Weapons, hide spots, phones, and escape objective filters.' },
      { num: '06', label: 'Profiles', title: 'Saveable configs', desc: 'Menu key, panic key, and cloud-friendly presets.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 steps',
    titleBefore: 'From status check to',
    titleHighlight: 'a saved config.',
    subtitle: 'A straight path from reviewing Halloween: The Game compatibility to a profile you can reuse.',
    ctaLabel: 'See current plans',
    ctaHref: productBase,
    ctaSecondary: 'Read setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check current status',
        desc: 'Read Support notes on gethalloweencheats.net after any Halloween: The Game client update.',
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
        desc: 'Use vendor setup notes for Steam. Confirm Cloud DMA requirements if listed.',
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
      { num: '01', title: 'After patches', desc: 'Check Support before you fly into contested airspace after an Halloween: The Game update.' },
      { num: '02', title: 'Start slow', desc: 'Use default ESP distance and keep aim assist off until the HUD feels clean.' },
      { num: '03', title: 'Discord help', desc: 'Stuck on loader or configs? Ask in Discord with your order email ready.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Halloween Cheats support',
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
      { title: 'Order email', desc: 'The email you used at checkout on gethalloweencheats.net.' },
      { title: 'Platform', desc: 'Windows 10 or 11, Steam or Steam PC, and your Halloween: The Game build.' },
      { title: 'Error detail', desc: 'Screenshot or exact text from the loader or game client.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Halloween cheats FAQ',
    subtitle: 'Compatibility, plans, utilities, and setup — straight answers before you buy.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Halloween cheats are currently compatible?',
        a: 'Open Support and FAQ on gethalloweencheats.net before purchase or launch, especially after an Halloween: The Game client update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Checkout provides access and setup instructions. Follow those notes plus the setup guide for Windows PC before launching Halloween: The Game.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party Halloween: The Game software?',
        a: 'Yes. Any third-party modification can conflict with published anti-bot measures and may lead to account action. You use this software at your own risk.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Halloween: The Game on Windows 10/11 PC through the global Steam or Steam PC. macOS, Linux, and consoles are not listed.',
      },
      {
        num: '05',
        q: 'What plans are available?',
        a: 'The main suite, UGC tool, and Skin Changer offer a $15 weekly pass, $35 monthly plan, and $150 lifetime license in USD. HWID Spoofer uses $15 weekly and $35 monthly only.',
      },
      {
        num: '06',
        q: 'Where are products listed?',
        a: 'All four products live at gethalloweencheats.net/products/ with feature lists and checkout via our secure redirect.',
      },
    ],
  },
  footer: {
    tagline: 'Halloween cheats — ESP, stalk markers, and plans for Windows PC.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: productBase, label: 'Halloween private cheats', ariaLabel: 'Main suite' },
      { href: PRODUCTS_HUB, label: 'All products', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read Halloween: The Game guides', ariaLabel: 'Blog' },
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
      title: 'About Halloween Cheats | PC ESP & Utilities',
      description:
        'About Halloween Cheats — private suite, utilities, and guides for the global Halloween: The Game PC client at gethalloweencheats.net.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Halloween Cheats documents listed overlay tools and utilities for the global Halloween: The Game PC client. We publish setup guides, plan comparisons, and compatibility notes.',
            'Game and product names are for identification only.',
          ],
        },
        {
          heading: 'What we sell',
          paragraphs: [
            'Halloween Private Cheats (Monthly and Lifetime), HWID Spoofer, UGC tool, and Skin Changer utilities. The blog covers ESP, radar, flight combat, and anti-cheat context.',
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
      title: 'Privacy Policy | Halloween Cheats',
      description: 'How gethalloweencheats.net handles analytics, cookies and contact data.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect basic analytics such as page views, device type, browser and approximate region through Google Analytics when enabled. Checkout runs on external pages. We do not store payment card data on gethalloweencheats.net.',
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
      title: 'Terms for Halloween Cheats | License & Refunds',
      description: 'Terms for buying Halloween cheats on gethalloweencheats.net — license use, delivery, refunds and account risk.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: October 2026. By using gethalloweencheats.net or buying a product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell Halloween Private Cheats access and utilities (HWID Spoofer, UGC tool, Skin Changer) through a portal and Windows loader for Steam.',
            'Product pages list what is included when you buy. Features can change when Halloween: The Game or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. gethalloweencheats.net does not process or store payment card numbers.',
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
            'Third-party tools for Halloween: The Game can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
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
      title: 'Halloween Cheats Support | Setup & Checkout',
      description: 'Support for Halloween: The Game loader setup, HWID spoofing, and checkout help at gethalloweencheats.net.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'Halloween Cheats home',
    checkoutAria: 'Start checkout for Halloween private cheats',
    discordAria: 'Join Halloween Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
