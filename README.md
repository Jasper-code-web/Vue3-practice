# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## JSX

1) template是Vue3的基本写法。Vue其实会把template转换为render函数，组件运行时通过render函数去返回虚拟DOM。

2）h。返回一个虚拟节点(VNode)。参数type, props, children

```javascript
render() {
    return h('h1', {}, 'title')
}
```

3) defineComponent。从实现上来看，defineComponent只返会传递给它的对象。就类型而言，返回的值有一个合成类型的构造函数，用于手动渲染函数、TSX、IDE工具。

```javascript
import {defineComponent} from 'vue'
const MyComponent = defineComponent({
    data() {
        return {
            count: 1
        }
    },
    methods: {
        increment() {
            this.count++
        }
    }
})
```

或者返回setup函数，函数名称将作为组件名称

```javascript
import {defineComponent, ref} from 'vue'
const HelloWorld = defineComponent(function HelloWorld() {
    const count = ref(0)
    return {count}
})
```

```javascript
//JSX语法糖
const element = <h1 id="app">Hello,Geeking</h1>

//本质
const element = createVnode('h1', {id: "app"}, 'Hello,Geeking')
```

3) 使用JSX需要安装插件

```javascript
npm install @vuejs/plugin-vue-jsx -D

//vite.config.js引入
import vueJsx from '@vuejs/plugin-vue-jsx'
export default defineConfig({
    plugins: [vue(), vueJsx()]
})
```

4) 在setup返回的JSX中，使用vModel取代v-model,并且使用单个大括号包裹的形式传入变量title.value,然后使用onClick取代@click。循环清单渲染的时候，使用.map映射取代v-for,使用三元表达式取代v-if。

## Vue+TS

1) vue-router提供了Router和RouterRecordRaw两个路由类型。

## TS

### | 类型联合

```typescript
//限制多种类型
let course: number | string = 'vu3'
course1 = 2
course2 = false //error

//限制具体的值
type courseScore = 'good' | 'veryGood' | 'superGood'
let socre1: courseScore = 'good'
let score2: courseScore = 'veryGood'
```

### 定义函数

```typescript
//使用变量的方式定义函数。参数类型 => 返回值类型。
let add1: (a: number, b: number) => number = function (x: number, y: number): number => {return x + y}

//type关键字(类型别名)
let addType1 = type (a: number, b: number) => number
let add2: addType1 = function(x: number, y: number) {return x + y}

//接口
interface addType2 = {
    (a: number, b: number): number
}
let add3： addType2 = function(x: number, y: number) {return x + y}
```

### 环境类型

```typescript
let w: Window = window
let ele: HTMLElement = document.createElement('div')
let allDiv: NodeList = document.querySelectorAll('div')

ele.addEventListener('click', function(e: MouseEvent) {
    const args: IArguments = arguments
    w.alert(1)
    console.log(args)
}, false)
```

### Vue数据限定

```typescript
import {ref, Ref} from 'vue'
interface Todo{
    title: string,
    done: boolean
}
let todos: Ref<Todo[]> = ref([{title: 'learn', done: false}])
```

### 泛型

```typescript
function identity<T> (arg: T): T {
    return arg
}
//使用1
let out1 = identity<string>("myString")
//2 类型推断
let out2 = identity("myString")


//假设T的类型
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(T.length)
    return arg
}
```



















