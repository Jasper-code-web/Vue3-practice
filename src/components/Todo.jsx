import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup(props) {
        let title = ref('')
        let todos = ref([{ title: 'Learn Vue3', done: false }, { title: 'sleep', done: false }])
        function addTodo() {
            todos.value.push({
                title: title.value,
                done: 'false'
            })
            title.value = ''
        }
        return () => <div>
            <input type="text" vModel={title.value} />
            <button onClick={addTodo}>click</button>
            <ul>
                {
                    todos.value.length ? todos.value.map(todo => {
                        return <li>{todo.value}</li>
                    }) : <li>no data</li>
                }
            </ul>
        </div>
    }
})