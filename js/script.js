console.log('JS OK')

// ANALISI

// 1 - RECUPERO GLI EVENTUALI ELEMENTI DAL DOM
// 2 - AL CLICK SUL TASTO "RANDOM" GENERO DUE NUMERI CASUALI (PLAYER,PC) TRA 1 e 6
// 3 - VALIDO L'OPERAZIONE PER STABILIRE UN VINCITORE
// 4 - STAMPO IN PAGINA GLI ELEMENTI


// 1 - RECUPERO GLI EVENTUALI ELEMENTI DAL DOM

// NUMERI RANDOMIZZATI
const playerNrandom = document.getElementById('player-random-number');
const cpuNrandom = document.getElementById('cpu-random-number');

// VINCITORE
const winner = document.getElementById('winner-name');

// BUTTON
const randomButton = document.getElementById('random-button');


// 2 - AL CLICK SUL TASTO "RANDOM" GENERO DUE NUMERI CASUALI (PLAYER,PC) TRA 1 e 6

randomButton.addEventListener('click', function () {
    const randomPlayer = Math.floor(Math.random() * 6) + 1;
    const randomCPU = Math.floor(Math.random() * 6) + 1;

    let winnerName = ''
    // VALIDO L'OPERAZIONE PER STABILIRE UN VINCITORE
    if (randomPlayer === randomCPU) {
        winnerName = "Draw 🤡";
    } else {
        if (randomPlayer > randomCPU) {
            winnerName = "Player";
        }
        else {
            winnerName = "CPU"
        }
    }

    // STAMPO IN PAGINA GLI ELEMENTI

    playerNrandom.innerHTML = randomPlayer;
    cpuNrandom.innerHTML = randomCPU;
    winner.innerHTML = winnerName;

})