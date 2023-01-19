<template>
    <div class="pages">
        <ul>
            <li><button @click="updatFilter('all')" :class="{active: currentFilter === 'all'}">First</button></li>
            <li><button @click="updatFilter('all')" :class="{active: currentFilter === 'all'}">Previous</button></li>
            <li><button @click="updatFilter('all')" :class="{active: currentFilter === 'all'}">1/3</button></li>
            <li><button @click="updatFilter('all')" :class="{active: currentFilter === 'all'}">Next</button></li>
            <li><button @click="updatFilter('all')" :class="{active: currentFilter === 'all'}">Last</button></li>
        </ul>
        
    </div>
</template>



<script>
export default{
    props:['currentFilter'],
    data(){
        return{
            
        }
    },
    methods:{
        updatFilter(by){
            this.$emit('filterChanger', by)
        }
    }

        
}

</script>


<style >

.pages ul{
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #ddd;
}
.pages ul li{
    list-style-type: none;
    margin: 0 1em;
}
.pages ul li button{
    padding: 10px;
    width: 100px;
}
</style>