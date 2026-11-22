<script setup lang="ts">
import type { Project } from '@/Data/projects.data'

defineProps<{
  project?: Project
  title?: string
  description?: string
}>()
</script>

<template>
  <header v-if="project" class="mb-2 pb-4">
    <img
      v-if="project.banner"
      :src="project.banner"
      :alt="`${project.title} banner`"
      class="w-full rounded-2xl border border-line bg-surface object-cover"
    />
    <div v-else class="flex min-h-24 items-center gap-5">
      <img
        v-if="project.icon"
        :src="project.icon"
        :alt="`${project.title} logo`"
        class="h-20 w-20 shrink-0 rounded-2xl object-contain"
      />
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">{{ project.title }}</h1>
    </div>
    <p v-if="!project.banner" class="mt-4 max-w-3xl text-lg leading-8 text-muted">{{ project.description }}</p>
    <div class="mt-5 flex flex-wrap gap-4">
      <a
        v-if="project.repository"
        :href="project.repository"
        target="_blank"
        rel="noreferrer"
        class="text-sm font-semibold text-brand underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
      >Source code ↗</a>
      <a
        v-if="project.liveLink"
        :href="project.liveLink"
        target="_blank"
        rel="noreferrer"
        class="text-sm font-semibold text-brand underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
      >Visit project ↗</a>
    </div>
  </header>
  <header v-else class="mb-10 max-w-3xl">
    <p class="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand">Project archive</p>
    <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">{{ title ?? 'Projects' }}</h1>
    <p v-if="description" class="mt-4 text-lg leading-8 text-muted">{{ description }}</p>
  </header>
</template>
