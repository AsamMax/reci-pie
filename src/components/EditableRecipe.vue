<script setup lang="ts">
import type Recipe from '@/types/recipe'
import EditableText from '@/components/IO/EditableText.vue'
import EditableIngredients from '@/components/recipeCardParts/EditableIngredients.vue'
import EditableDirections from '@/components/recipeCardParts/EditableDirections.vue'

const props = withDefaults(
    defineProps<{
        recipe: Recipe
        edit: boolean
    }>(),
    {}
)
function log() {
    console.log(props.recipe)
}
</script>
<template>
    <div class="card">
        <div class="general">
            <img
                src="https://img.chefkoch-cdn.de/rezepte/1109971217065453/bilder/1085864/crop-960x720/shakshuka.jpg"
            />
            <EditableText
                class="name"
                type="headline"
                v-model="props.recipe.name"
                :edit="props.edit"
            />
            <div class="button-group"><slot name="buttons" /></div>
        </div>
        <div class="ingredients-and-nutrition">
            <EditableIngredients
                v-model:ingredients="props.recipe.ingredients"
                :edit="props.edit"
            />
            <EditableText type="paragraph" v-model="props.recipe.description" :edit="props.edit" />
        </div>
        <div class="directions">
            <EditableDirections :directions="props.recipe.directions" :edit="props.edit" />
        </div>
    </div>
</template>
<style scoped lang="scss">
.card {
    display: flex;
    flex-direction: column;
    width: 95vw;
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem black;
    .general {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        > * {
            width: calc(100% / 3);
        }
        img {
            max-height: 20em;
            object-fit: cover;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
        }
        .name {
            margin: 0;
        }
        .button-group {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;
        }
    }
    .ingredients-and-nutrition {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1rem;
        margin-top: 1rem;
    }
}
</style>
