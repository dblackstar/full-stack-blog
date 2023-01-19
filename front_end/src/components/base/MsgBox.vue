<template>
    <div class="msg_Box" @click.self="closeModal" >
            <div class="modal">
                <div class="send_mail" v-if="contactChoise === 'sendMail'" >
                    <h2>Please contact me at the address below</h2>
                    
                </div>

                <div class="make_call" v-if="contactChoise === 'makeCall'" >Make a call</div>
                <div class="send_message" v-if="contactChoise === 'sendMessage'" >Send a message</div>
                <div class="social_media" v-if="contactChoise === 'socialMedia'" >Social media</div>
            </div>
    </div>
</template>



<script>
import getPosts from '@/composables/getPosts'
export default{
    props:['contactChoise'],
    components:{},
    data(){
        
    },
    methods:{
        msg_Box(){
            
        },
        closeModal(){
            this.$emit('close');
        }
    }
}
</script>


<style>


/* ************** LAST POST********** */
.msg_Box{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.5);
}

.modal{
    background: lightgray;
    width: 600px;
    max-width: 100%;
    min-width: 200px;
    min-height: 400px;
    color: #444;
    margin: 8% auto;
}


</style>