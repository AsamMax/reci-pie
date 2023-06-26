<script setup lang="ts">
import type Recipe from '@/types/recipe'
import EditableText from '@/components/IO/EditableText.vue'
import { computed, watch } from 'vue'

const props = withDefaults(
    defineProps<{
        directions: Recipe['directions']
        edit: boolean
    }>(),
    {}
)
const emit = defineEmits<{ (e: 'update:directions', value: Recipe['directions']): void }>()

function updateDirections() {
    if (props.edit) {
        if (
            props.directions.length == 0 ||
            props.directions[props.directions.length - 1].description != ''
        ) {
            props.directions.push({
                description: ''
            })
        }
    } else {
        while (props.directions[props.directions.length - 1].description.trim() == '') {
            props.directions.pop()
        }
    }

    emit('update:directions', props.directions)
}

const directions = computed<Recipe['directions']>({
    get() {
        return props.directions
    },
    set(v: Recipe['directions']) {
        updateDirections()
    }
})
watch(() => props.edit, updateDirections)
</script>
<template>
    <div class="directions">
        <h3>Directions</h3>
        <ul>
            <li v-for="(direction, index) in directions" :key="index">
                <EditableText
                    type="paragraph"
                    v-model="direction.description"
                    :edit="props.edit"
                    @update:model-value="updateDirections"
                />
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss"></style>
