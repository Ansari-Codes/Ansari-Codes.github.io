<script setup lang="ts">
import { orderedProjects } from '@/Data/projects.data'
import WLink from '@/Widgets/WLink.vue'
import CompLandSection from '@/Components/Landing/Common/CompLandSection.vue';
import CompLandCard from './Common/CompLandCard.vue';

const featuredProjectIds = [
  'personal-workbook-lm',
  'social-app',
  'kutlync',
  'task-manager',
  'progressive-py',
]

const featuredProjects = featuredProjectIds
  .map((id) => orderedProjects.find((project) => project.id === id))
  .filter((project) => project !== undefined)
</script>

<template>
  <CompLandSection id="projects" first="I have" second="built something.">
    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-6xl mx-auto ">
      <div v-for="project in featuredProjects" :key="project.title">
        <CompLandCard class="h-full grid md:grid-cols-[.4fr_1fr] p-4">
          <div class="w-full h-full">
            <div class="w-full flex flex-row text-xl font-bold justify-center items-center">
              <img v-if="project.icon" width="160" height="160" :src="project.icon" loading="lazy" decoding="async" :alt="`${project.title} logo`" class="object-contain aspect-square max-w-40 rounded-4xl" />
            </div>
          </div>
          <div class="w-full h-full flex flex-col justify-between items-center p-2">
            <h3 class="w-full mt-2 text-2xl font-bold">{{ project.title }}</h3>
            <span class="text-md">{{ project.description }}</span>
            <div class="w-full flex flex-row gap-3 justify-end">
              <WLink v-if="project.repository" external :to="project.repository">Source ↗</WLink>
              <WLink external v-if="project.liveLink" :to="project.liveLink">Live ↗</WLink>
              <RouterLink
                :to="{ name: 'projects', query: { proj: project.id } }"
                class="text-sm font-semibold text-brand underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
              >Details →</RouterLink>
            </div>

          </div>
        </CompLandCard>
      </div>
      <RouterLink
        :to="{ name: 'projects' }"
        class="group h-full min-h-48"
      >
        <CompLandCard class="h-full min-h-48 items-center justify-center p-6 text-center transition duration-200 group-hover:-translate-y-1 group-hover:border-brand/50">
          <div class="flex w-full flex-col items-center">
            <span class="mb-4 grid h-14 w-14 place-items-center rounded-full border border-brand/30 bg-brand-soft text-2xl text-brand" aria-hidden="true">↗</span>
            <h3 class="text-2xl font-bold group-hover:text-brand">Discover more</h3>
            <p class="mt-2 max-w-xs text-sm leading-6 text-muted">Explore all projects, tools, experiments, and case studies.</p>
          </div>
        </CompLandCard>
      </RouterLink>
    </div>
  </CompLandSection>
</template>
