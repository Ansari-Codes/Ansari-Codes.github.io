<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Project } from '@/Data/projects.data'
import CompProjHeader from '@/Components/Projects/CompProjHeader.vue'

defineProps<{
  project: Project
  previousProject?: Project
  nextProject?: Project
}>()
</script>

<template>
  <article class="min-w-0">
    <CompProjHeader :project="project" />

    <section v-for="(content, sect) in project.blog.sections" :key="sect" :id="sect"
      class="py-4">
      <p class="mb-2 text-xl font-bold capitalize text-brand">{{ sect }}</p>
      <p class="max-w-3xl leading-7 text-muted">{{ content }}</p>
    </section>

    <section v-if="project.blog.milestones.length" id="milestones" class="border-b border-line py-8">
      <h2 class="text-2xl font-bold">Project milestones</h2>
      <ol class="mt-5 space-y-4 border-l border-line pl-5">
        <li v-for="milestone in project.blog.milestones" :key="milestone.title" class="relative">
          <span class="absolute left-[-1.63rem] top-1.5 h-2.5 w-2.5 rounded-full bg-brand" aria-hidden="true" />
          <h3 class="font-semibold">{{ milestone.title }}</h3>
          <p v-if="milestone.description" class="mt-1 text-sm leading-6 text-muted">{{ milestone.description }}</p>
        </li>
      </ol>
    </section>

    <section v-if="project.technologies.length" id="technologies" class="py-8">
      <h2 class="text-2xl font-bold">Technologies used</h2>
      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="technology in project.technologies" :key="technology"
          class="rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium">{{ technology }}</span>
      </div>
    </section>

    <nav class="mt-6 grid gap-3 border-t border-line pt-6 sm:grid-cols-2" aria-label="Adjacent projects">
      <RouterLink v-if="previousProject" :to="{ name: 'projects', query: { proj: previousProject.id } }"
        class="rounded-xl border border-line p-4 text-inherit no-underline transition hover:border-brand">
        <span class="block text-xs text-muted">← Previous project</span>
        <span class="mt-1 block font-semibold">{{ previousProject.title }}</span>
      </RouterLink>
      <span v-else />
      <RouterLink v-if="nextProject" :to="{ name: 'projects', query: { proj: nextProject.id } }"
        class="rounded-xl border border-line p-4 text-right text-inherit no-underline transition hover:border-brand">
        <span class="block text-xs text-muted">Next project →</span>
        <span class="mt-1 block font-semibold">{{ nextProject.title }}</span>
      </RouterLink>
    </nav>
  </article>
</template>