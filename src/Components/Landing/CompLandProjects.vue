<script setup lang="ts">
import { DEVGIT } from '@/constants';
import WLink from '@/Widgets/WLink.vue'
import CompLandSection from '@/Components/Landing/Common/CompLandSection.vue';
import CompLandCard from './Common/CompLandCard.vue';
import WCard from '@/Widgets/WCard.vue';

interface Project {
  title: string,
  description: string,
  repository?: string,
  live_link?: string,
  icon: string,
  slug: string
}

const projects: Project[] = [
  {
    title: 'Quick Task Manager',
    description: 'A little less chaos, a little more done. A personal task manager that brings my frontend and backend skills together. ✅',
    repository: DEVGIT + '/task-manager-vue-fastify',
    live_link: 'https://qtm-deploy.onrender.com',
    icon: new URL('../../assets/qtm.svg', import.meta.url).href,
    slug: '/qtm'
  },
  {
    title: 'KutLync',
    description: 'Long link? Tiny fix. A FastAPI-powered shortener for URLs that are easier to share. 🔗',
    repository: DEVGIT + '/kutlync',
    live_link: 'https://ansari-codes.github.io/kutlync',
    icon: new URL('../../assets/kutlync.svg', import.meta.url).href,
    slug: '/kutlync'
  },
  {
    title: 'Awais Stock App',
    description: 'A stock app project from my growing collection of software experiments. 📦',
    icon: new URL('../../assets/awais-stock-app.svg', import.meta.url).href,
    slug: '/kutlync'
  },
  {
    title: 'ProgressivePy',
    description: 'Give long-running Python tasks a little personality with customizable progress bars for terminals and notebooks. 🐍',
    repository: DEVGIT + '/progressive_py',
    icon: new URL('../../assets/progressive_py.png', import.meta.url).href,
    slug: '/progressive_py'
  },
]
</script>

<template>
  <CompLandSection id="projects" first="I have" second="built something.">
    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-6xl mx-auto ">
      <div v-for="project in projects" :key="project.title">
        <CompLandCard class="h-full grid md:grid-cols-[.4fr_1fr] p-4">
          <div class="w-full h-full">
            <div class="w-full flex flex-row text-xl font-bold justify-center items-center">
              <img width="160" height="160" :src="project.icon" loading="lazy" decoding="async" :alt="`${project.title} logo`" class="object-contain aspect-square max-w-40 rounded-4xl" />
            </div>
          </div>
          <div class="w-full h-full flex flex-col justify-between items-center p-2">
            <h3 class="w-full mt-2 text-2xl font-bold">{{ project.title }}</h3>
            <span class="text-md">{{ project.description }}</span>
            <div class="w-full flex flex-row gap-3 justify-end">
              <WLink v-if="project.repository" external :to="project.repository">Source ↗</WLink>
              <WLink external v-if="project.live_link" :to="project.live_link">Live ↗</WLink>
            </div>

          </div>
        </CompLandCard>
      </div>
    </div>
  </CompLandSection>
</template>
