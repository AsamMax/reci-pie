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
        const response = await fetch(import.meta.env.VITE_API_RECIPIES_URL + id, {
            headers: {
                Authorization: `Bearer ${userStore.token}`
            }
        })
        recipe.value = await response.json()
        return recipe.value
    }

    async function saveOrUpdate(value: SavedRecipe | UnsavedRecipe) {
        let response: Response
        if ('id' in value) {
            response = await fetch(import.meta.env.VITE_API_RECIPIES_URL + value.id, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${userStore.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            })
        } else {
            response = await fetch(import.meta.env.VITE_API_RECIPIES_URL, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${userStore.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            })
        }
        recipe.value = await response.json() as SavedRecipe
        return recipe.value
    }
    return { cached: recipe, load, saveOrUpdate }
})
