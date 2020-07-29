/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
//import '../css/app.scss'; 
import '../scss/app.scss';

 
// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
//import $ from 'jquery';
const $ = require('jquery');
 

// the bootstrap module doesn't export/return anything 
import 'bootstrap';
/*
$(document).ready(function() {
    $('body').prepend('<h1>Hello Web Pack ENcore by Jquery !!</h1>');
    $('[data-toggle="popover"]').popover();
});*/
console.log('Hello Webpack Encore! Edit me in assets/js/app.js');  
     

$('a.smooth_scroll').on("click", function (e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50
    }, 1000);
    });

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-to-top").style.display = "block";
    } else {
        document.getElementById("scroll-to-top").style.display = "none";
    }
}

    