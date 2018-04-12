// `jQuery(OBJECT)` and `$(OBJECT)` are identical
// our very first callback function
$(document).ready(onReady);

console.log('jQuery Intro Lecture');

function onReady() {
    console.log('jQuery is ready');
    $('h1').css('color', 'red');
    $('h1').addClass('funny')

    // getters and setters
    console.log($('h2').text()); // get text value of h2
    $('h2').text('You have been set!!!');

    // inputs (also, getter and setter)
    $('#nameInput').val('Shely');
    console.log($('#nameInput').val());

    // events
    // event handler
    $('#clickableButton').on('click', function() {
        console.log($('#nameInput').val());
    });
    $('#secondButton').on('click', function() {
        console.log('I was clicked!');
    });
}
