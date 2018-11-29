<template>
    <div id="addBlog">
        <h1>编辑博客</h1>
        <form>
            <label for="">标题：</label>
            <input type="text" v-model="blog.title" placeholder="请输入博客标题">
            <label for="">内容</label>
            <textarea v-model="blog.content" placeholder="请输入正文内容....."></textarea>
            <select v-model="blog.author">
                <option v-for="author in authors" :key="author">{{author}}</option>
            </select>

               <div id="checkboxes">
                <label>vue.js</label>
                <input type="checkbox" value="vue.js" v-model="blog.types">
                <label>node.js</label>
                <input type="checkbox" value="node.js" v-model="blog.types">
                <label>react.js</label>
                <input type="checkbox" value="react.js" v-model="blog.types">
             
            </div>
            <button @click.prevent="editBlogIt">编辑博客</button>
        </form>
        <ul>
            <li v-for="item in blog.types" :key="item">{{item}}</li>
        </ul>
    </div>
</template>
<script>
import axios  from 'axios'
    export default{
        name:'addBlog',
        data(){
            return{
                id:this.$route.params.id,
                blog:{},
                authors:[
                    '孙钰凯','孙小凯','孙子开'
                ]
            }
        },
        methods:{
            editBlogIt(){
                axios.put('https://wd0594128064puzewe.wilddogio.com/posts/'+this.id+'.json',this.blog)
                .then(()=>{
                    this.$router.push('/')
                    console.log(1)
                })
            }
        },
        created(){
                axios.get('https://wd0594128064puzewe.wilddogio.com/posts/'+this.id+'.json').then(msg=>{
                    this.blog = msg.data;
                    console.log(this.blog.types)
                })
        }
    }
</script>
