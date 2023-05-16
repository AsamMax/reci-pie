import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Recipe from '@/types/recipe'
import { useUserStore } from './user'

export const useRecipeStore = defineStore('recipe', () => {
    const recipe = ref<Recipe>()
    const userStore = useUserStore()

    async function load(id: number) {
        const response = await fetch(`http://127.0.0.1:8000/recipies/${id}`, {
            headers: {
                Authorization: `Bearer ${userStore.token}`
            }
        })
        recipe.value = await response.json()
    }
    async function saveOrUpdate(value: Recipe, id?:number){
        
    }
    return { recipe, load,  }
})
