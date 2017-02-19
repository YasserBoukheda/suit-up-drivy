 /*global Mustache */
'use strict';

var DRIVY = DRIVY || {};

(function starter () {
  var render = function render (actors) {
    var template = document.querySelector('#template').innerHTML;

    Mustache.parse(template);   // optional, speeds up future uses

    var rendered = Mustache.render(template, {'actors': actors});

    document.querySelector('#actors').innerHTML = rendered;
  };

var rederCars= function render( cars) { 
    var template document.querySelector('#templateCars').innerHTML; // On récuprer le texte dans la balise templateCars 
    Mustache.parse(template); //optional, speeds up future uses 

    var rendered = Mustache.render(template, { //Pour mettre les cars dans l'ordre
      'cars': cars.sort (function(a,b) {
          return a.name.localeCompare(b.name);

      }).map(function (car){
          car.pricePerKm=formatMoney(car.pricePerKm);
          car.pricePerDay=formatMoney(car.pricePerDay);
          return car;
      })
    });
}
  var button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    var car = DRIVY.getCar();
    var begin = document.querySelector('.begin').value;
    var end = document.querySelector('.end').value;
    var distance = document.querySelector('.distance').value;
    var option = document.querySelector('.option').checked;

    var actors = DRIVY.payActors(car, begin, end, distance, option);

    render(actors);

    return;
  });
}());
