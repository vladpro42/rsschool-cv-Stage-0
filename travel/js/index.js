'use strict'
console.log('верстка валидная +10 \n верстка семантичная:\n есть <header>, <main>, <footer> +3 \n четыре Секции +3 \n 1 заголовок h1 +3 \n три заголовка h2 +3 \n один nav +3 \n болше чем два списка не добавляем 3 балла \nчетыре кнопки +2\n Итого: 17\n Верстка соответсвует макету +48 \n Треования к CSS выполнены +12 \n Интерактивность +20 Итого: 110 баллов - 3 == 107 балов, макс 100 => Score = 100 баллов');



const navigation = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const link = document.getElementById('link__account');


if(navigation){
    navigation.addEventListener("click", function(e){
        menu.classList.toggle('activ__menu');
        navigation.classList.toggle('activ__nav');
        link.classList.remove();
    });
}

/* if(link){
    link.addEventListener("click", function(i){
        navigation.classList.toggle('activ__nav');
        menu.classList.remove('activ__menu');
    })
} */