<template> 
<div class="todo-footer" v-if="totalCount>0">
    <el-checkbox :model-value="allDone" @change="handleCheckAll" :indeterminate="isIndeterminate">
        已完成 {{ completedCount }} / 全部 {{ totalCount }}
    </el-checkbox>
    <!-- 清除已完成的按钮 -->
    <el-button 
      type="danger" 
      @click="handleClearCompleted"
      v-if="completedCount > 0"
      plain
    >
      清除已完成任务
    </el-button>
</div>
</template>
<script setup> 
import { computed } from 'vue'
import { useTodoStore } from '@/stores/todo'
const todoStore = useTodoStore()
const totalCount = computed(() => todoStore.todos.length)
const allDone=computed(()=>todoStore.allTasksCompleted)
const completedCount = computed(() => todoStore.completedTodos.length)
const isIndeterminate = computed(() => {
    return completedCount.value > 0 && completedCount.value < totalCount.value
})
// 处理全选/取消全选
function handleCheckAll(checked) {
    todoStore.toggleAllTasks(checked)
}
// 处理清除已完成任务
function handleClearCompleted() {
    todoStore.clearCompleted()
}
</script>
<style scoped>
.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ebeef5;
}
</style>