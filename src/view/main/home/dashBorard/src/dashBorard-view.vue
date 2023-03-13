<!-- html结构 -->
<template>
  <div class="DashBorard">
    <el-row :gutter="20">
      <el-col v-for="i in cardTotal" :key="i.name" :span="6">
        <total-card v-bind="i" />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18">
        <el-card>
          <div v-echart="line" h-lg></div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card>
          <el-tabs
            v-model="activeName"
            value="first"
            h-lg
            @tab-click="handleClick"
          >
            <el-tab-pane
              v-for="(value, key) in tabPane"
              :key="key"
              :label="value"
              :name="key"
            >
              <p v-for="i in 8" :key="i">{{ value }}{{ i }} 刚刚又增加了....</p>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <div v-echart="cake" h-sm></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div v-echart="column" h-sm></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts" name="dashBorard">
import { TabsPaneContext } from 'element-plus';
import { line, cake, column } from './config';
import TotalCard from '@/components/total-card/src/total-card.vue';
const activeName = ref('first');
const cardTotal = [
  {
    name: 'star',
    color: '#ffd43b',
    title: 'Stars',
    number: 997,
    emoij: '👋',
  },
  {
    name: 'flame',
    color: '#d93b56',
    title: '今日增长',
    number: 28,
    emoij: '🍓',
  },
  {
    name: 'dinosaur',
    color: '#0ee0aa',
    title: '浏览量',
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
const tabPane = {
  first: '用户',
  second: '配置',
  third: '权限',
  fourth: '任务',
};
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
ElMessage({
  message: '今日成果 ✌',
  type: 'success',
});
</script>
<!-- 样式设置 -->
<style lang="scss" scoped>
.text {
  border-bottom: 1px solid gray;
}
.el-row {
  :not(:last-child) {
    margin-bottom: 12px;
  }
}
</style>
