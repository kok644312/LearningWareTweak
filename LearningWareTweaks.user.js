// ==UserScript==
// @name         Learning Ware Tweaks
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  Tweaks for Learning Ware
// @author       kok644312
// @match        https://*.learning-ware.jp/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=www.pro-seeds.com
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /* Lesson Tweaks */
    new MutationObserver((_, observer) => {
        if(location.pathname != "/lesson/detail") {
            observer.disconnect();
            return;
        }

        if(window.windowOpenPost == undefined) return;

        window.windowOpenPost = (url, name, attr) => {
            return window.open(url, "_blank", attr);
        };

        observer.disconnect();
    }).observe(document, {childList: true, subtree: true});

    /* Player Tweaks */
    new MutationObserver((_, observer) => {
        if(location.pathname != "/lesson/pmovie") {
            observer.disconnect();
            return;
        }

        let videoElem = document.getElementById("streaming_video");
        if(videoElem == null) return;

        videoElem.dataset.isskip = "0";
        videoElem.dataset.isallowedplaybackrate = "1";

        observer.disconnect();
    }).observe(document, {childList: true, subtree: true});
})();