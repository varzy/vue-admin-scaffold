<template>
  <div class="login">
    <div class="wrapper">
      <div class="header">{{ projectName }}</div>

      <a-form-model
        class="form"
        ref="form"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 18 }"
        :model="form"
        :rules="formRules"
        :disabled="isSubmitting"
      >
        <a-form-model-item label="用户名" prop="username">
          <a-input
            placeholder="请输入用户名"
            v-model="form.username"
            @keydown.enter="onLogin"
          ></a-input>
        </a-form-model-item>
        <a-form-model-item label="密码" prop="password">
          <a-input
            type="password"
            placeholder="请输入密码"
            v-model="form.password"
            @keydown.enter="onLogin"
          ></a-input>
        </a-form-model-item>
        <a-form-model-item v-gap :wrapper-col="{ offset: 4 }">
          <a-button type="primary" :loading="isSubmitting" @click="onLogin">登录</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import Permission from '@/utils/permission';

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
        username: [{ required: true, message: '用户名必填', trigger: 'blur' }],
        password: [{ required: true, message: '密码必填', trigger: 'blur' }]
      },
      projectName: process.env.VUE_APP_PROJECT_NAME
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

        this.$message.success('登录成功!');
        this.$router.push({ name: 'Index' });
      } catch (e) {
        this.$message.error('登录失败，请检查您的用户名或密码');
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

.login {
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    border-radius: 8px;
    width: 600px;
    padding: 24px 36px;
    background-color: #fff;

    .header {
      text-align: center;
      font-family: 'Righteous', cursive;
      font-size: 20px;
    }

    .form {
      margin-top: 24px;
    }

    .buttons {
      margin-top: 24px;
    }
  }
}
</style>
