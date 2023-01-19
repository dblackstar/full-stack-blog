<template>
    
  <div class="contact">
      
      <div class="contact_center">
          <h1>Contact</h1>
          
          <div class="grid-contact">
              <div class="items-contact email">
                  <div class="itemsc">
                      <div class="icons">
                          <a target="_blank" href="mailto:contact@pague.dev"><i class="fa fa-envelope-o" aria-hidden="true" style="font-size:48px;"></i></a>
                      </div>
                      <div class="icon_title">
                          Send email
                      </div>
                  </div>
              </div>


              <div class="items-contact call">
                  <div class="itemsc">
                      <div class="icons">
                          <i class="fa fa-phone" aria-hidden="true" style="font-size:48px;"></i>
                      </div>
                      <div>  
                          <strong>+213 782 50 69 17</strong>
                      </div>
                      <div class="icon_title">
                          Call
                      </div>
                  </div>
              
              </div>
              <div class="items-contact contact" >
                  <div class="itemsc">
                      
                      <div class="icons">
                          <a target="_blank" href="https://www.linkedin.com/in/raouf-ilokou-31029724a/"><i class="fa fa-linkedin" aria-hidden="true" style="font-size:48px;"></i></a>
                      </div>
                      <div class="icon_title">
                          Professionnal
                      </div>
                  </div>
              </div>
              <div class="items-contact sm">
                  <div class="itemsc">
                      <div class="icons">
                          <a target="_blank" href="https://twitter.com/drealblackstar"><i class="fa fa-twitter" aria-hidden="true" style="font-size:48px;"></i></a>
                      </div>
                      <div class="icon_title">
                          Social media
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </div>
</template>



<script>
export default{
  components:{},

}    

</script>


<style>
.contact{
  display: flex;
  flex-direction: rows;
  justify-content: center;
}
.contact_center {
  text-align: center;
}


.contact_center h1{
  font-size: 180%;
  margin: 20px auto;
}


.grid-contact{
  display:grid;
  gap: 20px;
  grid-template-columns: 200px 200px;
  grid-template-rows: 200px 200px;
  grid-template-areas: 
      "email call"
      "contact social_media";
}



.grid-contact .items-contact{
  background: whitesmoke;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
}
.grid-contact .items-contact .itemsc{
  text-align: center;
}
.grid-contact .items-contact .itemsc .icons i{
  color: blue;
  margin: 4px;
}
.grid-contact .items-contact .itemsc .icons{
  margin: 8px;
}

.msgeBox{
  grid-area: msge_Box;
  width: 100%;
  height: 100%;
  background: darkcyan;
}
.grid-contact .email{
  grid-area: email;
}
.grid-contact .call{
  grid-area: call;

}
.grid-contact .contact{
  grid-area: contact;

}
.grid-contact .sm{
  grid-area: social_media;

}

@media only screen and (max-width: 515px) {

    .grid-contact{
        display:grid;
        gap: 20px;
        grid-template-columns: 200px ;
        grid-template-rows: 200px 200px 200px 200px ;
        grid-template-areas: 
            "email"
            "call"
            "contact "
            "social_media";
    }


}


</style>