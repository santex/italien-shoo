/*global $, $F, window, storefront, document */

$F.ksb.utils.modalWindow = (function () {
    'use strict';

    var priv, api, TERNARY;

    /* ================================================================
        modalWindow :: priv
    ================================================================ */

    priv = {
        eventBinding: function () {
            $(window).bind('resize scroll', function () {
                if (api.config.isOpen) {
                    priv.center();
                }
            });

            $(api.config.closescope).live('click', function () {
                priv.close();
                return false;
            });
        },

        close: function () {
            priv.removeElements(api.config.removeableElements);
            api.config.isOpen = false;
            $('body').trigger('ksb.modalWindow.closed');
        },

        registerESC: function () {
            $(document).keyup(function (e) {
                var code = e.keyCode || e.which;
                if (code === 27) {  // ESC
                    $(api.config.closescope).trigger('click');
                }
            });
        },

        removeElements: function (el) {
            $(el).remove();
            return true;
        },

        center: function () {
            var wtop, wleft;

            wtop = $(window).scrollTop() + ($(window).height() / 2) - ($('#' + api.config.modalId).height() / 2);
            wleft = ($(window).width() / 2) - ($('#' + api.config.modalId).width() / 2);

            api.config.modal.css({
                top: wtop + 'px',
                left: wleft + 'px'
            });
        },

        resize: function (width, height, duration) {
            duration = duration || 0;

            // resize all affected elements
            api.config.modal.animate({
                width: width + 'px',
                height: height + 'px'
            }, {
                duration: duration,
                step: function() {
                    priv.center();
                }
            });

            $('#modalWindowFrame').animate({
                width: width + 'px',
                height: height + 'px'
            }, duration);
        },

        generateElements: function (width, height) {
            api.config.overlay = $('<div>').attr('id', api.config.overlayId);
            api.config.modal = $('<div>').attr({
                'id': api.config.modalId,
                'class': api.config.modalClass
            });
            api.config.content = $('<div>').attr('class', api.config.contentClass);
            api.config.closeBtn = $('<div>').attr('class', api.config.closeBtnClass);

            api.config.modal.css({
                'width': width + 'px',
                'height': height + 'px'
            });

            api.config.content.css({
                'overflow': (api.config.modus === '1' ||  api.config.modus === '3') ? 'hidden' : 'auto'
            });

            return true;
        },

        appendElements: function () {
            api.config.content.empty().append(api.config.source);

            TERNARY = (!api.config.noClose) ? api.config.modal.append(api.config.closeBtn) : '';

            api.config.modal.append(api.config.content);

            $(api.config.parent).append(api.config.overlay);
            $(api.config.parent).append(api.config.modal);

            return true;
        },

        showElements: function () {
            api.config.overlay.fadeTo(250, 0.80);
            api.config.modal.show(500);
        },

        buildWindow: function (width, height) {
            priv.generateElements(width, height);
            priv.appendElements();
            priv.showElements();

            TERNARY = (!api.config.noClose && !api.config.noESC) ? priv.registerESC() : '';

            priv.center();

            api.config.isOpen = true;
            $('body').trigger('ksb.modalWindow.opened');

            return true;
        }

    };

    /* ================================================================
        modalWindow :: api
    ================================================================ */

    api = {
        config: {
            noClose: false,
            parent: 'body',
            overlay: '',
            modal: '',
            content: '',
            closeBtn: '',
            source: '',
            modus: 0,
            overlayId: 'modalOverlay',
            modalId: 'modalWindow',
            modalClass: 'modalFrame',
            contentClass: 'modalContent',
            closeBtnClass: 'modalCloseWindow',
            removeableElements: '#modalWindow, #modalOverlay, .modalCloseWindow',
            closescope: '.modalCloseWindow, .close',
            noESC: true,
            isOpen: false
        },

        init: function (source, width, height, modus, id, noClose, config) {
            api.config = $.extend(api.config, config);

            api.config.modus = modus;
            api.config.noClose = noClose;

            var bootstrapped = $F.ksb.globals.bootstrapped ? 15 : 0;

            switch (modus) {
            case '1':
                api.config.source = '<iframe width=\"' + (width-10) + '\" height=\"' + (height-bootstrapped) + '\" frameborder=\"0\" name=\"modalWindowFrame\" id=\"modalWindowFrame\" scrolling=\"auto\" allowtransparency=\"true\" src=\"' + source + '\"></iframe>';
                break;

            case '2':
                api.config.source = $(id ? '#' + id : '#pLayer').html();
                break;

            case '3':
                api.config.source = '<iframe width=\"' + (width-10) + '\" height=\"' + (height-bootstrapped) + '\" frameborder=\"0\" name=\"modalWindowFrame\" id=\"modalWindowFrame\" scrolling=\"auto\" allowtransparency=\"true\" src=\"' + source + '\"></iframe>';
                priv.ownFN = true;
                break;

            case '4':
                api.config.source = $('#' + id).contents().find('#pLayer').html();
                break;

            case '5':
                api.config.source = "<img src='" + source + "' style='margin:0;padding:0'>";
                break;


            default:
                break;
            }

            priv.buildWindow(width, height);
            priv.eventBinding();
        },

        resize: function (width, height, duration) {
            if (!width && !height) {
                throw 'modalWindow::resize - need parameter width and height';
            }
            priv.resize(width, height, duration);
        },

        close: function () {
            var $elems = $(api.config.closescope);
            if ( $elems.length > 0 ) {
                $(api.config.closescope).click();
            } else {
                priv.close(); 
            }
            return true;
        },

        removeCloseHandler: function () {
            api.config.closeBtn.unbind('click', function () {
                priv.removeElements(api.config.removeableElements);
            });
        },

        hilight: function (elem) {
            this.hilightExt(elem, priv, api);
            return this;
        },

        decorateHilight: function (withContent) {
            withContent = withContent || {
                top:    $(),
                right:  $(),
                bottom: $(),
                left:   $()
            };

            this.decorateHilightExt(withContent, priv, api);
        }
    };

    /* ================================================================
        JSUNIT :: reference priv to api if activ
    ================================================================ */
    if (storefront.globals.t === true) {
        api.INTERNAL = priv;
    }

    return api;
}());

$F.ksb.utils.modalWindow.hilightExt = function (elem, priv, api) {
    if (api.config.hilighted) {
        api.close();
    }

    if (!api.config.initializedHilight) {
        $('body').bind('ksb.modalWindow.closed', function () {
            $( api.config.hilighted ).attr('style', api.config.oldStyles ? api.config.oldStyles : '');
        });
    }

    api.config.hilighted  = $(elem);
    api.config.overlay    = $('<div>').attr('id', api.config.overlayId);
    api.config.closeBtn   = $('<div>').attr('class', api.config.closeBtnClass).addClass('hilighted');

    $(api.config.parent).append( api.config.overlay, api.config.closeBtn );

    api.config.overlay.show();

    api.config.oldStyles = $(elem).attr('style');

    $(elem).css({
        'z-index': 9998,
        'position': 'relative'
    });

    priv.eventBinding();
    api.config.initializedHilight = true;
};

$F.ksb.utils.modalWindow.decorateHilightExt = function (elements, priv, api) {
    var decorations = [];

    for (var pos in elements) {
        decorations.push(
            elements[pos]
                .addClass('decorated decoratedWith_' + pos)
                .css('position', 'absolute')
                .css('z-index', 9999)
                .css(
                    determinePosition(pos, elements)
                ).show()
        );
    }

    if (!api.config.initializedDecoration) {
        $('body').bind('ksb.modalWindow.closed', function () {
            if (decorations.length) {
                for (var deco in decorations) {
                    decorations[deco].hide();
                }
            }
        });
    }

    api.config.initializedDecoration = true;

    function determinePosition(pos, elements) {
        var $hilighted  = api.config.hilighted, // implicit set by modalWindow.hilight
            offset      = $hilighted.offset(),
            $elem       = elements[pos],
            gap         = 10,
            topTill     = offset.top - gap,
            leftTill    = offset.left - gap,
            width       = $hilighted.outerWidth(),
            rightFrom   = offset.left + width + gap,
            bottomFrom  = offset.top + $hilighted.outerHeight() + gap;

        if (pos == 'top') {
            return {
                top:    topTill - $elem.height() + 'px',
                left:   leftTill + gap,
                width:  $hilighted.outerWidth(),
            };
        }

        if (pos == 'right') {
            return {
                top:    elements.top.offset().top + 'px',
                left:   rightFrom + 'px',
                height: elements.top.outerHeight()  + elements.bottom.outerHeight() + (gap * 2) + $hilighted.outerHeight() + 'px'
            };
        }

        if (pos == 'bottom') {
            return {
                top:    bottomFrom + 'px',
                left:   leftTill + gap + 'px',
                width:  $hilighted.outerWidth()
            };
        }

        if (pos == 'left') {
            return {
                top:    elements.top.offset().top + 'px',
                left:   leftTill - $elem.width() + 'px',
                height: elements.top.outerHeight()  + elements.bottom.outerHeight() + (gap * 2) + $hilighted.outerHeight() + 'px'
            };
        }
    }
};
