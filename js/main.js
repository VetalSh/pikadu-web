// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})

const loginElem = document.querySelector('.login'),
      loginForm = document.querySelector('.login-form'),
      emailInput = document.querySelector('.login-email'),
      passwordInput = document.querySelector('.login-password'),
      loginSingUp = document.querySelector('.login-singup');

const listUsers = [
  {
    id: '01',
    email: 'vetal@gmail.com',
    password: '12345',
    displayName: 'VetalJS'
  },
  {
    id: '02',
    email: 'maks@gmail.com',
    password: '123456',
    displayName: 'MaksJS'
  },
];

