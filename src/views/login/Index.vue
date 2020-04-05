<template>
  <div class="login">
    <div class="wrapper">
      <h1 class="header">{{ projectName }}</h1>

      <el-form
        class="form"
        size="large"
        ref="form"
        :model="form"
        :rules="formRules"
        :disabled="isSubmitting"
      >
        <el-form-item prop="username">
          <el-input
            :placeholder="`${$t('username')}: admin`"
            prefix-icon="el-icon-user"
            v-model="form.username"
            @keydown.enter.native="onLogin"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            :placeholder="`${$t('password')}: qaz123`"
            prefix-icon="el-icon-lock"
            v-model="form.password"
            @keydown.enter.native="onLogin"
          ></el-input>
        </el-form-item>
      </el-form>

      <el-button
        v-size:w="'100%'"
        size="large"
        type="primary"
        :loading="isSubmitting"
        @click="onLogin"
      >
        {{ $t('login') }}
      </el-button>
    </div>

    <div class="language_selector">
      <language-selector></language-selector>
    </div>

    <page-footer></page-footer>
  </div>
</template>

<script>
import Permission from '../../utils/Permission';
import PageFooter from '../widgets/Footer';
import LanguageSelector from '../widgets/LanguageSelector';

export default {
  name: 'Login',

  components: { PageFooter, LanguageSelector },

  data() {
    return {
      isSubmitting: false,
      projectName: process.env.VUE_APP_PROJECT_NAME,
      form: {
        username: '',
        password: ''
      },
      formRules: {
        username: [
          {
            required: true,
            // @TODO: 切换语言时无法自动切换表单验证提示信息，需要优化
            message: this.$i18n.t('validator.required', { field: this.$i18n.t('username') }),
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: this.$i18n.t('validator.required', { field: this.$i18n.t('password') }),
            trigger: 'blur'
          }
        ]
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

        await this.$router.push({ name: 'Index' });
      } catch (e) {
        this.$message.error(this.$i18n.t('view.login.login_fail'));
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
  justify-content: space-between;

  .wrapper {
    margin: 200px auto;
    background-color: #fff;
    padding: 30px;
    width: 480px;
    border-radius: 8px;

    .header {
      font-size: 24px;
      text-align: center;
      margin: 0;
      padding: 0;
      font-weight: normal;
    }

    .form {
      margin-top: 40px;
    }
  }

  .footer {
    margin-bottom: 32px;
  }

  .language_selector {
    position: fixed;
    right: 32px;
    top: 32px;
  }
}
</style>
