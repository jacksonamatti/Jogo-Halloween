const personagem = document.querySelector(".personagem");
const pipe = document.querySelector(".pipe");
const morcegos = document.querySelector(".morcegos");
const gameBoard = document.querySelector(".game-board");

const jump = () => {
  personagem.classList.add('jump')

  setTimeout(() => {
    personagem.classList.remove('jump')
  }, 500);
}


const loop = setInterval(() => {

    console.log('loop')
    const pipePosition = pipe.offsetLeft;
    const morcegoPosition = +window.getComputedStyle(personagem).bottom.replace('px',"");


    if(pipePosition <= 100  && pipePosition > 0 && morcegoPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;  

        personagem.style.animation = 'none';
        personagem.style.bottom = `${morcegoPosition}px`;

        personagem.style.width = '200px';
        personagem.style.marginLeft = '30px';
        morcegos.style.animation = 'none';
       


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