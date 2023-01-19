<template>
    <div class="dashboard">
        <div class="dashbord-items nav">
           <DashboardNav @showcomponent="showcomponent = $event" /> 
        </div>
        <div class="dashbord-items main">
            <div v-if="showcomponent == 'allposts'">
                <AllPosts />
            </div>

            <div v-else-if="showcomponent == 'draftposts'">
                <DraftPosts />
            </div>

            <div v-else-if="showcomponent == 'publishedposts'">
                <PublishedPosts />
            </div>

            <div v-else-if="showcomponent == 'createpost'">
                <CreatePost />
            </div>

            <div v-else-if="showcomponent == 'profil'">
                <Profil />
            </div>

            <div v-else>
                Welcome Mr, Admin
            </div>
        </div>
        <div class="dashbord-items profil">
            
        </div>

    </div>
</template>



<script>
import {fetchAllPosts, fetchPost, delPost, updatePost, createPost} from '@/api/blogApi'
import DashboardNav from './components/DashboardNav.vue'
import AllPosts from '@/views/blog/AllPosts.vue'
import CreatePost from '@/views/blog/components/CreatePost.vue'
import DraftPosts from '@/views/blog/components/DraftPosts.vue'
import PublishedPosts from '@/views/blog/components/PublishedPosts.vue'
import Profil from './components/Profil.vue'



export default{
    
    components:{
        DashboardNav,
        AllPosts,
        CreatePost,
        DraftPosts,
        PublishedPosts,
        Profil
    },

    data(){
        return{
            showcomponent:'',

            // shwo allpost
            allposts : {},
            allpostsErr:'',

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
                return this.allposts
            }
        },
    },

    methods:{
        // get all post
        
    }

}
</script>


<style>


.dashboard .nav{
    display: flex;
    flex-direction: row;
    justify-content: center;
}


</style>