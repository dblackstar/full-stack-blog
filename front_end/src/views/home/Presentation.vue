<template>
    <div class="presentationFeed">
        <div class="presentation">
            <img src="@/assets/images/hello.jpg" alt="" srcset="">
            <h3>Hi and welcome</h3>
            <p>I am paguedem, iam from Togo(A corner of west Africa). I have self taught myself  programming because i love tech in general. I spend most of my time learning to improve my skills ( Or work on <a href="https://github.com/rbs228" target="_blank" rel="noopener noreferrer">Some projects</a> ). I also write some code to solve problems or to improve existing Projects. <br>
            Don't hesitate to <router-link to="/contact">contact</router-link> me for a help or anything.
            </p>
            <div>
                <a>Github</a>
                <a>Twitter</a>
            </div>
        </div>
        <div class="skills">
            <h3>
                My skills
            </h3>
            <p>
                I like web and system programming, so i use MEVN stack (MongoDB, ExpressJS, VueJS, NodeJS) + Rust. <br>
                I also use some smalls lib (to make my life more difficult) such as : <br>
                &rarr; Axios <br>
                &rarr; GraphQL <br>
                &rarr; Tailwind <br>
                I sometime do coding challenge on <a>LeetCode</a> and contribute on open source <br>
                
            </p>
        </div>
    </div>
</template>

<script>
export default {
  components: {

  },
  data(){
      return {
          price:null,
          isFrixed:null
      }
  },

  created(){
    
  },
  mounted(){
    
  }
}
</script>


<style >
.presentationFeed{
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); */
    grid-auto-rows: auto;
    grid-gap: 2em;
    grid-template-areas:  
        "presentation skills"
    ;
}

/* PRESENTATION */
.presentationFeed .presentation{
    grid-area: presentation;
}
.presentationFeed .presentation img{
    max-width: 250px;
    min-width: 200px;
    width: 100%;

}
.presentationFeed h3{
    padding: 20px 0;
    /* font-size: 2em; */
}



/* SKILLS */
.presentationFeed .skills{
    grid-area: skills;
}

@media only screen and (max-width: 800px) {
  
    .presentationFeed{
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        grid-gap: 2em;
        grid-template-areas:  
            "presentation"
            "skills"
        ;
    }

    /* PRESENTATION */
    .presentationFeed .presentation{
        grid-area: presentation;
    }
    .presentationFeed .presentation img{
        max-width: 250px;
        min-width: 200px;
        width: 100%;

    }
    .presentationFeed h3{
        padding: 20px 0;
        /* font-size: 2em; */
    }



    /* SKILLS */
    .presentationFeed .skills{
        grid-area: skills;
    }  
}



@media only screen and (max-width: 430px) {
  
  
}
</style>