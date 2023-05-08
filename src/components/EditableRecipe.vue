<script setup lang="ts">
import type Recipe from '@/types/recipe'

const props = withDefaults(
    defineProps<{
        recipe: Recipe
        edit: boolean
    }>(),
    {}
)
</script>
<template>
    <div class="card">
        <div class="general">
            <img />
            <h2>Title</h2>
            <slot name="buttons" />
        </div>
        <div class="ingredients-and-nutrition">
            <EditableIngredients :ingredients="props.recipe.ingredients" :edit="props.edit" />
            <p>TODO: editable-nutrition</p>
        </div>
        <div class="directions">
            <EditableDirections :instructions="props.recipe.directions" :edit="props.edit" />
        </div>
    </div>
</template>
<style scoped lang="scss"></style>
