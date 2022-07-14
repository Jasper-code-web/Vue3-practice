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

# state

定义state

```javascript
expor default useStore = defineStore('main', {
	state: () => {
        return {
            count: 0
        }
    }
    //或者
    state: () => ({
        count: 0
    })
})
```



访问state

```javascript
const state = useState()
state.count ++

//重置state
state.$reset()
```

直接映射state的数据

```javascript
import mapWritableState from 'pinia'
export default defineComponent({
    computed: {
        ...mapWritableState(useStore, ['count'])
    }
})
```

修改state的状态

```javascript
//直接修改state
function addCount() {
    store.count ++
}
//通过$patch修改
function addCount() {
    store.$patch({
       	count: store.count ++,
        name: 'kobe'
    })
}
//通过$patch传入函数
function addCount() {
    store.$patch((state) => {
        state.task.push('speak')
    })
}
```

替换state

```javascript
store.$state = { counter: 666, name: 'Paimon' }
```

监听state的修改状态

```javascript
store.subscribe((mutation, state) => {
    //修改state的方式
    //direct直接赋值
    //patch object 通过store.$patch传入对象
    //patch function 通过store.$patch传入函数
    mutation.type
    //store的id
    mutation.storeId
    //传给mutation.payload()的参数（仅限于mutation.type === 'patch function'）
    mutation.payload
})
```

当store在setup()中，当组件被卸载时，store也会被清除。如果想在组件被卸载后保留store，将{detached: true}作为第二个参数传给state substrible

```javascript
store.subStrible((mutation, state) => {}, {detached: true})
```

# Getters

相当于pinia的计算属性

```javascript
export default useStore = defineStore('main', {
    state: () => ({
        count: 0
    }),
    getter: {
        doubleCount: (state) => {
            return state.count
        }
        //在定义常规函数时，可以直接通过this访问state。但是需要明确定义返回类型。
        doublePlusOne(): number{
    		return this.store.count * 2 + 1
		}
    }
})
```

使用

```javascript
可以直接通过store访问getter
<div>{{store.doublePlusOne}}</div>
```













