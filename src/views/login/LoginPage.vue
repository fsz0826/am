<script setup lang="ts"></script>

<template>
  <div class="main">
    <h1>账号登陆</h1>
    <p>Background System</p>
    <form action="" class="form">
      <label class="account-number">
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
        <input type="text" placeholder="请输入账号" />
      </label>
      <label class="pwd">
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
        <input type="password" placeholder="请输入密码" />
      </label>
      <div class="select-bar">
        <select name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
    </form>
    <div class="sign-bar">
      <a href="">忘记密码</a>
      <a href="#" class="signin">去注册</a>
    </div>
    <div class="btn-bar">
      <button type="submit">登陆</button>
    </div>
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
  width: 1059px;
  height: 674px;
  background: #ffffff;

  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 140px;
    font-size: 24px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .form {
    margin-top: 34px;
    margin-right: 56px;

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

    .icon {
      margin-right: 16px;
    }

    .select-bar {
      margin-top: 33px;
      margin-left: 1px;
      display: flex;
      justify-content: flex-end;

      select {
        width: 374px;
        height: 42px;
        background-color: #fff;
        text-align: left;
        line-height: 18px;
        color: #000;
        border: 1px solid #ccc;
      }
    }
  }

  .sign-bar {
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    width: 362px;

    a {
      display: block;
      font-size: 12px;
      color: #000;

      &.signin {
        color: #0cc;
      }
    }
  }

  .btn-bar {
    button {
      margin-top: 40px;
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
