'use strict';

$(window).scroll(function(){
    if (window.scrollY / document.body.scrollHeight *100 > 15){
        $(".saving_tran").css("right","0px");
        $(".saving_tran").css("opacity","100");
    }
});


$(window).scroll(function(){
    if (window.scrollY / document.body.scrollHeight *100 > 47){
        $(".foreignRemittance").css("top","0px");
        $(".foreignRemittance").css("opacity","100");
    }
});


$(window).scroll(function(){
    if (window.scrollY / document.body.scrollHeight *100 > 55){
        $(".scroll_color_change").css("top","0px");
    }
    else{
        $(".scroll_color_change").css("top","863px");
    }
});


$(document).on("click",function(){
    $(".left_button").off("click").click(function(){

        let Pos = $(".card_list").position().left;

        if(Pos > -450)
            {
                Pos -=225;
                $(".card_list").animate({
                    left : Pos+"px"
                },200);
                
                console.log(Pos);
            }
        
    });
});

$(document).on("click",function(){
    $(".right_button").off("click").click(function(){

        let Pos = $(".card_list").position().left;

        if(Pos < 0)
            {
                Pos +=225;
                $(".card_list").animate({
                    left : Pos+"px"
                },200);
                
                console.log(Pos);
            }
        
    });
});


