'use strict';

window.createWizardSet = function (numWizards) {
  // статические массивы данных
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  // массив магов
  var wizards = [];

  // создание мага
  var createWizard = function () {
    var newWizard = {
      fullName: utils.getRandomValueFromArray(WIZARD_NAMES) + ' ' + utils.getRandomValueFromArray(WIZARD_SURNAMES),
      coatColor: utils.getRandomValueFromArray(COAT_COLORS),
      eyeColor: utils.getRandomValueFromArray(EYES_COLORS)
    };
    return newWizard;
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

  return wizards;
};