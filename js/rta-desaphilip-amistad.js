
/* 
 * 
 * Desaphilip Amistad
 *
 */

/* respuestas a Pregunta 1 */
$('#cuestionarioDesaphilipAmistadA .respuesta-01-a, .respuesta-01-b').on('click', function() {
    $('#cuestionarioDesaphilipAmistadA .respuesta-01-a, .respuesta-01-b').removeClass('active-amistad');
    $(this).addClass('active-amistad');
});

/* respuestas a Pregunta 2 */
$('#cuestionarioDesaphilipAmistadB .respuesta-02-a, .respuesta-02-b').on('click', function() {
    $('#cuestionarioDesaphilipAmistadB .respuesta-02-a, .respuesta-02-b').removeClass('active-amistad');
    $(this).addClass('active-amistad');
});

if ( window.screen.availWidth >= 360 && window.screen.availWidth <= 1060) {
    $( ".respuesta-01-a" ).click(function() {
    $( ".fa-check" ).show();
    $( "#emojicAmistadRePorAhiMobile" ).show();
    });

    $( ".respuesta-02-b" ).click(function() {
    $( ".fa-times" ).show();
    $( "#emojicAmistadMePareceQueNoDaMobile" ).show();
    });

}else if ( window.screen.availWidth > 1060 ) {
    $( ".respuesta-01-a" ).click(function() {
    $( ".fa-check" ).show();
    $( "#emojicAmistadRePorAhiDesktop" ).show();
    });

    $( ".respuesta-02-b" ).click(function() {
    $( ".fa-times" ).show();
    $( "#emojicAmistadMePareceQueNoDaDesktop" ).show();
    });
}