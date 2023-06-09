<script setup lang="ts">
import router from '@/router'
import { useRecipeStore } from '@/stores/recipe'
import type { SavedRecipe } from '@/types/recipe'
import { onMounted, ref } from 'vue'

const numberOfRecipies = 8

const recipeStore = useRecipeStore()
const recipies = ref<SavedRecipe[]>([])
const pieces = ref<HTMLDivElement | null>(null)

onMounted(async () => {
    recipies.value = await recipeStore.allRecipies(undefined, true, numberOfRecipies)
})
function spin() {
    if (!pieces.value) {
        return
    }
    const choice = Math.floor(Math.random() * recipies.value.length)
    const degrees = 360 / numberOfRecipies
    let rotation = (choice + 1) * degrees
    if (rotation < 180) {
        rotation += 360
    }
    pieces.value.style.transform = `rotate(-${rotation}deg)`
    setTimeout(() => {
        router.push(`/recipies/${recipies.value[choice].id}`)
    }, 6000)
}
</script>
// Based on https://codepen.io/GhostCode99/pen/BaQePwW
<template>
    <h1 v-if="recipies.length < 8">
        Sorry, this needs at least {{ numberOfRecipies }} recipies to work
    </h1>
    <template v-else>
        <h1>spin to find out what you'll eat tonight</h1>
        <div class="wheel">
            <button class="spin" @click="spin">spin</button>
            <div class="pieces" ref="pieces">
                <div v-for="recipe in recipies">{{ recipe.name }}</div>
            </div>
        </div>
    </template>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
h1 {
    margin-bottom: $spacing-medium;
}
.wheel {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    // The sizing of these elements is not extracted into variables, because they only make sense in this context and shouldn't be adjusted without looking at the exact result
    .pieces {
        width: 500px;
        height: 500px;
        background-color: #ccc;
        border-radius: 50%;
        border: 15px solid #dde;
        position: relative;
        overflow: hidden;
        transition: 5s;
        div {
            height: 50%;
            width: 42%;
            padding-top: 3%;
            position: absolute;
            clip-path: polygon(100% 0, 50% 100%, 0 0);
            transform: translateX(-50%);
            transform-origin: bottom;
            text-align: center;
            display: flex;
            align-items: start;
            justify-content: center;
            color: var(--color-bg);
            left: 29%;
            overflow-wrap: break-word;
            @for $i from 1 through 8 {
                &:nth-child(#{$i}) {
                    background-color: var(--color-wheel-#{$i});
                    transform: rotate(calc(360deg / 8 * #{$i}));
                }
            }
        }
    }

    .spin {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        background-color: var(--color-bg-accent);
        border: $spacing-small solid var(--color-bg);
        color: var(--color-fg);
        aspect-ratio: 1 / 1;
        width: $spinner-button-size;
        border-radius: 50%;
        padding: 0;
    }
}
</style>
