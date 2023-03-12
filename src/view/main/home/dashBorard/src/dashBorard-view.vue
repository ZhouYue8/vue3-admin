<!-- html结构 -->
<template>
  <div class="DashBorard">
    <el-row :gutter="20">
      <el-col v-for="i in 4" :key="i" :span="6">
        <el-card>
          <div flex justify-between>
            <div class="card-header" flex flex-col>
              <span class="text" text-xl text-gray>Stars</span>
              <span mt-3 text-gray-300 text-center text-md>999</span>
            </div>
            <svg-icon
              class="icon dark:bg-#202121"
              name="star"
              size="3"
              color="#ffd43b"
              p-3
            />
          </div>
        </el-card>
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
            class="demo-tabs"
            value="first"
            h-lg
            @tab-click="handleClick"
          >
            <el-tab-pane label="User" name="first">
              <p v-for="i in 8" :key="i">用户{{ i }}刚刚访问了xxx...</p>
            </el-tab-pane>
            <el-tab-pane label="Config" name="second">
              <p v-for="i in 8" :key="i">配置{{ i }}刚刚修改了xxx...</p>
            </el-tab-pane>
            <el-tab-pane label="Role" name="third">
              <p v-for="i in 8" :key="i">权限{{ i }}刚刚更改了xxx...</p>
            </el-tab-pane>
            <el-tab-pane label="Task" name="fourth">
              <p v-for="i in 8" :key="i">任务{{ i }}刚刚有增加了xxx...</p>
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
const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
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
