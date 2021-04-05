// ==UserScript==
// @name         risu.io
// @namespace    https://www.haward79.tw/
// @version      0.1
// @description  risu.io link fetcher
// @author       haward79
// @match        https://risu.io/*
// @match        https://*.risu.io/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let counter = 0;

window.addEventListener('load', function () {

    let msg = document.getElementById('ad_javascripts');
    msg.style.width = '500px';
    msg.style.margin = '0px auto';
    msg.style.fontSize = '30px';

    document.addEventListener('keypress', function (e) {

        if (e.keyCode == 100) {
            dig();
            alert('Done');
        }

    });

});

function dig() {

    let msg = document.getElementById('ad_javascripts');
    msg.innerHTML = '';

    // Images
    let imgs = document.getElementsByTagName('canvas');
    let img = null;

    for (let i = 0, countI = imgs.length - 1; i < countI; ++i) {
        img = imgs[i].toDataURL('image/png', 1);
        window.open(img);
    }

    // Videos
    let videos = document.getElementsByTagName('video');
    let video = null;

    for (let i = 0, countI = videos.length; i < countI; ++i) {
        video = videos[i].src;

        if (video != '') {
            msg.innerHTML = msg.innerHTML + '<a href="' + video + '" target="_blank">Video ' + ++counter + '</a><br />';
        }
    }

}

