<template>
  <div id="app">
    <router-link to="/">我的博客</router-link>
    <router-link to="/addBlog">添加博客</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
// import addBlog from './components/addBlog'
export default{
  name:'app',
 components:{
   
 }
}
</script>
<style scoped>

</style>
