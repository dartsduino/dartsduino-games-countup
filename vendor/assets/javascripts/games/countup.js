'use strict';

var Games_countup = function () {
  console.log('countup: start');

  var focusClass = 'focus';

  var dartsUi = window.dartsUi;

  var scoreIndex = 1;
  var scoreElements = $('.scores td');
  var totalScore = 0;
  var totalScoreElements = $('.scores-total-score td');

  for (var i = 1; i < scoreElements.length; i++) {
    $(scoreElements[i]).removeClass(focusClass).text(0);
  }

  $(scoreElements[scoreIndex]).addClass(focusClass);

  dartsUi.onHit(function (cellId, point, ratio) {
    $(scoreElements[scoreIndex]).text(point * ratio);

    $(scoreElements[scoreIndex]).removeClass(focusClass);
    scoreIndex++;
    $(scoreElements[scoreIndex]).addClass(focusClass);

    totalScore += point * ratio;
    $(totalScoreElements).text(totalScore);

    if (scoreIndex > 8) {
      console.log('Clear!');
    }
  });
};
