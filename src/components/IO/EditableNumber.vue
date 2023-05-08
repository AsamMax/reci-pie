<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    modelValue: number
    edit: boolean
}>()
const emit = defineEmits<{ (e: 'update:modelValue', value: number): void }>()

const value = computed<number>({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})
</script>

<template>
    <template v-if="edit">
        <input type="text" v-model="value" />
    </template>
    <template v-else>
        <span>{{ value }}</span>
    </template>
</template>

<style></style>
