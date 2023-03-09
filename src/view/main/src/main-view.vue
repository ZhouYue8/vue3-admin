<!-- html结构 -->
<template>
  <div class="common-layout" flex>
    <el-container>
      <el-aside
        :width="isCollapse ? '64px' : '260px'"
        transition-all
        duration-400
      >
        <aside-view :is-collapse="isCollapse" />
      </el-aside>
      <el-container>
        <header-view
          :is-collapse="isCollapse"
          :toggle-menu="() => (isCollapse = !isCollapse)"
        />
        <el-main dark:bg-page_gray dark:text-page_light text-page_dark>
          <router-view />
        </el-main>
        <el-footer>
          <footer-view />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import FooterView from './footer-view.vue';
import AsideView from './aside-view.vue';
import HeaderView from './header-view.vue';
const isCollapse = ref(false); // 是否展开侧边栏
</script>
<!-- 样式设置 -->
<style lang="scss" scoped>
.common-layout {
  height: 100%;
}
.el-aside {
  border-right: 1px solid var(--el-menu-border-color) !important;
  overflow-x: hidden;
}
.el-header {
  border-bottom: 1px solid var(--el-menu-border-color) !important;
}
</style>
