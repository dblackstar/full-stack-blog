<template>
    <div class="presentation">
        <div class="details">
            <img src="@/assets/images/hello.jpg" alt="">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae accusamus laborum. Aperiam necessitatibus ut assumenda cum, rem sit hic quidem, ab repellat sapiente tenetur sunt in provident exercitationem pariatur?</p>
        </div>
        <div class="resosociaux">
            <a target="_blank" href="https://www.linkedin.com/in/raouf-ilokou-31029724a/"><i class="fa fa-linkedin" aria-hidden="true" style="font-size:48px;"></i></a>
            <a target="_blank" href="https://twitter.com/paguedem"><i class="fa fa-twitter" aria-hidden="true" style="font-size:48px;"></i></a>
        </div>
    </div>
</template>
  

<script>    
    export default{
        components:{

        },
    
        data(){
            return {
                posts :{},
            }
        },
    
        created(){
            
        },
    
        methods:{
            
        }
    }
    </script>
<style>


.presentation .details img{
    width: 300px;
    max-width: 100%;
    min-width: 100px;
}
</style>
  