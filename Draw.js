const squares = [...document.querySelectorAll('.square')];
const button = document.getElementById('start');
const reset = document.getElementById('reset');
const points = document.querySelector('.points');
const life = document.querySelector('.life')


const color = 'green';
let chooseSquare = '';
let green = '';
let drawSquaresId = '';
let deleteColorId = '';
let isActive = false;
let result = 0;
let lifePoints = 3;


const deleteColor = () => {
    chooseSquare.style.backgroundColor = "";
    if(lifePoints > 0 && isActive){
    lifePoints--;
    life.innerHTML = `Life: ${lifePoints}`;
    life.style.color = 'red';
    setTimeout(() => {
        life.style.color = 'black'; 
    }, 1000);}
    else if(lifePoints <= 0){ 
        alert('Koniec gry! Straciłeś wszystkie życia');
        resetTimer();
        resetEvent();
        chooseSquare.style.backgroundColor = "";
    }

}

const draw = () => {
    if(chooseSquare){
    chooseSquare.removeEventListener('click', countPoints);
    }
    chooseSquare = squares[Math.floor(Math.random() * squares.length)];
    chooseSquare.style.backgroundColor = color;
    deleteColorId = setTimeout(deleteColor, 2000);
    getPoint();
}

const resetEvent = () => {
    chooseSquare.style.backgroundColor = '';
    if(isActive){
        isActive = false;
        lifePoints = 3;
        result = 0;
        points.innerHTML = "Points: 0";
        life.innerHTML = "Life: 3";
        clearInterval(drawSquaresId);
        clearTimeout(deleteColorId);
        chooseSquare.removeEventListener('click', countPoints);
    }
} 

const paintSquares = () => {
if(!isActive){
    draw();
    drawSquaresId = setInterval(draw,3000);
    isActive = true;
    }
}

const countPoints = (e) => {
        e.target.style.backgroundColor = ''; 
        clearTimeout(deleteColorId);
        result++;
        points.innerHTML = `Points: ${result}`;
        return;
}

const getPoint = () => {
    chooseSquare.addEventListener('click', countPoints,  { once: true })
    }


button.addEventListener('click', paintSquares);

reset.addEventListener('click', resetEvent);



