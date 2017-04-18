// setup.js
'use strict';

(function () {
  // СОБЫТИЯ
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupInput = setup.querySelector('.setup-user-name');
  var setupSubmit = setup.querySelector('.setup-submit');

  utils.toggleClass(setup, 'hidden', false);
  
  // закрытие попапа по нажатию ESC
  var onPopupEscPress = function (evt) {
    if (utils.isEscKeyCode(evt)) {
      closePopup();
    }
  };
  // открытие попапа
  var openPopup = function () {
    utils.toggleClass(setup, 'hidden', false);
    document.addEventListener('keydown', onPopupEscPress);
  };
  // закрытие попапа
  var closePopup = function () {
    utils.toggleClass(setup, 'hidden', true);
    document.removeEventListener('keydown', onPopupEscPress);
  };
  // нажатие на элемент .setup-open удаляет класс hidden у блока setup
  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  // открытие по нажатию ENTER
  setupOpen.addEventListener('keydown', function (evt) {
    if (utils.isEnterKeyCode(evt)) {
      openPopup();
    }
  });
  // закрытие по нажатию ENTER
  setupClose.addEventListener('keydown', function (evt) {
    if (utils.isEnterKeyCode(evt)) {
      closePopup();
    }
  });

  // нажатие на элемент .setup-close, расположенный внутри блока setup возвращает ему класс hidden.
  setupClose.addEventListener('click', function () {
    closePopup();
  });
  // нажатие в поле имя пользователя
  setupInput.addEventListener('keydown', function (evt) {
    evt.stopPropagation();
  });
  // нажатие на кнопку Сохранить
  setupSubmit.addEventListener('click', function (evt) {
    if (setupInput.validity.valid) {
      evt.preventDefault();
      closePopup();
    }
  });

  var NUM_WIZARDS = 4;

  window.similarWizards(NUM_WIZARDS);

  // отображаем блок с магами
  utils.toggleClass(document.querySelector('.setup-similar'), 'hidden', false);

}) ();
