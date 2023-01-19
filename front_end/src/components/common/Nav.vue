<template>
    <header>
        <div class="title">
            <router-link to="/"><h1>Sopdet</h1></router-link>
        </div>
        
        <div class="toggle" @click="showMenu">
            <span v-if="toggleMenu"  class="material-symbols-outlined">
                menu
            </span>
            <span v-else class="material-symbols-outlined">
                close
            </span>
        </div>

        <nav :class="{swhNav:swhNav}">
            <router-link @click="showMenuHide" :to="{name:'Home'}">Accueil</router-link> 
            <router-link @click="showMenuHide" :to="{name:'Posts'}">Blog</router-link> 
            <router-link @click="showMenuHide" :to="{name:'Contact'}">Contact</router-link> 
            <router-link @click="showMenuHide" :to="{name:'Dashboard'}">Dashboard</router-link>
        </nav>
    </header>
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
 
header{
    height: 13vh;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fafafa;

}

header .title h1{
    margin: 0;
    padding: 0;
}
header .title{
    display: flex;
    flex-direction: column;
    align-items: center;
}

nav{
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;

}
header h1, nav a{
    color: #2c3e50;
}
nav a{
    padding: 0 20px;
}

header .toggle{
    display: none;
}
header .toggle .material-symbols-outlined{
    margin: 0;
    padding: 0;
    cursor: pointer;
}


header .compteStyle:hover{
    background: crimson;
    width: 100%;
    transition: 0.2s;
}
@media only screen and (max-width: 720px) {
    header .toggle{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }

    header .toggle .material-symbols-outlined{
        font-size: 40px;
    }

    header .toggle{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    nav{
        padding: 0;
        margin: 0;
        position: fixed;
        top:13vh;
        height: 13vh;
        display: none;
        width: 80%;
        margin:  0 auto;
        background: rgb(20, 79, 99);

    }

    header h1, nav a{

    }
    header nav a{
        color: white;
        padding: 0 20px;

    }


    .swhNav {
        display: flex;
    }
    
}


@media only screen and (max-width: 415px) {
    
    
    nav{
        
        flex-direction: column;
        width: 100%;
        height: auto;
        margin:  0 auto;
        background: rgb(20, 79, 99);

    }
    nav a{
        padding:  15px 0;
    }
    
}
</style>
  