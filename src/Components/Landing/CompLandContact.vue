<script setup lang="ts">
import { DEVFACE, DEVGIT, DEVINSTA, DEVLINK, DEVMAIL, DEVMEDM, DEVNUM, DEVTWIT, DEVYTUB } from '@/constants.ts';
import CompLandCard from './Common/CompLandCard.vue';
import CompLandSection from './Common/CompLandSection.vue';

const contacts = [
    { label: 'Email', value: DEVMAIL, href: `mailto:${DEVMAIL}`, icon: new URL('../../assets/gmail.svg', import.meta.url).href },
    { label: 'Github', value: DEVGIT, href: DEVGIT, icon: new URL('../../assets/git.svg', import.meta.url).href },
    { label: 'LinkedIn', value: DEVLINK, href: DEVLINK, icon: new URL('../../assets/linkedin.svg', import.meta.url).href },
    { label: 'Youtube', value: DEVYTUB, href: DEVYTUB, icon: new URL('../../assets/yt.svg', import.meta.url).href },
    { label: 'Medium', value: DEVMEDM, href: DEVMEDM, icon: new URL('../../assets/medium.svg', import.meta.url).href },
    { label: 'Twitter', value: DEVTWIT, href: DEVTWIT, icon: new URL('../../assets/x.svg', import.meta.url).href },
    { label: 'Facebook', value: DEVFACE, href: DEVFACE, icon: new URL('../../assets/facebook.svg', import.meta.url).href },
    { label: 'Instagram', value: DEVINSTA, href: DEVINSTA, icon: new URL('../../assets/insta.svg', import.meta.url).href },
]
</script>

<template>
    <CompLandSection id="contact" first="Let's" second="Connect.">
        <div class="mt-10 flex flex-col gap-4">
            <div>
                <h2 class="text-2xl font-bold">Available for <span class="text-accent-strong">work</span> and <span
                        class="text-accent-strong">collaboration.</span></h2>
                <p class="text-muted">Got an idea, a tricky problem, or just a good hello? My inbox is open. 👋</p>
            </div>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a v-for="contact in contacts" :key="contact.label" :href="contact.href" target="_blank"
                    rel="noreferrer">
                    <CompLandCard class="h-full items-center justify-between gap-3 p-2">
                        <div class="flex items-center">
                            <span class="rounded-md mr-2"><img :src="contact.icon" width="40" height="40" loading="lazy" decoding="async" :alt="`${contact.label} icon`" /></span>
                            <span class="font-semibold text-2xl">{{ contact.label }}</span>
                        </div>
                        <span class="max-w-full truncate text-right text-sm text-muted">{{ contact.value.split('/').at(-1) }}</span>
                    </CompLandCard>
                </a>
            </div>
        </div>
    </CompLandSection>
</template>
