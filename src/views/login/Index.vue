<template>
  <div class="login">
    <div class="wrapper">
      <a-form-model
        :label-col="{ span: 3 }"
        :wrapper-col="{ span: 20 }"
        ref="form"
        :model="form"
        :rules="formRules"
        :disabled="isSubmitting"
      >
        <a-form-model-item label="用户名" prop="username">
          <a-input placeholder="请输入用户名" v-model="form.username"></a-input>
        </a-form-model-item>
        <a-form-model-item label="密码" prop="password">
          <a-input type="password" placeholder="请输入密码" v-model="form.password"></a-input>
        </a-form-model-item>
      </a-form-model>

      <a-row>
        <a-col :offset="3">
          <a-button :loading="isSubmitting" @click="onLogin">提交</a-button>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import Permission from '@/utils/Permission';

export default {
  name: 'Login',

  data() {
    return {
      isSubmitting: false,
      form: {
        username: '',
        password: ''
      },
      formRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    };
  },

  methods: {
    async onLogin() {
      try {
        await this.$refs.form.validate();
      } catch {
        return;
      }

      try {
        this.isSubmitting = true;

        await Permission.login({
          username: this.form.username,
          password: this.form.password
        });

        this.$message.success('登录成功');
        this.$router.push({ name: 'Index' });
      } catch (e) {
        this.$message.error('登录失败');
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  background-color: #c7c7c7;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    border-radius: 8px;
    width: 560px;
    padding: 24px 36px;
    background-color: #fff;
  }
}
</style>
