

function afficher_cacher(id)
{
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
    }
    else
    {
        document.getElementById(id).style.visibility="hidden";
    }
    return true;
}

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});

$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

$(document).ready(function() {
    $('select').material_select();
});

$(document).ready(function(){
    $('ul.tabs').tabs();
  });

$(document).ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');
  });

$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15, // Creates a dropdown of 15 years to control year
  labelMonthNext: 'Next month',
  labelMonthPrev: 'Previous month',
  labelMonthSelect: 'Select a month',
  labelYearSelect: 'Select a year',
  monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
  monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
  weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
  weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
  weekdaysLetter: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
  today: 'Today',
  clear: 'Clear',
  close: 'Close'
});

$('a[href^="#"]').click(function(){
    var id = $(this).attr("href");
    var offset = $(id).offset().top
    $('html, body').animate({scrollTop: offset}, 'slow');
    return false;
});

$(function(){
  $(window).scroll(function () {//Au scroll dans la fenetre on déclenche la fonction


    if ($(this).scrollTop() > 600) { //si on a défilé de plus de 520px du haut vers le bas et que nous sommes sur une autre page que home.php

        $('#navigation').addClass("fixNavigation");
        /*$('#navigation').css('opacity', '0.9').css('transition', '0.5s'); //on ajoute la classe "fixNavigation" à <nav id="navigation">*/

      //Ajouter effet transition d'apparition pour navigation
    }
    else {

        $('#navigation').removeClass("fixNavigation");
    	/*$('#navigation').css('opacity', '0').css('transition', '0.5s'); //sinon on retire la classe "fixNavigation" à <nav id="navigation">*/

    }

    if($(this).scrollTop() > 56 ) { //si on a défilé de plus de 1px du haut vers le bas
      if(!$('#banniere').hasClass('flou')) {
        $('#banniere').removeClass("antiflou");
        $('#banniere').addClass("flou");
      }
    } else {
      if($('#banniere').hasClass('flou')) {
        $('#banniere').removeClass("flou");
        $('#banniere').addClass("antiflou");
      }
    }
  });
});
/*
$( document ).ready(function() {

	"use strict";

	$('.employer .hidden-content').hide();
	$('.accordion .tab').on('click', function() {
  	$(this).find('.employer > .hidden-content').slideToggle();
	});


	$('.pie_progress').asPieProgress({
		'namespace': 'pie_progress',
		min: 0,
		max: 100,
		goal: 100, // 100%
		size: 80, // in px
		speed: 40, // speed of 1/100
		barcolor: '#ef1e25',
		barsize: '2',
		trackcolor: '#f2f2f2',
		fillcolor: 'none',
		easing: 'ease'
	});


	$(".service_item").hover(function(){
		$(this).children('.pie_progress').asPieProgress('start');
	});

});
*/
/*$('.service_item').on('click touchend', function(e){
      var $this  = $(this);
      var $popup = $this.children('.service_details').first();
      $this.toggleClass('open').siblings().removeClass('open');
      $popup.css({'margin-left': (-1*(Math.round($popup.outerWidth()/2)))+'px'});
    }).hover(function(e){
      var $this  = $(this);
      var $popup = $this.children('.service_details').first();
      $this.addClass('hover').siblings().removeClass('hover');
      $popup.css({'margin-left': (-1*(Math.round($popup.outerWidth()/2)))+'px'});
    }, function(e){
      $(this).removeClass('hover');
  });*/

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    //Récupération du nom de la page
    var nom=document.location.href;
    nom = nom.split("/");
    nb = nom.length-1;
    nom = nom[nb];

    if ( nom != "home.php") { //si on a défilé de plus de 520px du haut vers le bas et que nous sommes sur une autre page que home.php

      $('#navigation').addClass("allNavigation"); //on ajoute la classe "allNavigation" à <nav id="navigation">
      $('#home').css('opacity', '1');//On affiche le lien vers Accueil qui correspond à la bannière
      $('#logocenter').css('opacity', '1');//On affiche le lien vers Accueil qui correspond à la bannière

    }

  }); // end of document ready

})(jQuery); // end of jQuery name space
