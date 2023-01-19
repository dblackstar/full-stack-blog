<template>
    <div class="publishedposts">
        <form >
            <input type="text" v-model="searchText" placeholder="search something">
        </form>
        <h2>My last post : {{ filterPost.length }}</h2>
        <ul>
            <li v-for="post in filterPost" :key="post._id">
                <router-link :to="{name:'SinglePost', params:{id:post._id}}"><h4>{{post.title}} </h4></router-link>
                <p class="postbody">{{post.body.slice(0, 200)}}</p>
                <div class="postdetails">
                    <p class="postdate">By <strong>{{post.username}}</strong> at <strong>{{ new Date(post.createdAt).toDateString()}}</strong></p>
                    <div class="postcat" v-for="cat in post.categories" :key="cat"> 
                        <button :class="{catBtn: addcls}" @click="handleclick(cat)">#{{ cat }}</button>
                    </div>
                    <div class="edit_del">
                        <CruD :postID="post._id" />
                    </div>
                </div>
            </li>
            
        </ul>

    </div>
</template>
  

<script>
import CruD from '@/components/base/CruD.vue'
import {fetchAllPosts, fetchPost, delPost, updatePost, createPost} from '@/api/blogApi'
import Paginator from '@/components/base/Paginator.vue'
    export default{
        components:{
        Paginator,
        CruD,
    },
    
        data(){
            return {
                // all posts
                publishedposts : [],
                publishedpostssErr:'',

                

                //  search text
                searchText:'', 

                // tags
                t:'',

                // style tag btn
                addcls:false,

            }
        },
    
        created(){
            // get all posts
            fetchAllPosts()
            .then(res =>{
                this.publishedposts = res.data;
                
            })
            .catch(err =>{
                this.publishedposts = err.message
            }) 
            
        },
        computed:{    
            filterPost(){ 
                return this.publishedposts.filter((post) =>{
                    if(post.status === true){
                        return post
                    }
                })     
            },
        },

        methods:{
            // get all post
            
        }
    }
    </script>




<style scoped>
.publishedposts {
    margin: 2em 0;
}
.publishedposts form {
    margin: 2em 0;
}
.publishedposts form input{
    width: 60%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #2c3e50;
    outline: none;
}
.publishedposts form input[type='submit']{
    background: #2c3e50;
    width: fit-content;
    padding: 10px;
    color: white;
}

.publishedposts ul{
    margin: 0;
    padding: 0;
}
.publishedposts ul li{
    margin: 2em 0;
    list-style-type: none;
    padding: 10px;
    border-left: 5px solid crimson;
    background: rgb(247, 246, 246);
}

.publishedposts ul li h4{
    font-size: 20px;
}
.publishedposts ul li p{
    margin: 5px 0;
    
}
.publishedposts .postdetails{
    display: flex;
    flex-direction: row;

}
.publishedposts .postdetails *{
    margin-right: 10px;
}
.publishedposts .postdetails .postcat button{
    padding: 5px 6px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #2c3e50;
    color: white;
}
.publishedposts .postdetails .postcat button:hover{
    background: #ddd;
    color: #2c3e50;
    transition: all 0.6s ease;
}

@media only screen and (max-width: 590px) {
    
    .publishedposts .postbody{
        display: none;
    }
    
    .publishedposts .postdetails{
        display: flex;
        flex-direction: column;
    }
    .publishedposts .postdetails .postcat {
        display: flex;
        flex-direction: column;
    }
    .publishedposts .postdetails .postcat button{
        width:fit-content;
        padding: 3px 5px;
        border-radius: 5px;
        cursor: pointer;
        background: #ddd;
    }
}
</style>
 