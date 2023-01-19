<template>
    <div class="posts"  >
       <div v-if="allpostsErr">   {{ error }} </div>

            <form >
                <input type="text" v-model="searchText" placeholder="search something">
            </form>
            <div class="" v-if="filterPost.length ">
                <h2>Number of posts : {{ filterPost.length }}</h2>
                <ul>
                    <li v-for="post in filterPost" :key="post._id">
                        <router-link :post="post" :to="{name:'SinglePost', params:{id:post._id}}"><h4>{{post.title}} </h4></router-link>
                        <p class="postbody">{{post.body.slice(0, 200)}}</p>
                        <div class="postdetails">
                            <p class="postdate">By <strong>{{post.username}}</strong> at <strong>{{ new Date(post.createdAt).toDateString()}}</strong></p>
                            <div class="postcat" v-for="cat in post.categories" :key="cat"> 
                                <button :class="{catBtn: addcls}" @click="handleclick(cat)">#{{ cat }}</button>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
            <div v-else>
                <Spinner />
            </div>
       </div>
        
</template>
  

<script>
import {fetchAllPosts, fetchPost, delPost, updatePost, createPost} from '@/api/blogApi'
import Paginator from '@/components/base/Paginator.vue'
import Spinner from '../../components/base/Spinner.vue'
    export default{
        components:{
            Paginator,
            Spinner,
        },
    
        data(){
            return {
                // all posts
                allposts : [],
                allpostsErr:'',

                

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
                this.allposts = res.data
            })
            .catch(err =>{
                this.allpostsErr = err.message
            })

            
            
        },
        computed:{
            
            filterPost(){
                if(this.searchText||this.t){
                    if(this.t){
                        return this.allposts.filter((post) =>{
                            if(post.categories.includes(this.t)){
                                return post
                            }
                        })
                    }else{
                        return this.allposts.filter((post) =>{
                            if(post.title.includes(this.searchText)){
                                return post
                            }
                        })
                    }
                }else{
                    return this.allposts.filter((post) =>{
                    if(post.status === true){
                        return post
                    }
                })  
                }
            },
        },

        methods:{
            // get all post
            
        }
    }
    </script>




<style scoped>
.posts {
    margin: 2em 0;
    height: 100%;
}
.posts form {
    margin: 2em 0;
}
.posts form input{
    width: 60%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #2c3e50;
    outline: none;
}

.posts ul{
    margin: 0;
    padding: 0;
    width: 100%;
}
.posts ul li{
    margin: 2em 0;
    list-style-type: none;
    padding: 10px;
    border-left: 5px solid crimson;
    background: rgb(247, 246, 246);
}

.posts ul li h4{
    font-size: 20px;
}
.posts ul li p{
    margin: 5px 0;
    
}
.posts .postdetails{
    display: flex;
    flex-direction: row;

}
.posts .postdetails *{
    margin-right: 10px;
}
.posts .postdetails .postcat button{
    padding: 5px 6px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #2c3e50;
    color: white;
}
.posts .postdetails .postcat button:hover{
    background: #ddd;
    color: #2c3e50;
    transition: all 0.6s ease;
}

@media only screen and (max-width: 780px) {
    
    .posts ul li h4{
        font-size: 20px;
    }
    .posts .postbody{
        display: none;
    }
    
    .posts .postdetails{
        display: flex;
        flex-direction: column;
    }
    .posts .postdetails .postcat {
        display: flex;
        flex-direction: column;
    }
    .posts .postdetails .postcat button{
        width:fit-content;
        padding: 3px 5px;
        border-radius: 5px;
        cursor: pointer;
        background: #ddd;
    }
}
</style>
 