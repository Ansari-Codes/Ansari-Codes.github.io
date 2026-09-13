<script setup lang="ts">
withDefaults(defineProps<{
	title?: string
	eyebrow?: string
	description?: string
	flush?: boolean
}>(), { flush: false })
</script>

<template>
	<section :class="['border-y border-line', flush ? '' : 'py-10 sm:py-14']">
		<div v-if="eyebrow || title || description || $slots.header" class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
			<slot name="header">
				<div class="max-w-2xl space-y-2">
					<p v-if="eyebrow" class="text-xs font-bold uppercase tracking-[0.2em] text-brand">{{ eyebrow }}</p>
					<h2 v-if="title" class="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{{ title }}</h2>
					<p v-if="description" class="leading-7 text-muted">{{ description }}</p>
				</div>
			</slot>
			<div v-if="$slots.actions" class="shrink-0"><slot name="actions" /></div>
		</div>
		<div :class="flush ? '' : 'space-y-6'"><slot /></div>
	</section>
</template>
