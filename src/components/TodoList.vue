<template> 
<div>
    <transition-group name="el-zoom-in-left" tag="div">
        <TodoItem v-for="task in todoStore.todos" :key="task.id" :task="task" @toggle="toggleTask" @delete="deleteTask"/>
    </transition-group>
</div>
</template>
<script setup>
import TodoItem from '@/components/TodoItem.vue'
import { useTodoStore } from '@/stores/todo'
const todoStore = useTodoStore()
// 处理切换任务状态
function toggleTask(id){
    todoStore.toggleTask(id)
}
// 处理删除任务
function deleteTask(id){
    todoStore.removeTask(id)
}
</script>
<style scoped>
</style>