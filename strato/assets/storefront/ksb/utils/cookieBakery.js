/*global $F, document, window, navigator */

$F.ksb.utils.cookieBakery = {
    create: function (name, data, expire, path) {
        "use strict";

        if (!name) {
            throw "cookieBakery::create - name expected, but not found!";
        }

        if (!data) {
            throw "cookieBakery::create - data expected, but not found!";
        }

        if (typeof data !== 'string' && typeof data !== 'object') {
            throw "cookieBakery::create - data type must be a string or a json object!";
        }

        var expires = expire == 'session' ? null : expire || new Date(2020, 2, 2);
        expires = expires ? expires.toUTCString() : expires;

        path = path || '/';

        if ( expires ) {
            var expire_string = ';expires=' + expires;
        }
        else {
            var expire_string = '';
        }

        document.cookie = name + '=' + window.escape(typeof data === 'string' ? data : JSON.stringify(data)) + ';path=' + path + expire_string;
    },

    load: function (name, context) {
        "use strict";

        if (!name) {
            throw "cookieBakery::load - name expected, but not found!";
        }

        var cookies = !context ? document.cookie.split(';') : context.cookie.split(';'),
            nameWithEq = name + '=',
            i,
            cookieKV;

        for (i = 0; i < cookies.length; i++) {
            cookieKV = cookies[i];

            while (cookieKV.charAt(0) === ' ') {
                cookieKV = cookieKV.substring(1, cookieKV.length);
            }

            if (cookieKV.indexOf(nameWithEq) === 0) {
                var content = cookieKV.substring(nameWithEq.length, cookieKV.length);
                try {
                    return JSON.parse(
                        window.unescape(
                            content
                        )
                    );
                } catch (e) {
                    return content;
                }
            }
        }

        return false;
    },

    del: function (name) {
        "use strict";

        if (!name) {
            throw "cookieBakery::del - name expected, but not found!";
        }

        $F.ksb.utils.cookieBakery.create(name, [], new Date(1985, 1, 1));
    },

    supported: function () {
        return navigator.cookieEnabled;
    }
};
