import type { ObjectDirective } from 'vue'
let observer: IntersectionObserver | undefined
let count = 0
export const reveal: ObjectDirective<HTMLElement> = {
  mounted(el) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    el.dataset.reveal = String(count++ % 6)
    el.style.setProperty('--reveal-delay', `${count % 4 * 45}ms`)
    observer ??= new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer?.unobserve(entry.target)
      }
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' })
    observer.observe(el)
  },
  beforeUnmount(el) { observer?.unobserve(el) },
}
