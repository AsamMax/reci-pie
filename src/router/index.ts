import { createRouter, createWebHistory } from 'vue-router'
import AllRecipiesView from '../views/AllRecipiesView.vue'
import WhatToEatView from '@/views/WhatToEatView.vue'
import FridgeModeView from '@/views/FridgeModeView.vue'
import DinnerSpinnerView from '@/views/DinnerSpinnerView.vue'
import LoginView from '@/views/LoginView.vue'
import { useUserStore } from '@/stores/user'
import SingleRecipeView from '@/views/SingleRecipeView.vue'

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
            path: '/recipies/new',
            name: 'new recipie',
            component: SingleRecipeView,
            meta: {
                requiresAuth: true,
                inNavigation: false
            }
        },
        {
            path: '/recipies/:id',
            name: 'single recipe',
            component: SingleRecipeView,
            meta: {
                requiresAuth: true,
                inNavigation: false
            },
            props: true
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
                inNavigation: false
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


router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in (userStore)
        // if not, redirect to login page.
        if (!userStore.isLoggedIn) {
            next({
                path: '/login'
            })
            return
        }
    } else {
        // if the user is logged in, don't let them go to the login page
        if (userStore.isLoggedIn) {
            next({
                path: '/'
            })
            return
        }
    }
    next() // make sure to always call next()!
})


export default router
