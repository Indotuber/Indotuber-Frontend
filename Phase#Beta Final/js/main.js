$(document).ready(function(){

    $('#burger').click(function(){
        $('#burger').toggleClass("active");
        $('#slide-menu').toggleClass("slide-active");
        $('.body-wrap').toggleClass("slide-active");
        
        return false;
    });

    
    
    $('#btn-video-desc').click(function(){
        if($('#channel-video-desc').hasClass('active')){
            $('#channel-video-desc').slideUp('slow');
            $('#channel-video-desc').toggleClass('active');
        }
        else{
            $('#channel-video-desc').slideDown('slow');
            $('#channel-video-desc').toggleClass('active');
        }
        
        return false;
    });
    
    

});