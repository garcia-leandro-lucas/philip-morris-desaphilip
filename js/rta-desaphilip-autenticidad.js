/* 
 * 
 * Desaphilip Autenticidad
 *
 */

/* respuestas a Pregunta 1 */
$('#cuestionarioDesaphilipAutenticidadA .respuesta-01-a, .respuesta-01-b').on('click', function() {
    $('#cuestionarioDesaphilipAutenticidadA .respuesta-01-a, .respuesta-01-b').removeClass('active-autenticidad');
    $(this).addClass('active-autenticidad');
});

/* respuestas a Pregunta 2 */
$('#cuestionarioDesaphilipAutenticidadB .respuesta-02-a, .respuesta-02-b').on('click', function() {
    $('#cuestionarioDesaphilipAutenticidadB .respuesta-02-a, .respuesta-02-b').removeClass('active-autenticidad');
    $(this).addClass('active-autenticidad');
});

if ( window.screen.availWidth >= 360 && window.screen.availWidth <= 1060) {
    $( ".respuesta-01-a" ).click(function() {
    $( ".fa-check" ).show();
    $( "#emojicAutenticidadRePorAhiMobile" ).show();
    });

    $( ".respuesta-02-b" ).click(function() {
    $( ".fa-times" ).show();
    $( "#emojicAutenticidadMePareceQueNoDaMobile" ).show();
    });

}else if ( window.screen.availWidth > 1060 ) {
    $( ".respuesta-01-a" ).click(function() {
    $( ".fa-check" ).show();
    $( "#emojicAutenticidadRePorAhiDesktop" ).show();
    });

    $( ".respuesta-02-b" ).click(function() {
    $( ".fa-times" ).show();
    $( "#emojicAutenticidadMePareceQueNoDaDesktop" ).show();
    });
}