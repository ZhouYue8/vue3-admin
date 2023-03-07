<!-- html结构 -->
<template>
  <div
    class="Theme-switch"
    absolute
    top-5
    right-5
    @click="themeStore.switchTheme()"
  >
    <svg-icon v-show="themeStore.isDark" name="taiyang" />
    <svg-icon v-show="!themeStore.isDark" name="yueliang" />
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts" name="theme-switch">
import useStore from '@/store';
const { themeStore } = useStore();
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
