<!-- html结构 -->
<template>
  <div class="aside-view" h-full f-center flex-col>
    <section py-6>
      <main f-center flex-col>
        <el-avatar :size="50" :src="url" fit="fill" mb-5 />
        <span
          v-show="!isCollapse"
          class="title"
          font-bold
          tracking-5px
          transition-all
          duration-500
          >海绵兄弟</span
        >
      </main>
    </section>
    <el-menu
      flex-1
      class="el-menu-vertical-demo"
      w-260px
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <svg-icon name="home"></svg-icon>
          </el-icon>
          <span tracking-3px>主页</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <svg-icon name="component"></svg-icon>
          </el-icon>
          <span tracking-3px>组件</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon>
            <svg-icon name="component"></svg-icon>
          </el-icon>
          <span tracking-3px>Icon图标</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon>
            <svg-icon name="component"></svg-icon>
          </el-icon>
          <span tracking-3px>链接</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import url from '@/assets/svg/spongebob.svg';
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
defineProps<{
  isCollapse: boolean;
}>();
</script>
<!-- 样式设置 -->
<style lang="scss" scoped>
.el-menu {
  border: none;
  // border-right: 1px solid var(--el-menu-border-color) !important;
}
.el-menu-item,
.el-sub-menu {
  span {
    margin-left: 1rem;
  }
}
</style>
