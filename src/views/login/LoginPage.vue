<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface Form {
  account: string
  password: string
}

const form = reactive<Form>({
  account: '',
  password: '',
})

//表单校验
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<Form>>({
  account: [{ message: '请输入账号', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码不能少于6位', trigger: 'blur' },
  ],
})

function handleLogin(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    console.log(valid, fields)
    if (valid) {
      console.log('账号:', form.account)
      console.log('密码:', form.password)
    } else {
      console.log('error submit!', fields)
    }
  })
  // 这里可以添加实际的登录逻辑，比如调用 API


  // 模拟登录成功
}
</script>

<template>
  <div class="main">
    <h1>账号登陆</h1>
    <p>Account Login</p>
    <el-form ref="ruleFormRef" :rules="rules" :model="form" class="form">
      <el-form-item class="account-number" prop="account">
        <template v-slot:label>
          <svg
            t="1655889286604"
            class="icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1495"
            width="24"
            height="24"
          >
            <path
              d="M515.131392 563.202048c155.492352 0 281.544704-126.075904 281.544704-281.544704 0-155.492352-126.053376-281.544704-281.544704-281.544704-155.497472 0-281.547776 126.052352-281.547776 281.544704C233.58464 437.126144 359.634944 563.202048 515.131392 563.202048zM643.106816 359.1424c0 0-6.398976 101.680128-131.175424 101.680128-124.777472 0-124.777472-101.680128-124.777472-101.680128L643.106816 359.1424zM515.131392 614.391808c-332.112896 0-409.522176 170.066944-409.522176 409.496576l819.04128 0C924.650496 783.058944 848.638976 614.391808 515.131392 614.391808z"
              p-id="1496"
              fill="#00cccc"
            ></path>
          </svg>
        </template>
        <el-input
          v-model="form.account"
          style="width: 362px; height: 40px"
          type="text"
          placeholder="请输入账号"
        />
      </el-form-item>
      <el-form-item class="pwd" prop="password">
        <svg
          t="1655889313328"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1667"
          width="24"
          height="24"
        >
          <path
            d="M879.849856 385.02485h-106.549958V256.5999S796.749889 0 512 0c0 0-258.287399 0-258.287399 258.112399v126.912451H144.137644a53.549979 53.549979 0 0 0-53.749979 53.012479v533.074792c0 29.087489 24.212491 52.887479 53.749979 52.887479H879.849856a53.549979 53.549979 0 0 0 53.749979-52.937479V437.974829a53.549979 53.549979 0 0 0-53.749979-52.937479z m-529.524793 0V258.099899S348.275064 96.062462 517.062498 96.062462c0 0 159.137438-4.999998 159.137438 159.999938v128.96245z m0 0"
            p-id="1668"
            fill="#00cccc"
          ></path>
        </svg>
        <el-input
          v-model="form.password"
          style="width: 362px; height: 40px"
          type="password"
          placeholder="请输入密码"
          show-password
        />
      </el-form-item>
    </el-form>
    <div class="login-bar">
      <a href="">忘记密码</a>
      <a href="#" class="login">去注册</a>
    </div>
    <el-form-item class="btn-bar">
      <el-button type="primary" @click="handleLogin(ruleFormRef)">登陆</el-button>
    </el-form-item>
  </div>
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
}

input,
select {
  outline: none;
}

.main {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/signInBackground.jpg') center no-repeat;
  background-size: cover;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 240px;
    font-size: 24px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .form {
    margin-top: 34px;
    margin-right: 40px;

    .account-number,
    .pwd {
      display: flex;
      align-items: center;

      input {
        width: 362px;
        height: 40px;
        border: 1px solid #ccc;
        color: #999;
        line-height: 18px;
        padding: 0 5px;
      }

      &.pwd {
        margin-top: 26px;
      }
    }

    //.icon {
    //  margin-right: 16px;
    //}
  }

  .login-bar {
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    width: 362px;

    a {
      display: block;
      font-size: 12px;
      color: #000;

      &.login {
        color: #0cc;
      }
    }
  }

  .btn-bar {
    button {
      margin-top: 18px;
      width: 362px;
      height: 40px;
      border: none;
      background: #0cc;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
</style>
