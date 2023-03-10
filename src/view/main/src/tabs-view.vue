<!-- html结构 -->
<template>
  <div
    class="tabs-view"
    dark:bg-page_dark
    h-35px
    flex
    items-center
    bg-page_light
  >
    <el-space>
      <el-check-tag
        v-for="item in tabs"
        :key="item.path"
        v-tab-close
        class="hover:text-[#3d97f5]"
        flex
        items-center
        :checked="currentPath === item.path"
        @click="appStore.setCurrentPath(item.path)"
      >
        <svg-icon name="tab" size="1" relative top-0.3></svg-icon>
        {{ item.title }}
        <svg-icon
          v-show="currentPath === item.path"
          name="close"
          size="1"
          relative
          top-0.3
          class="close"
          @click.stop="closeTab(item.path)"
        ></svg-icon>
      </el-check-tag>
    </el-space>
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import useStore from '@/store';
const { appStore } = useStore();
const tabs = computed(() => appStore.tabs);
const currentPath = computed(() => appStore.currentPath);
const closeTab = (path: string) => {
  appStore.closeTab(path);
};
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
