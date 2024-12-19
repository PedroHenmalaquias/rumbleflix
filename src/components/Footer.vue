<script setup>
</script>

<template>
   <footer>
      <div class="container-footer">
         <div class="container-footer-itens">
            <div class="footer-itens">
               <div class="itens">
                  <h2>Empresa</h2>
                  <p>Sobre nós</p>
                  <p>Careers</p>
               </div>
            </div>
            <div class="footer-itens">
               <div class="itens">
                  <h2>Precisa de ajuda?</h2>
                  <p>Peça ajuda aqui</p>
                  <p>De um feedback</p>
               </div>
            </div>
            <div class="footer-itens">
               <div class="itens">
                  <h2>Redes Sociais</h2>
                  <div class="container-button">
                     <button> <img src="/public/icon-instagram.svg" alt=""></button>
                     <button> <img src="/public/icon-twitter.svg" alt=""></button>
                  </div>
               </div>
            </div>
            <div class="footer-itens">
               <div class="itens">
                  <h2>Instale nosso APP</h2>
                  <div class="container-button">
                     <button> <img class="imagem" src="/public/playstore.png" alt=""></button>
                     <button> <img class="imagem" src="/public/appstore.png" alt=""></button>
                  </div>
               </div>
            </div>
         </div>
         <div class="container-credits">
            <div class="itens-credits">
               <p>© 2024 RUMBLE FLIX. Todos os direitos reservados.</p>
               <p>Termos de uso</p>
               <p>Politica de privacidade</p>
               <p>FAQ</p>
            </div>
            <div class="container-title">
               <h1>RUMBLE</h1>
               <img class="logo" src="../../public/rumble-logo.png" />
            </div>
         </div>
      </div>
   </footer>
</template>
<style scoped>
footer {
   width: 100%;
   background-color: white;
}

.container-footer {
   width: 100%;
   display: grid;
   grid-template-rows: 3fr 1fr;
}

.container-footer-itens {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   
}

.footer-itens {
   height: 12rem;
   background-color: #111111;
   display: flex;
   justify-content: center;
}

.container-credits {
   border-top: 1px solid #6b6b6b75;
   background-color: #111111;
   height: 4rem;
   display: grid;
   align-items: center;
   grid-template-columns: 4fr 1fr;
}

.itens {
   margin-top: 2rem;
}

p {
   margin-top: 0.5rem;
   color: #8a8888;
}

button {
   margin-top: 1rem;
   height: 3rem;
   width: 3rem;
   border-radius: 50%;
   border: 2px solid #8a8888;
   background-color: #555555;
}

.container-button {
   display: flex;
   justify-content: space-evenly;
}

.imagem {
   width: 2.5rem;
   border-radius: 50%;
}

.container-title {
   display: flex;
   flex-direction: row-reverse;
   margin: 0em 2em 0em 0em;
}
.logo {
  width: 3rem;
  height: 3rem;
}
.itens-credits {
   display: grid;
   grid-template-columns: 4fr 2fr 2fr 2fr;
   justify-items: center;
}
</style>