
var basket = (function () {

    /*  #############################################################################
            personalize 
    ############################################################################# */
    "use strict";
    var _refs = {},
    _data = {},
    _private = {},
    api = {}, arg_url = "";

    $.extend( _data, true, {
        'assets' : {
            'texte' : {},
            'error_text' : {
            
            }
        }
    })
    _private = {

        /*
         *  show_error   
         *     
         *  The function receives error messages and hangs it on the DIV with id - showerror
         */
        show_error: function (Errortext) {

            var object_check_values = {};
            object_check_values.Errortext = _private.is_argument_okay(Errortext, "show_error no Errortext");

            if (_private.values_are_true(object_check_values) === true && showerror == true) {
                $("#showerror").append("<br>" + Errortext).show();
                return true;
            } else {
                return false;
            }
        },
        /*
         *  load_basket_count   
         *     
         *  load counts at article in basket
         */
        load_basket_count: function (arg_url) {
            /*if (typeof (arg_url) === "undefined") {
                var url = "/base/basket/count";
            } else {
                var url = arg_url;
            }*/
            var url = ( arg_url || "/base/basket/count" );

            $.ajax({
                url: url,
                success: function (data) {
                    var counts = data.count_of_article_in_basket;
                    if (data.count_of_article_in_basket == "") {
                        return false;
                    } else {
                        _private.build_counts_html(counts);
                        return true;
                    }
                },
                statusCode: {
                    404: function () {
                        return false;
                    }
                }
            });
            return true;
        },
        /*
         *  build_counts_html   
         *     
         *  write the counts to html
         */
        build_counts_html: function (arg1) {
            if (arg1 == "") {
                return false;
            } else {
                $("#basket_counts").html(arg1 + " Artikel");
                return true;
            }
        },

        /*  
         *  insert_list_item   
         *     
         *  This function depends on a list element (ul) a list item (li)
         */

        make_tooltip: function (arg1, arg2, arg3) {

            if (typeof (arg1) === "undefined") {
                return false;
            }
            if (typeof (arg2) === "undefined") {
                return false;
            }

            var html_start = '\n\n<table id="tp_' + arg2 + '" border="0" cellpadding="0" cellspacing="0" class="error_layer"' +
                ' style="position:absolute;z-index:1000000;width:180px;margin-top:13px;margin-left:10px;display:none;"><tr class="basket_tooltip_noheight"><td class="r1_c1"></td>' +
                '<td class="r1_c2"></td><td class="r1_c3"></td></tr><tr class="basket_tooltip_noheight"><td class="r2_c1" valign="top">' +
                '<div class="left_icon"></div></td><td class="r2_c2">';
            var html_end = '</td><td class="r2_c3"  >&nbsp;</td></tr><tr class="basket_tooltip_noheight"><td class="r3_c1"></td>' +
                '<td class="r3_c2">&nbsp;</td><td class="r3_c3"></td></tr></table>\n\n';
            var html_attention = '<i id="err_img_mediacode" class="icon-warning"></i>';
			
			
			
			var html_start = '<div id="tp_' + arg2 + '">' +
				'	<div style="display: block;" class="" id="">' +
				'		<div class="error_layer" id="tp_last_name">' +
				'<i class="icon-warning"></i><div class="error_color2">';
				
			var html_attention = '';
			
			var html_end = '</div></div></div></div>';

/*
				<div class="tooltipp">
					<div style="display: block;" class="" id="">
						<div class="error_layer" id="tp_last_name">
							<i class="icon-warning"></i>
							<div class="error_color2">
							Sie ben&ouml;tigen mindestens eine Domain um Ihre Bestellung abzuschlie&szlig;en.
							</div>
						</div>
					</div>     
				</div>  
*/

            switch (arg3) {
                case "jstest":
                    return true;
                    break;

                default:
                    return html_start + html_attention + arg1 + html_end;
                    break;
            }




        },

        coupon_duty: function (position, code) {
             
            $("coupon_id_"+position).css("border-color","red");
            
            $("#err_" + position + "_right").removeClass("basket_input_right_error");
            $("#err_" + position + "_left").removeClass("basket_input_left_error");
            $("#err_" + position + "_middle").removeClass("basket_input_middle_error");
            $("#err_" + position).removeClass("basket_input_error_off_error");
            var error_text = "Bitte geben Sie Ihren Gutscheincode ein.";
            $("#err_" + position + "_right").html(_private.make_tooltip(error_text, "err_img_" + position));

            $("#coupon_id_" + position).bind({
                "focus": function () {
                    $("table[id*='tp_']").hide();
                    $("#tp_err_img_" + position).fadeIn();
                },
                "focusout": function () {
                    $("#tp_err_img_" + position).fadeOut();
                }
            });


            $("#err_img_" + position + " img").bind({
                "mouseover": function () {
                    $("#tp_err_img_" + position).show();
                },
                "mouseleave": function () {
                    $("#tp_err_img_" + position).fadeOut();
                },
                "mouseout": function () {
                    $("#tp_err_img_" + position).fadeOut();
                }

            });
            
            $("#err_img_coupon_id_"+position).bind({
                
                "mouseover": function () {
                    $("#tp_err_img_" + position).show();
                },
                "mouseleave": function () {
                    $("#tp_err_img_" + position).fadeOut();
                },
                "mouseout": function () {
                    $("#tp_err_img_" + position).fadeOut();
                }                
            
            });
            

            $("#coupon_field_" + position +" .icon-warning"
			).bind({
                "click": function () {
					$("#tp_err_img_" + position).focus();
					if( $("#tp_err_img_" + position +" i").is(':visible') ){
						$("#tp_err_img_" + position).hide()
					} else {
						$("#tp_err_img_" + position).show()
					}
                } 

            });
            $("div#tp_err_img_" + position).bind({
                "mouseover": function () {
                    $("#tp_err_img_" + position).show();
                },
                "mouseleave": function () {
					$("#tp_err_img_" + position).focus()
					$("#tp_err_img_" + position).hide()
                },
                "click": function () {
					$("#tp_err_img_" + position).focus()
					$("#tp_err_img_" + position).hide()
                }

            });
			$( '#tooltip_'+ position + ' .tooltipp' ).show()
			



            $("div#tp_err_img_" + position).fadeIn();


        },


        get_coupon_err_text : function (err_status) {
            var err_status = ""+( err_status || "" ),
                error_text;
            switch (err_status) {
              case "1":
                error_text = "Bitte geben Sie einen g&uuml;ltigen Gutscheincode ein.";
                break;
              case "2":
                error_text = "Der Gutscheincode ist ung&uuml;ltig.";
                break;
              case "3":
                error_text = "Der Gutscheincode wurde bereits eingel&ouml;st.";
                break;
              case "4":
                error_text = "Die Aktion f&uuml;r den Gutscheincode ist bereits abgelaufen.";
                break;
              case "5":
                error_text = "Der Gutscheincode konnte nicht eingel&ouml;st werden. Bitte versuchen Sie es zu einem sp&auml;teren Zeitpunkt erneut.";
                break;
              case "6":
                error_text = "Der Gutscheincode ist ung&uuml;ltig.";
                break;
              case "":
                error_text = "[no err_code]";
                break;
              default:
                error_text = "[err_code " + err_status+ " does not exist]" ;
                break;
            }
            
            return error_text;
        },
        
        handle_coupon_err_text : function ( position, error_text ) {
            
            //console.log("handle_coupon_err_text: "+position+" "+error_text );
            
            $("#coupon_id_"+position+"").css("border-color","red");
            
            $("#err_" + position + "_right").html(
                _private.make_tooltip( 
                    error_text, 
                    "err_img_" + position
                )
            );            
            
            $("#coupon_id_" + position).bind({
                "focus": function () {
                    $("table[id*='tp_']").hide();
                    $("#tp_err_img_" + position).fadeIn();
                },
                "focusout": function () {
                    $("#tp_err_img_" + position).fadeOut();
                }
            });            
            
            


    

    
    
            $("#err_img_" + position + " img").bind({
                "mouseover": function () {
                    $("#tp_err_img_" + position).show();
                },
                "mouseleave": function () {
                    $("#tp_err_img_" + position).fadeOut();
                },
                "mouseout": function () {
                    $("#tp_err_img_" + position).fadeOut();
                }
    
            });

			
			
			/////////////////
            $("#coupon_field_" + position +" .icon-warning").bind({
                    "click": function () {
    					$("#tp_err_img_" + position).focus();
    					if( $("#tp_err_img_" + position +" i").is(':visible') ){
    						$("#tp_err_img_" + position).hide()
    					} else {
    						$("#tp_err_img_" + position).show()
    					}
                    }
    
            });
            
            $("div#tp_err_img_" + position).bind({
                    "mouseover": function () {
                        $("#tp_err_img_" + position).show();
                       
                    },
                    "mouseleave": function () {
    					$("#tp_err_img_" + position).focus();
    					$("#tp_err_img_" + position).hide();
                    },
                    "click": function () {
    					$("#tp_err_img_" + position).focus()
    					$("#tp_err_img_" + position).hide()
                    }
    
            });
                
            $("#err_img_first_name").bind({
                    "mouseover": function () {
                        $("#tp_err_img_" + position).show();
                       
                    },
                    "mouseleave": function () {
    					$("#tp_err_img_" + position).focus();
    					$("#tp_err_img_" + position).hide();
                    },
                    "click": function () {
    					$("#tp_err_img_" + position).focus();
    					$("#tp_err_img_" + position).hide();
                    } 
                    
            });
            $("#err_company").bind({
                    "mouseover": function () {
                        $("#tp_err_img_" + position).show();
                       
                    },
                    "mouseleave": function () {
    					$("#tp_err_img_" + position).focus();
    					$("#tp_err_img_" + position).hide();
                    },
                    "click": function () {
    					$("#tp_err_img_" + position).focus();
    					$("#tp_err_img_" + position).hide();
                    } 
                    
            });
            
			$( '#tooltip_'+ position + ' .tooltipp' ).show()
            $("div#tp_err_img_" + position).fadeIn();
        },
        check_coupon: function (position, code) {
            var _this   = this, 
                url     = "/buy/ger/basket/add_coupon/" + position + "/" + code;
            $("#err_" + position + "_right").removeClass("basket_input_right_error");
            $("#err_" + position + "_left").removeClass("basket_input_left_error");
            $("#err_" + position + "_middle").removeClass("basket_input_middle_error");
            $("#err_" + position).removeClass("basket_input_error_off_error");
            $("#err_" + position + " span").addClass("hide");

            $.ajax({
                url: url,
                success: function (data) {
                    if (data.success == "0") {
                        _this.handle_coupon_err_text( 
                            position,
                            _this.get_coupon_err_text(data.error_number)
                        );
                    };
                    if (data.success == "1") {
                        //document.getElementById('loading_overlay_bg').style.display = 'inline';
						$('#confirm-overlay').show();
                        $('#coupon_field_' + position).slideUp("fast");
                        $('#coupon_code_' + position).val("");
                        $("#go_customerdata").show();
                        location.reload();
                    };
                },
                statusCode: {
                    404: function () {

                        return false;
                    }
                }
            });
            return true;
        },

        /*  function helper_add_addon_to_basket
         *   
         *   insert addons into basket 
         *   shortname, position, type
         */

        helper_add_addon_to_basket: function (arg1, arg2, arg3, arg4) {
            var add_item = true,
                item_added = true;
            
            if (arg1 == "" || arg2 == "" || arg3 == "") {
                return false;
            }
            //alert(server_test["server_"+arg2+"_top"] );

            if (arg3 == "button") {
                $("#" + arg2 + "_" + arg1 + "_add").css({
                    "display": "none"
                });
                $("#" + arg2 + "_" + arg1 + "_added").css({
                    "display": "inline"
                });

            } else if (arg3 == "radio") {
				//console.log("arg2:"+ arg2 + " arg1:"+arg1);
                var real_shortname = check_za(arg2, arg1);
                arg1 = real_shortname;
            }

            if (add_item == true) {
                var add_url = "/buy/ger/basket/add_addon_shortname/" + arg2 + "/" + arg1;

                $.ajax({
                    url: add_url
                }).done(function (data) {
                    //console.log("Sample of data:", data);
                }).success(function (data) {

                    var helper_counter_za = eval("server_" + arg2 + "_top");


                    if (helper_counter_za == 1) {
                        document.getElementById('loading_overlay_bg').style.display = 'inline';
                        document.getElementById('overlay').style.display = 'none';
                        if (arg4 != "test") {
                            location.reload();
                        } else {
                            return true
                        };

                    } else {

                        server_test["server_" + arg2 + "_top"] = server_test["server_" + arg2 + "_top"] - 1;
                        //alert( server_test["server_"+arg2+"_top"]);
                        if (server_test["server_" + arg2 + "_top"] == 0) {
                            if (arg4 != "test") {
                                location.reload();
                            } else {
                                return true
                            };
                        }

                    }

                }).fail(function (data) {
                    var helper_counter_za = eval("server_" + arg2 + "_top");
                    if (helper_counter_za == 1) {
                        document.getElementById('loading_overlay_bg').style.display = 'inline';
                        document.getElementById('overlay').style.display = 'none';
                        if (arg4 != "test") {
                            location.reload();
                        } else {
                            return true
                        };

                    } else {
                        server_test["server_" + arg2 + "_top"] = server_test["server_" + arg2 + "_top"] - 1;
                        //alert( server_test["server_"+arg2+"_top"]);
                        if (server_test["server_" + arg2 + "_top"] == 0) {
                            if (arg4 != "test") {
                                location.reload();
                            } else {
                                return true
                            };
                        }
                    }

                });





            }
            return true;

        },

        /*
         *  basket_miniwidget (header, topnavigation, icon)
         *     
         *  instantiate a existing dom-element to be the basket
         *  append the click-event 
         *  show the counter
         *  refresh it on page-focus (refocus)
         */
        miniwidget_start: function (element) {

            try {
                var err_one = document.getElementById(element);
                var err_two = document.getElementById(element + '_count');
                if (err_one === null) throw "element is not in the dom. #" + element;
                if (err_two === null) throw "element is not in the dom. #" + element + '_count';
            } catch (err) {
                //console.log('error: ' + err);
                return false
            }

            // bind click-event
            $('#' + element).bind("click", function () {
                window.location.href = '/buy/ger/basket/display'
            });

            // fetch count from backend and update counter in FE
            _private.miniwidget_update(element);

            // after returning to the window, we should refresh the counter, too
            // attach to the body-onload-event: to update after coming back from another tab or window
            var focused = false;
            $(window).bind('focus', function () {
                if (!focused) {
                    //console.log('refocussed');
                    _private.miniwidget_update(element);
                    focused = true;
                }
            });

            $(window).bind('blur', function () {
                if (focused) {
                    focused = false;
                }
            });

        },


        /*
         *  miniwidget_update
         *     
         */
        miniwidget_update: function (element) {

            try {
                var x = document.getElementById(element + '_count');
                if (x === null) throw "element is not in the dom. #" + element + '_count';
            } catch (err) {
                //console.log('error: ' + err);
                return false
            }


            // update the counter ...       
            $('span#' + element + '_count').html(_private.miniwidget_get_totalcount())
                .fadeTo('slow', 1, function (element) {})
                .animate({
                opacity: 0
            }, 100, "linear", function () {
                $(this).animate({
                    opacity: 1
                }, 200);
            });


        },


        /*
         *  miniwidget_get_totalcount
         *     
         */
        miniwidget_get_totalcount: function (url) {

            var mycounter = 0;

            // set defaults
            if (typeof (url) === "undefined") {
                var url = "/base/basket/count";
            }

            // request
            $.ajax({
                url: url,
                type: "GET",
                dataType: "json",
                async: false,
                cache: false,
                complete: function (d) {
                    mycounter = jQuery.parseJSON(d.responseText).count;
                }
            });

            return mycounter;
        }

    }

    api = {
        /* ###################################################################### */

        /*
         *  init   
         *     
         *  api.init() generated personalize
         */
        init: function () {

            return true;
        },

        /*
         * basket_count
         *
         *  
         */
        basket_count: function () {
            _private.load_basket_count();
            return true;
        },

        helper_check_coupon: function (position, code) {
            _private.check_coupon(position, code);
            return true;
        },
        helper_make_tooltip: function (arg1, arg2, arg3) {
            return _private.make_tooltip(arg1, arg2, arg3);;
        },
        helper_coupon_duty: function (position, code) {
            _private.coupon_duty(position, code);
            return true;
        },
        add_addon_to_basket: function (arg1, arg2, arg3, arg4) {
            _private.helper_add_addon_to_basket(arg1, arg2, arg3, arg4);
            return true;
        },

        miniwidget_start: function (element) {
            _private.miniwidget_start(element);
        },

        miniwidget_update: function (element) {
            _private.miniwidget_update(element);
        }




        /* END api ############################################################## */
    };
    
    /* #########################################################################
    https://ginger.strato.de/jira/browse/POR-901
    Neu Funktion für Übergebenen Gutschein-Code, der als 'schlecht' bekannt ist
    (vom Backend geprüft)
    
    Flags in "tmpl_var "basket" => [n]" :
     - "coupon_candidate" : [code]
     - "coupon_is_bad" : [boolean]
    ######################################################################### */    
    $.extend(api, true, {
    
        'helper_check_coupon' : function (position, code, status) {
        
            var status      = ( status || 'unknown'),
                code        = ( code || ""),
                position    = ( position || 1 );
            $('#coupon_id_' + position).val( code );
            
            if( status === 'unknown' ){
                _private.check_coupon( position, code);
            } else {
                _private.handle_coupon_err_text( 
                    position,
                    _private.get_coupon_err_text( status )
                );
            };
            return true;
        }
    });
    
    
    /* #########################################################################
    REFACTORING:
    ######################################################################### */
    
//_data

    /* #########################################################################
    Aliase, damit ....dispatcher[ schema.link.name ] verwendet werden kann
    ######################################################################### */
    // $.extend(api, true, {
    //     "post_data"         : api.SendFormData,
    //     "check_email"       : api.CheckEmail,
    //     "check_username"    : api.CheckUsername
    // })

    /*    #########################################################################
    Erweiterungen, für Test-Umgebung
    ######################################################################### */

    $.extend(api, true, {
        _refs: _refs,
        _data: _data,
        _private: _private
    });
    return api;
})();
