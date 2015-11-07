/**
 * Created by Vincentius on 11/7/2015.
 */

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

var videoIdToPlay = null;

function onPlayerReady(event) {
    playAnotherRandomVideo($("#next-video-please"));
}

function onPlayerStateChange() {

}

function playAnotherRandomVideo(button) {
    $.ajax({
        url: "http://localhost:2000/api/get-random-video",
        method: "GET"
    }).done(function(data) {
        var json = JSON.parse(data);
        player.loadVideoById(json["videoId"], 0, "large");
        $("#video-title").text(json["title"]);
        $("#youtube-subscriber-button").html("<div id='channel-subscribe-youtube' class='g-ytsubscribe' data-channel='"+json["channelId"]+"' data-layout='full' data-count='default'></div>");
        $.getScript("https://apis.google.com/js/platform.js");

        button.button("reset");
    }).fail(function() {
        button.button("reset");
    }).always(function() {
        button.button("reset");
    });
}

$("#next-video-please").click(function () {
    $(this).button("loading");
    playAnotherRandomVideo($(this));
});