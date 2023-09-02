<template>
    <div>
        <a href="#/">Home</a> 
        <a href="#/about">About</a> 
        <a href="#/non-existent-path">Broken Link</a>
        <!--  根据 currentView 变量作为组件的名称来渲染-->
        <component :is="currentView" />
    </div>
</template>

<script setup>
import { ref,computed } from 'vue'
import Home from './Home.vue'
import About from './About.vue'
const routes = {
    '/':Home,
    '/about':About
}

// 记录当前路径
const currentPath = ref(window.location.hash)
// 监听 hashchange 事件,动态修改hash路径
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>