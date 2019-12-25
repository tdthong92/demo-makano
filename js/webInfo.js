function loadWebInfo(server) {

    function renderWebInfo(webInfo) {
        document.getElementById("website-email").innerHTML = webInfo.email;
        document.getElementById("website-phone").innerHTML = webInfo.phone;
        document.getElementById("website-address").innerHTML = webInfo.address;
        var fbLinks = document.getElementsByClassName("website-fb-link");
        for (var i=0; i< fbLinks.length; i++) {
            fbLinks[i].setAttribute("href", webInfo.fb_url);
        }
        var ytbLinks = document.getElementsByClassName("website-ytb-link");
        for (var j=0; j< ytbLinks.length; j++) {
            ytbLinks[j].setAttribute("href", webInfo.youtube_url);
        }
        var ttLinks = document.getElementsByClassName("website-tt-link");
        for (var k=0; k< ttLinks.length; k++) {
            ttLinks[k].setAttribute("href", webInfo.twitter_url);
        }
    }

    $.ajax({
        type: "GET",
        dataType: "json",
        url: server + "/wp-json/wp/v2/web_info",
        success: function(data){
            if (data) {
                renderWebInfo(data[0]);
            }
        }
    });
}
