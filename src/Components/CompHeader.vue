<script setup lang="ts">
import { onMounted, ref } from 'vue'
import WButton from '@/Widgets/WButton.vue'
import WLink from '@/Widgets/WLink.vue';

const menuOpen = ref(false)
const isDark = ref(false)

function setTheme(dark: boolean) {

	isDark.value = dark
	document.documentElement.classList.toggle('dark', dark)
	try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light') } catch { /* Storage may be unavailable. */ }
}

function toggleTheme() {
	setTheme(!isDark.value)
}

interface NavLink {
	label: string,
	goto: string,
}

const navLinks: NavLink[] = [
	{
		label: 'About',
		goto: '/#about'
	},
	{
		label: 'Tools',
		goto: '/#tools'
	},
	{
		label: 'Skills',
		goto: '/#skills'
	},
	{
		label: 'Projects',
		goto: '/#projects'
	},
	{
		label: 'Interests',
		goto: '/#interests'
	},
	{
		label: 'Services',
		goto: '/#services'
	},
	{
		label: 'Contact',
		goto: '/#contact'
	}
]


onMounted(() => {
	setTheme(document.documentElement.classList.contains('dark'))
})
</script>

<template>
	<header class="fixed inset-x-0 top-0 z-20 border-b border-b-accent-strong bg-paper backdrop-blur-lg">
		<div
			class="mx-auto flex h-19 w-[calc(100%-48px)] max-w-290 items-center justify-between max-lg:h-16.5 max-lg:w-[calc(100%-32px)]">
			<a class="inline-flex items-center gap-2.5 text-xs font-extrabold tracking-[0.12em] text-ink no-underline"
				href="/#top" aria-label="Go to homepage">
				<span
					class="inline-block h-3.75 w-3.75 rounded-full bg-accent-strong shadow-[0_0_0_5px_var(--color-purple-100)]" />
				<span class="text-lg">Home</span>
			</a>
			<button class="hidden flex-col gap-1.5 border-0 bg-transparent p-2 text-ink max-lg:flex" type="button"
				aria-label="Toggle navigation" :aria-expanded="menuOpen" aria-controls="primary-navigation" @click="menuOpen = !menuOpen">
				<span class="h-0.5 w-5.75 bg-ink" /> <span class="h-0.5 w-5.75 bg-ink" />
			</button>
			<nav id="primary-navigation" :class="['flex items-center gap-7 max-lg:absolute max-lg:left-4 max-lg:right-4 max-lg:top-16.5 max-lg:hidden max-lg:flex-col max-lg:items-stretch max-lg:gap-0 max-lg:border max-lg:border-line max-lg:bg-surface max-lg:p-3 max-lg:shadow-[0_1rem_3rem_rgb(23_19_31/0.08)]', { 'max-lg:flex!': menuOpen }]"
				aria-label="Primary navigation">
				<WLink :external="true" v-for="link in navLinks" :key="link.goto" :to="link.goto" @click="menuOpen = false">
					{{ link.label }}
				</WLink>
				<WButton variant="ghost" size="sm" :aria-label="isDark ? 'Use light theme' : 'Use dark theme'"
					@click="toggleTheme">
					<span class="text-lg leading-none text-purple-600">{{ isDark ? '☼' : '◐' }}</span>
					{{ isDark ? 'Light' : 'Dark' }}
				</WButton>
			</nav>
		</div>
	</header>
</template>
