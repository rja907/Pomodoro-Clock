$(document).ready(function() {
  var buzzer = $('#buzzer')[0];
  var cnt = parseInt($('#num').html());
  var cntBreak = parseInt($('#bNum').html());
  cntBreak *= 60;
  $('#rst').hide();
  $('#start').click(function() {
    var ctr = setInterval(timer, 1000);
    cnt *= 60;
    function timer() {
      $(
        '#start, #subfocus, #addfocus, #subbreak, #addbreak, #focus, #breakT, #bNum'
      ).hide();
      $('#timerClock').html('Focus Time Left: ');
      cnt -= 1;
      if (cnt % 60 >= 10) {
        $('#num').html(Math.floor(cnt / 60) + ':' + cnt % 60);
      }

      if (cnt % 60 <= 9 && cnt % 60 > -1) {
        $('#num').html(Math.floor(cnt / 60) + ':' + 0 + cnt % 60);
      }
      if (cnt === 0) {
        buzzer.play();
        clearInterval(ctr);
        $('#num #timerClock').hide();
        var startB = setInterval(breakTimer, 1000);
      }
    }
    function breakTimer() {
      $('#timerClock').html('Break Time Left: ');
      $('#bNum').show();
      cntBreak -= 1;
      $('#timerClock').show();
      if (cntBreak % 60 >= 10) {
        $('#bNum').html(Math.floor(cntBreak / 60) + ':' + cntBreak % 60);
      }
      if (cntBreak % 60 <= 9 && cntBreak % 60 > -1) {
        $('#bNum').html(Math.floor(cntBreak / 60) + ':' + 0 + cntBreak % 60);
      }
      if (cntBreak === 0) {
        clearInterval(cntBreak);
        buzzer.play();
        $('bNum, #timerClock').hide();
        $('#rst').show();
      }
    }
  });
  $('#rst').click(function() {
    cnt = 25;
    cntBreak = 5;
    $('#num').html(cnt);
    $('#bNum').html(cntBreak);
    $('#rst, #timerClock').hide();
    $(
      '#start, #subfocus, #addfocus, #subbreak, #addbreak, #focus, #breakT, #bNum, #num'
    ).show();
  });
  $('#subfocus').click(function() {
    if (cnt > 5) {
      cnt -= 5;
      $('#num').html(cnt);
    }
  });
  $('#addfocus').click(function() {
    cnt += 5;
    $('#num').html(cnt);
  });
  $('#subbreak').click(function() {
    if (cntBreak > 5) {
      cntBreak -= 5;
      $('#bNum').html(cntBreak);
    }
  });
  $('#addbreak').click(function() {
    cntBreak += 5;
    $('#bNum').html(cntBreak);
  });
});
