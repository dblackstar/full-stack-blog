<template>
    <footer>
        By paguedem &copy; 2022
    </footer>
</template>



<script>
export default{
    data(){
        return {
            cat:["web", "system"],
            showcat:true,
            toggleMenu : true,
            swhNav: false,
        }
    }, 
    methods:{
        showMenu(){
            this.toggleMenu = !this.toggleMenu;
            this.swhNav = !this.swhNav
        },
        showMenuHide(){
            this.swhNav = false
            this.toggleMenu = true
        },
        toggleCat(){
            this.showcat = !this.showcat
        }
    },
    
}
</script>







<style>
 
footer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 13vh;
}

</style>
  