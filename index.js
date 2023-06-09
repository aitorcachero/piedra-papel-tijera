const comenzar = document.querySelector('#btn-comenzar');
const piedra = document.querySelector('#btn-piedra');
const papel = document.querySelector('#btn-papel');
const tijera = document.querySelector('#btn-tijera');
const scorePlayer = document.querySelector('#score-player');
const scoreCpu = document.querySelector('#score-cpu');
const texto = document.querySelector('#texto-resultado');
const terminar = document.querySelector('#terminar');
const score = document.querySelector('#table-score');
const nombre = document.querySelector('#nombre-jugador');
const imgPlayer = document.querySelector('#imgplayer');
const imgCpu = document.querySelector('#imgcpu');
const imagenes = document.querySelector('#imagenes');
// const div = document.querySelector('#btn-jugador');

let JUGADOR = 0;
let CPU = 0;

const array = ['Piedra', 'Papel', 'Tijera'];

comenzar.addEventListener('click', () => {
  piedra.style.cursor = 'pointer';
  papel.style.cursor = 'pointer';
  tijera.style.cursor = 'pointer';
  // div.style.margin = '-10rem';
  comenzar.disabled = true;
  piedra.disabled = false;
  papel.disabled = false;
  tijera.disabled = false;
  comenzar.style.cursor = 'auto';
  terminar.style.cursor = 'pointer';
  piedra.style.opacity = 1;
  papel.style.opacity = 1;
  tijera.style.opacity = 1;
  comenzar.style.opacity = 0;
  terminar.style.opacity = 1;
  scorePlayer.innerHTML = `${JUGADOR}`;
  scoreCpu.innerHTML = `${CPU}`;
  scorePlayer.style.opacity = 1;
  scoreCpu.style.opacity = 1;
  score.style.opacity = 1;
  imagenes.style.opacity = 1;
  // comenzar.parentNode.removeChild(comenzar);
  preguntarNombre();
});

piedra.addEventListener('click', () => {
  imgPlayer.src = './img/piedra.png';
  imgPlayer.width = 50;
  imgPlayer.height = 50;
  const num = Number(Math.round(Math.random() * 2));
  switch (true) {
    case num === 0:
      imgCpu.src = './img/piedra.png';
      imgCpu.width = 50;
      imgCpu.height = 50;
      texto.style.color = 'white';
      texto.innerHTML = `La maquina ha elegido ${array[num]}. Empate`;
      scorePlayer.innerHTML = `${JUGADOR}`;
      scoreCpu.innerHTML = `${CPU}`;
      break;
    case num === 1:
      imgCpu.src = './img/papel.png';
      imgCpu.width = 50;
      imgCpu.height = 50;
      texto.style.color = 'red';
      texto.innerHTML = `La maquina ha elegido ${array[num]}. La maquina gana`;
      CPU++;
      scorePlayer.innerHTML = `${JUGADOR}`;
      scoreCpu.innerHTML = `${CPU}`;
      break;
    case num === 2:
      imgCpu.src = './img/tijera.png';
      imgCpu.width = 50;
      imgCpu.height = 50;
      texto.style.color = '#7fff00';
      texto.innerHTML = `La maquina ha elegido ${array[num]}. Tu ganas`;
      JUGADOR++;
      scorePlayer.innerHTML = `${JUGADOR}`;
      scoreCpu.innerHTML = `${CPU}`;

      break;

    default:
      break;
  }
  if (JUGADOR === 3) {
    scorePlayer.innerHTML = `${JUGADOR}`;
    scoreCpu.innerHTML = `${CPU}`;
    alert(`¡Has ganado la partida con un resultado de: ${JUGADOR} - ${CPU}`);
    terminar.click();
  }

  if (CPU === 3) {
    scorePlayer.innerHTML = `${JUGADOR}`;
    scoreCpu.innerHTML = `${CPU}`;
    alert(`¡La maquina ha ganado con un resultado de ${CPU} - ${JUGADOR}!`);
    terminar.click();
  }
});

papel.addEventListener('click', () => {
  imgPlayer.src = './img/papel.png';
  imgPlayer.width = 50;
  imgPlayer.height = 50;
  const num = Number(Math.round(Math.random() * 2));
  switch (true) {
    case num === 0:
      imgCpu.src = './img/piedra.png';
      imgCpu.width = 50;
      imgCpu.height = 50;
      texto.style.color = '#7fff00';
      texto.innerHTML = `La maquina ha elegido ${array[num]}. Tu ganas`;
      JUGADOR++;
      scorePlayer.innerHTML = `${JUGADOR}`;
      scoreCpu.innerHTML = `${CPU}`;

      break;
    case num === 1:
      imgCpu.src = './img/papel.png';
      imgCpu.width = 50;
      imgCpu.height = 50;
      texto.style.color = 'white';
      texto.innerHTML = `La maquina ha elegido ${array[num]}. Empate`;
      scorePlayer.innerHTML = `${JUGADOR}`;
      scoreCpu.innerHTML = `${CPU}`;

      break;
    case num === 2:
      imgCpu.src = './img/tijera.png';
      imgCpu.width = 50;
      imgCpu.height = 50;
      texto.style.color = 'red';
      texto.innerHTML = `La maquina ha elegido ${array[num]}. La maquina gana`;
      CPU++;
      scorePlayer.innerHTML = `${JUGADOR}`;
      scoreCpu.innerHTML = `${CPU}`;

      break;

    default:
      break;
  }
  if (JUGADOR === 3) {
    scorePlayer.innerHTML = `${JUGADOR}`;
    scoreCpu.innerHTML = `${CPU}`;
    alert(`¡Has ganado la partida con un resultado de: ${JUGADOR} - ${CPU}`);
    terminar.click();
  }

  if (CPU === 3) {
    scorePlayer.innerHTML = `${JUGADOR}`;
    scoreCpu.innerHTML = `${CPU}`;
    alert(`¡La maquina ha ganado con un resultado de ${CPU} - ${JUGADOR}!`);
    terminar.click();
  }
});

tijera.addEventListener('click', () => {
  imgPlayer.src = './img/tijera.png';
  imgPlayer.width = 50;
  imgPlayer.height = 50;
  const num = Number(Math.round(Math.random() * 2));
  switch (true) {
    case num === 0:
      imgCpu.src = './img/piedra.png';
      imgCpu.width = 50;
      imgCpu.height = 50;
      texto.style.color = 'red';
      texto.innerHTML = `La maquina ha elegido ${array[num]}. La maquina gana`;
      CPU++;
      scorePlayer.innerHTML = `${JUGADOR}`;
      scoreCpu.innerHTML = `${CPU}`;
      break;
    case num === 1:
      imgCpu.src = './img/papel.png';
      imgCpu.width = 50;
      imgCpu.height = 50;
      texto.style.color = '#7fff00';
      texto.innerHTML = `La maquina ha elegido ${array[num]}. Tu ganas`;
      JUGADOR++;
      scorePlayer.innerHTML = `${JUGADOR}`;
      scoreCpu.innerHTML = `${CPU}`;
      break;
    case num === 2:
      imgCpu.src = './img/tijera.png';
      imgCpu.width = 50;
      imgCpu.height = 50;
      texto.style.color = 'white';
      texto.innerHTML = `La maquina ha elegido ${array[num]}. Empate`;
      scorePlayer.innerHTML = `${JUGADOR}`;
      scoreCpu.innerHTML = `${CPU}`;

      break;

    default:
      break;
  }
  if (JUGADOR === 3) {
    scorePlayer.innerHTML = `${JUGADOR}`;
    scoreCpu.innerHTML = `${CPU}`;
    alert(`¡Has ganado la partida con un resultado de: ${JUGADOR} - ${CPU}`);
    terminar.click();
  }

  if (CPU === 3) {
    scorePlayer.innerHTML = `${JUGADOR}`;
    scoreCpu.innerHTML = `${CPU}`;
    alert(`¡La maquina ha ganado con un resultado de ${CPU} - ${JUGADOR}!`);
    terminar.click();
  }
});

terminar.addEventListener('click', () => {
  piedra.style.cursor = 'auto';
  papel.style.cursor = 'auto';
  tijera.style.cursor = 'auto';
  comenzar.disabled = false;
  comenzar.style.cursor = 'pointer';
  terminar.style.cursor = 'auto';
  piedra.disabled = 'enabled';
  papel.disabled = 'enabled';
  tijera.disabled = 'enabled';
  piedra.style.opacity = 0;
  papel.style.opacity = 0;
  tijera.style.opacity = 0;
  comenzar.style.opacity = 1;
  terminar.style.opacity = 0;
  scorePlayer.innerHTML = ``;
  scoreCpu.innerHTML = ``;
  scorePlayer.style.opacity = 0;
  scoreCpu.style.opacity = 0;
  texto.innerHTML = '';
  score.style.opacity = 0;
  imagenes.style.opacity = 0;
  imgPlayer.width = 0;
  imgPlayer.height = 0;
  imgCpu.width = 0;
  imgCpu.height = 0;
  nombre.innerHTML = null;
  JUGADOR = 0;
  CPU = 0;
});

const preguntarNombre = () => {
  const name = prompt('¿Cual es tu nombre?');
  if (name == null) {
    terminar.click();
  } else if (name == undefined) {
    name = prompt('¿Cual es tu nombre?');
  } else {
    nombre.innerHTML = name;
  }
};
