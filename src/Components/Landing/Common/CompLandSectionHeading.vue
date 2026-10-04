<script lang="ts" setup>
const props = defineProps<{ first: string, second?: string }>()
</script>

<template>
    <h2
        class="text-[clamp(3.2rem,6vw,6.2rem)] leading-[0.9] tracking-[-0.06em] max-sm:my-6 max-sm:text-[clamp(3rem,15vw,5rem)]">
        {{ first }}
        <em class="italic bg-linear-to-r from-accent-strong to-brand bg-clip-text text-transparent" v-if="second">
            {{ second }}
        </em>
    </h2>
</template>
