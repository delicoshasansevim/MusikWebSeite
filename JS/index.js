
$(document).ready(function(){


 // textillate1-------//
    $("#textillate1").textillate({

        in: {
            effect: 'flip',
            speed: 300,
            timeout: 4000,


        },
        out: {
            effect: 'flash',
            speed: 600,
            timeout: 4000
        },

        loop: true

    });




    //slider-labtop--------//

$('#slider-labtop').cycle({
    fx: 'fade',       
    easing:  'easeInOutBack',

    speed: 1700
});

/*türkisch flags*/ 
$("#türkisch-flag").on("mouseover", function(){

    $(this).css({"transform":"scale(1.3)"})
           .css({"transition":"all 0.2s ease-in-out"})
           .css({"cursor":"pointer"});
});

$("#türkisch-flag").on("mouseleave", function(){

    $(this).css({"transform":"scale(1)"})
           .css({"transition":"all 0.2s ease-in-out"});
});

/*german flag*/ 
$("#german-flag").on("mouseover", function(){

    $(this).css({"transform":"scale(1.3)"})
           .css({"transition":"all 0.2s ease-in-out"})
           .css({"cursor":"pointer"});
});

$("#german-flag").on("mouseleave", function(){

    $(this).css({"transform":"scale(1)"})
           .css({"transition":"all 0.2s ease-in-out"});
});

/*click flags*/ 
$("#türkisch-flag").on("click", function(){

    document.location.href= "index.html";
});

$("#german-flag").on("click", function(){

    document.location.href= "deutsch-index.html";
});


//button mouseover darmstadt
$("#btn-darmstadt").on("mouseover", function(){

    $(this).css({"background-color":"lightblue", "transform":"scale(1.08)","transtion":"all 1s ease-in-out"});
});

$("#btn-darmstadt").on("mouseleave", function(){

    $(this).css({"background-color":"rgb(231, 219, 205)" , "transform":"scale(1)"});
});


//button mouseover Gross Zimmern
$("#btn-gross-zimmern").on("mouseover", function(){

    $(this).css({"background-color":"lightblue", "transform":"scale(1.08)","transtion":"all 1s ease-in-out"});
});

$("#btn-gross-zimmern").on("mouseleave", function(){

    $(this).css({"background-color":"rgb(231, 219, 205)" , "transform":"scale(1)"});
});



/*button click*/
$("#btn-darmstadt").bind("click", function(){

    document.location.href = "darmstadt.html";
});


$("#btn-gross-zimmern").bind("click", function(){

    document.location.href = "dieburg.html";
});


/*button deutsch*/

//button mouseover darmstadt
$("#btn-darmstadt-deutsch").on("mouseover", function(){

    $(this).css({"background-color":"lightblue", "transform":"scale(1.08)","transtion":"all 1s ease-in-out"});
});

$("#btn-darmstadt-deutsch").on("mouseleave", function(){

    $(this).css({"background-color":"rgb(231, 219, 205)" , "transform":"scale(1)"});
});


//button mouseover Gross Zimmern
$("#btn-gross-zimmern-deutsch").on("mouseover", function(){

    $(this).css({"background-color":"lightblue", "transform":"scale(1.08)","transtion":"all 1s ease-in-out"});
});

$("#btn-gross-zimmern-deutsch").on("mouseleave", function(){

    $(this).css({"background-color":"rgb(231, 219, 205)" , "transform":"scale(1)"});
});



/*button click*/
$("#btn-darmstadt-deutsch").bind("click", function(){

    document.location.href = "darmstadt-deutsch.html";
});


$("#btn-gross-zimmern-deutsch").bind("click", function(){

    document.location.href = "dieburg-deutsch.html";
});


/*-------------------*/


/*guitar mouseover*/
$("#gitar-kücük").on("mouseover", function(){

    $(this).css({"transform":"scale(1.3)", "transform":"rotate(60deg)"})
           .css({"transition":"all 0.4s ease-in-out"});

             //tooltip
             $("#tooltip-gitar").show("blind", 600);
});

$("#gitar-kücük").on("mouseleave", function(){

    $(this).css({"transform":"scale(1)", "transform":"rotate(0deg)"})
           .css({"transition":"all 0.4s ease-in-out"});

             //tooltip
             $("#tooltip-gitar").hide(500);
});

/*saz mouseover*/
$("#saz-kücük").on("mouseover", function(){

    $(this).css({"transform":"scale(1.2)", "transform":"rotate(0deg)"})
           .css({"transition":"all 0.4s ease-in-out"});

         //tooltip
         $("#tooltip-saz").show("blind", 600);
});

$("#saz-kücük").on("mouseleave", function(){

    $(this).css({"transform":"scale(1)" , "transform":"rotate(-10deg)"})
           .css({"transition":"all 0.4s ease-in-out"});

           $("#tooltip-saz").hide("fade", 600);
});


/*---------------End of LABTOP--------------------------------*/
/****************************************************/
/*---------------TABLET--------------------------------*/


$("#textillate-tablet").textillate({

    in: {
            effect : "bounceIn",
            speed  :  500
            
        },
    out:
        {
            effect : "wobble",
            speed  :  500
        },

        loop: true
});

    //slider-Tablet--------//

    $('#slider-tablet').cycle({
        fx: 'growX',       
        easing:  'easeInOutBack',
    
        speed: 1700
    });


    /*türkisch flags*/ 
$("#türkisch-flag-tablet").on("mouseover", function(){

    $(this).css({"transform":"scale(1.3)"})
           .css({"transition":"all 0.2s ease-in-out"})
           .css({"cursor":"pointer"});
});

$("#türkisch-flag-tablet").on("mouseleave", function(){

    $(this).css({"transform":"scale(1)"})
           .css({"transition":"all 0.2s ease-in-out"});
});

/*german flag*/ 
$("#german-flag-tablet").on("mouseover", function(){

    $(this).css({"transform":"scale(1.3)"})
           .css({"transition":"all 0.2s ease-in-out"})
           .css({"cursor":"pointer"});
});

$("#german-flag-tablet").on("mouseleave", function(){

    $(this).css({"transform":"scale(1)"})
           .css({"transition":"all 0.2s ease-in-out"});
});

/*click flags*/ 
$("#türkisch-flag-tablet").on("click", function(){

    document.location.href= "index.html";
});

$("#german-flag-tablet").on("click", function(){

    document.location.href= "deutsch-index.html";
});



    /*guitar mouseover*/
$("#gitar-kücük-tablet").on("mouseover", function(){

    $(this).css({"transform":"scale(1.3)", "transform":"rotate(60deg)"})
           .css({"transition":"all 0.4s ease-in-out"});

             //tooltip
             $("#tooltip-gitar-tablet").show("blind", 600);
});

$("#gitar-kücük-tablet").on("mouseleave", function(){

    $(this).css({"transform":"scale(1)", "transform":"rotate(0deg)"})
           .css({"transition":"all 0.4s ease-in-out"});

             //tooltip
             $("#tooltip-gitar-tablet").hide(500);
});

/*saz mouseover*/
$("#saz-kücük-tablet").on("mouseover", function(){

    $(this).css({"transform":"scale(1.2)", "transform":"rotate(0deg)"})
           .css({"transition":"all 0.4s ease-in-out"});

         //tooltip
         $("#tooltip-saz-tablet").show("blind", 600);
});

$("#saz-kücük-tablet").on("mouseleave", function(){

    $(this).css({"transform":"scale(1)" , "transform":"rotate(-10deg)"})
           .css({"transition":"all 0.4s ease-in-out"});

           $("#tooltip-saz-tablet").hide("fade", 600);
});



//button mouseover darmstadt
$("#btn-darmstadt-tablet").on("mouseover", function(){

    $(this).css({"background-color":"lightblue", "transform":"scale(1.08)","transtion":"all 1s ease-in-out"});
});

$("#btn-darmstadt-tablet").on("mouseleave", function(){

    $(this).css({"background-color":"rgb(231, 219, 205)" , "transform":"scale(1)"});
});


//button mouseover Gross Zimmern deutsch
$("#btn-gross-zimmern-tablet").on("mouseover", function(){

    $(this).css({"background-color":"lightblue", "transform":"scale(1.08)","transtion":"all 1s ease-in-out"});
});

$("#btn-gross-zimmern-tablet").on("mouseleave", function(){

    $(this).css({"background-color":"rgb(231, 219, 205)" , "transform":"scale(1)"});
});



/*button click */ 
$("#btn-darmstadt-tablet").bind("click", function(){

    document.location.href = "darmstadt.html";
});


$("#btn-gross-zimmern-tablet").bind("click", function(){

    document.location.href = "dieburg.html";
});




/*button click deutsch--------------------------------*/

//button mouseover darmstadt
$("#btn-darmstadt-tablet-deutsch").on("mouseover", function(){

    $(this).css({"background-color":"lightblue", "transform":"scale(1.08)","transtion":"all 1s ease-in-out"});
});

$("#btn-darmstadt-tablet-deutsch").on("mouseleave", function(){

    $(this).css({"background-color":"rgb(231, 219, 205)" , "transform":"scale(1)"});
});


//button mouseover Gross Zimmern deutsch
$("#btn-gross-zimmern-tablet-deutsch").on("mouseover", function(){

    $(this).css({"background-color":"lightblue", "transform":"scale(1.08)","transtion":"all 1s ease-in-out"});
});

$("#btn-gross-zimmern-tablet-deutsch").on("mouseleave", function(){

    $(this).css({"background-color":"rgb(231, 219, 205)" , "transform":"scale(1)"});
});



/*button click */ 
$("#btn-darmstadt-tablet-deutsch").bind("click", function(){

    document.location.href = "darmstadt-deutsch.html";
});


$("#btn-gross-zimmern-tablet-deutsch").bind("click", function(){

    document.location.href = "dieburg-deutsch.html";
});





/*--------------end of TABLET--------------------------------*/
/****************************************************/
/*---------------SMART--------------------------------*/

$("#textillate-smart").textillate({

    in: { effect: 'flip',
          speed :  500
            
        },
    out:{
        effect: 'rollIn',
        speed :  500
        },
    loop:true
});


$("#türkisch-flag-smart").on("click", function(){

    document.location.href = "index.html";
});

$("#german-flag-smart").on("click", function(){

    document.location.href = "deutsch-index.html";
});


$("#slider-smart").cycle(
    {
    fx: 'fade',       
    easing:  'easeInOutBack',

    speed: 1500
    }
);

/*--------------end of SMART--------------------------------*/

// darmstadt-btn-smart
$("#darmstadt-btn-smart").on("click", function(){

    document.location.href = "darmstadt.html";
});

$("#dieburg-btn-smart").on("click", function(){

    document.location.href = "dieburg.html";
});


// darmstadt-btn-smart-deutsch
$("#darmstadt-btn-smart-deutsch").on("click", function(){

    document.location.href = "darmstadt-deutsch.html";
});

$("#dieburg-btn-smart-deutsch").on("click", function(){

    document.location.href = "dieburg-deutsch.html";
});


}); // end of jquery
/*--------------------------------------------------------------------*/




