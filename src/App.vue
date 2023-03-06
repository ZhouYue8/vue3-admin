<!-- html结构 -->
<template>
  <div
    class="App"
    text-brand-gradient
    text-2xl
    font-bold
    cursor-pointer
    select-none
    @click="add"
  >
    app{{ count }}
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import { forEach } from 'lodash';
const count = ref(1);
const arr = reactive([1, 2, 3, 5, 7]);
const add = () => {
  count.value++;
  forEach(arr, i => {
    console.log(i);
  });
};
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
