'use strict';

window.similarWizards = (function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  // отрисовка магов
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.fullName;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

    return wizardElement;
  };

  var renderWizardsBlock = function (num) {
    var wizards = window.createWizardSet(num);
    var similarListElement = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    // рисуем магов
    for (var i = 0; i < num; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };
  return renderWizardsBlock;
})();
