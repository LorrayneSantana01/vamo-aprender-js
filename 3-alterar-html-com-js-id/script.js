// Alterar HTML com JS - Class

document.addEventListener('DOMContentLoaded', function() {
    const paragrafo = document.getElementsByClassName("paragrafo")
    paragrafo[2].textContent = "Esse é um parágrafo alterado por JS"
})