<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
    <main>
        <RouterView />
    </main>
</template>

<style lang="scss">
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
    width: 100vw;
    height: 100vh;
    background-color: var(--color-bg);
    color: var(--color-fg);
    display: grid;
    place-items: center;
}
</style>
