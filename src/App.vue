<!-- html结构 -->
<template>
  <div
    class="App"
    text-brand-gradient
    text-2xl
    font-bold
    cursor-pointer
    select-none
    @click="count++"
  >
    app{{ count }}
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
const count = ref(1)
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
