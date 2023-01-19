<template>
    <div class="lastpost">
        <h2>My latest posts</h2>
        <ul>
            <li v-for="post in lastsposts" :key="post._id">
                <router-link :to="{name:'SinglePost', params:{id:post._id}}"><h4>{{post.title}} </h4></router-link>
                <p class="postbody">{{post.body.slice(0, 200)}}</p>
                <div class="postdetails">
                    <p class="postdate">By <strong>{{post.username}}</strong> at <strong>{{ new Date(post.createdAt).toDateString()}}</strong></p>
                </div>
            </li>
            
        </ul>
    </div>
</template>
  

<script>
import {fetchAllPosts, fetchPost, delPost, updatePost, createPost} from '@/api/blogApi'
    
    export default{
        components:{

        },
    
        data(){
            return {
                lastsposts:[],
                lastspostsErr:{},
            }
        },
    
        created(){
            // get all posts
            fetchAllPosts()
            .then(res =>{
                let posts = res.data;
                this.lastsposts = posts.filter((post,i) =>{
                                    if(i<=2){
                                        return post
                                    } 
                                })
            })
            .catch(err =>{
                this.lastspostsErr = err.message
            });

            
        },

        computed:{    
                        
        },
    }
    </script>




<style>
.lastpost {
    margin: 2em 0;
}
.lastpost ul{
    margin: 0;
    padding: 0;
}
.lastpost ul li{
    margin: 1em 0;
    list-style-type: none;
    padding: 10px;
    border-left: 5px solid crimson;
    background: rgb(247, 246, 246);
}
.lastpost ul li h4{
    font-size: 20px;
}
.lastpost ul li p{
    margin: 5px 0;
    
}
.lastpost .postdetails{
    display: flex;
    flex-direction: row;

}
.lastpost .postdetails *{
    margin-right: 10px;
}
.lastpost .postdetails .postcat button{
    padding: 5px 6px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #2c3e50;
    color: white;
}
@media only screen and (max-width: 590px) {
    
    .lastpost ul li h4{
        font-size: 20px;
    }
    .lastpost .postbody{
        display: none;
    }
    
    .lastpost .postdetails{
        display: flex;
        flex-direction: column;
    }
    .lastpost .postdetails .postcat {
        display: flex;
        flex-direction: column;
    }
    .lastpost .postdetails .postcat button{
        width:fit-content;
        padding: 3px 5px;
        border-radius: 5px;
        cursor: pointer;
        background: #ddd;
    }
}
</style>
  