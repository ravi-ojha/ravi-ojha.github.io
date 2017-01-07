//= require_self

// Initialize fluidbox

$(function () {
  $('.fluidbox-trigger').fluidbox();
})

// Initialize scrollreveal

window.sr = ScrollReveal({ reset: true });
sr.reveal('.reveal', {
  distance: '0',
  duration: 500,
  easing: 'ease-in-out',
  origin: 'top',
  scale: 1,
  reset: false,
  viewFactor: 0
});

// Slide Menu

(function() {
    var $body = document.body
    , $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

    if ( typeof $menu_trigger !== 'undefined' ) {
        $menu_trigger.addEventListener('click', function() {
            $body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
        });
    }

}).call(this);


// Initialize headroom for hanburger menu

// grab an element
var myElement = document.querySelector(".menu-trigger");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 
