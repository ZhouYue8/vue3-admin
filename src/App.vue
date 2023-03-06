<!-- html结构 -->
<template>
  <div
    class="App"
    text-brand-gradient
    text-2xl
    font-bold
    cursor-pointer
    select-none
  >
    app{{ count }}
  </div>
  <el-button mt-2 type="primary" @click="add">+1吧</el-button>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import { forEach } from 'lodash';
const count = ref(1);
const add = () => {
  count.value++;
};
forEach([1, 2, 3, 4], i => {
  console.log(i);
});
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
