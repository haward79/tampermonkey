// ==UserScript==
// @name         TKtube
// @namespace    https://www.haward79.tw/
// @version      0.1
// @description  TKtube video downloader
// @author       haward79
// @match        https://www.tktube.com/videos/*
// @match        https://tktube.com/videos/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

window.addEventListener('DOMContentLoaded', function () {

	let Msg = document.createElement('div');
	let FirstInBody = document.getElementsByTagName('body')[0].firstElementChild;
	let Body = document.getElementsByTagName('body')[0];

	Msg.innerHTML = 'Tips : Close video AD and press d on keyboard to show video url.';
	Msg.style.padding = '10px 20px';
	Msg.style.background = 'linear-gradient(#6cc8ff, #005080, #6cc8ff)';
	Msg.style.color = '#ffffff';
	Msg.style.fontSize = '20px';

	Body.insertBefore(Msg, FirstInBody);

});

window.addEventListener('keypress', function (e) {

	if (e.keyCode == 100) {
		let Video = document.getElementsByTagName('video');
		let videoUrl = '';

		if (Video.length > 0) {
			videoUrl = Video[0].getAttribute('src');
			alert(videoUrl);
		}
		else {
			alert('No video source url found in this page.');
		}
	}

});

