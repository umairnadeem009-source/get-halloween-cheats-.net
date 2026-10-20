export type ProductPlanId = 'weekly' | 'monthly' | 'lifetime' | 'onetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  duration: string;
  priceUsd: number;
  priceNote: string;
  popular?: boolean;
}

const standardPlans: ProductPlan[] = [
  {
    id: 'weekly',
    label: '1 Week',
    duration: '7 days',
    priceUsd: 15,
    priceNote: 'USD · 7 days',
  },
  {
    id: 'monthly',
    label: '1 Month',
    duration: '30 days',
    priceUsd: 35,
    priceNote: 'USD · 30 days',
    popular: true,
  },
  {
    id: 'lifetime',
    label: 'Lifetime',
    duration: 'Lifetime',
    priceUsd: 150,
    priceNote: 'USD · one-time',
  },
];

const hwidSpooferPlans: ProductPlan[] = [
  {
    id: 'weekly',
    label: '1 Week',
    duration: '7 days',
    priceUsd: 15,
    priceNote: 'USD · 7 days',
  },
  {
    id: 'monthly',
    label: '1 Month',
    duration: '30 days',
    priceUsd: 35,
    priceNote: 'USD · 30 days',
    popular: true,
  },
];

const ugcPlans: ProductPlan[] = [
  { id: 'onetime', label: 'One-time access', duration: 'Full access', priceUsd: 50, priceNote: 'USD · one-time' },
];

const oneTimeUtilitySlugs = new Set(['ugc', 'unlock-all']);

export function getProductPlans(productSlug: string): ProductPlan[] {
  if (productSlug === 'hwid-spoofer') return hwidSpooferPlans;
  if (productSlug === 'game-accounts' || productSlug === 'skin-changer') return standardPlans;
  if (oneTimeUtilitySlugs.has(productSlug)) return ugcPlans;
  return standardPlans;
}

export function getDefaultPlan(plans: ProductPlan[]): ProductPlan {
  return plans.find((p) => p.popular) ?? plans[0]!;
}

export function formatPlanPrice(usd: number): string {
  return `$${usd.toFixed(2)}`;
}

export function checkoutUrlWithPlan(baseUrl: string, planId: ProductPlanId): string {
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}plan=${planId}`;
}
