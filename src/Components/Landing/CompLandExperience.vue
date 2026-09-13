<script setup lang="ts">
import CompLandSection from '@/Components/Landing/Common/CompLandSection.vue';
import CompLandCard from './Common/CompLandCard.vue';

const experience = [
    {
        image: new URL('../../assets/python-tutor.svg', import.meta.url).href,
        title: 'Python Tutor',
        text: 'I help learners understand Python through small examples, practical exercises, and patient debugging.',
        points: ['Python fundamentals', 'Problem solving', 'Project guidance'],
    },
    {
        image: new URL('../../assets/nbt-hub.jfif', import.meta.url).href,
        title: 'Internship @ NBT Hub',
        text: 'I am learning how software is planned, reviewed, and shipped while contributing to practical team work.',
        points: ['Team collaboration', 'Code reviews', 'Real projects'],
    },
]
</script>

<template>
    <CompLandSection id="experience" first="Brief" second="Experience">
        <div class="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
            <CompLandCard v-for="role in experience" :key="role.title" class="h-full flex-col p-4">
                <div class="flex w-full flex-col items-center gap-4 p-2 text-center">
                    <img width="160" height="160" :src="role.image" :alt="`${role.title} logo`" loading="lazy" decoding="async" class="object-contain aspect-square max-w-40 rounded-4xl bg-white p-2 object-contain" />
                    <div>
                        <h2 class="text-2xl font-bold">{{ role.title }}</h2>
                        <p class="mt-2 text-muted">{{ role.text }}</p>
                    </div>
                </div>
                <ul class="mt-4 flex w-full flex-wrap justify-center gap-2 text-sm text-ink">
                    <li v-for="point in role.points" :key="point" class="rounded-lg bg-accent-soft px-3 py-1">{{ point }}</li>
                </ul>
            </CompLandCard>
            <CompLandCard class="flex-col items-center justify-center p-6 text-center md:col-span-2">
                <h2 class="text-2xl font-bold">Looking for the next opportunity.</h2>
                <p class="mt-2 text-muted">Maybe that is with <span class="font-bold text-accent-strong">your company</span>?</p>
            </CompLandCard>
        </div>
    </CompLandSection>
</template>
