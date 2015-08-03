var globals = (function() {
    /*
     * file: globals.js
     * version: 0.4
     * last modified: 2012-04-03
     * author: RoWi, DoRu
     */
    var api = {}, _private = {}, _refs = { }, _globals = { };
    _globals = {
        config : {
            products : {
//                source : "/js/ger/server.json",
//                source2 : "/js/ger/hidrive_features.json",
//               cloud:   "/buy/ger/configuration/cloud" //"/js/ger/cloud.json"
                source : "/buy/ger/configuration/server",
                source2 : "/buy/ger/configuration/hidrive",
               cloud:   "/buy/ger/configuration/cloud" //"/js/ger/cloud.json"
            }
        },
        data : {
            products : {},
            errors : [],
            pick : "",
            show : null,
            link : "",
            os : "l",
            table : {},
            time : []
        }
    };
    _private = {
        is_consulting : false,
        get_time : function(id, bool) {
            var print = "";
            if(globals.data.time.length > 1) {
                var last = id;
                var first = (bool === true) ? 0 : last - 1;
                var diff = globals.data.time[last][0] - globals.data.time[first][0];
                //$("#debug_detail").append("<div>{0}: {1}</div>".format(diff,globals.data.time[last][1]));
                // console.log(diff+": "+globals.data.time[last][1]);
                //$(".content").next().append(diff + ": " + globals.data.time[last][1]+"<br />");
                print = diff + ":\t " + globals.data.time[last][1] + "\n";

            }
            return print;
        },
        get_json_by_url : function(options) {
            var success = null;
            var defaults = {
                path : "",
                name : ""
            };
            var opts = $.extend(defaults, options);
            if(opts.name && globals.data[opts.name]) {
                var json = globals.data[opts.name];
                globals.timer("before ajax");
                $.ajax({
                    url : opts.path,
                    dataType : 'json',
                    async : false,
                    success : function(data) {
                        json = data;
                        $.each(json, function(key, value) {
                            success = true;
                        });
                        globals.data[opts.name] = json;
                    },
                    error : function(data) {
                        json = {};
                        success = false;
                        //console.log(data);
                        globals.error({
                            name : 'ajax request',
                            value : "couldn't get JSON-File " + "'" + opts.path + "'" + ' from given path'
                        });
                    }
                });
                globals.timer("after ajax");

            } else {
                globals.error({
                    name : 'ajax request',
                    value : "'" + opts.name + "'" + ' is not defined'
                });
                success = false;
            }
            return success;
        },
        handle_get_parameters : function() {
            _globals.data.pick = jQuery.url.param("pick") || globals.data.pick;
            _globals.data.link = jQuery.url.param("link") || globals.data.link;
            _globals.data.os = jQuery.url.param("os") || globals.data.os;
            if(_globals.data.products.kind_of_server) {

                if(_globals.data.products.kind_of_server[_globals.data.pick] === undefined) {
                    if(!_globals.data.link) {
                        $(".content_index").show();

                    } else {
                        $(".content_index").hide();
                        $(".content_anwendungsfall").show();
                        $(".content_konfigurator").show();
                        $(".configurator.open").removeClass("open").addClass("off");

                    }
                }
            }
            if(!_globals.data.pick) {
                $("#menu_picker").hide();

            } else {
                $(".content_index").hide();
                $(".content_anwendungsfall").hide();
                $(".content_konfigurator").show();
                $(".button.field.configurator").hide();

            }

            if(_private.is_consulting) {
                $(".content_teaser").hide();
                $(".button.index.configurator.off").hide();
                $(".button.index.configurator.off").removeClass("off").addClass("open");
                $(".content_index").show();
                $(".content_konfigurator").show();
                $("#teaser").show();
                $(".content_anwendungsfall").show();
                $("#new_table").show();
                $(".button.field.configurator").show();
                $(".configurator_button.text.off").show();
                $("#stern").show();
                $("#configurator_botton_on").hide();

            } else {

            }

            $("#contact").click(function() {

                $("#chat").attr("src", "https://strato-customercare.de/kundenchat/frontend/logonPro.php?session=&artikelID=STRATO_PRO&language=de");
                $(document).unbind("click");
                $("#contact_layer").fadeIn('slow');
                $("#contact_layer").bind("mouseout", function() {
                    $(document).bind("click", function() {
                        $("#contact_layer").fadeOut('slow');
                    })
                });
            });
            $("#layer_link_text").css("cursor", "pointer");
            $("#layer_link_text").click(function() {
                window.location.href = "/buy/ger/support";
            });
        },
        slide_toggle : function() {
            //console.log("stop timer - globels");
            clearTimeout(rotate_box);
            var h_teaser_table = $("#new_table").height();
            var h_content_anwendungsfall = 263;
            //$(".content_anwendungsfall").height();
            var h_content_teaser = 351;
            //$(".content_teaser").height();
            var h_teaser = 110;
            //$("#teaser").height();
            var slide_speed = 800;
            if($(this).hasClass("off")) {
                //$("#menu > ul > li.menu_button.consult").addClass("current");
                $(".content_teaser").animate({
                    height : "0px"
                }, slide_speed, "", function() {
                    $(".content_teaser").hide();

                    $(".button.index.configurator").hide();
                    $(".button.field.configurator").show();

                    $(".content_konfigurator").show();

                    $(".content_teaser").height(h_content_teaser);
                    $(".content_anwendungsfall").slideDown(slide_speed);
                    $("#new_table").slideDown(slide_speed);
                    $("#teaser").slideDown(slide_speed);
                    $("#stern").show();
                });
            } else {
                if(!_private.is_consulting) {
                    $("#menu > ul > li.menu_button.consult").removeClass("current");
                }
                $("#teaser").animate({
                    height : "0px"
                }, slide_speed, "", function() {
                    $("#teaser").hide();
                    $("#teaser").height(h_teaser);
                });

                $(".content_anwendungsfall").animate({
                    height : "0px"
                }, slide_speed, "", function() {
                    $(".content_anwendungsfall").hide();
                    $(".content_anwendungsfall").height(h_content_anwendungsfall);
                });

                $("#new_table").animate({
                    height : "0px"
                }, slide_speed, "", function() {
                    $("#new_table").hide();
                    $("#new_table").height(h_teaser_table);
                    $(".content_konfigurator").hide();
                    $("#beratung a").removeClass("bg2");
                    $(".button.field.configurator").hide();
                    $(".button.index.configurator").show();
                    $(".content_teaser").slideDown(slide_speed);
                    $("#stern").hide();
                    //console.log("start timer - globels");
                    rotate_box = setTimeout('move_divs()', 5000);
                });
            }
        },
        handle_defaults : function() {
            globals.timer("handle defaults");
            if(window.location.href.match(/\/windows\/?$/)) {
                globals.data.os = "w";
            }
            //define variables
            _private.is_consulting = (_globals.data.link === "consulting");

            //click event for button configurator
            $(".configurator_button").click(_private.slide_toggle);
            $(".closebutton").click(_private.slide_toggle);

        },
        helper_econda_tracking : function(argument) {
            if (typeof(window.emosPropertiesEvent) == 'function') {
                 window.emosPropertiesEvent(argument);
                return true;
            }
            window.emosTrackVersion = 2;
            $.getScript("/buy_static/"+mandator+"/js/" + lang + "/emos2.min.js").done(function(script, textStatus) {
                window.emosPropertiesEvent(argument);
            }).fail(function(jqxhr, settings, exception) {
                //console.log("Error send");
            }).success(function(jqxhr, settings, exception) {
                //console.log("Send ok");
            });
            //$.each(argument, function(x,y){
            //    console.log(x + " " + y);
            //});
            return true;
        },
        helper_econda_marker : function() {
            var document_url = location.pathname, marker = "";
            //console.log( "url: "+   document_url);
            switch(document_url) {
                case "ger/basket/display":
                    //marker = "DE-PRO-PORTAL/Bestellung/Warenkorb/anzeigen";
                    return marker;
                    break;
                case "/buy/ger/customerdata":
                    //marker = "DE-PRO-PORTAL/Bestellung/Kundendaten";
                    return marker;
                    break;
                case "/buy/ger/customerdata/overview":
                    //marker = "DE-PRO-PORTAL/Bestellung/Bestelluebersicht";
                    return marker;
                    break;
                default:
                    break;
            }

            var m = document_url.match(/smsconfirm/ig);
            if(m == null) {
            } else {
                if(m.length > 0) {
                    marker = "DE-PRO-PORTAL/SMS-Auth/Eingabe";
                    return marker;
                }
            }

        },
        helper_set_click_event_econda : function(argument) {
            var change_values = new Array(), x = 0, emosq = "";

            change_values["vs"] = "Virtual_Server";
            change_values["root"] = "Root_Server";
            change_values["ssd"] = "Root_Server_SSD";
            change_values["mgd"] = "Managed_Server";
            change_values["multi"] = "MultiServer";
            change_values["l"] = "Linux";
            change_values["w"] = "Windows";
            change_values["STORAGE"] = "HiDrive";
            $("a[class*='jq_track_marker']").click(function() {

                var link_url = $(this).attr("href");
                if(link_url) {
                } else {
                    var link_url = argument;
                }

                if(link_url) {
                    x++;
                    var link_url_array = link_url.split("/");
                    var link_url_array_quad = link_url_array[4].split("_");
                    var link_product = "", link_product_2 = "";

                    if(link_url_array_quad[0] == "STORAGE") {
                        link_product = change_values[link_url_array_quad[0]] + "_" + link_url_array_quad[1].replace("PRO", "Pro_") + "_" + link_url_array_quad[2];
                        link_product_2 = "HIDRIVE_PRO";
                    } else {
                        link_product = change_values[link_url_array_quad[0]] + "_" + change_values[link_url_array_quad[2]] + "_Level_" + link_url_array_quad[1] + "_VLZ" + link_url_array_quad[3];
                        link_product_2 = change_values[link_url_array_quad[0]] + "_" + change_values[link_url_array_quad[2]];
                    }
                    var emosq = {};
                    emosq.marker = "DE-PRO-PORTAL/Marker_" + link_product;
                    emosq.content = "DE-PRO-PORTAL/WARENKORB/" + link_product_2.toUpperCase();
                    emosq.orderProcess = "DE-PRO-PORTAL/WARENKORB/" + link_product_2.toUpperCase();
                    emosq.siteid = "www.strato-pro.com";
                    emosq.langid = "ger";
                    emosq.country = "DE";

                    window.emosTrackVersion = 2;
                    window.emosPropertiesEvent(emosq);

                    //$.each(emosq, function(x,y){
                    //    console.log(x + " : " + y);
                    //});
                    //console.log("xx "+x);
                    //globals.enconda_tracking(emosq);
                    //return false;
                } else {
                    //console.log("no link_url ");
                    return false;
                }

                return true;
            });
        },
        
        helper_set_link_kundenlogin_econda : function() {
            $("#link_kundenlogin").click(function(){
                var emos ={};                
                emos.marker = "DE-PRO-PORTAL/Marker_Prozess_Kundenlogin";  
                emos.content = "DE-PRO-PORTAL/PROZESS/"; 
                emos.orderProcess = "DE-PRO-PORTAL/PROZESS/Kundenlogin"; 
                emos.siteid ="www.strato-pro.com";
                emos.langid ="<tmpl_var name='language' default='ger'>";
                emos.country ="DE";  
                 _private.helper_econda_tracking(emos);
            });           
            
        },
        helper_set_ekomi_link_econda : function(){
            $("#ekomi_link").click(function(){
                var emos ={};                
                emos.marker = "DE-PRO-PORTAL/Marker_Prozess_ekomi";  
                emos.content = "DE-PRO-PORTAL/PROZESS/"; 
                emos.orderProcess = "DE-PRO-PORTAL/PROZESS/ekomi"; 
                emos.siteid ="www.strato-pro.com";
                emos.langid ="<tmpl_var name='language' default='ger'>";
                emos.country ="DE";  
                _private.helper_econda_tracking(emos);
            });       
        }
        
        
    };
    api = {

        /* ###################################################################### */

        init : function(options) {
            _private.handle_defaults();
            var success = null;
            var defaults = {
                path : globals.config.products.source,
                success : function() {
                },
                error : function() {
                },
                finish : function() {

                },
                name : "products",
                is_hidrive : false
            };
            var opts = $.extend(defaults, options);
            opts.path = (opts.is_hidrive) ? globals.config.products.source2 : globals.config.products.source;
            opts.path = (window.location.href.match(/(server\-cloud)/gi)) ? globals.config.products.cloud : opts.path;
            success = _private.get_json_by_url(opts);
            if(success) {
                _private.handle_get_parameters();
                opts.success.call(this);
                opts.finish.call(this);
            } else {
                if(success === null) {
                    globals.error({
                        name : 'globals.data',
                        value : 'possible asynchronous request occured error'
                    });
                }

                opts.error.call(this);
            }
            return success;
        },
        reset : function(options) {
            var defaults = {
                name : "products"
            };
            var opts = $.extend(defaults, options);
            if(opts.name && globals.data[opts.name]) {
                switch(opts.name) {
                    case "errors":
                        globals.data[opts.name] = [];
                        break;
                    case "products":
                        globals.data[opts.name] = {};
                        break;
                    default:
                        globals.data[opts.name] = {};
                        break;
                }
            }
        },
        error : function(options) {
            //console.log("error called");
            $("#showerror").html("");
            var defaults = {
                name : "",
                value : "",
                show : true
            };
            var opts = $.extend(defaults, options);
            if(opts.name && opts.value) {
                globals.data.errors.push({
                    name : opts.name,
                    value : opts.value
                });
            }
            $.each(globals.data.errors, function(key, value) {
                $("#showerror").append("[" + value.name + "]: " + value.value);
            });
            if(opts.show === true) {
                $("#showerror").show();
            } else {
                $("#showerror").hide();
            }
        },
        timer : function() {
            globals.data.time.push([new Date().getTime(), arguments[0]]);

        },
        enconda_tracking : function(arg1) {
            _private.helper_econda_tracking(arg1);
        },
        econda_marker : function() {
            return _private.helper_econda_marker();
        },
        show_debug : function() {
            if(jQuery.url.param("time") === "show") {
                // $(".footer").append("<div id='debug'></div>");
                var log = "Statistics (in ms):\n------------------\n";
                $.each(globals.data.time, function(index, value) {
                    log = log + _private.get_time(index, true);
                });
            }
        },
        set_click_event_econda : function() {
            _private.helper_set_click_event_econda();
        },
        set_click_event_econda_all_server : function(argument) {
            _private.helper_set_click_event_econda(argument);
        },
        set_link_kundenlogin_econda : function(){
            _private.helper_set_link_kundenlogin_econda();
        },
        set_ekomi_link_econda : function(){
            _private.helper_set_ekomi_link_econda();
        }
        
        
        
        /* END api ############################################################## */
    };
    api = $.extend(api, true, _globals);

    return api;

} )();
String.prototype.format = function() {
    var formatted = this;
    for(var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};
String.prototype.formatN = function() {
    var formatted = this;
    $.each(arguments, function(id, argument) {
        $.each(argument, function(index, value) {
            var regexp = new RegExp('(\\{' + index + '\\|[^\\}]*\\}|\\{[^\\||^\\}]*\\|'+index+'\\}|\\{'+index+'\\})', 'gi');
            formatted = formatted.replace(regexp, value);
        });
    });
    return formatted;
};
String.prototype.format2 = function(args) {
    var formatted = this;
    for(var i = 0; i < args.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, args[i]);
    }
    return formatted;
};


if (!String.prototype.modulo) {
	String.prototype.modulo = function( divisor ) {
/*
Bei BigINTs rechnet JS irgendwann ungenau.
(schlecht bei z.B. Prüfziffern-Verfahren).
BigINT = "5464565464564565465464564";
x = 12;

BigINT.modulo(x).produkt;
BigINT.modulo(x).rest;
( BigINT.modulo(x).divident; )
( BigINT.modulo(x).divisor; )

*/
		var divident = this,
			cDivident = '',
			cRest = '',
			cChar = '',
			cOperator,
			i,
			result = {
				'divident'	: this.toString(),
				'divisor'	: divisor,
				'produkt'	: '',
				'rest'		: ''
			};
		for ( i in divident) {
			cChar = divident[i];
			if( (typeof(cChar)).toLowerCase() === "string") {
				cOperator = cRest + '' + cDivident + '' + cChar;
				if ( cOperator < parseInt(divisor) ) {
					cDivident += '' + cChar;
				} else {
					result.produkt += parseInt( ( cOperator / divisor ) , 10);
					cRest = cOperator % divisor;
					if ( cRest == 0 ) {
						cRest = '';
					}
					cDivident = '';
				}					
			} 
		}


		cRest += '' + cDivident;
		if (cRest == '') {
			cRest = 0;
		}
		result.divisor = result.divisor.toString();
		result.rest = cRest.toString();
		return( result )
	}
};


if (!Array.prototype.indexOf) {

	Array.prototype.indexOf = function(searchElement /*, fromIndex */) {
		"use strict";

		if (this === void 0 || this === null)
			throw new TypeError();

		var t = Object(this);
		var len = t.length >>> 0;
		if (len === 0)
			return -1;

		var n = 0;
		if (arguments.length > 0) {
			n = Number(arguments[1]);
			if (n !== n) // shortcut for verifying if it's NaN
				n = 0;
			else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0))
				n = (n > 0 || -1) * Math.floor(Math.abs(n));
		}

		if (n >= len)
		  return -1;

		var k = n >= 0
				? n
				: Math.max(len - Math.abs(n), 0);

		for (; k < len; k++) {
			if (k in t && t[k] === searchElement)
				return k;
		}
		return -1;
	};
}



window.areCookiesEnabled =( function () {
	var _private;
	
	_private = {
	
		"createCookie" : function ( name, value, days ) {
			var expires;
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = "; expires=" + date.toGMTString();
			}
			else expires = "";
			
			document.cookie = name + "=" + value + expires + "; path=/";
		},
		"readCookie" : function ( name ) {
			var nameEQ = name + "=",
				ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
			}
			return null;
		
		}
	};
	
	return function () {
        var r = false;
        _private.createCookie("testing", "Hello", 1);
        if ( _private.readCookie("testing") != null ) {
            r = true;
			_private.createCookie("testing", "", -1);
        }
        return r;
	}
})();

function confirm(message, callback ) {
    $("#confirm_message").html(message);
	
	$('#confirm').modal({
		closeHTML: "<a href='#' title='Close' class='modal-close'><img src='/buy_static/strato/img/ger/overlay/fancybox.png' alt='close'></a>",
		position: ["30%"],
		overlayId: 'confirm-overlay',
		containerId: 'confirm-container', 
		onShow: function (dialog) {
			var modal = this;
			$("#confirm-container").css("height","90");
            $("#confirm-container").css("z-index","910000005");
            $("#confirm-container").css("width","610px");
             $("#confirm-container").css("left","32%");
			$('#yes', dialog.data[0]).click(function () {
				// call the callback
				if ($.isFunction(callback)) {
					callback.apply();
					
				}
				// close the dialog
				modal.close(); // or $.modal.close();
			});
		}
	});
}


strato.global.show_24_7 = function(showtime_von, showtime_bis){
    $(".kontakt_telefonnummer").hide();
    var showtime_von    = showtime_von || 20,
        showtime_bis    = showtime_bis || 8;
    $.ajax({
        type: "GET",
        url: "/_assets_de/module/timecheck",
        cache: false,
        success: function(data, status, xhr) {
            var hour = parseInt(xhr.getResponseHeader('Date').match(/((?:[01]\d)|(?:2[0-3])):([0-5]\d):([0-5]\d)/g)[0].split(":")[0])+2;
            if(hour>= showtime_von || hour < showtime_bis) {
                $(".kontakt_telefonnummer").show(300);
            }
        }
    });
}
$(function() {
    strato.global.show_24_7();
});