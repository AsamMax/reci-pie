import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SavedRecipe } from '@/types/recipe'
import { useUserStore } from './user'
import type { UnsavedRecipe } from '@/types/recipe'

export const useRecipeStore = defineStore('recipe', () => {
    const cachedRecipe = ref<SavedRecipe>()
    const userStore = useUserStore()

    async function load(id: number) {
        if (cachedRecipe.value?.id === id) { return cachedRecipe.value; }
        const response = await fetch(import.meta.env.VITE_API_RECIPIES_URL + id, {
            headers: {
                Authorization: `Bearer ${userStore.token}`
            }
        })
        cachedRecipe.value = await response.json()
        return cachedRecipe.value
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
        cachedRecipe.value = await response.json() as SavedRecipe
        return cachedRecipe.value
    }

    async function allRecipies(search?: string, randomOrder: boolean = false, limit?: number): Promise<SavedRecipe[]> {
        var url = new URL(import.meta.env.VITE_API_RECIPIES_URL)
        if (randomOrder) {
            url.searchParams.append('order', 'random')
        }
        if (limit) {
            url.searchParams.append('limit', limit.toString())
        }
        if (search) {
            url.searchParams.append('search', search)
        }
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${userStore.token}`
            }
        })
        if (!response.ok) {
            console.error('Error:', response.json())
            throw new Error('Couldn\'t load recipies')
        }
        return await response.json()
    }
    return { load, saveOrUpdate, allRecipies }
})
