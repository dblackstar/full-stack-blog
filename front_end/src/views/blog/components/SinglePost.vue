<template>
    <div class="singlepost" >
        
        <div class="post">
            <h2>{{ singlePost.title}} </h2>
            <p v-for="cat in singlePost.categories" :key="cat">
                {{ cat }}
            </p>
            <p>by <strong>{{ singlePost.username}}</strong> at <strong>{{ new Date(singlePost.createdAt).toDateString()}}</strong> </p>
            <p>{{ singlePost.body }}</p>
        </div>
        
    </div>
</template>



<script>
import {fetchPost, } from '@/api/blogApi'
export default{
    props:['id',],
    components:{
      
    },

    data(){
        return {
            // single post
            singlePost:{},
            singlePostErr:'',


        }
    },  
    created(){
        // get a single post
        fetchPost(this.id)
            .then(res => {
                this.singlePost = res.data
            })
            .catch(err =>{
                this.singlePostErr = err.message
            })
    },
    computed:{ 
        
    },  

    methods:{
        
    }

}
</script>


<style>
.createpost form{
    width: 90%;
    margin: 0 auto;
    padding: 20px;

}

.createpost form div{
    margin: 3% 0;
}
.createpost form div label{
    display: block;

}
.createpost form div input{
    width:100%;
    height: 40px;
    border: none;
}

.createpost form div textarea{
    width:100%;
    height: 200px;
}


.createpost form input[type=submit]{
    background: darkcyan;
    padding: 5px;
    border: none;
    color: white;

}
</style>