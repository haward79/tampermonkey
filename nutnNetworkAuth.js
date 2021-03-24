// ==UserScript==
// @name         nutnNetworkAuth
// @namespace    https://www.haward79.tw/
// @version      0.1
// @description  NUTN network authenticator
// @author       haward79
// @match        http://140.133.2.240/smsauth/9/pc.php*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let username = '';
let password = '';

if (!isConnected()) {
    connect();
}

function isConnected() {

    return false;
}

function connect() {

    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let response = this.responseText;

            if (response.search("reason=35") != -1) {
                alert("Auth failed. Please check username and password.");
            }
            else if (response.search("login_online_detail.php") != -1) {
                window.location.href = 'http://140.133.2.240/login_online_detail.php';
            }
            else {
                alert("Exception : unknown authentication response.");
            }
        }

    };

    request.open('POST', 'http://140.133.2.240/cgi-bin/ace_web_auth.cgi', true);
    request.send('fqdn=@stumail.nutn.edu.tw&account=' + username + '&userpwd=' + password + '&username=' + username + '@stumail.nutn.edu.tw');

}

