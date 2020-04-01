<template>
  <div class="login">
    <div class="wrapper">
      <el-form label-width="108px" ref="form" :model="form" :rules="formRules">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Permission from '../../utils/Permission';

export default {
  name: 'Login',

  data() {
    return {
      form: {
        username: 'username',
        password: 'password'
      },
      formRules: {
        username: [{ required: true, message: '用户名必填', trigger: 'blur' }],
        password: [{ required: true, message: '密码必填', trigger: 'blur' }]
      }
    };
  },

  methods: {
    onLogin() {
      Permission.login();
      this.$router.push({ name: 'Index' });
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  display: flex;
  height: 100vh;
  background-color: #4a5459;
  align-items: center;
  justify-content: center;

  .wrapper {
    background-color: #fff;
    padding: 30px;
    width: 600px;
    border-radius: 8px;
  }
}
</style>
