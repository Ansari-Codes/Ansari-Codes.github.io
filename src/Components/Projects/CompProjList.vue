<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { ProjectGroup } from '@/Data/projects.data'

defineProps<{
  groups: ProjectGroup[]
  selectedProjectId: string
}>()
</script>

<template>
  <aside class="lg:sticky lg:top-28 lg:h-fit" aria-label="Project navigation">
    <p class="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-muted">Project index</p>
    <nav class="max-h-[calc(100vh-10rem)] space-y-5 overflow-y-auto border-l border-line pl-3">
      <section v-for="group in groups" :key="group.id" v-show="group.projects.length">
        <h2 class="mb-1 px-3 text-xs font-semibold text-muted">{{ group.title }}</h2>
        <RouterLink
          v-for="project in group.projects"
          :key="project.id"
          :to="{ name: 'projects', query: { proj: project.id } }"
          :aria-current="project.id === selectedProjectId ? 'page' : undefined"
          class="block rounded-r-lg px-3 py-2 text-sm text-muted no-underline transition hover:bg-surface hover:text-brand"
          :class="{ 'border-l-2 border-brand bg-brand-soft font-semibold text-brand-strong': project.id === selectedProjectId }"
        >
          {{ project.title }}
        </RouterLink>
      </section>
    </nav>
  </aside>
</template>
