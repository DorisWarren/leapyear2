var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    $('.true').show();
    $('.false').hide();
  } else {
    $('.false').show();
    $('.true').hide();
  }
};





$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var number = parseInt($('#year').val())
    leapYear(number)


  });
});
