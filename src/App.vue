<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from '@/stores/user'
import LoginView from './views/LoginView.vue'

const userStore = useUserStore()
</script>

<template>
    <header v-if="userStore.isLoggedIn">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
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
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: var(--color-bg-accent);

    a {
        display: inline-block;
        padding: 1rem;
        color: var(--color-accent-1);
        text-decoration: none;

        &:visited {
            color: var(--color-accent-1);
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
