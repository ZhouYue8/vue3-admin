<template>
  <div style="margin: 20px" />
  <el-form ref="ruleFormRef" :model="formLabelAlign" :rules="rules" w-320px>
    <el-form-item label="账号：" prop="username">
      <el-input v-model="formLabelAlign.username" />
    </el-form-item>
    <el-form-item label="密码：" prop="password">
      <el-input v-model="formLabelAlign.password" type="password" clear />
    </el-form-item>
    <el-form-item id="login-btn">
      <div flex flex-1 justify-center mt-2>
        <el-button
          type="primary"
          :loading="isloading"
          :disabled="isloading"
          @click="submitForm(ruleFormRef)"
        >
          <span>登录</span>
        </el-button>
        <el-button>
          <el-icon>
            <svg-icon name="reset"></svg-icon>
          </el-icon>
          <span>重置</span>
        </el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { rules } from './config';
import type { FormInstance } from 'element-plus';
const isloading = ref(false);
const router = useRouter();
const formLabelAlign = reactive({
  username: 'ADMIN',
  password: 'admin',
});
const ruleFormRef = ref<FormInstance>();
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  isloading.value = true;
  await formEl.validate((valid, fields) => {
    if (valid) {
      router.push('/main');
    } else {
      console.log('error submit!', fields);
    }
  });
  isloading.value = false;
};
</script>
<style scoped lang="scss"></style>
