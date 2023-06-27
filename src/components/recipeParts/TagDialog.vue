<script setup lang="ts">
import { RecipeTags } from '@/types/enums'
import { ref } from 'vue'
import Tag from './Tag.vue'

const props = withDefaults(
    defineProps<{
        tags: RecipeTags[]
    }>(),
    {
        tags: () => [] // function required since arrays are mutable
    }
)

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
const emit = defineEmits<{ (e: 'update:tags', value: RecipeTags[]): void }>()

function toggleTag(tag: RecipeTags) {
    if (props.tags.includes(tag)) {
        props.tags.splice(props.tags.indexOf(tag), 1)
    } else {
        props.tags.push(tag)
    }
    emit('update:tags', props.tags)
}
</script>
<template>
    <dialog ref="dialog">
        <h3>Tags</h3>
        <div class="tags">
            <Tag
                :class="{ inactive: !props.tags.includes(tag) }"
                v-for="tag in RecipeTags"
                :text="tag"
                :key="tag"
                @click="toggleTag(tag)"
            />
        </div>
        <div class="button-group">
            <button @click="toggle">Close</button>
        </div>
    </dialog>
</template>

<style scoped lang="scss">
dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
    border: none;
    box-shadow: 0 0 0.5rem black;
    .tags {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.3rem;
        margin-bottom: 0.5rem;
        .inactive {
            opacity: 0.5;
        }
    }
}
</style>
