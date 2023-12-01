<template>
  <div class="as">
    <div class="as1">
      <div class="as2-left"><img src="../assets/微信图片_20231123100801.png"/></div>
      <div class="as3-right"><img src="../assets/微信图片_20231123100807.png"/></div>
    </div>
    <!-- <img src="../assets/login.jpg" /> -->
   <div class="login" style="top: 228px; width: 600px; height: 502px; margin-left: 1125px;">
      <div style="margin-left: 220px; font-size: 40px; color: #0076fe; font-weight: bold;">登&nbsp;录</div>
      <div class="login-content">
        <div class="login-content-item" style="margin-top: 50px;">
          <div class="login-content-item-input">
            <i class="iconfont icon-zhanghao"></i>
            <input type="text" class="text-box"
              style="width: 425px; height: 80px; border-radius: 35px; font-size: 18px; padding-left: 45px;"
              placeholder="请&nbsp;输&nbsp;入&nbsp;账&nbsp;号" />
          </div>
        </div>
        <div class="login-content-line"></div>
        <div class="login-content-item" style="margin-top: 20px;">
          <div class="login-content-item-input">
            <i class="iconfont icon-mima"></i>
            <input type="password" class="text-box"
              style="width: 425px; height: 80px; border-radius: 35px; font-size: 18px; padding-left: 45px;"
              placeholder="请&nbsp;输&nbsp;入&nbsp;密&nbsp;码" />
          </div>
        </div>
        <div class="login-content-line"></div>
        <el-form-item style="margin-top: 20px;">
          <div style="display: inline-block; float: left; margin-left: 55px;">
            <el-checkbox-group>
              <el-checkbox label="两&nbsp;周&nbsp;内&nbsp;自&nbsp;动&nbsp;登&nbsp;录" />
            </el-checkbox-group>
          </div>
          <div style="display: inline-block; float: left; margin-left: 184px; color: #b9bed1;">忘&nbsp;记&nbsp;密&nbsp;码
          </div>
        </el-form-item>
        <div class="login-content-save">
          <button type="button">登&nbsp;&nbsp;录</button>
        </div>
        <div style="margin-top: 20px;">
          <div style="display: inline-block; float: left; margin-left: 55px; color: #b9bed1;">
            其&nbsp;他&nbsp;账&nbsp;号&nbsp;登&nbsp;录</div>
          <div style="display: inline-block; float: left; margin-left: 200px; color: #0076fe;">立&nbsp;即&nbsp;注&nbsp;册
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>

<style lang="scss">
  .as {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-image: url('../assets/登录页面素材.jpg');
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .as1 {
      display: flex;
      width: 60%;
      height: 70%;
      .as2-left img {
        width: 630px;
        height: 100%;
      }
      .as3-right img {
        width: 650px;
        height: 100%;
      }
    }
  }
  .login-content-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .login-content-item-label {
    width: 80px;
    font-size: 14px;
  }

  .login-content-item-input {
    width: calc(100% - 80px);
    position: relative;
  }

  .login-content-item-input input {
    width: 100%;
    border: none;
    background: transparent;
    height: 24px;
  }

  .login-content-line {
    margin: 10px 0 15px 0;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.05);
  }

  .login-content-item-input select {
    width: 100%;
    border: none;
    appearance: none;
    background: transparent;
    height: 24px;
  }

  .login-content-save button {
    width: 85%;
    height: 65px;
    border: none;
    background: #0076fe;
    color: #FFFFFF;
    font-size: 22px;
    font-weight: bold;
    border-radius: 35px;
    margin-top: 35px;
  }

  .login {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color: white;
    /* 设置背景颜色 */
  }

  .iconfont {
    position: absolute;
    top: 26px;
    /* 根据需要调整图片距离文本框的距离 */
    left: 10px;
    /* 根据需要调整图片距离文本框的距离 */
    z-index: 1;
    /* 确保图片位于文本框下方 */
    width: 25px;
    height: 25px;
    font-size: 25px;
  }

  .text-box {
    z-index: 1;
    /* 确保文本框位于图片上方 */
  }
</style>
