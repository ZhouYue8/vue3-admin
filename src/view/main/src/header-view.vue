<!-- html结构 -->
<template>
  <el-header flex justify-between items-center relative>
    <section flex>
      <svg-icon
        :name="isCollapse ? 'unflod' : 'flod'"
        size="1"
        @click="toggleMenu"
      ></svg-icon>
      <el-breadcrumb separator="/" ml-5>
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">参数</a></el-breadcrumb-item>
      </el-breadcrumb>
    </section>
    <section>
      <el-space>
        <svg-icon
          :name="isFullscreen ? '取消全屏' : '全屏'"
          mr-1
          @click="toggle"
        />
        <el-dropdown trigger="click" mr-5>
          <span class="el-dropdown-link">
            <svg-icon name="语言" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-icon>
                  <svg-icon name="cn" />
                </el-icon>
                中文
              </el-dropdown-item>
              <el-dropdown-item>
                <el-icon> <svg-icon name="en" /> </el-icon
                >English</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-badge value="9" class="item" right-5 mt-1.5>
          <svg-icon name="lindang" size="1.3" />
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
