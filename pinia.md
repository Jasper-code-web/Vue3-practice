# store

store是使用defineStore定义的

```javascript
import {defineStore} from 'pinia'
export const useStore = defineStore('main'/* id必传，pinia使用它将store连接到devtool */, {
})
```

```javascript
import { useStore } from "../pIndex";
import {storeToRef} from 'pinia'
export default defineComponent({
    setup() {
        const store = useStore()
        //store是一个reactive包裹的对象，不能直接对它进行解构，会破坏它的响应式
        //const { name, doubleCount } = store
        
        //从store中提取数据同时保持响应式，使用storeToRefs()。它将为响应式属性创建refs。但是只能使用store的状态，不能调用操作
        const {name, doubleCount} = storeToRefs(store)
        return {
            name,
            doubleCount
        }
    }
})
```

