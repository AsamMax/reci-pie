<script setup lang="ts">
import Searchbar from '@/components/Searchbar.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import type Recipe from '@/types/recipe'
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const recipies = ref<Recipe[]>([])

function loadRecipes() {
    // request from backend
    fetch('http://127.0.0.1:8000/recipies/', {
        headers: {
            Authorization: `Bearer ${userStore.token}`
        }
    })
        .then((response) => response.json())
        .then((data) => {
            recipies.value = data
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}
onMounted(() => {
    loadRecipes()
})
</script>

<template>
    <div class="wrapper">
        <Searchbar class="search" />
        <div class="recipeGrid">
            <RecipeCard v-for="recipe in recipies" :key="recipe.id" :recipe="recipe" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    text-align: center;
    .search {
        margin: 0 auto 4rem auto;
        width: 70%;
    }
    .recipeGrid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }
}
</style>
