<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from '@/stores/user'
import LoginView from './views/LoginView.vue'

const userStore = useUserStore()
</script>

<template>
    <header v-if="userStore.isLoggedIn">
        <nav>
            <RouterLink to="/">all recipies</RouterLink>
            <RouterLink to="/about">what to eat?</RouterLink>
            <RouterLink to="/about">fridge mode</RouterLink>
            <RouterLink to="/about">dinner spinner</RouterLink>
            <img
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                alt="logo"
                @click="userStore.logout"
            />
        </nav>
    </header>
    <main>
        <RouterView v-if="userStore.isLoggedIn" />
        <LoginView v-else />
    </main>
</template>

<style scoped lang="scss">
header {
    position: absolute;
    inset: 0;
    bottom: auto;
    z-index: 1;
    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 2rem;
        img {
            height: 5rem;
            aspect-ratio: 1/1;
            border-radius: 50%;
            cursor: pointer;
        }
        a {
            display: inline-block;
            padding: 1rem;
            color: var(--color-fg);
            text-decoration: none;
            border-radius: 1em;

            &:visited {
                color: var(--color-fg);
            }
            // loop from 1 to 4
            @for $i from 1 through 4 {
                &:nth-child(#{$i}) {
                    background-color: var(--color-accent-#{$i});
                }
            }
        }
    }
}

main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 4rem 0;
    align-items: center;
}
</style>
