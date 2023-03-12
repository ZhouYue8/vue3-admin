<!-- html结构 -->
<template>
  <div class="common-layout" flex>
    <el-container>
      <el-aside
        :width="isCollapse ? '64px' : '240px'"
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
        <tabs-view />
        <el-main dark:bg-page_gray dark:text-page_light text-page_dark>
          <el-scrollbar max-height="100%">
            <router-view v-slot="{ Component, route }" p-2 overflow-x-hidden>
              <transition appear name="fade" mode="out-in">
                <component :is="Component" :key="route.path"></component>
              </transition>
            </router-view>
          </el-scrollbar>
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
import TabsView from './tabs-view.vue';
const isCollapse = ref(false); // 是否展开侧边栏
</script>
<!-- 样式设置 -->
<style lang="scss" scoped>
.common-layout {
  height: 100%;
}
.el-main {
  padding: 0;
}
.el-aside {
  border-right: 1px solid var(--el-menu-border-color) !important;
  overflow-x: hidden;
}
.el-header {
  border-bottom: 1px solid var(--el-menu-border-color) !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease-out;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.el-footer {
  height: 43px;
  padding: 0;
  margin: 0;
}
</style>
