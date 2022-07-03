import { ref, watchEffect } from "vue";

function userStorage(name, value = []) {
    let data = ref(JSON.parse(localStorage.getItem(name) || '[]'));
    watchEffect(() => {
        localStorage.setItem(name, JSON.stringify(data.value))
    })
    return data
}

export default userStorage