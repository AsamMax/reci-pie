<script setup lang="ts">
import EditableRecipe from '@/components/EditableRecipe.vue'
import { DietType, MealType, RecipeTags } from '@/types/enums'
import type Recipe from '@/types/recipe'
import { ref } from 'vue'

const exampleRecipe = ref<Recipe>({
    id: 1,
    name: 'Example Recipe',
    ingredients: [
        {
            name: 'Example Ingredient',
            quantity: 1,
            unit: 'Example Unit'
        }
    ],
    directions: [
        {
            description: 'Example Direction'
        }
    ],
    description: 'Example Description',
    dietType: DietType.vegetarian,
    mealType: MealType.dinner,
    tags: [RecipeTags.cheap, RecipeTags.easy]
})
const edit = ref(false)
</script>
<template>
    <EditableRecipe v-model:recipe="exampleRecipe" :edit="edit">
        <template #buttons>
            <button @click="edit = !edit">edit</button>
        </template>
    </EditableRecipe>
</template>

<style scoped lang="scss"></style>
