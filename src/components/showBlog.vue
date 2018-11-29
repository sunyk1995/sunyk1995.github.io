<template>
    <div id="showBlog">
        <div class="myblog" v-for='blog in blogs' :key="blog.id">
            <router-link :to="'/singleBlog/'+blog.id">
                <h2 v-mixcolor>{{blog.title |toupperCase}}</h2>
            </router-link>
            <p>{{blog.content}}</p>
            <p>{{blog.author}}
                <span v-for=" item in blog.types" :key="item">{{item}}</span>
            </p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        name:'showBlog',
        data(){
            return{
                blogs:[]
            }
        },
        created(){
            axios.get('https://wd0594128064puzewe.wilddogio.com/posts.json')
            .then(msg=>{
                console.log(msg)
                let data  = msg.data;
                // console.log(data)
                let dataArr =[];
                for(var attr in data){
                    data[attr].id = attr;
                    dataArr.push(data[attr])
                }
                this.blogs = dataArr;
                console.log(this.blogs)
            })
        },
        directives:{
            mixcolor:{
                inserted:function(el){
                    el.style.color = '#'+Math.random().toString(16).slice(2,8);
                }
            }
        },
        filters:{
            Intercept:function(value){
                return value.slice(0,3)+'...';
            }
        }
    }
</script>
<style scoped>
#showBlog{
    margin: 0 auto;
}
    .myblog{
        background: #cccccc;
        padding: 10px;
        margin:10px auto;
        max-width: 500px;

    }
</style>
