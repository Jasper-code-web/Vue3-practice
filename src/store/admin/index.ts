import {defineStore} from 'pinia'

export const useStore = defineStore('admin', {
    state: () => {
        return {
            name: 'Jasper'
        }
    }
})