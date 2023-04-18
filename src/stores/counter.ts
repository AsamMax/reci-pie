import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const even = computed(()=> (count.value % 2) == 0)
    function increment() {
        count.value++
    }

    return { count, doubleCount, even, increment }
})
