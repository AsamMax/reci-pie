<script setup lang="ts">
import type Recipe from '@/types/recipe'
import EditableText from '@/components/IO/EditableText.vue'
import EditableIngredients from '@/components/recipeParts/EditableIngredients.vue'
import EditableDirections from '@/components/recipeParts/EditableDirections.vue'
import Tag from './recipeParts/Tag.vue'
import { ref } from 'vue'
import TypeDialog from './recipeParts/TypeDialog.vue'

const props = withDefaults(
    defineProps<{
        recipe: Recipe
        edit: boolean
    }>(),
    {}
)
const emit = defineEmits<{ (e: 'update:recipe', value: Recipe): void }>()

const typeDialog = ref<typeof TypeDialog | null>(null)
</script>
<template>
    <div class="card">
        <div class="general">
            <img
                src="https://img.chefkoch-cdn.de/rezepte/1109971217065453/bilder/1085864/crop-960x720/shakshuka.jpg"
            />
            <div class="column">
                <EditableText
                    class="name"
                    type="headline"
                    v-model="props.recipe.name"
                    :edit="props.edit"
                />
                <Tag
                    :text="props.recipe.dietType"
                    @click="props.edit && typeDialog?.toggle()"
                ></Tag>
                <TypeDialog ref="typeDialog" @update:diet-type="props.recipe.dietType = $event" />
                <Tag :text="props.recipe.mealType"></Tag>
                <div class="tagCloud">
                    <Tag v-for="tag in props.recipe.tags" :text="tag" :key="tag" />
                </div>
            </div>
            <div class="button-group"><slot name="buttons" /></div>
        </div>
        <div class="ingredients-and-nutrition">
            <div>
                <h3>Ingredients</h3>
                <EditableIngredients
                    v-model:ingredients="props.recipe.ingredients"
                    @update:ingredients="emit('update:recipe', props.recipe)"
                    :edit="props.edit"
                />
            </div>
            <div>
                <h3>Description</h3>
                <EditableText
                    type="paragraph"
                    v-model="props.recipe.description"
                    :edit="props.edit"
                />
            </div>
        </div>
        <div class="directions">
            <h3>Directions</h3>
            <EditableDirections
                v-model:directions="props.recipe.directions"
                @update:directions="emit('update:recipe', props.recipe)"
                :edit="props.edit"
            />
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
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem black;
    h3 {
        font-size: x-large;
    }
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
        .column {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            .name {
                margin: 0;
            }
            .tagCloud {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                min-width: 50%;
            }
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
        > * {
            flex-basis: 100%;
        }
    }
}
</style>
