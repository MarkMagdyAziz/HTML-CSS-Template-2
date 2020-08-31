/* gloabal , alert , console */
$(function () {
'use strict';

// Change header height
$('.header').height($(window).height())

/* Scroll to Features */
$('.header .arrow i').click(function(){
    $('html,body').animate({
        scrollTop: $('.features').offset().top
    },1000);
});
// SHow Hidden ittems from our work
/*$('.show-more').click(function()){
    $('.our-work .hidden').fadeIn(3000);
});*/
});