<!-- html结构 -->
<template>
  <el-scrollbar max-height="100%">
    <router-view />
  </el-scrollbar>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts"></script>
<!-- 样式设置 -->
<style lang="scss">
html,
body,
#app,
.el-scrollbar,
.el-scrollbar__view,
:root {
  height: 100%;
}
</style>
