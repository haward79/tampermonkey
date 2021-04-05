// ==UserScript==
// @name         pxmart
// @namespace    https://www.haward79.tw/
// @version      0.1
// @description  auto fill for pxmart e-invoice platform
// @author       haward79
// @match        https://b2cinv.tradevan.com.tw/pinvc/Default.aspx
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let cardNo = '';

window.addEventListener('load', function () {

	let cardNo = document.getElementById('cardNo');
	let passwd = document.getElementById('password');

	if(cardNo != null) {
		cardNo.value = cardNo;
	}

	if(passwd != null) {
		passwd.focus();
	}

});

