<script setup lang="ts">
import Searchbar from '@/components/Searchbar.vue'
import RecipeCard from '@/components/RecipeCard.vue'
</script>

<template>
    <div class="wrapper">
        <Searchbar class="search" />
        <div class="recipeGrid">
            <RecipeCard v-for="_ in 15" :key="_" />
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
        margin: 4rem auto;
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
