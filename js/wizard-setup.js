'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  // переменные для работы с магом
  var wizard = document.querySelector('.wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var colorizeWizardElement = function (element, colorArray, callback) {
    element.addEventListener('click', function () {
      callback(window.utils.getRandomValueFromArray(colorArray))
    });
  }
  // изменение цвета пальто мага
  colorizeWizardElement(wizardCoat, COAT_COLORS, function (color) {
    wizardCoat.style.fill = color;
  });
  // изменение цвета глаз мага
  colorizeWizardElement(wizardEyes, EYES_COLORS, function (color) {
    wizardEyes.style.fill = color;
  });
  // изменение цвета глаз мага
  colorizeWizardElement(wizardFireball, FIREBALL_COLORS, function (color) {
    wizardFireball.style.backgroundColor = color;
  });
})();
