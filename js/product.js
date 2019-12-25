function loadProducts(server) {
    function getProductHtmlFrom(product) {
        var result = "<div class=\"row product\" id=\"" + product.key + "\">\n" +
            "            <div class=\"col-xs-16 col-md-6 image\">\n" +
            "                <img data-aos=\"fade-up\" src=\"" + product.image_url + "\">\n" +
            "            </div>\n" +
            "            <div data-aos=\"fade-up\" class=\"col-xs-16 col-md-6 description\">\n" +
            "                <div class=\"title-product\">\n" +
                                product.title.rendered +
            "                </div>\n" +
            "                <div class=\"info\">\n" +
            "                    <div class=\"title\">\n" +
            "                        Tính năng sản phẩm\n" +
            "                    </div>\n";
        var icons = getValuesWithPreFix(product, "feature_icon");
        var features = getValuesWithPreFix(product, "feature_text");
        for (var index in icons) {
            result += "<div class=\"item\">\n" +
                "                        <img src=\"" + icons[index] + "\">\n" +
                                        features[index] +
                "                    </div>";
        }

            result = result +
                "<div class=\"item\">\n" +
                "<a href=\"" + product.detail_url + "\">\n" +
                "                       XEM CHI TIẾT>\n"+
                "                                </a>" +
                "                    </div>" +
                "                </div>\n" +
            "            </div>\n" +
            "        </div>";
        return result;
    }

    function getValuesWithPreFix(object, prefix) {
        var result = [];
        for (var property in object) {
            if (object.hasOwnProperty(property) &&
                property.toString().startsWith(prefix) && object[property]) {
                result.push(object[property]);
            }
        }
        return result;
    }

    function renderProduct(slider) {
        let productHtml = getProductHtmlFrom(slider);
        document.getElementById("products").insertAdjacentHTML(
            "beforeend",
            productHtml
        )
    }

    $.ajax({
        type: "GET",
        dataType: "json",
        url: server + "/wp-json/wp/v2/product",
        success: function(data){
            if (data) {
                for (var index in data) {
                    renderProduct(data[index]);
                }
                AOS.init({
                    duration: 1200,
                });
            }
        }
    });
}
