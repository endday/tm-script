// ==UserScript==
// @name         谷歌CDN替换
// @version      0.0.1
// @description  将 Google 的 CDN 替换成国内的 CDN 地址
// @author       endday
// @license      GPL-2.0
// @update       2020/4/15
// @include      *
// @homepageURL  https://github.com/endday/tm-script

// @run-at       document-start

// ==/UserScript==
/* eslint-disable */

!function() {
    "use strict";
    document.querySelectorAll("script").forEach((function(e) {
        if (e.src.indexOf("googleapis.com") >= 0 || e.src.indexOf("themes.googleusercontent.com") >= 0 || e.src.indexOf("www.google.com/recaptcha/") >= 0) {
            let c = e.src.replace("http://", "https://").replace("googleapis.com", "proxy.ustclug.org").replace("themes.googleusercontent.com", "google-themes.lug.ustc.edu.cn").replace("www.google.com/recaptcha/", "www.recaptcha.net/recaptcha/");
            e.parentNode.replaceChild(function(e) {
                let c = document.createElement("script");
                return c.src = e, c;
            }(c), e);
        }
    }));
}();
