'use strict';

window.utils = (function () {

  // получение случайного целого числа из диапазона
  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (++max - min)) + min;
  };

  // проверка на нажатие ENTER
  var ENTER_KEY_CODE = 13;
  var isEnterKeyCode = function (evt) {
    return evt.keyCode === ENTER_KEY_CODE;
  };

  // проверка на нажатие ESC
  var ESC_KEY_CODE = 27;
  var isEscKeyCode = function (evt) {
    return evt.keyCode === ESC_KEY_CODE;
  };

  // пполучение случайного значения из массива
  var getRandomValueFromArray = function (array) {
    return array[getRandomInt(0, array.length - 1)];
  };

  // переключатель класса у элемента
  var toggleClass = function (element, className, state) {
    if (state) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  };

  return {
    getRandomInt: getRandomInt,
    getRandomValueFromArray: getRandomValueFromArray,
    isEnterKeyCode: isEnterKeyCode,
    isEscKeyCode: isEscKeyCode,
    toggleClass: toggleClass
  }:
})();
