<template>
  <div class="grid">
    <div class="grid-items header">
      <Nav />
    </div>

    <div class="grid-items main">
      <transition name="main">
          <router-view></router-view>
      </transition>
    </div>

    <div  class="grid-items footer">
        <Footer />
    </div>
  </div>
</template>


<script>

import Home from './views/home/Home.vue'
import Nav from '@/components/common/Nav.vue'
import Footer from './components/common/Footer.vue'
export default{
  components:{
    Home,
    Nav,
    Footer,
  },
  data(){
      return {
        
      }
  },

  created(){
  
  },
  mounted(){
    
  },
  methods:{
      listPosts(){

      },
  }


}


</script>


<style>
#app {
  font-family: Quicksand, "PT Sans", Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  word-spacing: 1px;
  text-align: justify;
  text-justify: inter-word;
}
h1, h2, h3, h4, ul, li, a, p, input, label, button, div, footer{
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  color: #444;
}
body{
  font-size: 18px;
  line-height: 1.5;
  background: #fafafa;

}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
    text-decoration: none;
    font-family: sans-serif;
}
.grid{
  width: 80%;
  margin: 0 auto;
  display: grid;
  gap: 2em;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas: 
    "header header header"
    "main main main"
    "footer footer footer";

}


.grid-items{

}

.grid .header{
  grid-area: header;
  width: 80%;
  margin: 0 auto;
  top: 0;
  right: 0;
  left: 0;
  position:fixed;
  overflow-y:scroll;
  overflow-x:hidden;
}

.grid .main{
  grid-area: main;
  margin-top: 13vh;
}


.grid .footer{
  grid-area: footer;
}






/* ********* TRANSITION ******** */
.main-enter-from{
  opacity: 0;
  transform: translateY(-100px);
}
.main-enter-to{
  opacity: 1;
  transform: translateY(0);
}
.main-enter-active{
  transition: all 1s ease;
}

</style>
