
jQuery(function ($) {
	
 	$('#basic-modal-content').each(function(){
 		$(this).modal();
 		return false;
 	});
 	
 	$(document).ready(function() {

        /* delete icon tooltip */
        $("i.icon-cancel-circle").each(function(){
            var row = $(this).closest("tr");
            var rowClass = row.attr("class");
            var tooltip_text = "löschen";
            var articleType = rowClass.match(/qs\_([^\s]*)/);
            if(articleType && articleType.length > 0){
                switch(articleType[1]){
                    case "inclusive_domain":
                        tooltip_text = "Inklusivdomain löschen";
                        break;
                    case "exclusive_domain":
                        tooltip_text = "Exklusivdomain löschen";
                        break;
                    case "article":
                        tooltip_text = "Artikel löschen";
                        break;
                    case "addon":
                        tooltip_text = "Zusatzartikel löschen";
                        break;
                    default:
                        break;
                }
            }
            $(this).attr("data-placement", "left")
                .attr("title", tooltip_text)
                .hover(function(event){
                    $(this).tooltip("show");
            });
        });
                
    });

 	$(".jq_delete").each(function(index, value){
		$(this).click(function(event){
			//console.log("click");
			var actionHref = "/buy/ger/";
			var row = $(this).closest("tr");
			var rowClass = row.attr("class");
			var rowID = row.attr("id");

			// get position of article
			var article = rowID.match(/qs\_([^\s]*)/);
			if(article && article.length > 0){
				var positionArticle = article[1].match(/[^\d]*\_([^\s]*)/);
				if(positionArticle && positionArticle.length > 0){
					var articleType = rowClass.match(/qs\_([^\s]*)/);
					if(articleType && articleType.length > 0){
						switch(articleType[1]){
							case "inclusive_domain":
								actionHref = actionHref+"domain/del_in/"+positionArticle[1].replace("_", "/")+"/";
								break;
							case "exclusive_domain":
								actionHref = actionHref+"domain/del_ex/"+positionArticle[1].replace("_", "/")+"/";
								break;
							case "article":
								actionHref = actionHref+"basket/del/"+positionArticle[1].replace("_", "/")+"/";
								break;
							case "addon":
								actionHref = actionHref+"basket/del/"+positionArticle[1].replace("_", "/")+"/";
								break;
							default:
								break;
						}
						if(articleType[1] === "article"){
							confirm("<div class='tooltip_info'><div class='icon'> <i class='icon-info'></i> </div></div>&nbsp;&nbsp; Bitte beachten Sie, dass beim Entfernen Ihres Produktes auch alle Domains bzw. Zusatzartikel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gelöscht werden.", 
							function(){
								top.location.href = actionHref;
							});
						} else {
							top.location.href = actionHref;
						}
					}
				}
			}
		});
	});
        

	var article_add="";

	$('#confirm-dialog input.confirm, #confirm-dialog a.confirm').click(function (e) {
		e.preventDefault();

		
	/*	confirm("<img class='info' src='/static/strato/img/ger/overlay/info.png' alt='close'>Bitte beachten Sie, das beim Entfernen ihres Hosting Pakets auch alle Domains gel&ouml;scht werde", function () {
		    window.location.href = '/'+lang+'/basket/del/';
		});*/
	});

	

});
 
function customerdata_delete_button(id_buttons){
 
    $('#confirm-dialog input.confirm, #confirm-dialog a.confirm').click(function (e) {
		e.preventDefault();
		
		confirm(

            "<div class='tooltip_info'><div class='icon'> <i class='icon-info'></i> </div></div>&nbsp;&nbsp; Bitte beachten Sie, dass beim Entfernen ihres Hosting Pakets auch alle Domains gel&ouml;scht werden.", 


  

            function () {
               // if( my_basket && my_basket[id_buttons] && my_basket[id_buttons].econda_daten ) {
               //     console.log( 'econda: delete', my_basket[id_buttons].econda_daten )
               // }
    		    window.location.href = '/'+lang+'/basket/del/'+id_buttons+'';
    		} 
		);
	});        
    
}



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