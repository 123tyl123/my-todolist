import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

// 定义 localStorage 的 key
const THEME_KEY = 'app-theme'

export const useSettingsStore = defineStore('settings', () => {
    // 1. State: 定义 isDarkMode 状态
    // 优先从 localStorage 读取，如果没有，则默认为 false (日间模式)
    const isDarkMode = ref(JSON.parse(localStorage.getItem(THEME_KEY) || 'false'))

    // 2. Action: 定义切换模式的方法
    function toggleDarkMode() {
        isDarkMode.value = !isDarkMode.value
    }

    // 3. Side Effect (副作用): 监听 isDarkMode 的变化
    watch(
        isDarkMode,
        (newValue) => {
            // 3.1 将新状态保存到 localStorage
            localStorage.setItem(THEME_KEY, JSON.stringify(newValue))

            // 3.2 操作 DOM，为 <html> 标签添加/移除 'dark' 类
            const htmlEl = document.documentElement
            if (newValue) {
                htmlEl.classList.add('dark')
            } else {
                htmlEl.classList.remove('dark')
            }
        },
        {
            // immediate: true 确保在 store 初始化时立即执行一次此 watch
            // 这样页面加载时就能正确应用 localStorage 中存储的主题
            immediate: true
        }
    )

    // 4. 返回 state 和 action
    return {
        isDarkMode,
        toggleDarkMode
    }
})