<template>
    <div class="filter">
        <button @click="updatFilter('all')" :class="{active: currentFilter === 'all'}">All</button>
        <button @click="updatFilter('web')" :class="{active: currentFilter === 'web'}">Web</button>
        <button @click="updatFilter('rust')" :class="{active: currentFilter === 'rust'}">Rust</button>
        <button @click="updatFilter('network')" :class="{active: currentFilter === 'js'}">Network</button>
        <button @click="updatFilter('systemprogramming')" :class="{active: currentFilter === 'systprogramming'}">System programming</button>
    </div>
</template>



<script>
export default{
    props:['currentFilter'],
    data(){

    },
    methods:{
        updatFilter(by){
            this.$emit('filterChanger', by)
        }
    }

        
}

</script>


<style>

.filter button{
    width: 200px;
}

</style>