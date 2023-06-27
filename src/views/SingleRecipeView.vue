<script setup lang="ts">
import EditableRecipe from '@/components/EditableRecipe.vue'
import { DietType, MealType, RecipeTags } from '@/types/enums'
import type Recipe from '@/types/recipe'
import { useRecipeStore } from '@/stores/recipe'
import { onMounted, ref } from 'vue'
import router from '@/router'

const props = withDefaults(
    defineProps<{
        id?: string
    }>(),
    { id: undefined }
)

const editableRecipe = ref<Recipe>({
    name: 'Example Recipe',
    ingredients: [
        {
            name: 'Love',
            quantity: 1,
            unit: 'tbsp'
        }
    ],
    directions: [
        {
            description: 'Mix well'
        }
    ],
    description: 'Example Description',
    dietType: DietType.vegetarian,
    mealType: MealType.dinner,
    tags: [RecipeTags.cheap, RecipeTags.easy]
})
const recipeStore = useRecipeStore()
const loading = ref(true)
const edit = ref(false)

onMounted(() => {
    if (props.id) {
        recipeStore.load(parseInt(props.id)).then((recipe) => {
            if (recipe != undefined) {
                editableRecipe.value = recipe
            }
            loading.value = false
        })
    } else {
        // new recipe
        loading.value = false
        edit.value = true
    }
})

async function switchEdit() {
    if (edit.value) {
        const recipe = await recipeStore.saveOrUpdate(editableRecipe.value)
        editableRecipe.value = recipe
        router.push({ name: 'single recipe', params: { id: recipe.id } })
    }
    edit.value = !edit.value
}
</script>
<template>
    <EditableRecipe v-model:recipe="editableRecipe" :edit="edit">
        <template #buttons>
            <button :disabled="loading" @click="switchEdit()">{{ edit ? 'save' : 'edit' }}</button>
        </template>
    </EditableRecipe>
</template>

<style scoped lang="scss"></style>
