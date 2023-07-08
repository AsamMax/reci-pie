<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import RecipeCard from '@/components/RecipeCard.vue'
import type { SavedRecipe } from '@/types/recipe'
import { onMounted, ref } from 'vue'
import { useRecipeStore } from '@/stores/recipe'

const recipeStore = useRecipeStore()
const recipies = ref<SavedRecipe[]>([])

onMounted(async () => {
    recipies.value = await recipeStore.allRecipies(undefined, true, 3)
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
