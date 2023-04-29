<script setup lang="ts"></script>
<template>
    <!-- Login form -->
    <div class="login">
        <h1>Login</h1>
        <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
// Add "card" look to login form
.login {
    background-color: var(--color-bg-accent);
    border-radius: 1rem;
    padding: 2rem;
    width: min(30vw, 500px);
    margin: 0 auto;
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
