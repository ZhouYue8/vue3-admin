<!-- html结构 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header> <ThemeSwitch /></el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts" name="main"></script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
