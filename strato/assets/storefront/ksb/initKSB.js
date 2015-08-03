/*global window, document, $, jQuery, Modernizr */
var initKSB = (function () {
    "use strict";

    var priv, api;

    priv = {
        eventBinding: function () {
            $(".preventClicks").click(function () {
                return false;
            });

            $(".preventMoreClicks").click(function () {
                var $this = $(this);

                if ($this.data("clicked") !== true) {
                    $this.data("clicked", true);
                } else {
                    return false;
                }
            });

            priv.externalLink(api.config.externalLink); // push attr target to all external links
        },

        externalLink: function (obj) {
            var $obj = $(obj);
            // check target, when definied use this, else open in new window
            if ( $obj.attr('target') === "" ) {
                $obj.attr('target', '_blank');
            }
        },

        getFileParams: function (filename, tag) {
            tag = tag || "script";

            // build and return the regular expression string
            function getRegExpString(filename) {
                return new RegExp(filename + "\\?(.*)?$");
            }

            var regExpString = getRegExpString(filename),
                elements = document.getElementsByTagName(tag);

            // return params in array array[filename][key]
            function getParamArr(regExpString, filename, elements) {
                var i,
                    ii,
                    params,
                    paramArr,
                    pairs,
                    keyValue,
                    key,
                    value;

                for (i = 0; i <  elements.length; i++) {
                    if (regExpString.test(elements[i].src) === true) {
                        // refers to match statement and $1 u can see in getRegExpString [(.*)]
                        params              = RegExp.$1;
                        paramArr            = [];
                        paramArr[filename]  = [];
                        pairs               = params.split("&");

                        for (ii = 0; ii < pairs.length; ii++) {
                            keyValue    = pairs[ii].split("=");
                            key         = keyValue[0];
                            value       = keyValue[1];

                            paramArr[filename][key] = value;
                        }
                    }
                }

                return paramArr;
            }

            return getParamArr(regExpString, filename, elements);
        },

        firstLetterInput: function () {
            $('input.btn, button.btn').each(function () {
                var value = $(this).val();
                if ( value ) {
                    $(this).val( value.substr(0, 1).toUpperCase() + value.substr(1) );
                    $(this).addClass('jss_firstLetter');
                }
            });
        },

        resizeBoxes: function () {
            var maxHeight = 0;

                $(api.config.boxSelector).each(function () {
                    var height = $(this).height();
                    maxHeight = height > maxHeight ? height : maxHeight;
                }).css("min-height", maxHeight + 22);
        },

        updateBtn: function () {
            if ( ! $F.ksb.globals.bootstrapped) {
                var uA = $F.globals.uA,
                    docmode = $F.globals.IEdocmode;

                if (uA.match(/msie/g)) {
                    if (docmode === "7") {
                        $('input.btn, button.btn').css({
                            'line-height': '20px'
                        });
                        $('input.btn.small, button.btn.small').css({
                            'line-height': '16px',
                            'position': 'relative',
                            'top': '-2px'
                        });
                    }
                }
                if (uA.match(/firefox/g)) {
                    $('input.btn, button.btn').css({
                        'padding-bottom': '2px'
                    });
                    $('a.btn.small').css({
                        'line-height': '18px'
                    });
                    $('input.btn.small, button.btn.small').css({
                        'padding-bottom': '2px'
                    });
                }
                if (uA.match(/safari/g)) {
                    $('a.btn, a.btn.small').css({
                        'position': 'relative'
                    });
                    $('input.btn, button.btn').css({
                        'line-height': '20px'
                    });
                    $('input.btn.small, button.btn.small').css({
                        'line-height': '17px',
                        'position': 'relative'
                    });
                }
            }
        }

    };

    api = {
        config: {
            externalLink: "a[href^='http://'], a[href^='https://'], a[href^='ftp://']",
            boxSelector: ""
        },

        setup: function (config) {
            $.extend(api.config, config);

            priv.eventBinding();
            priv.resizeBoxes();
            priv.updateBtn();
            priv.firstLetterInput();
            $( window ).resize( priv.resizeBoxes );
        },

        getFileParams: function (filename, tag) {
            return priv.getFileParams(filename, tag);
        },

        prepareKSB: function (options) {

            Modernizr.load([{
                test: Modernizr.input.autocomplete,
                nope: '/assets/storefront/ksb/ext/scripts/html5shiv.js'
            }]);

            $.ajaxSetup({
                cache: false,
                error: function (XMLHttpRequest, ajaxOptions, thrownError) {
                    var error = thrownError.toString();

                    if (error === "abort") return true;

                    $.publish("/jquery/ajax/error", [thrownError.toString()]);
                }
            });

            window.KSBlanguageMapping = {
                ger: 'de',
                spa: 'es',
                eng: 'en',
                dut: 'nl',
                ita: 'it',
                fre: 'fr'
            };
            window.KSBURLLanguage = location.search.match(/[?&]scriptLang=(.*?)(?=&|$)/);

            window.storefront = window.$F = {
                utils: {},
                globals: {
                    uA: navigator.userAgent.toLowerCase(),
                    IEdocmode: document.documentMode
                },
                ksb: {
                    apps: {},
                    utils: {},
                    globals: {
                        bootstrapped: options.bootstrapped,
                        url: options.url,
                        session: options.sessionID,
                        node: options.node,
                        cid: options.cID,
                        lang: options.language,
                        lng: window.KSBlanguageMapping[options.language],
                        js: $('html').hasClass('js')
                    },
                    checks: {}, nodes: {}
                }
            };

            if (options.logx !== '1') {
                i18n.init({
                    debug: options.debug,
                    sendMissing: false,
                    saveMissing: false,
                    lng: window.KSBURLLanguage ? window.KSBURLLanguage[1] : null || $F.ksb.globals.lng,
                    fallbackLng: 'en',
                    getAsync: false,
                    resGetPath: '/assets/storefront/ksb/locales/__lng__/__ns__.json',
                    ns: {
                        namespaces: ['common'],
                        defaultNs: 'common'
                    }
                });
            }
        }
    };

    return api;
}());

$(function () {
    "use strict";

    initKSB.setup({
        boxSelector: ".sf-featureBox a"
    });
});
