<script setup lang="ts">
import TheCompleteRecipe from '@/components/TheCompleteRecipe.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <TheCompleteRecipe :id="Number(route.params.id)" />
</template>
