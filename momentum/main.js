
'use strict'
// Bремя часы: минуты: секунды.
const time = document.querySelector('.time');
showTime();

// Время часы: минуты: секунды.
function showTime() {
    const date = new Date(); // переменная с датой
    const currentTime = date.toLocaleTimeString(); // Метод на время часы: минуты: секунды.
    time.innerHTML = currentTime; // замена содержимого на время
    setTimeout(showTime, 1000); // запуск самой себя с задержкой в 1с 
    return time // верни время
  }


// День недели число месяц
const timeDate = document.querySelector('.date');
showDate();

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










  
 

