$(document).ready(function() {



    //counter

    // var counter1 = 1;

    // function countPageLoad() {

    //     counter1 = counter1 + 1;

    //     return counter1;
    // }


    // $("#counterDiv").html(countPageLoad());

    ////////////////////////




    // $("#dialog1").dialog({
    //     show: {
    //         effect: 'fade',
    //         duration: 1000
    //     },
    //     hide: {
    //         effect: 'fold',
    //         duration: 1000
    //     },

    //     width: 820,
    //     height: 400,
    //     title: 'Bildiri',


    //     close: function() {
    //         var closeBtn = $('.ui-dialog-titlebar-close');
    //         closeBtn.html('');

    //     }
    // });



    $("#dialog-tablet-btn").on("click", function() {

        // $("#dialog2").css({ 'display': 'none !important' });

        $("#dialog-tablet").fadeOut(800);

    });

    // if ($(window().width() < 680)) {

    //     $("#dialog1-smart").dialog({
    //         show: {
    //             effect: 'fade',
    //             duration: 1000
    //         },
    //         hide: {
    //             effect: 'fold',
    //             duration: 1000
    //         },

    //         width: 220,
    //         height: 500,



    //         close: function() {
    //             var closeBtn = $('.ui-dialog-titlebar-close');
    //             closeBtn.html('');

    //         }
    //     });


    // }



    // $("#dialog1-smart").dialog({
    //     show: {
    //         effect: 'fade',
    //         duration: 1000
    //     },
    //     hide: {
    //         effect: 'fold',
    //         duration: 1000
    //     },

    //     width: 420,
    //     height: 400,



    //     close: function() {
    //         var closeBtn = $('.ui-dialog-titlebar-close');
    //         closeBtn.html('');

    //     }
    // });



    //////////////////////////




    if ($(window).width() < 680) {

        $('body').css({ 'height': '870px' });
        $(this).css({ 'overflow': 'none' });





    }

    $("#darmstadt-btn-smart").on("click", function() {

        document.location.href = "darmstadt.html";
    });

    $("#saz2").on("mouseover", function() {

        // $(this).css({ 'transform': 'translate(50px)' });
        $(this).css({ 'transform': 'scale(1.3)' });
        $(this).css({ 'transition': 'all 1s ease' });
    });

    $("#saz2").on("mouseleave", function() {

        // $(this).css({ 'transform': 'translate(-50px)' });
        $(this).css({ 'transform': 'scale(1)' });
        $(this).css({ 'transition': 'all 1s ease' });
    });


    $("#gitar2").on("mouseover", function() {

        // $(this).css({ 'transform': 'rotate(360deg)' });
        $(this).css({ 'transform': 'scale(1.3)' });
        $(this).css({ 'transition': 'all 1.5s ease' });
    });

    $("#gitar2").on("mouseleave", function() {

        //   $(this).css({ 'transform': 'rotate(360deg)' });
        $(this).css({ 'transform': 'scale(1)' });
        $(this).css({ 'transition': 'all 1s ease' });
    });

    // $("#darmstadt-btn").on("mouseover", function() {

    //     $("#saz2, #gitar2").css({ 'transform': 'scale(1.2)' });
    //     // $("#gitar2").css({ 'transform': 'translate(250px)' });
    //     $("#saz2, #gitar2").css({ 'transition': 'all 1s ease' });

    // });

    // $("#darmstadt-btn").on("mouseleave", function() {

    //     $("#saz2, #gitar2").css({ 'transform': 'scale(1)' });
    //     // $("##gitar2").css({ 'transform': 'translate(-250px)' });
    //     $("#saz2, #gitar2").css({ 'transition': 'all 1s ease' });

    // });


    // $("#dieburg-btn").on("mouseover", function() {

    //     $("#saz2, #gitar2").css({ 'transform': 'scale(1.2)' });
    //     // $("#saz2, #gitar2").css({ 'transform': 'translate(50px)' });
    //     $("#saz2, #gitar2").css({ 'transition': 'all 1s ease' });

    // });

    // $("#dieburg-btn").on("mouseleave", function() {

    //     $("#saz2, #gitar2").css({ 'transform': 'scale(1)' });
    //     // $("#saz2, #gitar2").css({ 'transform': 'translate(-50px)' });
    //     $("#saz2, #gitar2").css({ 'transition': 'all 1s ease' });

    // });



    $("#darmstadt-btn").on("click", function() {

        document.location.href = "darmstadt.html";
    });



    $("#dieburg-btn").on("click", function() {

        document.location.href = "dieburg.html";
    });

    $("#dieburg-btn-smart").on("click", function() {

        document.location.href = "dieburg.html";
    });


    $("#btn1").on("click", function() {


    });

    $('#slider1').cycle({
        //     fx: 'fade',
        //     speed: 1500,
        //     timeout: 5


        fx: 'fade',
        speed: 1500
    });






    //textillate
    $("#textillate1").textillate({

        in: {
            effect: 'flash',
            speed: 300,
            timeout: 4000,


        },
        out: {
            effect: 'flash',
            speed: 300,
            timeout: 4000
        },

        loop: true

    });



    //textillate
    $("#textillate1-smart").textillate({

        in: {
            effect: 'tada',
            speed: 50

        },
        out: {
            effect: 'flash',
            speed: 50
        },

        loop: true

    });







    $("#solanahtar").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });
        $("#tür2").css({ 'transform': 'scale(0.8)' });
        $("#tür2").css({ 'transition': 'all 0.4s ease' });

        $("#solanahtar").css({ 'transform': 'rotate(60deg)' });
        $("#solanahtar").css({ 'transition': 'all 0.5s ease' });
    });

    $("#solanahtar").on("mouseleave", function() {

        $("#tür2").css({ 'transform': 'scale(0.5)' });

        $("#solanahtar").css({ 'transform': 'rotate(0deg)' });
        $("#solanahtar").css({ 'transition': 'all 0.5s ease' });

    });


});