let time = 0;
const btnPadrao = document.getElementById('btn-padrao');
const btnStart = document.getElementById('btn-start');
const btnNovoTimer = document.getElementById('btn-novo-timer')
let contagem = document.getElementById('time-contagem')


btnPadrao.addEventListener('click', () => {
    time = 30
    comecar(time)
})
btnStart.addEventListener('click', () => {
    
})

btnNovoTimer.addEventListener((click), () => {
    window.location('novo.html')
})

function comecar (time) {
    contagem.innerText = time
}



//setInterval(() => console.log(time), 2000)