function iniciarTela() {
  document.body.innerHTML = `
  <div class="logo">
    <img alt="Minecraft Logo" src="imagens/mine-logo.png">
  </div>
  
  <main>
    <section class="menu">
      <div class="opc">Jogar</div>
      <div class="opc">Opcões</div>
      <div class="opc">Marketplace</div>
    </section>
    
    <div class="potion opc">
      <img src="imagens/potion-icon.png">
    </div>
    
    <section class="player">
      <p class="nome">DaviGay</p>
      <div class="skin"></div>
      <div class="vest opc">Vestiário</div>
    </section>
  </main>
  `
  
  document.querySelectorAll(".opc").forEach(opc => {
  opc.addEventListener("click", () => {
    alert("Davi é gay KKKKKKKKK")
  })
})
}