<script setup lang="ts">
import CompLandCard from './Common/CompLandCard.vue';
import CompLandSection from './Common/CompLandSection.vue';

const skills = [
    { icon: new URL('../../assets/interface-skill-light.svg', import.meta.url).href, title: 'Interface craft', text: 'I turn design intent into interfaces with rhythm, hierarchy, and personality.' },
    { icon: new URL('../../assets/product-skill-light.svg', import.meta.url).href, title: 'Product thinking', text: 'I ask what should exist, why it matters, and how to make it useful sooner.' },
    { icon: new URL('../../assets/learning-skill.svg', import.meta.url).href, title: 'Fast learning', text: 'I enjoy picking up unfamiliar tools and putting them to work quickly.' },
    { icon: new URL('../../assets/team-skill.svg', import.meta.url).href, title: 'Team energy', text: 'Clear communication and generous collaboration make good work easier.' },
]
</script>

<template>
    <CompLandSection id="skills" first="Some of" second="my skills.">
        <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <CompLandCard v-for="skill in skills" :key="skill.title" class="h-full flex-col">
				<span class="flex w-full border-b border-b-accent-strong bg-accent/30">
                    <img width="600" height="400" :src="skill.icon" loading="lazy" decoding="async" :alt="`${skill.title} icon`" class="object-contain w-full h-full" />
				</span>
                <h2 class="mt-3 text-2xl font-bold text-center mx-2">{{ skill.title }}</h2>
                <p class="mt-2 text-muted text-center m-4">{{ skill.text }}</p>
            </CompLandCard>
        </div>
    </CompLandSection>
</template>
