const button = document.getElementById("botao")
const minhaImagem = document.getElementById("minha-imagem")

button.addEventListener('click',
    function() {
        minhaImagem.src = "img/calo2.jpg"
        setTimeout(() => minhaImagem.src = "img/calo1.jpg", 2000) 
    }
)