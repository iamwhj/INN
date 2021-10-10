<template>
  <div class="login-container">
    <el-form ref="validateForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">Welcome to login INN </h3>
      </div>

      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
          name="username"
          prefix-icon="el-icon-user-solid"
          suffix-icon="el-icon-success"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="请输入密码"
          name="password"
          prefix-icon="el-icon-info"
          suffix-icon="el-icon-view"
          tabindex="2"
          auto-complete="on"
          @keyup.enter="handleLogin"
        />
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.prevent="handleLogin">登 录</el-button>

      <div class="tips">
        <span style="margin-right:20px;">username: more then five</span>
        <span> password: more then six</span>
      </div>

    </el-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
  const validateUsername = (rule, value, callback) => {
    if (value.length < 5) {
      callback(new Error('Please enter the correct user name'))
    } else {
      callback()
    }
  }
  const validatePassword = (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('The password can not be less than 6 digits'))
    } else {
      callback()
    }
  }

  let loginForm = ref({
    username: 'hello Daw',
    password: '123456789'
  })
  const loginRules = ref({
    username: [{ required: true, trigger: 'blur', validator: validateUsername }],
    password: [{ required: true, trigger: 'blur', validator: validatePassword }]
  })
  const loading = ref(false)
  const passwordType = ref('password')

  const validateForm = ref()
  const router = useRouter()
  const handleLogin = function() {
    validateForm.value.validate(valid => {
      if (valid) {
        loading.value = true
        setTimeout(() => {
          router.push('/')
          loading.value = false
        }, 1000)
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }

  const store = useStore()
  onMounted(() => {
    const promiseArr = []
    const list = {}
    const avatarList = {
      'rightAvt1' : () => import('../../assets/img/thumb11.jpg'),
      'rightAvt2' : () => import('../../assets/img/thumb12.jpg')
    }
    for (const key in avatarList) {
      promiseArr.push(avatarList[key]().then(res => list[key] = res))
    }
    Promise.all(promiseArr).then(res => {
      store.commit('changeMainAvatarList', list)
    })
  })
</script>

<style lang="scss" scoped>
$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 400px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
