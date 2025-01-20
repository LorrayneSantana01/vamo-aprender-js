window.addEventListener('DOMContentLoaded', function() {

    const body = document.querySelector("body")
    const game = document.querySelector(".game")
    
    const count = document.querySelector("h1")
    const reset = document.querySelector("reset")
    
    const ash = document.querySelector("#ash")
    
    const zubat = document.querySelector("#zubat")
    const pikachu = document.querySelector("#pikachu")
    const charmander = document.querySelector("#charmander")
    
    body.addEventListener('keydown', (event) => {
        event.stopPropagation()
    
        console.log(event.code)
    })
})