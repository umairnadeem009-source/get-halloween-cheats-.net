import { createCarousel } from '@starwind-ui/runtime/carousel';

function getCarouselRoot(wrap: HTMLElement): HTMLElement | null {
  return wrap.querySelector<HTMLElement>('[data-sw-carousel]');
}

function bindProductsCarousel(wrap: HTMLElement) {
  const carouselRoot = getCarouselRoot(wrap);
  if (!carouselRoot) return;

  try {
    createCarousel(carouselRoot);
  } catch {
    /* carousel already initialized */
  }
}

export function initProductsCarousels(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-products-carousel]').forEach((wrap) => {
    if (wrap.dataset.carouselBound === 'true') return;
    wrap.dataset.carouselBound = 'true';
    bindProductsCarousel(wrap);
  });
}

export function setupProductsCarousel() {
  const run = () => initProductsCarousels();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }

  document.addEventListener('astro:page-load', run);
  document.addEventListener('astro:after-swap', run);
}
