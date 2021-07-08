<!--管理==新增公告-->
<template>
  <div class="login">
    <!-- <img class='' src='../../assets/img/login.jpg'> -->
    <div class="img"></div>
    <div class="content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <i class="el-icon-user-solid"></i>
          <span class="login-text">登录</span>
        </div>
        <div>
          <el-form :model="loginData" :rules="rules" ref="loginData">
            <el-form-item prop="userName">
              <el-input
                v-model="loginData.userName"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <!-- <ei-input v-model="loginData.password" placeholder="请输入密码"></el-input> -->
              <el-input
                v-model="loginData.password"
                placeholder="请输入密码"
                type="password"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "upload",
  data() {
    return {
      loginData: {
        userName: "",
        password: "",
      },

      rules: {
        userName: { required: true, message: "不能为空", trigger: "blur" },
        password: { required: true, message: "不能为空", trigger: "blur" },
      },
    };
  },
  methods: {
    // 登录
    submitForm() {
      this.$refs.loginData.validate((valid) => {
        if (valid) {
          if (
            this.loginData.userName === "yanghangzhou" &&
            this.loginData.password === "123456"
          ) {
            this.$router.push({
              path: "/home",
            });
          } else {
            this.$message.error("用户名或密码错误");
          }
        } else {
          return false;
        }
      });
    },
  },
  mounted() {},
};
</script>

<style >
.img {
  background: url("../../assets/img/login.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  opacity: 0.4;
  position: relative;
}
.content {
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 100px;
  width: 400px;
  height: 300px;
  line-height: 50px;
  text-align: center;
  background: rgba(255, 255, 255);
}
.el-icon-user-solid {
  font-size: 40px;
  color: #ffdead;
  margin-right: 16px;
}
.login-text {
  font-size: 30px;
}
</style>