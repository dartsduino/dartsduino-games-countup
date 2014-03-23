'use strict';

var Games_countup = function () {
  console.log('countup: start');

  var focusClass = 'focus';

  var dartsUi = window.dartsUi;

  var scoreElements = $('.scores-score td');
  var totalScoreElements = $('.scores-total-score td');

  var State = {
    NOT_STARTED: 0,
    PLAYING: 1,
    ENDED: 2
  };
  var state = State.PLAYING;

  var round = 0;
  var score = 0;
  var count = 0;
  var totalScore = 0;

  for (var i = 1; i < scoreElements.length; i++) {
    $(scoreElements[i]).removeClass(focusClass).text(0);
  }

  $(scoreElements[round]).addClass(focusClass);

  dartsUi.onHit(function (cellId, point, ratio) {
    if (state !== State.PLAYING) {
      return;
    }

    score += point * ratio;
    $(scoreElements[round]).text(score);

    totalScore += point * ratio;
    $(totalScoreElements).text(totalScore);

    count++;
    if (count >= 3) {
      score = 0;
      count = 0;

      $(scoreElements[round]).removeClass(focusClass);
      round++;
      $(scoreElements[round]).addClass(focusClass);

      if (round >= 8) {
        console.log('Clear!');

        state = State.ENDED;
      }
    }
  });
};
