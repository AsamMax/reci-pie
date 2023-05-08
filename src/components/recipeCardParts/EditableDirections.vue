<script setup lang="ts">
import type Recipe from '@/types/recipe'
import EditableText from '@/components/IO/EditableText.vue'

const props = withDefaults(
    defineProps<{
        directions: Recipe['directions']
        edit: boolean
    }>(),
    {}
)
defineEmits<{ 'update:directions': Recipe['directions'] }>()
</script>
<template>
    <div class="ingredients">
        <h3>Directions</h3>
        <ul>
            <li v-for="(direction, index) in props.directions" :key="index">
                <EditableText
                    type="paragraph"
                    v-model="direction.description"
                    :edit="props.edit"
                    @change="$emit('update:ingredients', props.directions)"
                />
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss"></style>
