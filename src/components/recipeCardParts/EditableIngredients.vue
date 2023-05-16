<script setup lang="ts">
import type Recipe from '@/types/recipe'
import EditableText from '@/components/IO/EditableText.vue'
import EditableNumber from '@/components/IO/EditableNumber.vue'
import { computed, toRefs, watch } from 'vue'

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
                quantity: 0,
                unit: ''
            })
        }
    } else {
        while (props.ingredients[props.ingredients.length - 1].name.trim() == '') {
            props.ingredients.pop()
        }
    }
    console.log(props.ingredients)

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
        <h3>Ingredients</h3>
        <ul>
            <li v-for="(ingredient, index) in ingredients" :key="index">
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
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
.ingredients {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ul {
        padding: 0;
        margin: 0;

        li {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
        }
    }
}
</style>
