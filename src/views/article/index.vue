<template>
<div class='container-article'>
  article
</div>
</template>

<script>
export default {
  name:"app-article",
  created(){
    this.$http.get('articles').then(res=>{
      console.log(res.data);
      
    }).catch(err=>{
      console.log(err);
      
    })
  }
}
</script>

<style scoped lang='less'></style>