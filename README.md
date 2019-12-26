# makano

# 1. Front end
* Source code in folder: `front-end`
* Edit server url int file `js/config.js`
* Copy all source code from `front-end/*` to `public_html` folder

# 2. Backend
* Local:
    * from folder `makano` project run command.
        * `cd wp-docker`
        * `docker-compose up -d`
* Deploy:
    * Source  code in folder `wp-docker`
    * Install fresh project wordpress
    * Copy all file from folder `wp-app/wp-content` to folder `wp-content` on server
    * Import all data in folder `wp-data`

# 3. How to edit content from BE
* Go to admin site BE `{server}/wp-admin/`
* We can see menu:
    * Slider Info:
        * Update slider info
        * Add more slider
        * Properties: 
            * `detail_url` : url for button `Tìm Hiểu Thêm`
            * `image_url`: url for image slider
            * `text_title`: title of slider
            * `text_description`: description of slider
    * Product Info:
        *  Update product info
        *  Add more product
        *  Properties:
            * `detail_url` : url for button `Tìm Hiểu Thêm`
            * `image_url`: url for image product
            * `Title`: title of product
            * For features list of product
                * `feature_icon_*` is icon url for feature number *
                * `feature_text_*` is description for feature number *
                * We can add more icon & feature by click `Add Custom Field`
    * Product Info: Just edit first row data title.
    * Web Infos: 
        * Update Website info
        * Properties:
           * `address` Company address
           * `email`  Company email
           * `fb_url` facebook url
           * `twitter_url` twitter url
           * `youtube_url` youtube url
           * `phone` Company phone number
           * `outlet_url` Outlets address url
           * `policy_url` Warranty Policy url
#Note:
   * Any `new custom fields` must be `enable` in menu 
        * Tools -> `REST API Controllers` 
