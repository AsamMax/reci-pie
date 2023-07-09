<script setup lang="ts">
import { DietType } from '@/types/enums'
import { ref } from 'vue'
import Tag from './Tag.vue'

const open = ref(false)
const dialog = ref<HTMLDialogElement | null>(null)

function toggle() {
    open.value = !open.value
    if (open.value) {
        dialog.value?.showModal()
    } else {
        dialog.value?.close()
    }
}
defineExpose({
    toggle
})
defineEmits<{ (e: 'update:dietType', value: DietType): void }>()
</script>
<template>
    <dialog ref="dialog">
        <h3>Diet Type</h3>
        <div class="tags">
            <Tag
                v-for="singleType in DietType"
                :text="singleType"
                :key="singleType"
                @click="$emit('update:dietType', singleType), toggle()"
            />
        </div>
        <div class="button-group">
            <button @click="toggle">Close</button>
        </div>
    </dialog>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: $spacing-large;
    border: none;
    box-shadow: 0 0 $spacing-small black;
    .tags {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: $spacing-xs;
        margin-bottom: $spacing-small;
    }
}
</style>
