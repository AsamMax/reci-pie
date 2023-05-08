import type { DietType, MealType, RecipeTags } from "./enums"

export interface Ingredient {
    name: string
    quantity: number
    unit: string
}

export interface Direction {
    description: string
}

export default interface Recipe {
    id: number
    name: string
    description: string
    dietType: DietType
    mealType: MealType
    tags: RecipeTags[]
    ingredients: Ingredient[]
    directions: Direction[]
}