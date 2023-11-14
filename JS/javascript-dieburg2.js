$(document).ready(function() {


    //----------------------------------------

    $("#slider-smart").cycle({

        fx: 'fade',
        speed: 1000,
        timeout: 1000

    });

    //----------------------------------------
    $("#iletisim-smart-btn").on("click", function() {


        $("#iletisim-smart").toggle("fade", 1000);


        $("#ders-saatleri-smart").hide("fade", 1000);
        $("#ders-ücretleri-smart").hide("fade", 1000);
        $("#fotograf-galeri-smart").hide("fade", 1000);
        $("#video-smart").hide("fade", 1000);
    });

    //----------------------------------------

    $("#videolar-smart-btn").on("click", function() {


        $("#video-smart").toggle("fade", 1000);


        $("#ders-saatleri-smart").hide("fade", 1000);
        $("#ders-ücretleri-smart").hide("fade", 1000);
        $("#fotograf-galeri-smart").hide("fade", 1000);
        $("#iletisim-smart").hide("fade", 1000);
    });

    //----------------------------------------


    $("#ana-sayfa-btn > a").on("click", function() {

        $("#ders-saatleri-smart").hide("fade", 1000);
        $("#ders-ücretleri-smart").hide("fade", 1000);
        $("#fotograf-galeri-smart").hide("fade", 1000);
        $("#video-smart").hide("fade", 1000);
        $("#iletisim-smart").hide("fade", 1000);

    });

    //----------------------------------------

    $("#ders-saatleri-smart-btn > a").on("click", function() {


        $("#ders-saatleri-smart").toggle("slide", 1000);

        $("#ders-ücretleri-smart").hide("fade", 1000);
        $("#fotograf-galeri-smart").hide("fade", 1000);
        $("#video-smart").hide("fade", 1000);

    });


    //----------------------------------------

    $("#ders-ücretleri-smart-btn > a").on("click", function() {


        $("#ders-ücretleri-smart").toggle("size", 1000);

        $("#ders-saatleri-smart").hide("fade", 1000);
        $("#fotograf-galeri-smart").hide("fade", 1000);
        $("#video-smart").hide("fade", 1000);

        $("#logo-MüzikEvi-smart").css('display', 'none');



    });

    //----------------------------------------

    $("#fotograf-smart-btn > a").on("click", function() {


        $("#fotograf-galeri-smart").toggle("slide", 1000);

        $("#ders-ücretleri-smart").hide("fade", 1000);
        $("#video-smart").hide("fade", 1000);

    });



    //----------------------------------------

    var img1flag = false;
    $("#img1").on("click", function() {
        if (img1flag === false) {

            img1flag = true;
            $("#img1").css({ 'transform': 'scale(2.3)', 'margin-left': '255px', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img1").css({ 'z-index': '9999' });
            $("#img2, #img3").css({ 'z-index': '9' });

        } else {

            img1flag = false;
            $("#img1").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });

    $("#img1").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    });


    //-----------------------------------------------------------------------

    var img2flag = false;
    $("#img2").on("click", function() {
        if (img2flag === false) {

            img2flag = true;
            $("#img2").css({ 'transform': 'scale(2.3)', 'margin-left': '5px', 'z-index': '999999999999', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img2").css({ 'z-index': '9999999999999999' });
            $("#img1, #img3").css({ 'z-index': '9' });

        } else {

            img2flag = false;
            $("#img2").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });

    $("#img2").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    });





    //--------------------------------------------------------


    var img3flag = false;
    $("#img3").on("click", function() {
        if (img3flag === false) {

            img3flag = true;
            $("#img3").css({ 'transform': 'scale(2.3)', 'margin-left': '-225px', 'z-index': '999999999999', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img3").css({ 'z-index': '9999999999999999' });
            $("#img1, #img2").css({ 'z-index': '9' });

        } else {

            img3flag = false;
            $("#img3").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });

    $("#img3").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    });



    //--------------------------------------------------------


    var img4flag = false;
    $("#img4").on("click", function() {
        if (img4flag === false) {

            img4flag = true;
            $("#img4").css({ 'transform': 'scale(2.3)', 'margin-left': '225px', 'z-index': '999999999999', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img4").css({ 'z-index': '9999999999999999' });
            $("#img1, #img2, #img3, #img7, #img5").css({ 'z-index': '9' });

        } else {

            img4flag = false;
            $("#img4").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });

    $("#img4").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    });




    //--------------------------------------------------------


    var img5flag = false;
    $("#img5").on("click", function() {
        if (img5flag === false) {

            img5flag = true;
            $("#img5").css({ 'transform': 'scale(2.3)', 'margin-left': '0px', 'z-index': '999999999999', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img5").css({ 'z-index': '9999999999999999' });
            $("#img1, #img2, #img3, #img4, #img6").css({ 'z-index': '9' });

        } else {

            img5flag = false;
            $("#img5").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });

    $("#img5").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    });

    //--------------------------------------------------------


    var img6flag = false;
    $("#img6").on("click", function() {
        if (img6flag === false) {

            img6flag = true;
            $("#img6").css({ 'transform': 'scale(2.3)', 'margin-left': '-225px', 'z-index': '999999999999', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img6").css({ 'z-index': '9999999999999999' });
            $("#img1, #img2, #img3, #img4, #img5, #img7").css({ 'z-index': '9' });

        } else {

            img6flag = false;
            $("#img6").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });

    $("#img6").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    });


    //--------------------------------------------------------


    var img7flag = false;
    $("#img7").on("click", function() {
        if (img7flag === false) {

            img7flag = true;
            $("#img7").css({ 'transform': 'scale(2.3)', 'margin-left': '225px', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img7").css({ 'z-index': '9999999999999999' });
            $("#img1, #img2, #img3, #img4, #img5, #img6, #img8, #img9").css({ 'z-index': '9' });

        } else {

            img7flag = false;
            $("#img7").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });


    $("#img7").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    });


    //--------------------------------------------------------


    var img8flag = false;
    $("#img8").on("click", function() {
        if (img8flag === false) {

            img8flag = true;
            $("#img8").css({ 'transform': 'scale(2.3)', 'margin-left': '0px', 'z-index': '999999999999', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img8").css({ 'z-index': '9999999999999999' });
            $("#img1, #img2, #img3, #img4, #img5, #img6,#img7, #img9").css({ 'z-index': '9' });

        } else {

            img8flag = false;
            $("#img8").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });

    $("#img8").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    });

    //--------------------------------------------------------


    var img9flag = false;
    $("#img9").on("click", function() {
        if (img9flag === false) {

            img9flag = true;
            $("#img9").css({ 'transform': 'scale(2.3)', 'margin-left': '-225px', 'z-index': '999999999999', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img9").css({ 'z-index': '9999999999999999' });
            $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8").css({ 'z-index': '9' });

        } else {

            img9flag = false;
            $("#img9").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });

    $("#img9").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    }); //--------------------------------------------------------


    var img10flag = false;
    $("#img10").on("click", function() {
        if (img10flag === false) {

            img10flag = true;
            $("#img10").css({ 'transform': 'scale(2.3)', 'margin-left': '225px', 'z-index': '999999999999', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img10").css({ 'z-index': '9999999999999999' });
            $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img11, #img12").css({ 'z-index': '9' });

        } else {

            img10flag = false;
            $("#img10").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });

    $("#img10").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    });


    //--------------------------------------------------------


    var img11flag = false;
    $("#img11").on("click", function() {
        if (img11flag === false) {

            img11flag = true;
            $("#img11").css({ 'transform': 'scale(2.3)', 'margin-left': '0px', 'z-index': '999999999999', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img11").css({ 'z-index': '9999999999999999' });
            $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10, #img12").css({ 'z-index': '9' });

        } else {

            img11flag = false;
            $("#img11").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });

    $("#img11").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    });


    //--------------------------------------------------------


    var img12flag = false;
    $("#img12").on("click", function() {
        if (img12flag === false) {

            img12flag = true;
            $("#img12").css({ 'transform': 'scale(2.3)', 'margin-left': '-225px', 'z-index': '999999999999', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img12").css({ 'z-index': '9999999999999999' });
            $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10, #img11").css({ 'z-index': '9' });

        } else {

            img12flag = false;
            $("#img12").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });

    $("#img12").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    });




    //--------------------------------------------------------


    var img13flag = false;
    $("#img13").on("click", function() {
        if (img13flag === false) {

            img13flag = true;
            $("#img13").css({ 'transform': 'scale(2.3)', 'margin-left': '225px', 'z-index': '999999999999', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img13").css({ 'z-index': '9999999999999999' });
            $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10, #img11,#img14, #img15").css({ 'z-index': '9' });

        } else {

            img13flag = false;
            $("#img13").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });

    $("#img13").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    });


    //--------------------------------------------------------


    var img14flag = false;
    $("#img14").on("click", function() {
        if (img14flag === false) {

            img14flag = true;
            $("#img14").css({ 'transform': 'scale(2.3)', 'margin-left': '0px', 'z-index': '999999999999', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img14").css({ 'z-index': '9999999999999999' });
            $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10, #img11,#img12, #img13, #img15").css({ 'z-index': '9' });

        } else {



            img14flag = false;
            $("#img14").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });

    $("#img14").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    });


    //--------------------------------------------------------


    var img15flag = false;
    $("#img15").on("click", function() {
        if (img15flag === false) {

            img15flag = true;
            $("#img15").css({ 'transform': 'scale(2.3)', 'margin-left': '-225px', 'z-index': '999999999999', 'transition': 'all 1s ease', 'border': '5px solid orange' });

            $("#img15").css({ 'z-index': '9999999999999999' });
            $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10, #img11,#img12, #img13, #img14").css({ 'z-index': '9' });

        } else {



            img15flag = false;
            $("#img15").css({ 'transform': 'scale(1)', 'margin-left': '', 'transition': 'all 1s ease', 'border': '' });

        }


    });

    $("#img15").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });

    });



    //--------------------------------------------------------

    if ($(window).width() < 1050) {

        $("#gitar-kücük").css({ 'transform': 'rotate(-60deg)' });
        // alert("window width alert");
        // $("#gitar-kücük").attr('src', 'IMG/solanahtar.png');
    }


    $(".fotograf-galeri-ul>li>img").on("click", function() {
        alert();
        $(this).css({ 'cursor': 'pointer' });

    });


    //////////////////////maske 1-----///////////////////////////
    $("#maske1").on("mouseover", function() {

        // $("#line1").show(300);
        $("#ders-saatleri").hide();


        // $("#show-div1").show();
        $(this).css({ 'cursor': 'pointer' });
        // $("#liste-ul>li:nth-child(1)>a").css({ 'color': 'rgb(86, 137, 202)' });
        // $("#liste-ul>li:nth-child(1)>a").css({ 'color': '#94ff00' });

        // $("#liste-ul>li:nth-child(1)>a").css({ 'transform': 'scale(1.3)' });
        // $("#liste-ul>li:nth-child(1)>").css({ 'transition': 'all 0.4s ease' });


    });

    $("#maske1").on("mouseleave", function() {

        $("#liste-ul>li:nth-child(1)>a").css({ 'color': '' });

        $("#line1").hide(300);
        $("#main1").show();




    });




    $("#maske1").on("click", function() {


        maskeFlag = false;

        $("#slider-dieburg").show();
        $("#main2").hide();

        $("#fotograf-galeri").hide();
        $("#video-galeri").hide();
        $("#ders-ücretleri").hide();
        $("#iletisim").hide(300);


    });


    //////////////////////maske 2-----///////////////////////////



    $("#maske2").on("mouseover", function() {

        //$("#line2").show(300);
        $(this).css({ 'cursor': 'pointer' });
        $("#liste-ul>li:nth-child(2)>a").css({ 'color': '#94ff00' });

    });

    $("#maske2").on("mouseleave", function() {


        $("#line2").hide(300);

        $("#liste-ul>li:nth-child(2)>a").css({ 'color': '' });

        // $("#main1").show();
    });



    $("#maske2").on("click", function() {

        $("#main2").toggle("blind", 1000);

        $("#iletisim").hide(300);
        $("#ders-ücretleri").hide();
        $("#video-galeri").hide();
        $("#fotograf-galeri").hide();

    });


    //////////////////////maske 3----///////////////////////////


    $("#maske3").on("mouseover", function() {

        //$("#line3").toggle(300);

        $(this).css({ 'cursor': 'pointer' });
        // $("#liste-ul>li:nth-child(3)>a").css({ 'color': 'rgb(86, 137, 202)' });
        $("#liste-ul>li:nth-child(3)>a").css({ 'color': '#94ff00' });

    });

    $("#maske3").on("mouseleave", function() {


        $("#line3").hide(300);


        $("#liste-ul>li:nth-child(3)>a").css({ 'color': '' });

    });

    var maske3Flag = false;
    $("#maske3").on("click", function() {

        $("#ders-ücretleri").toggle("clip", 600);

        $("#main2").hide();
        $("#video-galeri").hide();
        $("#fotograf-galeri").hide();
        $("#iletisim").hide(300);

    });


    $("#ders-ücretleri").on("mouseover", function() {

        $(this).css({ 'display': 'block' });
    });


    $("#ders-ücretleri").on("mouseleave", function() {

        $(this).css({ 'display': 'none' });
    });


    //////////////////////maske 4-----///////////////////////////

    $("#maske4").on("mouseover", function() {

        //$("#line4").show("300");
        $(this).css({ 'cursor': 'pointer' });
        // $("#liste-ul>li:nth-child(4)>a").css({ 'color': 'rgb(86, 137, 202)' });
        $("#liste-ul>li:nth-child(4)>a").css({ 'color': '#94ff00' });

    });

    $("#maske4").on("mouseleave", function() {


        $("#line4").hide(300);


        $("#liste-ul>li:nth-child(4)>a").css({ 'color': '' });

    });

    $("#maske4").on("click", function() {

        $("#fotograf-galeri").toggle("slide", 700, function() {
            // alert();
        });

        $("#main2").hide();
        $("#video-galeri").hide();
        $("#iletisim").hide(300);
        $("#ders-ücretleri").hide();

    });


    //////////////////////maske 5-----///////////////////////////

    $("#maske5").on("mouseover", function() {

       // $("#line5").show(300);
        $(this).css({ 'cursor': 'pointer' });
        // $("#liste-ul>li:nth-child(5)>a").css({ 'color': 'rgb(86, 137, 202)' });
        $("#liste-ul>li:nth-child(5)>a").css({ 'color': '#94ff00' });

    });

    $("#maske5").on("mouseleave", function() {


        $("#line5").hide(300);


        $("#liste-ul>li:nth-child(5)>a").css({ 'color': '' });

    });


    $("#maske5").on("click", function() {

        $("#video-galeri").toggle("blind", 1000);

        $("#fotograf-galeri").hide();
        $("#main2").hide();
        $("#iletisim").hide(300);
        $("#ders-ücretleri").hide();

    });




    //////////////////////maske 6-----///////////////////////////

    $("#maske6").on("mouseover", function() {

       // $("#line6").show(300);
        $(this).css({ 'cursor': 'pointer' });
        // $("#liste-ul>li:nth-child(6)>a").css({ 'color': 'rgb(86, 137, 202)' });
        $("#liste-ul>li:nth-child(6)>a").css({ 'color': '#94ff00' });

    });

    $("#maske6").on("mouseleave", function() {


        $("#line6").hide(300);


        $("#liste-ul>li:nth-child(6)>a").css({ 'color': '' });

    });


    $("#maske6").on("click", function() {

        $("#iletisim").toggle("size", 1000);

        $("#main2").hide();
        $("#video-galeri").hide();
        $("#fotograf-galeri").hide();
        $("#ders-ücretleri").hide();

    });





    //////////////////////maske///////////////////////////

    //end of line------

    $("#slider-dieburg").cycle({

        fx: 'fade',
        speed: 1000,
        timeout: 1000

    });


    $("#slider-dieburg-tablet").cycle({

        fx: 'fade',
        speed: 1000,
        timeout: 1000

    });


    // if ($(window).width() < 850) {

    //     $("#saz22").attr('src', '../IMG/saz-kücük.png');
    // }


    //textillate
    $("#textillate-darmstadt").textillate({

        loop: true,

        in: {
            effect: 'rotateIn',

        },

        out: {
            effect: 'bounceOut'
        }

    });



    $("#textillate-darmstadt-tablet").textillate({

        loop: true,

        in: {
            effect: 'rotateIn',

        },

        out: {
            effect: 'bounceOut'
        }

    });

    $("#ileti").textillate({

        loop: true,

        in: {
            effect: 'flip',

        },

        out: {
            effect: 'wobble'
        }

    });


    $("#ileti-tablet").textillate({

        loop: true,

        in: {
            effect: 'flip',

        },

        out: {
            effect: 'wobble'
        }

    });




    $("#liste-ul-tablet > li:nth-child(1)").on("click", function() {



        $("#map-tablet").show();
        $("#ileti-tablet2").show();

        // $("#slider-dieburg").show();
        $("#ders-saatleri-tablet").hide(300);
        $("#ders-ücretleri-tablet").hide(300);

        $("#fotograf-galeri-tablet").hide();
        $("#video-galeri-tablet").hide();

        $("#iletisim-tablet").hide(300);



    });

    $("#liste-ul-tablet > li:nth-child(2)").on("click", function() {

        $("#map-tablet").hide();
        $("#ileti-tablet2").hide();
        // $("#ileti-tablet2").css({ 'margin-top': '800px' });
        $('body').css({ 'height': '1400px' });

        $("#ders-saatleri-tablet").toggle("clip", 1000);

        $("#fotograf-galeri-tablet").hide();
        $("#video-galeri-tablet").hide();
        $("#ders-ücretleri-tablet").hide();
        $("#iletisim-tablet").hide(300);


    });


    $("#liste-ul-tablet > li:nth-child(3)").on("click", function() {


        // $("#slider-dieburg").show();
        $("#ders-ücretleri-tablet").toggle("slide", 1000);
        $("#ders-saatleri-tablet").hide();
        // $("#ileti-tablet2").show();

        $("#fotograf-galeri-tablet").hide();
        $("#video-galeri-tablet").hide();

        $("#iletisim-tablet").hide(300);


    });



    $("#liste-ul-tablet > li:nth-child(4)").on("click", function() {


        $("#fotograf-galeri-tablet").toggle("size", 1000);



        $("#ders-ücretleri-tablet").hide();
        $("#ders-saatleri-tablet").hide();
        $("#ileti-tablet2").show();



        $("#video-galeri-tablet").hide();

        $("#iletisim-tablet").hide(300);


    });


    $("#liste-ul-tablet > li:nth-child(5)").on("click", function() {


        $("#video-galeri-tablet").toggle("slide", 1000);



        $("#ders-ücretleri-tablet").hide();
        $("#ders-saatleri-tablet").hide();
        $("#ileti-tablet2").show();
        $("#iletisim-tablet").hide(300);


    });


    $("#liste-ul-tablet > li:nth-child(6)").on("click", function() {


        $("#iletisim-tablet").toggle("size", 1000);



        $("#ders-ücretleri-tablet").hide();
        $("#ders-saatleri-tablet").hide();
        $("#ileti-tablet2").show();
        $("#video-galeri-tablet").hide();
        $("#fotograf-galeri-tablet").hide();


    });


}); ///////////////////////////////////////////