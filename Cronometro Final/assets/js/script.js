const iniciar = document.querySelector(".start");
const parar = document.querySelector(".stop");
const resetar = document.querySelector(".reset");
const marcar = document.querySelector(".mark");
let selecao = document.getElementById("selectMarcas");
let hr = min = sec = ms = "0" + 0, startTimer;
let vetor = [];
let posicao = 0;
let posicaoLista = 1;

window.addEventListener('load', ()=>{
    parar.disabled = true;
    resetar.disabled = true;
    marcar.disabled = true;
});


iniciar.addEventListener("click", startBtn);

parar.addEventListener("click", stopBtn);

resetar.addEventListener("click", resetBtn);

marcar.addEventListener("click", markBtn);






function startBtn(){
    iniciar.classList.add("active");
    parar.classList.remove("stopActive");
    resetar.classList.remove("stopActive");
    marcar.classList.remove("stopActive");

    iniciar.disabled = true;
    parar.disabled = false;
    resetar.disabled = false;
    marcar.disabled = false;

    startTimer = setInterval(()=>{

        ms++;

        ms = ms < 10 ? "0" + ms : ms;

        if(ms == 100){
            sec++;
            ms = "0" + 0;
            sec = sec < 10 ? "0" + sec : sec;
        }
        if(sec == 60){
            min++;
            sec = "0" + 0; 
            min = min < 10 ? "0" + min : min;
        }
        if(min == 60){
            hr++;
            min = "0" + 0;
            hr = hr < 10 ? "0" + hr : hr;
        }

        putValue();

    }, 10); //1000ms = 1s
}



function stopBtn(){
    iniciar.classList.remove("active");
    parar.classList.add("stopActive");
    marcar.classList.add("stopActive");

    clearInterval(startTimer);
    iniciar.disabled = false;
    marcar.disabled = true;
}



function resetBtn(){
    iniciar.classList.remove("active");
    parar.classList.add("stopActive");
    resetar.classList.add("stopActive");
    marcar.classList.add("stopActive");

    clearInterval(startTimer);

    hr = min = sec = ms = "0" + 0;

    putValue();

    iniciar.disabled = false;
    marcar.disabled = true;

    selecao.innerText = "";
    vetor = [];
    posicao = 0;
    posicaoLista = 1;
}



function putValue(){
    document.querySelector(".milliseconds").innerText = ms;
    document.querySelector(".seconds").innerText = sec;
    document.querySelector(".minutes").innerText = min;
    document.querySelector(".hour").innerText = hr;
}

function markBtn(){

    let item = document.createElement('option');

    vetor.push({'Hora':hr, 'Minutos':min, 'Segundos':sec, 'Milisegundos':ms});

    item.text = `${posicaoLista}  :  ${vetor[posicao].Hora} : ${vetor[posicao].Minutos} : ${vetor[posicao].Segundos} : ${vetor[posicao].Milisegundos}`;

    selecao.appendChild(item);
    posicao++;
    posicaoLista++;
}
