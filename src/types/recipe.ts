import type { DietType, MealType, RecipeTags } from "./enums"

export interface Ingredient {
    name: string
    quantity: number
    unit: string
}

export interface Direction {
    description: string
}

export interface SavedRecipe {
    id: number
    name: string
    description: string
    dietType: DietType
    mealType: MealType
    tags: RecipeTags[]
    ingredients: Ingredient[]
    directions: Direction[]
}

export type UnsavedRecipe = Omit<SavedRecipe, 'id'>

type Recipe = SavedRecipe | UnsavedRecipe

export default Recipe