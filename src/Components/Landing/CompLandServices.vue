<script setup lang="ts">
import CompLandCard from './Common/CompLandCard.vue';
import CompLandSection from './Common/CompLandSection.vue';

const services = [
    { icon: '💻', title: 'Beautiful Websites', text: 'Responsive websites with clear structure, useful interactions, and a little personality.' },
    { icon: '📺', title: 'CLI Tools', text: 'Small command-line tools that make repetitive technical work easier to repeat.' },
    { icon: '🔗', title: 'Automation Workflows', text: 'Useful workflows that connect tools and return time to the people using them.' },
    { icon: '🕷', title: 'Debugging', text: 'A patient second pair of eyes for finding the real cause behind a stubborn bug.' },
    { icon: '👨‍🏫', title: 'Tutoring', text: 'Friendly explanations that help beginners understand the why behind the code.' },
    { icon: '⚙', title: 'Custom Solutions', text: 'A focused prototype or utility for an unusual problem that needs a practical answer.' },
]
</script>

<template>
    <CompLandSection id="services" first="I provide" second="Services.">
        <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <CompLandCard v-for="service in services" :key="service.title" class="h-full flex-col p-4">
                <h2 class="text-2xl font-semibold">{{ service.icon }} {{ service.title }}</h2>
                <p class="mt-3 text-muted">{{ service.text }}</p>
            </CompLandCard>
        </div>
    </CompLandSection>
</template>
