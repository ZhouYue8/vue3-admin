<!-- html结构 -->
<template>
  <div class="aside-view" h-full f-center flex-col>
    <section py-6>
      <main f-center flex-col>
        <el-avatar :size="50" :src="url" fit="fill" mb-5 />
        <span
          v-show="!isCollapse"
          class="title"
          font-bold
          tracking-5px
          transition-all
          duration-500
          text-bg-gray
          >海绵兄弟</span
        >
      </main>
    </section>
    <el-menu
      flex-1
      class="el-menu-vertical-demo"
      w-230px
      :collapse="isCollapse"
      :default-active="defaultActive"
    >
      <el-sub-menu
        v-for="(value, key) in menus"
        :key="key"
        :index="String(key)"
      >
        <template #title>
          <el-icon>
            <svg-icon :name="value[0].meta?.p"></svg-icon>
          </el-icon>
          <span tracking-3px>{{ value[0].meta?.p }}</span>
        </template>
        <template v-if="value.length > 0"> </template>
        <el-menu-item
          v-for="item in value"
          :key="item.path"
          :index="item.path"
          @click="routerSwitch(item.path)"
        >
          {{ item.meta?.title }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import url from '@/assets/svg/spongebob.svg';
import { mapRouterMenu } from '@/utils/mapRouterMenu';
import { RouteLocationNormalizedLoaded } from 'vue-router';
const routes = useRouter();
const route = useRoute();
const defaultActive = ref('');
defineProps<{
  isCollapse: boolean; //展开侧边栏
}>();
// 监听路径变化确定那个是侧边菜单是 选中
watch(
  route,
  (newV: RouteLocationNormalizedLoaded) => {
    defaultActive.value = newV.path;
  },
  {
    immediate: true, // 一开始执行一次
  },
);
// 通过路由生成菜单列表
const menus = computed(() => {
  return mapRouterMenu(routes.getRoutes());
});
// 切换路由
const routerSwitch = (path: string) => {
  routes.push(path);
};
</script>
<!-- 样式设置 -->
<style lang="scss" scoped>
.el-menu {
  border: none;
  // border-right: 1px solid var(--el-menu-border-color) !important;
}
.el-menu-item,
.el-sub-menu {
  span {
    margin-left: 1rem;
  }
}
</style>
