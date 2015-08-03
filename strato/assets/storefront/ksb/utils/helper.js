/*global window, $, $F, Math, i18n */

$F.ksb.utils.helper = {
    /**
    *
    * Check if a given element is in the current viewport.
    *
    * @param {jQ-Object} $element   The element which you want to check.
    * @param {boolean} fullView     Default value is true so the element have to be full visible
    *                               false returns always true as long as a little part is visible.
    *
    * @return {Object}              Port and direction with boolean values.
    */
    inView: function ($element, fullView) {
        'use strict';

        var bottom,
            top,
            right,
            left,
            width = 0,
            height = 0;

        fullView = fullView || true;

        if (fullView) { // if u wish to see the whole element
            width   = $element.width();
            height  = $element.height();
        }

        bottom  = ($(window).height() + $(window).scrollTop()) <= $element.offset().top + height;
        top     = $(window).scrollTop() >= $element.offset().top + $element.height() - height;
        right   = ($(window).width() + $(window).scrollLeft()) <= $element.offset().left + width;
        left    = $(window).scrollLeft() >= $element.offset().left + $element.width() - width;

        return {
            port:   !right && !left && !bottom && !top,
            right:  !right,
            left:   !left,
            top:    !top,
            bottom: !bottom
        };
    },

    /**
    *
    * Shrink a given string and replace the middle width '[...]'.
    * If the given param is a jQ-Object it will be used for all items in the collection.
    * In this case it doesn't return anything but fill the elements innerHTML with
    * the shrunken text.
    *
    * @param {Integer} maxLen               The max. length without the replacement string length.
    * @param {String / jQ-Object} msgObj    The text or jQ-element (later used with .html()) which will be shrinked.
    * @param {String} replace               Optional text which symbolize the cut, default is [...].
    *
    * @return {String}                      Shrunken string
    */
    shrink: function (msgObj, maxLen, replace) {
        'use strict';

        function shrinkData(absolute) {
            var s = absolute,
                cnt = s.length,
                sArr = s.split(''),
                msgPart1 = '',
                msgPart2 = '',
                avgPos = 0,
                replacer = replace || '[...]';

            if (cnt - 1 <= maxLen) {
                return absolute;
            }

            while (cnt - 1 > maxLen) {
                sArr[Math.ceil(cnt / 2) - 1] = '';
                sArr = sArr.join('').split('');
                cnt--;
            }

            s = sArr.join('');

            avgPos = Math.ceil(cnt / 2);

            msgPart1 = s.substr(0, avgPos - 1);
            msgPart2 = s.substr(avgPos, s.length - avgPos);

            return msgPart1 + replacer + msgPart2;
        }

        if (typeof msgObj === 'string') {
            return shrinkData(msgObj);
        }

        if (msgObj.length) {
            msgObj.each(function () {

                var absolute = $.trim($(this).html()),
                    absoluteTitle = $.trim(absolute);

                if (absolute !== 0) {
                    $(this).attr('title', absoluteTitle).html(shrinkData(absolute));
                }
                if (absolute.length > maxLen) {
                    $(this).attr('data-shrink', 'true');
                    $(this).addClass('shrinked');
                }
            });
        }

    },

    /**
    *
    * Shrink a given string and replace the end with '[...]'.
    *
    * @param {String }  txt         The text which will be shrunken.
    * @param {Integer}  maxLen      The max. length without the replacement string length.
    * @param {String}   replace     Optional text which symbolize the cut, default is [...].
    *
    * @return {String}              Shrunked string
    */
    moreTextShrink: function (txt, maxLen, replace) {
        'use strict';

        txt = $.trim(txt);
        replace = replace || '[...]';

        var shortTxt = txt;

        if ( txt.length > maxLen + replace.length ) {
            shortTxt = txt.substr(0, maxLen) + replace;
        }

        return '<span title=\"' + txt + '\">' + shortTxt + '</span>';
    },

    /**
    *
    * Break a long line with a breakChar like <br> (default).
    *
    * @param {String} txt           The text which will be wrapped.
    * @param {Integer} breakLen     The length per line.
    * @param {String} breakChar     Optional breakChar default is <br>.
    *
    * @return {String}              The string with delimiters.
    */
    breakLongLine: function (txt, breakLen, breakChar) {
        'use strict';

        txt         = $.trim(txt);
        breakChar   = breakChar || '<br>';

        var txtLen = txt.length,
            i = 0,
            txtArr = [],
            breaks = parseInt(txtLen / breakLen, 10);

        if ( txtLen % breakLen ) {
            breaks++;
        }

        while (breaks) {
            txtArr.push(window.escape(txt.substr(i * breakLen, breakLen)).replace(/\%3C/g, '&lt;'));

            if (breaks > 1) {
                txtArr.push(breakChar);
            }

            i++;
            breaks--;
        }

        return window.unescape(txtArr.join(''));
    },

    /**
    *
    * Select or deselect all given checkboxes.
    *
    * @param {jQ-Object} masterBox  The master checkbox which selects or deselects.
    * @param {jQ-Object} group      The Collection which will selected or deselected.
    * @param {Boolean}   dynamicGroup Use group from cache or get the string and get it on every call
    * @param {Object}    callbacks Object for onselect ondeselect callbacks.
    * @param {Boolean}   filterDisabled Object for onselect ondeselect callbacks.
    *
    */
    checkboxChecker: function ($masterBox, $group, dynamicGroup, callbacks, filterDisabled) {
        'use strict';

        $masterBox.click(function () {
            var isChecked = $(this).is(':checked'),
                filter = ':disabled';

            callbacks = callbacks || {
                onSelect: function () {},
                onDeselect: function () {}
            };

            dynamicGroup = typeof dynamicGroup === 'undefined' ? true : dynamicGroup; // default

            $group = dynamicGroup ? $($group.selector) : $group;

            $group
                .filter(function () { return $(this).is(':visible'); })
                .not(filterDisabled ? filter : '')
                .attr('checked', isChecked ? true : false);

            callbacks[isChecked ? 'onSelect' : 'onDeselect']();
        });

        $group.change(function () {
            if ( $group.filter(':checked').length === $group.length ) {
                $masterBox.attr('checked', true);
            } else {
                $masterBox.attr('checked', false);
            }
        });
    },

    /**
    *
    * Trim a domain.
    *
    * @param {String} domain        The domain which will be shrinked.
    * @param {Integer} cnt          maxlength of string inclusive delimiter
    * @param {String} delimiter     Optional delimiter default is [...] + TLD.
    *
    * @return {String}              Shrinked domain
    */
    trimDomain: function (domain, cnt, delimiter) {
        'use strict';

        domain = domain.replace(/\s{1,}/g, ''); // kill all whitespaces or tabs..

        if (domain.length <= cnt) {
            return domain;
        }

        delimiter = delimiter || '[..]';

        var shrinkedDomain,
            tld,
            lengthToReduce,
            specialCase;

        // .co.uk, .me.uk, .org.uk
        if ( (new RegExp(/(.*)\.((co|me|org)\.uk)$/)).test(domain) ) {
            domain = RegExp.$1;
            tld = RegExp.$2;
        }
        // .us.com, .uk.com, .eu.com, .de.com
        else if ( (new RegExp(/(.*)\.((us|uk|eu|de)\.com)$/)).test(domain) ) {
            domain = RegExp.$1;
            tld = RegExp.$2;
        }
        // .uk.net
        else if ( (new RegExp(/(.*)\.(uk\.net)$/)).test(domain) ) {
            domain = RegExp.$1;
            tld = RegExp.$2;
        }
        // .com.de
        else if ( (new RegExp(/(.*)\.(com\.de)$/)).test(domain) ) {
            domain = RegExp.$1;
            tld = RegExp.$2;
        }
        // simple tlds
        else if ( (new RegExp(/(.*)\.(\w{2,20})$/)).test(domain) ) {
            domain = RegExp.$1;
            tld = RegExp.$2;
        }
        // [all domains]
        else if ( (new RegExp(/(\[.*\])$/)).test(domain) ) {
            domain = RegExp.$1;
            tld = '';
            specialCase = 1;
        } else {
            throw 'helper::trimDomain - TLD not supported';
        }

        lengthToReduce = (domain.length + delimiter.length + 1 + tld.length) - cnt;

        shrinkedDomain = domain.substr(0, domain.length - lengthToReduce);

        if (specialCase) {
            shrinkedDomain = shrinkedDomain + delimiter + ']';
        } else {
            shrinkedDomain = shrinkedDomain + delimiter + '.' + tld;
        }

        return shrinkedDomain;
    },

    /**
    *
    * Trim an email address.
    *
    * @param {String} email         The email which will be shrunken.
    * @param {Integer} cntLP        cut the localpart email-string after X characters.
    * @param {Integer} cntDP        cut the domainpart email-string after X characters.
    * @param {String} delimiter     Optional delimiter default is [..] + TLD.
    *
    * @return {String}              Shrunken email address
    */
    trimEmail: function (email, cntLP, cntDP, delimiter) {
        'use strict';

        delimiter = delimiter || '[..]';

        var currentLP = email.split('@')[0].replace(/\s/g, ''),
            currentDP = email.split('@')[1],
            newDP,
            choppedLP,
            newLP,
            cntLPD;

        currentLP = $.trim(currentLP);

        cntLPD = parseInt(cntLP - delimiter.length, 10);

        choppedLP = currentLP.substr(0, cntLPD);
        newLP = currentLP.length > cntLPD ? choppedLP + delimiter : currentLP;

        newDP = $F.ksb.utils.helper.trimDomain(currentDP, cntDP, delimiter);

        return newLP + '@' + newDP;
    },

    /**
    *
    * Make quota be displayed in a nice unit
    *
    * @param {String} quota         the quota which will be recalculated
    * @param {String} lang          the current language
    *
    * @return {String}              nice quota
    */
    quotaMagic: function ( quota, lang, desired_unit, show_unit ) {
        'use strict';
        var result;
        var modifier  = '';
        var separator = ',';
        var unit      = 'B';

        if ( desired_unit === undefined || desired_unit === "" ) {
            desired_unit = '';
        }
        else {
            desired_unit = desired_unit.toUpperCase();
        }


        if ( show_unit === undefined || show_unit === "" ) {
            show_unit = 1;
        }

        if ( quota === undefined || quota === "" || quota < 0 ) {
            quota = 0;
        }

        if ( lang == 'fre' ) {
            unit = 'O';
        }
        else if ( lang == 'eng' ) {
            separator = '.';
        }

        if ( ( desired_unit === "" && Math.abs( quota ) < 1024 ) || desired_unit == 'B' ) {
            modifier = '';
            result   = quota;
        }
        else if ( ( desired_unit === "" && Math.abs( quota ) < 1024 * 1024 ) || desired_unit == 'KB' ) {
            modifier = 'k';
            result   = quota / 1024;
            result = result.toFixed( 1 );
        }
        else if ( ( desired_unit === "" && Math.abs( quota ) < 1024 * 1024 * 1024 ) || desired_unit == 'MB' ) {
            modifier = 'M';
            result   = quota / 1024 / 1024;
            result = result.toFixed( 1 );
        }
        else if ( ( desired_unit === "" && Math.abs( quota ) < 1024 * 1024 * 1024 * 1024 ) || desired_unit == 'GB' ) {
            modifier = 'G';
            result   = quota / 1024 / 1024 / 1024;
            result = result.toFixed( 1 );
        }
        else if ( ( desired_unit === "" && Math.abs( quota ) < 1024 * 1024 * 1024 * 1024 * 1024 ) || desired_unit == 'TB' ) {
            modifier = 'T';
            result   = quota / 1024 / 1024 / 1024 / 1024;
            result = result.toFixed( 1 );
        }
        else {
            result = 'ERROR';
        }

        if ( show_unit == 1 ) {
            if ( modifier !== "" ) {
                return result.replace( '.', separator ) + ' ' + modifier + unit;
            }
            else {
                return result + ' ' + modifier + unit;
            }
        }
        else {
            result = result.toString();
            result = result.replace( '.', separator );
            return result;
        }
    },

    /**
    *
    * Throttle functions with delay.
    *
    * @param {Function} fn      Function which will be fired after delay.
    * @param {Integer}  delay   Delay for firing in ms.
    *
    * @return {Function}        Timer
    */
    throttle: function (fn, delay) {
        'use strict';

        var timer = null;

        return function () {
            var context = this,
                args = arguments;

            window.clearTimeout(timer);

            timer = window.setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        };
    },

    /**
    *
    * Show a hint on focus and hide it again when blur is triggered.
    *
    * @param {String}   prefix  Prefix.
    */
    inputHint: function (prefix) {
        'use strict';

        prefix = prefix || 'hint_';

        $('input[rel^=' + prefix + ']').each(function () {
            var $this = $(this),
                rel = $this.attr('rel'),
                hintSpan = $('span[rel=' + rel + ']');

            $this
                .bind('focusin click', function () {
                    hintSpan.css('display', 'inline');
                })
                .bind('focusout keypress', function () {
                    hintSpan.css('display', 'none');
                });
        });
    },

    /**
    *
    * determines the type of a value more closely then 'typeof()'.
    *
    * @param {[any type of value]}  to_determine    the value in question
    * @return {String}  type of the assigned value
    */
    getType: function (to_determine) {
        'use strict';

        var type = typeof to_determine;

        if (type === 'object') {
            try {
                type = to_determine.push ? 'array' : 'hash';
            } catch (e) {
                type = 'null';
            }
        }
        return type;
        /*
            function (Funktion)
            boolean (Ja/Nein-Variable)
            undefined (unbestimmter Typ)
            string (Zeichenkettenvariable)
            number (numerische Variable)
            all of these will just passed on.

            object (Objekt) is being distinguished between:
            -- array (if the Objekt provides the methode 'push')
            -- hash (if the Objekt dosn´t provide the methode 'push')
            -- null (if asking for the methode 'push' leads into an error)

            handling 'null' might bee a little fuzzy, but at this point,
            there is no other option left.
        */
    },

    /**
    *
    * Show an alert if the value length is greater then the defined max length.
    *
    * @param {jQ-Object}    $field  Field.
    * @param {Integer}      maxLength   Max length which would check against $field length.
    * @param {Object}       event
    */
    passwordLength: function ($field, maxLength, event) {
        'use strict';

        $F.globals.pwlengthcheck = 0;
        $F.globals.keytest = event ? (event || window.event).keyCode : 0;

        var keycheck = function () {
            var length = $field.val().length;

            //Ausschluß der Reaktion auf Entertaste und Löschen / (Tabtaste)
            if ($F.globals.keytest === 13 || $F.globals.keytest === 8) { // $F.globals.keytest === 9
                return false;
            } else {

                if (length > maxLength && $F.globals.pwlengthcheck === 0) {
                    $F.globals.pwlengthcheck = 1;

                    window.alert(
                        window.unescape(i18n.t('common:error_pwLength', { count: maxLength }))
                    );

                    return true;
                }
            }
        };

        setTimeout(function () {
            keycheck();
        }, 200);
    },

    /**
    *
    * Reformat any Character to a defined Character.
    *
    * @param {String} className to Reformat.
    */
    parsePoint: function (className) {
        'use strict';

        $(className).each(function () {
            var $this = $(this);
            $this.html($this.html().replace(/\./g, ','));
            return $this;
        });
    },

    /**
    *
    * Reformat Datestrings.
    *
    * @param {String} className.
    */
    displayDate: function (className) {
        'use strict';

        $(className).each(function () {
            var $this     = $(this),
                date_time = $this.text().replace(/^\s+|\s+$/g, '').split(' '),
                newDate   = date_time[0].split('-'),
                newTime   = date_time[1] ? ' ' + date_time[1] : '',
                lang      = $F.ksb.globals.lang,
                year      = newDate[0],
                month     = newDate[1],
                day       = newDate[2];

                $this.attr("data-date", year + '-' + month + '-' + day + newTime );

            if (newDate.length === 3) {
                switch (lang) {
                case 'ger':
                    $this.html(day + '.' + month + '.' + year + newTime);
                    break;
                case 'dut':
                    $this.html(day + '-' + month + '-' + year + newTime);
                    break;
                default:
                    $this.html(day + '/' + month + '/' + year + newTime);
                    break;
                }
            }
        });
    },

    /**
    *
    * Get table indices
    *
    * @param {jQ-Object} $tableSelector.
    */
    getTableIndices: function ($tableSelector) {
        'use strict';

        var indices = [];

        $tableSelector.each(function () {
            var $this = $(this);

            if ($this.find('input[type=checkbox]:first').is(':checked')) {
                indices.push($this.index());
            }
        });

        return indices;
    },

    /**
    *
    * set Iframe Height
    *
    * @param {String} iframeSelector ID.
    * @param {String} offsetHeight.
    */
    setIframeHeight: function (iframeSelector, offsetHeight) {
        'use strict';

        if (!offsetHeight) {
            $(iframeSelector).load(function () {
                var $this = $(this),
                    outerHeight = $this.contents().find('body').outerHeight();

                $this.css({
                    'height': outerHeight + ($.browser.opera ? 10 : $.browser.safari ? 16 : 15) + 'px'
                });
            });
        } else {
            $(iframeSelector).css({
                height: offsetHeight + 'px'
            });
        }
    },

    /**
    *
    * eu cookie read/write object
    *
    */
    euCookie: {
        // settings
        name    : 'eu_cookie',
        path    : '/',
        expires : ( new Date(2099, 2, 2) ).toGMTString(), // deprecated, just for the sake of old browsers
        maxAge  : 60*60*24*365*23, // lasts for 23 years

        // methods
        exists: function ( callback ) {
            'use strict';

            var euCookie = $F.ksb.utils.helper.euCookie;

            var rxp          = new RegExp( '\(\^\|\;\)\\s\?' + euCookie.name + '=' ),
                cookieExists = rxp.test( document.cookie ),
                hasCallback  = typeof callback === 'function';

            if ( cookieExists && hasCallback ) {
                callback();
            }

            return cookieExists;
        },

        create: function ( callback ) {
            'use strict';

            var euCookie = $F.ksb.utils.helper.euCookie;

            var hasCallback = typeof callback === 'function',
                created;

            document.cookie = euCookie.name + '=1;path=' + euCookie.path + ';expires=' + euCookie.expires + ';max-age=' + euCookie.maxAge;
            created = euCookie.exists();

            if ( created && hasCallback ) {
                callback();
            }

            return created;
        }
    },

    /**
    *
    * eu cookie guideline
    *
    * @param {String} set text informations 
    */
    euGuideline: function (text) {
        'use strict';

        var $body     = $('body'),
            bodyClass = 'with-eu-cookie-guideline',
            $info     = $('<div>')
                .attr('id', 'eu-cookie-guideline')
                .addClass('hidden')
                .html(text);

        function removeGuideline() {
           $body.removeClass(bodyClass);
           $info.remove();
        }

        $body.prepend($info).addClass( bodyClass );
        $F.ksb.utils.helper.euCookie.exists( removeGuideline );

        $info
            .removeClass('hidden')
            .find('.close-notice, .close')
            .css('cursor', 'pointer')
            .click(function () {
                $F.ksb.utils.helper.euCookie.create( removeGuideline );
                return false;
            });
    },

    /**
    *
    * create a survey
    *
    * @param {Object} options Survey options like link, name and so on.
    */
    survey: function (options) {
        'use strict';

        var defaults = {
            link    : 'https://umfrage.strato.de/html/rogator.htm?n=',
            name    : '',
            ref     : '',
            width   : 960,
            height  : 580,
            modalType: '1',
            cookieName: 'surveyCookie',
            expire: null
        };

        options = $.extend(defaults, options);

        var utils       = $F.ksb.utils,
            cookieData  = utils.cookieBakery.load(options.cookieName);

        if (utils.cookieBakery.supported && typeof cookieData.surveyDate === 'undefined') {
            utils.cookieBakery.create(
                options.cookieName,
                { surveyDate: (new Date()).toString() },
                options.expire
            );

            utils.modalWindow.init(
                options.link + options.name + '&ref=' + options.ref,
                options.width,
                options.height,
                options.modalType
            );
        }
    },

    /**
    *
    * isNumber
    *
    * @param {Number} Expect number.
    */
    isNumber: function (n) {
        'use strict';
        return !isNaN(parseFloat(n)) && isFinite(n);
    },

    /**
    *
    * check if cookies enabled
    * needed for login
    *
    * @param none
    */
    cookieEnabled: function () {
        'use strict';
        return navigator.cookieEnabled;
    },

    /**
    *
    * check if localStorage is available
    *
    * @param none
    */
    supportLocalStorage: function () {
        'use strict';
        return 'localStorage' in window && window.localStorage !== null;
    },

    /**
    *
    * save data in localStorage or in a cookie
    *
    * @param name       name of the dataset
    * @param data       data (string, object, array)
    */
    setStorageItem: function (name, data) {
        'use strict';

        if (typeof data !== 'string') {
            data = JSON.stringify(data);
        }

        if ($F.ksb.utils.helper.supportLocalStorage()) {
            localStorage.setItem(name, escape(data));
        } else {
            $F.ksb.utils.cookieBakery.create(name, data);
        }
    },

    /**
    *
    * read data in localStorage or in a cookie
    *
    * @param name       name of the dataset
    */
    getStorageItem: function (name, context) {
        'use strict';

        if ($F.ksb.utils.helper.supportLocalStorage()) {
            var item = localStorage.getItem(name);

            try {
                return JSON.parse(
                    window.unescape(
                        item
                    )
                );
            } catch (e) {
                return item;
            }
        } else {
            $F.ksb.utils.cookieBakery.load(name, context);
        }
    },

    /**
    *
    * remove a defined dataset from localStorage or cookie
    *
    * @param name       name of the dataset
    */
    removeStorageItem: function (name) {
        'use strict';

        localStorage.removeItem(name);
    },

    /**
     *
     * writeLoginStats
     *
     */
    writeLoginStats: function () {
        var screenW, screenH, javaState, cookieState, jav, coo;

        screenW = $('<input>', {
            type: 'hidden',
            name: 'screen_width',
            value: screen.width
        }).appendTo(document.forms[0]);

        screenH = $('<input>', {
            type: 'hidden',
            name: 'screen_height',
            value: screen.height
        }).appendTo(document.forms[0]);

        javaState = ( navigator.javaEnabled() === true ? 'ON' : 'OFF' );
        cookieState = ( navigator.cookieEnabled === true ? 'ON' : 'OFF' );

        jav = $('<input>', {
            type: 'hidden',
            name: 'java_status',
            value: javaState
        }).appendTo(document.forms[0]);

        coo = $('<input>', {
            type: 'hidden',
            name: 'cookie_status',
            value: cookieState
        }).appendTo(document.forms[0]);

    },

    /**
     *
     * trimOnSubmit
     *
     * @param source   obj to watch
     * @param target    obj  to trim
    */
    trimOnSubmit: function ($source, $target) {
        if (!!$source.length) {
            $target.submit(function () {
                $source.val(
                    $.trim( $source.val() )
                );
            });
        }
    },

    /**
     *
     * formatPrice
     *
     * @param {String} price         the price which will be reformated
     * @param {String} lang          the current language
     *
     * @return {String}              nice price
     */
    formatPrice: function ( price, lang ) {
        'use strict';
        var separator = ',';

        if ( lang == 'eng' ) {
            separator = '.';
        }

        if ( price.match( '\.' ) ) {
            if ( price.match( /\.\d$/ ) )
                price += '0';
            return price.replace( '\.', separator );
        }
        else {
            return price;
        }
    }
};

