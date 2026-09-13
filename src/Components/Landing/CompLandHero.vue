<script setup lang="ts">
import WButton from '@/Widgets/WButton.vue'
import WLink from '@/Widgets/WLink.vue'
import { DEVMAIL } from '@/constants'
defineEmits<{ 'scroll-to': [id: string] }>()
</script>

<template>
  <section
    class="relative flex min-h-180 h-fit items-center overflow-hidden px-0 py-15 max-sm:min-h-0 max-sm:py-31.25 max-sm:pb-20"
    aria-labelledby="hero-title">
    <div class="constellation" aria-hidden="true"><i v-for="n in 18" :key="n" :style="{ '--i': n, left: ((n * 37) % 100) + '%', top: ((n * 23) % 94) + '%' }" /></div>
    <div
      class="relative z-1 mx-auto grid w-[calc(100%-48px)] max-w-290 grid-cols-[1.08fr_0.92fr] items-center gap-6 max-sm:w-[calc(100%-32px)] max-sm:grid-cols-1 max-sm:gap-6">
      <div class="hero-copy">
        <p class="hero-eyebrow"><span aria-hidden="true">✦</span> Curious mind. Creative code.</p>
        <h1 id="hero-title"
          class="mb-7 max-w-180 text-[clamp(3rem,5vw,5rem)] font-bold leading-[0.88] tracking-[-0.06em] text-ink">
          Muhammad <br><span class="text-[clamp(4rem,8vw,8rem)] text-accent-strong">Abu Bakar</span><br> Siddique Ansari
        </h1>
        <p class="max-w-110 text-[1.1rem] leading-[1.7] text-muted">I turn “what if?” into things you can click, use, and enjoy. Web apps, Python experiments, and a big appetite for learning. <span aria-hidden="true">🚀</span></p>
        <div class="my-8 mb-16 flex items-center gap-6 max-sm:mb-12">
          <WButton size="lg" @click="$emit('scroll-to', 'projects')">See my work <span>↘</span></WButton>
          <WLink :to="`mailto:${DEVMAIL}`" muted>Let’s talk</WLink>
        </div>
        <div class="flex gap-8.5 text-[0.73rem] uppercase tracking-wider text-muted max-sm:gap-4.5">
          <span><strong class="mb-1 block text-xl tracking-normal text-ink">04</strong> years
            learning</span><span><strong class="mb-1 block text-xl tracking-normal text-ink">20+</strong> tools
            explored</span>
          <span><strong class="mb-1 block text-xl tracking-normal text-ink">30+</strong> Repositories</span>
        </div>
      </div>
      <div class="relative min-h-132.5 animate-reveal-up [animation-delay:200ms] max-sm:min-h-102.5"
        role="img" aria-label="Creative coding illustration: ideas become interfaces">
        <div
          class="motion-pulse absolute left-[8%] top-[9%] h-[70%] w-[85%] rotate-[-18deg] rounded-full border border-accent" />
        <div
          class="motion-pulse absolute left-[17%] top-[18%] h-[80%] w-[70%] rotate-55 rounded-full border border-accent [animation-delay:800ms]" />
        <div class="rounded-lg motion-float absolute left-1/2 top-1/2 grid aspect-[.79] w-[min(360px,75%)]
            -translate-x-1/2 translate-y-[-50%] place-content-center 
            bg-linear-to-br from-purple-950 via-black to-(--portfolio-accent-strong)
            text-white shadow-[22px_25px_0_#d8b4fe] before:absolute before:inset-5 before:border
            before:border-white/35 max-sm:w-61.25 max-md:w-61.5">
            <div class="code-art" aria-hidden="true"><span class="code-art-label">THE IDEA LAB / 01</span><strong>&lt;ab /&gt;</strong><span class="code-art-rule" /><span>curiosity + a little courage</span><span class="code-art-footer">building something good ✨</span></div>
        </div>
        <div
          class="rounded-lg absolute right-[3%] top-[5%] max-md:top-[10%] bg-(--portfolio-accent)/90 px-3.5 py-3 text-[0.64rem] font-bold uppercase leading-[1.3] tracking-[0.08em] text-black rotate-2">
          <span aria-hidden="true">👋</span> Available<br /><strong>for good work</strong></div>
        <div
          class="rounded-lg absolute bottom-[8%] left-px bg-purple-600 px-3.5 py-3 text-[0.64rem] font-bold uppercase leading-[1.3] tracking-[0.08em] text-white -rotate-2">
          Scroll to explore <span class="ml-3 text-base">🔽</span></div>
      </div>
    </div>
  </section>
</template>


