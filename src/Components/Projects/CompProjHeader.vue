<script setup lang="ts">
import type { Project } from '@/Data/projects.data'

defineProps<{
  project?: Project
  title?: string
  description?: string
}>()
</script>

<template>
  <header v-if="project">
    <img v-if="project.banner" :src="project.banner" :alt="`${project.title} banner`"
      class="w-full rounded-2xl border border-line bg-surface object-cover" />
    <div v-else class="flex min-h-24 items-center gap-5">
      <img v-if="project.icon" :src="project.icon" :alt="`${project.title} logo`"
        class="h-20 w-20 shrink-0 rounded-2xl object-contain" />
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">{{ project.title }}</h1>
    </div>
    <p v-if="!project.banner" class="max-w-3xl text-lg leading-8 text-muted">{{ project.description }}</p>
    <section v-if="project.screenshots?.length" id="screenshots">
      <div class="mt-5 grid gap-4">
        <figure v-for="screenshot in project.screenshots" :key="screenshot.src"
          class="overflow-hidden rounded-xl border border-line bg-surface">
          <img :src="screenshot.src" :alt="screenshot.alt" class="max-h-168 w-full object-contain" loading="lazy" />
          <figcaption v-if="screenshot.caption" class="p-3 text-sm text-muted">{{ screenshot.caption }}</figcaption>
        </figure>
      </div>
    </section>
    <div class="mt-5 flex flex-wrap justify-center gap-3">
      <a v-if="project.repository" :href="project.repository" target="_blank" rel="noreferrer"
        class="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-brand no-underline transition hover:border-brand hover:bg-brand/5">
        Source code
        <span aria-hidden="true">↗</span>
      </a>
      <a v-if="project.liveLink" :href="project.liveLink" target="_blank" rel="noreferrer"
        class="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-brand no-underline transition hover:border-brand hover:bg-brand/5">
        Visit project
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  </header>
  <header v-else class="mb-10 max-w-3xl">
    <p class="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand">Project archive</p>
    <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">{{ title ?? 'Projects' }}</h1>
    <p v-if="description" class="mt-4 text-lg leading-8 text-muted">{{ description }}</p>
  </header>

</template>
