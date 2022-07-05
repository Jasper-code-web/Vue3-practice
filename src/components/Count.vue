<template>
    <div @click="add">
        {{count}}
    </div>
    <div @click="asyncAdd">
        {{count}}
        {{double}}
    </div>
</template>
<script setup>
import {computed} from 'vue'
import { useStore } from 'vuex';
// import {useStore} from '../store/gvuex'

const store = useStore()

let count = computed(() => store.state.count)

let double = computed(() => store.getters.double)

function asyncAdd() {
    store.dispatch('asyncAdd')
}

function add() {
    store.commit('add')
}
</script>