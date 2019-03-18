'use strict';
let menu = document.querySelector('.menu'),
  menuItems = document.querySelectorAll('.menu-item'),
  thirdItem = document.createElement('li'),
  lastItem = document.createElement('li'),
  title = document.querySelector('.title'),
  parentOfAdv = document.querySelectorAll('.column'),
  adv = document.querySelector('.adv'),
  textArea = document.querySelector('.prompt'),
  question;

thirdItem.classList.add('menu-item');
thirdItem.textContent = 'Третий пункт';
lastItem.classList.add('menu-item');
lastItem.textContent = 'Пятый пункт';

menu.removeChild(menuItems[1]);
menu.insertBefore(thirdItem, menuItems[3]);
menu.appendChild(lastItem);

document.body.style.backgroundImage = 'url(../task1/img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

parentOfAdv[1].removeChild(adv);

question = prompt('Каково ваше мнение по продукциям от компании "Apple"', "");

textArea.textContent = question;