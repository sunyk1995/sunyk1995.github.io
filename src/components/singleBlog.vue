<template>
    <div id="singleBlog">
        <h1>{{blog.title}}</h1>
        <p>{{blog.content}}</p>  
        <button @click='deleteIt'>删除博客</button>
        <router-link :to="'/editBlog/'+id">修改微博</router-link>
    </div>
</template>
<script>
 import axios from 'axios'
    export default{
        name:'singleBlog',
        data(){
            return{
                id:this.$route.params.id,
                blog:{}
            }
        },
        created(){
            axios.get('https://wd0594128064puzewe.wilddogio.com/posts/'+this.id+'.json')
            .then(msg=>{
                this.blog = msg.data
                // console.log(this.blog)
            })
        },
        methods:{
            deleteIt(){            
                   let onoff = confirm('确认删除？');
                   if(onoff){
                       axios.delete('https://wd0594128064puzewe.wilddogio.com/posts/'+this.id+'.json').then(mg=>{
                           this.$router.push('/')
                       })                    
                   }else{
                       return;
                   }
               
            },
            
        }
    }
</script>
