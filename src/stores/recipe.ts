import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SavedRecipe } from '@/types/recipe'
import { useUserStore } from './user'
import type { UnsavedRecipe } from '@/types/recipe'

export const useRecipeStore = defineStore('recipe', () => {
    const recipe = ref<SavedRecipe>()
    const userStore = useUserStore()

    async function load(id: number) {
        if (recipe.value?.id === id) { return recipe.value; }
        const response = await fetch(`http://127.0.0.1:8000/recipies/${id}`, {
            headers: {
                Authorization: `Bearer ${userStore.token}`
            }
        })
        recipe.value = await response.json()
        return recipe.value
    }
    async function saveOrUpdate(value: SavedRecipe | UnsavedRecipe) {

    }
    return { load, saveOrUpdate }
})
