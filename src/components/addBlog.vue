<template>
    <div id="addBlog">
        <h1>添加博客</h1>
        <form @submit.prevent="addBlog()">
            <label for="">标题：</label>
            <input type="text" v-model="blog.title" placeholder="请输入博客标题">
            <label for="">内容</label>
            <textarea v-model="blog.content" placeholder="请输入正文内容....."></textarea>
            <select v-model="blog.author">
                <option v-for="author in authors" :key="author">{{author}}</option>
            </select>
            <div class="selete">
                <label>vue.js</label>
                <input type="checkbox" v-model="blog.types" value="vue.js">
                 <label>node.js</label>
                <input type="checkbox" v-model="blog.types" value="node.js">
                 <label>react.js</label>
                <input type="checkbox" v-model="blog.types" value="react.js">
            </div>
            <button>添加博客</button>
        </form>
        <ul>
            <li v-for="item in blog.type " :key='item'>{{item}}</li>
        </ul>
    </div>
</template>
<script>
import axios  from 'axios'
    export default{
        name:'addBlog',
        data(){
            return{
                blog:{
                    title:'',
                    content:'',
                    types:[],
                    author:''
                    
                },
                authors:[
                    '孙钰凯','孙小凯','孙子开'
                ]
            }
        },
        methods:{
            addBlog(){
                axios.post('https://wd0594128064puzewe.wilddogio.com/posts.json',this.blog)
                .then((msg)=>{console.log(msg)
                    alert('添加博客成功')
                })
            }
        }
    }
</script>
