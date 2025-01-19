window.addEventListener('DOMContentLoaded',() => {

    const meuLorem = document.getElementById("lorem")

    const button = document.getElementById("botao")
    
    button.addEventListener('click',
        function() {
            meuLorem.innerHTML = "<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, alias.</b"
        }
    )
})