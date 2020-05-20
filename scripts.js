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