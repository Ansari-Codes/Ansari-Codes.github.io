<script setup lang="ts">
import { useId } from 'vue'
defineOptions({ inheritAttrs: false })
const feedbackId = useId()
export interface SelectOption {
	label: string
	value: string | number
	disabled?: boolean
}

defineProps<{
	label?: string
	hint?: string
	error?: string
	options: SelectOption[]
	disabled?: boolean
}>()

const model = defineModel<string | number>({ default: '' })
</script>

<template>
	<label class="block space-y-2">
		<span v-if="label" class="block text-sm font-semibold text-ink">{{ label }}</span>
		<select v-bind="$attrs" :aria-invalid="error ? true : undefined" :aria-describedby="error || hint ? feedbackId : undefined" v-model="model" :disabled="disabled" :class="['w-full rounded-(--radius-control) border bg-surface px-3 py-2.5 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:cursor-not-allowed disabled:bg-paper', error ? 'border-danger' : 'border-line']">
			<option v-for="option in options" :key="option.value" :value="option.value" :disabled="option.disabled">{{ option.label }}</option>
		</select>
		<span :id="feedbackId" v-if="error" role="alert" class="block text-xs font-semibold text-danger">{{ error }}</span>
		<span :id="feedbackId" v-else-if="hint" class="block text-xs text-muted">{{ hint }}</span>
	</label>
</template>
