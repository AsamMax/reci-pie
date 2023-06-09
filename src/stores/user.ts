import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type User from '@/types/user'

export const useUserStore = defineStore('user', () => {
    // load the token from localStorage
    const token = ref<string | undefined>(localStorage.getItem('token') ?? undefined)
    const current = ref<User | undefined>()
    const isLoggedIn = computed(() => token.value !== undefined)

    function login(username: string, password: string) {
        // send as form data
        fetch(import.meta.env.VITE_API_TOKEN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                username,
                password
            })
        }).then(response => response.json())
            .then(data => {
                token.value = data.access_token
                localStorage.setItem('token', data.access_token)
                loadUser()
            })
            .catch(error => {
                console.error(error)
            })
    }
    function loadUser() {

        fetch(import.meta.env.VITE_API_ME_URL, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            // In the future, maybe handle different errors seperately
            throw new Error(response.status + ' Something went wrong')
        })
            .then(data => {
                current.value = data
            })
            .catch(error => {
                logout()
                console.error(error)
            })
    }
    function logout() {
        localStorage.removeItem('token')
        token.value = undefined
        current.value = undefined
    }

    // when loading the store, try to load the user
    if (token.value && !current.value) {
        loadUser()
    }

    return { current, token, isLoggedIn, login, logout }
})
