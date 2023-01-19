<template>
    <div class="dashboardNav">
        <div class="nav">
            <ul>
                <li><button @click="showComponent('draftposts')" >Draft posts</button></li>
                <li><button @click="showComponent('publishedposts')" >Published posts</button></li>
                <li><button @click="showComponent('createpost')">Create post</button></li>
                <li><button @click="showComponent('profil')">Profil</button></li>
            </ul>
            
        </div>
    </div>
</template>



<script>
// import getLastPosts from '@/composables/getLastPosts.js'

export default{
    name:"LastPost",
    components:{},
    data(){
        return {
            showAllPosts :[],
            error:''
        }
    },

    created() {
        
    },
    methods:{
        showComponent(c){
            this.$emit('showcomponent', c);
        }
    }


}
</script>


<style>

.dashboardNav .nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


.dashboardNav .nav ul{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: row;
}
.dashboardNav .nav ul li{
    list-style-type: none;
}
.dashboardNav .nav ul li button{
    padding: 5px 15px;
}



</style>