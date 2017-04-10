// setup.js
'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTEmplate = document.querySelector('#similar-wizard-template').content;
// статические массивы данных
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
// массив магов
var wizards = [];
// количество магов
var numWizards = 4;
// получение случайного индекса из массива
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
// пполучение случайного значения из массива
var getRandomValueFromArray = function (array) {
  return array[getRandomInt(0, array.length - 1)];
};
// создание мага
var createWizard = function () {
  var newWizard = {
    fullName: getRandomValueFromArray(WIZARD_NAMES) + ' ' + getRandomValueFromArray(WIZARD_SURNAMES),
    coatColor: getRandomValueFromArray(COAT_COLORS),
    eyeColor: getRandomValueFromArray(EYES_COLORS)
  };
  return newWizard;
};
// отрисовка магами
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTEmplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.fullName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardElement;
};
// создаем магов
for (var i = 0; i < numWizards; i++) {
  // создаем мага с проверкой на совпадение имен
  var sameName = true;
  while (sameName) {
    sameName = false;
    wizards[i] = createWizard();
    for (var j = 0; j < i; j++) {
      if (wizards[i].fullName === wizards[j].fullName) {
        sameName = true;
      }
    }
  }
}

var fragment = document.createDocumentFragment();
// рисуем магов
for (i = 0; i < numWizards; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
// отображаем блок с магами
document.querySelector('.setup-similar').classList.remove('hidden');


// СОБЫТИЯ
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupInput = setup.querySelector('.setup-user-name');
var setupSubmit = setup.querySelector('.setup-submit');
// проверка на нажатие ENTER
var ENTER_KEY_CODE = 13;
var isEnterKeyCode = function (evt) {
  return evt.keyCode === ENTER_KEY_CODE;
};
// закрытие попапа по нажатию ESC
var onPopupEscPress = function(evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
};
// открытие попапа
var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};
// закрытие попапа
var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};
// нажатие на элемент .setup-open удаляет класс hidden у блока setup
setupOpen.addEventListener('click', function() {
  openPopup();
}); 
// открытие по нажатию ENTER
setupOpen.addEventListener('keydown', function(evt) {
  if (isEnterKeyCode(evt)) {
    openPopup();
  }
});
// закрытие по нажатию ENTER
setupClose.addEventListener('keydown', function(evt) {
  if (isEnterKeyCode(evt)) {
    closePopup();
  }
});

// нажатие на элемент .setup-close, расположенный внутри блока setup возвращает ему класс hidden.
setupClose.addEventListener('click', function() {
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
// переменные для работы с магом
var wizard = document.querySelector('.wizard');
var wizardCoat = wizard.querySelector('.wizard-coat');
var wizardEyes = wizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
// получение случайного индекса из массива
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (++max - min)) + min;
};
// пполучение случайного значения из массива
var getRandomValueFromArray = function (array) {
  return array[getRandomInt(0, array.length - 1)];
};
// изменение цвета пальто мага
wizardCoat.addEventListener('click', function (evt) {
  wizardCoat.style.fill = getRandomValueFromArray(COAT_COLORS);
});
// изменение цвета глаз мага
wizardEyes.addEventListener('click', function (evt) {
  wizardEyes.style.fill = getRandomValueFromArray(EYES_COLORS);
});
// изменение цвета глаз мага
wizardFireball.addEventListener('click', function (evt) {
  wizardFireball.style.backgroundColor = getRandomValueFromArray(FIREBALL_COLORS);
});
