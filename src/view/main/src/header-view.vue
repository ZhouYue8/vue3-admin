<!-- html结构 -->
<template>
  <el-header flex justify-between items-center relative>
    <section>
      <svg-icon
        :name="isCollapse ? 'unflod' : 'flod'"
        size="1"
        @click="toggleMenu"
      ></svg-icon>
    </section>
    <section>
      <el-space>
        <svg-icon
          :name="isFullscreen ? '取消全屏' : '全屏'"
          mr-5
          @click="toggle"
        ></svg-icon>
        <el-badge value="9" class="item" absolute right-5 mt-1.5>
          <svg-icon name="lindang" size="1.3"></svg-icon>
        </el-badge>
        <ThemeSwitch />
      </el-space>
    </section>
  </el-header>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
const { isFullscreen, toggle } = useFullscreen();
defineProps<{
  isCollapse: boolean;
  toggleMenu: () => void;
}>();
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
