$(function () {
    
    'use strict';

    
    // event newsletter
    $('.form-control').focus(function () {
       $(this).css('border-color', '#ff6a37');
       $('.fa-envelope').css('background-color', '#ff6a37');
    });

     $('.form-control').blur(function () {
       $(this).css('border-color', '#fabc25');
       $('.fa-envelope').css('background-color', '#fabc25');
    });
    
    
    // event more post
    
    function chackcontent(){
        $('.contents:first').hasClass('active') ? $('#more #prev').fadeOut() : $('#more #prev').fadeIn();
        $('.contents:last').hasClass('active') ? $('#more #next').fadeOut() : $('#more #prev').fadeIn();
    }
    chackcontent();
    
    function chacki(){
         $('#more span:first').hasClass('active-cont') ? $('#more #prev').fadeOut() : $('#more #prev').fadeIn();
         $('#more span:last').hasClass('active-cont') ? $('#more #next').fadeOut() : $('#more #next').fadeIn();
    }
    chacki();
     var getides = $(this).attr("id");
    $("#more span").click(function () { 
        var getides = $(this).attr("id");
        $(this).addClass('active-cont').siblings().removeClass('active-cont');
        $("#content-" + getides).addClass("active").removeClass("hidden").siblings().addClass("hidden").removeClass("active");
        chacki();
    });

    $("#more i").click(function () {
    if($(this).hasClass('next')){
        
        $('#more .active-cont').removeClass('active-cont').next('span').addClass('active-cont');
        var ShowPost = $('.active-cont').attr("id");
        $("#content-" + ShowPost).addClass("active").removeClass("hidden").siblings().addClass("hidden").removeClass("active");
        chacki();
    }
    
    if($(this).hasClass('prev')){
        $('#more .active-cont').removeClass('active-cont').prev('span').addClass('active-cont');
        var ShowPost = $('.active-cont').attr("id");
        $("#content-" + ShowPost).addClass("active").removeClass("hidden").siblings().addClass("hidden").removeClass("active");
        chacki();
    }
    });
}); 