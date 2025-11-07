<template>
    <div class="todo-item">
        <el-checkbox :checked="task.completed" @change="toggle"/>
        <span :class="{'completed':task.completed, 'task-text': true}">{{task.title}}</span>
        <el-button type="danger" size="mini" @click="deleteTask">删除</el-button>
    </div>
</template>
<script setup>
const props=defineProps({
    task:{
        type:Object,
        required:true
    }
})
const emit=defineEmits(['toggle','delete'])
const toggle=()=>{
    emit('toggle',props.task.id)
}
const deleteTask=()=>{
    emit('delete',props.task.id)
}
</script>
<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ebeef5;
  justify-content: space-between;
}
.task-text {
  flex-grow: 1;
  margin-left: 10px;
}
.completed {
  text-decoration: line-through;
  color: #a8a8a8;
}
</style>