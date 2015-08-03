/*global $F, storefront, window, parseUri, screen */

$F.ksb.utils.popup = (function () {
	"use strict";

	var priv, api;

	/* ================================================================
		popup :: priv
	================================================================ */

	priv = {
		defWidth    : "800",
		defHeight   : "600",
		defName     : "our_sophisticated_name",

		clearUriObj : function (uriObj) {
			var rxp_pOpt        = new RegExp("\\&?pOpt=" + uriObj.queryKey.pOpt),
				rxp_pLayerVal   = new RegExp("\\&?pLayer=" + uriObj.queryKey.pLayer),
				rxp_pFullscreen = new RegExp("\\&?pFullscreen=" + uriObj.queryKey.pFullscreen),
				rxp_pFrameId = new RegExp("\\&?pFrameId=" + uriObj.queryKey.pFrameId);

			uriObj.source = uriObj.source.replace(rxp_pOpt, "");
			uriObj.source = uriObj.source.replace(rxp_pLayerVal, "");
			uriObj.source = uriObj.source.replace(rxp_pFullscreen, "");
			uriObj.source = uriObj.source.replace(rxp_pFrameId, "");

			if (uriObj.source.indexOf("?&") !== -1) {    // this can caused when additional params are not at the end
				throw "popup::clearUriObj - popup params are not at the end";
			}

			return uriObj;
		},

		buildOptionHash : function (opt) {
			var options = {};

			opt = (opt) ? opt.split("-") : "";

			options.width = opt[0] || priv.defWidth;
			options.height = opt[1] || priv.defHeight;
			options.windowName = opt[2] || priv.defName;
			options.additional = opt[3] || "scrollbars=yes,menubar=no,status=no,toolbar=no";

			options.string  = "";
			options.string += "width=" + options.width + "px,";
			options.string += "height=" + options.height + "px,";
			options.string += options.additional;

			return options;
		}
	};

	/* ================================================================
		popup :: api
	================================================================ */

	api = {
		init : function (jQelem) {
			var uriObj = parseUri(jQelem.attr("data-overlay") || jQelem.attr("href") || jQelem.attr("action")),
				pOpt = uriObj.queryKey.pOpt || false,
				pLayer = uriObj.queryKey.pLayer || false,
				pFullscreen = uriObj.queryKey.pFullscreen || false,
				pFrameId = uriObj.queryKey.pFrameId || false,
				winRef = null,
				opt;

			uriObj  = priv.clearUriObj(uriObj);
			opt = priv.buildOptionHash(pOpt);

			if (pLayer) {
				$F.ksb.utils.modalWindow.init(uriObj.source, opt.width, opt.height,  pLayer, pFrameId);
			} else {
				if (pFullscreen) {
					winRef = window.open(uriObj.source, "", "height=" + (screen.availHeight - 45) + ",width=" + (screen.availWidth - 12) + "location=0, status=1, resizable=0, scrollbars=1, toolbar=0");
					winRef.name = opt.windowName; // IE do not support slashes in name attributes
				} else {
					// erweitern auf class = external wenn href *:// enthaelt
					winRef = (pOpt ? window.open(uriObj.source, "", opt.string) : window.open(uriObj.source));
					winRef.name = opt.windowName; // IE do not support slashes in name attributes
				}
				winRef.focus();
			}

			return true;
		}
	};


	/* ================================================================
		JSUNIT :: reference priv to api if activ
	================================================================ */

	if (storefront.globals.JSUNIT === true) {
		api.priv = priv;
	}

	return api;
}());
