import {defineStore} from 'pinia'

export const useStore = defineStore('admin', {
    state: () => {
        return {
            name: 'Jasper',
            count: 1,
            task: ['student', 'sleep']
        }
    }
})