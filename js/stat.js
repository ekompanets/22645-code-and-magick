// stat.js
'use strict';

window.renderStatistics = function (ctx, names, times) {

  // рисуем прямоугольник
  var drawRect = function (x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };
  // выводим текст
  var printText = function (text, x, y, color, font) {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.textBaseline = 'bottom';
    ctx.fillText(text, x, y);
  };
  // получаем максимальный элемент массива
  var getMaxInArray = function (array) {
    var max = array[0];
    for (var i = 0; i < times.length; i++) {
      if (times[i] > max) {
        max = times[i];
      }
    }
    return max;
  };
  // получаем непрозрачность
  var getRandomTransparency = function () {
    var transparency = Math.random().toFixed(1);
    return (transparency > 0) ? transparency : 0.1;
  };
  // устанавливаем цвет колонки
  var setColumnColor = function (name, color1, color2) {
    // проверяем игрока на совпадение с "Вы"
    return (name === 'Вы') ? 'rgba(' + color1 + ', 1)' : 'rgba(' + color2 + ',' + getRandomTransparency() + ')';
  };

  // параметры canvas
  var cloudX = 100;
  var cloudY = 10;
  var cloudWidth = 420;
  var cloudHeight = 270;
  var cloudLeft = cloudX + 20;
  var cloudBottom = cloudY + cloudHeight - 20;

  // рисуем тень
  drawRect(cloudX + 10, cloudY + 10, cloudWidth, cloudHeight, 'rgba(0, 0, 0, 0.7)');
  // рисуем облако
  drawRect(cloudX, cloudY, cloudWidth, cloudHeight, '#fff');

  // задаем параметры текста
  var textColor = '#000';
  var textFont = '16px PT Mono';
  // пишем заголовки
  printText('Ура вы победили', cloudLeft, 40, textColor, textFont);
  printText('Список результатов:', cloudLeft, 60, textColor, textFont);

  // ищем максимальный результат
  var maxResult = getMaxInArray(times);
  // задаем параметры гистограммы
  var histogramHeight = 150;
  var step = histogramHeight / (maxResult.toFixed(0) - 0);
  var colWidth = 40;
  var colDistance = 50;
  var colorYou = '255,0,0';  // цвет для игрока "Вы"
  var colorOther = '0,0,255';  // цвет для остальных игроков

  for (var i = 0; i < times.length; i++) {
    var colLeft = cloudLeft + 30 + (colWidth + colDistance) * i;  // координата Х для колонки
    var colHeight = times[i] * step;  // высота колонки
    // рисуем колонку гистограммы
    drawRect(colLeft, cloudBottom - 20, colWidth, -colHeight, setColumnColor(names[i], colorYou, colorOther));
    // пишем имя внизу
    printText(names[i], colLeft, cloudBottom, textColor);
    // пишем результат сверху
    printText(times[i].toFixed(0), colLeft, cloudBottom - 25 - colHeight, textColor);
  }
};
