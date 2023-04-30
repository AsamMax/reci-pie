<script setup lang="ts">
// image as prop
import { defineProps } from 'vue'
const props = defineProps<{ image: string }>()
</script>
<template>
    <div class="image" :style="{ backgroundImage: `url(${props.image})` }"></div>
</template>
<style scoped lang="scss">
.image {
    width: 100%;
    background-size: cover;
    background-position: center;
}
</style>
