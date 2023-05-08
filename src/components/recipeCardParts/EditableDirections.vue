<script setup lang="ts">
import type Recipe from '@/types/recipe'

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
        <h3>Ingredients</h3>
        <ul>
            <li v-for="(direction, index) in props.directions" :key="index">
                <input
                    type="text"
                    v-model="direction.description"
                    :disabled="!props.edit"
                    @change="$emit('update:ingredients', props.directions)"
                />
                <input
                    type="text"
                    v-model="direction.time"
                    :disabled="!props.edit"
                    @change="$emit('update:ingredients', props.directions)"
                />
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss"></style>
