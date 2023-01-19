<template>
    <transition name="login" >
        <div class="login">
            <h2>Connexion</h2>
            <div class="gg_fcb">
                <ul>
                    <li><a href="#">Avec mon compte Google</a></li>
                    <li><a href="#">Avec mon compte Facebook</a></li>
                </ul>
            </div>
            <span>----------- ou ----------</span>
            <form >
                <input  type="email" placeholder="Email">
                <input  type="password" placeholder="Password">
                <input type="submit" value="connecter">
            </form>
            <div class="reinitpasswor">
                <a href="#">J'ai oublié mon mot de passe</a>
            </div>
        </div>
    </transition>
</template>



<script>
// import getLastPosts from '@/composables/getLastPosts.js'

export default{
    name:"LastPost",
    components:{},
    data(){
        return {
            showAllPosts :[],
            error:'',
            l_or_r : true,
        }
    },

    created() {
        
    },
    methods:{
        showComponent(c){
            this.$emit('showcomponent', c);
        }
    }


}
</script>


<style>
.login{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: darkslategray; 
    
}

.login .login  form{
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 10px;

}
.login .login  form input{
    margin: 5px 0;    
    padding: 10px;
}
.login  .login  .gg_fcb ul{
    margin: 0;
    padding: 0;
    
}
.login  .login  .gg_fcb ul li{
    list-style-type: none;
}
.login .login form input[type='submit']{
    margin: 5px 0;    
    padding: 10px;
    background: darkcyan;
    border: none;
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    
}



/* 
.login-enter-from{
    opacity: 0;
    transform: translateX(-3000px);   
}
.login-enter-to{
    opacity: 1;
    transform: translateX(0); 
}
.login-enter-active{
    transition: all 2s ease;
}




.login-leave-from{
    opacity: 1;
    transform: translateX(0);   
}
.login-leave-to{
    opacity: 0;
    transform: translateX(3000px); 
}
.login-leave-active{
    transition: all 2s ease;
} */
</style>
