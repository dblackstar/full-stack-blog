<template>
    <div class="createpost">
        <br>
        <form @submit.prevent="handleSubmit">
            <div class="title">
                <label >Title :</label>
                <input v-model="title" type="text">
            </div>

            <div class="body">
                <label >Body :</label>
                <textarea v-model="body" ></textarea>
            </div>

            <div class="categories">
                <label >Categories :</label>
                <input v-model="tempCat" @keyup.alt="addCat" type="text">
            </div>

            <div class="username">
                <label >username :</label>
                <select v-model="username">
                    <option value="dampa">Pague</option>
                </select>
            </div>
            
            <div class="status">
                <label >Status :</label>
                <select v-model="statusProject">
                    <option value="false">Draft</option>
                    <option value="true">Published</option>
                </select>
            </div>
            <input type="submit" value="Update">            
        </form>
        <br>

    </div>
</template>



<script>
import axios from 'axios';
import {fetchAllPosts, fetchPost, delPost, updatePost, createPost} from '@/api/blogApi'
export default{
    components:{
      
    },
    props:['id'],
    data(){
        return{
            statusProject:false,
            username:'dampa',

            title:'',
            body:'',
            categories:[],
            tempCat:''
        }
    },  
    mounted(){
        fetchPost(this.id)
            .then(res =>{
                this.title = res.data.title;
                this.body = res.data.body;
                this.username = res.data.username;
                this.statusProject = res.data.status;
                
            })
            .catch(err=>{
                console.log(err.message)
            })
    },

    methods:{
        addCat(e){
            if(e.key ===',' && this.tempCat){
                if(!this.categories.includes(this.tempCat)){
                    this.categories.push(this.tempCat);
                }
                this.tempCat ='';
            }
        }, 
        handleSubmit(){
            let updatedPost = {
                title:this.title,
                body:this.body,
                username:this.username,
                categories:this.categories,
                status:this.statusProject,
            }
            // console.log(newPost)
            // createPost(JSON.stringify(newPost))
            // .then(res =>{
            //     console.log(res.data);
            // })
            // .catch(e =>{
            //     console.log(e)
            // })

            axios.put('http://localhost:5000/api/posts/'+this.id, updatedPost)
            .then((res)=>{
                console.log(res.data)
            }).catch(err => {
                console.log(err);
            })

        },
        

        
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
.createpost form div input, select{
    width:100%;
    height: 40px;
    border: 1px solid lightgrey;
}

.createpost form div textarea{
    width:100%;
    height: 200px;
}

.createpost form div select{
    width:auto;
    height: 40px;
    border: 1px solid lightgrey;
}

.createpost form input[type=submit]{
    background: darkcyan;
    padding: 10px;
    border: none;
    color: white;
    font-size: 130%;
    font-weight: bold;
}
</style>