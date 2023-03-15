<!-- html结构 -->
<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
</script>
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
