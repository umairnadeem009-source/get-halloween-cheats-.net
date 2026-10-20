export type ForumCommentRole = 'member' | 'mod' | 'op';

export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  role?: ForumCommentRole;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

const OP_POOL = [
  'daeva_runner',
  'elyos_main',
  'asmodian_alt',
  'storm_rider',
  'legion_scout',
  'riftwalker',
  'wing_diver',
  'gather_main',
] as const;

export function countForumComments(comments: ForumComment[]): number {
  return comments.reduce(
    (total, comment) => total + 1 + (comment.replies ? countForumComments(comment.replies) : 0),
    0,
  );
}

function opForSlug(slug: string): string {
  let sum = 0;
  for (let i = 0; i < slug.length; i += 1) sum += slug.charCodeAt(i);
  return OP_POOL[sum % OP_POOL.length]!;
}

function member(
  author: string,
  age: string,
  score: number,
  body: string,
  replies?: ForumComment[],
): ForumComment {
  return { author, age, score, body, role: 'member', replies };
}

function mod(author: string, age: string, score: number, body: string, replies?: ForumComment[]): ForumComment {
  return { author, age, score, body, role: 'mod', replies };
}

function opUser(author: string, age: string, score: number, body: string, replies?: ForumComment[]): ForumComment {
  return { author, age, score, body, role: 'op', replies };
}

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, upvotes, ...post } = input;
  const op = opForSlug(post.slug);
  const comments: ForumComment[] = [
    mod('AionMod_Support', '1 day ago', 38, answer, [
      opUser(op, '21 hours ago', 9, 'That matches what I saw—loader stayed offline until I rolled back one overlay toggle.'),
    ]),
    member('storm_wing', '20 hours ago', 15, detail),
    member('legion_scout', '17 hours ago', 11, 'Same question after the last client patch. Following for mod confirmation.'),
    mod('AionMod_Patches', '14 hours ago', 24, 'Check the live status banner before changing configs. Patch days can invalidate old presets.'),
    member('daeva_grind', '11 hours ago', 8, tip),
    opUser(op, '7 hours ago', 12, 'Solved on my end with the conservative defaults. Leaving this up in case someone else hits it.'),
    member('purple_rift', '4 hours ago', 5, 'Can confirm—worked after status went green again.'),
  ];
  return {
    ...post,
    upvotes,
    author: op,
    age: '2 days ago',
    commentsCount: countForumComments(comments),
    flair: 'Guide Q&A',
    body: [
      `Posting this after reading the guide—${post.title.replace(/\?$/, '')}?`,
      post.excerpt,
    ],
    comments,
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'what-does-aion-2-map-awareness-include', title: 'What does map awareness include in the guide?', upvotes: 73,
    excerpt: 'A quick breakdown of player, node, boss, and radar information covered by the map awareness guide.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Aion 2 ESP setup guide', sourcePath: '/blog/aion-2-cheat-setup-guide/',
    answer: 'The guide covers player ESP, gathering nodes, world bosses, 2D radar, and flight markers. Options are toggled inside the private suite portal.',
    detail: 'It recommends starting with a restrained layout and enabling only the information you can read comfortably during a team fight.',
    tip: 'Keep the overlay uncluttered: begin with the core indicators, then adjust the range and visibility settings one at a time.',
  }),
  guideDiscussion({
    slug: 'how-to-set-up-map-overlay', title: 'How should I set up the map overlay for the first time?', upvotes: 58,
    excerpt: 'Start with the basic display options, confirm the overlay in a practice session, then adjust one setting at a time.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Aion 2 cheat setup guide', sourcePath: '/blog/aion-2-cheat-setup-guide/',
    answer: 'Use the setup guide to enable the overlay, choose readable colors, and check that the indicators do not cover important parts of the game interface.',
    detail: 'Test your layout in a quiet zone or practice instance before open-world PvP. A simple configuration is easier to understand than turning on every option immediately.',
    tip: 'If the screen feels crowded, reduce the number of indicators before changing their size or position.',
  }),
  guideDiscussion({
    slug: 'what-zoom-settings-are-comfortable', title: 'What camera zoom settings are comfortable to play with?', upvotes: 44,
    excerpt: 'The zoom guide focuses on finding a view that improves map context without making your player hard to control.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Aion 2 radar hack guide', sourcePath: '/blog/aion-2-radar-hack-guide/',
    answer: 'There is no single ideal zoom value for every player. The guide recommends adjusting gradually and checking that you can still track your player, spell ranges, and nearby fights.',
    detail: 'Keep a quick reset to the default camera view available so you can compare the wider view and return to familiar framing.',
    tip: 'Change one step at a time and play a short practice session before settling on a new camera distance.',
  }),
  guideDiscussion({
    slug: 'how-to-tune-script-delay-settings', title: 'How do delay settings affect player aimbot?', upvotes: 32,
    excerpt: 'A practical question about timing, combo readability, and why the aimbot guide recommends conservative tuning.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Aion 2 aimbot for ranked play', sourcePath: '/blog/aion-2-aimbot-ranked-guide/',
    answer: 'Delay settings control the spacing between automated actions. The guide recommends starting with slower timings and testing them in a practice setting before making changes.',
    detail: 'A consistent sequence is easier to review and tune than changing several timing values at once.',
    tip: 'Keep a note of each configuration you try so you can return to the last setup that behaved as expected.',
  }),
  guideDiscussion({
    slug: 'how-to-practice-auto-combos', title: 'What is a good way to practice an aimbot?', upvotes: 29,
    excerpt: 'Use a repeatable player setup, learn the sequence, and check each spell and item timing in a controlled lobby.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Aion 2 aimbot player aimbot', sourcePath: '/blog/aion-2-aimbot-combat-guide/',
    answer: 'Choose one player and one combo to practice at a time. The guide walks through example sequences and explains how target selection and ability order fit together.',
    detail: 'A custom lobby lets you repeat the sequence and see which steps need adjustment without the pressure of a live match.',
    tip: 'Learn the manual sequence first; that makes it much easier to spot when a configuration is mistimed.',
  }),
  guideDiscussion({
    slug: 'what-is-in-the-elite-tier', title: 'Which utilities sit beside the private cheat suite?', upvotes: 67,
    excerpt: 'HWID Spoofer, UGC tool, and Skin Changer solve different recovery or cosmetic problems.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Compare Aion 2 utilities', sourcePath: '/products/aion-2-cheats/utilities/',
    answer: 'The utilities page compares HWID Spoofer for hardware flags, the UGC tool for account restrictions, and Skin Changer for local cosmetic previews.',
    detail: 'They are separate checkouts from the main ESP and radar suite—pick the tool that matches your situation.',
    tip: 'Read each product page before buying; utilities do not replace the private suite modules.',
  }),
  guideDiscussion({
    slug: 'how-do-lite-and-pro-differ', title: 'How do weekly, monthly, and lifetime plans differ?', upvotes: 53,
    excerpt: 'Same private suite modules—only access length and price change at checkout.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Aion 2 plans compared', sourcePath: '/blog/aion-2-monthly-vs-lifetime-plans/',
    answer: 'Weekly ($15), monthly ($35), and lifetime ($150 USD) unlock the same Aion 2 Private Cheats listing. Choose duration based on how long you play.',
    detail: 'HWID, UGC, and Skin Changer utilities use their own plan tables on their product pages.',
    tip: 'Start with weekly if you are validating compatibility after a patch.',
  }),
  guideDiscussion({
    slug: 'what-to-know-about-skin-changer', title: 'What should I know about the Skin Changer utility?', upvotes: 38,
    excerpt: 'The product guide explains how cosmetic previews work and what to expect from the utility.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Aion 2 Skin Changer guide', sourcePath: '/blog/aion-2-skin-changer-guide/',
    answer: 'The guide describes Skin Changer as a local cosmetic preview utility. It explains setup, supported options, and how to restore the default appearance.',
    detail: 'Review the compatibility notes and follow the current setup instructions before using the utility.',
    tip: 'Cosmetic changes are local previews; check the guide for current limitations and setup steps.',
  }),
  guideDiscussion({
    slug: 'what-to-do-if-eac-cannot-verify', title: 'What should I do if EAC cannot verify my Aion 2 install?', upvotes: 24,
    excerpt: 'Start with Steam or PURPLE file verification and a clean restart before assuming the issue is an account restriction.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'Anti-cheat unable to verify Aion 2', sourcePath: '/blog/aion-2-anti-cheat-bypass-explained/',
    answer: 'The troubleshooting guide says the message can result from game-file problems or software conflicts and does not always mean an account ban. Verify Aion 2 files in Steam or PURPLE first.',
    detail: 'Fully exit the launcher, restart the PC, and check for conflicting overlays before trying more disruptive steps.',
    tip: 'Launch Aion 2 normally before starting third-party tools so you can narrow down the cause.',
  }),
  guideDiscussion({
    slug: 'how-does-an-external-loader-work', title: 'What does “external loader” mean?', upvotes: 46,
    excerpt: 'The external software guide explains the term and outlines the general setup described on the site.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Aion 2 external cheat guide', sourcePath: '/blog/aion-2-external-cheat-guide/',
    answer: 'The article uses “external” to describe software that runs separately from the Aion 2 process and presents its interface as an overlay.',
    detail: 'It discusses the architecture at a high level and explains setup, patch updates, and the differences described between external and internal tools.',
    tip: 'Check compatibility and current status information whenever Aion 2 receives an update.',
  }),
  guideDiscussion({
    slug: 'how-to-check-stream-proof-capture', title: 'How can I check whether OBS captures an overlay?', upvotes: 21,
    excerpt: 'The stream-proof setup guide recommends recording a short test and checking the playback before streaming.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Stream-proof overlay setup for Aion 2', sourcePath: '/blog/aion-2-stream-proof-setup/',
    answer: 'Record a short local test with the exact OBS scene and capture mode you plan to use, then review the playback for any overlay elements.',
    detail: 'The guide recommends testing game capture and display capture separately, since capture methods and multi-monitor setups can behave differently.',
    tip: 'Do not rely on the preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'what-to-do-after-hwid-change', title: 'What should I check after changing PCs or hardware?', upvotes: 33,
    excerpt: 'The HWID guide covers common setup checks and when to contact support for an account or device reset.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Aion 2 HWID spoofer after ban', sourcePath: '/blog/aion-2-hwid-spoofer-after-ban/',
    answer: 'Start by checking the account and device instructions for your product. The guide explains common HWID questions and when a reset request may be needed.',
    detail: 'Avoid changing several system settings at once. If the product does not recognize your device, contact support with the relevant error details.',
    tip: 'Use the official support path for device resets instead of relying on unrelated third-party tools.',
  }),
  guideDiscussion({
    slug: 'what-to-check-before-installing-tools', title: 'What should I review before installing a new tool?', upvotes: 18,
    excerpt: 'Check the official setup steps, current compatibility notes, and support information before proceeding.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'Aion 2 cheats features guide', sourcePath: '/blog/aion-2-cheats-features-guide/',
    answer: 'Read the feature and setup information first, confirm that it matches your system, and check the current update/status notes.',
    detail: 'The site guide describes the available feature groups and links to more specific setup articles for individual modules.',
    tip: 'Use the linked product and support pages as the source of truth for current availability and compatibility.',
  }),
  guideDiscussion({
    slug: 'how-to-choose-aion-2-2-product-tier', title: 'How do I choose the right Aion 2 product tier?', upvotes: 48,
    excerpt: 'Compare the feature sets first, then follow the official checkout and setup instructions for your selection.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'How to buy Aion 2 cheats in 2026', sourcePath: '/blog/how-to-buy-aion-2-cheats-2026/',
    answer: 'The buying guide recommends comparing included features and choosing the tier that fits your needs before continuing through the official checkout.',
    detail: 'It covers the purchase flow, account access, downloading the current build, and checking setup instructions before launching.',
    tip: 'If you have a payment or account question, use the site support page and avoid sharing purchase details publicly.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'can-custom-lobby-cheat-codes-be-used-in-ranked', category: 'General', categoryTone: 'purple',
    title: 'Can I use Aion 2 cheat codes in ranked matchmaking?',
    excerpt: 'Quick answer from the practice lobby guide: built-in lobby commands only work in custom matches with cheats enabled.',
    author: 'riftwalker', age: '2 hours ago', commentsCount: 0, upvotes: 128, flair: 'Guide Q&A',
    sourceTitle: 'Aion 2 cheat codes guide: console commands for practice lobbies', sourcePath: '/blog/aion-2-cheat-codes-guide/',
    body: [
      'Friend told me training-zone commands work everywhere. Before I queue ranked on Steam, do built-in lobby codes actually carry into real PvP?',
      'I only need a straight answer—practice tools vs the private suite are confusing in older threads.',
    ],
    comments: [
      mod('AionMod_Support', '1 hour ago', 42, 'No. Training zones and bot lobbies are practice only—they do not carry into live PvP matchmaking.', [
        opUser('riftwalker', '52 min. ago', 14, 'That is what I needed. I was mixing up practice-instance drills with live overlays.'),
      ]),
      member('mid_or_feed', '1 hour ago', 24, 'Load a bot lobby or practice instance before touching PvP presets. Ranked is separate.'),
      member('ancient_archivist', '48 min. ago', 11, 'Guide covers weapon drills—keep live presets conservative after practice.'),
      mod('AionMod_Patches', '40 min. ago', 19, 'Third-party suite features are documented on product pages, not console codes. Do not conflate the two.'),
      member('push_first', '35 min. ago', 8, 'Useful distinction. Saved me from doing something dumb in ranked.'),
      opUser('riftwalker', '28 min. ago', 6, 'Closing thread—thanks mods.'),
    ],
  },
  {
    slug: 'how-to-enable-the-aion-2-2-console', category: 'General', categoryTone: 'purple',
    title: 'How do I turn on the Aion 2 developer console?',
    excerpt: 'Open Settings → Options → Advanced and enable the console. Here is the quick setup from our walkthrough.',
    author: 'elyos_main', age: '4 hours ago', commentsCount: 0, upvotes: 86, flair: 'Guide Q&A',
    sourceTitle: 'How to use cheat codes in Aion 2', sourcePath: '/blog/how-to-use-aion-2-cheat-codes/',
    body: [
      'Tilde does nothing in my practice instance on Windows 11. Did I miss a setting or is the console disabled on PURPLE too?',
      'Host enabled cheats—I still cannot get a prompt. Keyboard is UK layout if that matters.',
    ],
    comments: [
      mod('AionMod_Support', '3 hours ago', 31, 'Settings → Options → Advanced → enable the developer console. In a custom lobby, use the console key (usually tilde) after the host enables cheats.', [
        opUser('elyos_main', '2 hours ago', 10, 'Found Advanced Options—was buried under Options on PURPLE client.'),
      ]),
      member('pos4_roamer', '3 hours ago', 17, 'Bind the console key in hotkeys if tilde is wrong for your layout.'),
      member('carry_curious', '2 hours ago', 9, 'Spectators cannot run economy commands—needs host permissions.'),
      mod('AionMod_Patches', '90 min. ago', 14, 'If a command does nothing, re-check lobby cheat flags and syntax from the guide link.'),
      member('storm_wing', '70 min. ago', 6, 'UK layout here—rebinding fixed it.'),
      opUser('elyos_main', '45 min. ago', 8, 'Working now. Leaving steps for the next person.'),
    ],
  },
  {
    slug: 'practice-aion-2-high-ground-safely', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'What is the safest way to practice high-ground spots?',
    excerpt: 'Use a practice instance with ESP to study sight lines, then fight without staring at overlays.',
    author: 'daeva_runner', age: '6 hours ago', commentsCount: 0, upvotes: 64, flair: 'Guide Q&A',
    sourceTitle: 'Aion 2 ESP and soft aim practice tips', sourcePath: '/blog/aion-2-soft-aim-guide/',
    body: [
      'I keep dying on aerial approach routes because I stare at ESP instead of learning the actual sight lines.',
      'What is a sane practice loop for high-ground without ruining muscle memory?',
    ],
    comments: [
      mod('AionMod_Support', '5 hours ago', 27, 'Use a bot lobby: enable ESP briefly to mark angles, then turn boxes off and repeat the same POI clear.', [
        opUser('daeva_runner', '4 hours ago', 11, 'Tried three repeats with boxes off—already less tunnel vision.'),
      ]),
      member('stack_and_pull', '5 hours ago', 13, 'Peek with ESP on, disable, re-check the angle naked. Works for flight paths too.'),
      member('map_reader', '4 hours ago', 6, 'Same route in practice beats learning only in open world PvP.'),
      member('wing_diver', '3 hours ago', 8, 'Start with radar only if full ESP is too distracting.'),
      mod('AionMod_Patches', '2 hours ago', 12, 'Linking the practice guide—do not copy ranked FOV/smoothness from drill lobbies blindly.'),
      opUser('daeva_runner', '90 min. ago', 7, 'Good call on conservative presets. Thread helped.'),
    ],
  },
  {
    slug: 'what-to-check-after-a-aion-2-2-patch', category: 'Patch Talk', categoryTone: 'orange',
    title: 'What should I check before playing after a Aion 2 patch?',
    excerpt: 'The patch-day checklist recommends checking build status, updating, and testing in a bot lobby before queueing.',
    author: 'asmodian_alt', age: '9 hours ago', commentsCount: 0, upvotes: 42, flair: 'Patch day',
    sourceTitle: 'EAC patch day checklist', sourcePath: '/blog/eac-patch-day-checklist/',
    body: [
      'Steam updated Aion 2 overnight and my overlay looks wrong. What is the minimum checklist before I jump into faction PvP?',
      'Last time I skipped steps and had to reinstall the loader.',
    ],
    comments: [
      mod('AionMod_Patches', '8 hours ago', 36, 'Check status first → update loader when green → test in a quiet zone before PvP. Stop if anything crashes on inject.', [
        opUser('asmodian_alt', '7 hours ago', 9, 'Status was still yellow—waited like you said and it came back online.'),
      ]),
      member('farm_pattern', '8 hours ago', 12, 'I always run a 5-min bot test after patches. Caught two bad configs this month.'),
      member('support_main_5', '7 hours ago', 7, 'If status has not caught up, do not force old builds—wait for mod post in Discord #status.'),
      mod('AionMod_Support', '6 hours ago', 18, 'Pinning the EAC checklist article—follow it line by line on patch Tuesdays.'),
      member('legion_scout', '5 hours ago', 5, 'HWID spoofer users: extra reboot step after big patches.'),
      opUser('asmodian_alt', '3 hours ago', 6, 'All stable now. Thanks for the quick mod replies.'),
    ],
  },
  {
    slug: 'aion-2-2-lite-or-pro-hero-scripts', category: 'Community', categoryTone: 'green',
    title: 'Can I run ESP only without enabling soft aim?',
    excerpt: 'The private suite lists optional soft aim—you can stay on ESP, radar, and node markers only.',
    author: 'gather_main', age: '12 hours ago', commentsCount: 0, upvotes: 31, flair: 'Products',
    sourceTitle: 'Aion 2 Private Cheats overview', sourcePath: '/products/aion-2-cheats/',
    body: [
      'I only want ESP + radar for gathering routes. Friend says I must enable soft aim—is that true?',
      'Monthly budget is tight so I am picking the $35 plan after a $15 weekly test.',
    ],
    comments: [
      mod('AionMod_Support', '11 hours ago', 29, 'Soft aim is optional on the private suite. Save an ESP-only profile with nodes and flight markers before enabling combat modules.', [
        opUser('gather_main', '10 hours ago', 8, 'ESP-only profile works—staying on monthly after the weekly test.'),
      ]),
      member('one_more_game', '10 hours ago', 10, 'Product page lists every toggle—aim modules are not forced on.'),
      member('storm_rider', '9 hours ago', 6, 'I run nodes + flight markers only. No aim modules needed.'),
      mod('AionMod_Patches', '8 hours ago', 15, 'If you add utilities later, they checkout separately from the main suite.'),
      member('purple_rift', '6 hours ago', 4, 'Utilities hub explains HWID vs UGC vs Skin Changer.'),
      opUser('gather_main', '4 hours ago', 5, 'Weekly test passed—on monthly now.'),
    ],
  },
  {
    slug: 'how-to-learn-weapon-aim-in-creative', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'How can I practice soft aim without feeding deaths in open world?',
    excerpt: 'Use a practice instance or quiet zone and tune smoothness before faction PvP.',
    author: 'storm_rider', age: '1 day ago', commentsCount: 0, upvotes: 27, flair: 'Guide Q&A',
    sourceTitle: 'Aion 2 soft aim guide', sourcePath: '/blog/aion-2-soft-aim-guide/',
    body: [
      'Queue times for PvP are long and I want to tune soft aim smoothness without feeding deaths.',
      'Is bot lobby drilling actually useful or should I only test in open world?',
    ],
    comments: [
      mod('AionMod_Support', '22 hours ago', 22, 'Bot lobby / practice instance: one weapon profile at a time, reset between sets. Mirror live smoothness values before enabling combat modules in PvP.', [
        opUser('storm_rider', '20 hours ago', 7, 'Did 10 min AR drill—smoothness feels less jerky now.'),
      ]),
      member('mid_or_feed', '20 hours ago', 10, 'Repeat the same spray on a dummy until tracking is automatic.'),
      member('ancient_archivist', '18 hours ago', 5, 'Keep live presets conservative—drills can hide snappy settings.'),
      member('elyos_main', '16 hours ago', 6, 'Record a short clip if you stream—check stream-proof after changes.'),
      mod('AionMod_Patches', '14 hours ago', 11, 'Guide link has full workflow. Patch days: re-test drills after status green.'),
      opUser('storm_rider', '12 hours ago', 4, 'Helpful thread. Mods nailed the order of operations.'),
    ],
  },
  ...additionalGuidePosts,
];

for (const post of forumPosts) {
  post.commentsCount = countForumComments(post.comments);
}

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
