<script setup lang="ts">
const props = defineProps<{
    text: string
}>()
const emit = defineEmits<{
    (e: 'click', value: MouseEvent): void
}>()
</script>
<template>
    <span class="tag" @click="$emit('click', $event)">{{ text }}</span>
</template>

<style scoped lang="scss">
.tag {
    padding: 0.25em 0.5em;
    border-radius: 1em;
    color: var(--color-bg);
    // loop from 1 to 4
    @for $i from 1 through 4 {
        &:nth-child(4n + #{$i}) {
            background-color: var(--color-accent-soft-#{$i});
        }
    }
}
</style>
