// ==UserScript==
// @name         ecourse
// @namespace    https://www.haward79.tw/
// @version      0.1
// @description  ecourse network connection keeper
// @author       haward79
// @match        https://ecourse.nutn.edu.tw/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

// Keep connection.
setInterval(sendRequest, 60000);

function sendRequest() {

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", "https://ecourse.nutn.edu.tw/Default.aspx", true);
    xhttp.send();

}

// Auto fill in.
if (document.readyState == "complete" || document.readyState == "loaded" || document.readyState == "interactive") {

    let usernameObj = document.getElementById('ctl00_ContentPlaceHolder1_LoginView1_Login1_UserName');
    let passwordObj = document.getElementById('ctl00_ContentPlaceHolder1_LoginView1_Login1_Password');
    let txtCodeObj = document.getElementById('ctl00_ContentPlaceHolder1_LoginView1_Login1_txtCode');

    if (usernameObj != null) {
        usernameObj.value = 'username';
    }

    if (passwordObj != null) {
        passwordObj.value = 'password';
    }

    if (txtCodeObj != null) {
        txtCodeObj.focus();
    }

};

