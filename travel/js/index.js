'use strict'
console.log('При проверке адаптива Pixel Perfect рекомендую Наложить pixel на бургер иконку!\n На странице нет Кружочков в секции слайдер и срелок переключения изза ненадобности они появятся когда будет слайдер и их уже надо стилить. Я не считаю это за ошибку, но проверять вам')
console.log('Вёрстка соответствует макету. Ширина экрана 390px +48 \n блок <header> +6 \n секция preview +9 \n секция steps +9\n секция destinations +9 \n секция stories +9\n блок <footer> +6\n \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n Нет полосы прокрутки при ширине страницы от 1440рх до 390px +7\n Нет полосы прокрутки при ширине страницы от 390px до 320рх +8\n \nНа ширине экрана 390рх и меньше реализовано адаптивное меню +22\n При ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2\n При нажатии на бургер-иконку плавно появляется адаптивное меню +4\n Адаптивное меню соответствует макету +4 \n При нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4 \n Ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню) \n При клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4\n');
console.log('Итого 75 баллов')


const popup = document.querySelector('.popup');
const popupWrap = document.querySelector('.popup__wrap');
const login = document.querySelector('.login');

if(login) {
    login.addEventListener("click", () => {
        popup.classList.toggle('popup_activ');
    });
}

if(popupWrap) {
    popup.addEventListener("click", (event) => {
        event.target.classList.remove('popup_activ');
    });
}


const boxInputBtn = document.querySelector('.box-input__btn');

if(boxInputBtn) {
    boxInputBtn.addEventListener("click", () => {
        let inputLogin = document.querySelector('.login__input').value;
        let inputPassword = document.querySelector('.password').value;
        alert(`Your login: ${inputLogin}\nYour password: ${inputPassword}`);
    });
}

const register = document.querySelector('.registr');

if(register) {
    register.addEventListener("click", () => {
        const popupWrapActiv = document.querySelector('.popup__wrap');
        popupWrapActiv.classList.toggle('popup__wrap_activ');

        const buttonArr = document.querySelectorAll('.sign__login');
        buttonArr.forEach(item => {
            item.style.display = "none";
        });

        document.querySelector('.box__or').style.display = 'none';
        document.querySelector('.sign__sub-text').style.display = 'none';
        document.querySelector('.line').style.marginTop = "26px";

        document.querySelector('.login__title').textContent = "Create account";
        document.querySelector('.text').textContent = "Already have an account?";
        document.querySelector('.registr').textContent = "Log in";
        boxInputBtn.textContent = "Sign Up";
        
    });
}





const menu = document.querySelector('.menu');
const navBurger = document.querySelector('.nav__burger');
const body = document.body;

// Burger menu
if(navBurger){
   navBurger.addEventListener("click", function(e){
        menu.classList.toggle('activ__menu');
        navBurger.classList.toggle('nav__burger--activ');
        body.classList.toggle("activ");
    });
}

// Scrool click at link

 const menuLink = document.querySelectorAll('.menu__link[data-goto]'); 

 if(menuLink.length > 0) {
    menuLink.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const menuLinkGoto = document.querySelector(menuLink.dataset.goto);
            const menuLinkGotoValue = menuLinkGoto.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;

            if(navBurger.classList.contains('nav__burger--activ')) {
                menu.classList.remove('activ__menu');
               navBurger.classList.remove('nav__burger--activ');
                body.classList.remove("activ");
            }

            window.scrollTo({
                top: menuLinkGotoValue,
                behavior: "smooth",
            });
            e.preventDefault();
        }
    }
}

// Закрытие бургер меню при клике вне
const menuRoot = document.querySelector('.menu');
document.addEventListener('mousedown', (i) => {
   if (! menuRoot.contains(i.target)) {
      menu.classList.remove('activ__menu');
      navBurger.classList.remove('nav__burger--activ');
      body.classList.remove("activ");
   }
})

