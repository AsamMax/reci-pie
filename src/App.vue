<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from '@/stores/user'
import LoginView from './views/LoginView.vue'
import router from './router'

const userStore = useUserStore()
</script>

<template>
    <header v-if="userStore.isLoggedIn">
        <nav>
            <!-- iterate through router paths -->
            <RouterLink
                v-for="route in router.options.routes.filter((route) => route.meta?.inNavigation)"
                :key="route.path"
                :to="route.path"
            >
                {{ route.name }}
            </RouterLink>
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
    position: fixed;
    inset: 0;
    bottom: auto;
    z-index: 1;
    backdrop-filter: blur(5px);
    max-width: 1500px;
    margin: 0 auto;

    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        img {
            height: 5rem;
            aspect-ratio: 1/1;
            border-radius: 50%;
            cursor: pointer;
        }
        a {
            display: inline-block;
            color: var(--color-fg);
            text-decoration: none;
            font-weight: 600;
            padding: 0.2em 0.5em;

            &:visited {
                color: var(--color-fg);
            }
            // loop from 1 to 4
            @for $i from 1 through 4 {
                &:nth-child(#{$i}) {
                    &.router-link-active,
                    &:hover {
                        border-bottom: 5px solid var(--color-accent-#{$i});
                    }
                }
            }
        }
    }
}

main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 10rem 0;
    align-items: center;
}
</style>
