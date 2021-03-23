// ==UserScript==
// @name         instagram
// @namespace    https://www.haward79.tw/
// @version      0.1
// @description  instagram login blocker remover
// @author       haward79
// @match        https://*.instagram.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

window.addEventListener('DOMContentLoaded', function () {

	let Msg = document.createElement('div');
	let FirstInBody = document.getElementsByTagName('body')[0].firstElementChild;
	let Body = document.getElementsByTagName('body')[0];

	Msg.innerHTML = 'Tips : Press c on keyboard to clear instagram login restriction.';
	Msg.style.padding = '10px 20px';
	Msg.style.position = 'relative';
	Msg.style.top = '60px';
	Msg.style.zIndex = '999';
	Msg.style.background = 'linear-gradient(to bottom, #000000, #515151, #000000)';
	Msg.style.color = '#ffffff';
	Msg.style.fontSize = '20px';

	Body.insertBefore(Msg, FirstInBody);

});

window.addEventListener('keypress', function () {

	// Set error flag.
	let errorFlag = false;

	// Clear blocker.
	let Blocker = document.getElementsByClassName('RnEpo   _Yhr4    ');

	if (Blocker.length > 0) {
		Blocker[0].style.display = 'none';
	}
	else {
		errorFlag = true;
	}

	// Restore overflow scrolling.
	let Body = document.getElementsByTagName('body');

	if (Body.length > 0) {
		Body[0].style.overflow = 'auto';
	}
	else {
		errorFlag = true;
	}

	// Check error flag.
	if (errorFlag) {
		alert('CANNOT perform the operation.');
	}

});

