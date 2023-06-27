<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import RecipeCard from '@/components/RecipeCard.vue'
import type { SavedRecipe } from '@/types/recipe'
import { onMounted, ref } from 'vue'

const userStore = useUserStore()
const recipies = ref<SavedRecipe[]>([])

onMounted(() => {
    // request from backend
    fetch(
        import.meta.env.VITE_API_RECIPIES_URL +
            '?' +
            new URLSearchParams({
                order: 'random',
                limit: '3'
            }),
        {
            headers: {
                Authorization: `Bearer ${userStore.token}`
            }
        }
    )
        .then((response) => response.json())
        .then((data) => {
            recipies.value = data
        })
        .catch((error) => {
            console.error('Error:', error)
        })
})
</script>
<template>
    <div>
        <div class="column">
            <h1>What to eat?</h1>
            <p>How about one of these?</p>
            <div class="row">
                <RecipeCard
                    v-for="recipe in recipies"
                    v-if="recipies.length"
                    :key="recipe.id"
                    :recipe="recipe"
                />
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}
</style>
