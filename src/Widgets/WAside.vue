<script setup lang="ts">
withDefaults(defineProps<{
	title?: string
	subtitle?: string
	bordered?: boolean
}>(), { bordered: true })
</script>

<template>
	<aside :class="['flex flex-col gap-6', bordered && 'border-r border-line pr-6']">
		<div v-if="title || $slots.heading" class="space-y-1">
			<slot name="heading">
				<p class="text-xs font-bold uppercase tracking-[0.2em] text-brand">{{ title }}</p>
				<p v-if="subtitle" class="text-sm leading-6 text-muted">{{ subtitle }}</p>
			</slot>
		</div>
		<nav v-if="$slots.default" aria-label="Sidebar navigation" class="flex flex-col gap-1">
			<slot />
		</nav>
		<div v-if="$slots.footer" class="mt-auto border-t border-line pt-5">
			<slot name="footer" />
		</div>
	</aside>
</template>
