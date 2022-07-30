
'use strict'
// Bремя часы: минуты: секунды.
const time = document.querySelector('.time');
showTime();


// День недели число месяц
const timeDate = document.querySelector('.date');
showDate();


// Текст приветствия 
const hiText = document.querySelector('.hello__text');
const timeOfDay = getTimeOfDay()
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
    if( hour >= 6 && hour < 12) return 'Доброе утро';
    if( hour >= 12 && hour < 18) return 'Добрый день';
    if( hour >= 18 && hour < 0) return 'Добрый вечер';
    if( hour >= 0 && hour < 6) return 'Спокойной ночи';
}

function showGreeting() {
    setTimeout(showGreeting, 60000);
    console.log(timeOfDay)
    return hiText.textContent = `${timeOfDay}`
}











  
 

