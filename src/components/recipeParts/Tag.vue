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
@import '@/assets/variables.scss';
.tag {
    padding: $spacing-xs $spacing-small;
    border-radius: $spacing-medium;
    color: var(--color-bg);
    text-align: center;

    @for $i from 1 through 4 {
        &:nth-child(4n + #{$i}) {
            background-color: var(--color-accent-soft-#{$i});
        }
    }
}
</style>
