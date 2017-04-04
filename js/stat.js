
// stat.js
'use strict';

window.renderStatistics = function (ctx, names, times) {

  // параметры canvas
  var cloudX = 100;
  var cloudY = 10;
  var cloudWidth = 420;
  var cloudHeight = 270;
  var cloudLeft = cloudX + 20;
  var cloudBottom = cloudY + cloudHeight - 20;

  // рисуем тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(cloudX + 10, cloudY + 10, cloudWidth, cloudHeight);
  // рисуем облако
  ctx.fillStyle = '#fff';
  ctx.fillRect(cloudX, cloudY, cloudWidth, cloudHeight);
  // задаем параметры текста
  var colorText = '#000';
  ctx.fillStyle = colorText;
  ctx.font = '16px PT Mono';
  // пишем заголовки
  ctx.fillText('Ура вы победили', cloudLeft, 40);
  ctx.fillText('Список результатов:', cloudLeft, 60);
  // поиск максимального результата и индекса игрока с этим результатом
  var max = -1;
  var iYou = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];

    if (time > max) {
      max = time;
    }
    // определяем индекс для игрока "Вы"
    if ((names[i] === 'Вы') && (iYou < 0)) {
      iYou = i;
    }

  }
  // задаем параметры гистограммы
  var histogramHeight = 150;
  var step = histogramHeight / (max.toFixed(0) - 0);
  var colWidth = 40;
  var colDistance = 50;
  var colorYou = 'rgba(255,0,0,1)';  // цвет для игрока "Вы"
  var colorOther = '0,0,255';  // цвет для остальных игроков
  var colorTransparency = 1;

  for (i = 0; i < times.length; i++) {

    var colLeft = cloudLeft + 30 + (colWidth + colDistance) * i;  // координата Х для колонки
    var colHeight = times[i] * step;  // высота колонки

    // проверяем игрока на совпадение с "Вы"
    if (i === iYou) {
      ctx.fillStyle = colorYou;
    }
    else 
    {
      colorTransparency = Math.random().toFixed(1) + 0;  // непрозрачность должна быть больше 0
      ctx.fillStyle = 'rgba(' + colorOther + ',' + colorTransparency + ')';  // заливка с полученной непрозрачностью
    }
    // рисуем колонку гистограммы
    ctx.fillRect(colLeft, cloudBottom - 20, colWidth, -colHeight);

    ctx.fillStyle = colorText;
    // пишем имя внизу
    ctx.fillText(names[i], colLeft, cloudBottom);
    // пишем результат сверху
    ctx.fillText(times[i].toFixed(0), colLeft, cloudBottom - 25 - colHeight);
  }
};
