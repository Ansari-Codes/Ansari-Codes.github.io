<script setup lang="ts">
import { useId } from 'vue'
defineOptions({ inheritAttrs: false })
const feedbackId = useId()
defineProps<{
	label?: string
	hint?: string
	error?: string
	id?: string
	type?: 'text' | 'email' | 'password' | 'url' | 'number' | 'search'
}>()

const model = defineModel<string | number>({ default: '' })
</script>

<template>
	<label class="block space-y-2">
		<span v-if="label" class="block text-sm font-semibold text-ink">{{ label }}</span>
		<input :aria-invalid="error ? true : undefined" :aria-describedby="error || hint ? feedbackId : undefined" v-model="model" :id="id" :type="type || 'text'" :class="['w-full rounded-[var(--radius-control)] border bg-surface px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/20', error ? 'border-danger' : 'border-line']" v-bind="$attrs" />
		<span :id="feedbackId" v-if="error" role="alert" class="block text-xs font-semibold text-danger">{{ error }}</span>
		<span :id="feedbackId" v-else-if="hint" class="block text-xs text-muted">{{ hint }}</span>
	</label>
</template>
