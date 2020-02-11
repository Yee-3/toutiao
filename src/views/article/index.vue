<template>
  <div class="container-article">
    <!-- 筛选区域 -->
    <el-card>
      <!-- 面包屑 -->
      <div class="header">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <!-- :to="{ path: '/' }" 和 router-link to 属性一致  -->
          <!-- { path: '/' } 使用对象和  to="/"  作用一致 -->
          <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-form label-width="80px">
        <el-form-item label="状态">
          <el-radio-group v-model="filterData.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
            <el-radio :label="4">已删除</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道"></el-form-item>
        <el-form-item label="日期"></el-form-item>
        <el-form-item></el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "app-article",
  data(){
    return{
      filterData:{
        status:null
      }
    }
  }
  // created() {
  //   this.$http
  //     .get("articles")
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
};
</script>

<style scoped lang='less'></style>