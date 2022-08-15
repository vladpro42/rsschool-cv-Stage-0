
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


// Погода 

//let city = 'Minsk';
let langWeather = 'en';
/* let weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${langWeather}&appid=9d1e97713e971f63ff903c8ed34916b9&units=metric` */
//console.log(weatherLink)

const weatherIcon = document.querySelector('.weather__icon');
let weatherTemperature = document.querySelector('.weather__temperature');
const weatherDescr = document.querySelector('.weather__descr');
let weatherCityInput = document.querySelector('.weather__city-input');
const weatherHumidity = document.querySelector('.weather__humidity');
const weatherWindSpeed = document.querySelector('.weather__wind-speed');



getWeather(weatherCityInput.value);

window.addEventListener('beforeunload', () => {
    localStorage.setItem('cityWeather', weatherCityInput.value);

});

window.addEventListener('load', () => {
    if(localStorage.getItem('cityWeather')) {
        weatherCityInput.value = localStorage.getItem('cityWeather');

    }
});


weatherCityInput.addEventListener('change', () => {
    getWeather(weatherCityInput.value);
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${langWeather}&appid=9d1e97713e971f63ff903c8ed34916b9&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    
    weatherIcon.className = 'weather-icon owf owf-4x';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    weatherTemperature.textContent = `${Math.round(data.main.temp)}` + ` °C`;
    weatherDescr.textContent = (data.weather[0].description);
    weatherHumidity.textContent = 'Humidity: ' + Math.round(data.main.humidity) +' %';
    weatherWindSpeed.textContent = 'Wind speed: ' + Math.round(data.wind.speed) + ' m/s';    
}




 // Цитаты 
let quot__text = document.querySelector('.quot__text');

/* 
  async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
    quot__text.textContent = data
  } */
  //getQuotes(); 

  /* function getQuotes() {
    const quotes = 'data.json';
    fetch(quotes)
      .then(res => res.json())
      .then(data => { 
        console.log(data);
      });
  }
  getQuotes();

 */



  // AUDIO 
 
import playList  from './playList.js';


const audio = new Audio();
const playAudioBtn = document.querySelector('.play');
let isPlay = false;
let playNum = 0; 
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const playListUl = document.querySelector('.play__list');
let numActivClass = 0;
playList.forEach( (el)  => {
    const li = document.createElement('li');
    li.classList.add('play__item');
    playListUl.append(li)
    li.textContent = el.title;
});

const arrayLi = document.querySelectorAll('.play__item');

playAudioBtn.addEventListener('click', () => {
    playAudioBtn.classList.toggle('pause');
    (playAudioBtn.classList.contains('pause'))? isPlay = true : isPlay = false;
    playAudio();
});

prev.addEventListener('click', () => {
    playPrev();
    arrayLi[numActivClass].classList.remove('play__item--activ');
    
    if(numActivClass <= 0){
        numActivClass = playList.length - 1;
        console.log(numActivClass)
    } else {
        numActivClass--
    } 
    
    arrayLi[numActivClass].classList.add('play__item--activ'); 
});

arrayLi[numActivClass].classList.add('play__item--activ');

next.addEventListener('click', () => {
    playNext();
    arrayLi[numActivClass].classList.remove('play__item--activ');
    numActivClass++;
    if(numActivClass == playList.length){
     numActivClass = 0
    }
    arrayLi[numActivClass].classList.add('play__item--activ'); 
})

function playAudio() {

    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    if(!(isPlay === false)){
        audio.play();
    } else if( isPlay === false){
        audio.pause();
    }
    audio.addEventListener('ended', () => {
        playNext()
    }) 
}

function playPrev() {
    --playNum;
    if(playNum < 0) {
        playNum = playList.length - 1;
    }
    playAudio();
}

function playNext() {
    playNum = playNum + 1;
    if(playNum == playList.length) {
        playNum = 0;
    }
    playAudio();    
}

 
