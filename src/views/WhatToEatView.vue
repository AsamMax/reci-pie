<script setup lang="ts">
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
@import '@/assets/variables.scss';
.column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-medium;
}
.row {
    max-width: $recipe-grid-width;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax($recipe-grid-card-min-width, $recipe-grid-card-max-width)
    );
    gap: $spacing-large;
}
</style>
