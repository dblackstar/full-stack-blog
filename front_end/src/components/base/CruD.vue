<template>
    <div class="crud">
        <router-link class="edit" :to="{name:'EditPost', params:{id:postID}}">Edit</router-link>
        <!-- <router-link class="del" :to="{name:'Delete', params:{id:postID}}">Delete</router-link> -->
    </div>
</template>



<script>
export default{
    props:['postID'],
    data(){
        return {
            
        }
    },
    methods:{
        
    }

        
}

</script>


<style>
.crud {
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.crud a{
    width: 50%;
    text-align: center;
    margin-right: 10px;
}

.crud .edit{
    background: darkcyan;
    color: white;
}

.crud .del{
    background: crimson;
    color: white;
}

</style>