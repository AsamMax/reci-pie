import { createRouter, createWebHistory } from 'vue-router'
import AllRecipiesView from '../views/AllRecipiesView.vue'
import RecipeView from '@/views/RecipeView.vue'
import WhatToEatView from '@/views/WhatToEatView.vue'
import FridgeModeView from '@/views/FridgeModeView.vue'
import DinnerSpinnerView from '@/views/DinnerSpinnerView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            alias: '/recipies',
            name: 'all recipies',
            component: AllRecipiesView,
            meta: {
                requiresAuth: true,
                inNavigation: true
            }
        },
        {
            path: '/recipies/:id',
            name: 'recipe',
            component: RecipeView,
            meta: {
                requiresAuth: true,
                inNavigation: false
            }
        },
        {
            path: '/what-to-eat',
            name: 'what to eat',
            component: WhatToEatView,
            meta: {
                requiresAuth: true,
                inNavigation: true
            }
        },
        {
            path: '/fridge',
            name: 'fridge mode',
            component: FridgeModeView,
            meta: {
                requiresAuth: true,
                inNavigation: true
            }
        },
        {
            path: '/dinner-spinner',
            name: 'dinner spinner',
            component: DinnerSpinnerView,
            meta: {
                requiresAuth: true,
                inNavigation: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: {
                requiresAuth: false,
                inNavigation: false
            }
        }
    ]
})

export default router
