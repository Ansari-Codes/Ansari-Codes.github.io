<script setup lang="ts">
import CompLandSectionHeading from '@/Components/Landing/Common/CompLandSectionHeading.vue';

const props = defineProps<{
    id: string,
    first?: string,
    second?: string,
    raw?: boolean
}>();

</script>

<template>
    <section :id="id" v-reveal class="border-t border-line py-20">
        <div class="mx-auto w-[calc(100%-48px)] max-w-290 max-sm:w-[calc(100%-32px)]">
            <CompLandSectionHeading v-if="first || second" :first="first || ''" :second="second" class="w-fit" />
            <slot>
            </slot>
        </div>
    </section>
</template>
