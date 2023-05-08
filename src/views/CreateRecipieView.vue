<script setup lang="ts">
import EditableRecipe from '@/components/EditableRecipe.vue'
import { DietType, MealType, RecipeTags } from '@/types/enums'
import type Recipe from '@/types/recipe'

const exampleRecipe: Recipe = {
    id: 1,
    name: 'Example Recipe',
    ingredients: [
        {
            id: 1,
            name: 'Example Ingredient',
            quantity: 1,
            unit: 'Example Unit'
        }
    ],
    directions: [
        {
            id: 1,
            description: 'Example Direction',
            time: 1
        }
    ],
    description: 'Example Description',
    dietType: DietType.vegetarian,
    mealType: MealType.dinner,
    tags: [RecipeTags.cheap, RecipeTags.easy]
}
</script>
<template>
    <EditableRecipe :recipe="exampleRecipe" :edit="true" />
</template>

<style scoped lang="scss"></style>
