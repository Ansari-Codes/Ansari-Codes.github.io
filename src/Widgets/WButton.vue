<script setup lang="ts">
withDefaults(defineProps<{
 variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
 size?: 'sm' | 'md' | 'lg'
 block?: boolean
 loading?: boolean
 disabled?: boolean
 type?: 'button' | 'submit' | 'reset'
}>(), { variant: 'primary', size: 'md', type: 'button' })
</script>
<template>
 <button :type="type" :disabled="disabled || loading" :aria-busy="loading || undefined"
  :class="['w-button', 'w-button--' + variant, 'w-button--' + size, { 'w-full': block }]">
  <span v-if="loading" class="loading-spinner" aria-hidden="true" />
  <span v-if="loading" class="sr-only">Loading</span><slot />
 </button>
</template>
