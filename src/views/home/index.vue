<template>
  <!-- <div class="container-home">Home</div> -->
  <el-container class="container-home">
    <el-aside class="my-aside" width="200px">Aside</el-aside>
    <el-container>
    <el-header class="my-header">Header</el-header>
    <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "app-home"
};
</script>

<style lang="less" scoped>
.container-home {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: red;
}
.my-aside {
  background: greenyellow;
}
.my-header {
  // background: #fff;
  border-bottom: 1px solid #dddddd;
}
</style>>
