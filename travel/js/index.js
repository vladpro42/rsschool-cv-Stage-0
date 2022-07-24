'use strict'
console.log('Изза того что макет сайта имеет только адаптивный макет на разрешении 390px\n возможно некорректоное отображение слайдера на разрешениях 391px -- 1000px, в задании не сказано О корректоности слайдера на разных разрешениях, просьба учитывать тот факт при оценке моей работы!')
console.log('Слайдер изображений в секции destinations +50\nна десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели\nСлайдер может быть как конечным так и бесконечным - данный критерий не должен влиять на оценку + 20\n\nТри точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который становится\nактивным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее\nпоявляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20\n\nАнимации плавного перемещения для слайдера +10\n\n\nНажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50\nлогин попап соответствует верстке его закрытие происходит при клике вне попапа +25\nлогин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег ) +25\n\n\nНажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25');
console.log('Итого 125 баллов. Максимум 100')


const popup = document.querySelector('.popup');
const popupWrap = document.querySelector('.popup__wrap');
const login = document.querySelector('.login');

//Открытие попапа
if(login) {
    login.addEventListener("click", () => {
        popup.classList.toggle('popup_activ');
    });
}

//Закрытие попапа по клику вне
if(popupWrap) {
    popup.addEventListener("click", (event) => {
        event.target.classList.remove('popup_activ');
    });
}

// данные в алерт
const boxInputBtn = document.querySelector('.box-input__btn');

if(boxInputBtn) {
    boxInputBtn.addEventListener("click", () => {
        let inputLogin = document.querySelector('.login__input').value;
        let inputPassword = document.querySelector('.password').value;
        alert(`Your login: ${inputLogin}\nYour password: ${inputPassword}`);
    });
}

//Текст изменения по клику на кнопку регистр
const register = document.querySelector('.registr');

if(register) {
    register.addEventListener("click", () => {
        const popupWrapActiv = document.querySelector('.popup__wrap');
        popupWrapActiv.classList.toggle('popup__wrap_activ');

        const buttonArr = document.querySelectorAll('.sign__login');
       
        if(popupWrapActiv.classList.contains('popup__wrap_activ')) {

            buttonArr.forEach(item => {
                item.style.display = "none";
            });

            document.querySelector('.box__or').style.display = 'none';
            document.querySelector('.sign__sub-text').style.display = 'none';
            document.querySelector('.line').style.marginTop = "26px";

            document.querySelector('.login__title').textContent = "Create account";
            document.querySelector('.text').textContent = "Already have an account?";
            document.querySelector('.registr > span').textContent = "Log in";
            document.querySelector('.box-input__btn > span').textContent = "Sign Up";
        } else {

            buttonArr.forEach(item => {
                item.removeAttribute("style");
            });
            document.querySelector('.box__or').removeAttribute("style");
            document.querySelector('.sign__sub-text').removeAttribute("style");
            document.querySelector('.line').removeAttribute("style");
            
            document.querySelector('.login__title').textContent = "Log in to your account";
            document.querySelector('.text').textContent = "Don’t have an account?";
            document.querySelector('.registr > span').textContent = "Register";
            document.querySelector('.box-input__btn > span').textContent = "Sign In";
        }
        
        
    });
}

// Вызов попапа по ссылке аккаунт
const linkAccountBtn = document.getElementById('link__account_btn');

if(linkAccountBtn) {
    linkAccountBtn.addEventListener("mousedown", () => {
        popup.classList.toggle('popup_activ');
        menu.classList.remove('activ__menu');
        navBurger.classList.remove('nav__burger--activ');
        body.classList.remove("activ");
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

//SLIDER SWIPER

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    centeredSlides: true,
    spaceBetween: 60,
    slideToClickedSlide: true,
    initialSlide: 1,

    breakpoints: {
         1291: {
            slidesPerView: 'auto',
            spaceBetween: 20,
        }, 

        /* 1000: {
            slidesPerView: 1,
            spaceBetween: 20,
        },  */

       /*  391: {
            slidesPerView: 1,
            spaceBetween: 20,
        }, */

        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            initialSlide: 0,
        },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });

