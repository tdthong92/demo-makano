function loadYoutubeUrl(server) {
    function getYoutubeHtmlFrom(youtubeUrl) {
        var result = "<iframe class=\"embed-responsive-item\" " +
            "src=\"" + youtubeUrl.title.rendered + "\"\n" +
            "                            allowfullscreen></iframe>";
        return result;
    }

    function renderYoutube(youtubeUrl) {
        let youtubeHtm = getYoutubeHtmlFrom(youtubeUrl);
        document.getElementById("video-frame").insertAdjacentHTML(
            "beforeend",
            youtubeHtm
        )
    }

    $.ajax({
        type: "GET",
        dataType: "json",
        url: server + "/wp-json/wp/v2/youtube",
        success: function(data){
            if (data) {
                renderYoutube(data[0]);
            }
        }
    });
}
