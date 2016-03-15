$(document).ready(function(){   
    
    $('#video_title h5 a').click(function(){
        $('#video_desc__arrow').toggleClass("active");
        $('#video_desc').toggleClass("ellipsis-2line");
    });
    
});