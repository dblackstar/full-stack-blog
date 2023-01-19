<template>
    <div class="homeGrid">
        <Presentation />
        <LastPosts />
    </div>
</template>

<script>

import Presentation from './Presentation.vue';
import LastPosts from '../blog/components/LastPosts.vue';
export default {
  name: 'Home',
  components: {
    Presentation,
    LastPosts,
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
.homeGrid{

}



</style>