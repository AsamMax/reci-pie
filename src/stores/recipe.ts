import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Recipe from '@/types/recipe'

export const useRecipeStore = defineStore('recipe', () => {
    const recipe = ref<Recipe>()

    function loadRecipe(id: number) {
        fetch(`http://127.0.0.1:8000/recipies/${id}`)
            .then(response => response.json())
            .then(data => {
                recipe.value = data
            })
            .catch(error => {
                console.error(error)
            })
    }
    return { recipe, loadRecipe }
})
