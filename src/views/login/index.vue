<template>
  <!-- <div class="container">Login</div> -->
  <!-- 全屏容器 -->
  <div class="container-login">
    <el-card class="my-card">
      <img src="../../assets/logo_index.png" alt="">
    </el-card>
  </div>
</template>

<script>
export default {
 name: 'app-login',
}
</script>

<style scoped lang='less'>
.container-login{
  width:100%;
  height: 100%;
  position: absolute;
  top:0;
  left: 0;
  background: url(../../assets/login_bg.jpg) no-repeat;
  background-size: cover;
  .my-card{
    width:400px;
    height: 350px;
    transform: translate(-50%,-60%);
    position: absolute;
    left: 50%;
    top:50%;
    img{
      width: 200px;
      display: block;
      margin: 0 auto 20px
    }
  }

}
</style>