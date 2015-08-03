/*jslint regexp: true, nomen: true, debug: true, evil: true, vars: false, sloppy: true , maxlen: 220*/
/*global strato, angular:false */

/**
* @file Bestandskunden "soft-login"
* @author Schwani
* @version v1.0
* @optional 2015-03-13
* @optional © 2015 by STRATO AG - all rights reserved
*/
var strato      = strato        || {};
strato.bkmsl    = strato.bkmsl  || {};
strato.global   = strato.global || {};

strato.bkmsl = {
    "getCookieValueFromQuery": function() {
        var namesValues = (location.search).replace(/^\?/, '').split('&'),
            bkmsl       = false;

        namesValues.forEach(function(name_value) {

            if (name_value.match("bkmsl")) {
                bkmsl = name_value.replace(/^bkmsl=/, '');
            }
        });
        return bkmsl;
    },
    "setCookie": function(bkmslValue) {
        document.cookie = 'bkmsl=' + bkmslValue + ";path=/";
    },
    "checkForCookie": function() {
        var cookies = document.cookie.split(";"),
            bkmsl   = false;

        cookies.forEach(function(cookieString) {

            if (cookieString.match('bkmsl')) {
                bkmsl = true;
            }
        });
        return bkmsl;
    },
    "init": function() {
        var bkmslCookie = strato.bkmsl.checkForCookie();

        if (!bkmslCookie) {
            bkmslCookie = strato.bkmsl.getCookieValueFromQuery();
        }

        if (bkmslCookie && (typeof bkmslCookie === 'string')) {
            strato.bkmsl.setCookie(bkmslCookie);
        }
    }
};

document.addEventListener("DOMContentLoaded", function(event) {
    strato.bkmsl.init();
});