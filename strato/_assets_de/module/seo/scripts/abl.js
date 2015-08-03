window.totalBusinessListings = {};
window.totalBusinessListings.total = 29;
window.totalBusinessListings.done = 0;
window.totalBusinessListings.exact = 0;
window.totalBusinessListings.error = 0;
window.totalBusinessListings.problems_found = 0;
window.totalBusinessListings.data_score = 0;

window.totalBusinessListings.data_send = {};
window.totalBusinessListings.data_route = '/hma/rc/';

window.addEvent('domready',function() {
	Element.prototype.hide = function() {
	    // console.log('Intercepted MooTools');
	    // Do nothing
	};
});


function markText(element, items) {
	if (element == null) return;
	// prepare variations.
	var aux = [];
	items.each(function (item) {
		aux.push(item);
		// is this a street?
		if (item.toLowerCase().indexOf('str') != -1) {
			var street_format = item.replace(/ (str|platz|weg|allee)/gi, "\$1");
			var street_format2 =  item.replace(/([^\s]+(str|platz|weg|allee))/gi, "\$1");
			aux.push(street_format);
			aux.push(street_format2);
			aux.push(street_format.replace(/straße/gi, "str"));
			aux.push(street_format2.replace(/straße/gi, "str"));
			aux.push(street_format.replace(/ß/gi, "ss"));
			aux.push(street_format2.replace(/ß/gi, "ss"));
		}
		// ok, some street number formating
		else
			aux.push(item.replace(/(-)/g, " \$1 "));
	});

	// add common excludes too
	items = ['\\.',','].concat(aux);
	// clean up
	items = items.unique();

	var text = element.get('text') + '';
	var tagStart = '<font class="red">';
	var tagEnd = '</font>';
	//console.log(items);
	items.each(function (item) {
		if (',\\.'.indexOf(item) != -1) var word = item;
		else {
			// escape special chars
			item = item.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
			var word = '\\b' + item + '(\\b|$|\\s)';
		}
		var regex = new RegExp('([\\s]*' + word + '[\\s]*)', 'gmi');
		text = text.replace(regex, '[marked]$1[/marked]');
	});
	// ok, mark the one that aren't matched
	text = text.replace(/\[marked\]/g, tagEnd);
	text = text.replace(/\[\/marked\]/g, tagStart);
	text = tagStart + text + tagEnd;
	// replace br
	text = text.replace('[br]', '<br/>');
	//clean up dirty code
	text = text.replace(new RegExp(tagStart + tagEnd, 'g'), '');
	element.set('html', text);
}


function check_business_listings() {
	var $ = document.id;


				






	var business_listings = {
		"googleplaces": {
			"name": "googleplaces",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.google.com\/business\/placesfor"
		},
		"googleplus": {
			"name": "googleplus",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/plus.google.com\/local"
		},
		"yelp": {
			"name": "yelp",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.yelp.com"
		},
		"foursquare": {
			"name": "foursquare",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/foursquare.com"
		},
		"facebook": {
			"name": "facebook",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.facebook.com"
		},
		"twitter": {
			"name": "twitter",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/twitter.com"
		},
		"bing": {
			"name": "bing",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.bing.com"
		},
		"gelbeseiten": {
			"name": "gelbeseiten",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.gelbeseiten.de"
		},
		"meinestadt": {
			"name": "meinestadt",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.meinestadt.de"
		},
		"yellowmap": {
			"name": "yellowmap",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.yellowmap.de"
		},
		"klicktel": {
			"name": "klicktel",
			"duplicates": {
				"11880": {
					"name": "11880",
					"url": "http:\/\/www.11880.com"
				}
			},
			"is_duplicate": false,
			"url": "http:\/\/www.klicktel.de"
		},
		"11880": {
			"name": "11880",
			"duplicates": false,
			"is_duplicate": true,
			"url": "http:\/\/www.11880.com"
		},
		"dasoertliche": {
			"name": "dasoertliche",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.dasoertliche.de"
		},
		"cylex": {
			"name": "cylex",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/web2.cylex.de\/Homepage\/Home.asp"
		},
		"gmx": {
			"name": "gmx",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.gmx.net"
		},
		"webde": {
			"name": "web.de",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/web.de"
		},
		"branchenbuchdeutschland": {
			"name": "Branchenbuchdeutschland",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.branchenbuchdeutschland.de"
		},
		"unternehmensauskunft": {
			"name": "unternehmensauskunft",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.unternehmensauskunft.com"
		},
		"pointoo": {
			"name": "pointoo",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.pointoo.de"
		},
		"lokaleauskunft": {
			"name": "lokaleauskunft",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.lokaleauskunft.de"
		},
		"goyellow": {
			"name": "goyellow",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.goyellow.de"
		},
		"stadtbranchenbuch": {
			"name": "stadtbranchenbuch",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.stadtbranchenbuch.com"
		},
		"businessbranchenbuch": {
			"name": "businessbranchenbuch",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.business-branchenbuch.de"
		},
		"branchenbuchsuche": {
			"name": "branchenbuchsuche",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.branchenbuchsuche.de"
		},
		"branchenmorgen": {
			"name": "branchenmorgen",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.branchenmorgen.de"
		},
		"golocal": {
			"name": "golocal",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.golocal.de"
		},
		"blauebranchen": {
			"name": "Blaue-Branchen",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.blaue-branchen.de"
		},
		"tomtom": {
			"name": "tomtom",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.tomtom.com"
		},
		"factual": {
			"name": "factual",
			"duplicates": false,
			"is_duplicate": false,
			"url": "http:\/\/www.factual.com"
		}
	};

	

	//Object.each(business_listings, function(value, index) {
	Object.keys(business_listings).forEach(function(key) {
		var index = key;
		var value = business_listings[key];

		var li = new Element('li', {
			'id': 'li_' + index,
			'class': 'listing_item',
			'style': 'display:none;',
			'html': ' <table width="100%" cellpadding="0" cellspacing="0"><tr><td width="225">\
    <a class="img" target="_blank" id="a_link_' + index + '" href="#">\
                                        <img src="/_assets_de/module/seo/images/blank.png" width="51" height="51" class="listing_logo ' + index + '" />\
                                        <span>' + value.name + '</span></a></td><td><div class="content"></div></td></tr></table>\
                        '
		}).inject($('business_listings'));
	});


	setTimeout(function() {
		Object.keys(business_listings).forEach(function(key) {
			var index = key;
			var value = business_listings[key];
			//console.log(index);
			if (!value.is_duplicate) {
				//console.log('yes');
				new Request.JSON({
					url: window.totalBusinessListings.data_route + index,
					data: window.totalBusinessListings.data_send,
					timeout: 90000,
					method: 'get',
					onTimeout: function() {
						responseTimeout(index);
						if (value.duplicates) {
							Object.each(value.duplicates, function(value, index) {
								responseTimeout(index);
							});
						}
					},
					onFailure: function() {
						responseFailure(index);
						if (value.duplicates) {
							Object.each(value.duplicates, function(value, index) {
								responseFailure(index);
							});
						}
					},
					onSuccess: function(data) {
						responseSuccess(index, data);
						if (value.duplicates) {
							Object.each(value.duplicates, function(value2, index2) {
								if (data.result_detailurl && data.result_detailurl.detailsurl) {
									//console.log(data.result_detailurl.detailsurl);
									data.result_detailurl.detailsurl = data.result_detailurl.detailsurl.replace(value.url, value2.url);
									//console.log('modified :' + data.result_detailurl.detailsurl);
								}
								responseSuccess(index2, data);
							});
						}
					}
				}).send();
			}
		});
	}, 1000);


	function responseTimeout(index) {
			var li = $('li_' + index);
			var content = li.getElement('div.content');
		        content.set('html','<p class="no_result">kein Verzeichniseintrag</p>');
			li.addClass('error');
			var error_div = new Element('div', {'class': 'error'}).inject(li, 'top');
			$('tiles_' + index).addClass('done');
			$('tiles_' + index).addClass('error');
			$('tiles_' + index).store('timeout', true);
			li.setStyle('display','block');
			updateProgressBar('not_found', 0);
		}

	function responseFailure(index) {
			//console.log('onFailure ' + index);
			var li = $('li_' + index);
			var content = li.getElement('div.content');
		        content.set('html','<p class="no_result">kein Verzeichniseintrag</p>');
			li.addClass('error');
			var error_div = new Element('div', {'class': 'error'}).inject(li, 'top');
			$('tiles_' + index).addClass('done');
			$('tiles_' + index).addClass('error');
			li.setStyle('display','block');
			updateProgressBar('not_found', 0);

		}

	function responseSuccess(index, data) {
		var current_city = window.totalBusinessListings.data_send.city;
		if ($('tiles_' + index).retrieve('timeout')) return;

		var url = (data.result_page.data_available && data.result_page.data_found) ? '<a class="website" target="_blank" href="' + data.result_page.page.fullURL + '">' + (data.result_page.page.fullURL.length >= 40 ? data.result_page.page.fullURL.substring(0, 40) + '...' : data.result_page.page.fullURL) + '</a>' : ((!data.result_page.data_available) ? '<a class="website" href="#">-</a>' : '<a class="website red" target="_blank" href="#">Website fehlt</a>');
		var phone = (data.result_phone.data_available && data.result_phone.data_found) ? '<span class="tel">' + data.result_phone.phone + '</span>' : ((!data.result_phone.data_available) ? '<span class="tel">-</span>' : '<span class="tel red">Telefonnummer fehlt</span>');

		var address = '';
		if (data.result_address && data.result_address.address) {
			address += (data.result_address.address.street && data.result_address.address.street != '') ? data.result_address.address.street : '';
			address += (data.result_address.address.street_number && data.result_address.address.street_number != '') ? (' ' + data.result_address.address.street_number) : '';
			address += (data.result_address.address.street && data.result_address.address.street != '') ? ',' : '';
			address += (data.result_address.address.postal_code && data.result_address.address.postal_code != '') ? ('[br] ' + data.result_address.address.postal_code) : '';
			address += (data.result_address.address.city_translated && data.result_address.address.city_translated != '') ? (' ' + data.result_address.address.city_translated) : '';
			//address += ' - ' + data.result_address.distance;
			//address += (data.result_address.address.country_translated && data.result_address.address.country_translated != '') ? (',<br/>' + data.result_address.address.country_translated) : '';
		if (data.result_address.address.city_translated && data.result_address.address.city_translated.indexOf(window.totalBusinessListings.data_send.city) != -1)
			current_city = data.result_address.address.city_translated;
		}
		if (address == '')
			address = '<font class="red">Adresse fehlt</font>';
		else
			address = '<font class="address_container ' + ((data.result_address.data_status != 'correct' && data.result_address.data_status != 'partial_correct') ? 'partially_red' : '') + '">' + address + '</font>';

		if (data.result_detailurl.data_found)
			$('a_link_' + index).set('href', data.result_detailurl.detailsurl);
		else
			$('a_link_' + index).erase('href');


		if (data.data_status != 'not_found') {
			var li = $('li_' + index);
			var content = li.getElement('div.content');
			if (data.result_address && data.result_address.address && data.result_address.address.geoLocation)
				var map_img = '<img src="http://maps.googleapis.com/maps/api/staticmap?center=' + data.result_address.address.geoLocation.geoLat + ',' + data.result_address.address.geoLocation.geoLng + 'CA&zoom=14&size=400x400" />';
			else
				var map_img = '';
			//var details = li.getElement('div.abl_details');
			//details.set('html',map_img);

			content.set('html', '<table cellspacing="0" cellpadding="0" width="100%"><tr><td width="50%" valign="top"><p class="address">\
            <b>' + data.result_companyname.companyname + '</b><br/>\
            ' + address + '\
            </p></td>\
            <td width="50%" valign="top"><div class="domain_div"><br/>' + url + '\
                ' + phone + '</div></td>\
  	<td valign="middle" width="115"><span class="check ' + ((!data.result_openinghours.success || !data.result_openinghours.data_found) ? 'not_ok' : '') + ((!data.result_openinghours.data_available)?' not_available':' available') + '"></span></td>\
	<td valign="middle" width="75"><span class="check last ' + ((!data.result_photo.success || !data.result_photo.data_found) ? 'not_ok' : '') + ((!data.result_photo.data_available)?' not_available':' available') +'"></span></td></tr></table>');
		//li.highlight();
			if (data.data_status != 'correct')
				li.addClass('incomplete');

			/*
				var html = create_details(data);
				var details_div = new Element('div', {
					'class': 'abl_details',
					'id': 'details_' + index,
					'html': html
				}).inject(li, 'after');

				$('details_' + index).addEvent('outerClick',function(e){
				 $('details_' + index).removeClass('visible');
				 });  

				$('li_' + index).addEvent('click', function (e) {
					$$('.abl_details').removeClass('visible');
					$('details_' + index).addClass('visible');
				});*/

			//mark_words_engine =  mark_words.concat(mark_words_engine);
			markText(li.getElement('font.address_container'), [window.totalBusinessListings.data_send.streetno,window.totalBusinessListings.data_send.postalcode,window.totalBusinessListings.data_send.street,current_city]);

		} else {
			var li = $('li_' + index);
var content = li.getElement('div.content'); 
content.set('html','<p class="no_result">kein Verzeichniseintrag</p>');
li.addClass('error');
var error_div = new Element('div', {'class': 'error'}).inject(li, 'top');
$('tiles_' + index).addClass('error'); 

		}
		$('tiles_' + index).addClass('done');
		li.setStyle('display', 'block');

		updateProgressBar(data.data_status, data.data_problem_count);
		window.totalBusinessListings.data_score += data.data_score;


	}


	function showSummary() {
		var data_score = window.totalBusinessListings.data_score / window.totalBusinessListings.total;
		//console.log(data_score);
		$$('#result_progress').addClass('isresult');
		if (data_score < 50) {
			$('col_summary').addClass('red');
			$('col_summary').set('html', '<p>Ergebnis:<b class="big">Mangelhaft</b>Sie sind für neue Kunden sehr <br/>schwierig zu finden</p>');
		} else if (data_score > 50 && data_score < 80) {
			$('col_summary').addClass('orange');
			$('col_summary').set('html', '<p>Ergebnis:<b class="big">Ausreichend</b>Sie sind für neue Kunden <br/>teilweise zu finden</p>');
		} else {
			$('col_summary').addClass('green');
			$('col_summary').set('html', '<p>Ergebnis:<b class="big">Gut</b>Sie werden von Ihren <br/>Kunden gefunden</p>');
		}
		$('loop').setStyle('display', 'none');
		$('searchbox').removeClass('progress').addClass('result');
		(function() {

			$('tiles').dissolve();
			$('start_now').reveal();

		}).delay(1000);

	}


	function updateProgressBar(status, problems) {
		window.totalBusinessListings.done++;
		var type;
		switch (status) {
			case 'correct':
				window.totalBusinessListings.exact++;
				type = 'exact';
				break;
			default:
				window.totalBusinessListings.error++;
				type = 'error';
				break;
		}

		var progress = $('progress_wrapper').getElement('span.progress');
		var progress_size = progress.getSize();
		var step = parseFloat(100 / window.totalBusinessListings.total);
		var progress_fg = $('progress_wrapper').getElement('span.fg.' + type);
		var width = parseFloat(step * window.totalBusinessListings[type]);
		$('progress_wrapper').getElement('.info.' + type).getElement('.number').set('html', window.totalBusinessListings[type]);

		$('progress_fg_' + type).setStyle('width', width + '%');
		if (window.totalBusinessListings.total == window.totalBusinessListings.done) {
			(function() {
				showSummary();
			}).delay(1000);
		}


		/*
			 eval('window.fx_'  + type).start({
			 'width' : width
			 });
			 var bar_width = $('progress_fg_' + type).getSize();


			 if(window.totalBusinessListings.total == window.totalBusinessListings.done)
			 eval('window.fx_'  + type).wait(1000).chain(showSummary());
			 */
	}

}



(function(){
    

var $ = document.id;


	window.fx_exact = new Fx.Morph('progress_fg_exact', {
		link:'cancel', 
		duration: 1000,
		unit:'%'
	});
	window.fx_error = new Fx.Morph('progress_fg_error', {
		link:'cancel',
		duration: 1000,
		unit:'%'
	});
	   

	function checkBusinessListings(){
	//new Request.HTML({url:'/abl/check_business_listings', update:'main' , evalScripts:true}).send();
	}

	window.addEvent('domready', function () {
		window.dataFormValidator = null;
		$('form_button').disable(); 
		$('formatted_address').addEvent('keydown', function(event){
			if(event.key == 'enter'){
				return false;
			}
		});

		/*
		new UIAutocomplete($('formatted_address'),{
			addressAutocomplete:{
				active:true,
				language:'de',
				countryRestriction:'de',
				fillGeometry:{
					geo_lat:$('lat'),
					geo_lng:$('lng')
				},
				fillAddress:{
					street_number: $('streetno'),
					route: $('street'),
					locality: $('city'),
					postal_code: $('postalcode')
				},
				fillData:$('address_data')
			}
		});*/

		new UIAddressInput($('street'), {
			language: 'de',
			countryRestriction: 'de',
			sizeToElementStreet:[$('street'),$('postalcode')],
			sizeToElementCity:[$('form_button'),$('postalcode')],
			fillAddress: {
				street_number: $('streetno'),
				route: $('street'),
				locality: $('city'),
				postal_code: $('postalcode')
			},
			fillGeometry:{geo_lat:$('lat'),geo_lng:$('lng')},
			events: {
				fillGeometry: function(){
					$('form_button').enable();
				}
			}
		});

		window.dataFormValidator = new Form.Validator.Inline($('search_form'),{
			stopOnFailure: true,
			useTitles: false,
			errorPrefix: "",
			evaluateFieldsOnBlur: true,
			scrollFxOptions: {
				offset: {
					x: 0,
					y: -200
				}
			},
			onFormValidate: function (passed, form, event) {
				$('form_button').disable();
				if (passed) {
					jQuery('#rankingcoach-tab').show();
					jQuery('a[href="#sichtbarkeit"]').tab('show');
					window.totalBusinessListings.data_send = {};
					window.totalBusinessListings.data_send.address_data = '';
					window.totalBusinessListings.data_send.city = document.getElementById('city').value;
					window.totalBusinessListings.data_send.street = document.getElementById('street').value;
					window.totalBusinessListings.data_send.streetno=document.getElementById('streetno').value;
					window.totalBusinessListings.data_send.postalcode=document.getElementById('postalcode').value;
					window.totalBusinessListings.data_send.lng=document.getElementById('lng').value;
					window.totalBusinessListings.data_send.lat=document.getElementById('lat').value;
					window.totalBusinessListings.data_send.company= document.getElementById('company').value;
					//console.dir(window.totalBusinessListings.data_send);
					$('search_form').setStyle('display','none');
					$('progress_wrapper').setStyle('display','block');

					$('searchbox').removeClass('progress').removeClass('result').addClass('progress');
					var position = $('result_progress').getPosition();
					var myElement = $(document.body);
                     $('main').removeClass('container_shadow');
					 $('main').addClass('no_bg');
					 $('check_business_listings').show();
					 check_business_listings();
					(function() {
						var myFx = new Fx.Scroll(myElement).start(0, position.y - 25);
					}).delay(800);
				}
				else {
					$('form_button').enable();
				}
			}
		});

		/*window.searchFormRequest = new Form.Request($('search_form'), 'main', {
			resetForm: false,
			update: 'main',
			evalScripts:true,
			onComplete: function (target, tree, elements, html) {

			}.bind(this)
		});*/

		window.addEvent('keydown', function (event) {
			if (event.key == 'enter') {
				event.preventDefault();
				return false;
			}
		});

	});

	(function($,$$){
		var events;
		var check = function(e){
			var target = $(e.target);
			var parents = target.getParents();
			events.each(function(item){
				var element = item.element;
				if (element != target && !parents.contains(element))
					item.fn.call(element, e);
			});
		};
		Element.Events.outerClick = {
			onAdd: function(fn){
				if(!events) {
					document.addEvent('click', check);
					events = [];
				}
				events.push({
					element: this, 
					fn: fn
				});
			},
			onRemove: function(fn){
				events = events.filter(function(item){
					return item.element != this || item.fn != fn;
				}, this);
				if (!events.length) {
					document.removeEvent('click', check);
					events = null;
				}
			}
		};
	})(document.id,$$);	
})();