//slide-scroll

$('.fa-arrow-right').click(function() {
    var leftPos = $('#main').scrollLeft();
    $('#main').animate({
        scrollLeft: leftPos + 300
    }, 500);
});
$('.fa-arrow-left').click(function() {
    var leftPos = $('#main').scrollLeft();
    $('#main').animate({
        scrollLeft: leftPos - 300
    }, 500);
});

//anim arrow
$('.fa-arrow-left').click(function() {
    $('.fa-arrow-left').animate({
        left: '20px'
    }, 200, () => {
        $('.fa-arrow-left').animate({
            left: '0'
        });
    });
});

$('.fa-arrow-right').click(function() {
    $('.fa-arrow-right').animate({
        right: '20px'
    }, 200, () => {
        $('.fa-arrow-right').animate({
            right: '0'
        });
    });
});