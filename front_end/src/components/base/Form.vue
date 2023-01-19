<template>
    <form >
        <input type="search">
        <input type="submit" value="Search">
    </form>
</template>



<script>
// import getPosts from '@/composables/getPosts'
export default{
name:"LastPost",
components:{},
setup(){
    
},
}
</script>


<style>


/* ************** LAST POST********** */
.posts{
display: flex;
flex-direction: column;
padding: 12px 0;
}

.lastPosts h2{
font-size: 160%;
}




</style>