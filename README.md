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











