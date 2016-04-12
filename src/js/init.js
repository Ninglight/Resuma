// Google Maps

function initMap() {
    var myLatLng = {lat: 47.2172500, lng: -1.5533600};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 12
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Hello World!'
    });
}

$(document).ready(function() {

	var isDraggable = true;
	var isMobile = false;

	if (isMobileAndTablet()) {
		isDraggable = false;
		isMobile = true;
	}

	// Materialize Initialisation
    $('.button-collapse').sideNav();

	$('.parallax').parallax();

	$('ul.tabs').tabs();

	$('.scrollspy').scrollSpy();

	$('ul.tabs').tabs('select_tab', 'tab_id');

	$('.modal-trigger').leanModal();

	$('select').material_select();

	$('.collapsible').collapsible({
		accordion : false
	});


/*
	//Google Maps
	$('#map').gmap3({
		marker: {
			address: "Nantes, France",
			options: {
				icon: "img/location.png"
			}
		},
		map: {
			options: {
				zoom: 14,
				scrollwheel: false,
				draggable: isDraggable
			}
		}
	});
*/
	checkScroll($(window).scrollTop());

	$(window).scroll(function () { //Au scroll dans la fenetre on déclenche la fonction
		checkScroll(this.scrollY);
	});

	if (is_touch_device()) {
		$('#nav-mobile').css({
			overflow: 'auto'
		});
	}
/*
	$('#formulaire').submit(function (event) {
	// Stop form from submitting normally
	event.preventDefault();

	//var recaptchaResponse = $('#g-recaptcha-response').val();
	var message = $('#message').val();
	var email = $('#email').val();
	var nom = $('#last_name').val();
	var prenom = $('#first_name').val();

	$.ajax({
		type: "POST",
		url: "form",
		data: {
			"prenom": prenom,
			"nom": nom,
			"email": email,
			"message": message,
			//"recaptcha": recaptchaResponse
		},
		dataType: "json",
		success: function (data) {
			if (data.status == 'success') {
				setFlash(data.status, data.libelle);
				document.getElementById("formulaire").reset();
			} else {
				setFlash(data.status, data.libelle);
			}
		}
	});

*/
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
/*
$('a[href^="#"]').click(function(){
	var id = $(this).attr("href");
	var offset = $(id).offset().top
	$('html, body').animate({scrollTop: offset}, 'slow');
	return false;
});
*/


function checkScroll(pos) {
	//si on a défilé de plus de 550px du haut vers le bas
	if (pos > document.getElementById('accueil').offsetHeight) {
		//on ajoute la classe "fixNavigation" à <nav id="navigation">
		$('#navigation').addClass("fixNavigation");
		$('#about').css('margin-top', '64px');
	} else {
		//sinon on retire la classe "fixNavigation" à <nav id="navigation">
		$('#navigation').removeClass("fixNavigation");
		$('#about').css('margin-top', 'auto');
	}
}

function is_touch_device() {
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch (e) {
		return false;
	}
}

function isMobileAndTablet() {
	var check = false;
	(function (a) {
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check;
}

$(function(){
	$(window).scroll(function () {//Au scroll dans la fenetre on déclenche la fonction
	//
	//
	//     if ($(this).scrollTop() > 620) { //si on a défilé de plus de 520px du haut vers le bas et que nous sommes sur une autre page que home.php
	//
	//         $('#navigation').addClass("fixNavigation");
	//         /*$('#navigation').css('opacity', '0.9').css('transition', '0.5s'); //on ajoute la classe "fixNavigation" à <nav id="navigation">*/
	//
	//         //Ajouter effet transition d'apparition pour navigation
	//     }
	//     else {
	//
	//         $('#navigation').removeClass("fixNavigation");
	//         /*$('#navigation').css('opacity', '0').css('transition', '0.5s'); //sinon on retire la classe "fixNavigation" à <nav id="navigation">*/
	//
	//     }
	//
	    if($(this).scrollTop() > 56 ) { //si on a défilé de plus de 1px du haut vers le bas
	        if(!$('#banniere').hasClass('headBlur')) {
	            $('#banniere').removeClass('headInit');
	            $('#banniere').addClass('headBlur');
	        }
	    } else {
	        if($('#banniere').hasClass('headBlur')) {
	            $('#banniere').removeClass('headBlur');
	            $('#banniere').addClass('headInit');
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

// (function($){
//     $(function(){
//
//
//
//         //Récupération du nom de la page
//         var nom=document.location.href;
//         nom = nom.split("/");
//         nb = nom.length-1;
//         nom = nom[nb];
//
//         if ( nom != "home.php") { //si on a défilé de plus de 520px du haut vers le bas et que nous sommes sur une autre page que home.php
//
//             $('#navigation').addClass("allNavigation"); //on ajoute la classe "allNavigation" à <nav id="navigation">
//             $('#home').css('opacity', '1');//On affiche le lien vers Accueil qui correspond à la bannière
//             $('#logocenter').css('opacity', '1');//On affiche le lien vers Accueil qui correspond à la bannière
//
//         }
//
//     }); // end of document ready
//
// })(jQuery); // end of jQuery name space
