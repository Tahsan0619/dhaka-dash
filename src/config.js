export const STREET = {
  len: 620,
  startZ: 14,
  roadHalf: 12,
  medianHalf: 1.1,
  walkHalf: 18.3,
  curbY: 0.18,
};

export const LANES = [
  { x: -8.6, dir: -1 },
  { x: -4.4, dir: -1 },
  { x: 4.4, dir: 1 },
  { x: 8.6, dir: 1 },
];

export const PILLAR_GAP = 34;
export const PILLAR_R = 1.05;

export const PLAYER = {
  hp: 100,
  speed: 5.6,
  radius: 0.42,
  dodgeSpeed: 11.5,
  sandals: 3,
  maxSandals: 6,
};

export const MOVES = {
  punch1: { dur: 0.26, from: 0.08, to: 0.15, range: 1.75, dmg: 7, arm: 'R', knock: false, word: 'ঢিশ!' },
  punch2: { dur: 0.26, from: 0.08, to: 0.15, range: 1.75, dmg: 8, arm: 'L', knock: false, word: 'ঠাস!' },
  punch3: { dur: 0.42, from: 0.12, to: 0.22, range: 1.95, dmg: 14, arm: 'R', knock: true, word: 'ঢিশুম!' },
  kick: { dur: 0.5, from: 0.17, to: 0.27, range: 2.1, dmg: 16, knock: true, word: 'ধপাস!' },
};

export const FOES = {
  chanda: {
    name: 'চাঁদাবাজ', hp: 48, speed: 3.7, dmg: 8, range: 1.5, windup: 0.42, cooldown: 1.2, loot: 25000,
    look: { shirt: '#c92a2a', pants: '#2b2b2b', lungi: '#3b5bdb', skin: '#9c6644', hair: '#1a1a1a', bandana: '#f03e3e', vest: '#343a40' },
    lines: ['চাঁদা দে!', 'এলাকা আমার!', 'বড় ভাই পাঠাইছে', 'মাসের টাকা কই?'],
  },
  ghush: {
    name: 'ঘুষখোর অফিসার', hp: 60, speed: 2.7, dmg: 7, range: 1.45, windup: 0.5, cooldown: 1.5, loot: 150000, flees: true,
    look: { shirt: '#c2a878', pants: '#5c4a2e', skin: '#b07a52', hair: '#222', cap: '#5c4a2e', belly: 1.35, mustache: true, glasses: true },
    lines: ['ফাইল আটকে আছে...', 'চা-পানির খরচ দেন', 'উপরে দিতে হয়', 'কাল আসেন'],
  },
  mastan: {
    name: 'মাস্তান', hp: 40, speed: 4.3, dmg: 10, range: 1.85, windup: 0.4, cooldown: 1.1, loot: 5000, stick: true,
    look: { shirt: '#212529', pants: '#495057', skin: '#8d5a3b', hair: '#111', shades: true },
    lines: ['ওই! দাঁড়া!', 'ভাই ডাকছে', 'লাঠি দেখছস?', 'চিনস আমারে?'],
  },
  syndicate: {
    name: 'সিন্ডিকেট ব্যবসায়ী', hp: 66, speed: 2.5, dmg: 6, range: 1.4, windup: 0.5, cooldown: 2.2, loot: 500000, ranged: true,
    look: { shirt: '#e8d9b5', pants: '#6b4f2a', lungi: '#6b4f2a', skin: '#a8744f', hair: '#333', belly: 1.5, topi: '#f8f9fa', beard: true },
    lines: ['পেঁয়াজ ৩০০ টাকা!', 'সাপ্লাই নাই', 'দাম আরো বাড়বে', 'গুদাম খালি!'],
  },
  neta: {
    name: 'দুর্নীতিবাজ নেতা', hp: 230, speed: 2.9, dmg: 15, range: 1.7, windup: 0.75, cooldown: 1.6, loot: 100000000, boss: true,
    look: { shirt: '#f8f9fa', pants: '#f1f3f5', skin: '#b5835a', hair: '#111', vest: '#1c1c1c', panjabi: true, belly: 1.45, mustache: true, glasses: true, scale: 1.12 },
    lines: ['আমি কে জানিস?', 'উন্নয়ন হচ্ছে!', 'ভোট লাগবে না', 'এই, তোরা কই!'],
  },
  bhumi: {
    name: 'ভূমিদস্যু', hp: 260, speed: 2.5, dmg: 17, range: 1.75, windup: 0.8, cooldown: 1.8, loot: 250000000, boss: true,
    look: { shirt: '#8d7b5a', pants: '#8d7b5a', skin: '#a8744f', hair: '#111', belly: 1.5, shades: true, chain: true, scale: 1.14 },
    lines: ['এই জমি আমার!', 'বুলডোজার আন!', 'নদীও আমার', 'কাগজ আছে, আসল না'],
  },
  vejal: {
    name: 'ভেজাল ওষুধ বিক্রেতা', hp: 200, speed: 3.0, dmg: 10, range: 1.5, windup: 0.6, cooldown: 1.5, loot: 80000000, boss: true, ranged: true,
    look: { shirt: '#f1f3f5', pants: '#495057', lungi: '#495057', skin: '#b07a52', hair: '#222', coat: true, cap: '#2b8a3e', mustache: true, scale: 1.08 },
    lines: ['এক ফাইল খান, সব রোগ শেষ!', 'মেয়াদ? ওটা কী?', 'চকের গুঁড়াই আসল ওষুধ', 'টনিক খাই, শক্তি পাই!'],
  },
  prosno: {
    name: 'প্রশ্নফাঁসকারী', hp: 180, speed: 3.6, dmg: 11, range: 1.5, windup: 0.5, cooldown: 1.3, loot: 60000000, boss: true, ranged: true,
    look: { shirt: '#a5d8ff', pants: '#343a40', skin: '#9c6644', hair: '#111', glasses: true, papers: true, scale: 1.06 },
    lines: ['১০০% কমন সাজেশন!', 'ফটোকপি কর, জলদি!', 'প্রশ্ন রাতেই পাবি', 'পরীক্ষা তো ফর্মালিটি'],
  },
  copy: {
    name: 'ফটোকপি', hp: 1, speed: 3.6, dmg: 4, range: 1.4, windup: 0.6, cooldown: 1.6, loot: 0,
    look: { shirt: '#a5d8ff', pants: '#343a40', skin: '#9c6644', hair: '#111', glasses: true, papers: true, scale: 1.06 },
    lines: ['আমিই আসল!', 'না, আমি আসল!', 'ফটোকপি না, অরিজিনাল'],
  },
  pocket: {
    name: 'পকেটমার', hp: 26, speed: 6.4, dmg: 4, range: 1.3, windup: 0.5, cooldown: 1.6, loot: 35000,
    look: { shirt: '#495057', pants: '#212529', skin: '#8d5a3b', hair: '#111', cap: '#212529' },
    lines: ['ধরতে পারবি না!', 'মোবাইলটা ভালো ছিল', 'হি হি হি'],
  },
  thikadar: {
    name: 'ঠিকাদার', hp: 55, speed: 3.0, dmg: 8, range: 1.5, windup: 0.5, cooldown: 1.4, loot: 400000,
    look: { shirt: '#f8f9fa', pants: '#343a40', skin: '#b5835a', hair: '#222', vest: '#343a40', belly: 1.3, glasses: true, briefcase: true },
    lines: ['টেন্ডার আমার!', 'ব্রিফকেস ভরা আছে', 'রাস্তা আবার খুঁড়ব'],
  },
};

export const BOSS_ORDER = ['neta', 'bhumi', 'vejal', 'prosno'];

export const NICKNAMES = {
  chanda: ['চাক্কু সেলিম', 'বিচ্ছু বাবলু', 'ডাবল মজনু', 'গেঞ্জি গফুর', 'রসিদহীন রতন', 'মাসিক মামুন', 'লাইনম্যান লালু'],
  ghush: ['ফাইলচাপা ফজলু', 'টেবিল-তলা তোফাজ্জল', 'চা-পানি চান মিয়া', 'উপরি উজ্জ্বল', 'কাল-আসেন কাশেম', 'সিল-মোহর সোবহান'],
  mastan: ['লাঠি লিটন', 'গুণ্ডা গনি', 'পটকা পলাশ', 'ভাইয়ের লোক ভুট্টো', 'হুডি হাসান', 'বাইক বাবু', 'সাইড-কিক সোহাগ'],
  syndicate: ['পেঁয়াজ পল্টু', 'গুদাম গিয়াস', 'দাম-বাড়া দুলাল', 'মজুতদার মন্টু', 'সাপ্লাই-নাই সাত্তার'],
  neta: ['ভাষণবাজ ভোলা', 'ফিতা-কাটা ফরিদ', 'উন্নয়ন উজির আলী', 'প্রতিশ্রুতি পিন্টু'],
  bhumi: ['দখলদার দবির', 'প্লট পারভেজ', 'নদীখেকো নসু', 'খাসজমি খলিল'],
  vejal: ['টনিক তোতা মিয়া', 'ভেজাল ভজন', 'মেয়াদোত্তীর্ণ মোতালেব', 'চক-গুঁড়া চঞ্চল'],
  prosno: ['ফটোকপি ফরহাদ', 'সাজেশন সাজ্জাদ', 'কমন-প্রশ্ন কামরুল', 'ফাঁস ফয়সাল'],
  copy: ['ফটোকপি'],
  pocket: ['চিকন চোরা চান্দু', 'মোবাইল মিঠু', 'ফুড়ুৎ ফারহান'],
  thikadar: ['টেন্ডার তারেক', 'খোঁড়াখুঁড়ি খোকন', 'কমিশন কবির'],
};

export const CITIZEN_NAMES = [
  'রিনা আপা', 'মোকলেস চাচা', 'বাবলু ভাই', 'শাহানা খালা', 'টুটুল', 'জরিনা বেগম', 'হাবিব মামা', 'সুমাইয়া',
  'কুদ্দুস দোকানদার', 'পিন্টু', 'নাসরিন ভাবি', 'রফিক মিস্ত্রি', 'ছোটন', 'আলেয়া নানি', 'মিঠু', 'বেলাল ড্রাইভার',
];

export const KAN_LINES = ['স্যার, আর করব না!', 'স্যার, মাফ করেন!', 'কান ছিঁড়ে যাচ্ছে স্যার!', 'ক্লাস এইটে আপনিই মারছিলেন!', 'স্যার, হোমওয়ার্ক কালকে দিব!'];

export const HEROES = [
  {
    id: 'student', name: 'ছাত্র', tag: 'স্লোগানে কাঁপে রাস্তা', hp: 100, speed: 5.8, dmg: 1, range: 1, charge: 1,
    look: { shirt: '#2f9e44', pants: '#1c3d6e', skin: '#a0704c', hair: '#141414', gamchha: '#e03131', backpack: '#1864ab' },
    special: { id: 'rally', name: 'স্লোগান মিছিল', desc: 'আশেপাশের জনতা জেগে ওঠে, চারপাশের সব দুর্নীতিবাজ ধরাশায়ী' },
    stats: [3, 3, 3, 3],
  },
  {
    id: 'rickshaw', name: 'রিকশাচালক', tag: 'শক্ত হাত, শক্ত মন', hp: 135, speed: 5.2, dmg: 1.3, range: 1, charge: 0.9,
    look: { shirt: '#ffd43b', pants: '#2b8a3e', lungi: '#2b8a3e', skin: '#7a4a2d', hair: '#111', gamchha: '#e8590c' },
    special: { id: 'bell', name: 'ক্রিং-ক্রিং তুফান', desc: 'ঘণ্টি বাজিয়ে সামনে ঝড়ের বেগে ছুট, পথে যে পড়বে সে ছিটকে যাবে' },
    stats: [5, 2, 4, 2],
  },
  {
    id: 'aunty', name: 'খালাম্মা', tag: 'ছাতাই যথেষ্ট', hp: 90, speed: 5.5, dmg: 1.05, range: 1.35, charge: 1.1,
    look: { shirt: '#e64980', pants: '#e64980', saree: true, skin: '#a8744f', hair: '#1a1a1a', umbrella: true },
    special: { id: 'spin', name: 'ছাতা ঘূর্ণি', desc: 'তিন সেকেন্ড ছাতা ঘুরিয়ে চারপাশের সবাইকে পেটান' },
    stats: [2, 3, 3, 4],
  },
  {
    id: 'teacher', name: 'অবসরপ্রাপ্ত শিক্ষক', tag: 'বেত এখনো চলে', hp: 95, speed: 5.0, dmg: 0.95, range: 1.2, charge: 1.4,
    look: { shirt: '#f8f9fa', pants: '#6c757d', skin: '#b07a52', hair: '#dee2e6', glasses: true, mustache: true, cane: true, panjabi: true },
    special: { id: 'kan', name: 'কান ধরে উঠবস', desc: 'কাছের সব দুর্নীতিবাজ ৫ সেকেন্ড কান ধরে উঠবস করবে, মার খাবে দ্বিগুণ' },
    stats: [2, 2, 2, 5],
  },
];
export const HERO_STAT_LABELS = ['শক্তি', 'গতি', 'দম', 'বিশেষ'];

export const WEAPONS = {
  broom: { name: 'ঝাড়ু', dmg: 1.35, range: 0.7, uses: 14, word: 'ঝাড়ুপেটা!' },
  stick: { name: 'লাঠি', dmg: 1.6, range: 0.55, uses: 10, word: 'ঠকাস!' },
};

export const CIVILIAN_LOOKS = [
  { shirt: '#4dabf7', pants: '#343a40', skin: '#a0704c', hair: '#151515' },
  { shirt: '#f8f9fa', pants: '#5c7cfa', skin: '#8d5a3b', hair: '#222', lungi: '#5c7cfa' },
  { shirt: '#ffd43b', pants: '#495057', skin: '#b07a52', hair: '#111' },
  { shirt: '#e64980', pants: '#e64980', skin: '#a8744f', hair: '#0d0d0d', saree: true },
  { shirt: '#20c997', pants: '#20c997', skin: '#9c6644', hair: '#0d0d0d', saree: true },
  { shirt: '#868e96', pants: '#212529', skin: '#b5835a', hair: '#bbb', topi: '#f8f9fa', beard: true },
  { shirt: '#ff922b', pants: '#2b8a3e', skin: '#8d5a3b', hair: '#151515', lungi: '#2b8a3e' },
  { shirt: '#ae3ec9', pants: '#ae3ec9', skin: '#b07a52', hair: '#111', saree: true },
  { shirt: '#74c0fc', pants: '#1c7ed6', skin: '#a0704c', hair: '#111', backpack: '#e03131' },
];

export const PLAYER_LOOK = { shirt: '#2f9e44', pants: '#1c3d6e', skin: '#a0704c', hair: '#141414', gamchha: '#e03131' };

export const SHOP_NAMES = [
  'মায়ের দোয়া স্টোর', 'ভাই ভাই ফার্মেসি', 'নিউ মডার্ন টেইলার্স', 'সততা মোবাইল সার্ভিসিং',
  'জননী ভ্যারাইটিজ', 'বিসমিল্লাহ হোটেল', 'রহমান ইলেকট্রনিক্স', 'ঢাকা কম্পিউটার',
  'নুর জুয়েলার্স', 'বাংলার মিষ্টিমুখ', 'আদর্শ লাইব্রেরি', 'সোনার বাংলা হার্ডওয়্যার',
];

export const BANNERS = [
  ['দুর্নীতিকে', 'না বলুন'],
  ['ঘুষ দেওয়া-নেওয়া', 'দণ্ডনীয় অপরাধ'],
  ['জনগণের টাকা', 'জনগণের'],
  ['উন্নয়নের', 'মহাসড়ক'],
  ['ফাইল চলে', 'ঘুষে নয়, নিয়মে'],
  ['সিন্ডিকেট', 'ভাঙবে জনতা'],
];

export const HEADLINES = [
  'পেঁয়াজের দাম কেন বাড়ল, জানতে চাইলেন খোদ পেঁয়াজ',
  'ফাইল নড়াতে চা-পানি লাগবে না, ঘোষণার পরদিনই চায়ের দাম দ্বিগুণ',
  'চাঁদাবাজি বন্ধে কমিটি; কমিটির খরচ তুলতে নতুন চাঁদা',
  'উন্নয়নের রাস্তা তিনবার খোঁড়া হলো, চতুর্থবারের দরপত্র আহ্বান',
  'বাস থামল স্টপেজে, যাত্রীরা হতবাক',
  'সিন্ডিকেট বলে কিছু নেই, জানাল সিন্ডিকেট',
  'অফিসার ঘুষ নেন না, শুধু উপহার নেন: সংশ্লিষ্ট সূত্র',
  'আমজনতা জেগেছে, ফুটপাতে চা বিক্রি বেড়েছে তিনগুণ',
];

export const STORE = {
  heroes: 'dhakaDash3d.heroes',
  name: 'dhakaDash3d.name',
  muted: 'dhakaDash3d.muted',
  hero: 'dhakaDash3d.hero',
};

const BN = '০১২৩৪৫৬৭৮৯';
export const bn = (v) => String(v).replace(/\d/g, (d) => BN[d]);

export function taka(n) {
  if (n >= 1e7) return '৳' + bn(+(n / 1e7).toFixed(n >= 1e8 ? 0 : 1)) + ' কোটি';
  if (n >= 1e5) return '৳' + bn(+(n / 1e5).toFixed(1)) + ' লাখ';
  return '৳' + bn(Math.round(n).toLocaleString('en-IN'));
}

export const rand = (a, b) => a + Math.random() * (b - a);
export const pick = (arr) => arr[(Math.random() * arr.length) | 0];
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const damp = (a, b, k, dt) => b + (a - b) * Math.exp(-k * dt);
export function angleLerp(a, b, t) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}
