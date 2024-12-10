<script setup>
</script>

<template>
   <footer>
      <div class="container-footer">
         <div class="container-nav">
            <div class="teste"></div>
            <div class="teste"></div>
            <div class="teste"></div>
            <div class="teste"></div>
         </div>
         <div class="container-credits">
            <div></div>
            <div></div>
         </div>
      </div>
   </footer>
</template>
<style scoped>

   footer {
      width: 100%;
      height: 16rem;
      background-color: white;
      position: absolute;
      bottom: 0;
   }
   .container-footer {
      width: 100%;
      display: grid;
      grid-template-rows: 3fr 1fr;
   }
   .container-nav {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr;
   }
   .teste {
      height: 3rem;
      background-color: black;
   }
</style>