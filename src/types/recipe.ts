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
    ingredients: Ingredient[]
    directions: Direction[]
}