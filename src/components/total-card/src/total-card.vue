<!-- html结构 -->
<template>
  <el-card>
    <div class="Total-card" flex justify-between items-center>
      <div class="card-header" flex flex-col>
        <span class="text" text-xl text-gray>{{ title }}</span>
        <span
          mt-3
          text-gray-300
          text-center
          text-md
          :class="`hover:color-white cursor-pointer`"
          >{{ emoij }}{{ number }}</span
        >
      </div>

      <svg-icon
        :name="name"
        size="3"
        :color="color"
        p-3
        class="bg-[#F2F2F5] dark:bg-gray-8"
        rounded-full
      />
    </div>
  </el-card>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts" name="total-card">
defineProps<{
  name: string;
  color: string;
  title: string;
  number: number;
  emoij?: any;
}>();
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
