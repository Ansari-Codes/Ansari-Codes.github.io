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

    <!-- <nav class="mb-2 flex flex-wrap gap-x-4 gap-y-2 border-b border-line pb-5 text-sm" aria-label="On this page">
      <a v-if="project.screenshots?.length" href="#screenshots" class="text-muted no-underline hover:text-brand">Screenshots</a>
      <a href="#what-is-it" class="text-muted no-underline hover:text-brand">What it is</a>
      <a href="#why-created" class="text-muted no-underline hover:text-brand">Why I created it</a>
      <a href="#how-created" class="text-muted no-underline hover:text-brand">How it was created</a>
      <a href="#usage" class="text-muted no-underline hover:text-brand">How to use it</a>
      <a v-if="project.blog.milestones.length" href="#milestones" class="text-muted no-underline hover:text-brand">Milestones</a>
      <a v-if="project.blog.additionalNotes" href="#additional-notes" class="text-muted no-underline hover:text-brand">Additional notes</a>
      <a v-if="project.technologies.length" href="#technologies" class="text-muted no-underline hover:text-brand">Technologies</a>
    </nav> -->

    <section v-if="project.screenshots?.length" id="screenshots">
      <h2 class="text-2xl font-bold">Screenshots</h2>
      <div class="mt-5 grid gap-4">
        <figure
          v-for="screenshot in project.screenshots"
          :key="screenshot.src"
          class="overflow-hidden rounded-xl border border-line bg-surface"
        >
          <img :src="screenshot.src" :alt="screenshot.alt" class="max-h-168 w-full object-contain" loading="lazy" />
          <figcaption v-if="screenshot.caption" class="p-3 text-sm text-muted">{{ screenshot.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <section id="what-is-it" class="border-b border-line py-8">
      <p class="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-brand">The project</p>
      <h2 class="text-2xl font-bold">What it is</h2>
      <p class="mt-3 max-w-3xl leading-7 text-muted">{{ project.blog.whatIsIt }}</p>
    </section>

    <section id="why-created" class="border-b border-line py-8">
      <p class="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-brand">The motivation</p>
      <h2 class="text-2xl font-bold">Why I created it</h2>
      <p class="mt-3 max-w-3xl leading-7 text-muted">{{ project.blog.whyCreated }}</p>
    </section>

    <section id="how-created" class="border-b border-line py-8">
      <p class="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-brand">Behind the build</p>
      <h2 class="text-2xl font-bold">How it was created</h2>
      <p class="mt-3 max-w-3xl leading-7 text-muted">{{ project.blog.howCreated }}</p>
    </section>

    <section id="usage" class="border-b border-line py-8">
      <p class="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-brand">Getting started</p>
      <h2 class="text-2xl font-bold">How to use it</h2>
      <p class="mt-3 max-w-3xl leading-7 text-muted">{{ project.blog.usage }}</p>
    </section>

    <section v-if="project.blog.milestones.length" id="milestones" class="border-b border-line py-8">
      <h2 class="text-2xl font-bold">Project milestones</h2>
      <ol class="mt-5 space-y-4 border-l border-line pl-5">
        <li v-for="milestone in project.blog.milestones" :key="milestone.title" class="relative">
          <span class="absolute -left-[1.63rem] top-1.5 h-2.5 w-2.5 rounded-full bg-brand" aria-hidden="true" />
          <h3 class="font-semibold">{{ milestone.title }}</h3>
          <p v-if="milestone.description" class="mt-1 text-sm leading-6 text-muted">{{ milestone.description }}</p>
        </li>
      </ol>
    </section>

    <section v-if="project.blog.additionalNotes" id="additional-notes" class="border-b border-line py-8">
      <h2 class="text-2xl font-bold">Additional notes</h2>
      <p class="mt-3 max-w-3xl leading-7 text-muted">{{ project.blog.additionalNotes }}</p>
    </section>

    <section v-if="project.technologies.length" id="technologies" class="py-8">
      <h2 class="text-2xl font-bold">Technologies used</h2>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="technology in project.technologies"
          :key="technology"
          class="rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium"
        >{{ technology }}</span>
      </div>
    </section>

    <nav class="mt-6 grid gap-3 border-t border-line pt-6 sm:grid-cols-2" aria-label="Adjacent projects">
      <RouterLink
        v-if="previousProject"
        :to="{ name: 'projects', query: { proj: previousProject.id } }"
        class="rounded-xl border border-line p-4 text-inherit no-underline transition hover:border-brand"
      >
        <span class="block text-xs text-muted">← Previous project</span>
        <span class="mt-1 block font-semibold">{{ previousProject.title }}</span>
      </RouterLink>
      <span v-else />
      <RouterLink
        v-if="nextProject"
        :to="{ name: 'projects', query: { proj: nextProject.id } }"
        class="rounded-xl border border-line p-4 text-right text-inherit no-underline transition hover:border-brand"
      >
        <span class="block text-xs text-muted">Next project →</span>
        <span class="mt-1 block font-semibold">{{ nextProject.title }}</span>
      </RouterLink>
    </nav>
  </article>
</template>
