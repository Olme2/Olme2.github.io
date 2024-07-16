jQuery( document ).ready(function( $ ) {


	"use strict";


		$('.owl-carousel').owlCarousel({
		    items:4,
		    lazyLoad:true,
		    loop:false,
		    dots:true,
		    margin:20,
		    responsiveClass:true,
			    responsive:{
			        0:{
			            items:1,
			        },
			        600:{
			            items:2,
			        },
			        1000:{
			            items:4,
			        }
			    }
		});

		/* activate jquery isotope */
		  var $container = $('.posts').isotope({
		    itemSelector : '.item',
		    isFitWidth: true
		  });

		  $(window).smartresize(function(){
		    $container.isotope({
		      columnWidth: '.col-sm-3'
		    });
		  });
		  
		  $container.isotope({ filter: '*' });

		    // filter items on button click
		  $('#filters').on( 'click', 'button', function() {
		    var filterValue = $(this).attr('data-filter');
		    $container.isotope({ filter: filterValue });
		});


		$('#carousel').flexslider({
		    animation: "slide",
		    controlNav: false,
		    animationLoop: false,
		    slideshow: false,
		    itemWidth: 210,
		    itemMargin: 5,
		    asNavFor: '#slider'
		});
		$('#slider').flexslider({
		    animation: "slide",
		    controlNav: false,
		    animationLoop: false,
		    slideshow: false,
		    sync: "#carousel"
		});
 
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.slide-up');
    
    function checkPosition() {
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Verificar la posición al cargar la página
});

document.addEventListener('DOMContentLoaded', function() {
    const fotos = document.querySelectorAll('.fotoProducto');
    
    function showFotos() {
        fotos.forEach(foto => {
            const position = foto.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                foto.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', showFotos);
    showFotos(); // Verificar la posición al cargar la página
});

document.querySelectorAll('.autolink').forEach(function(element) {
	element.addEventListener('click', function(event) {
	  event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
	});
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const carruselItems = document.querySelectorAll('.owl-carousel.owl-theme .featured-item');
const itemsArray = Array.from(carruselItems);
const elementosAleatorios = shuffleArray(itemsArray);
document.querySelectorAll('.owl-carousel.owl-theme')[0].innerHTML = '';
elementosAleatorios.forEach(function(element) {
    document.querySelectorAll('.owl-carousel.owl-theme')[0].appendChild(element);
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});