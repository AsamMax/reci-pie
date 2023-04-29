<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/login">Login</RouterLink>
        </nav>
    </header>
    <main>
        <RouterView />
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
        color: var(--color-fg-accent);
        text-decoration: none;

        &:visited {
            color: var(--color-fg-accent);
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
