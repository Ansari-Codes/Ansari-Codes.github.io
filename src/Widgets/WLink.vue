<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
	to: string
	external?: boolean
	muted?: boolean
}>(), { external: false, muted: false })

const isExternal = computed(() => props.external || /^(https?:|mailto:|tel:)/.test(props.to))
</script>

<template>
	<component
		:is="isExternal ? 'a' : 'RouterLink'"
		:to="isExternal ? undefined : to"
		:href="isExternal ? to : undefined"
		:target="isExternal && to.startsWith('http') ? '_blank' : undefined"
		:rel="isExternal && to.startsWith('http') ? 'noreferrer' : undefined"
		:class="[
			'inline-flex items-center gap-1 font-semibold underline decoration-brand/40 underline-offset-4 transition duration-200 hover:decoration-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
			muted ? 'text-muted hover:text-brand' : 'text-brand hover:text-brand-strong',
		]"
	>
		<slot />
	</component>
</template>
