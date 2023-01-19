<template>
    <div class="search_box">
        <form @submit.prevent="handleSubmit" >
            <select v-model="inputType">
                <option value="addrsrc">Chercher par addresse</option>
                <option value="tx">Chercher par Hash de la transaction</option>
            </select>
            <input v-model="inPut" type="text" placeholder="chercher votre transaction, ou addresse, hash">
            <input type="submit" value="chercher">
        </form>
    </div>
</template>



<script>
    import {btcUrls, fetchBTC} from '@/api/cryptoApi'
    import LastPosts from '../../views/blog/components/LastPosts.vue'
    
    export default{
        components:{
        LastPosts
    },
    
        data(){
            return {
                inPut:'',
                inputType:'addrsrc',
                info :{}
            }
        },
    
        created(){
            
        },
    
        methods:{
            handleSubmit(){
                
                if(this.inputType === 'addrsrc'){
                    fetchBTC(btcUrls.addr+this.inPut)
                    .then(res =>{
                        this.info = res.data
                        this.$emit('dataready', d);
                    })
                    .catch(err =>{
                        console.log(err);
                    })
                    // console.log(this.info);
                    
                }
            
            }
        }
    }
    </script>
    


<style>

.search_box form{
    background: firebrick;
    margin: 0;
    padding: 5px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}

.search_box form input, select{
    border: 0;
    padding: 7px;
    margin: 0 5px;
    border-radius: 10px;
}
.search_box form input[type="text"]{
    width: 70%;
}

</style>