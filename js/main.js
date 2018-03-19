$(function() {
    var wWidth = $( window ).width();

	// OPEN & CLOSE BUTTON 
    $(".mobile-btns").click(function(){
        $( "body" ).addClass( "noscroll" );
        $( ".wrapper-takeover" ).fadeIn( "slow", "linear" );
    });

    $(".close, #overlay").click(function(){
        $( "body" ).removeClass( "noscroll" );
        $( ".wrapper-takeover" ).fadeOut( "slow", "linear" );
    });

    // FEATURED WORK ROLLOVER
    $(".studies").mouseover(function(){
        if (wWidth >= 1025){
            var thisclass = $(this).attr('class').split(' ')[0];
            $("#case-study .mid, #case-study .left, #case-study .right").removeClass("left-active mid-active right-active");

            if(thisclass === 'mid'){
                $(this).addClass("mid-active");
                $(".placeholder").removeClass("unhide");
            }

            if(thisclass === 'left'){
                $(this).addClass("left-active");
                $(".placeholder").addClass("unhide");

            }

            if(thisclass === 'right'){
                $(this).addClass("right-active");
                $(".placeholder").removeClass("unhide");
            }
        }
    });

    //BACK TO TOP BUTTON
    $("#upBtns").click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    // TAKEOVER ADDRESSES
    $("#info address").click(function(){
        $("#info address div").hide("slow");
        $(this).find("div").show("slow");
        $("#info address").removeClass("overwrite");
        $(this).addClass("overwrite");
    });

    // CHECK WINDOW SIZE
    // remove active states from featured work - home page
    function removeState(x){
        x = $( window ).width();
        if (x < 1025){
            $("#case-study .mid, #case-study .left, #case-study .right").removeClass("left-active mid-active right-active");
        }
    }
    removeState(wWidth);
});
