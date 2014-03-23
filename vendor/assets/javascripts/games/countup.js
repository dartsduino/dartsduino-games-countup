'use strict';

var Games_countup = function () {
  console.log('countup: start');

  var focusClass = 'focus';

  var dartsUi = window.dartsUi;

  var scoreIndex = 1;
  var scoreElements = $('.scores td');
  var totalScore = 0;
  var totalScoreElements = $('.scores-total-score td');

  var score = 0;
  var count = 0;

  for (var i = 1; i < scoreElements.length; i++) {
    $(scoreElements[i]).removeClass(focusClass).text(0);
  }

  $(scoreElements[scoreIndex]).addClass(focusClass);

  dartsUi.onHit(function (cellId, point, ratio) {
    score += point * ratio;
    $(scoreElements[scoreIndex]).text(score);

    totalScore += point * ratio;
    $(totalScoreElements).text(totalScore);

    count++;
    if (count >= 3) {
      score = 0;
      count = 0;

      $(scoreElements[scoreIndex]).removeClass(focusClass);
      scoreIndex++;
      $(scoreElements[scoreIndex]).addClass(focusClass);

      if (scoreIndex > 8) {
        console.log('Clear!');
      }
    }
  });
};
