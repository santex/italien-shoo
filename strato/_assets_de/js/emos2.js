(function(a4,s){var EMOS_VERSION="cm50.3",bF="emos3",l=a4[bF],TRACK_VERSION=(typeof(window.emosTrackVersion)=="number")?window.emosTrackVersion:1;if(!l){a4[bF]=l={}}else{TRACK_VERSION=3}if(!l.config){l.config={}}if(!l.defaults){l.defaults={}}var DFLTS={siteid:'0'};var bw=k("JUNK_SIZE",1600),Q=k("CLIENT_COOKIE_LIFETIME",30),T=k("COOKIENAME_SESSION_ID","emos_jcsid"),a9=k("COOKIENAME_VISITOR_ID","emos_jcvid"),ay=k("COOKIENAME_CAMPAIGN","emos_jckamp"),w=k("COOKIENAME_CROSS","emos_jccross"),t=k("COOKIENAME_POSTVIEWCAMPAIGN","emos_postview"),B=k("COOKIENAME_POSTVIEW",null),ak=k("COOKIE_DOMAIN",null),by=k("TRACK_FIRSTPARTY",true),ap=k("TRACK_POSTCONVERSION",true),bs=k("CLIENT_KEY",window.emosClientKey?window.emosClientKey:'000014fb-84c6d3bb-c367-459b-801e-98f484908e74'),g=k("TRACK_THIRD_PARTY",true),v=k("SAMPLING_RATE",1),X=k("BEST_PRODUCTS_COOKIE",false),a5=k("PRODUCT_ID_IN_EC_EVENT",1),z=k("COOKIENAME_BEST_PRODUCTS","emos_best_products"),aH=k("BEST_PRODUCTS_COOKIE_LIFETIME",2592000),aX=k("PMAP",{}),U=k("PARAM_TO_PROP",{'emosmarker':'marker', 'ecmUid':'newsuid', 'incpc':'incpc'}),bI=k("MC_COOKIE",{kw:30,cp:30,nl:30}),n=k("ADD_COOKIE_PARAMS",{all:["empid","empcode","empcode2"]}),c=k("ADD_COOKIE_PROPS",{}),bx=k("TIMEOUT",6000),a2=k("DO_NOT_TRACK",false),a3=k("JSID",false),aQ=k("SEO_BLACK",[]),ba=k("GCLID",false),aL=k("PAGEID_FROM_URL",false),bq=k("SAMPLING_MODE_CLICKONLY",true),bv=k("CAPTURE_CLICKS",typeof a4.emosTrackClicks!="undefined"?a4.emosTrackClicks:true),x="www.econda-monitor.de",o="emos_clickmonitor",bg="https://monitor.econda-monitor.de/click",aE=0,aa=null,C=0,aV=0,aW=0,aI=0,az,V,bE=0,E,a7=[],G=true,aR=null,aK={},y=false;try{if(a4.sessionStorage&&a4.sessionStorage.length>=0){y=true}}catch(bf){}var at=true,bD,ao,ah=null;function K(i){var e=ab(i);if(e){ah=e.substring(0,254);i.pageId=ah}if(i.pageid){delete i.pageid}}function ab(e){if(e.pageId){return e.pageId}if(e.pageid){return e.pageid}if(a4.emosPageId){return a4.emosPageId}if(ah){return ah}if(aL){var i=(a4.clickmonitor)?a4.clickmonitor.location:a4.location;return i.protocol+"//"+i.host+i.pathname}return null}function an(){if(!bs&&a4.emos_kdnr){var i=a4.emos_kdnr-723;var e=(i%673==0)?(i/673-100):0;var bO=e.toString(16);while(bO.length<8){bO="0"+bO}ae("xtc");bs=bO+"-xtc~"+a4.emos_kdnr}}function k(e,bO){var i=l.config[e];return(typeof i!="undefined")?i:bO}var a6=(a4.encodeURIComponent)?a4.encodeURIComponent:a4.escape;function bJ(i){try{if(a4.decodeURIComponent){try{return a4.decodeURIComponent(i.replace(/\+/g,"%20"))}catch(bP){return a4.unescape(i)}}else{return a4.unescape(i)}}catch(bO){return i}}function bh(bP,bO,i){if(bP.addEventListener){bP.addEventListener(bO,i,true)}else{if(bP.attachEvent){bP.attachEvent("on"+bO,i)}else{var e=bP["on"+bO];if(!e){bP["on"+bO]=i}else{bP["on"+bO]=function(bQ){i(bQ);e(bQ)}}}}}function aG(bV,bU,bP){var bO=bU.cookie;var e=null;var bW=null;if(bO){if(bU.emcl){e=parseInt(bU.emcl)}if(!e){e=Q}e=e*86400;bW=aU(bO)}aO(bV);var bS=b(bl(Z(p(bV))));var bT=Math.floor(bS.length/bw)+1;var bQ=[];for(var bR=0;bR<bT;bR++){bQ[bR]={};bQ[bR].v="4";bQ[bR].emrid=bP;if(by==true){bQ[bR].emsid=C;bQ[bR].emvid=aW}if(bR==0&&g&&ap){if(bO){bQ[bR].emcl=e;bQ[bR].emcc=bW}}bQ[bR].emnc=bT;bQ[bR].emtn=bR+1;bQ[bR].emhost=location.hostname;if(g){bQ[bR].tpct=1}bQ[bR].d=bS.substr(bR*bw,bw)}return bQ}function av(){if(a4.emosDoNotTrack){return}if(a2){return}var i=bi();var e={};aY(i,e);au(i,e)}function aY(i,e){A(i,e);if(a4.emosBillingPageArray){be(a4.emosBillingPageArray,i)}if(a4.emosECPageArray){a0(a4.emosECPageArray,i)}br(i);if(a4.emosBasketPageArray){ag(a4.emosBasketPageArray,i)}ax(i)}function aj(bQ){if(!X){return}if(!bQ.ec_Event){return}if(bQ.ec_Event.length==0){return}var bO=[];for(var bP=0;bP<bQ.ec_Event.length&&bO.length<5;bP++){if(bQ.ec_Event[bP].length>a5){bO.push(a6(bQ.ec_Event[bP][a5]))}}if(bO.length==0){return}if(bO.length<5){var e=M();if(e){for(var bP=0;bP<e.length&&bO.length<5;bP++){bO.push(e[bP])}}}bM(z,bO.join(":"),aH)}function M(){var e=bG(z);if(e&&e.length>0){return e.split(":")}return null}function A(bO,i){var bP=bn(i);bo(bO);aP(bO,i,bP);var e=H();if(e){bO.pvdata=e}P(bO,bP,i);if(TRACK_VERSION==1){h(bO)}if(!bO.content){bO.content="HTML-Title/"+s.title}}function I(i){if(typeof i.customReferrer!="undefined"){return i.customReferrer}if(typeof a4.emosReferrer!="undefined"){ae("ref");return a4.emosReferrer}try{return top.document.referrer}catch(bO){return s.referrer}}var D=null;try{D=top.location.search}catch(bf){D=location.search}function bn(i){if(i.customParam){return i.customParam}var bQ=aq(D,true);for(var e in aX){var bP=aX[e];var bO=bQ[bP];if(bO){bQ[e]=bO;delete bQ[bP]}else{delete bQ[e]}}return bQ}function bo(i){var bP=screen.width+"x"+screen.height;var e=a4.devicePixelRatio;if(typeof e=="number"&&e>1){bP=bP+"|"+Math.round(e*100)/100}var bO=a4.orientation;if(typeof bO=="number"&&bO!=0){bP=bP+"o"+bO}i.swsh=bP;i.tz=new Date().getTimezoneOffset()/60;if(TRACK_VERSION!=3){ae("tv"+TRACK_VERSION)}}function af(bT,bQ){try{if(bT==null||bT.length==0){return"http://unknown"}if(bT.substr(0,4)!="http"){bT="http://"+bT}if(bQ>=0){var bP=bT.split("/");if(bP.length<bQ){bQ=bP.length}bT="";for(var bO=0;bO<bQ;bO++){if(bO!=0){bT=bT+"/"}bT=bT+bP[bO]}}var bU=bT.indexOf("?");if(bU>=0){bT=bT.substring(0,bU)}var bS=bT.indexOf("#");if(bS>=0){bT=bT.substring(0,bS)}}catch(bR){}return bT.substring(0,127)}function q(bP){if(!ah){return}if(!bs){return}if(a2){return}if(!at){return}if(!aa){return}if(a4.emosDoNotTrack){return}if(!bP){bP=a4.event}var bQ={};if((bP.which&&bP.which!=1)||(!bP.which&&bP.button!=1)){return}var b0=bP.pageX;var bR=bP.pageY;var bT=s.documentElement&&s.documentElement.clientHeight!=0?s.documentElement:s.body;if(isNaN(b0)||isNaN(bR)){b0=bP.clientX+((isNaN(a4.pageXOffset)?bT.scrollLeft:a4.pageXOffset));bR=bP.clientY+((isNaN(a4.pageYOffset)?bT.scrollTop:a4.pageYOffset))}var bW=bP.target?bP.target:bP.srcElement;if(!bW.nodeName){return}var bY=bW.nodeName.toLowerCase();if(bY=="base"){return}while(bW!=null&&bW.nodeType!=1){bW=bW.parentNode}if(bY=="map"){bW=bC(bW,b0,bR)}else{if(bY=="area"){bW=bC(bW.parentNode,b0,bR)}}if(bY=="option"){bW=bW.parentNode;if(bW.nodeName.toLowerCase()=="optgroup"){bW=bW.parentNode}}if(typeof bW.getBoundingClientRect=="function"){if(bW==s.body.parentNode){bW=s.body}}else{if(bW==s.body){bW=s.body.parentNode}}var bS=new Date().getTime();var bX=Math.floor((bS-ao)/1000);var b1=Math.floor((bS-E)/1000);ao=bS;if(s.body.parentNode==bW||s.body==bW){var bO,e;if(a4.innerHeight){bO=a4.innerWidth-17;e=a4.innerHeight-17}else{bO=bT.clientWidth;e=bT.clientHeight}if(bO<bP.clientX||e<bP.clientY){return}}var bU=F(bW);if(!bU){return}var i=b0-bU[0];var b2=bR-bU[1];var bZ=bD++;var bV=J(bW).toLowerCase();bQ.click=[[b0,bR,b1,i,b2,bZ,bX,bV,v]];bQ.plReqId=aa;bQ.emosV=r();S(bQ,{},aw())}function J(i){var bO=i.parentNode;if(!bO||bO==s){return"/"+i.nodeName}var e=J(bO);return e+"/"+i.nodeName+"["+j(bO,i)+"]"}function j(bQ,bP){var e=bQ.childNodes;var bR=0;for(var bO=0;bO<e.length;bO++){if(e[bO]==bP){return bR}else{if(e[bO].nodeName==bP.nodeName){bR++}}}return -1}function bC(bR,e,bO){var bT="#"+bR.getAttribute("name");var bU=s.getElementsByTagName("img");for(var bQ=0;bQ<bU.length;bQ++){var bP=bU[bQ];if(bP.getAttribute("usemap")==bT){var bS=F(bP);if(bS){if(e>=bS[0]&&bO>=bS[1]&&e<=bS[0]+bP.clientWidth&&bO<=bS[1]+bP.clientHeight){return bP}}}}return s.body.parentNode}function au(bY,bV){K(bY);try{if(bY.pageId&&top.ClickwatcherAccess){top.ClickwatcherAccess.setPageId(bY.pageId);G=false;at=false;return}}catch(bW){}var bS=location.search.indexOf("clickmonitor=econda")>=0||location.hash.indexOf("clickmonitor_econda")>=0;if(bS){bM(o,"true")}if((bS||bG(o)=="true")&&!a4.emosClickmonitor){a4.emosClickmonitor={pageId:bY.pageId,cookieName:o,cookieDomain:ak,urlClickmonitor:bg,ckey:bs};var b1=s.documentElement;var bP=b1.namespaceURI;var bU=b1.prefix;var bR=bU?bU+":head":"head";var bX=b1.childNodes;var b0=null;for(var bT=0;bT<bX.length;bT++){var bZ=bX[bT];if(bZ.nodeType==1&&bZ.nodeName.toLowerCase()==bR){b0=bZ;break}}if(!b0){b0=bP?s.createElementNS(bP,bR):s.createElement(bR);b1.insertBefore(b0,b1.firstChild)}var bO=bU?bU+":script":"script";var bQ=bP?s.createElementNS(bP,bO):s.createElement(bO);bQ.setAttribute("type","text/javascript");bQ.setAttribute("src",bg+"/scripts/click.js");b0.appendChild(bQ);G=false;at=false;return}if(bV.cookie){ac(c,bY,bV.cookie.source,bV.cookie)}E=new Date().getTime();aa=aw();ao=E;bD=0;bm(bY,bV);if(!G){return}aj(bY);bY.emosV=r();S(bY,bV,aa)}function S(bS,e,bT){if(a4.console&&a4.console.log&&location.search.indexOf("emosdebug=yxcvbnm")>=0){a4.console.log(bS)}var bR=aG(bS,e,bT);for(var bQ=0;bQ<bR.length;bQ++){aE=aE+1;bz(bR[bQ],e,aE)}if(e.delay){var bO=parseInt(e.delay);if(isFinite(bO)&&bO>0&&bO<1000){var bP=new Date().getTime()+bO;while(new Date().getTime()<bP){}}}}function F(bO){if(typeof bO.getBoundingClientRect=="function"){var i;var bQ;if(typeof a4.pageXOffset=="number"){i=a4.pageXOffset;bQ=a4.pageYOffset}else{var e=s.compatMode!="BackCompat"?s.documentElement:s.body;i=e.scrollLeft;bQ=e.scrollTop}var bP=bO.getBoundingClientRect();if(bP==null){return null}if(bP.top==0&&bP.right==0&&bP.bottom==0&&bP.left==0){return null}return[i+parseInt(bP.left),bQ+parseInt(bP.top)]}return bB(bO)}function bB(e){if(e.offsetParent!=null){var bO=bB(e.offsetParent);if(!bO){return null}bO[0]+=e.offsetLeft;bO[1]+=e.offsetTop;return bO}else{var i=e.nodeName.toLowerCase();if(i=="html"||i=="body"){return[0,0]}else{return null}}}function m(){var i=bs.indexOf("-");var e;var bO;if(i==8){e=bs.substring(0,8);bO=bs.substring(9)}else{e="00000000";bO=bs}return((location.protocol=="http:")?"http://":"https://")+x+"/l/"+e+"/t/"+bO+"?"}var bK="emosTransmit";var bL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function bz(bS,bQ,bP){var i=aU(bS);var bO=new Image();var bT=a4.setTimeout(function(){bO.src=bL},bx);a7[bP]=bO;var bU=bK+bP;if(y){try{var bV=a4.sessionStorage;bV.setItem(bU,i)}catch(bR){}bO.onload=function(){bp(bU,bP,bT)}}else{bM(bU,i);bO.onload=function(){bp(bU,bP,bT)}}bO.src=m()+i}function bp(bQ,bP,i){try{if(y){a4.sessionStorage.removeItem(bQ)}else{f(bQ)}}catch(bO){}a7[bP]=null;a4.clearTimeout(i)}function aU(i){var bO="";for(var bP in i){var e=typeof i[bP];if(e=="string"||e=="boolean"||e=="number"){if(bO!=""){bO+="&"}bO+=bP+"="+a6(i[bP])}}return bO}function am(bP){var bQ=bP.split("&");var i={};for(var e=0;e<bQ.length;e++){var bO=bQ[e].split("=");i[bO[0]]=bJ(bO[1])}return i}function N(e){return Object.prototype.toString.apply(e)==="[object Array]"}function aO(e){for(var bO in e){var i=e[bO];if(typeof i=="object"&&N(i)&&i.length&&i.length>0){u(i,bO,e)}}}function u(bQ,bR,bT){var bS={};var bU=false;for(var bP=0;bP<bQ.length;bP++){var bV=bQ[bP];if(typeof bV=="object"&&Object.prototype.toString.apply(bV)!="[object Array]"){bA(bV,bS);bU=true}else{if(bV==null){}else{return}}}if(!bU){return}for(var bP=0;bP<bQ.length;bP++){var bV=bQ[bP];if(bV!=null){bt(bV,bS)}}var e=p(bQ).length;var bO=p(bS).length;if(bO<e){bT[bR]=bS}}function bA(e,i){for(var bO in e){if(!i[bO]){i[bO]=[]}}}function bt(i,bO){for(var bQ in bO){var bP=i[bQ];var e=bO[bQ];if(typeof bP==undefined){e.push(null)}else{e.push(bP)}}}function p(bS){switch(typeof bS){case"string":return ad(bS);case"number":return isFinite(bS)?String(bS):"null";case"boolean":case"null":return String(bS);case"object":if(!bS){return"null"}var bP=[];if(N(bS)){var bR=bS.length;for(var bQ=0;bQ<bR;bQ++){bP[bQ]=p(bS[bQ])||"null"}return bP.length===0?"[]":"["+bP.join(",")+"]"}for(var bO in bS){if(Object.prototype.hasOwnProperty.call(bS,bO)){var e=p(bS[bO]);if(e){bP.push(ad(bO)+":"+e)}}}return bP.length===0?"{}":"{"+bP.join(",")+"}"}return undefined}var a1=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,R={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function ad(e){if(a1.test(e)){return'"'+e.replace(a1,function(i){var bO=R[i];return typeof bO==="string"?bO:"\\u"+("0000"+i.charCodeAt(0).toString(16)).slice(-4)})+'"'}else{return'"'+e+'"'}}function bd(){var bR=bK.length;var bY=[];if(y){try{var bX=a4.sessionStorage;for(var bS=0;bS<bX.length;bS++){var bV=bX.key(bS);if(bV.substr(0,bR)==bK){var bO=Number(bV.substr(bR));var bP=bX.getItem(bV);if(bP){if(bO>=aE){aE=bO+1}bY.push([bO,bP])}}}for(var bS=0;bS<bY.length;bS++){bX.removeItem(bK+bY[bS][0])}}catch(bT){}}else{var bW=s.cookie.split(";");for(var bS=0;bS<bW.length;bS++){var bQ=bW[bS];if(bQ.charAt(0)==" "){bQ=bQ.substr(1)}if(bQ.substr(0,bR)==bK){var bU=bQ.indexOf("=");if(bU<0){continue}var bO=Number(bQ.substring(bR,bU));var bP=bQ.substring(bU+1);f(bK+bO);if(bP){if(bO>=aE){aE=bO+1}bY.push([bO,bP])}}}}aZ(bY)}function aZ(bP){if(bP.length>0){var bO=bP.pop();var e=bO[0];var i=new Image();var bQ=a4.setTimeout(function(){i.onload=function(){};i.src=bL},bx);a7[e]=i;i.onload=function(){aM(e,bP,bQ)};i.src=m()+bO[1]}}function aM(bO,e,i){a7[bO]=null;a4.clearTimeout(i);aZ(e)}function bm(bV,bT){if(!by){return}var b0=0;if(bV.billing&&bV.billing.length>0&&bV.billing[0].length>3){var bS=Number(bV.billing[0][3]);if(!isNaN(bS)){b0=Math.round(bS*100)}}var bY=true;var bZ=bG(T);if(bZ&&bZ.length>0){var bW=bZ.split(":");if(bW.length==4){C=bW[0];aV=parseInt(bW[1])+1;if(!isNaN(aV)){bY=false;bM(T,C+":"+aV+":"+aa+":"+E)}}}if(bY){var bO=aw();var i=bO+":1:"+aa+":"+E;bM(T,i);var bQ=bG(T);if(i==bQ){C=bO;aV=1;bY=true}else{C="NULL";aV=-1;bY=false}}var bZ=bG(a9);if(bZ&&bZ.length>0){var bW=bZ.split(":");if(bW.length==5||bW.length==7){aW=bW[0];aI=parseInt(bW[1])+((bY)?1:0);var e=bW[2];var bR=parseInt(bW[3]);if(bY){az=e;V=E-bR;bR=E}else{az=null;V=null}bE=b0;var bU=parseInt(bW[4]);if(bW.length==7){at=("true"==bW[5]);var bP=parseInt(bW[6]);if(bP!=v){at=Math.random()*v<=1}}else{at=Math.random()*v<=1}if(!bq){G=at}if(!isNaN(bU)){bE+=bU}if(!isNaN(aI)&&aW&&aW!="undefined"){bM(a9,aW+":"+aI+":"+C+":"+bR+":"+bE+":"+at+":"+v,94608000);return}}}var bX;if(aR){bX=aR;bV.t=1}else{bX=C;if(a3&&!aD){bV.t=2}}bE=b0;at=Math.random()*v<=1;if(!bq){G=at}var i=bX+":1:"+C+":"+E+":"+bE+":"+at+":"+v;bM(a9,i,94608000);var bQ=bG(a9);if(i==bQ){aW=bX;aI=1}else{aW="NULL";aI=-1}}function bG(bR){if(!bR){return null}var bO=s.cookie.split(";");for(var bQ=0;bQ<bO.length;bQ++){var bP=bO[bQ];if(bP.charAt(0)==" "){bP=bP.substr(1)}var e=bR+"=";if(bP.substr(0,e.length)==e){return bP.substring(e.length)}}return null}function bM(i,bP,e){var bO=i+"="+bP+";path=/;";if(ak){bO=bO+"domain="+ak+";"}if(e){bO=bO+"max-age="+e+";expires="+new Date(new Date().getTime()+e*1000).toGMTString()+";"}s.cookie=bO}function f(e){var i=e+"=;path=/;max-age=0;";if(ak){i=i+"domain="+ak+";"}s.cookie=i}function aw(){var bR=new Date().getTime();var bU=bR&4294967295;var bS=(bR/4294967296)&4294967295;var e=[];e.push(bS>>>8&255);e.push(bS&255);e.push(bU>>>24);e.push(bU>>>16&255);e.push(bU>>>8&255);e.push(bU&255);for(var bP=0;bP<9;bP++){var bQ=65536*Math.random();e.push(bQ>>>8&255);e.push(bQ&255)}var bO=navigator.userAgent;if(bO){for(var bP=0;bP<bO.length;bP++){var bT=6+(bP%18);e[bT]=(e[bT]^bO.charCodeAt(bP))&255}}return b(e)}function bl(bQ){var bP=0;var e=bQ.length;for(var bO=0;bO<e;bO++){bP+=bQ[bO]}bQ.push((bP&65280)>>8);bQ.push(bP&255);return bQ}function Z(e){var i=[];for(var bP=0;bP<e.length;bP++){var bO=e.charCodeAt(bP);if(bO<128){if(bO>=32||bO==9){i.push(bO)}}else{if((bO>127)&&(bO<2048)){i.push((bO>>6)|192);i.push((bO&63)|128)}else{i.push((bO>>12)|224);i.push(((bO>>6)&63)|128);i.push((bO&63)|128)}}}return i}var W="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*_";function b(bS){var bP=W,bQ=[],bO=0,e=bS.length;if((e%3)==1){bS.push(0);bS.push(0)}else{if((e%3)==2){bS.push(0)}}var bR=bS.length;while(bO<bR){bQ.push(bP.charAt(bS[bO]>>2));bQ.push(bP.charAt(((bS[bO]&3)<<4)|(bS[bO+1]>>4)));bQ.push(bP.charAt(((bS[bO+1]&15)<<2)|(bS[bO+2]>>6)));bQ.push(bP.charAt(bS[bO+2]&63));bO+=3}if((e%3)==1){bQ[bQ.length-1]=bQ[bQ.length-2]=""}if((e%3)==2){bQ[bQ.length-1]=""}return bQ.join("")}function Y(bT,bS,bQ){var bV=I(bS);var bP=af(bV,3);var i=aq(bV,false);bT.ref=bP;for(var bR in U){if(bQ[bR]){bT[U[bR]]=bQ[bR]}}if(bS.cookie){return}var bW=bS.customCampaign;var bU=bS.customSource;if(!bW){bW=a4.emos_campaignName;if(bW){ae("dcn")}}if(!bU){bU=a4.emos_sourceId;if(bU){ae("ds")}}if(bQ.refID){bW=bQ.refID;if(bQ.emsrc){bU=bQ.emsrc}}if(bW){if(bU){if(bU=="kw"){bQ.adword=bW}else{if(bU=="nl"){bQ.newsletter=bW}else{bQ.campaign=bW}}}else{bU="cp";bQ.campaign=bW}}var bX=ba?bQ.gclid:null;if(bQ.adword||bQ.amktid||bX){var bO=aC(bT,bS,bQ,"kw");if(bQ.adword){bT.adwordClick=bQ.adword;bO.adword=bQ.adword}if(bQ.amktid){bT.amktidClick=bQ.amktid;bO.amktid=bQ.amktid}if(bX){bO.gclid=bX}bO.ref=bP;aB(i,bO);aS(bO,null,true,bP,bQ,i);return}if(bQ.campaign){var e=bU?bU:"cp";if(bU&&!bI[bU]){bI[bU]=bI.cp}var bO=aC(bT,bS,bQ,e);bT.campClick=bQ.campaign;bO.campaign=bQ.campaign;if(bQ.efp){bO.efp=bQ.efp}if(bQ.efc){bO.efc=bQ.efc}if(bQ.efpn){bO.efpn=bQ.efpn}if(bQ.mktsp){bO.mktsp=bQ.mktsp}bO.ref=bP;aB(i,bO);return}if(bQ.newsletter||bQ.ecmId){var bO=aC(bT,bS,bQ,"nl");if(bQ.newsletter){bT.newsClick=bQ.newsletter;bO.news=bQ.newsletter}if(bQ.ecmId){bO.newsmid=bQ.ecmId}return}if(bV==null||bV.length==0){if(d(bT)){return}aC(bT,bS,bQ,"direct");return}if(bk(bP)){if(d(bT)){return}bT.ref=af(bV,-1);bT.source="intern";return}if(aS(bT,bS,false,bP,bQ,i)){return}aC(bT,bS,bQ,"ref").ref=bP}function aB(bO,i){var e=bO.url?bJ(bO.url).substring(0,127):null;if(e){i.refUrl=e}}function aC(bO,e,bQ,bP){if(bI[bP]){if(!e.cookie){e.cookie={}}var i=e.cookie;e.emcl=bI[bP];ac(n,bQ,bP,i);i.source=bP;return i}else{bO.source=bP;return bO}}function ac(e,bO,bP,i){if(e.all){aF(e.all,bO,i)}if(e[bP]){aF(e[bP],bO,i)}}function aF(bR,bQ,bP){for(var bO=0;bO<bR.length;bO++){var e=bQ[bR[bO]];if(e){bP[bR[bO]]=e}}}function d(i){var e=bG(t);if(e&&e.length>0){i.source="cp";i.campaign=bJ(e);return true}return false}function aP(bO,i,bQ){Y(bO,i,bQ);if(i.cookie&&!(g&&ap)){L(bO,i.cookie);bO.postconv="0"}if(by&&ap){if(i.cookie){var bR=null;if(i.emcl){bR=parseInt(i.emcl)}if(!bR){bR=Q}bR=bR*86400;bM(ay,aU(i.cookie)+"&ccbt="+Math.floor(new Date().getTime()/1000),bR)}else{var bP=bG(ay);if(bP&&bP.length>0){var e=am(bP);bO.postconv="1";e.ccbtd=Math.floor(new Date().getTime()/1000)-parseInt(e.ccbt);delete e.ccbt;L(bO,e)}}}}function H(){var bT=bG(B);if(bT&&bT.length>0){var bR=new Date().getTime();bT=bJ(bT);var bO=[];var e=bT.split("@");for(var bP=0;bP<e.length;bP++){if(e[bP]){var bQ=am(e[bP]);var bS=parseInt(bQ.t);if(isFinite(bS)){bQ.td=bR-bS;delete bQ.t}bO.push(aU(bQ))}}return bO.join("@")}return null}function bk(e){return(e.split("/")[2]==location.host)}var ai=[["q",null,"ie","start",1],["p",null,null,"b",1],["su",null,null,"pageIndex",10],["query",null,null],["qry_str",null,null],["begriff",null,null],["words",null,null],["encquery",null,null],["qt",null,null],["terms",null,null],["text",/yandex\./g,null],["wd",/\.baidu\./g,null],["w",/\.soso\./g,null],[null,/www\.google\./g,null],[null,/search\.yahoo\.com/g,null]];function aS(bV,bT,bS,bP,bZ,e){if(aQ){for(var bR=0;bR<aQ.length;bR++){if(bP.indexOf(aQ[bR])>=0){return false}}}for(var bR=0;bR<ai.length;bR++){var bQ=ai[bR];var bW=(bQ[0])?e[bQ[0]]:"not provided";if(bW){var bO=bQ[1];if(bO==null||bP.search(bO)>=0){var bU=bS?bV:aC(bV,bT,bZ,"suma");var bY=bQ[2];if(bY&&e[bY]){bU.smqpe=e[bY];bU.smqp=bW}else{bU.smqp=bJ(bW)}if(bQ.length==5&&e[bQ[3]]){var bX=parseInt(e[bQ[3]]);if(!isNaN(bX)){bU.smstart=bX*bQ[4]}}if(!bS){bU.ref=bP}return true}}}return false}function P(bW,bP,bU){var bO=aA(bP,bU);if(bO&&!bO[3]){if(bW.ec_Event&&bW.ec_Event[0]&&bW.ec_Event[0][a5]){bO[3]=bW.ec_Event[0][a5]}}var bT=ar();if(bO){bW.crossData=[bO];var bZ=[];for(var bS=0;bS<bO.length;bS++){if(bS==1){bZ[bS]="previous_visit"}else{if(typeof bO[bS]!="undefined"){bZ[bS]=a6(bO[bS])}else{bZ[bS]="null"}}}var bX=bZ.join(",");if(bT){var bR=[bX].concat(bT);if(bR.length>5){bR.length=5}bX=bR.join(":")}bM(w,bX,Q*86400)}else{if(bT){var bV=[];for(var bS=0;bS<bT.length;bS++){var e=bT[bS].split(",");var bY=[];for(var bQ=0;bQ<e.length;bQ++){bY.push(bJ(e[bQ]))}bV.push(bY)}bW.crossData=bV}}}function aA(bO,e){var i=e.crossData;if(typeof i=="object"&&N(i)&&typeof i[0]=="string"){return i}if(e.emcs0){ae("cd");return[e.emcs0,e.emcs1,e.emcs2,e.emcs3]}if(a4.emcs0){return[a4.emcs0,a4.emcs1,a4.emcs2,a4.emcs3]}if(bO.emcs0){return[bO.emcs0,bO.emcs1,bO.emcs2,bO.emcs3]}return null}function ar(){var e=bG(w);if(e&&e.length>0){return e.split(":")}else{return null}}function ae(e){aK[e]=e}function r(){var e=EMOS_VERSION;for(var i in aK){var bO=aK[i];if(typeof i=="string"&&bO===i){e+=("|"+i)}}return e}function h(bS){var bR=s.getElementsByName("emos_name");var bT=false;for(var bQ=0;bQ<bR.length;bQ++){var e=bR[bQ].title;var bP=bR[bQ].rel;var bO=bR[bQ].rev;if(e.length>0){if(bP.length>0){bT=true;if(bO.length>0){bS[e]=[[bJ(bP),bJ(bO)]]}else{bS[e]=bJ(bP)}}}}if(bT){ae("tag")}}function a0(bR,bP){try{if(bR){if(bR.length&&bR.length>0){bP.ec_Event=[];for(var bO=0;bO<bR.length;bO++){bP.ec_Event[bP.ec_Event.length]=aT(bR[bO])}}else{bP.ec_Event=[aT(bR)]}ae("ecp")}}catch(bQ){}}function aT(bO){var e=a(bO,"event");var i=a(bO,"id");var bS=a(bO,"name");var bV=a(bO,"preis");var bU=a(bO,"group");var bT=a(bO,"anzahl");var bR=a(bO,"var1");var bQ=a(bO,"var2");var bP=a(bO,"var3");return[e,i,bS,bV,bU,bT,bR,bQ,bP]}function a(i,e){return i[e]?bJ(i[e]):"NULL"}function br(i){try{if(a4.emosCustomPageArray){i[bJ(a4.emosCustomPageArray[0])]=[bb(a4.emosCustomPageArray.slice(1))];ae("cpa")}}catch(bO){}}function ax(bQ){try{if(a4.emosCustomMultiArray&&a4.emosMultiArrayID){var bO=[];for(var bP=0;bP<a4.emosCustomMultiArray.length;bP++){bO[bP]=bb(a4.emosCustomMultiArray[bP])}bQ[bJ(a4.emosMultiArrayID)]=bO;ae("cma")}}catch(bR){}}function be(bP,i){try{if(bP){i.billing=[bb(bP)];ae("bill")}}catch(bO){}}function ag(bO,bQ){try{if(bO){bQ.ec_Event=[];for(var i=0;i<bO.length;i++){var bP=["buy"];for(var bS=0;bS<bO[i].length;bS++){bP[bS+1]=bJ(bO[i][bS])}bQ.ec_Event[bQ.ec_Event.length]=bP}ae("bpa")}}catch(bR){}}function aJ(bQ,bO,bS){try{if(bO&&bQ){var bP=[];for(var bR=0;bR<bO.length;bR++){bP[bR]=bb(bO[bR])}bS[bJ(bQ)]=bP;ae("free")}}catch(bT){}}function al(){if(ak==null){var e=a4.location.hostname.split(".");var bQ=e[e.length-1];var bR=e[e.length-2];var bP=(bQ=="uk"||bQ=="tr"||bQ=="br"||(bQ=="at"&&bR=="co")||(bQ=="jp"&&(bR=="co"||bR=="ac"||bR=="go"||bR=="ne"||bR=="or")))?3:2;if(isNaN(parseInt(bQ))&&e.length>=bP){ak="";for(var bO=e.length-bP;bO<e.length;bO++){ak+=("."+e[bO])}}else{ak=a4.location.hostname}}}function L(bO,i){for(var e in i){bO[e]=i[e]}}function a8(bO,e){if(!aa){return}var i=bi();L(i,bO);i.emosV=r();i.plReqId=aa;S(i,e,aw())}function bi(){var e={};L(e,DFLTS);if(a4.emosGlobalProperties){ae("gp");L(e,a4.emosGlobalProperties)}if(l.defaults){L(e,l.defaults)}return e}a4.emos_ecEvent=function(bT,i,e,bV,bU,bR,bQ,bP,bO){ae("ecE");var bS={};bS.ec_Event=[[bT,i,e,bV,bU,bR,bQ,bP,bO]];return O(bS)};function bj(bO){if(a4.emosDoNotTrack){return true}var e=bO.config;if(e){delete bO.config}else{e={}}if(!bs){return true}if(a2){return true}if((bO.type&&bO.type=="event")||(e.type&&e.type=="event")){if(bO.type){delete bO.type;ae("pt")}a8(bO,e);return true}var i=bi();L(i,bO);A(i,e);L(i,bO);au(i,e);return true}var O;if(!(Object.prototype.toString.apply(l.stored)==="[object Array]")){l.stored=[]}var bu=s.getElementsByTagName("script");var bN=bu[bu.length-1];var aD=("async" in bN);if(!aR&&a3&&aD&&!bG(a9)){O=function(e){l.stored.push(e)};var aN=s.createElement("script");aN.type="text/javascript";aN.async=true;l.initWithVid=function(bO){aR=bO;O=bj;for(var e=0;e<l.stored.length;e++){O(l.stored[e])}};aN.src="https://"+x+"/jsid/"+bF;bN.parentNode.insertBefore(aN,bN)}else{O=bj;for(var bc=0;bc<l.stored.length;bc++){O(l.stored[bc])}}a4.emosPropertiesEvent=function(e){ae("pE");return O(e)};l.send=function(e){return O(e)};a4.emos_userEvent1=function(e,bO){ae("uE1");var i={};i[e]=bO;return O(i)};a4.emos_userEvent2=function(e,bO,i){ae("uE2");var bP={};bP[e]=[[bO,i]];return O(bP)};a4.emosTargetEvent=function(bP,bR,bQ,bO){ae("tE");var e={};var i=0;if(typeof bQ=="boolean"){if(bQ){e.cGoal="1";i=1}}else{if(typeof bQ=="number"){if(bQ!=0){e.cGoal="1";i=bQ}}else{if(typeof bQ=="string"){if(bQ!="0"){e.cGoal="1";i=bQ}}}}if(typeof bO!="string"){bO="d"}e.Target=[[bP,bR,i,bO]];e.content="Target_"+bP+"_"+bR;return O(e)};a4.emosLeadEvent=function(bP,bS,bQ,bO,i,bR){ae("lE");var e={};e.LeadEvent=[[bP,bS,bQ,bO,i]];if(bR){e.cGoal="1"}return O(e)};a4.emosCustomEvent=function(bQ,bP,e,i,bR){ae("cE");var bO={};bO[bQ]=[[bP,e,i,bR]];return O(bO)};a4.emosUserEvent=function(i,bP,bO){ae("uE");var e={};e.uEvent=[[i,bP,bO]];return O(e)};function bb(bO){var i=[];for(var e=0;e<bO.length;e++){i[e]=bJ(bO[e])}return i}a4.emosBuyEvent=function(bO,e){ae("bE");var i={};be(bO,i);ag(e,i);return O(i)};a4.emosFreeEvent=function(i,e){ae("fE");var bO={};aJ(i,e,bO);return O(bO)};a4.emos_submitFormData=function(bP){ae("sfd");var bO=s.forms[bP];if(!bO){return true}var i={};var e=[];for(var bQ=0;bQ<(bO.elements.length);bQ++){if(bO.elements[bQ].value!=""){e[bQ]=[bO.elements[bQ].name,bO.elements[bQ].value]}}i.fName=bP;i.fData=[e];return O(i)};function aq(bU,bP){var bT={};if(!bU){return bT}var bS=bU.indexOf("?");if(bS>=0){bU=bU.substr(bS+1)}var bQ=bU.split("&");for(var bO=0;bO<bQ.length;bO++){var bR=bQ[bO].split("=");var e=bR[0];if(e){if(bR[1]){if(bP){bT[e]=bJ(bR[1])}else{bT[e]=bR[1]}}else{bT[e]=""}}}return bT}function bH(){al();an();bd();if(TRACK_VERSION==1){av()}if(TRACK_VERSION==1&&a4.addEventListener){a4.addEventListener("pageshow",function(e){if(e.persisted){av()}},false)}if(bv){bh(s,"mousedown",q)}}bH()})(window,document);