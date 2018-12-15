/*
 * Tinder Auto Liker
 * Copy and paste the code on the tinder matching site in the developer console.
 *
 * have fun
 */

var $likeBTN = $('.recsGamepad__button--like'),
    count    = 0,
    times    = 9999,
	duration = 750;

function msToTime(s) {

  // Pad to 2 or 3 digits, default is 2
  function pad(n, z) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }

  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
}
var counting = 1;
(function myLoop (i) {          
    setTimeout(function () {   
        count++;
        counting++;
        $likeBTN.click();
        if (--i) myLoop(i);
        console.log( count + ' of ' + times + ' - ' + 'estimated time left: ' + msToTime( duration * (parseInt(times - counting)) ) );
   }, duration)
})(times);
