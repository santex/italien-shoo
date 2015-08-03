/*global $, window, $F */

$F.ksb.utils.buttons = {};

$F.ksb.utils.buttons.dropdown = (function () {
        "use strict";

        var priv, api;

        priv = {
                cache: {
                        activeBox: null,
                        timer: null
                },

                eventBinding: function () {
                        var opt = api.config,
                                selector = api.config.selectors;

                        $(selector.toggle).live('click', priv.showBox); 

                        $('body').live('click.button.dropdown', priv.outClicks);

                        if (opt.enableTimer) {
                                priv.timer.events();
                        }
                },

                showBox: function () {
                        var opt = api.config,
                                selector = opt.selectors,
                                css = opt.css,
                                $this = $(this),
                                $associated = $this.prev(),
                                $dropdown = $this.nextAll(selector.content),
                                isActive = $this.hasClass(css.isActive);

                        // adapt margin for similar pos of the trigger
                        if ($dropdown.css("margin-left") === 0) {
                                $dropdown.css("margin-left", $this.css("margin-left"));
                        }

                        if (isActive) {
                                $this.removeClass(css.activeStateClass);
                                $associated.removeClass(css.associatedActiveStateClass);

                                priv.hideBox($dropdown);
                        } else {
                                $this.addClass(css.activeStateClass);
                                $associated.addClass(css.associatedActiveStateClass);

                                priv.hideBox(); // hide the old

                                window.clearTimeout(priv.cache.timer);

                                priv.getPosition($this, $dropdown); // get position if data-position is set up

                                $dropdown.show();

                                priv.cache.activeBox = $dropdown; // set the new

                                api.config.onOpen($dropdown);
                        }

                        return false;
                },

                hideBox: function (box) {
                        var opt = api.config,
                                selector = opt.selectors,
                                css = opt.css;

                        box = box || priv.cache.activeBox;

                        if (box !== null) {
                                $('.' + css.associatedActiveStateClass).removeClass(css.associatedActiveStateClass);

                                box.prevAll(selector.isActive).removeClass(css.activeStateClass);
                                box.hide();

                                api.config.onHide(box);

                                priv.cache.activeBox = null; // reset
                        }
                },

                outClicks: function (event) {
                        var opt = api.config,
                                css = opt.css,
                                $clickTarget = $(event.target),
                                isSpecialElem = $clickTarget.hasClass(css.special),
                                isDropdownBtn = $clickTarget.hasClass(css.toggle),
                                isDropdown = $clickTarget.hasClass(css.content),
                                isInDropdown = $clickTarget.parents().hasClass(css.content);

                        if (!isSpecialElem && !isDropdownBtn && !isDropdown && !isInDropdown) {
                                priv.hideBox();
                        }
                },

                timer: {
                        start: function () {
                                var opt = api.config;

                                priv.cache.timer = window.setTimeout(function () {
                                        priv.hideBox();
                                }, opt.hideTime);
                        },

                        stop: function (event) {
                                var opt = api.config,
                                        selector = opt.selectors,
                                        css = opt.css,
                                        $enterTarget = $(event.target),
                                        isActiveElement = $enterTarget.hasClass(css.activeStateClass),
                                        isAssociatedBtn = $enterTarget.next(selector.toggle).hasClass(css.activeStateClass),
                                        isAssociatedDropdown = $enterTarget.hasClass(css.content) || $enterTarget.parents().hasClass(css.content);

                                if (isActiveElement || isAssociatedBtn || isAssociatedDropdown) {
                                        window.clearTimeout(priv.cache.timer);
                                }
                        },

                        events: function () {
                                var opt = api.config,
                                        selector = opt.selectors;

                                $(selector.toggle + "," + selector.content + "," + selector.special)
                                        .live('mouseenter', priv.timer.stop)
                                        .live('mouseleave', priv.timer.start);
                        }
                },

                getPosition: function ($trigger, $dropdown) {
                        var btnPos = $trigger.offset();

                        if ($trigger.attr('data-position') === "true") {
                                $dropdown.css({
                                        position: 'absolute',
                                        top: btnPos.top + $trigger.height(),
                                        left: btnPos.left
                                });
                        }

                }
        };

        api = {
                config: {
                        selectors : {
                                toggle : ".btn-dropdown-toggle",
                                content : ".btn-dropdown-content",
                                isActive : ".btn-dropdown-active",
                                special : ".package"
                        },

                        css : {
                                toggle : "btn-dropdown-toggle",
                                activeStateClass : "btn-dropdown-active orange-hover",
                                associatedActiveStateClass : "btn-dropdown-associated-active",
                                isActive : "btn-dropdown-active",
                                content : "btn-dropdown-content",
                                special : "package"
                        },

                        enableTimer : true,
                        hideTime : 250,
                        onOpen : function () {},
                        onHide : function () {}
                },

                setup: function (config) {
                        $.extend(api.config, config);

                        priv.eventBinding();
                },

                close: function () {
                        priv.hideBox();
                }
        };

        return api;
}());
