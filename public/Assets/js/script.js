$(document).ready(function name(params) {

    $('#icon-1').addClass('show-icon');
    $('#icon-2').addClass('show-icon');
    $('#icon-3').addClass('show-icon');
    $('#icon-4').addClass('show-icon');
    $('#icon-5').addClass('show-icon');

    $('#c-1').addClass('show-icon');
    $('#c-2').addClass('show-btn');

})

$(window).scroll(function () {
    
    var wS = $(this).scrollTop();

    var c1 = $('#content-1').offset().top

    if (wS > c1 + 100) {
        $('#ab-1').addClass('show-icon');
        $('#ab-2').addClass('show-icon');
        $('.navbar').addClass('bg-nav');
    } else if (wS < c1) {
        $('#ab-1').removeClass('show-icon');
        $('#ab-2').removeClass('show-icon');
        $('.navbar').removeClass('bg-nav');
    }

    var aB = $('#about').offset().top
    
    if (wS > aB) {
        $('#icon-6').addClass('show-icon');
        $('#icon-7').addClass('show-icon');
        $('#icon-8').addClass('show-icon');
        $('#icon-9').addClass('show-icon');
        $('#icon-10').addClass('show-icon');
        $('#or-gam').addClass('show-icon');
        $('.heading-3').addClass('show-icon');
        $('.o-img').addClass('show-icon');
        $('.x-img').addClass('show-icon');
    } else if (wS < aB) {
        $('#icon-6').removeClass('show-icon');
        $('#icon-7').removeClass('show-icon');
        $('#icon-8').removeClass('show-icon');
        $('#icon-9').removeClass('show-icon');
        $('#icon-10').removeClass('show-icon');
        $('#or-gam').removeClass('show-icon');
        $('.heading-3').removeClass('show-icon');
        $('.o-img').removeClass('show-icon');
        $('.x-img').removeClass('show-icon');
    }

    var gM = $('#games').offset().top

    if (wS > gM + 100) {
        $('#top').css('opacity', '1');
        $('.card').addClass('show-card');
        $('#head-arc').addClass('show-icon');
    } else if (wS < gM) {
        $('#top').css('opacity', '0');
        $('.card').removeClass('show-card');
        $('#head-arc').removeClass('show-icon');
    }

    var arc = $('#article').offset().top

    if (wS > arc) {
        $('#f-1').addClass('show-icon');
        $('#f-2').addClass('show-btn');
        $('#soc-1').addClass('show-icon');
        $('#soc-2').addClass('show-icon');
        $('#soc-3').addClass('show-icon');
    } else if (wS < arc) {
        $('#f-1').removeClass('show-icon');
        $('#f-2').removeClass('show-btn');
        $('#soc-1').addClass('show-icon');
        $('#soc-2').addClass('show-icon');
        $('#soc-3').addClass('show-icon');
    }

    $('#top').click(function() {
        $("html", "body").animate({scrollTop: 0}, 1300);
    })
    
});