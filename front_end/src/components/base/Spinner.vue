<template>
    <div class="spinn">
        <div class="spin"></div>
    </div>
</template>



<script>


</script>




<style>
.spinn{
    height: 100vh;
}
.spin{
    display: block;
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border: 3px solid transparent;
    border-radius: 50%;
    border-top-color: lightslategray;
    animation: spin 1s ease-in infinite;

} 

@keyframes spin{
    to {transform: rotateZ(360deg);}
}
</style>