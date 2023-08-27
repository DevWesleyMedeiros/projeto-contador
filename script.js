let contador = 0

const value = document.getElementById('value');
const botaoDiminuir = document.getElementById('btn-decrease');
const botaoReset = document.getElementById('btn-reset');
const botaoAumentar = document.getElementById('btn-increase');

botaoAumentar.addEventListener('click', ()=>{
    contador++
    value.textContent = contador
    if(contador > 0) {
        value.style.color = 'blue'
    }
})

botaoDiminuir.addEventListener('click', ()=>{
    contador--
    value.textContent = contador
    if(contador < 0) {
        value.style.color = 'red'
    }
})

botaoReset.addEventListener('click', ()=>{
    contador = 0
    value.textContent = contador
    value.style.color = 'black'
})




