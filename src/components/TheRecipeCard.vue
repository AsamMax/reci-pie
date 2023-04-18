<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import dynamicStringInput from '@/components/IO/dynamicStringInput.vue'
import { ref } from 'vue';

const counter = useCounterStore()

const headline = ref("Shakshuka With Feta")
const description = ref("Hier sollte eine Beschreibung stehen, die das Rezept kurz beschreibt.")

const edit = ref(false)

</script>
// Very loosely based on https://codepen.io/THEORLAN2/pen/bpBeyv
<template>
    <article id="recipe">
        <img src="https://s-media-cache-ak0.pinimg.com/736x/57/98/9f/57989f2a2e186e38bf93429aa395120c.jpg" />
        <div id="bubbles">
            <div class="bubble">
                50 <br />
                tests
            </div>
            <div class="bubble" @click="counter.increment()">
                {{ counter.count }} <br />
                sekunden
            </div>
        </div>
        <div id="editIcons">
            <div class="icon" v-if="edit" @click="edit = !edit">
                👁
            </div>
            <div class="icon" v-else @click="edit = !edit">
                ✒
            </div>
        </div>
        <div id="body">
            <dynamicStringInput v-model="headline" class="description" type="headline" :editable="edit" />
            <dynamicStringInput v-model="description" class="description" type="paragraph" :editable="edit" />
            <h2>Ingredients</h2>
            <ul>
                <li v-for="ingredient in [
                    '1/2 cup olive oil',
                    '1 onion, chopped',
                    '1 red bell pepper, chopped',
                    '1 green bell pepper, chopped',
                    '1 block feta cheese, crumbled',
                    '1/2 cup chopped fresh cilantro',
                    '1/2 cup chopped fresh parsley',
                    'Salt and pepper, to taste',
                    '4 eggs',
                    'lorem',
                    'ipsum',
                    'dolor',
                    'sit',
                    'amet',
                    'consectetur',
                    'adipiscing',
                    'elit',
                    'sed',
                    'do',
                    'eiusmod'
                ]" :key="ingredient">
                    {{ ingredient }}
                </li>
            </ul>
            <h2>Directions</h2>
            <ol>
                <li v-for="direction in [
                    'Heat the olive oil in a large skillet over medium heat. ',
                    'Add the onion and bell peppers, and cook until the onion is translucent and the bell peppers are tender, about 10 minutes.',
                    'Add the feta cheese, and cook until the cheese is melted, about 5 minutes.',
                    'Stir in the herbs, and cook until fragrant, about 1 minute.',
                    'Season with salt and pepper, to taste.',
                    'Crack the eggs into the skillet, and cook until the egg whites are set, but the yolks are still runny, about 5 minutes.'
                ]" :key="direction">
                    {{ direction }}
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
            color: var(--color-fg-accent);
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
            color: var(--color-fg-accent);
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
