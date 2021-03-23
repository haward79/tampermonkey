// ==UserScript==
// @name         tiktokvideodown
// @namespace    https://www.haward79.tw/
// @version      0.1
// @description  tiktokvideodown theater mode switcher
// @author       haward79
// @match        https://www.tiktokvideodown.com/vod-play-id-*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

window.addEventListener('keypress', function (e) {

    if (e.keyCode == 116) {

        let externalBlocker = document.getElementById('external_blocker');

        if(externalBlocker == null)
        {
            let obj = document.createElement('div');
            obj.style.backgroundColor = '#000000';
            obj.style.width = '100vw';
            obj.style.height = '100vh';
            obj.style.position = 'fixed';
            obj.style.top = '0px';
            obj.style.bottom = '0px';
            obj.style.zIndex = '998';
            obj.style.display = 'block';
            obj.id = 'external_blocker';
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            document.getElementsByTagName('body')[0].appendChild(obj);
            document.getElementsByTagName('iframe')[0].style.position = 'relative';
            document.getElementsByTagName('iframe')[0].style.zIndex = '999';
        }
        else if(externalBlocker.style.display == 'block')
        {
            document.getElementsByTagName('body')[0].style.overflow = 'auto';
            externalBlocker.style.display = 'none';
        }
        else
        {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            externalBlocker.style.display = 'block';
        }

    }

});

