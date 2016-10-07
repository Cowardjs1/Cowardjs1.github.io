$(document).ready(function() {
  //game code here
  $('.t1').hide();
  var points = 0;
  document.getElementById('score').innerHTML = points;

  $('.ct').click(function() {
    points = points - 100;
    document.getElementById('score').innerHTML = points;
    $('.ct').hide();
    alert("You killed a teammate!");
  });
  $('.ct1').click(function() {
    points = points - 100;
    document.getElementById('score').innerHTML = points;
    $('.ct1').hide();
    alert("You killed a teammate!");
  });
  $('.t').click(function() {
    points = points + 100;
    document.getElementById('score').innerHTML = points;
    $('.t').hide();
    $('.t1').fadeIn();
    $('.t1').click(function() {
    points = points + 100;
    document.getElementById('score').innerHTML = points;
    $('.t1').hide();

  });
  $('.reset').click(function() {
    $('.ct').fadeIn();
    $('.ct1').fadeIn();
    $('.t').fadeIn();
    $('.t1').hide();
    points = 0;
    document.getElementById('score').innerHTML = points;
  });
  });
}); //closing bracket for document, DO NOT DELETE