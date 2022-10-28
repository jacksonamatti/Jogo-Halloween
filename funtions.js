const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const nuvens = document.querySelector(".nuvens");
const gameBoard = document.querySelector(".game-board");

const jump = () => {
  mario.classList.add('jump')

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500);
}


const loop = setInterval(() => {

    console.log('loop')
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',"");


    if(pipePosition <= 100  && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;  

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.style.width = '200px';
        mario.style.marginLeft = '30px';
        nuvens.style.animation = 'none';
       


        const fimJogo = document.createElement('div');
        fimJogo.classList.add('gameOver');

        const txtGameOver = document.createElement('h1')
        txtGameOver.innerText = "GAME OVER !";
        txtGameOver.style.fontSize = "40px"

        fimJogo.appendChild(txtGameOver);
        gameBoard.appendChild(fimJogo);







        clearInterval(loop)
    }
}, 10);


const jogarNovamente = () => {
    location.reload()
}


document.addEventListener('click', jogarNovamente)










document.addEventListener('keydown', jump )