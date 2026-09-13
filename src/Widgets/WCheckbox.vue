<script setup lang="ts">
defineOptions({ inheritAttrs: false })
defineProps<{
	label?: string
	description?: string
	disabled?: boolean
}>()

const model = defineModel<boolean>({ default: false })
</script>

<template>
	<label :class="['flex gap-3', disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']">
		<input v-bind="$attrs" v-model="model" type="checkbox" :disabled="disabled" class="mt-1 h-4 w-4 accent-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" />
		<span v-if="label || description" class="space-y-0.5">
			<span v-if="label" class="block text-sm font-semibold text-ink">{{ label }}</span>
			<span v-if="description" class="block text-sm leading-5 text-muted">{{ description }}</span>
		</span>
		<slot />
	</label>
</template>
