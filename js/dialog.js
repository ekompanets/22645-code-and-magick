// setup.js
'use strict';

(function () {
  // СОБЫТИЯ
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupInput = setup.querySelector('.setup-user-name');
  var setupSubmit = setup.querySelector('.setup-submit'); 

  window.utils.toggleClass(setup, 'hidden', false);
  var setupCoords = {
      x: setup.offsetLeft,
      y: setup.offsetTop
    };

  // закрытие попапа по нажатию ESC
  var onPopupEscPress = function (evt) {
    if (window.utils.isEscKeyCode(evt)) {
      closePopup();
    }
  };
  // открытие попапа
  var openPopup = function () {
    setup.style.top = setupCoords.y + 'px';
    setup.style.left = setupCoords.x + 'px';
    window.utils.toggleClass(setup, 'hidden', false);
    document.addEventListener('keydown', onPopupEscPress);
  };
  // закрытие попапа
  var closePopup = function () {
    window.utils.toggleClass(setup, 'hidden', true);
    document.removeEventListener('keydown', onPopupEscPress);
  };
  // нажатие на элемент .setup-open удаляет класс hidden у блока setup
  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  // открытие по нажатию ENTER
  setupOpen.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKeyCode(evt)) {
      openPopup();
    }
  });
  // закрытие по нажатию ENTER
  setupClose.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKeyCode(evt)) {
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
  window.utils.toggleClass(document.querySelector('.setup-similar'), 'hidden', false);

  // DRAG
  var dialogHandle = setup.querySelector('.setup-user-pic');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };


    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
