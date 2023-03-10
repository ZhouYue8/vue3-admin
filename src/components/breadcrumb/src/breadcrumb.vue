<!-- html结构 -->
<template>
  <el-breadcrumb v-show="!themeStore.isLoading" separator="/" ml-5>
    <el-breadcrumb-item>
      {{ text.title }}
    </el-breadcrumb-item>
    <el-breadcrumb-item>{{ text.subtitle }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts" name="breadcrumb">
import { RouteLocationNormalizedLoaded } from 'vue-router';
import useStore from '@/store';
const { themeStore } = useStore();
const router = useRoute();
const text = reactive({
  title: '',
  subtitle: '',
});
// 监听 路由变化 改变面包屑
watch(
  router,
  (newV: RouteLocationNormalizedLoaded) => {
    text.subtitle = newV.meta.title;
    text.title = newV.meta.p as string;
  },
  {
    immediate: true,
  },
);
</script>
<!-- 样式设置 -->
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
