<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
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
input {
    font-size: 1.1rem;
    width: 100%;
}
</style>
