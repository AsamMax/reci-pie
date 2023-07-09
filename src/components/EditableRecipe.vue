<script setup lang="ts">
import type Recipe from '@/types/recipe'
import EditableText from '@/components/IO/EditableText.vue'
import EditableIngredients from '@/components/recipeParts/EditableIngredients.vue'
import EditableDirections from '@/components/recipeParts/EditableDirections.vue'
import Tag from './recipeParts/Tag.vue'
import { ref } from 'vue'
import TypeDialog from './recipeParts/TypeDialog.vue'
import DietDialog from './recipeParts/DietDialog.vue'
import TagDialog from './recipeParts/TagDialog.vue'
import { getRecipeImage } from '@/util/recipeImage'

const props = withDefaults(
    defineProps<{
        recipe: Recipe
        edit: boolean
    }>(),
    {}
)
const emit = defineEmits<{ (e: 'update:recipe', value: Recipe): void }>()

const dietDialog = ref<typeof DietDialog | null>(null)
const typeDialog = ref<typeof TypeDialog | null>(null)
const tagDialog = ref<typeof TagDialog | null>(null)
</script>
<template>
    <div class="card">
        <div class="general">
            <img :src="getRecipeImage(props.recipe)" />
            <div class="column">
                <EditableText
                    class="name"
                    type="headline"
                    v-model="props.recipe.name"
                    :edit="props.edit"
                />
                <Tag :text="props.recipe.dietType" @click="props.edit && dietDialog?.toggle()" />
                <DietDialog ref="dietDialog" @update:diet-type="props.recipe.dietType = $event" />
                <Tag :text="props.recipe.mealType" @click="props.edit && typeDialog?.toggle()" />
                <TypeDialog ref="typeDialog" @update:meal-type="props.recipe.mealType = $event" />
                <div class="tagCloud">
                    <Tag
                        v-for="tag in props.recipe.tags"
                        :text="tag"
                        :key="tag"
                        @click="props.edit && tagDialog?.toggle()"
                    />
                </div>
                <TagDialog
                    :tags="props.recipe.tags"
                    ref="tagDialog"
                    @update:tags="props.recipe.tags = $event"
                />
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
@import '@/assets/variables.scss';
.card {
    display: flex;
    flex-direction: column;
    width: $recipe-edit-width;
    max-width: $recipe-edit-max-width;
    margin: 0 auto;
    padding: $spacing-medium;
    border: none;
    border-radius: $spacing-small;
    box-shadow: 0 0 $spacing-small black;
    h3 {
        font-size: $font-size-large;
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
            max-height: $recipe-edit-image;
            object-fit: cover;
            border-radius: $spacing-small;
            margin-bottom: $spacing-medium;
        }
        .column {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: $spacing-small;
            .name {
                margin: 0;
            }
            .tagCloud {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                gap: $spacing-small;
                min-width: 50%;
            }
        }
        .button-group {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: $spacing-medium;
            margin-top: $spacing-medium;
        }
    }
    .ingredients-and-nutrition {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        gap: $spacing-medium;
        margin-top: $spacing-medium;
        > * {
            flex-basis: 100%;
        }
    }
}
</style>
