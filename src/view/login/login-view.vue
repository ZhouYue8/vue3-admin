<!-- html结构 -->
<template>
  <div
    flex
    h-screen
    items-center
    justify-between
    bg-page_light
    dark:bg-page_dark
  >
    <section flex-1 h-screen f-center>
      <img v-show="themeStore.isDark" src="@/assets/api-d.svg" alt="dark" />
      <img v-show="!themeStore.isDark" src="@/assets/api-l.svg" alt="light" />
    </section>
    <section flex-1 h-screen f-center relative flex-col>
      <svg-icon name="spongebob" size="12"></svg-icon>
      <h3 tracking-7px>海绵宝宝</h3>
      <form-panle />
    </section>
    <ThemeSwitch />
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import FormPanle from './src/form-panle.vue';
import ThemeSwitch from '@/components/theme-switch';
import useStore from '@/store';
const { themeStore } = useStore();
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
