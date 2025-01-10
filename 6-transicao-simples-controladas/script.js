// Animações com JS

// Transições Simples

let position = 0 // define posição na tela 0

const box = document.getElementById("box") // puxa o elemento pelo ID

function moveBox() { // abre função
    if(position < 1200) { // se a posição na tela for menor que 1200
        position += 10 // vai "pular" de x em x

        box.style.left = position + "px" // define a unidade de medida
        requestAnimationFrame(moveBox) // animação da função
    }
}

moveBox() // chama a função

// Transições Controladas

const button = document.getElementById("button") // puxa o elemento pelo ID

button.addEventListener('click', // adiciona o evento de clicar
    function() { // abre a função
        button.classList.toggle('active') // chama a propriedade "active" do css
    }
)