<script setup lang="ts">
withDefaults(defineProps<{
	as?: 'article' | 'div' | 'section'
	interactive?: boolean
	padding?: 'none' | 'sm' | 'md' | 'lg'
}>(), { as: 'article', padding: 'md' })
</script>

<template>
	<component
		:is="as"
		:class="[
			'rounded-(--radius-panel) border border-line bg-surface shadow-(--shadow-panel)',
			{ 'transition duration-200 hover:-translate-y-1 hover:shadow-xl': interactive },
			{
				'p-0': padding === 'none',
				'p-4': padding === 'sm',
				'p-6': padding === 'md',
				'p-8': padding === 'lg',
			},
		]"
	>
		<div v-if="$slots.header" class="mb-5 flex items-start justify-between gap-4">
			<slot name="header" />
		</div>
		<slot />
		<div v-if="$slots.footer" class="mt-6 border-t border-line pt-5">
			<slot name="footer" />
		</div>
	</component>
</template>
