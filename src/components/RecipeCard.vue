<script setup lang="ts">
import CoverImage from '@/components/CoverImage.vue'
import router from '@/router'
import type Recipe from '@/types/recipe'
import DietBadge from './DietBadge.vue'
// if no recipe is given, display a skeleton
const props = defineProps<{
    recipe?: Recipe
}>()

// redirect to recipe page
const goToRecipe = () => {
    if (props.recipe) {
        router.push({ name: 'single recipe', params: { id: props.recipe.id } })
    }
}
console.log(props.recipe?.name)
</script>
<template>
    <div class="card" :class="{ skeleton: props.recipe === undefined }" @click="goToRecipe">
        <DietBadge :diet="props.recipe?.dietType" />
        <CoverImage
            class="image"
            image="https://s-media-cache-ak0.pinimg.com/736x/57/98/9f/57989f2a2e186e38bf93429aa395120c.jpg"
        />
        <div class="content">
            <h2 class="title">{{ props.recipe?.name }}</h2>
            <div class="tags">
                <span
                    v-for="tag in [
                        props.recipe?.dietType,
                        props.recipe?.mealType,
                        ...(props.recipe?.tags ?? [])
                    ]"
                    class="tag"
                    >{{ tag }}</span
                >
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.card {
    isolation: isolate;
    h2 {
        text-align: center;
        font-weight: 600;
        margin: 0.7em 0;
    }
    .image {
        width: 100%;
        aspect-ratio: 3/2;
        border-radius: 1em;
    }
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        margin-top: 0.5em;
        .tag {
            flex-basis: calc(50% - 0.25em);
            padding: 0.25em 0.5em;
            border-radius: 1em;
            color: var(--color-bg);
            // loop from 1 to 4
            @for $i from 1 through 4 {
                &:nth-child(#{$i}) {
                    background-color: var(--color-accent-soft-#{$i});
                }
            }
        }
    }
}
</style>
