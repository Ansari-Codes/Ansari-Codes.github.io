<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import CompHeader from '@/Components/CompHeader.vue'
import CompFooter from '@/Components/CompFooter.vue'
import CompProjCard from '@/Components/Projects/CompProjCard.vue'
import CompProjHeader from '@/Components/Projects/CompProjHeader.vue'
import CompProjList from '@/Components/Projects/CompProjList.vue'
import CompProjPage from '@/Components/Projects/CompProjPage.vue'
import { orderedProjects, projectGroups } from '@/Data/projects.data'

const route = useRoute()
const searchQuery = ref('')

const selectedProjectId = computed(() => {
  const projectId = route.query.proj
  return typeof projectId === 'string' ? projectId : undefined
})

const selectedProject = computed(() =>
  orderedProjects.find((project) => project.id === selectedProjectId.value),
)

const filteredGroups = computed(() => {
  const query = searchQuery.value.trim().toLocaleLowerCase()
  return projectGroups
    .map((group) => ({
      ...group,
      projects: group.projects.filter((project) =>
        [
          project.title,
          project.description,
          ...project.technologies,
          project.blog.whatIsIt,
          project.blog.whyCreated,
          project.blog.howCreated,
          project.blog.usage,
        ].some((value) => value.toLocaleLowerCase().includes(query)),
      ),
    }))
    .filter((group) => group.projects.length > 0)
})

const selectedProjectIndex = computed(() =>
  orderedProjects.findIndex((project) => project.id === selectedProject.value?.id),
)

const previousProject = computed(() =>
  selectedProjectIndex.value > 0 ? orderedProjects[selectedProjectIndex.value - 1] : undefined,
)

const nextProject = computed(() =>
  selectedProjectIndex.value >= 0 && selectedProjectIndex.value < orderedProjects.length - 1
    ? orderedProjects[selectedProjectIndex.value + 1]
    : undefined,
)
</script>

<template>
  <CompHeader />
  <main class="projects-page min-h-screen bg-paper pb-20 pt-28 text-ink">
    <div class="mx-auto w-[calc(100%-32px)] max-w-290">
      <div class="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted" aria-label="Breadcrumb">
        <RouterLink to="/" class="hover:text-brand">Home</RouterLink>
        <span aria-hidden="true">/</span>
        <RouterLink :to="{ name: 'projects' }" class="hover:text-brand">Projects</RouterLink>
        <template v-if="selectedProject">
          <span aria-hidden="true">/</span>
          <span class="text-ink">{{ selectedProject.title }}</span>
        </template>
      </div>

      <template v-if="!selectedProjectId">
        <CompProjHeader
          title="Projects"
          description="A collection of things I’ve built, explored, and learned along the way."
        />

        <div class="mb-8 flex flex-col justify-between gap-4 border-b border-line pb-5 sm:flex-row sm:items-end">
          <div>
            <h2 class="text-xl font-bold">All projects</h2>
            <p class="mt-1 text-sm text-muted">
              {{ filteredGroups.reduce((count, group) => count + group.projects.length, 0) }} projects
            </p>
          </div>
          <label class="relative block w-full sm:max-w-sm">
            <span class="sr-only">Search projects</span>
            <span class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted" aria-hidden="true">⌕</span>
            <input
              v-model="searchQuery"
              type="search"
              placeholder="Search projects or technologies…"
              class="w-full rounded-xl border border-line bg-surface py-3 pl-10 pr-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </label>
        </div>

        <div v-if="filteredGroups.length" class="space-y-12">
          <section v-for="group in filteredGroups" :key="group.id">
            <div class="mb-5 flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <h2 class="text-2xl font-bold">{{ group.title }}</h2>
              <span class="text-sm text-muted">{{ group.projects.length }}</span>
            </div>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <CompProjCard v-for="project in group.projects" :key="project.id" :project="project" />
            </div>
          </section>
        </div>
        <p v-else class="rounded-xl border border-dashed border-line-strong p-8 text-center text-muted">
          No projects match “{{ searchQuery }}”. Try another search.
        </p>
      </template>

      <template v-else-if="selectedProject">
        <div class="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)]">
          <CompProjList :groups="projectGroups" :selected-project-id="selectedProject.id" />
          <CompProjPage
            :project="selectedProject"
            :previous-project="previousProject"
            :next-project="nextProject"
          />
        </div>
      </template>

      <section v-else class="rounded-2xl border border-line bg-surface p-8 text-center">
        <p class="text-sm font-bold uppercase tracking-[0.16em] text-brand">Project not found</p>
        <h1 class="mt-3 text-3xl font-bold">We couldn’t find that project.</h1>
        <p class="mt-3 text-muted">It may have moved, or the project link may be incorrect.</p>
        <RouterLink
          :to="{ name: 'projects' }"
          class="mt-6 inline-flex rounded-xl bg-brand px-5 py-3 font-semibold text-white no-underline transition hover:bg-brand-strong"
        >Browse all projects</RouterLink>
      </section>
    </div>
  </main>
  <CompFooter />
</template>
