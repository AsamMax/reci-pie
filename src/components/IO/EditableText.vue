<script setup lang="ts">
import { computed } from 'vue'

export type TextType = 'headline' | 'singleline' | 'paragraph'

const props = withDefaults(
    defineProps<{
        modelValue: string
        type: TextType
        edit: boolean
    }>(),
    { type: 'singleline' }
)
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
    <input v-if="edit && props.type == 'headline'" type="text" v-model="value" class="headline" />
    <input
        v-else-if="edit && props.type == 'singleline'"
        type="text"
        v-model="value"
        class="single"
    />
    <textarea v-else-if="edit && props.type == 'paragraph'" v-model="value" class="paragraph" />
    <h1 v-else-if="!edit && props.type == 'headline'">{{ value }}</h1>
    <span v-else-if="!edit && props.type == 'singleline'">{{ value }}</span>
    <p v-else-if="!edit && props.type == 'paragraph'">{{ value }}</p>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

input,
textarea {
    width: 100%;
    margin-bottom: 10px;
}

.paragraph {
    min-height: $spacing-xl;
}

.headline {
    font-size: $font-size-large;
}
</style>
