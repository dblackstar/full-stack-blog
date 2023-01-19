<template>
    <div class="adminLogin">
        <form >
            <input type="text" placeholder="username here">
            <input type="password" placeholder="password">
            <input type="text" placeholder="Enter the something">
            <input type="submit">
        </form>
    </div>
</template>



<script>
// import DashboardNav from './components/DashboardNav.vue'
// import AllPosts from '@/views/blog/components/AllPosts.vue'
// import CreatePost from '@/views/blog/components/CreatePost.vue'
// import DraftPosts from '@/views/blog/components/DraftPosts.vue'
// import PublishedPosts from '@/views/blog/components/PublishedPosts.vue'
// import Profil from '@/components/common/Profil.vue'
export default{
    components:{
        // DashboardNav,
        // AllPosts,
        // CreatePost,
        // DraftPosts,
        // PublishedPosts,
        // Profil
    },

    data(){
        return{
            showcomponent:'',
        }
    },  

}
</script>


<style>


.dashboard .nav{
    display: flex;
    flex-direction: row;
    justify-content: center;
}


</style>