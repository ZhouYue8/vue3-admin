<!-- html结构 -->
<template>
  <div>
    <div flex flex-col gap-y-3 direction="vertical">
      <el-card>
        <section flex justify-between flex-auto>
          <div flex-1>
            <el-form
              :inline="true"
              label-position="top"
              class="demo-form-inline"
            >
              <el-form-item label="名称">
                <el-input
                  v-model="searchForm.keyWord"
                  placeholder="Approved by"
                />
              </el-form-item>
              <el-form-item label="类型">
                <el-select
                  v-model="searchForm.attribute"
                  placeholder="Activity zone"
                >
                  <el-option label="📇 目录" value="menu" />
                  <el-option label="⛕ 菜单" value="catalog" />
                </el-select>
              </el-form-item>
            </el-form>
            <el-space>
              <el-button type="primary" @click="dialogFormVisible = true">
                <el-icon :size="14" mr-2>
                  <svg-icon name="add"></svg-icon>
                </el-icon>
                新增
              </el-button>
              <el-button
                type="danger"
                flex
                items-center
                :disabled="checkedData.length === 0"
                @click="on_delete"
              >
                <el-icon :size="14" mr-2>
                  <svg-icon name="delete"></svg-icon>
                </el-icon>
                删除
              </el-button>
            </el-space>
          </div>
          <div flex items-center justify-center flex-1>
            <el-space>
              <el-button type="primary" @click="on_search">
                <el-icon :size="14" mr-2>
                  <svg-icon name="search"></svg-icon>
                </el-icon>
                查询
              </el-button>
              <el-button @click="on_reset">
                <el-icon :size="14" mr-2>
                  <svg-icon name="reset"></svg-icon>
                </el-icon>
                重置
              </el-button>
            </el-space>
          </div>
        </section>
      </el-card>
      <el-card>
        <!-- //  -->
        <el-table
          v-loading="isLoading"
          :data="tableData"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" />
          <el-table-column type="index" label="索引" width="65px" />
          <el-table-column prop="name" label="名称" width="80px" />
          <el-table-column prop="attribute" label="属性" width="100px">
            <template #default="{ row }">
              <el-tag v-if="row.attribute === 'catalog'"> 菜单 </el-tag>
              <el-tag v-else type="danger">目录</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="emoji" label="Emoji" width="80px" />
          <el-table-column prop="path" label="路径" show-overflow-tooltip />
          <el-table-column
            prop="redirect"
            label="跳转路径"
            show-overflow-tooltip
          />
          <el-table-column prop="birthdate" label="创建日期" />
          <el-table-column label="操作">
            <el-button plain type="warning">编辑</el-button>
            <el-button plain type="danger"> 删除 </el-button>
          </el-table-column>
        </el-table>

        <el-pagination
          v-model:page-size="page_size"
          v-model:current-page="current_page"
          layout="-> ,total, sizes, prev, pager, next, jumper"
          :total="40"
          background
          mt-3
          w-full
          @size-change="changeMenus"
          @current-change="changeMenus"
          @prev-click="changeMenus"
          @next-click="changeMenus"
        />
      </el-card>
    </div>
    <!-- 模态框 -->
    <el-dialog v-model="dialogFormVisible" width="600px" title="新增菜单配置">
      <el-form class="w-6/7">
        <el-form-item label="名称：" :label-width="formLabelWidth">
          <el-input autocomplete="off" placeholder="请确定名称" />
        </el-form-item>
        <el-form-item label="属性：" :label-width="formLabelWidth">
          <el-select placeholder="配置属性">
            <el-option label="📇 目录" value="menu" />
            <el-option label="⛕ 菜单" value="catalog" />
          </el-select>
        </el-form-item>
        <el-form-item label="路径：" :label-width="formLabelWidth">
          <el-input placeholder="确定路径（！）" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import useStore from '@/store';
const { systemStore } = useStore();
const page_size = ref(10); // 一页多少个
const current_page = ref(1); // 页码
const dialogFormVisible = ref(false);
const formLabelWidth = '140px';

const searchForm = reactive({
  keyWord: '',
  attribute: '',
}); // 头部form表单数据
onMounted(() => {
  // 初始化调用一次接口
  changeMenus();
});
// table数据
const tableData = computed(() => systemStore.menus);
// table内部loading特效
const isLoading = computed(() => systemStore.isLoading);

// 分页切换数据
const changeMenus = () => {
  systemStore.getMenus(page_size.value, current_page.value);
};
// 重置
const on_reset = () => {
  searchForm.keyWord = '';
  searchForm.attribute = '';
  systemStore.getMenus(page_size.value, current_page.value);
};
// 搜索 只支持 目录 菜单切换
const on_search = () => {
  if (searchForm.attribute) {
    systemStore.getMenus(
      page_size.value,
      current_page.value,
      searchForm.attribute,
    );
  }
};
const checkedData = ref<Array<any>>([]);
// 删除
const on_delete = () => {
  console.log(checkedData.value.length);
};

const handleSelectionChange = i => {
  checkedData.value = i;
};
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
