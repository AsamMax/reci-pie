import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Recipe from '@/types/recipe'
import { useUserStore } from './user'

export const useRecipeStore = defineStore('recipe', () => {
    const recipe = ref<Recipe>()
    const userStore = useUserStore()

    function loadRecipe(id: number) {
        fetch(`http://127.0.0.1:8000/recipies/${id}`, {
            headers: {
                Authorization: `Bearer ${userStore.token}`
            }
        })
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
