<script lang="ts" setup>
import { defineAsyncComponent, onBeforeUnmount } from 'vue'
import CompHeader from '@/Components/CompHeader.vue'
import CompFooter from '@/Components/CompFooter.vue'
import CompLandAbout from '@/Components/Landing/CompLandAbout.vue'
const CompLandContact = defineAsyncComponent(() => import('@/Components/Landing/CompLandContact.vue'))
import CompLandHero from '@/Components/Landing/CompLandHero.vue'
const CompLandInterests = defineAsyncComponent(() => import('@/Components/Landing/CompLandInterests.vue'))
const CompLandProjects = defineAsyncComponent(() => import('@/Components/Landing/CompLandProjects.vue'))
const CompLandSkills = defineAsyncComponent(() => import('@/Components/Landing/CompLandSkills.vue'))
const CompLandTools = defineAsyncComponent(() => import('@/Components/Landing/CompLandTools.vue'))
const CompLandServices = defineAsyncComponent(() => import('@/Components/Landing/CompLandServices.vue'))
const CompLandExperience = defineAsyncComponent(() => import('@/Components/Landing/CompLandExperience.vue'))

let hashFrame = 0
const initialHash = location.hash.slice(1)
function restoreInitialAnchor() {
 if (!initialHash || location.hash.slice(1) !== initialHash) return
 cancelAnimationFrame(hashFrame)
 hashFrame = requestAnimationFrame(() => document.getElementById(initialHash)?.scrollIntoView())
}
onBeforeUnmount(() => cancelAnimationFrame(hashFrame))

function scrollToSection(id: string) {
	document.getElementById(id)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
}

</script>

<template>
	<CompHeader />
	<main id="top" class="landing-page card-grad">
		<CompLandHero @scroll-to="scrollToSection" />
		<CompLandAbout />
		<CompLandExperience @vue:mounted="restoreInitialAnchor" />
		<CompLandTools @vue:mounted="restoreInitialAnchor" />
		<CompLandSkills @vue:mounted="restoreInitialAnchor" />
		<CompLandProjects @vue:mounted="restoreInitialAnchor" />
		<CompLandInterests @vue:mounted="restoreInitialAnchor" />
		<CompLandServices @vue:mounted="restoreInitialAnchor" />
		<CompLandContact @vue:mounted="restoreInitialAnchor" />
	</main>
	<CompFooter />
</template>
