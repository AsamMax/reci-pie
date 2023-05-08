<script setup lang="ts">
import type Recipe from '@/types/recipe'

const props = withDefaults(
    defineProps<{
        ingredients: Recipe['ingredients']
        edit: boolean
    }>(),
    {}
)
defineEmits<{ 'update:ingredients': Recipe['ingredients'] }>()
</script>
<template>
    <div class="ingredients">
        <h3>Ingredients</h3>
        <ul>
            <li v-for="(ingredient, index) in props.ingredients" :key="index">
                <input
                    type="text"
                    v-model="ingredient.name"
                    :disabled="!props.edit"
                    @change="$emit('update:ingredients', props.ingredients)"
                />
                <input
                    type="text"
                    v-model="ingredient.quantity"
                    :disabled="!props.edit"
                    @change="$emit('update:ingredients', props.ingredients)"
                />
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss"></style>
