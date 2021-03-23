// ==UserScript==
// @name         seselah.com
// @namespace    https://www.haward79.tw/
// @version      0.1
// @description  seselah.com ad remover
// @author       haward79
// @match        https://*.seselah.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

window.addEventListener('load', function () {

    var Blocker = document.getElementsByClassName("featherlight");

    if (Blocker.length > 0) {
        Blocker[0].style.display = "none";
    }

});

