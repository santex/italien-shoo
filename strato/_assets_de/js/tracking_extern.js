


//IMPERIA DOKUMENT
(function(publ) {
    //global vars
    var global = window;
    global.emosTrackVersion = 2;
    global.emosHelper = publ = {};
    //private vars
    var siteid = 'www.strato.de',
        domainid = 'strato.de',
        markerprefix = 'strato_de'
    //public vars
    publ.assets = '_assets_de';
    publ.abtestpages = [];
    //publ.abtestpages = ["/managed-server/"];
    publ.siteid = siteid;
    publ.domainid = domainid;
    publ.markerprefix = markerprefix;
    //public functions
    publ.content = function(prefix) {
        var path = location.pathname.replace(/(index)?[.;][a-zA-Z0-9=._]+/g, '');
        path = path.replace(/[\/]*$/g, '');
        return prefix + path;
    };
    publ.pageid = function() {
        var thiscontent = this.content(domainid);
        thiscontent = thiscontent.toUpperCase();
        return thiscontent;
    };
    publ.sendmarker = function(markername) {
        if (global.emospro) {
            var emospromarker = {
                content: global.emospro.content,
                siteid: global.emospro.siteid,
                marker: markername
            };
            if (window.location.pathname === "/server-cloud/") {
                emospromarker.rqtype = 'hiddenpi';
            }
            this.submitemos(emospromarker);
        }
    };
    publ.sendsearch = function(searchCase) {
        global.emospro.rqtype = 'hiddenpi';
        if(searchCase===1){
            global.emospro.ec_Event = [
                ['view','NULL','NULL','STRATO_DOMAIN_KAUFEN','NULL','Domainchecker',1,'Eingabe','NULL','NULL']
            ];
        }
        if(searchCase===2){
            global.emospro.ec_Event = [
                ['view','NULL','NULL','STRATO_DOMAIN_KAUFEN','NULL','Domainchecker',1,'autocomplete','NULL','NULL']
            ];
        }
        if(searchCase===3){
            global.emospro.ec_Event = [
                ['view','NULL','NULL','STRATO_DOMAIN_KAUFEN','NULL','Domainchecker',1,'erweiterte_suche','NULL','NULL']
            ];
        }
        this.submitemos(global.emospro);
    };
    publ.submitemos = function(e) {
        if (typeof(global.emosPropertiesEvent) === 'function') {
            global.emosPropertiesEvent(e);
        } else {
            $.getScript('/' + publ.assets + '/js/emos2.js', function() {
                global.emosPropertiesEvent(e);
            });
        }
    };
})(window.emosHelper);
var emospro = {
    content: emosHelper.content(emosHelper.domainid),
    siteid: emosHelper.siteid,
    pageId: emosHelper.pageid(),
    marker: emosHelper.content(emosHelper.markerprefix)
};
if (window.location.pathname === "/server-cloud/") {
    emospro.rqtype = 'hiddenpi';
}
$('title').each(function(){
    if ($(this).html().match( /^.*404.*$/)){
        emospro.pageId = emosHelper.domainid.toUpperCase()+"/404";
        emospro.marker = emosHelper.domainid+"/404";
        emospro.content = emosHelper.domainid+"/404";
    }
});
if (!(emosHelper.abtestpages.indexOf(window.location.pathname) != -1)) {
    emosHelper.submitemos(emospro);
    $(document.body).delegate('a[href*="/basket/addshortname"]', 'mousedown', function(event) {
        var thislink = $(this)[0].href;
        if (thislink) {
            try {
                var regexp = /^(.*\/basket\/addshortname\/)([A-z0-9]*)(.*)$/;
                if (thislink.match(regexp)) {
                    var thisshortname = thislink.match(regexp);
                    window.emosHelper.sendmarker(emospro.marker + "/order/" + thisshortname[2]);
                }
            } catch (event) {}
        }
    });
}
//Domainchecker searchCases
(function(containerId,actElement,extraLink,inputField){
    var self = $(this);
    self.searchCase = 1;//1:manuell,2:autocomplete,3:erw_suche
    self.autoCompleteString = "";
    $('body').on('mousedown', actElement, function(event) {
        self.searchCase = 2;
        self.autoCompleteString=$(actElement).text();
    });
    $('body').on('keydown',containerId, function(event) {
        self.autoCompleteString=$(actElement).text();
        if(event.keyCode === 38||event.keyCode === 40){
            self.searchCase = 2;
        }
        if (event.keyCode === 13&&self.searchCase === 2){
            self.autoCompleteString=$(actElement).text();
        }
    });
    $('body').on('mousedown',extraLink, function(event) {
        self.searchCase = 3;
    });
    $('body').on('submit',containerId, function(event) {
        if(location.search.indexOf("emosdebug=yxcvbnm") >= 0){
            event.preventDefault();
        }
        if($(inputField).val() !== self.autoCompleteString&&self.searchCase === 2){
            self.searchCase = 1;
        }
        if($(inputField).val() === self.autoCompleteString){
            self.searchCase = 2;
        }
        emosHelper.sendsearch(self.searchCase);
    });
}('#domaincheckerForm','.autocomplete_overlay .active > td:first-child','.autocomplete_overlay .extra_link','.domainchecker_input [type="Text"]'));
//Wunschmarker
$('body').on('shown.bs.modal', function() {
    setTimeout(function() {
        if ($('[data-emos-loadmarker]').attr('data-emos-loadmarker') !== null) {
            emosHelper.sendmarker($('[data-emos-loadmarker]').attr('data-emos-loadmarker'));
        }
    }, 500);
});
$(document.body).delegate('[data-emos-clickmarker]', 'mousedown', function(event) {
    emosHelper.sendmarker($(this).attr('data-emos-clickmarker'));
});
$(document.body).delegate('[data-emos-hovermarker]', 'mouseenter', function(event) {
    emosHelper.sendmarker($(this).attr('data-emos-hovermarker'));
});
$('[href*="apps/CustomerService"]').click(function() {
    window.emosHelper.sendmarker(emosHelper.markerprefix + '/KSB/Login');
});
$('[href="/modals/modal_servercloud.html"]').click(function(){
    window.emosHelper.sendmarker('strato_de/server-cloud/video');
});
//swts
$(window).load(function() {
    (function() {
        var aDomains = [emosHelper.domainid, 'www.' + emosHelper.domainid];
        for (var i = 0; i < aDomains.length; i++) {
            if (aDomains[i] == $(location).attr('hostname')) {
                $.get("/" + emosHelper.assets + "/js/swts.js", function() {
                    if (navigator.cookieEnabled && (document.cookie.indexOf("SWTSdisable") === -1)) {
                        try {
                            var swtsTracker = Swts.getTracker("/swts/", 1);
                            swtsTracker.trackPageView();
                            swtsTracker.enableLinkTracking();
                        } catch (err) {}
                    }
                });
            }
        }
    }());
});
// ABtest Linux-root Server -->
if(window.location.pathname === "/linux-root-server/" || window.location.pathname === "/windows-root-server/" || window.location.pathname === "/managed-server/") {
    var scope = angular.element($('.page')).scope();
    scope.$apply(function() {
        scope.abtestserver = $.cookie('ab01markerserver')
    });
}
if(window.location.pathname === "/linux-root-server/" || window.location.pathname === "/windows-root-server/" || window.location.pathname === "/managed-server/") {
    if ($.cookie('ab01markerserver')===1){
         window.emosHelper.sendmarker("strato_de/test/dedi/siteA");
    }
    if ($.cookie('ab01markerserver')===2){
        emosHelper.sendmarker("strato_de/test/dedi/siteB");
    }
}
if ($.cookie('ab01markerserver')===1){
    $(document.body).delegate('a[href*="/basket/addshortname"]', 'mousedown', function(event) {
        window.emosHelper.sendmarker("strato_de/test/dedi/klickA");
    });
}
if ($.cookie('ab01markerserver')===2){
    $(document.body).delegate('a[href*="/basket/addshortname"]', 'mousedown', function(event) {
        window.emosHelper.sendmarker("strato_de/test/dedi/klickB");
    });
}
