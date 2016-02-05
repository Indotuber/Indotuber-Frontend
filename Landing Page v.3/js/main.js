$(document).ready(function(){

    $('#burger').click(function(){
        $('#burger').toggleClass("active");
        
        if($(".navigation-menu").hasClass("active")){
         $(".navigation-menu").slideUp(500);    
         $(".navigation-menu").removeClass("active");
       }
       
        else{
         $(".navigation-menu").addClass("active");
         $(".navigation-menu").slideDown(500);
       }
    });

});