<script setup lang="ts">
import CompLandCard from './Common/CompLandCard.vue';
import CompLandSection from './Common/CompLandSection.vue';

const interests = [
    { icon: new URL('../../assets/sports.svg', import.meta.url).href, title: 'Sports', text: 'Badminton, taekwondo, and long walks keep my head clear between ideas.' },
    { icon: new URL('../../assets/maths-light.svg', import.meta.url).href, title: 'Mathematics', text: 'Algebra, calculus, and theorems are my favorite exercises for a curious brain.' },
    { icon: new URL('../../assets/physics-light.svg', import.meta.url).href, title: 'Physics', text: 'Relativity, astronomy, and quantum physics keep the scale of the universe in view.' },
    { icon: new URL('../../assets/langs.svg', import.meta.url).href, title: 'Languages', text: 'I enjoy discovering how people think through spoken languages and conlanging.' },
    { icon: new URL('../../assets/proto-light.svg', import.meta.url).href, title: 'Prototyping', text: 'I like turning loose questions into small experiments that can teach me something.' },
]
</script>

<template>
    <CompLandSection id="interests" first="When I am" second="bored.">
        <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <CompLandCard v-for="interest in interests" :key="interest.title" class="h-full flex-col">
				<span class="flex w-full border-b border-b-accent-strong bg-accent/30">
                            <img width="600" height="400" :src="interest.icon" loading="lazy" decoding="async" :alt="`${interest.title} icon`" class="object-contain w-full h-full" />
				</span>
                <h2 class="mt-3 text-2xl font-bold text-center mx-2">{{ interest.title }}</h2>
                <p class="mt-2 text-muted text-center m-4">{{ interest.text }}</p>
            </CompLandCard>
        </div>
    </CompLandSection>
</template>
