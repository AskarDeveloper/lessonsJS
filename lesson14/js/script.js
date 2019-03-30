$(document).ready(function() {
    $('.main_btna').on('click', function() {
        $('.modal').slideDown('slow');
        $('.overlay').fadeIn('slow');
    });

    $('.main_btn').on('click', function() {
        $('.modal').slideDown('slow');
        $('.overlay').fadeIn('slow');
    });

    $('a:contains("расписания туров")').on('click', function() {
        $('.modal').slideDown('slow');
        $('.overlay').fadeIn('slow');
    });

    $('.close').on('click', function () {
        $('.modal').slideUp('slow');
        $('.overlay').fadeOut('slow');
    });
});