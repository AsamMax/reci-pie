<script setup lang="ts">
import { computed } from 'vue'
import { DietType } from '@/types/enums'
import veganImage from '@/assets/images/vegan.svg'
import vegetarianImage from '@/assets/images/vegetarian.svg'
import fishImage from '@/assets/images/fish.svg'
import seafoodImage from '@/assets/images/seafood.svg'
import poultryImage from '@/assets/images/poultry.svg'
import beefImage from '@/assets/images/beef.svg'
import porkImage from '@/assets/images/pork.svg'
import otherImage from '@/assets/images/other.svg'

const props = defineProps<{
    diet?: DietType
}>()
const badgeSVG = computed(() => {
    switch (props.diet) {
        case DietType.vegan:
            return veganImage
        case DietType.vegetarian:
            return vegetarianImage
        case DietType.fish:
            return fishImage
        case DietType.seafood:
            return seafoodImage
        case DietType.poultry:
            return poultryImage
        case DietType.beef:
            return beefImage
        case DietType.pork:
            return porkImage
        default:
        case DietType.other:
            return otherImage
    }
})
</script>
<template>
    <div class="categoryBadge">
        <img :src="badgeSVG" />
    </div>
</template>
<style lang="scss">
.categoryBadge {
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    background-color: var(--color-grey);
    z-index: 1;
    border-radius: 1em;
    img {
        width: 2em;
        height: 2em;
        margin: 0.7em 1em 0.5em;
        filter: invert(1);
    }
}
</style>
