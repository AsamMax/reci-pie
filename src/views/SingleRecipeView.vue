<script setup lang="ts">
import EditableRecipe from '@/components/EditableRecipe.vue'
import { DietType, MealType, RecipeTags } from '@/types/enums'
import type Recipe from '@/types/recipe'
import { useRecipeStore } from '@/stores/recipe'
import { ref } from 'vue'

const exampleRecipe = ref<Recipe>({
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
const recipeStore = useRecipeStore()
const edit = ref(false)
async function switchEdit() {
    if (edit.value) {
        await recipeStore.saveOrUpdate(exampleRecipe.value)
    }
    edit.value = !edit.value
}
</script>
<template>
    <EditableRecipe v-model:recipe="exampleRecipe" :edit="edit">
        <template #buttons>
            <button @click="switchEdit()">{{ edit ? 'save' : 'edit' }}</button>
        </template>
    </EditableRecipe>
</template>

<style scoped lang="scss"></style>
