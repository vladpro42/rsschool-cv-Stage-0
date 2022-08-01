
'use strict'
// Bремя часы: минуты: секунды.
const time = document.querySelector('.time');
showTime();

// День недели число месяц
const timeDate = document.querySelector('.date');
showDate();

// Текст приветствия 
const hiText = document.querySelector('.hello__text');
let timeOfDay = getTimeOfDay();
showGreeting();

// Введенное имя
const userName = document.querySelector('.name');
//перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить

window.addEventListener('beforeunload', () => {
    localStorage.setItem('name', userName.value)
});

// перед загрузкой страницы (событие load) данные нужно восстановить и отобразить

window.addEventListener('load', () => {
    if(localStorage.getItem('name')) {
        userName.value = localStorage.getItem('name');
    }
});

// Время часы: минуты: секунды.
function showTime() {
    const date = new Date(); // переменная с датой
    const currentTime = date.toLocaleTimeString(); // Метод на время часы: минуты: секунды.
    time.innerHTML = currentTime; // замена содержимого на время
    setTimeout(showTime, 1000); // запуск самой себя с задержкой в 1с 
    return time // верни время
  }

function showDate() {
    const date = new Date();
    const localesArr = ['ru-RU', 'en-US', 'en-Br']
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    };
    const currentDate = date.toLocaleDateString(localesArr, options);
    timeDate.innerHTML = currentDate;
    setTimeout(showDate, 1000);
    return timeDate;
}

function getTimeOfDay() {
    const date = new Date();
    const hour = date.getHours();
    return hour;
}

function showGreeting() {
    setTimeout(showGreeting, 60000);

    let greetings;
    if( timeOfDay >= 6 && timeOfDay < 12) {
        greetings = 'Доброе утро';
    } else if ( timeOfDay >= 12 && timeOfDay < 18){
        greetings = 'Добрый день';
    } else if( timeOfDay >= 18 && timeOfDay < 24) {
        greetings = 'Добрый вечер';
    } else if(timeOfDay >= 0 && timeOfDay < 6){
        greetings = 'Спокойной ночи';
    }

    return hiText.textContent = `${greetings}`
}











// Фоновое изображение 

const body = document.body;

let randomNum = getRandomNum(1, 20);
let stateOfTheDayValue = stateOfTheDay();

let linkBodyBackgroundImage = setBg(stateOfTheDayValue, randomNum);
//body.style.backgroundImage = "url(" + `${linkBodyBackgroundImage}`+")";
//setBg(stateOfTheDayValue, randomNum)


const btnSlidePrev = document.querySelector('.slide__prev');
const btnSlideNext = document.querySelector('.slide__next');

btnSlidePrev.addEventListener('click', getSlidePrev) 
btnSlideNext.addEventListener('click', getSlideNext)
   


function getSlidePrev() {
    randomNum--;
    if(randomNum === 0){
        randomNum = 20;
    }

    setBg(stateOfTheDayValue, randomNum)
}

function getSlideNext() {
    randomNum++;
    if(randomNum === 21){
        randomNum = 1;
    }

    setBg(stateOfTheDayValue, randomNum)
}

function setBg(stateOfTheDayValue,bgNum) { 
    if(`${bgNum}`.length < 2) {
        bgNum = `${bgNum}`.padStart(2, '0');
    }
    let link = "url(" +'https://github.com/vladpro42/Momentum-images/blob/assets/images/' + `${stateOfTheDayValue}` + `/${bgNum}` + '.jpg?raw=true' +")";

    const img = new Image();
    img.src = 'https://github.com/vladpro42/Momentum-images/blob/assets/images/' + `${stateOfTheDayValue}` + `/${bgNum}` + '.jpg?raw=true';
    img.addEventListener('load', () => {
        body.style.backgroundImage = link
    });
    
    return link
}

function stateOfTheDay() {
    const date = new Date();
    const hour = date.getHours();
    let stateOfTheDayValue;
    if( timeOfDay >= 6 && timeOfDay < 12) {
        stateOfTheDayValue = 'morning';
    } else if ( timeOfDay >= 12 && timeOfDay < 18){
        stateOfTheDayValue = 'afternoon';
    } else if( timeOfDay >= 18 && timeOfDay < 24) {
        stateOfTheDayValue = 'evening';
    } else if(timeOfDay >= 0 && timeOfDay < 6){
        stateOfTheDayValue = 'night';
    }

    return stateOfTheDayValue;
}

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}




  
 

