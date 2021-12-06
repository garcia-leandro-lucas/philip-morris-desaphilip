/* respuestas a Pregunta 1 */
$('#cuestionarioDesaphilipAmistadA .respuesta-01-a, .respuesta-01-b').on('click', function() {
    $('#cuestionarioDesaphilipAmistadA .respuesta-01-a, .respuesta-01-b').removeClass('active-amistad');
    $(this).addClass('active-amistad');
});

if ( window.innerWidth <= '360px' ) {
    $( ".respuesta-01-a" ).click(function() {
    $( ".fa-check" ).show( "slow" );
    $( "#emojicAmistadRePorAhiMobile" ).show( "slow" );
    });
}else {
    $( ".respuesta-01-a" ).click(function() {
    $( ".fa-check" ).show( "slow" );
    $( "#emojicAmistadRePorAhiDesktop" ).show( "slow" );
    });
}

/* respuestas a Pregunta 2 */
$('#cuestionarioDesaphilipAmistadB .respuesta-02-a, .respuesta-02-b').on('click', function() {
    $('#cuestionarioDesaphilipAmistadB .respuesta-02-a, .respuesta-02-b').removeClass('active-amistad');
    $(this).addClass('active-amistad');
});