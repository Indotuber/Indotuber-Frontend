$(document).ready(function(){

    $('#burger').click(function(){
        $('#burger').toggleClass("active");
        $('#slide-menu').toggleClass("slide-active");
        $('.body-wrap').toggleClass("slide-active");
        
        return false;
    });

    
    $('#channel-video-desc').hide();
    
    $('#btn-video-desc').click(function(){
        if($('#channel-video-desc').hasClass('active')){
            $('#channel-video-desc').removeClass('active');
            $('#channel-video-desc').slideUp('slow');
        }
        else{
            $('#channel-video-desc').addClass('active');
            $('#channel-video-desc').slideDown('slow');
        }
        
        return false;
    });
    
    

});