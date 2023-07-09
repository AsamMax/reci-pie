<script setup lang="ts">
import Searchbar from '@/components/Searchbar.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import type { SavedRecipe } from '@/types/recipe'
import { onMounted, ref } from 'vue'
import { useRecipeStore } from '@/stores/recipe'

const recipeStore = useRecipeStore()
const recipies = ref<SavedRecipe[]>([])
const search = ref('')

async function loadRecipes() {
    console.log(search.value)

    recipies.value = await recipeStore.allRecipies(search.value)
}
onMounted(loadRecipes)
</script>

<template>
    <div class="wrapper">
        <Searchbar class="search" v-model:text="search" @update:text="loadRecipes()" />
        <div class="recipeGrid">
            <RecipeCard
                v-for="recipe in recipies"
                v-if="recipies.length"
                :key="recipe.id"
                :recipe="recipe"
            />
            <p v-else>sadly there are no reci-🥧s matching your search</p>
        </div>
    </div>
    <!-- new recipe -->
    <router-link to="/recipies/new" v-slot="{ href, navigate }">
        <button :href="href" @click="navigate">+</button>
    </router-link>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.wrapper {
    max-width: $recipe-grid-width;
    width: 100%;
    margin: 0 auto;
    padding: 0 $spacing-medium;
    text-align: center;
    .search {
        margin: 0 auto $spacing-xl auto;
        width: $recipe-grid-search-width;
    }
    .recipeGrid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(
            auto-fit,
            minmax($recipe-grid-card-min-width, $recipe-grid-card-max-width)
        );
        gap: $spacing-large;
    }
}
button {
    position: fixed;
    inset: auto $spacing-medium $spacing-medium auto;
    height: $spacing-xl;
    aspect-ratio: 1/1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $spacing-large;
    &:hover {
        background-color: var(--color-bg-accent);
    }
}
</style>
