import Vue from 'vue'
import Router from 'vue-router'
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'
import editBlog from './components/editBlog.vue'
import singleBlog from './components/singleBlog.vue'

Vue.use(Router)

export default new Router({
  routes: [
   {path:'/',component:showBlog},
   {path:'/addBlog',component:addBlog},
   {path:'/singleBlog/:id',component:singleBlog},
   {path:'/editBlog/:id',component:editBlog},
  
  ],
  mode:'history'
})
