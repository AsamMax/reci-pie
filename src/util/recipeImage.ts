import { DietType } from "@/types/enums";
import type Recipe from "@/types/recipe";
import vegetarianImage from '@/assets/food_images/shakshuka.jpg'
import veganImage from '@/assets/food_images/couscous-salat.jpg'
import fishImage from '@/assets/food_images/salmon.jpg'
import seafoodImage from '@/assets/food_images/shrimps.jpg'
import poultryImage from '@/assets/food_images/chicken.jpg'
import beefImage from '@/assets/food_images/steak.jpg'
import porkImage from '@/assets/food_images/roast.jpg'
import otherImage from '@/assets/food_images/other.jpg'

export function getRecipeImage(recipe: Recipe): string {
    switch (recipe.dietType) {
        case DietType.vegetarian:
            return vegetarianImage
        case DietType.vegan:
            return veganImage
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
        case DietType.other:
            return otherImage
        default:
            return `https://via.placeholder.com/300x200?text=${recipe.dietType}`
    }
}