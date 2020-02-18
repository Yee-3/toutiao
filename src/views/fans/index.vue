<template>
  <div class='container-fans'>
    <el-card>
      <div slot="header">
        <my-bread>粉丝管理</my-bread>
      </div>
      <!-- tabs组件 -->
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="粉丝列表" name="list">
          <!-- 列表 -->
          <div class="fans-list">
            <div class="fans-item" v-for="item in fansList" :key="item.id">
              <el-avatar :size="80" :src="item.photo"></el-avatar>
              <p>{{item.name}}</p>
              <el-button type="primary" plain size="small">+关注</el-button>
            </div>
          </div>
          <!-- 分页 -->
          <el-pagination
            background
            layout="prev, pager, next"
            @current-change="pager"
            :page-size="reqParams.per_page"
            :current-page="reqParams.page"
            :total="total">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="粉丝画像" name="pictrue">2</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'app-fans',
  data () {
    return {
      activeName: 'list',
      // 粉丝列表
      fansList: [],
      // 总条数
      total: 0,
      // 传参
      reqParams: {
        page: 1,
        per_page: 24
      }
    }
  },
  created () {
    this.getFans()
  },
  methods: {
    // 分页
    pager (newPage) {
      this.reqParams.page = newPage
      this.getFans()
    },
    // 列表数据
    async getFans () {
      const res = await this.$http.get('followers', { params: this.reqParams })
      this.fansList = res.data.data.results
      this.total = res.data.data.total_count
    }
  }
}
</script>

<style scoped lang='less'>
.fans-list{
  .fans-item{
    padding-top: 10px;
    display: inline-block;
    width: 100px;
    height: 170px;
    border: 1px dashed #ddd;
    text-align: center;
    margin-right: 50px;
    margin-bottom: 20px;
    p{
      padding: 0;
      font-size: 12px;
    }
  }
}
</style>