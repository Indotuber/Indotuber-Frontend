$(document).ready(function(){

    $('#burger').click(function(){
        $('#burger').toggleClass("active");
        $('#slide-menu').toggleClass("slide-active");
        $('.body-wrap').toggleClass("slide-active");
        
        return false;
    });

});