

function showhelp()
{
	menuCheck();
	$('.tt').hide();
	$('#backbutton').show();
	$.get("help.html", function(data) {
         $('.showhelp').html(data);
         var lan = 'fr';
         $(".languagecheck").each(function(){         		
         		var that = $(this);
         		if(that.hasClass('ui-btn-active')){
         			lan = that.attr('rel');	
         		}
         });
          $('.showhelp').find('.hiding').hide();
         $('.showhelp').find('.lang_'+lan).show();
         $('.showhelp').show();
    });
 }

function check(code){

	menuCheck();

	var appstrcont =  localStorage.getItem('appstrvalue'); 
	var appstrvaluecont = JSON.parse(appstrcont);

	appstrvaluecont.contracode = code;

	localStorage.setItem('appstrvalue', JSON.stringify(appstrvaluecont));


	$('.tt').hide();
	$('#backbutton2').show();

	$('.speciespopup').html(showLoader()).show();

		$.get("checking.html", function(data) {
         $('.speciespopup').html(data).show();
     });

}



 function showabout()
{

	menuCheck();
	$('.tt').hide();
	$('#backbutton').show();

	$.get("about.html", function(data) {
         $('.checkk').html(data);


         var lan = 'fr';
         $(".languagecheck").each(function(){         		
         		var that = $(this);
         		if(that.hasClass('ui-btn-active')){
         			lan = that.attr('rel');	
         		}
         });
          $('.showabout').find('.hiding').hide();
         $('.showabout').find('.lang_'+lan).show();
         $('.showabout').show();

    });


}



function showhome()
{
	
	menuCheck();
	$('.lang_wrap').show();
	$('.SearchWrapper').empty();

	var appstrval =  localStorage.getItem('appstrvalue'); 
	var appstrvalue = JSON.parse(appstrval);

	var newappstr = appstrvalue.txtappstr;

	var frmvalues = localStorage.getItem('formvalues'); 
	var fnlvalue = JSON.parse(frmvalues);

	fnlvalue.txtcurquest = "";
	fnlvalue.txtquest = "";
	fnlvalue.txtappstr= newappstr;
	localStorage.setItem('formvalues', JSON.stringify(fnlvalue));

	if( $(".showContraContent:visible").is(":visible")){
		$('.tt').hide();
		$('.showresults').show();
	}else{
		$('.tt').hide();
		$('.cancelbutton, .nextbutton').hide();
		$('#cbp-spmenu-s2 , #showRight, #backbutton').show();
		$('.message').show();
		$('.canvasdiv').show();
		$('#backbutton').hide();	
	}		
	
}

function shownewhome(){
	menuCheck();
	$('.lang_wrap').show();
	$('.canvasdiv').show();
	$('.tt').hide();
	$('#backbutton').hide();
	$('#backbutton1').hide();
	$('#backbutton2').hide();
	var a = window.innerHeight;
	var style_h ="";
	if(a>700){
            h= a-60;
   style_h = 'style="height:'+h+'px;"';
        }
	 var isframe = '<svg  xmlns="http://www.w3.org/2000/svg" id="homesvg" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"  '+style_h+' image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24000 18000" xmlns:xlink="http://www.w3.org/1999/xlink">';
         var test = 'staticSVGs/index.svg';    
            $.get(test, function(data) {
              isframe+=data;
              isframe+='</svg>'; 

              $('.message').html(isframe).show();
            },dataType="text");


            var appstrval =  localStorage.getItem('appstrvalue'); 
			var appstrvalue = JSON.parse(appstrval);

			var newappstr = appstrvalue.txtappstr;

            var frmvalues = localStorage.getItem('formvalues'); 
			var fnlvalue = JSON.parse(frmvalues);

	    	fnlvalue.txtcurquest = "";
	    	fnlvalue.txtquest = "";
	    	fnlvalue.txtstore = "0";
	    	fnlvalue.txtappstr= newappstr;
	    	localStorage.setItem('formvalues', JSON.stringify(fnlvalue));

           extraHome();
 
}
		


function shownext()
{
	$('.showSearchContent').html(showLoader());
	
	$.get("searchnext.html", function(data) {
         $('.showSearchContent').html(data);
    });

}


function showspecies()
{
		menuCheck();
	$('.tt').hide();
	$('#backbutton').show();
	$('.showspecies').show();

}

function menuCheck(){

	$('.lang_wrap').hide();
	$('.lang_wraplocal').hide();
	$('.lang_wrapcontra').hide();
	$('.canvasdiv').hide();
	var hasclass = $( "#cbp-spmenu-s2" ).hasClass( "cbp-spmenu-open" ) ;
	if(hasclass == true){
		$('#showRight').trigger('click');
	}
}
function showsearch()
{	

	menuCheck();
	$('.tt').hide();
	$('#cbp-spmenu-s2 , #showRight, #backbutton').hide();
	$('.cancelbutton, .nextbutton').show();
	
	$('.showSearchContent').show();

	$.get("search.html", function(data) {
         $('.showSearchContent').html(data);
    });

}

function showquest(charname)
{

	var listvalues = localStorage.getItem('formvalues'); 
   	var finalvalue = JSON.parse(listvalues);
   	finalvalue.txtquest = charname;
    localStorage.setItem('formvalues', JSON.stringify(finalvalue));
	menuCheck();
	
	$('.tt').hide();
	$('#backbutton').show();
	$('.selectquest').html(showLoader());

	$.get("selectquest.html", function(data) {
	
         $('.selectquest').html(data).show();
    });

}		


function showresults()
{

	menuCheck();
	$('.tt').hide();
	$('#backbutton').show();
	$('.showResultContent').html(showLoader()).show();

	$.get("results.html", function(data) {
         $('.showresults').html(data);//.show();

          var lan = 'fr';
         $(".languagecheck").each(function(){         		
         		var that = $(this);
         		if(that.hasClass('ui-btn-active')){
         			lan = that.attr('rel');	
         		}
         });

         $('.showresults').find('.resultlistspec').html(window.i8ln[lan].nomspecies);
         $('.showresults').find('.resultpercentage').html(window.i8ln[lan].resultpercentage);
         $('.showresults').find('.resulterror').html(window.i8ln[lan].resulterr);
         $('.showresults').find('.resultview').html(window.i8ln[lan].resultview);

         $('.showresults').show();
    });
}

function popup(portalLink, localLink){ 


	menuCheck();
	$('.tt').hide();
	$('#backbutton1').show();
	$('.popup').html(showLoader()).show();

	$('.lang_wraplocal').show();

	var listvalues = localStorage.getItem('appstrvalue'); 
   	var finalvalue = JSON.parse(listvalues);
   	finalvalue.linkresult = localLink;

	localStorage.setItem('appstrvalue', JSON.stringify(linkvar));

	$.get(localLink, function(data) {
         $(".popup").html(data).show();
    });

    //$(".popup").html('<iframe height="100%" width="100%" allowTransparency="true" frameborder="0" scrolling="yes"  src="'+portalLink+'" type= "text/javascript"></iframe>').show();
    
	    }

function speciesPopup(link){

		menuCheck();
	$('.tt').hide();
	$('#backbutton2').show();
	$('.lang_wrapcontra').show();

	var listvalues = localStorage.getItem('appstrvalue'); 
   	var finalvalue = JSON.parse(listvalues);
   	finalvalue.linkspecies = link;
    localStorage.setItem('appstrvalue', JSON.stringify(finalvalue));


	$('.speciespopup').html(showLoader()).show();

	var lan = 'fr';
	var contlin ="";
         $(".languagecheck").each(function(){         		
         		var that = $(this);
         		if(that.hasClass('ui-btn-active')){
         			lan = that.attr('rel');	
         		}
         });

         if(lan=="fr"){

          contlin = link.substr(0,8)+"fr"+link.substr(10,30);

          $.get(contlin, function(data) {
            $(".speciespopup").html(data).show();
        	});

         }else{

         	 $.get(link, function(data) {
            	$(".speciespopup").html(data).show();
        	});
         }

	   // $(".speciespopup").html('<iframe  height="100%" width="100%" allowTransparency="true" frameborder="0" scrolling="yes" style="overflow:hidden;width:100%;height:200%;" src="'+link+'" type= "text/javascript"></iframe>').show();

}

function showlistpopup(){

	menuCheck();
	$('.tt').hide();
	$('#backbutton2').hide();
	$('.showspecies').show();
		
	}

	function showresultspopup(){

		menuCheck();
	$('.tt').hide();
	$('#backbutton1').hide();
	$('.showresults').show();
		
	}


function replacechar(cname)
{

	$('.cancelbutton, .nextbutton').hide();
	var listvalues = localStorage.getItem('formvalues'); 
    var finalvalue = JSON.parse(listvalues);
    finalvalue.txtcharname = cname;

    localStorage.setItem('formvalues', JSON.stringify(finalvalue));
	menuCheck();
	$('#showRight, #cbp-spmenu-s2 ').show();
	$('.lang_wrap').show();
	$('.canvasdiv').show();
	$('.SearchWrapper').empty();
	$('.tt').hide();
	$('#backbutton').hide();

	$('.showone').trigger('click');

	$('.message').html(showLoader()).show();
	$('.forLoader').html(showLoader()).show();

    $.get("redrawdefault.html", function(data) {
         $('.message').html(data).show();
    });


}


function showerrors(spcode)
{
	$('#backbutton').show();
	var errorVal = { "spcode": spcode}; 
    localStorage.setItem('errorPage', JSON.stringify(errorVal));
	$('.tt').hide();
	$('.showContraContent').html(showLoader()).show();

	$.get("contra.html", function(data) {
         $('.showContraContent').html(data);
    });
	
   
}

function showLoader(){

	var output_load = '<div class="loading-icon">';
        output_load += '<div class="loading-bar-0"></div>';
        output_load +=          '<div class="loading-bar-1"></div>';
        output_load +=          '<div class="loading-bar-2"></div>';
        output_load +=          '<div class="loading-bar-3"></div>';
        output_load +=          '<div class="loading-bar-4"></div>';
        output_load +=    '</div>';

        return output_load;
}

function pop(stype){

	$(".newspecieslistwrapper").hide();
	 if(stype==1){
	 	
	 	$("#commonnames").show();
	 	$(".scrollnames").hide();
	 }
	 else if(stype==2){
	 
	 	$("#commonfamilies").show();
	 }
	 else if(stype==3){
	 
	 	$("#commonspecies").show();
	 	$(".scrollspecies").hide();
	 }else {
	 	$("#reversecontra").show();
	 	$(".scrollcontra").hide();
	 }

}
	
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


 function markselected(cid, svgdoc) {	

	
	var bbox = svgdoc.getElementById(cid).getBBox();	
	var node = svgdoc.getElementById("imgtick");
	var nwidth = bbox.width;

	var newx = bbox.x+nwidth/2;
	var newy = bbox.y+2 +20;

	node.setAttribute("x", newx);
	node.setAttribute("y", newy);

 }
 
 	function addLeadingZero(n) {
        return (n < 10) ? ("0" + n) : n;
    }

    
