/*global $, jQuery, $F, g, window, prepare_tooltip, prepare_attitude, conditions_test, verify_elems_for_prepare */

g = $F.ksb.globals;
jQuery.fn.tooltip=function(opt){
	if ( this.length ) {
		return this.each(function () {
			var elm=$(this);
			conditions_test(opt, elm);
			function conditions_test(opt,elm){
				g.conf={};
				$.extend(true,g.conf, opt);
				verify_elems_for_prepare(elm, g.conf);
			}
			function verify_elems_for_prepare(elm, conf){
				if(!elm.hasClass("tooltip")){
					if(conf.attitude){
						elm.addClass(conf.attitude);
						prepare_attitude(elm, conf);
					}
					else{
						elm.addClass("tooltip");
						prepare_attitude(elm,conf);
					}
				}
			}
			function prepare_attitude(elem,conf){
				//Wenn Klasse Tooltip, dann ist es Klickbar -> die Klickfunktion binden
				if(elem.hasClass("tooltip")){
					elem.bind("click", function(){
						prepare_tooltip(elem, conf);
						make_tt(elem, conf);
					});
				}
				//anderenfalls den Hover binden --> class="tooltiplink"
				else{
					elem.hover(function(){
						prepare_tooltip(elem);
						make_tt(elem);
					},
					function(){
						prepare_tooltip(elem);
						make_tt(elem);
					});
				}
			}
			//Tooltip neu aufbauen, wenn noch nicht vorhanden
			function make_tt(elem, conf){
			//Custom event Click an Body binden und bei Bedarf wieder entfernen
				g.cl_elem_click = elem.attr('id');
				if($("div #" + elem.attr('id')+"_tt_cont").length === 0){
					if(!conf.multi){
						if($(".tt_identifier").length>0){
							$(".tt_identifier").remove();
						}
					}
				//config setzen und css Grund-Propertys
					var config = {
						css:{
							//"font-family" : "Arial, Verdana",
							"font-size": "10px",
							"color": "#000000",
							"position": "absolute",
							"text-align": "left",
							"display": "none",
							"background-color": "#ffffff",
							"z-index": "9999",
							"padding-left": "10px",
							"padding-right": "10px",
							"padding-top": "10px",
							"padding-bottom": "10px",
							"width": "200px",
							"height": "0px",
							//wichtig für nachfolgende Berechnungen! wird später noch behandelt. Unbedingt in den CSS Propertys lassen!!!
							"border": "1px solid rgb(204, 204, 204)",
							"line-height": "14px",
							"top": "0",
							"left": "0",
							"cursor": "text"
						}
					};
					//configDaten mit den übergebene Daten mergen
					$.extend(true,config, opt);
					//Position des Tooltip berechnen
					g.position = $("#"+elem.attr("id")).offset();
					g.dimension_w=  $("#"+elem.attr("id")).width();
					g.dimension_h=  $("#"+elem.attr("id")).height();
					//console.log(g.position.left);
					config.css.top =   parseInt(config.css.top, 10) + parseInt(g.position.top, 10)+ g.dimension_h  +"px" ;
					config.css.left_orig = parseInt(config.css.left, 10);
					config.css.left =   parseInt(config.css.left, 10) + parseInt(g.position.left, 10) +g.dimension_w +"px";
					var css_prop="";
					//Propertys merken
					for (var key in config.css) {
						css_prop +=key +":"+config.css[key]+"; ";
					}
					//tooltip aufbauen
					g.divmaker    =  "";
					g.divmaker +=  "<div id='"+elem.attr('id')+"_tt_cont' class='tt_identifier'></div>";
					$("#tt_"+elem.attr("id")).after(g.divmaker);
					g.tooltip_elem = $("#"+elem.attr("id")+"_tt_cont");
					//Wenn eigenes Theme, dann nimm das, ansonsten nimm den Standard
					if(!config.theme){
						g.tooltip_elem.attr("style", css_prop);
					}
					else{
						g.tooltip_elem.addClass(config.theme);
					}
					//Message vorbereiten
					if(!config.box){
						if(config.title){
							g.tooltip_elem.html(elem.attr("title"));
						}
						else{
							g.tooltip_elem.html(config.msg);
						}
					}
					else{
						g.helem=elem.attr("id");
						g.tooltip_elem.html($(config.box).html());
					}
					//drageable machen, wenn erforderlich und gewünscht
					if(config.dragable===true){
						g.tooltip_elem.draggable();
						g.tooltip_elem.addClass("tt_link");
					}
					//Prüfen ob tooltip oder tooltiplink
					if(elem.hasClass("tooltip")){
						g.tooltip_elem.append("<div class='closer "+elem.attr('id')+"' id='cl_"+elem.attr('id')+"'><img id='closerimage' src='/assets/ksb/strato/shared/images/icons/icon_hinweisbox_schliessen.png' border='0'></div>");
						g.elemwidth=g.tooltip_elem.css("width");
						g.elemwidth=parseInt(g.elemwidth, 10);
						g.elemheight=g.tooltip_elem.css("height");
						g.elemheight=parseInt(g.elemheight, 10);
						//Berechnung der Position des Closerimages als Standard
						g.closerposition_right=g.elemwidth - 3;
						g.closerposition_top = g.elemheight +10;
						// Dem Closerimage die neue Position geben. -- wenn ein theme benutzt wird, wird die Position aus dem theme CSS verwendet!!
						$(".closer."+elem.attr('id')).attr("style","top:"+g.closerposition_top+"px");
						$(".closer."+elem.attr('id')).attr("style","left:"+g.closerposition_right+"px");
						//neue Contentposition berechnen
						g.new_content_pos=parseInt(config.css["padding-top"], 10) + g.closerposition_top+8;
						g.tooltip_elem.css("padding-top", g.new_content_pos+"px");
						if(g.tooltip_elem.parent()[0].tagName=="TD"){
						//Sonderbehandlung, falls parent eine Tabelle....
							g.tooltip_elem.click(function(){
								return true;
							});
						}
						//Dem Close-Button seine Eigenschaft geben
						$(".closer."+elem.attr('id')).click(function(){
								$(this).parent().remove();
								if ($(".tt_identifier").length===0){
									$("body").unbind("click.tt_check");
								}
						});
						$("body").bind("click.tt_check", function(event) {
							g.clickelement=event.target.id;
							g.cl_elem=g.clickelement.substring(0,3);
							if(g.clickelement!==g.cl_elem_click && $(event.target).parents(".tt_identifier").length === 0 ){
								if(g.clickelement != "closerimage"){
									if(g.clickelement.substring(g.cl_elem_click.length)!="_tt_cont"){
										$(".tt_identifier").remove();
										$("body").unbind("click.tt_check");
									}
								}
							}

						});
					}
					g.tooltip_elem.css("height", "auto");
					g.tooltip_elem.toggle();

					//added
					// inview da utils noch nicht verfuegbar spaeter raus
					var inView = function (element, fullView) {
						var bottom, top, right, left, width = 0, height = 0;
						fullView = fullView || true;

						if (fullView) { // if u wish to see the whole element
							width   = element.width();
							height  = element.height();
						}

						bottom  = ($(window).height() + $(window).scrollTop()) <= element.offset().top + height;
						top     = $(window).scrollTop() >= element.offset().top + element.height() - height;
						right   = ($(window).width() + $(window).scrollLeft()) <= element.offset().left + width;
						left    = $(window).scrollLeft() >= element.offset().left + element.width() - width;

						return {
							port:   !right && !left && !bottom && !top,
							right:  !right,
							left:   !left,
							top:    !top,
							bottom: !bottom
						};
					};
					// magic
					if (!inView(g.tooltip_elem, 1).right) {
						g.tooltip_elem.css("left", (parseInt(config.css.left_orig, 10) + g.tooltip_elem.position().left - g.tooltip_elem.width() - 3 - 20*2) + "px");
					}
					// added end
				}
				else{
					//Wenn Tooltip bereits vorhanden wegschmeissen
					$("#"+elem.attr("id")+"_tt_cont").remove();
				}
			}
			function prepare_tooltip(elem, conf){
				if($(elem).attr("id")===""){
					g.z_zahl=Math.floor(Math.random()*10000);
					g.new_id="z_id"+g.z_zahl;
					$(elem).attr("id", g.new_id);
				}
				if($(elem).css("float")!="none"){
					g.floating=$(elem).css("float");
				}
				else{
					g.floating="none";
				}
				g.elem_pruef=elem[$.prop ? "prop" : "attr"]("id").substring(0,3);
				g.elem_pruef_parent=elem.parent()[$.prop ? "prop" : "attr"]("id").substring(0,3);
				if(g.elem_pruef!="tt_" && g.elem_pruef_parent!="tt_"){
					var element=$("#"+elem.attr('id'));
					var display;
					if(element.css("display")){
						display=element.css("display");
					}
					g.new_id = "tt_"+elem.attr("id");
					if(conf.ie_extra){
						g.preparation_div="<div class='tooltipbox' id='"+g.new_id+"' style='width:auto; position:static; display:display; float:"+g.floating+";";
					}
					else{
					g.preparation_div="<div class='tooltipbox' id='"+g.new_id+"' style='width:auto; float:"+g.floating+";";
						if(display){
							g.preparation_div+="display:"+display+";";
						}
					}
					g.preparation_div+="'>";
					element.wrap(g.preparation_div);
				}
			}
		});
	}
 };
