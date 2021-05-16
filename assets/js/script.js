const span = document.querySelector('span')
const efeito = document.querySelector('#efeito')
var original = document.querySelector("#original")
var textoModificado = document.querySelector('#modificado')



efeito.addEventListener("change", function () {
    eventoKeyup()
})

original.addEventListener('keyup', function () {
    span.innerText = original.value.length
    eventoKeyup()
})

function eventoKeyup() {
    if (efeito.value == "lowercase") {
        textoModificado.textContent = original.value.toLowerCase()
    } else {
        textoModificado.textContent = original.value.toUpperCase()
    }
}