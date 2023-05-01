<script setup lang="ts">
import dynamicStringInput from '@/components/IO/dynamicStringInput.vue'
import { useRecipeStore } from '@/stores/recipe'
import { ref } from 'vue'

const props = defineProps<{
    id: number
}>()

const recipeStore = useRecipeStore()

if (recipeStore.recipe === undefined || recipeStore.recipe.id !== props.id) {
    recipeStore.loadRecipe(props.id)
}

const headline = ref('Shakshuka With Feta')
const description = ref('Hier sollte eine Beschreibung stehen, die das Rezept kurz beschreibt.')

const edit = ref(false)
</script>
// Very loosely based on https://codepen.io/THEORLAN2/pen/bpBeyv
<template>
    <article id="recipe">
        <img
            src="https://s-media-cache-ak0.pinimg.com/736x/57/98/9f/57989f2a2e186e38bf93429aa395120c.jpg"
        />
        <div id="bubbles">
            <div class="bubble">
                50 <br />
                tests
            </div>
            <div class="bubble">
                50 <br />
                tests
            </div>
        </div>
        <div id="editIcons">
            <div class="icon" v-if="edit" @click="edit = !edit">👁</div>
            <div class="icon" v-else @click="edit = !edit">✒</div>
        </div>
        <div id="body">
            <dynamicStringInput
                v-model="headline"
                class="description"
                type="headline"
                :editable="edit"
            />
            <dynamicStringInput
                v-model="description"
                class="description"
                type="paragraph"
                :editable="edit"
            />
            <h2>Ingredients</h2>
            <ul>
                <li v-for="ingredient in recipeStore.recipe?.ingredients || []">
                    {{ ingredient.name }}: {{ ingredient.quantity }} {{ ingredient.unit }}
                </li>
            </ul>
            <h2>Directions</h2>
            <ol>
                <li v-for="direction in recipeStore.recipe?.directions || []">
                    {{ direction.description }} {{ direction.time }}
                </li>
            </ol>
        </div>
    </article>
</template>

<style scoped lang="scss">
#recipe {
    width: min(80vw, 1000px);
    position: relative;
    background-color: var(--color-bg-accent);
    border-radius: 1rem;

    img {
        width: 100%;
        aspect-ratio: 5/2;
        object-fit: cover;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }

    #bubbles {
        position: absolute;
        inset: 0.5rem auto 0.5rem 0.5rem;

        .bubble {
            background-color: var(--color-bg);
            color: var(--color-accent-1);
            aspect-ratio: 1/1;
            border-radius: 100%;
            vertical-align: middle;
            text-align: center;
            padding-inline: 0.5rem;
            padding-top: 22.5%;
            margin-bottom: 10px;
        }
    }

    #editIcons {
        position: absolute;
        inset: 0.5rem 0.5rem 0.5rem auto;

        .icon {
            background-color: var(--color-bg);
            color: var(--color-accent-1);
            aspect-ratio: 1/1;
            border-radius: 100%;
            vertical-align: middle;
            text-align: center;
            padding-inline: 0.6rem;
            padding-top: 15%;
        }
    }

    #body {
        padding: 1rem;
    }
}
</style>
