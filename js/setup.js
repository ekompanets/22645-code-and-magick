// setup.js
'use strict';

(function () {
  // перетаскивания элементов из одного положения в другое
  var shop = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  // нужно найти тот элемент в который мы будем переносить исходные элементы setup-atifacts
  var artifacts = document.querySelector('.setup-artifacts');

  // при перетаскивании из зоны окуда мы тянем нам нужно запомнить тот элемент который мы тянем, а также сообщить браузеру дополнительную информацию о перетаскиваемом объекте dataTransfer
  shop.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target.cloneNode(true);
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifacts.classList.add('enable-to-drop');
    }
  });
  // проверка на наличие артефакта в ячейке
  var enableToDrop = function (targetCell) {
    return ((targetCell.tagName.toLowerCase() === 'div') && (targetCell.childNodes.length === 0));
  };
  // нужно обработать событие dragover и отменить его действие по-умолчанию.
  // По-умолчанию браузер запрещает перетаскивать что попало куда попало,
  // поэтому такое поведение следует отменить первым делом
  artifacts.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });
  // событие броска на нужных элементах.
  // события dragenter и dragleave,
  // при помощи которых можно указать элементы над которыми сейчас находится курсор при перетаскивании.
  artifacts.addEventListener('drop', function (evt) {
    if (enableToDrop(evt.target)) {
      evt.target.style.backgroundColor = '';
      evt.target.appendChild(draggedItem);
      artifacts.classList.remove('enable-to-drop');
    }
  });
  artifacts.addEventListener('dragenter', function (evt) {
    if (enableToDrop(evt.target)) {
      evt.target.style.backgroundColor = 'yellow';
      evt.preventDefault();
    }
  });
  artifacts.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });
})();
