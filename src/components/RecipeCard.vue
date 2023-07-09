<script setup lang="ts">
import CoverImage from '@/components/CoverImage.vue'
import router from '@/router'
import type { SavedRecipe } from '@/types/recipe'
import DietBadge from './recipeParts/DietBadge.vue'
import Tag from './recipeParts/Tag.vue'
import { getRecipeImage } from '@/util/recipeImage'
// if no recipe is given, display a skeleton
const props = defineProps<{
    recipe: SavedRecipe
}>()

// redirect to recipe page
const goToRecipe = () => {
    if (props.recipe) {
        router.push({ name: 'single recipe', params: { id: props.recipe.id } })
    }
}
</script>
<template>
    <div class="card" :class="{ skeleton: props.recipe === undefined }" @click="goToRecipe">
        <DietBadge :diet="props.recipe?.dietType" />
        <CoverImage class="image" :image="getRecipeImage(props.recipe)" />
        <div class="content">
            <h2 class="title">{{ props.recipe?.name }}</h2>
            <div class="tags">
                <Tag
                    v-for="tag in [
                        props.recipe?.dietType,
                        props.recipe?.mealType,
                        ...(props.recipe?.tags ?? [])
                    ]"
                    :text="tag"
                    :key="tag"
                />
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import '@/assets/variables.scss';
.card {
    isolation: isolate;
    h2 {
        text-align: center;
        font-weight: $font-weight-bold;
        margin: $spacing-medium 0;
    }
    .image {
        width: 100%;
        aspect-ratio: 3/2;
        border-radius: $spacing-medium;
    }
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: $spacing-small;
        margin-top: $spacing-small;
    }
}
</style>
