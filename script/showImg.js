//função para colocar borda no botao selecionado para mudar a imagem do celular
var btn = document.querySelectorAll(`.btn`)
var outraIndex = 0
btn.forEach(function(value, index) {
    btn[index].addEventListener("click", ()=> {
        var outraBorda = document.querySelectorAll(`.btn`)[outraIndex]
        var atualBorda = document.querySelectorAll(`.btn`)[index]
        atualBorda.classList.add(`ativo`)
        outraBorda.classList.remove(`ativo`)
        outraIndex = index
    })
})


// Função para mudar a imagem
function mudarImg(botao, imagem) {
    var img = document.getElementById('img')  
    var botao = document.getElementById(botao)  
    img.src = imagem  
  
    
  
}
