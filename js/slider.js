function loadSliders(server) {
    function getSliderHtmlFrom(slider) {
        var result = "<div class=\"hero-image\">\n" +
            "        <img class=\"decor-1\" src=\"assets/decor%201.svg\">\n" +
            "        <div class=\"container\">\n" +
            "            <div class=\"row\">\n" +
            "                <div class=\"col-xs-12 col-md-6 hero-text desktop\">" +
            "                   <div class='slide-overlay'>" +
            "                    <div class=\"title\">\n" +
            "                        <p>" + slider.text_title + "</p>\n" +
            "                    </div>\n" +
            "                    <div class=\"description\">\n" +
                                    slider.text_description +
            "                    </div>\n" +
            "                    <a href=\"" + slider.detail_url + "\">\n" +
            "                        Tìm hiểu thêm>\n" +
            "                    </a>\n" +
            "                  </div>"+
            "                </div>\n" +
            "                <div class=\"col-xs-12 col-md-6 image-slider\">\n" +
            "                    <img src=\"" + slider.image_url + "\">\n" +
            "                </div>\n" +
            "                <div class=\"col-xs-12 col-md-6 hero-text mobile\">\n" +
            "                    <div class=\"title\">\n" +
            "                        <p>" + slider.text_title + "</p>\n" +
            "                    </div>\n" +
            "                    <div class=\"description\">\n" +
                                        slider.text_description +
            "                    </div>\n" +
            "                    <a href=\"" + slider.detail_url + "\">\n" +
            "                        Tìm hiểu thêm>\n" +
            "                    </a>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>" +
            "        <div class='bottom-slide'>" +
            "        <img class=\"decor-2\" src=\"assets/decor%202.svg\">\n" +
            "        </div>" +
            "    </div>";
        return result;
    }

    function renderSlider(slider) {
        let sliderHtlm = getSliderHtmlFrom(slider);
        document.getElementById("sliders").insertAdjacentHTML(
            "beforeend",
            sliderHtlm
        )
    }

    $.ajax({
        type: "GET",
        dataType: "json",
        url: server + "/wp-json/wp/v2/slider",
        success: function(data){
            if (data) {
                for (var index in data) {
                    renderSlider(data[index]);
                }
            }
            $(document).ready(function() {
                $('.slider').bxSlider({
                    auto: true,
                    autoHover: true,
                    speed: 1000,
                    controls: true,
                    onSliderLoad: function () {
                        $('.slider .hero-image .container .hero-text .slide-overlay').eq(1).addClass('active-slide');
                        $(".slide-overlay.active-slide").addClass("wow animated rubberBand");
                    },
                    onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
                        $('.active-slide').removeClass('active-slide');
                        $('.slider .hero-image .container .hero-text .slide-overlay').eq(currentSlideHtmlObject + 1).addClass('active-slide');
                        $(".slide-overlay.active-slide").addClass("animated rubberBand");

                    },
                    onSlideBefore: function () {
                        $('.slider .hero-image .container .hero-text .slide-overlay').eq(1).addClass('active-slide');
                        $(".slide-overlay.active-slide").removeClass("animated rubberBand");
                        $(".slide-overlay.blue-overlay.active-slide").removeAttr('style');
                    }
                });
            });
        }
    });
}
