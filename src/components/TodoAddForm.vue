   <template>
  <el-form @submit.prevent="handleAddTask" class="add-form">
    <el-input v-model="newTaskText" placeholder="请输入新的待办事项">
      <template #append>
        <el-button type="primary" @click="handleAddTask">添加</el-button>
      </template>
    </el-input>
  </el-form>
</template>

<script setup>
import {useTodoStore} from '@/stores/todo'
import {ref} from 'vue'

const todoStore = useTodoStore()
const newTaskText = ref('')
// 处理添加任务
function handleAddTask(){
    if(newTaskText.value.trim() !== ''){
        todoStore.addTodo(newTaskText.value.trim())
        newTaskText.value = ''
    }
}
</script>
<style scoped>
.add-form {
  margin-bottom: 20px;
}
</style>
