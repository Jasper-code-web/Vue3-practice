import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        let title = ref('')
        let todos = ref([{title: 'learn Vue', done: true}, {title: 'sleep', done: false}])
        function addTodo() {
            todos.value.push({
                title: title.value,
                done: false
            })
            title.value = ''
        }
        return () => <div>
            <input type="text" vModel={title.value} />
            <button onClick={addTodo}>click</button>
            <ul>
                {
                    todos.value.length ? todos.value.map(todo => {
                        return <li>{todo.title}</li>
                    }) : <li>no data</li>
                }
            </ul>
        </div>
    }
})