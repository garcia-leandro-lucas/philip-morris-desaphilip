$(document).ready(function () {
    $("#popDeInstruccionesMobile").delay(2000).fadeIn();
    $('#popDeInstruccionesMobileClose').click(function (e) // You are clicking the close button
        {
            $('#popDeInstruccionesMobile').fadeOut(); // Now the pop up is hiden.
        });
    $('#popDeInstruccionesMobile').click(function (e) {
        $('#popDeInstruccionesMobile').fadeOut();
    });
});
