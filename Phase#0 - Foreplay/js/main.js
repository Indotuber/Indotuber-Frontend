$(document).ready(function(){

    $('.contain').click(function(){
        $('.burger').toggleClass("active");
        
        if($(".nav-group").hasClass("active")){
         $(".nav-group").slideUp(500);    
         $(".nav-group").removeClass("active");
       }
       
        else{
         $(".nav-group").addClass("active");
         $(".nav-group").slideDown(500);
       }
    });

});