import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

const STORAGE_KEY = 'todolist-tasks'
const loadFromStorage = () => {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
}


export const useTodoStore = defineStore('todo', () => {
    // 从localStorage加载任务
    const todos = ref(loadFromStorage())
    // 定义state
    if (todos.value.length === 0) {
        todos.value = [
            {
                id: 1,
                title: '学习 Vue 3',
                completed: false,
            },
            {
                id: 2,
                title: '学习 Pinia',
                completed: false,
            }, {
                id: 3,
                title: '学习 Element Plus',
                completed: false
            },
        ]
    }

    const nextId = ref(Math.max(0, ...todos.value.map(todo => todo.id)) + 1)
    // 监听todos变化，同步到localStorage
    watch(todos, (newTodos) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos))
    }, { deep: true })
    // 定义getters,使用computed创建
    const incompleteTodos = computed(() => todos.value.filter(todo => !todo.completed))
    const completedTodos = computed(() => todos.value.filter(todo => todo.completed))
    const allTasksCompleted = computed(() => {
        return todos.value.every(todo => todo.completed) && todos.value.length > 0
    })
    // Action->function
    function addTodo(title) {
        todos.value.push({
            id: nextId.value++,
            title,
            completed: false
        })
    }
    // 确认任务
    function toggleTask(id) {
        const task = todos.value.find(todo => todo.id === id)
        if (task) {
            task.completed = !task.completed
        }
    }
    // 删除任务
    function removeTask(id) {
        todos.value = todos.value.filter(todo => todo.id !== id)
    }
    function clearCompleted() {
        todos.value = todos.value.filter(todo => !todo.completed)
    }
    function toggleAllTasks(completed) {
        todos.value.forEach(todo => {
            todo.completed = completed
        })
    }

    // 返回state，getter，action
    return {
        todos,
        incompleteTodos,
        completedTodos,
        addTodo,
        toggleTask,
        removeTask,
        clearCompleted,
        toggleAllTasks,
        allTasksCompleted
    }
})
