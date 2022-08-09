const time = document.querySelector('.time');
const buttonStart = document.getElementById('start');
const buttonReset = document.getElementById('reset');

let activeBtn = false;

const  counter = () =>{
        let timer = 60;
        return() => {
                if(timer >= 0) {
                        time.textContent = (`${timer--} sek`);
                }
                else  {
                activeBtn = false;
                clearInterval(startId);
                resetEvent();
                alert('koniec gry!');
                resetTimer();
                }
        }
}

const resetTimer = () => {
        clearInterval(startId);
        activeBtn = false;
        time.textContent = "Time: 60 sek";
}

const startTimer = () => {
if(!activeBtn){
        startId = setInterval(counter(), 1000);
        activeBtn = true;
        };
}

buttonStart.addEventListener('click', startTimer);

buttonReset.addEventListener('click', resetTimer);
