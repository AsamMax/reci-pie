import type { DietType, MealType, RecipeTags } from "./enums"

export interface Ingredient {
    id: number
    name: string
    quantity: number
    unit: string
}

export interface Direction {
    id: number
    description: string
    time: number
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