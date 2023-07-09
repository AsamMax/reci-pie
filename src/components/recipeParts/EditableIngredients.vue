<script setup lang="ts">
import type Recipe from '@/types/recipe'
import EditableText from '@/components/IO/EditableText.vue'
import EditableNumber from '@/components/IO/EditableNumber.vue'
import { computed, watch } from 'vue'

const props = withDefaults(
    defineProps<{
        ingredients: Recipe['ingredients']
        edit: boolean
    }>(),
    {}
)
const emit = defineEmits<{ (e: 'update:ingredients', value: Recipe['ingredients']): void }>()

function updateIngredients() {
    if (props.edit) {
        if (
            props.ingredients.length == 0 ||
            props.ingredients[props.ingredients.length - 1].name != ''
        ) {
            props.ingredients.push({
                name: '',
                quantity: 1,
                unit: ''
            })
        }
    } else {
        while (props.ingredients[props.ingredients.length - 1].name.trim() == '') {
            props.ingredients.pop()
        }
    }

    emit('update:ingredients', props.ingredients)
}

const ingredients = computed<Recipe['ingredients']>({
    get() {
        return props.ingredients
    },
    set(v: Recipe['ingredients']) {
        updateIngredients()
    }
})
watch(() => props.edit, updateIngredients)
</script>
<template>
    <div class="ingredients">
        <div class="ingredient" v-for="(ingredient, index) in ingredients" :key="index">
            <EditableText
                type="singleline"
                v-model="ingredient.name"
                @update:model-value="updateIngredients"
                :edit="props.edit"
            />
            <EditableNumber
                v-model="ingredient.quantity"
                @update:model-value="updateIngredients"
                :edit="props.edit"
            />
            <EditableText
                type="singleline"
                v-model="ingredient.unit"
                @update:model-value="updateIngredients"
                :edit="props.edit"
            />
        </div>
    </div>
</template>
<style scoped lang="scss">
@import '@/assets/variables.scss';
.ingredients {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-gap: $spacing-small;

    .ingredient {
        display: contents;
    }
}
</style>
