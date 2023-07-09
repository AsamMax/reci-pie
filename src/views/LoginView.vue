<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const usernameRef = ref('')
const passwordRef = ref('')

function login(event: Event) {
    const username = usernameRef.value
    const password = passwordRef.value
    userStore.login(username, password)
    event.preventDefault()
}

if (userStore.current) {
    router.push('/')
}
watch(
    () => userStore.current,
    (currentUser) => {
        if (currentUser) {
            router.push('/')
        }
    }
)
</script>
<template>
    <!-- Login form -->
    <div class="login">
        <h1>Login</h1>
        <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" v-model="usernameRef" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="passwordRef" />
            <button type="submit" @click="login">Login</button>
            <span>Dev-user: foo - bar</span>
        </form>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
// Add "card" look to login form
.login {
    background-color: var(--color-bg-accent);
    border-radius: $spacing-medium;
    padding: $spacing-large;
    width: $login-width;
    margin: 0 auto;
    form {
        display: flex;
        flex-direction: column;
        gap: $spacing-medium;
        input {
            background-color: var(--color-bg);
        }
    }
    h1 {
        text-align: center;
    }
    // Align button to the right
    button {
        display: block;
        margin-left: auto;
    }
}
</style>
