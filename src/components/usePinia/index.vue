<template>
    <div>
        <!-- <div>{{ store.name }}</div>
        <div>count: {{ doubleCount }}</div> -->
        <div>{{ count }}</div>
        <button @click="addCount">addCount</button>
        <!-- <div>{{adminStore.doublePlusOne}}</div>
        <div>{{adminStore.dDouble}}</div> -->
        <div>User2: {{getUserId(2)}}</div>
        <ul>
            <li v-for="task in adminStore.task" :key="task">{{ task }}</li>
        </ul>
        <button @click="handleIncrement">incrementAc</button>
    </div>
</template>
<script lang="ts">
import { mapWritableState } from 'pinia'
import { defineComponent, computed } from 'vue'
import { useStore } from '../../store/admin/index'

export default defineComponent({
    setup() {
        const adminStore = useStore()
        
        //state
        // const doubleCount = computed(() => {
        //     return store.count * 2
        // })
        //直接操作store修改
        function addCount() {
            adminStore.count++
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
        adminStore.$subscribe((mutation, state) => {
            mutation.type
            console.log(mutation.type)
            mutation.storeId
            console.log('mutation.storeId', mutation.storeId)
            console.log(state)
        })

        //getter
        console.log(adminStore.otherMusicCount)

        //Actions
        function handleIncrement() {
            adminStore.increment()
        }


        return {
            adminStore,
            // doubleCount,
            addCount,
            getUserId: adminStore.getUserId,
            handleIncrement
        }
    },
    computed: {
        ...mapWritableState(useStore, ['count'])
    }
})
</script>

<style scoped>
</style>