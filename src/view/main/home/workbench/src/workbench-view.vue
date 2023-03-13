<!-- html结构 -->
<template>
  <div class="Workbench">
    <el-card>
      <template #header>
        <div w-full flex justify-between items-center py-2>
          <div text-xl f-center>
            <span mr-2 text-5xl>😋</span>
            <span>你好啊，weigloshen~</span>
          </div>

          <el-avatar
            hover:bg-gray-400
            cursor-pointer
            :size="64"
            :src="rust"
            @click="open"
          />
        </div>
      </template>
      <el-row :gutter="20">
        <el-col v-for="i in cardTotal" :key="i.name" :span="6">
          <total-card v-bind="i" />
        </el-col>
      </el-row>
      <div v-echart="line" h-lg></div>
    </el-card>
    <el-row :gutter="20" mt-3>
      <el-col :span="12">
        <el-card shadow="hover">
          <div flex items-center justify-between>
            <span>📓待办事项</span>
            <el-button class="button" text>更多事项...</el-button>
          </div>
          <div flex flex-col gap-2>
            <el-alert
              v-for="i in 8"
              :key="i"
              :type="i % 2 == 0 ? 'success' : i % 3 == 0 ? 'error' : 'info'"
            >
              <span v-if="i % 2 == 0">已完成事项</span>
              <span v-else-if="i % 3 == 0 && i % 2 != 0">未完成事项</span>
              <span v-else>待完成事项</span>
            </el-alert>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div flex items-center justify-between>
            <span>🐞bug</span>
            <el-button class="button" text>更多霸哥(99+)</el-button>
          </div>
          <div flex flex-col gap-2>
            <el-alert v-for="i in 8" :key="i" type="error">
              <span
                >测试{{
                  Math.floor(Math.random() * 100)
                }}反应的bug,待处理..</span
              >
            </el-alert>
          </div></el-card
        >
      </el-col>
    </el-row>
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts" name="workbench">
import rust from '@/assets/svg/rust.svg';
import TotalCard from '@/components/total-card/src/total-card.vue';
import { line } from './config';
const open = () => {
  ElMessage({
    message: '写前端幸苦了，该写rust了',
    grouping: true,
    type: 'success',
  });
};
const cardTotal = [
  {
    name: 'star',
    color: '#ffd43b',
    title: 'Stars',
    number: 997,
    emoij: '🍌',
  },
  {
    name: 'flame',
    color: '#d93b56',
    title: '热度',
    number: 28,
    emoij: '🍓',
  },
  {
    name: 'dinosaur',
    color: '#0ee0aa',
    title: '小飞飞',
    number: 180,
    emoij: '🍏',
  },
  {
    name: '链接',
    color: '#6366f1',
    title: '链接',
    number: 777,
    emoij: '🍆',
  },
];
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
