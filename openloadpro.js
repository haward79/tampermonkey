// ==UserScript==
// @name         openloadpro
// @namespace    https://www.haward79.tw/
// @version      0.1
// @description  openloadpro.com ad remover
// @author       haward79
// @match        https://openloadpro.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

window.addEventListener('load', function () {

	setInterval(removeAd, 100);

});

function removeAd()
{
	let Ad = null;

	// Floating ad.
	Ad = document.getElementsByClassName('__isboostMouseCursor');

	if(Ad.length > 0) {
		Ad[0].style.display = 'none';
	}
}

