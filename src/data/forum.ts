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
  'haddon_runner',
  'myers_fan',
  'shape_alt',
  'laurie_main',
  'survivor_squad',
  'stalk_watch',
  'fog_walker',
  'escape_key',
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
    mod('HWC_Mod_Support', '1 day ago', 38, answer, [
      opUser(op, '21 hours ago', 9, 'That matched my setup—loader stayed offline until I rolled back one Myers ESP toggle.'),
    ]),
    member('laurie_main', '20 hours ago', 15, detail),
    member('stalk_watch', '17 hours ago', 11, 'Same issue after the last Halloween patch. Waiting for status to go green again.'),
    mod('HWC_Mod_Patches', '14 hours ago', 24, 'Check the live status banner before changing configs. EAC updates can break old presets.'),
    member('survivor_squad', '11 hours ago', 8, tip),
    opUser(op, '7 hours ago', 12, 'Fixed with conservative defaults. Leaving this for the next person in Haddonfield.'),
    member('fog_walker', '4 hours ago', 5, 'Confirmed—worked once status showed online again.'),
  ];
  return {
    ...post,
    upvotes,
    author: op,
    age: '2 days ago',
    commentsCount: countForumComments(comments),
    flair: 'Guide Q&A',
    body: [
      `Posting after reading the guide—${post.title.replace(/\?$/, '')}?`,
      post.excerpt,
    ],
    comments,
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'what-survivor-esp-shows-first-match',
    title: 'What should I enable first on survivor ESP?',
    upvotes: 73,
    excerpt: 'Health state, held weapon, and teammate distance before turning on every world marker.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Halloween Survivor ESP Guide',
    sourcePath: '/blog/halloween-survivor-esp-guide/',
    answer:
      'Start with survivor box, health state, and held item tags. Add teammate distance once nameplates stay readable in fog.',
    detail: 'Cap max ESP distance until you can track Myers threat cues without cluttering the HUD.',
    tip: 'Pair 2D radar with survivor ESP instead of maxing item ESP on day one.',
  }),
  guideDiscussion({
    slug: 'how-to-tune-myers-stalk-overlay',
    title: 'How do I tune Myers stalk and terror radius overlays?',
    upvotes: 58,
    excerpt: 'Threat state, proximity warning, and line-of-sight checks for Shape players.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Michael Myers ESP & Stalk Tracker Guide',
    sourcePath: '/blog/halloween-michael-myers-esp-stalk-tracker/',
    answer:
      'Enable Myers threat state and terror radius first. Add stalk target highlight only after you confirm current status notes.',
    detail: 'Playing Shape is about pacing—too many world markers can distract from resident routes.',
    tip: 'Save a Shape profile separate from your survivor profile in the config system.',
  }),
  guideDiscussion({
    slug: 'item-esp-for-escape-routes',
    title: 'Which item ESP filters matter for escapes?',
    upvotes: 44,
    excerpt: 'Household weapons, phones, keys, and rescue objectives with distance caps.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Halloween Item & Household Weapon ESP Guide',
    sourcePath: '/blog/halloween-item-household-weapon-esp/',
    answer:
      'Filter escape keys, health spray, and phone markers first. Add melee and firearm tags once the list is readable.',
    detail: 'Use max world distance so Haddonfield alleys do not fill with duplicate labels.',
    tip: 'Combat mode hides world ESP during chases—toggle it when Myers is on your trail.',
  }),
  guideDiscussion({
    slug: 'aim-assist-smoothness-survivor',
    title: 'What aim assist smoothness works for survivor kits?',
    upvotes: 32,
    excerpt: 'Optional aim modules—keep FOV low and visible check on in 1v4.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Halloween Cheat Feature Comparison',
    sourcePath: '/blog/halloween-cheat-feature-comparison/',
    answer:
      'Aim assist is optional. Start with ESP and radar only, then add conservative FOV and smooth values if you enable combat modules.',
    detail: 'Snappy aim in a horror lobby stands out—match smoothness to how you already track residents.',
    tip: 'Draw FOV helps you see the tuning box; keep it small until you are comfortable.',
  }),
  guideDiscussion({
    slug: 'radar-range-haddonfield',
    title: 'What 2D radar range should I use in Haddonfield?',
    upvotes: 29,
    excerpt: 'Local awareness for Myers blips, survivors, and critical items.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Halloween Custom Crosshair & Radar Guides',
    sourcePath: '/blog/halloween-custom-crosshair-radar-guides/',
    answer:
      'Set radar range so you see the current house block plus adjacent yards—not the entire map at once.',
    detail: 'Role color coding helps tell Myers from survivors when multiple silhouettes stack.',
    tip: 'Zoom the radar in during indoor chases; widen it when searching for escape items.',
  }),
  guideDiscussion({
    slug: 'utilities-beside-private-suite',
    title: 'Which utilities sit beside Halloween Private Cheats?',
    upvotes: 67,
    excerpt: 'HWID Spoofer, Game Accounts tool, and Skin Changer solve different problems.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Compare Halloween utilities',
    sourcePath: '/products/halloween-cheats/utilities/',
    answer:
      'HWID Spoofer is for hardware flags on Easy Anti-Cheat. Game Accounts covers restriction detection. Skin Changer is for cosmetic previews.',
    detail: 'They checkout separately from the Myers/survivor ESP suite—pick what matches your issue.',
    tip: 'Hardware ban on a new account usually means HWID, not the Game Accounts tool alone.',
  }),
  guideDiscussion({
    slug: 'weekly-monthly-lifetime-plans',
    title: 'How do weekly, monthly, and lifetime plans differ?',
    upvotes: 53,
    excerpt: 'Same private suite modules—only access length changes.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Free vs premium private cheats',
    sourcePath: '/blog/halloween-free-cheats-vs-premium-private/',
    answer:
      'Weekly ($15), monthly ($35), and lifetime ($150 USD) unlock the same Halloween Private Cheats listing on Steam PC.',
    detail: 'Use weekly to validate compatibility after an EAC or game patch before committing to monthly.',
    tip: 'HWID Spoofer uses weekly/monthly only—see its product page for pricing.',
  }),
  guideDiscussion({
    slug: 'skin-changer-cosmetics-scope',
    title: 'What does the Skin Changer actually change?',
    upvotes: 38,
    excerpt: 'Local cosmetic previews—not gameplay stats or Myers abilities.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Halloween Skin Changer & Cosmetics Guide',
    sourcePath: '/blog/halloween-skin-changer-cosmetics-guide/',
    answer:
      'Skin Changer previews supported outfits and weapon cosmetics. It does not replace survivor ESP or Myers modules.',
    detail: 'Restore defaults before major patches; compatibility checks flag outdated presets.',
    tip: 'Read the guide for what other players may still see in online modes.',
  }),
  guideDiscussion({
    slug: 'eac-verify-install-steam',
    title: 'What if Easy Anti-Cheat cannot verify my install?',
    upvotes: 24,
    excerpt: 'Verify game files on Steam before assuming a hardware or account ban.',
    category: 'Patch Talk',
    categoryTone: 'orange',
    sourceTitle: 'Anti-cheat bypass mechanics explained',
    sourcePath: '/blog/halloween-anti-cheat-bypass-explained/',
    answer:
      'Verify Halloween: The Game files in Steam, reboot, then launch vanilla once. The error is not always a ban.',
    detail: 'Close other overlays before testing. Only start the private loader after a clean game launch works.',
    tip: 'If new accounts fail instantly on one PC but work elsewhere, read the HWID spoofer guide.',
  }),
  guideDiscussion({
    slug: 'external-loader-meaning',
    title: 'What does “external loader” mean for this game?',
    upvotes: 46,
    excerpt: 'Overlay runs beside Halloween: The Game on Windows—not inside the Steam process.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Halloween The Game Cheats Explained',
    sourcePath: '/blog/halloween-the-game-cheats-explained/',
    answer:
      'External means the menu and ESP draw in an overlay while the game runs. Setup notes come from the portal after checkout.',
    detail: 'Patch days can change injection steps—always read Support when EAC updates.',
    tip: 'Compare listed modules on the main product page before enabling toggles.',
  }),
  guideDiscussion({
    slug: 'stream-proof-obs-test',
    title: 'How do I test stream-proof overlay with OBS?',
    upvotes: 21,
    excerpt: 'Record a short clip and review playback before going live.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Halloween Stream-Proof Overlay Explained',
    sourcePath: '/blog/halloween-stream-proof-overlay/',
    answer:
      'Enable stream-proof in the suite, record 30 seconds with your usual OBS capture mode, then watch the file for ESP text.',
    detail: 'Game capture vs display capture behaves differently on multi-monitor setups.',
    tip: 'Do not trust the live preview alone—save and rewatch the recording.',
  }),
  guideDiscussion({
    slug: 'after-hwid-spoof-checklist',
    title: 'What should I do after running HWID Spoofer?',
    upvotes: 33,
    excerpt: 'Cold reboot, identifier diff, then a safer cheat profile on a new account.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Halloween HWID Spoofer Guide',
    sourcePath: '/blog/halloween-hwid-spoofer-guide/',
    answer:
      'Follow the portal cold reboot guide, verify identifiers changed, then launch with conservative ESP only.',
    detail: 'Spoofing does not fix account-only restrictions—use Game Accounts when the ban is on the login.',
    tip: 'Never stack two spoof tools; create a restore point first.',
  }),
  guideDiscussion({
    slug: 'before-first-loader-install',
    title: 'What should I check before installing the loader?',
    upvotes: 18,
    excerpt: 'Windows 11 build, Steam install path, and current status page.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'Halloween Cheat Setup Guide',
    sourcePath: '/blog/halloween-cheat-setup-guide/',
    answer:
      'Confirm Windows 10/11, admin rights, and that Halloween: The Game launches normally on Steam first.',
    detail: 'The setup guide walks portal download, menu key, and saving your first profile.',
    tip: 'Keep order email handy for Support—do not post keys in the forum.',
  }),
  guideDiscussion({
    slug: 'choosing-main-suite-vs-trainer',
    title: 'Private suite vs free trainers for Halloween?',
    upvotes: 48,
    excerpt: 'WeMod-style trainers differ from Myers/survivor ESP in the private listing.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'Halloween Game Trainer Overview and Safety',
    sourcePath: '/blog/halloween-game-trainer-overview-safety/',
    answer:
      'Public trainers often focus on offline toggles. The private suite documents ESP, radar, and optional aim for supported builds.',
    detail: 'EAC still applies in online 1v4—read the FAQ on risk before any third-party tool.',
    tip: 'Use the feature comparison blog to see which modules are actually listed at checkout.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'trainers-vs-private-suite-online',
    category: 'General',
    categoryTone: 'purple',
    title: 'Do free trainers replace Halloween Private Cheats online?',
    excerpt: 'Trainers and the private suite are different tools—EAC still applies in public 1v4.',
    author: 'stalk_watch',
    age: '2 hours ago',
    commentsCount: 0,
    upvotes: 128,
    flair: 'Guide Q&A',
    sourceTitle: 'Halloween Mod Menu & Trainer Guide',
    sourcePath: '/blog/halloween-mod-menu-trainer-guide/',
    body: [
      'Friend says a free trainer has unlimited stamina and ignore lights. Is that the same as survivor ESP in the private suite?',
      'I only play online 1v4 on Steam—not interested in offline-only toys.',
    ],
    comments: [
      mod(
        'HWC_Mod_Support',
        '1 hour ago',
        42,
        'No. Trainers listed on third-party apps are separate from the private Myers/survivor ESP suite. Online modes still run Easy Anti-Cheat.',
        [opUser('stalk_watch', '52 min. ago', 14, 'Got it—sticking to the documented ESP modules instead of random trainers.')],
      ),
      member('laurie_main', '1 hour ago', 24, 'Read the trainer overview blog—it explains offline vs online risk plainly.'),
      member('escape_key', '48 min. ago', 11, 'Private suite is ESP, radar, item markers, optional aim—not the same toggles as WeMod health cheats.'),
      mod('HWC_Mod_Patches', '40 min. ago', 19, 'Product page lists every module. Do not mix trainer names with our checkout tools.'),
      member('fog_walker', '35 min. ago', 8, 'Useful distinction before I spent money on the wrong thing.'),
      opUser('stalk_watch', '28 min. ago', 6, 'Closing thread—thanks mods.'),
    ],
  },
  {
    slug: 'myers-esp-without-survivor-clutter',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Can I run Myers ESP without turning on every survivor tag?',
    excerpt: 'Shape players can focus on residents, special targets, and terror radius first.',
    author: 'myers_fan',
    age: '4 hours ago',
    commentsCount: 0,
    upvotes: 86,
    flair: 'Guide Q&A',
    sourceTitle: 'Michael Myers ESP & Stalk Tracker Guide',
    sourcePath: '/blog/halloween-michael-myers-esp-stalk-tracker/',
    body: [
      'Playing Shape—full survivor ESP makes the screen unreadable in fog. Which Myers toggles matter most?',
      'Windows 11, Steam build, monthly plan on the private suite.',
    ],
    comments: [
      mod(
        'HWC_Mod_Support',
        '3 hours ago',
        31,
        'Enable Myers threat state, terror radius, and stalk target highlight first. Add civilian/resident markers second—not every survivor box at max distance.',
        [opUser('myers_fan', '2 hours ago', 10, 'Terror radius + threat state alone already helps patrol timing.')],
      ),
      member('shape_alt', '3 hours ago', 17, 'I hide teammate ESP when solo queuing Shape—save a Shape-only preset.'),
      member('haddon_runner', '2 hours ago', 9, 'Line-of-sight check stops me chasing through walls like a bot.'),
      mod('HWC_Mod_Patches', '90 min. ago', 14, 'Re-test after patches—Myers stalk thresholds sometimes shift with updates.'),
      member('survivor_squad', '70 min. ago', 6, 'Survivor main here—fair warning Shape players still need to play smart.'),
      opUser('myers_fan', '45 min. ago', 8, 'Profile saved. Thread helped.'),
    ],
  },
  {
    slug: 'practice-survivor-esp-custom-lobby',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'How do I practice survivor ESP in a custom lobby?',
    excerpt: 'Learn item routes and Myers cues without enabling aim assist on day one.',
    author: 'haddon_runner',
    age: '6 hours ago',
    commentsCount: 0,
    upvotes: 64,
    flair: 'Guide Q&A',
    sourceTitle: 'Halloween Survivor ESP Guide',
    sourcePath: '/blog/halloween-survivor-esp-guide/',
    body: [
      'I stare at escape key labels instead of listening for Myers. What is a sane first practice loop?',
      'Friends and I run private lobbies to learn maps—want ESP for training only.',
    ],
    comments: [
      mod(
        'HWC_Mod_Support',
        '5 hours ago',
        27,
        'Run one house route: enable item ESP + teammate health for ten minutes, then turn overlays off and repeat the same path.',
        [opUser('haddon_runner', '4 hours ago', 11, 'Did three repeats with ESP off—actually heard footsteps again.')],
      ),
      member('laurie_main', '5 hours ago', 13, 'Keep max distance low so only nearby phones and keys show.'),
      member('escape_key', '4 hours ago', 6, 'Radar-only mode is a good middle step if boxes overwhelm you.'),
      member('fog_walker', '3 hours ago', 8, 'Do not copy pro streamer FOV settings—start conservative.'),
      mod('HWC_Mod_Patches', '2 hours ago', 12, 'Setup guide has the same training order linked in the blog sidebar.'),
      opUser('haddon_runner', '90 min. ago', 7, 'Helpful—keeping aim assist off for now.'),
    ],
  },
  {
    slug: 'after-halloween-game-patch-checklist',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'What should I check after a Halloween: The Game patch?',
    excerpt: 'Status page, loader update, then a quick custom match before public 1v4.',
    author: 'shape_alt',
    age: '9 hours ago',
    commentsCount: 0,
    upvotes: 42,
    flair: 'Patch day',
    sourceTitle: 'Halloween Cheat Troubleshooting Guide',
    sourcePath: '/blog/halloween-cheat-troubleshooting/',
    body: [
      'Steam updated overnight and my overlay crashed on inject. Minimum steps before I queue public Myers games?',
      'Last time I skipped the checklist and had to redo configs.',
    ],
    comments: [
      mod(
        'HWC_Mod_Patches',
        '8 hours ago',
        36,
        'Check status → update loader when green → test in a private lobby before public 1v4. Stop if inject crashes twice.',
        [opUser('shape_alt', '7 hours ago', 9, 'Status was yellow—waited thirty minutes and it cleared.')],
      ),
      member('stalk_watch', '8 hours ago', 12, 'I always run a five-minute custom match after EAC updates.'),
      member('survivor_squad', '7 hours ago', 7, 'Discord #status beats guessing when patch notes drop late.'),
      mod('HWC_Mod_Support', '6 hours ago', 18, 'Troubleshooting blog covers clean reinstall steps if configs corrupt.'),
      member('myers_fan', '5 hours ago', 5, 'HWID spoofer users: extra reboot after big patches before a new account.'),
      opUser('shape_alt', '3 hours ago', 6, 'Stable again—thanks mods.'),
    ],
  },
  {
    slug: 'esp-only-without-aim-assist',
    category: 'Community',
    categoryTone: 'green',
    title: 'Can I run ESP and radar without aim assist?',
    excerpt: 'Aim modules are optional—save an ESP-only profile for survivor runs.',
    author: 'escape_key',
    age: '12 hours ago',
    commentsCount: 0,
    upvotes: 31,
    flair: 'Products',
    sourceTitle: 'Halloween Private Cheats',
    sourcePath: '/products/halloween-cheats/',
    body: [
      'I only want survivor ESP, teammate health, and escape item markers. Friend insists aim assist is required—is it?',
      'Trying the $15 weekly plan before monthly.',
    ],
    comments: [
      mod(
        'HWC_Mod_Support',
        '11 hours ago',
        29,
        'Aim assist is optional. Save a profile with survivor ESP, radar, and item filters only—leave aim toggles off.',
        [opUser('escape_key', '10 hours ago', 8, 'ESP-only profile works on weekly—upgrading to monthly.')],
      ),
      member('laurie_main', '10 hours ago', 10, 'Product page lists toggles—you enable what you need.'),
      member('fog_walker', '9 hours ago', 6, 'I run terror radius + item ESP only as Shape. No aim modules.'),
      mod('HWC_Mod_Patches', '8 hours ago', 15, 'Utilities (HWID, accounts, skins) checkout separately if you need them later.'),
      member('haddon_runner', '6 hours ago', 4, 'Utilities hub explains which tool fits hardware vs account bans.'),
      opUser('escape_key', '4 hours ago', 5, 'Weekly test passed.'),
    ],
  },
  {
    slug: 'tune-aim-assist-private-lobby',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'How do I tune aim assist without ruining survivor games?',
    excerpt: 'Use low FOV and smooth values—test in custom lobbies before public matchmaking.',
    author: 'survivor_squad',
    age: '1 day ago',
    commentsCount: 0,
    upvotes: 27,
    flair: 'Guide Q&A',
    sourceTitle: 'Halloween Cheat Feature Comparison',
    sourcePath: '/blog/halloween-cheat-feature-comparison/',
    body: [
      'Queue times are long and I want to test aim smoothness without throwing public matches.',
      'Is a private lobby enough or do I need something else?',
    ],
    comments: [
      mod(
        'HWC_Mod_Support',
        '22 hours ago',
        22,
        'Private/custom lobbies are fine for tuning FOV and smooth. Mirror the same values when you go public—do not use drill-only snappy settings.',
        [opUser('survivor_squad', '20 hours ago', 7, 'Ten minutes of custom lobby testing fixed my jerky FOV.')],
      ),
      member('stalk_watch', '20 hours ago', 10, 'Visible check on, small FOV—less obvious tracking on residents.'),
      member('myers_fan', '18 hours ago', 5, 'Shape players should still rely on stalk mechanics, not aim alone.'),
      member('laurie_main', '16 hours ago', 6, 'Re-test stream-proof if you record tests for Discord.'),
      mod('HWC_Mod_Patches', '14 hours ago', 11, 'Feature comparison blog lists aim vs ESP modules side by side.'),
      opUser('survivor_squad', '12 hours ago', 4, 'Good order of operations—thanks.'),
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
