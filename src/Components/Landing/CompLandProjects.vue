<script setup lang="ts">
import { orderedProjects } from '@/Data/projects.data'
import WLink from '@/Widgets/WLink.vue'
import CompLandSection from '@/Components/Landing/Common/CompLandSection.vue';
import CompLandCard from './Common/CompLandCard.vue';

const featuredProjects = orderedProjects.slice(0, 6)
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
    </div>
    <div v-if="orderedProjects.length > featuredProjects.length" class="mt-8 flex justify-center">
      <RouterLink
        :to="{ name: 'projects' }"
        class="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white no-underline transition hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        Explore more projects <span aria-hidden="true">→</span>
      </RouterLink>
    </div>
  </CompLandSection>
</template>
