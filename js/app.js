//window.addEventListener('load', function() {});

/*botones */
let selectOption = function () {
  var selected = $(this).text();
  // console.log($(this).parent().parent().prev())
  $(this).parent().parent().parent().find('button').html(selected + '&nbsp;<span class="caret"></span>');
}

new WOW().init();

var sponsorsIcons = document.getElementById("sponsors-icons");
var sponsorsDiv = document.getElementById("sponsors-div");
$('.scroll-top-mobile').hide();
$('.carousel').carousel()

window.onscroll = function () {
  //var scroll = window.scrollTop();
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll > 100) {
    $('.scroll-top-mobile').show();
    $('.logo-desktop').find('p').css({'color':pink});
    console.log($('.logo-desktop').find('p'))
    //css({'left': leftOrgElement + 'px', 'width': widthOrgElement,'top': 0, 'box-shadow':'0px 0px 4px 1px rgba(0, 0, 0, 0.15)', 'background-color': '#000' })
  } else {
    $('.scroll-top-mobile').hide();
    $('.logo-desktop').find('p').css({'color':blue});
  }
};


//Fechas inicial y final
/*
var d = new Date();
console.log(d.getMonth() +1);

document.getElementById("fecha").append(`${ - (d.getMonth() +1)}`)
*/

var end = new Date('11/23/2018 9:30 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

//function showRemaining() {
var now = new Date();
var distance = end - now;
var days = Math.floor(distance / _day);
var hours = Math.floor((distance % _day) / _hour);
var minutes = Math.floor((distance % _hour) / _minute);
var seconds = Math.floor((distance % _minute) / _second);

document.getElementById('countdown-desktop').innerHTML = 'Faltan ' + days + ' dias, ';
document.getElementById('countdown-desktop').innerHTML += hours + ' horas ';

/*´´EMPRESAS LIST ARRAY */
const wine = ['Vino1', 'Vino2', 'Vino3', 'Vino4', 'Vino5', 'Vino6'];
const food = ['Comida1', 'Comida2', 'Comida3', 'Comida4', 'Comida5', 'Comida6'];
const desserts = ['postres1', 'postres2', 'postres3', 'postres4', 'postres5', 'postres6'];
const beverage = ['bebidas1', 'bebidas2', 'bebidas3', 'bebidas4', 'bebidas5', 'bebidas6'];

/* 
var newWine = [];
var random = Math.floor(Math.random() * 3);

newWine.push(random);

var random = Math.floor(Math.random() * 3);

newWine.push(random);

var random = Math.floor(Math.random() * 3);

newWine.push(random);

console.log(newWine);
*/

$('.list-toggle').hide();
$('.list-button').on('click', function () {
  console.log('click');
});