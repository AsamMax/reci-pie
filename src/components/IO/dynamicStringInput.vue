<script setup lang="ts">
import { computed } from 'vue'

export type text = 'headline' | 'single' | 'paragraph'

export interface Props {
    modelValue: string
    type: text
    editable: boolean
}

const props = withDefaults(defineProps<Props>(), { type: 'single' })
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const value = computed<string>({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})
</script>

<template>
    <template v-if="editable">
        <input v-if="props.type == 'headline'" type="text" v-model="value" class="headline" />
        <input v-else-if="props.type == 'single'" type="text" v-model="value" class="single" />
        <textarea v-else-if="props.type == 'paragraph'" v-model="value" class="paragraph" />
    </template>
    <template v-else>
        <h1 v-if="props.type == 'headline'">{{ value }}</h1>
        <span v-else-if="props.type == 'single'">{{ value }}</span>
        <p v-else-if="props.type == 'paragraph'">{{ value }}</p>
    </template>
</template>

<style>
input,
textarea {
    width: 100%;
    margin-bottom: 10px;
}

.paragraph {
    min-height: 5rem;
}

.headline {
    font-size: x-large;
}
</style>
