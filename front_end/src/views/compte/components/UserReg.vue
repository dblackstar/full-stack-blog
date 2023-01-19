<template>
    <transition name="register" >
        <div class="register">
            <h2>Inscription</h2>

            <div class="gg_fcb">
                <ul>
                    <li><a href="#">Avec mon compte Google</a></li>
                    <li><a href="#">Avec mon compte Facebook</a></li>
                </ul>
            </div>

            <div class="reg">
                <p>Ces informations servirons à établir votre fichier PDF. Veuillez fournir les informations réelles</p>
                <form >
                    <input  type="text" placeholder="Votre nom">
                    <input   type="text" placeholder="Votre prenoms">
                    <input   type="email" placeholder="Email">
                    <input   type="password" placeholder="Mot de passe">
                    <input   type="password" placeholder="Confirmez le mot de passe">
                    <div class="cond">
                        <input   type="checkbox" >
                        <a href="#">Termes et conditions</a>
                    </div>
                    <input type="submit" value="Inscription">
                </form>
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

/* REGISTERING */
.register{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: darkslategray; 
}

.register form{
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: darkcyan;
    padding: 10px 0;
}

.register a{
   
}
.register .reg{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.register  form input{
    margin: 5px 0;    
    padding: 10px;
}
.register .gg_fcb ul{
    margin: 0;
    padding: 0;
    
}

.register  .gg_fcb ul li{
    list-style-type: none;
}


.register form input[type='submit']{
    margin: 5px 0;    
    padding: 10px;
    background: darkcyan;
    border: none;
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    
}


</style>
