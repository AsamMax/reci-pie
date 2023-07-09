<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from '@/stores/user'
import LoginView from './views/LoginView.vue'
import accountBadge from '@/assets/images/account.svg'
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
            <img :src="accountBadge" alt="logout" @click="userStore.logout" />
        </nav>
    </header>
    <main>
        <RouterView v-if="userStore.isLoggedIn" />
        <LoginView v-else />
    </main>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
header {
    position: sticky;
    inset: 0;
    bottom: auto;
    z-index: 1;
    backdrop-filter: $header-filter;
    max-width: $header-width;
    margin: 0 auto;

    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: $spacing-large;
        padding-bottom: $spacing-large;
        img {
            height: $header-image-size;
            aspect-ratio: 1/1;
            border-radius: 50%;
            cursor: pointer;
        }
        a {
            display: inline-block;
            color: var(--color-fg);
            text-decoration: none;
            font-weight: $font-weight-bold;
            padding: $spacing-xs $spacing-small;

            &:visited {
                color: var(--color-fg);
            }
            // loop from 1 to 4
            @for $i from 1 through 4 {
                &:nth-child(#{$i}) {
                    &.router-link-active,
                    &:hover {
                        border-bottom: $spacing-xs solid var(--color-accent-#{$i});
                    }
                }
            }
        }
    }
}

main {
    min-height: calc(100vh - 2 * 10vh);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10vh 0;
    align-items: center;
}
</style>
