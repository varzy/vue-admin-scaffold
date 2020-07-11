<template>
  <div class="login">
    <div class="wrapper">
      <div class="header">{{ projectName }}</div>

      <a-form-model
        class="form"
        ref="form"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
        :model="form"
        :rules="formRules"
        :disabled="isSubmitting"
      >
        <a-form-model-item label="Username" prop="username">
          <a-input placeholder="Please input your Username" v-model="form.username"></a-input>
        </a-form-model-item>
        <a-form-model-item label="Password" prop="password">
          <a-input
            type="password"
            placeholder="Please input your Password"
            v-model="form.password"
          ></a-input>
        </a-form-model-item>
        <a-form-model-item class="g-gap" :wrapper-col="{ offset: 6 }">
          <a-button type="primary" :loading="isSubmitting" @click="onLogin">Login</a-button>
        </a-form-model-item>
      </a-form-model>
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
        username: [{ required: true, message: 'The username is required.', trigger: 'blur' }],
        password: [{ required: true, message: 'The password is required.', trigger: 'blur' }]
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

        this.$message.success('Welcome!');
        this.$router.push({ name: 'Index' });
      } catch (e) {
        this.$message.error('Login failed. Please recheck your username or password.');
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
