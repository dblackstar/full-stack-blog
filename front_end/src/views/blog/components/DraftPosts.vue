<template>
    <div class="daftposts">
        <form >
            <input type="text" v-model="searchText" placeholder="search something">
        </form>
        <h2>Number of daftposts : {{ filterPost.length }}</h2>
        <ul>
            <li v-for="post in filterPost" :key="post._id">
                <router-link :post="post" :to="{name:'SinglePost', params:{id:post._id}}"><h4>{{post.title}} </h4></router-link>
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
                daftposts : [],
                daftpostsErr:'',

                

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
                this.daftposts = res.data;
                
            })
            .catch(err =>{
                this.daftpostsErr = err.message
            }) 
            
        },
        computed:{    
            filterPost(){
                
                return this.daftposts.filter((post) =>{
                    if(post.status === false){
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
.daftposts {
    margin: 2em 0;
}
.daftposts form {
    margin: 2em 0;
}
.daftposts form input{
    width: 60%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #2c3e50;
    outline: none;
}
.daftposts form input[type='submit']{
    background: #2c3e50;
    width: fit-content;
    padding: 10px;
    color: white;
}

.daftposts ul{
    margin: 0;
    padding: 0;
}
.daftposts ul li{
    margin: 2em 0;
    list-style-type: none;
    padding: 10px;
    border-left: 5px solid crimson;
    background: rgb(247, 246, 246);
}

.daftposts ul li h4{
    font-size: 20px;
}
.daftposts ul li p{
    margin: 5px 0;
    
}
.daftposts .postdetails{
    display: flex;
    flex-direction: row;

}
.daftposts .postdetails *{
    margin-right: 10px;
}
.daftposts .postdetails .postcat button{
    padding: 5px 6px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #2c3e50;
    color: white;
}
.daftposts .postdetails .postcat button:hover{
    background: #ddd;
    color: #2c3e50;
    transition: all 0.6s ease;
}

@media only screen and (max-width: 590px) {
    
    .daftposts .postbody{
        display: none;
    }
    
    .daftposts .postdetails{
        display: flex;
        flex-direction: column;
    }
    .daftposts .postdetails .postcat {
        display: flex;
        flex-direction: column;
    }
    .daftposts .postdetails .postcat button{
        width:fit-content;
        padding: 3px 5px;
        border-radius: 5px;
        cursor: pointer;
        background: #ddd;
    }
}
</style>
 