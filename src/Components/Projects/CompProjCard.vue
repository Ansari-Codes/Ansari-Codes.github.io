<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { Project } from '@/Data/projects.data'

const props = defineProps<{
  project: Project
}>()

const previewScreenshot = computed(() => props.project.screenshots?.[0])
</script>

<template>
  <RouterLink
    :to="{ name: 'projects', query: { proj: project.id } }"
    class="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface text-inherit no-underline shadow-(--shadow-panel) transition duration-200 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
  >
    <img
      v-if="previewScreenshot"
      :src="previewScreenshot.src"
      :alt="previewScreenshot.alt"
      class="aspect-video w-full border-b border-line bg-paper object-cover"
      loading="lazy"
    />
    <div class="flex flex-1 flex-col p-5">
      <h3 class="text-xl font-bold group-hover:text-brand">{{ project.title }}</h3>
      <p class="mt-2 flex-1 text-sm leading-6 text-muted">{{ project.description }}</p>
      <div v-if="project.technologies.length" class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="technology in project.technologies.slice(0, 3)"
          :key="technology"
          class="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand-strong"
        >{{ technology }}</span>
      </div>
    </div>
  </RouterLink>
</template>
