<script setup lang="ts">
import { ref } from 'vue';
import CompLandSectionHeading from '@/Components/Landing/Common/CompLandSectionHeading.vue';
import CompLandCard from '@/Components/Landing/Common/CompLandCard.vue';
import CompLandSection from './Common/CompLandSection.vue';
import WButton from '@/Widgets/WButton.vue';


interface Tool {
	label: string,
	icon: string,
	badge: string
}

const tools: Tool[] = [
	{
		label: 'Python',
		icon: new URL('../../assets/python-logo.svg', import.meta.url).href,
		badge: 'Primary'
	},
	{
		label: 'JS/TS',
		icon: new URL('../../assets/js-ts-logo.svg', import.meta.url).href,
		badge: 'Secondary'
	},
	{
		label: 'Vue.JS',
		icon: new URL('../../assets/vue-logo.svg', import.meta.url).href,
		badge: 'Frontend'
	},
	{
		label: 'FastAPI',
		icon: new URL('../../assets/fastapi-logo.svg', import.meta.url).href,
		badge: 'Backend'
	},
	{
		label: 'N8n',
		icon: new URL('../../assets/n8n-logo.svg', import.meta.url).href,
		badge: 'Automation'
	}
]
const openBadge = ref<string>('')
const details: Record<string, string> = {
 Primary: '🐍 Python: scripts, APIs, and turning repetitive work into one command.',
 Secondary: '⚡ JavaScript & TypeScript: interactive interfaces with a little extra confidence.',
 Frontend: '💜 Vue: reusable components and interfaces that feel good to use.',
 Backend: '🔌 FastAPI: connecting useful data to useful experiences.',
 Automation: '🧩 n8n: connecting the dots between tools and workflows.',
}
</script>

<template>
	<CompLandSection id="tools" first="My Core" second="toolkit.">
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto max-w-4xl mt-10">
			<CompLandCard class="relative h-full aspect-square gap-1 flex-col justify-center items-center"
				v-for="tool in tools" :key="tool.label">
				<button type="button" :aria-expanded="openBadge === tool.badge" :aria-label="'About ' + tool.label" class="
							w-fit h-fit absolute -top-2 -right-2 hover:-rotate-8 transition-transform 
							py-1 px-2 text-sm bg-accent-strong rounded-lg text-white font-bold
						" @click="openBadge = openBadge === tool.badge ? '' : tool.badge">
					{{ tool.badge }}
				</button>
				<span class="flex w-25 aspect-square">
						<img width="160" height="160" :src="tool.icon" loading="lazy" decoding="async" :alt="`${tool.label} icon`" class="object-contain w-full h-full" />
				</span>
				<span class="text-ink font-bold text-lg ">{{ tool.label }}</span>
				<!-- overlay -->
				<div class="
							absolute bottom-0 flex flex-col w-full h-full max-h-[85%] overflow-auto
							rounded-lg bg-surface-raised justify-start font-bold
							items-center text-center text-ink
							transition-transform duration-100 leading-snug
							p-2 text-xs
						" v-show="openBadge === tool.badge">
					<button type="button" aria-label="Close tool details" class="flex w-full flex-row justify-end p-2" @click="openBadge = ''">
						<span class="w-fit aspect-square bg-danger text-white! rounded-md hover:-rotate-10">✖</span>
					</button>
					{{ details[tool.badge] }}
				</div>
			</CompLandCard>
		</div>
		<div class="w-full flex items-center justify-center mt-6">
			<a href="#skills" class="w-button w-button--secondary w-button--md">See what I do with them <span aria-hidden="true">↗</span></a>
		</div>
	</CompLandSection>
</template>


