<template>
<div id="app-container">
    <div class="title"><h1>待办事项列表</h1>

    <el-switch
        v-model="settingsStore.isDarkMode"
        inline-prompt
        size="large"
        :active-icon="Moon"
        :inactive-icon="Sunny"
        style="--el-switch-on-color: #f2f2f2; --el-switch-off-color: #2c2c2c;"
      />
    </div>
    <TodoAddForm />
    <TodoList />
    <TodoFooter />
</div>
</template>
  <script setup>
  import TodoList from '@/components/TodoList.vue'
  import TodoAddForm from '@/components/TodoAddForm.vue'
  import TodoFooter from '@/components/TodoFooter.vue'
  import { Moon, Sunny } from '@element-plus/icons-vue'
  import { useSettingsStore } from '@/stores/settings'
  const settingsStore = useSettingsStore()
  </script>
  <style scoped>
  #app-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 25px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
h1 {
  text-align: center;
  color: rgb(207, 219, 229);
}
.title {
 /* 渐变背景 */
 background: linear-gradient(135deg, #667eea, #764ba2);
height: 50px;
margin-bottom: 20px;
border-radius: 8px;
 display: flex;
  justify-content: space-evenly;
  align-items: center;
}

  </style>