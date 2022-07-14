<template>
    <div>
        <!-- <div>{{ store.name }}</div>
        <div>count: {{ doubleCount }}</div> -->
        <div>{{ count }}</div>
        <button @click="addCount">addCount</button>
        <ul>
            <li v-for="task in store.task" :key="task">{{task}}</li>
        </ul>
    </div>
</template>
<script lang="ts">
import { mapWritableState } from 'pinia'
import { defineComponent, computed } from 'vue'
import { useStore } from '../../store/admin'

export default defineComponent({
    setup() {
        const store = useStore()
        // const doubleCount = computed(() => {
        //     return store.count * 2
        // })
        //直接操作store修改
        function addCount() {
            store.count ++
        }
        // function addCount() {
        //     store.$patch({
        //         count: store.count + 1,
        //         name: 'Kobe'
        //     })
        // }
        //传入函数
        // function addCount() {
        //     store.$patch((state) => {
        //         state.task.push('speak')
        //     })
        // }
        store.$subscribe((mutation, state) => {
            mutation.type
            console.log(mutation.type)
            mutation.storeId
            console.log('mutation.storeId',mutation.storeId)
            console.log(state)
        })

        return {
            store,
            // doubleCount,
            addCount
        }
    },
    computed: {
        ...mapWritableState(useStore, ['count'])
    }
})
</script>

<style scoped>
</style>