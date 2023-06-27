<script setup lang="ts">
// props: text

const props = defineProps<{
    text: string
}>()
</script>
<template>
    <span class="tag">{{ text }}</span>
</template>

<style scoped lang="scss">
.tag {
    flex-basis: calc(50% - 0.25em);
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
