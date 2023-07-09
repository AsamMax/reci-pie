<script setup lang="ts">
withDefaults(
    defineProps<{
        text: string
    }>(),
    { text: '' }
)
const emit = defineEmits<{ (e: 'update:text', value: string): void }>()
</script>
<template>
    <input
        placeholder="what recipe are you searching for?"
        :value="text"
        @input="emit('update:text', ($event.target as HTMLInputElement).value)"
    />
</template>
<style scoped lang="scss">
@import '@/assets/variables.scss';
input {
    font-size: $font-size-search;
    width: 100%;
}
</style>
