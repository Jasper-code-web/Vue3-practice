<template>
    <div>
        <span>{{store.name}}</span>
    </div>
</template>
<script lang="ts" setup >
import {useStore} from '@/store/admin/index.ts'
const store = useStore()

</script>