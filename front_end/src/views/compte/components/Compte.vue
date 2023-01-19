<template>
    <div class="compte">
        <div class="choose">
            <button ><router-link :to="{name: 'UserCnx'}">Login</router-link></button>
            <button ><router-link :to="{name: 'UserReg'}">Register</router-link></button>
        </div>
        <div class="logReg">
            <div class="login" >
                <transition name="login">
                    <router-view></router-view>
                </transition>
            </div>

            
        </div>
    </div>
</template>



<script>
import UserCnxVue from './UserCnx.vue';
import UserRegVue from './UserReg.vue';
export default{
    // beforeRouteLeave(to){
        
    //     const reply = window.confirm('Yu have unsaved changes ! Do yu want to leave ?')
        
    //     if(!reply){
    //         return false
    //     }
    // },
    name:"LastPost",
    components:{
        UserCnxVue,
        UserRegVue
    },
    data(){
        return {
            showAllPosts :[],
            error:'',
        }
    },

    created() {
        
    },
    methods:{
        showComponent(c){
            this.$emit('showcomponent', c);
        },
        chooseLogin(){
            this.l_or_r = true;
        },
        chooseReg(){
            this.l_or_r = false;
        }
    }


}
</script>


<style>
.compte{
    height: 100vh;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr;
    grid-template-rows: 40px auto;
    grid-template-areas:  
        "choose"    
        "logreg"    
    ;
    
}

/* choose */
.compte .choose{
    grid-area: choose;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.compte .choose button{
    border: none;
    margin: 0 5px;
    height: 30px;
    cursor: pointer;
}
.compte .choose button a{
    width: 100px;
    padding: 30px;
    color: darkslategray;
    font-weight: bold;
    font-size: 18px;
}


/*  logreg  */
.compte .logreg{
    grid-area: logreg;
    background: rgb(214, 211, 211);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
}

/* ******** TRANSITIONS ********/
/* ENTER */
.login-enter-from{
    opacity: 0;
    transform: translateX(-100%);   
}
.login-enter-to{
    opacity: 1;
    transform: translateX(0); 
}
.login-enter-active{
    transition: all 1s ease;
}




/* LEAVE */
.login-leave-from{
    opacity: 1;
    transform: translateX(0);   
}
.login-leave-to{
    opacity: 0;
    transform: translateX(100%); 
}
.login-leave-active{
    transition: all 1s ease;
}

</style>
