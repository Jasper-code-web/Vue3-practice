function useTodos() {
    let title = ref('');
    let todos = ref([{
        title: '学习',
        done: false
    }])

    function addTodo() {
        todos.value.push({
            title: title.value,
            done: false
        })
        title.value = ""
        console.log(active.value, all.value)
    }

    function clear() {
        todos.value.forEach((item) => {
            item.done = false
        })
    }

    let active = computed(() => {
        return todos.value.filter((v) => {
            return v.done
        }).length
    })
    let all = computed(() => {
        return todos.value.length
    })
    let allDone = computed({
        get: () => {
            return active.value === all.value
        },
        set: (value) => {
            todos.value.forEach((todo) => {
                todo.done = value
            });
        }
    })
    return { title, todos, addTodo, clear, active, all, allDone };
}