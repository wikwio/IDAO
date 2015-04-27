var svgns = "http://www.w3.org/2000/svg";
var svgdoc;

/*function changelevel()
{
	document.forms[0].action = "results.php";
	document.forms[0].submit();
}*/

function showhelp()
{
	//window.location.href = "help.html";
	menuCheck();
	$('.tt').hide();
	$('#backbutton').show();
	//var test = 'help.html';
	//$('.heab').html(showLoader());
	$.get("help.html", function(data) {
         $('.showhelp').html(data).show();
    });
    //$('#showRight').trigger('click');
	//$(".heab").html('<iframe height="100%" allowTransparency="true" frameborder="0" scrolling="yes" style="width:100%;" src="help.html" type= "text/javascript"></iframe>');
}


function showhome()
{
	//window.location.href = "index.html";
	
	menuCheck();
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
	$('.canvasdiv').show();
	$('.tt').hide();
	$('#backbutton').hide();
	//$('.message').show();
	var a = window.innerHeight;
	//$('.message').css({'height':a}); 
	var style_h ="";
	if(a>700){
            h= a-60;
    //$('.ui-footer').addClass('ui-footer-fixed');
     
   // alert("hval"+h);
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

           	//$('#showRight').trigger('click');

           extraHome();
           //window.location.href="index.html";
 
}
		

function showabout()
{

	menuCheck();
	$('.tt').hide();
	$('#backbutton').show();
	//var test = 'about.html';
	//$('.heab').html(showLoader());
	$.get("about.html", function(data) {
         $('.showabout').html(data).show();
    });

	//$('#showRight').trigger('click');

	//$(".heab").html('<iframe height="100%" allowTransparency="true" frameborder="0" scrolling="yes" style="width:100%;" src="about.html" type= "text/javascript"></iframe>');

	//window.location.href = "about.html";	
	
}

function shownext()
{
	$('.showSearchContent').html(showLoader());
	//alert("vvvghvghvgv");
	//alert($('.showSearchContent').html());
	$.get("searchnext.html", function(data) {
		//alert(data);
         $('.showSearchContent').html(data);
    });

	//window.location.href = "searchnext.html";
}

function showcancel()
{
	window.location.href = "redrawdefault.html";
}

function showspecies()
{
		menuCheck();
		//$('#showRight').trigger('click');
	$('.tt').hide();
	$('#backbutton').show();
	//$('#backbutton').show();
	$('.showspecies').show();
	//$('.showspecies').trigger('click');
	//$('.showSpeciesContents').html(showLoader());

	/*$.get("specieslistpage.html", function(data) {
                //alert(data);
                 $('.showSpeciesContents').html(data);
                 //$('.showspecies').show();
                 //showresults();
            });
	*/
	//window.location.href = "specieslist.html";
}

function menuCheck(){

	$('.canvasdiv').hide();
	var hasclass = $( "#cbp-spmenu-s2" ).hasClass( "cbp-spmenu-open" ) ;
	if(hasclass == true){
		$('#showRight').trigger('click');
	}
}
function showsearch()
{	

	//alert("triggered");
	menuCheck();
		//$('#showRight').trigger('click');

	$('.tt').hide();
	$('#cbp-spmenu-s2 , #showRight, #backbutton').hide();
	$('.cancelbutton, .nextbutton').show();
	//$('.showSearch').trigger('click');
	//alert("triggered");
	//$('.forLoader').show();
	$('.showSearchContent').show();
//alert($('.showSearchContent').html());
	//alert("vvvghvghvgv");
	
//alert($('.showSearchContent').html());
	$.get("search.html", function(data) {
		//alert(data);
         $('.showSearchContent').html(data);
    });

	//window.location.href = "search.html";
	
}

function showquest(charname)
{

	var listvalues = localStorage.getItem('formvalues'); 
   	var finalvalue = JSON.parse(listvalues);
   	//alert("showquest"+finalvalue.txtstore+"another "+finalvalue.txtcharname);
   	finalvalue.txtquest = charname;
    localStorage.setItem('formvalues', JSON.stringify(finalvalue));
	menuCheck();
	//if(charname=="Port" || charname=="Phyllo" || charname=="Prefol"){
			//$('#showRight').trigger('click');

	//}
	//$('.showQuest').trigger('click');
	$('.tt').hide();
	$('#backbutton').show();
	$('.selectquest').html(showLoader());

	//alert("vvvghvghvgv");
	


	$.get("selectquest.html", function(data) {
		//alert(data);
		//$('.showQuestContent').html(data);
         $('.selectquest').html(data).show();
    });


	//window.location.href = "selectquest.html";	
}		


function showresults()
{
	//$('.showResults').trigger('click');

	menuCheck();
		//$('#showRight').trigger('click');

	$('.tt').hide();
	$('#backbutton').show();
	$('.showResultContent').html(showLoader()).show();

	//alert("vvvghvghvgv");
	


	$.get("results.html", function(data) {
		//alert(data);
         $('.showresults').html(data).show();
    });
	//window.location.href = "results.html";	
}

function popup(portalLink, localLink){ 


	$('.tt').hide();
	$('#backbutton1').show();
	//$('.showPopup').trigger('click');
	$('.popup').html(showLoader()).show();

	//var checkconnection ;
	//alert("hi");
	 //var networkState ;//= navigator.connection.type;
    $(".popup").html('<iframe height="100%" width="100%" allowTransparency="true" frameborder="0" scrolling="yes"  src="'+portalLink+'" type= "text/javascript"></iframe>').show();
    
	    }
	    //return false;
        /*setTimeout(function(){

          var  networkState = navigator.network.connection.type;
                 alert(networkState);

            if (networkState == "none"){
                //alert('No Internet');
                //checkconnection = false;
            	$(".showPopupContent").html('<iframe height="100%" allowTransparency="true" frameborder="0" scrolling="yes" style="width:100%;" src="'+localLink+'" type= "text/javascript"></iframe>');

            }else{
            	//checkconnection = true;
            	alert('Internet Connection there');
                $(".showPopupContent").html('<iframe height="100%" allowTransparency="true" frameborder="0" scrolling="yes" style="width:100%;" src="'+portalLink+'" type= "text/javascript"></iframe>');
         //alert('Internet Connection there');
                }
        }, 1000);*/
        //alert(networkState);
	//if(checkconnection){
			//alert("connnectio "+portalLink);
			 //$.mobile.loadPage('"'+portalLink+'"',{pageContainer: $('.clip')})
		//	$(".showPopupContent").html('<iframe height="100%" allowTransparency="true" frameborder="0" scrolling="yes" style="width:100%;" src="'+portalLink+'" type= "text/javascript"></iframe>');
			//alert($("#two").html());
			//$("#two").trigger("click");
			//$.mobile.loadPage( '"'+portalLink+'"');
			//$(".clip").html('<object style="width: 100%; height: 100%;" data="'+portalLink+'" />');
		//document.write('<iframe height="100%" allowTransparency="true" frameborder="0" scrolling="yes" style="width:100%;" src="'+portalLink+'" type= "text/javascript"></iframe>');	
	//}else {
	//	alert(" no connnectio ");
		//$(".clip").load(localLink);
			//$(".showPopupContent").html('<iframe height="100%" allowTransparency="true" frameborder="0" scrolling="yes" style="width:100%;" src="'+localLink+'" type= "text/javascript"></iframe>');

		//document.write('<iframe height="100%" allowTransparency="true" frameborder="0" scrolling="yes" style="width:100%;" src="'+localLink+'" type= "text/javascript"></iframe>');	
	//}
    


function speciesPopup(link){

	$('.tt').hide();
	$('#backbutton2').show();

	$('.speciespopup').html(showLoader()).show();
	//alert('speciespopup');
	    $(".speciespopup").html('<iframe  height="100%" width="100%" allowTransparency="true" frameborder="0" scrolling="yes" style="overflow:hidden;width:100%;height:200%;" src="'+link+'" type= "text/javascript"></iframe>').show();

}

function showlistpopup(){

	$('.tt').hide();
	$('#backbutton2').hide();
	$('.showspecies').show();
		
	}


	function showresultspopup(){

	$('.tt').hide();
	$('#backbutton1').hide();
	//alert("first");
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
	$('.canvasdiv').show();
	$('.SearchWrapper').empty();
	$('.tt').hide();
	$('#backbutton').hide();
	//$('.cancelbutton').trigger('click');

	$('.showone').trigger('click');

	$('.message').html(showLoader()).show();
	$('.forLoader').html(showLoader()).show();
	//alert($('.message').html());
	//alert($('.forLoader').html());


    $.get("redrawdefault.html", function(data) {
		//alert(data);
		//$('.forLoader').html(showLoader()).hide();
         $('.message').html(data).show();
         //showresults();
    });


//		window.location.href = "redrawdefault.html";	
}


function showerrors(spcode)
{
	//alert (spcode);
	$('#backbutton').show();
	var errorVal = { "spcode": spcode}; 
    localStorage.setItem('errorPage', JSON.stringify(errorVal));
	//$('.showContra').trigger('click');
	$('.tt').hide();
	$('.showContraContent').html(showLoader()).show();

	//alert("vvvghvghvgv");
	
   	//alert("showquest"+finalvalue.txtstore+"another "+finalvalue.txtcharname);
   

	$.get("contra.html", function(data) {
		//alert(data);
         $('.showContraContent').html(data);
    });
	
    //window.location.href = "contra.html";
	//document.forms[0].txtspcode.value = spcode;
	//document.forms[0].action = "contra.php";
	//document.forms[0].submit();
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

	$(".specieslistwrapper").hide();
	 if(stype==1){
	 	/*$(".communs").css({"background-color":"#808080"});
         $(".famille").css({"background-color":"#f6f6f6"});
          $(".Noms").css({"background-color":"#f6f6f6"});*/
	 	$(".commonnames").show();
	 }
	 else if(stype==2){
	 	/*$(".communs").css({"background-color":"#f6f6f6"});
         $(".famille").css({"background-color":"#808080"});
          $(".Noms").css({"background-color":"#f6f6f6"});*/
	 	$(".commonfamilies").show();
	 }
	 else{
	 	/*$(".communs").css({"background-color":"#f6f6f6"});
         $(".famille").css({"background-color":"#f6f6f6"});
          $(".Noms").css({"background-color":"#808080"});*/
	 	$(".commonspecies").show();
	 }

}
	/*var floreColumn =  new Array();
	var str = "";
	var url;
	var z = 0;
	alert("hi");
								if (stype == "2") {
								
									str += "<div>";
									str += "<ul data-role='listview'>";
									for (var i = 0; i < Object.keys(flore_famile).length; i++)
									{
										var l = flore_famile[i]["Famille"];
										var h = capitalizeFirstLetter(flore_famile[i]["Famille"]);
										str += "<li data-role='list-divider' role='heading' class='ui-li-divider ui-bar-inherit ui-first-child'>" + h +"</li>" ;
										//alert("ctrcode= "+l);
										for (var m = 0; m < Object.keys(flore_full).length; m++) {
										//console.log("flore_full[m]['Code'] = "+flore_full[m]["Code"]);
																//$(".clip").append(flore_full[3]);
										if(flore_full[m]["Famille"] == l){
										//alert("M="+m);
										//alert("length"+ flore_full[m]["Code"]);
										floreColumn[z] = flore_full[m];
										z++;
									}
								}
								//str += "<ul>";
								//alert(floreColumn);
								//alert(Object.keys(floreColumn).length);
								if (Object.keys(floreColumn).length> 1){
									for (var j= 0; j < floreColumn.length; j++)
									{
										//alert(j);
										key =  floreColumn[j]["Code"];
					                    url =  floreColumn[j]["portal_url"];			
										str += "<li><a href='"+url+"' >"+ floreColumn[j]["Espece"]  +"</a></li>";

									}
								}
								else
								{
									key =  floreColumn["Code"];
					                url =  floreColumn["portal_url"];	
									str += "<li><a href='"+url+"' >"+ floreColumn["Espece"]  +"</a></li>";				

					 		  }
								//str += "</ul>";
								//str += "</div>";
							}
							str += "</ul>";
							str += "</div>"
							console.log(str);
							alert(str);
							$(".showSpeciesContent").html(str);
						}
				}
						/*if (stype == "3")
						{
							// Show all the species
							str += "<li><strong>Espèces</strong>";
							str += "<ul>";
							for (var i = 0; i < Object.keys(flore_full).length; i++)
							{
								key =  flore_full[i]["Code"];
								url =  flore_full[i]["portal_url"];
								str += "<li>&nbsp;&nbsp;<a href='"+url+"' target='_blank'>" +  flore_full[i]["Espece"]  + "</a></li>";
							}
							str += "</ul></li>";		
						}

						if (stype != "2" && stype != "3")
						{
							
							var langFull = 'francais';//langauageArray[stype];
							var seaspecies = {"Absynthe bâtarde": [[ "http://portal.wikwio.org/species/show/24", "Ambrosia tenuifolia Spreng."] ],"Afoandoha": [[  "http://portal.wikwio.org/species/show/271",  "Rhamphicarpa fistulosa (Hochst.) Benth."],  [  "http://portal.wikwio.org/species/show/319",  "Striga asiatica (L.) Kuntze"] ],  "Ahibahiny": [[  "http://portal.wikwio.org/species/show/74",  "Conyza sumatrensis (Retz.) E.Walker"]  ],  "Ahibary": [[  "http://portal.wikwio.org/species/show/116",  "Echinochloa colona (L.) Link"]  ],  "Ahibazaha": [[  "",  ""]  ],  "Ahibita": [[  "http://portal.wikwio.org/species/show/126",  "Eleusine indica (L.) Gaertn."]  ],  "Ahibitsy": [[  "http://portal.wikwio.org/species/show/315",  "Stachytarpheta jamaicensis (L.) Vahl"]  ],  "Ahidratsy": [[  "",  ""]  ],  "Ahigisa": [[  "",  ""]  ],  "Ahikongona": [[  "http://portal.wikwio.org/species/show/188",  "Leersia hexandra Sw."],[  "http://portal.wikwio.org/species/show/205",  "Melinis repens (Willd.) Zizka"]  ],  "Ahipilo": [[  "",  ""]  ],  "Ahipisaka": [[  "http://portal.wikwio.org/species/show/33",  "Axonopus compressus (Sw.) P.Beauv."],[  "http://portal.wikwio.org/species/show/238",  "Paspalum conjugatum P.J.Bergius"],[  "http://portal.wikwio.org/species/show/318",  "Stenotaphrum dimidiatum (L.) Brongn."]  ],  "Ahipoly": [[  "http://portal.wikwio.org/species/show/205",  "Melinis repens (Willd.) Zizka"]  ],  "Ahipotsy": [[  "http://portal.wikwio.org/species/show/40",  "Brachiaria deflexa (Schumach.) C.E.Hubb. ex Robyns"]  ],  "Ahitafoaka": [[  "http://portal.wikwio.org/species/show/109",  "Digitaria ciliaris (Retz.) Koeler"]  ],  "Ahitramenakely": [[  "http://portal.wikwio.org/species/show/319",  "Striga asiatica (L.) Kuntze"]  ],  "Ahitsiriry": [[  "http://portal.wikwio.org/species/show/188",  "Leersia hexandra Sw."]  ],  "Ahitsoavaly": [[  "http://portal.wikwio.org/species/show/240",  "Paspalum paniculatum L."]  ],  "Ahivivy": [[  "http://portal.wikwio.org/species/show/241",  "Paspalum scrobiculatum L."]  ],  "Ahypody": [[  "http://portal.wikwio.org/species/show/40",  "Brachiaria deflexa (Schumach.) C.E.Hubb. ex Robyns"]  ],  "Aidinono": [[  "http://portal.wikwio.org/species/show/138",  "Euphorbia hirta L."],[  "http://portal.wikwio.org/species/show/140",  "Euphorbia prostrata Aiton"]  ],  "Ail marron": [[  "http://portal.wikwio.org/species/show/15",  "Allium neapolitanum Cirillo"]  ],  "Ail sauvage": [[  "http://portal.wikwio.org/species/show/15",  "Allium neapolitanum Cirillo"]  ],  "Akatabeloha": [[  "http://portal.wikwio.org/species/show/95",  "Cyperus difformis L."]  ],  "Akatambivy": [[  "http://portal.wikwio.org/species/show/116",  "Echinochloa colona (L.) Link"]  ],  "Akatandalitra": [[  "http://portal.wikwio.org/species/show/130",  "Eragrostis aspera (Jacq.) Nees"]  ],  "Akatandrano": [[  "http://portal.wikwio.org/species/show/116",  "Echinochloa colona (L.) Link"]  ],  "Akatavahiny": [[  "http://portal.wikwio.org/species/show/332",  "Trichodesma zeylanicum (Burm.f.) R.Br."]  ],  "Akondroankondro": [[  "http://portal.wikwio.org/species/show/165",  "Indigofera hirsuta L."]  ],  "Alléluia à fleurs jaunes": [[  "http://portal.wikwio.org/species/show/225",  "Oxalis corniculata L."]  ],  "Alléluia à fleurs roses": [[  "http://portal.wikwio.org/species/show/226",  "Oxalis debilis var. corymbosa (DC.) Lourteig"]  ],  "Amarante": [[  "http://portal.wikwio.org/species/show/23",  "Amaranthus viridis L."]  ],  "Ambatrimbohitra": [[  "http://portal.wikwio.org/species/show/47",  "Cajanus scarabaeoides (L.) Thouars"]  ],  "Amberivatrindolo": [[  "http://portal.wikwio.org/species/show/86",  "Crotalaria retusa L."]  ],  "Ambrosine": [[  "",  ""]  ],  "Amourette": [[  "http://portal.wikwio.org/species/show/170",  "Ipomoea hederifolia L."]  ],  "Amourette à feuilles en cœur": [[  "http://portal.wikwio.org/species/show/170",  "Ipomoea hederifolia L."]  ],  "Anakatsotsy": [[  "http://portal.wikwio.org/species/show/254",  "Phyllanthus niruroides M"]  ],  "Anamamidia": [[  "",  ""]  ],  "Anandrambo": [[  "http://portal.wikwio.org/species/show/79",  "Crassocephalum crepidioides (Benth.) S.Moore"]  ],  "Anantarika": [[  "http://portal.wikwio.org/species/show/114",  "Drymaria cordata (L) Willd.ex Roem. &Schult "]  ],  "Anantsanga": [[  "http://portal.wikwio.org/species/show/315",  "Stachytarpheta jamaicensis (L.) Vahl"]  ],  "Anapatsa": [[  "http://portal.wikwio.org/species/show/20",  "Amaranthus dubius H.Martius ex Thell."],[  "http://portal.wikwio.org/species/show/22",  "Amaranthus spinosus L."],[  "http://portal.wikwio.org/species/show/23",  "Amaranthus viridis L."]  ],  "Anapatsavavy": [[  "http://portal.wikwio.org/species/show/20",  "Amaranthus dubius H.Martius ex Thell."]  ],  "Anataribazaha": [[  "",  ""]  ],  "Anataritarika": [[  "http://portal.wikwio.org/species/show/114",  "Drymaria cordata (L) Willd.ex Roem. &Schult "]  ],  "Anatsaritaka": [[  "http://portal.wikwio.org/species/show/114",  "Drymaria cordata (L) Willd.ex Roem. &Schult "]  ],  "Anatsinahy": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "Anatsingitantsoavaly": [[  "http://portal.wikwio.org/species/show/192",  "Lepidium didymum L."]  ],  "Andrenahake": [[  "http://portal.wikwio.org/species/show/72",  "Commelina diffusa Burm.f."]  ],  "Angadi": [[  "http://portal.wikwio.org/species/show/29",  "Argemone mexicana L."]  ],  "Angamaibe": [[  "http://portal.wikwio.org/species/show/271",  "Rhamphicarpa fistulosa (Hochst.) Benth."]  ],  "Angamay": [[  "http://portal.wikwio.org/species/show/271",  "Rhamphicarpa fistulosa (Hochst.) Benth."],[  "http://portal.wikwio.org/species/show/319",  "Striga asiatica (L.) Kuntze"],[  "http://portal.wikwio.org/species/show/333",  "Tridax procumbens L."]  ],  "Anis marron": [[  "http://portal.wikwio.org/species/show/91",  "Cyclospermum leptophyllum (Pers.) Eichler"]  ],  "Anis sauvage": [[  "http://portal.wikwio.org/species/show/91",  "Cyclospermum leptophyllum (Pers.) Eichler"]  ],  "Antambakonjirika": [[  "http://portal.wikwio.org/species/show/304",  "Solanum mauritianum Scop."]  ],  "Arampandrotra": [[  "http://portal.wikwio.org/species/show/93",  "Cynodon dactylon (L.) Pers."]  ],  "Arema": [[  "http://portal.wikwio.org/species/show/319",  "Striga asiatica (L.) Kuntze"]  ],  "Armoise": [[  "http://portal.wikwio.org/species/show/24",  "Ambrosia tenuifolia Spreng."],[  "http://portal.wikwio.org/species/show/31",  "Artemisia verlotiorum Lamotte"]  ],  "Arouille carri": [[  "http://portal.wikwio.org/species/show/69",  "Colocasia esculenta (L.) Schott"]  ],  "Arouille violet": [[  "http://portal.wikwio.org/species/show/69",  "Colocasia esculenta (L.) Schott"]  ],  "Asiatic pennywort": [[  "http://portal.wikwio.org/species/show/55",  "Centella asiatica (L.) Urb."]  ],  "Avokombiby": [[  "http://portal.wikwio.org/species/show/32",  "Asystasia gangetica (L.) T.Anderson"]  ],  "Ayapana sauvage": [[  "http://portal.wikwio.org/species/show/89",  "Cyanthillium cinereum (L.) H.Rob."]  ],  "Azafo": [[  "http://portal.wikwio.org/species/show/260",  "Pistia stratiotes L."]  ],  "Babouc": [[  "",  ""]  ],  "Bakaka": [[  "http://portal.wikwio.org/species/show/308",  "Sorghum arundinaceum (Desv.) Stapf"]  ],  "Bakakely": [[  "http://portal.wikwio.org/species/show/7",  "Acanthospermum hispidum DC."]  ],  "Balloon vine": [[  "",  ""]  ],  "Balsam Pear": [[  "http://portal.wikwio.org/species/show/216",  "Momordica charantia L."]  ],  "Basilic": [[  "http://portal.wikwio.org/species/show/220",  "Ocimum americanum L."],[  "http://portal.wikwio.org/species/show/220",  "Ocimum americanum L."]  ],  "Bautrice": [[  "",  ""]  ],  "Bawa lalaaswiri": [[  "http://portal.wikwio.org/species/show/213",  "Mirabilis jalapa L."]  ],  "Bea": [[  "http://portal.wikwio.org/species/show/329",  "Trianthema portulacastrum L."]  ],  "Bealahy": [[  "http://portal.wikwio.org/species/show/329",  "Trianthema portulacastrum L."]  ],  "Beamena": [[  "http://portal.wikwio.org/species/show/37",  "Boerhavia diffusa L."]  ],  "Beandoha": [[  "http://portal.wikwio.org/species/show/95",  "Cyperus difformis L."]  ],  "Bécabar bâtard": [[  "http://portal.wikwio.org/species/show/37",  "Boerhavia diffusa L."]  ],  "Bedakoaky": [[  "http://portal.wikwio.org/species/show/29",  "Argemone mexicana L."]  ],  "Belle de nuit": [[  "http://portal.wikwio.org/species/show/213",  "Mirabilis jalapa L."]  ],  "Belohaliky": [[  "http://portal.wikwio.org/species/show/205",  "Melinis repens (Willd.) Zizka"]  ],  "Bemaimbo": [[  "http://portal.wikwio.org/species/show/287",  "Senna obtusifolia (L.) H.S.Irwin & Barneby"]  ],  "Berberoka": [[  "http://portal.wikwio.org/species/show/128",  "Emilia sonchifolia (L.) DC. ex DC."]  ],  "Bermuda grass": [[  "http://portal.wikwio.org/species/show/93",  "Cynodon dactylon (L.) Pers."]  ],  "Beroberoka": [[  "http://portal.wikwio.org/species/show/183",  "Lactuca indica L."],[  "http://portal.wikwio.org/species/show/306",  "Sonchus asper (L.) Hill."],[  "http://portal.wikwio.org/species/show/307",  "Sonchus oleraceus L."]  ],  "Besofina": [[  "http://portal.wikwio.org/species/show/336",  "Urena lobata L."]  ],  "Betombo": [[  "http://portal.wikwio.org/species/show/100",  "Dactyloctenium aegyptium (L.) P.Beauv."]  ],  "Bevilaqua": [[  "http://portal.wikwio.org/species/show/55",  "Centella asiatica (L.) Urb."],[  "http://portal.wikwio.org/species/show/55",  "Centella asiatica (L.) Urb."]  ],  "Bitter Gourd": [[  "http://portal.wikwio.org/species/show/216",  "Momordica charantia L."]  ],  "Bittercress": [[  "http://portal.wikwio.org/species/show/49",  "Cardamine hirsuta L."]  ],  "Blackjack": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "Bogamaziwa": [[  "http://portal.wikwio.org/species/show/89",  "Cyanthillium cinereum (L.) H.Rob."]  ],  "Bois de tabac marron": [[  "http://portal.wikwio.org/species/show/304",  "Solanum mauritianum Scop."]  ],  "Bonaka": [[  "",  ""]  ],  "Bonbon plim": [[  "http://portal.wikwio.org/species/show/244",  "Passiflora foetida L."]  ],  "Bonbon plume": [[  "http://portal.wikwio.org/species/show/244",  "Passiflora foetida L."]  ],  "Bongampiso": [[  "http://portal.wikwio.org/species/show/244",  "Passiflora foetida L."]  ],  "Bonnet de prêtre": [[  "",  ""]  ],  "Boreda": [[  "http://portal.wikwio.org/species/show/218",  "Nicandra physalodes (L.) Gaertn."]  ],  "Botrabotra": [[  "http://portal.wikwio.org/species/show/264",  "Portulaca oleracea L."]  ],  "Botrice": [[  "http://portal.wikwio.org/species/show/39",  "Bothriospermum tenellum (Hornem.) Fisch. & C.A.Mey."]  ],  "Botryce": [[  "",  ""]  ],  "Botrys": [[  "",  ""]  ],  "Bourrache": [[  "http://portal.wikwio.org/species/show/332",  "Trichodesma zeylanicum (Burm.f.) R.Br."]  ],  "Bourrache sauvage": [[  "http://portal.wikwio.org/species/show/332",  "Trichodesma zeylanicum (Burm.f.) R.Br."]  ],  "Bred marten": [[  "",  ""]  ],  "Bred pariater": [[  "http://portal.wikwio.org/species/show/20",  "Amaranthus dubius H.Martius ex Thell."]  ],  "Brède cacayanga": [[  "http://portal.wikwio.org/species/show/329",  "Trianthema portulacastrum L."]  ],  "Brède caya": [[  "http://portal.wikwio.org/species/show/65",  "Cleome viscosa L."]  ],  "Brède chinois": [[  "http://portal.wikwio.org/species/show/31",  "Artemisia verlotiorum Lamotte"]  ],  "Brède doux": [[  "http://portal.wikwio.org/species/show/307",  "Sonchus oleraceus L."]  ],  "Brède emballage": [[  "http://portal.wikwio.org/species/show/329",  "Trianthema portulacastrum L."]  ],  "Brède épineuse": [[  "http://portal.wikwio.org/species/show/22",  "Amaranthus spinosus L."]  ],  "Brède lastron": [[  "http://portal.wikwio.org/species/show/306",  "Sonchus asper (L.) Hill."]  ],  "Brède malabar": [[  "http://portal.wikwio.org/species/show/20",  "Amaranthus dubius H.Martius ex Thell."],[  "http://portal.wikwio.org/species/show/22",  "Amaranthus spinosus L."],[  "http://portal.wikwio.org/species/show/23",  "Amaranthus viridis L."]  ],  "Brède malabar à piquants": [[  "http://portal.wikwio.org/species/show/22",  "Amaranthus spinosus L."]  ],  "Brède malgache": [[  "",  ""]  ],  "Brède mamzelle": [[  "http://portal.wikwio.org/species/show/198",  "Lobelia cliffortiana L."]  ],  "Brède Martin": [[  "",  ""]  ],  "Brède morelle": [[  "",  ""]  ],  "Brède pariétaire": [[  "http://portal.wikwio.org/species/show/20",  "Amaranthus dubius H.Martius ex Thell."]  ],  "Brède pariétaire à piquants": [[  "http://portal.wikwio.org/species/show/22",  "Amaranthus spinosus L."]  ],  "Brèdemalabar": [[  "http://portal.wikwio.org/species/show/23",  "Amaranthus viridis L."]  ],  "Brèdepariétaire": [[  "http://portal.wikwio.org/species/show/23",  "Amaranthus viridis L."]  ],  "Bredpariater": [[  "http://portal.wikwio.org/species/show/23",  "Amaranthus viridis L."]  ],  "Bringelier marron": [[  "http://portal.wikwio.org/species/show/304",  "Solanum mauritianum Scop."]  ],  "Bringellier": [[  "http://portal.wikwio.org/species/show/304",  "Solanum mauritianum Scop."]  ],  "Broom weed": [[  "http://portal.wikwio.org/species/show/203",  "Malvastrum coromandelianum (L.) Garcke"]  ],  "Buffalo grass": [[  "http://portal.wikwio.org/species/show/238",  "Paspalum conjugatum P.J.Bergius"]  ],  "Burr bristle grass": [[  "http://portal.wikwio.org/species/show/293",  "Setaria verticillata (L.) P.Beauv."]  ],  "Butterfly pea": [[  "http://portal.wikwio.org/species/show/56",  "Centrosema pubescens Benth."]  ],  "Bwa": [[  "",  ""]  ],  "Bwasera": [[  "http://portal.wikwio.org/species/show/186",  "Lantana camara L."]  ],  "Camel bush": [[  "http://portal.wikwio.org/species/show/332",  "Trichodesma zeylanicum (Burm.f.) R.Br."]  ],  "Camomie": [[  "http://portal.wikwio.org/species/show/236",  "Parthenium hysterophorus L."]  ],  "Camomille": [[  "http://portal.wikwio.org/species/show/236",  "Parthenium hysterophorus L."]  ],  "Camomille balais": [[  "http://portal.wikwio.org/species/show/236",  "Parthenium hysterophorus L."]  ],  "Camomille sauvage": [[  "http://portal.wikwio.org/species/show/74",  "Conyza sumatrensis (Retz.) E.Walker"]  ],  "Camomille z’oiseaux": [[  "http://portal.wikwio.org/species/show/236",  "Parthenium hysterophorus L."]  ],  "Caranéli": [[  "http://portal.wikwio.org/species/show/253",  "Phyllanthus amarus Schumach. & Thonn."]  ],  "Carotte sauvage": [[  "http://portal.wikwio.org/species/show/91",  "Cyclospermum leptophyllum (Pers.) Eichler"],[  "http://portal.wikwio.org/species/show/91",  "Cyclospermum leptophyllum (Pers.) Eichler"]  ],  "Carpet grass": [[  "http://portal.wikwio.org/species/show/33",  "Axonopus compressus (Sw.) P.Beauv."],[  "http://portal.wikwio.org/species/show/33",  "Axonopus compressus (Sw.) P.Beauv."]  ],  "Cascarelle jaune": [[  "http://portal.wikwio.org/species/show/86",  "Crotalaria retusa L."]  ],  "Cascavelle jaune": [[  "http://portal.wikwio.org/species/show/86",  "Crotalaria retusa L."]  ],  "Casse puante": [[  "http://portal.wikwio.org/species/show/288",  "Senna occidentalis (L.) Roxb."]  ],  "Casse puante Indigo": [[  "http://portal.wikwio.org/species/show/288",  "Senna occidentalis (L.) Roxb."]  ],  "Casse tout seul": [[  "http://portal.wikwio.org/species/show/333",  "Tridax procumbens L."]  ],  "Castique petite espèce": [[  "http://portal.wikwio.org/species/show/253",  "Phyllanthus amarus Schumach. & Thonn."]  ],  "Centro": [[  "http://portal.wikwio.org/species/show/56",  "Centrosema pubescens Benth."]  ],  "Centrosema": [[  "http://portal.wikwio.org/species/show/56",  "Centrosema pubescens Benth."]  ],  "Centrosema petite feuille": [[  "http://portal.wikwio.org/species/show/56",  "Centrosema pubescens Benth."]  ],  "Chardon": [[  "http://portal.wikwio.org/species/show/29",  "Argemone mexicana L."]  ],  "Chardon du pays": [[  "http://portal.wikwio.org/species/show/29",  "Argemone mexicana L."]  ],  "Chaudion": [[  "http://portal.wikwio.org/species/show/29",  "Argemone mexicana L."]  ],  "Chibayamatso": [[  "http://portal.wikwio.org/species/show/211",  "Mimosa diplotricha Sauvalle"]  ],  "Chicorée": [[  "http://portal.wikwio.org/species/show/161",  "Hypochaeris radicata L."]  ],  "Chicorée commune": [[  "http://portal.wikwio.org/species/show/161",  "Hypochaeris radicata L."]  ],  "Chiendent": [[  "http://portal.wikwio.org/species/show/93",  "Cynodon dactylon (L.) Pers."]  ],  "Chiendent bourrique": [[  "http://portal.wikwio.org/species/show/318",  "Stenotaphrum dimidiatum (L.) Brongn."]  ],  "Chiendent caille": [[  "http://portal.wikwio.org/species/show/109",  "Digitaria ciliaris (Retz.) Koeler"],[  "http://portal.wikwio.org/species/show/113",  "Digitaria radicosa (C.Presl) Miq."]  ],  "Chiendent caille blanc": [[  "http://portal.wikwio.org/species/show/113",  "Digitaria radicosa (C.Presl) Miq."]  ],  "Chiendent de bœuf": [[  "http://portal.wikwio.org/species/show/318",  "Stenotaphrum dimidiatum (L.) Brongn."]  ],  "Chiendent fil de fer": [[  "http://portal.wikwio.org/species/show/93",  "Cynodon dactylon (L.) Pers."]  ],  "Chiendent patte de poule": [[  "http://portal.wikwio.org/species/show/100",  "Dactyloctenium aegyptium (L.) P.Beauv."],[  "http://portal.wikwio.org/species/show/126",  "Eleusine indica (L.) Gaertn."]  ],  "Chiendent patte poule": [[  "http://portal.wikwio.org/species/show/100",  "Dactyloctenium aegyptium (L.) P.Beauv."]  ],  "Chiendent pied de poule": [[  "http://portal.wikwio.org/species/show/126",  "Eleusine indica (L.) Gaertn."]  ],  "Chiendent queue de rat": [[  "http://portal.wikwio.org/species/show/292",  "Setaria pumila (Poir.) Roem. & Schult."]  ],  "Cochlearia": [[  "http://portal.wikwio.org/species/show/55",  "Centella asiatica (L.) Urb."]  ],  "Cochlearia du pays": [[  "http://portal.wikwio.org/species/show/55",  "Centella asiatica (L.) Urb."],[  "http://portal.wikwio.org/species/show/160",  "Hydrocotyle bonariensis Lam."]  ],  "Cochon gras": [[  "http://portal.wikwio.org/species/show/320",  "Synedrella nodiflora (L.) Gaertn."]  ],  "Coclaria du pays": [[  "http://portal.wikwio.org/species/show/55",  "Centella asiatica (L.) Urb."]  ],  "Coffee Senna": [[  "http://portal.wikwio.org/species/show/288",  "Senna occidentalis (L.) Roxb."]  ],  "Coha": [[  "http://portal.wikwio.org/species/show/71",  "Commelina benghalensis L."],[  "http://portal.wikwio.org/species/show/72",  "Commelina diffusa Burm.f."]  ],  "Collant": [[  "http://portal.wikwio.org/species/show/105",  "Desmodium incanum DC."]  ],  "Colle Colle": [[  "http://portal.wikwio.org/species/show/106",  "Desmodium intortum (Mill.) Urb."],[  "http://portal.wikwio.org/species/show/300",  "Sigesbeckia orientalis L."]  ],  "Colle-colle": [[  "http://portal.wikwio.org/species/show/105",  "Desmodium incanum DC."]  ],  "Coquette": [[  "http://portal.wikwio.org/species/show/335",  "Turnera ulmifolia L."]  ],  "Corbeille d'or": [[  "http://portal.wikwio.org/species/show/186",  "Lantana camara L."]  ],  "Couch grass": [[  "http://portal.wikwio.org/species/show/93",  "Cynodon dactylon (L.) Pers."]  ],  "Courre à terre": [[  "http://portal.wikwio.org/species/show/318",  "Stenotaphrum dimidiatum (L.) Brongn."]  ],  "Creaping paspalum": [[  "http://portal.wikwio.org/species/show/241",  "Paspalum scrobiculatum L."]  ],  "Cressonette": [[  "http://portal.wikwio.org/species/show/49",  "Cardamine hirsuta L."]  ],  "Crotolaria": [[  "http://portal.wikwio.org/species/show/86",  "Crotalaria retusa L."]  ],  "Crowfoot grass": [[  "http://portal.wikwio.org/species/show/100",  "Dactyloctenium aegyptium (L.) P.Beauv."]  ],  "Curanellia": [[  "http://portal.wikwio.org/species/show/253",  "Phyllanthus amarus Schumach. & Thonn."]  ],  "Curanellie": [[  "http://portal.wikwio.org/species/show/254",  "Phyllanthus niruroides M"],[  "http://portal.wikwio.org/species/show/255",  "Phyllanthus tenellus Roxb."],[  "http://portal.wikwio.org/species/show/256",  "Phyllanthus urinaria L."]  ],  "Curanellie blanche": [[  "http://portal.wikwio.org/species/show/253",  "Phyllanthus amarus Schumach. & Thonn."]  ],  "Curanellie rouge": [[  "http://portal.wikwio.org/species/show/256",  "Phyllanthus urinaria L."]  ],  "Cœur de Nely": [[  "http://portal.wikwio.org/species/show/253",  "Phyllanthus amarus Schumach. & Thonn."]  ],  "Dadjile": [[  "http://portal.wikwio.org/species/show/287",  "Senna obtusifolia (L.) H.S.Irwin & Barneby"]  ],  "Dallis grass": [[  "http://portal.wikwio.org/species/show/239",  "Paspalum dilatatum Poir."]  ],  "Datura": [[  "http://portal.wikwio.org/species/show/102",  "Datura stramonium L."]  ],  "Davu": [[  "",  ""]  ],  "Debere": [[  "http://portal.wikwio.org/species/show/20",  "Amaranthus dubius H.Martius ex Thell."],[  "http://portal.wikwio.org/species/show/23",  "Amaranthus viridis L."]  ],  "Désiré": [[  "http://portal.wikwio.org/species/show/66",  "Clidemia hirta (L.) D.Don."]  ],  "Devil-bean": [[  "http://portal.wikwio.org/species/show/86",  "Crotalaria retusa L."]  ],  "Donadona": [[  "http://portal.wikwio.org/species/show/268",  "Pycreus mundtii Nees"]  ],  "Drematse": [[  "http://portal.wikwio.org/species/show/100",  "Dactyloctenium aegyptium (L.) P.Beauv."]  ],  "Epi bleu": [[  "http://portal.wikwio.org/species/show/315",  "Stachytarpheta jamaicensis (L.) Vahl"]  ],  "Epinard blanc": [[  "http://portal.wikwio.org/species/show/58",  "Chenopodium album L."]  ],  "Epinard sauvage": [[  "http://portal.wikwio.org/species/show/58",  "Chenopodium album L."],[  "http://portal.wikwio.org/species/show/58",  "Chenopodium album L."]  ],  "Esquine": [[  "http://portal.wikwio.org/species/show/325",  "Themeda quadrivalvis (L.) Kuntze"]  ],  "Famamo": [[  "http://portal.wikwio.org/species/show/322",  "Tephrosia purpurea (L.) Pers."]  ],  "Famoa": [[  "http://portal.wikwio.org/species/show/232",  "Panicum maximum Jacq."],[  "http://portal.wikwio.org/species/show/235",  "Panicum subalbidum Kunth"]  ],  "Fandridahy": [[  "http://portal.wikwio.org/species/show/44",  "Brachiaria umbellata (Trin.) Clayton"]  ],  "Fandrotrarambazaha": [[  "http://portal.wikwio.org/species/show/248",  "Pennisetum clandestinum Hochst.ex Chiov."]  ],  "Fandrotrarana": [[  "http://portal.wikwio.org/species/show/44",  "Brachiaria umbellata (Trin.) Clayton"],[  "http://portal.wikwio.org/species/show/93",  "Cynodon dactylon (L.) Pers."]  ],  "Fandrotsana": [[  "http://portal.wikwio.org/species/show/93",  "Cynodon dactylon (L.) Pers."]  ],  "Fangy": [[  "http://portal.wikwio.org/species/show/255",  "Phyllanthus tenellus Roxb."]  ],  "Fantaka": [[  "http://portal.wikwio.org/species/show/232",  "Panicum maximum Jacq."],[  "http://portal.wikwio.org/species/show/235",  "Panicum subalbidum Kunth"]  ],  "Fatak rouge": [[  "http://portal.wikwio.org/species/show/235",  "Panicum subalbidum Kunth"]  ],  "Fataq": [[  "http://portal.wikwio.org/species/show/232",  "Panicum maximum Jacq."]  ],  "Fataque": [[  "http://portal.wikwio.org/species/show/232",  "Panicum maximum Jacq."]  ],  "Fataque des oiseaux": [[  "http://portal.wikwio.org/species/show/308",  "Sorghum arundinaceum (Desv.) Stapf"]  ],  "Fatipatika": [[  "http://portal.wikwio.org/species/show/22",  "Amaranthus spinosus L."]  ],  "Fausse camomille": [[  "http://portal.wikwio.org/species/show/74",  "Conyza sumatrensis (Retz.) E.Walker"]  ],  "Fausse pistache marronne": [[  "http://portal.wikwio.org/species/show/47",  "Cajanus scarabaeoides (L.) Thouars"]  ],  "Faux vin": [[  "http://portal.wikwio.org/species/show/258",  "Phytolacca americana L."]  ],  "Feather fingergrass": [[  "http://portal.wikwio.org/species/show/59",  "Chloris barbata Sw."]  ],  "Fes poul": [[  "http://portal.wikwio.org/species/show/136",  "Euphorbia cyathophora Murrill"],[  "http://portal.wikwio.org/species/show/137",  "Euphorbia heterophylla L."]  ],  "Feuille du diable": [[  "http://portal.wikwio.org/species/show/102",  "Datura stramonium L."]  ],  "Filakwa": [[  "http://portal.wikwio.org/species/show/55",  "Centella asiatica (L.) Urb."]  ],  "Fitohizambalala": [[  "http://portal.wikwio.org/species/show/269",  "Pycreus polystachyos (Rottb.) P.Beauv."]  ],  "Fler laklos": [[  "http://portal.wikwio.org/species/show/102",  "Datura stramonium L."]  ],  "Fler pwazon": [[  "http://portal.wikwio.org/species/show/102",  "Datura stramonium L."]  ],  "Fleur poison": [[  "http://portal.wikwio.org/species/show/102",  "Datura stramonium L."]  ],  "Fleur soleil": [[  "http://portal.wikwio.org/species/show/320",  "Synedrella nodiflora (L.) Gaertn."]  ],  "Flouve odorante": [[  "http://portal.wikwio.org/species/show/27",  "Anthoxanthum odoratum L."]  ],  "Fo watouk": [[  "http://portal.wikwio.org/species/show/66",  "Clidemia hirta (L.) D.Don."]  ],  "Foin": [[  "http://portal.wikwio.org/species/show/205",  "Melinis repens (Willd.) Zizka"]  ],  "Forinondry": [[  "http://portal.wikwio.org/species/show/32",  "Asystasia gangetica (L.) T.Anderson"]  ],  "Fotsimbarinakoho": [[  "http://portal.wikwio.org/species/show/52",  "Celosia trigyna L."]  ],  "Fou à mental": [[  "http://portal.wikwio.org/species/show/27",  "Anthoxanthum odoratum L."]  ],  "Four o'clock": [[  "http://portal.wikwio.org/species/show/213",  "Mirabilis jalapa L."]  ],  "Framboise": [[  "http://portal.wikwio.org/species/show/279",  "Rubus rosifolius Sm."]  ],  "Framboise marron": [[  "http://portal.wikwio.org/species/show/279",  "Rubus rosifolius Sm."]  ],  "Framboisier": [[  "http://portal.wikwio.org/species/show/279",  "Rubus rosifolius Sm."]  ],  "Frambwazi": [[  "http://portal.wikwio.org/species/show/279",  "Rubus rosifolius Sm."]  ],  "Franbwaz": [[  "http://portal.wikwio.org/species/show/279",  "Rubus rosifolius Sm."]  ],  "Fromental": [[  "http://portal.wikwio.org/species/show/240",  "Paspalum paniculatum L."]  ],  "Fumeterre": [[  "http://portal.wikwio.org/species/show/146",  "Fumaria muralis Sond. ex Koch"]  ],  "Fundrakole": [[  "http://portal.wikwio.org/species/show/294",  "Sida acuta Burm.f."],[  "http://portal.wikwio.org/species/show/295",  "Sida cordifolia L."]  ],  "Galaber": [[  "http://portal.wikwio.org/species/show/186",  "Lantana camara L."]  ],  "Gandia marron": [[  "http://portal.wikwio.org/species/show/74",  "Conyza sumatrensis (Retz.) E.Walker"]  ],  "Gazon": [[  "http://portal.wikwio.org/species/show/44",  "Brachiaria umbellata (Trin.) Clayton"]  ],  "Gazon chinois": [[  "http://portal.wikwio.org/species/show/44",  "Brachiaria umbellata (Trin.) Clayton"]  ],  "Gazon trel": [[  "http://portal.wikwio.org/species/show/44",  "Brachiaria umbellata (Trin.) Clayton"]  ],  "Gazon trelle": [[  "http://portal.wikwio.org/species/show/44",  "Brachiaria umbellata (Trin.) Clayton"]  ],  "Gerivit": [[  "http://portal.wikwio.org/species/show/89",  "Cyanthillium cinereum (L.) H.Rob."]  ],  "Goose grass": [[  "http://portal.wikwio.org/species/show/126",  "Eleusine indica (L.) Gaertn."]  ],  "Goutte de sang": [[  "http://portal.wikwio.org/species/show/128",  "Emilia sonchifolia (L.) DC. ex DC."],[  "http://portal.wikwio.org/species/show/319",  "Striga asiatica (L.) Kuntze"]  ],  "Grande oseille": [[  "http://portal.wikwio.org/species/show/280",  "Rumex abyssinicus Jacq."]  ],  "Grenadier marron": [[  "http://portal.wikwio.org/species/show/244",  "Passiflora foetida L."]  ],  "Grenadine marron": [[  "http://portal.wikwio.org/species/show/245",  "Passiflora suberosa L."]  ],  "Gros chiendent": [[  "http://portal.wikwio.org/species/show/44",  "Brachiaria umbellata (Trin.) Clayton"],[  "http://portal.wikwio.org/species/show/126",  "Eleusine indica (L.) Gaertn."],[  "http://portal.wikwio.org/species/show/239",  "Paspalum dilatatum Poir."],[  "http://portal.wikwio.org/species/show/242",  "Paspalum urvillei Steud."],[  "http://portal.wikwio.org/species/show/318",  "Stenotaphrum dimidiatum (L.) Brongn."]  ],  "Gros indigo sauvage": [[  "http://portal.wikwio.org/species/show/288",  "Senna occidentalis (L.) Roxb."]  ],  "Gros lastron": [[  "http://portal.wikwio.org/species/show/183",  "Lactuca indica L."]  ],  "Gros meinki": [[  "http://portal.wikwio.org/species/show/110",  "Digitaria horizontalis Willd."]  ],  "Gros mota": [[  "http://portal.wikwio.org/species/show/181",  "Kyllinga erecta Schumach."]  ],  "Gros poc poc": [[  "http://portal.wikwio.org/species/show/41",  "Brachiaria eruciformis (Sm.) Griseb."]  ],  "Gros trèfle": [[  "http://portal.wikwio.org/species/show/105",  "Desmodium incanum DC."],[  "http://portal.wikwio.org/species/show/105",  "Desmodium incanum DC."],[  "http://portal.wikwio.org/species/show/226",  "Oxalis debilis var. corymbosa (DC.) Lourteig"],[  "http://portal.wikwio.org/species/show/227",  "Oxalis latifolia Kunth"]  ],  "Gros zoumine": [[  "http://portal.wikwio.org/species/show/96",  "Cyperus esculentus L."]  ],  "Grosse framboise marronne": [[  "http://portal.wikwio.org/species/show/277",  "Rubus alceifolius Poir. "]  ],  "Grosse herbe de l’eau": [[  "http://portal.wikwio.org/species/show/71",  "Commelina benghalensis L."]  ],  "Grosse lentille malbare": [[  "http://portal.wikwio.org/species/show/340",  "Vicia sativa L."]  ],  "Grosse oseille": [[  "http://portal.wikwio.org/species/show/226",  "Oxalis debilis var. corymbosa (DC.) Lourteig"]  ],  "Grosse ronce": [[  "http://portal.wikwio.org/species/show/277",  "Rubus alceifolius Poir. "]  ],  "Grosse traînasse": [[  "http://portal.wikwio.org/species/show/71",  "Commelina benghalensis L."],[  "http://portal.wikwio.org/species/show/291",  "Setaria barbata (Lam.) Kunth"]  ],  "Guérit vite": [[  "http://portal.wikwio.org/species/show/89",  "Cyanthillium cinereum (L.) H.Rob."],[  "http://portal.wikwio.org/species/show/300",  "Sigesbeckia orientalis L."]  ],  "Guinea grass": [[  "http://portal.wikwio.org/species/show/232",  "Panicum maximum Jacq."]  ],  "Hamoka": [[  "http://portal.wikwio.org/species/show/11",  "Aeschynomene indica L."]  ],  "Hanitrinipatsaka": [[  "",  ""]  ],  "Harefo": [[  "http://portal.wikwio.org/species/show/122",  "Eleocharis dulcis (Burm.f.) Trin. ex Hensch."]  ],  "Hasa": [[  "http://portal.wikwio.org/species/show/288",  "Senna occidentalis (L.) Roxb."]  ],  "Hassa": [[  "http://portal.wikwio.org/species/show/287",  "Senna obtusifolia (L.) H.S.Irwin & Barneby"]  ],  "Hazomena": [[  "http://portal.wikwio.org/species/show/76",  "Corchorus olitorius L. "]  ],  "Herbe à balai": [[  "http://portal.wikwio.org/species/show/203",  "Malvastrum coromandelianum (L.) Garcke"]  ],  "Herbe à bouc": [[  "",  ""]  ],  "Herbe à cailles": [[  "http://portal.wikwio.org/species/show/333",  "Tridax procumbens L."]  ],  "Herbe à chenilles": [[  "http://portal.wikwio.org/species/show/315",  "Stachytarpheta jamaicensis (L.) Vahl"]  ],  "Herbe à cils": [[  "http://portal.wikwio.org/species/show/59",  "Chloris barbata Sw."]  ],  "Herbe à cornets": [[  "http://portal.wikwio.org/species/show/240",  "Paspalum paniculatum L."]  ],  "Herbe à épée": [[  "http://portal.wikwio.org/species/show/239",  "Paspalum dilatatum Poir."],[  "http://portal.wikwio.org/species/show/241",  "Paspalum scrobiculatum L."]  ],  "Herbe à feu": [[  "http://portal.wikwio.org/species/show/320",  "Synedrella nodiflora (L.) Gaertn."]  ],  "Herbe à matelas": [[  "http://portal.wikwio.org/species/show/43",  "Brachiaria reptans (L.) C.A.Gardner & C.E.Hubb."],[  "http://portal.wikwio.org/species/show/234",  "Panicum repens L."],[  "http://portal.wikwio.org/species/show/240",  "Paspalum paniculatum L."]  ],  "Herbe à oignon": [[  "http://portal.wikwio.org/species/show/99",  "Cyperus rotundus L."]  ],  "Herbe à oiseaux": [[  "http://portal.wikwio.org/species/show/59",  "Chloris barbata Sw."]  ],  "Herbe à paniers": [[  "http://portal.wikwio.org/species/show/294",  "Sida acuta Burm.f."],[  "http://portal.wikwio.org/species/show/336",  "Urena lobata L."]  ],  "Herbe à poils": [[  "http://portal.wikwio.org/species/show/276",  "Rottboellia cochinchinensis (Lour.) W.Clayton"]  ],  "Herbe à vers": [[  "http://portal.wikwio.org/species/show/58",  "Chenopodium album L."]  ],  "Herbe amère": [[  "",  ""]  ],  "Herbe aux ânes": [[  "http://portal.wikwio.org/species/show/291",  "Setaria barbata (Lam.) Kunth"]  ],  "Herbe aux cochons": [[  "http://portal.wikwio.org/species/show/71",  "Commelina benghalensis L."]  ],  "Herbe bambou": [[  "http://portal.wikwio.org/species/show/291",  "Setaria barbata (Lam.) Kunth"],[  "http://portal.wikwio.org/species/show/291",  "Setaria barbata (Lam.) Kunth"]  ],  "Herbe bassine": [[  "http://portal.wikwio.org/species/show/291",  "Setaria barbata (Lam.) Kunth"]  ],  "Herbe blanche": [[  "http://portal.wikwio.org/species/show/236",  "Parthenium hysterophorus L."]  ],  "Herbe bleue": [[  "http://portal.wikwio.org/species/show/154",  "Heliotropium amplexicaule Vahl"]  ],  "Herbe boileau": [[  "http://portal.wikwio.org/species/show/55",  "Centella asiatica (L.) Urb."]  ],  "Herbe bol": [[  "http://portal.wikwio.org/species/show/160",  "Hydrocotyle bonariensis Lam."]  ],  "Herbe bougie": [[  "http://portal.wikwio.org/species/show/74",  "Conyza sumatrensis (Retz.) E.Walker"]  ],  "Herbe bourrique": [[  "http://portal.wikwio.org/species/show/100",  "Dactyloctenium aegyptium (L.) P.Beauv."]  ],  "Herbe caille": [[  "http://portal.wikwio.org/species/show/43",  "Brachiaria reptans (L.) C.A.Gardner & C.E.Hubb."],[  "http://portal.wikwio.org/species/show/113",  "Digitaria radicosa (C.Presl) Miq."],[  "http://portal.wikwio.org/species/show/234",  "Panicum repens L."],[  "http://portal.wikwio.org/species/show/333",  "Tridax procumbens L."],[  "http://portal.wikwio.org/species/show/333",  "Tridax procumbens L."]  ],  "Herbe calumé": [[  "http://portal.wikwio.org/species/show/234",  "Panicum repens L."]  ],  "Herbe canal": [[  "http://portal.wikwio.org/species/show/90",  "Cyathula prostrata (L.) Blume "]  ],  "Herbe carapatte": [[  "http://portal.wikwio.org/species/show/43",  "Brachiaria reptans (L.) C.A.Gardner & C.E.Hubb."]  ],  "Herbe Caroline": [[  "http://portal.wikwio.org/species/show/261",  "Plantago lanceolata L."]  ],  "Herbe Chat": [[  "http://portal.wikwio.org/species/show/5",  "Acalypha indica L."]  ],  "Herbe Chatte": [[  "http://portal.wikwio.org/species/show/5",  "Acalypha indica L."],[  "http://portal.wikwio.org/species/show/5",  "Acalypha indica L."]  ],  "Herbe cheval": [[  "http://portal.wikwio.org/species/show/242",  "Paspalum urvillei Steud."]  ],  "Herbe chinois": [[  "http://portal.wikwio.org/species/show/31",  "Artemisia verlotiorum Lamotte"]  ],  "Herbe cipaye": [[  "http://portal.wikwio.org/species/show/332",  "Trichodesma zeylanicum (Burm.f.) R.Br."]  ],  "Herbe clausette": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "Herbe cochon": [[  "http://portal.wikwio.org/species/show/71",  "Commelina benghalensis L."],[  "http://portal.wikwio.org/species/show/72",  "Commelina diffusa Burm.f."]  ],  "Herbe coco": [[  "http://portal.wikwio.org/species/show/318",  "Stenotaphrum dimidiatum (L.) Brongn."]  ],  "Herbe codaya": [[  "http://portal.wikwio.org/species/show/239",  "Paspalum dilatatum Poir."],[  "http://portal.wikwio.org/species/show/242",  "Paspalum urvillei Steud."]  ],  "Herbe créole": [[  "http://portal.wikwio.org/species/show/238",  "Paspalum conjugatum P.J.Bergius"]  ],  "Herbe cressonnette": [[  "http://portal.wikwio.org/species/show/192",  "Lepidium didymum L."]  ],  "Herbe d'eau": [[  "http://portal.wikwio.org/species/show/72",  "Commelina diffusa Burm.f."]  ],  "Herbe d'Eugène": [[  "http://portal.wikwio.org/species/show/8",  "Achyranthes aspera L."]  ],  "Herbe d'Inde": [[  "http://portal.wikwio.org/species/show/8",  "Achyranthes aspera L."]  ],  "Herbe de bouc": [[  "",  ""]  ],  "Herbe de Flacq": [[  "http://portal.wikwio.org/species/show/300",  "Sigesbeckia orientalis L."]  ],  "Herbe de flacque": [[  "http://portal.wikwio.org/species/show/89",  "Cyanthillium cinereum (L.) H.Rob."],[  "http://portal.wikwio.org/species/show/300",  "Sigesbeckia orientalis L."]  ],  "Herbe de Guinée": [[  "http://portal.wikwio.org/species/show/232",  "Panicum maximum Jacq."]  ],  "Herbe de l'eau": [[  "http://portal.wikwio.org/species/show/72",  "Commelina diffusa Burm.f."]  ],  "Herbe de lait": [[  "http://portal.wikwio.org/species/show/137",  "Euphorbia heterophylla L."]  ],  "Herbe de miel": [[  "http://portal.wikwio.org/species/show/239",  "Paspalum dilatatum Poir."]  ],  "Herbe de riz": [[  "http://portal.wikwio.org/species/show/116",  "Echinochloa colona (L.) Link"],[  "http://portal.wikwio.org/species/show/237",  "Paspalidium geminatum (Forssk.) Stapf"],[  "http://portal.wikwio.org/species/show/237",  "Paspalidium geminatum (Forssk.) Stapf"],[  "http://portal.wikwio.org/species/show/276",  "Rottboellia cochinchinensis (Lour.) W.Clayton"]  ],  "Herbe des jeunes": [[  "http://portal.wikwio.org/species/show/8",  "Achyranthes aspera L."]  ],  "Herbe diable": [[  "http://portal.wikwio.org/species/show/87",  "Croton bonplandianus Baill."]  ],  "Herbe du diable": [[  "http://portal.wikwio.org/species/show/102",  "Datura stramonium L."]  ],  "Herbe du feu": [[  "http://portal.wikwio.org/species/show/319",  "Striga asiatica (L.) Kuntze"]  ],  "Herbe du riz": [[  "http://portal.wikwio.org/species/show/319",  "Striga asiatica (L.) Kuntze"]  ],  "Herbe dure": [[  "http://portal.wikwio.org/species/show/203",  "Malvastrum coromandelianum (L.) Garcke"],[  "http://portal.wikwio.org/species/show/207",  "Melochia pyramidata L."],[  "http://portal.wikwio.org/species/show/294",  "Sida acuta Burm.f."],[  "http://portal.wikwio.org/species/show/295",  "Sida cordifolia L."],[  "http://portal.wikwio.org/species/show/298",  "Sida rhombifolia subsp. alnifolia (L.) Ugbor."]  ],  "Herbe dure cendrée": [[  "http://portal.wikwio.org/species/show/295",  "Sida cordifolia L."]  ],  "Herbe dure collante": [[  "http://portal.wikwio.org/species/show/296",  "Sida glabra Mill."]  ],  "Herbe duvet": [[  "http://portal.wikwio.org/species/show/240",  "Paspalum paniculatum L."],[  "http://portal.wikwio.org/species/show/276",  "Rottboellia cochinchinensis (Lour.) W.Clayton"]  ],  "Herbe Edwards": [[  "http://portal.wikwio.org/species/show/44",  "Brachiaria umbellata (Trin.) Clayton"]  ],  "Herbe épée": [[  "http://portal.wikwio.org/species/show/239",  "Paspalum dilatatum Poir."]  ],  "Herbe fataque": [[  "http://portal.wikwio.org/species/show/232",  "Panicum maximum Jacq."]  ],  "Herbe fataque duvet": [[  "http://portal.wikwio.org/species/show/276",  "Rottboellia cochinchinensis (Lour.) W.Clayton"]  ],  "Herbe feu": [[  "http://portal.wikwio.org/species/show/252",  "Phalaris arundinacea L."]  ],  "Herbe Gallon": [[  "http://portal.wikwio.org/species/show/105",  "Desmodium incanum DC."]  ],  "Herbe gandia": [[  "http://portal.wikwio.org/species/show/74",  "Conyza sumatrensis (Retz.) E.Walker"]  ],  "Herbe goni": [[  "http://portal.wikwio.org/species/show/89",  "Cyanthillium cinereum (L.) H.Rob."]  ],  "Herbe grasse": [[  "http://portal.wikwio.org/species/show/300",  "Sigesbeckia orientalis L."]  ],  "Herbe guérit vite": [[  "http://portal.wikwio.org/species/show/89",  "Cyanthillium cinereum (L.) H.Rob."],[  "http://portal.wikwio.org/species/show/300",  "Sigesbeckia orientalis L."]  ],  "Herbe Hérisson": [[  "http://portal.wikwio.org/species/show/336",  "Urena lobata L."]  ],  "Herbe hérisson rouge": [[  "http://portal.wikwio.org/species/show/336",  "Urena lobata L."]  ],  "Herbe joba": [[  "http://portal.wikwio.org/species/show/248",  "Pennisetum clandestinum Hochst.ex Chiov."]  ],  "Herbe la misère": [[  "http://portal.wikwio.org/species/show/205",  "Melinis repens (Willd.) Zizka"]  ],  "Herbe la villebague": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "Herbe le rail": [[  "http://portal.wikwio.org/species/show/32",  "Asystasia gangetica (L.) T.Anderson"]  ],  "Herbe le rhum": [[  "http://portal.wikwio.org/species/show/89",  "Cyanthillium cinereum (L.) H.Rob."]  ],  "Herbe ma tante": [[  "http://portal.wikwio.org/species/show/240",  "Paspalum paniculatum L."],[  "http://portal.wikwio.org/species/show/249",  "Pennisetum polystachion (L.) Schult."]  ],  "Herbe mackaye": [[  "http://portal.wikwio.org/species/show/252",  "Phalaris arundinacea L."]  ],  "Herbe mange tout": [[  "http://portal.wikwio.org/species/show/32",  "Asystasia gangetica (L.) T.Anderson"]  ],  "Herbe margoze": [[  "http://portal.wikwio.org/species/show/210",  "Mikania micrantha Kunth"]  ],  "Herbe marron": [[  "http://portal.wikwio.org/species/show/74",  "Conyza sumatrensis (Retz.) E.Walker"]  ],  "Herbe oignon": [[  "http://portal.wikwio.org/species/show/96",  "Cyperus esculentus L."],[  "http://portal.wikwio.org/species/show/99",  "Cyperus rotundus L."],[  "http://portal.wikwio.org/species/show/180",  "Kyllinga bulbosa P.Beauv."],[  "http://portal.wikwio.org/species/show/181",  "Kyllinga erecta Schumach."],[  "http://portal.wikwio.org/species/show/269",  "Pycreus polystachyos (Rottb.) P.Beauv."]  ],  "Herbe pagode": [[  "http://portal.wikwio.org/species/show/330",  "Tribulus cistoides L."]  ],  "Herbe panier": [[  "http://portal.wikwio.org/species/show/336",  "Urena lobata L."]  ],  "Herbe papangue": [[  "http://portal.wikwio.org/species/show/205",  "Melinis repens (Willd.) Zizka"]  ],  "Herbe patience": [[  "http://portal.wikwio.org/species/show/281",  "Rumex crispus L."]  ],  "Herbe patte de poule": [[  "http://portal.wikwio.org/species/show/126",  "Eleusine indica (L.) Gaertn."]  ],  "Herbe piment": [[  "http://portal.wikwio.org/species/show/87",  "Croton bonplandianus Baill."],[  "http://portal.wikwio.org/species/show/147",  "Galinsoga parviflora Cav."]  ],  "Herbe pintade": [[  "http://portal.wikwio.org/species/show/37",  "Boerhavia diffusa L."]  ],  "Herbe pipi": [[  "",  ""]  ],  "Herbe pistache": [[  "http://portal.wikwio.org/species/show/32",  "Asystasia gangetica (L.) T.Anderson"]  ],  "Herbe rose": [[  "http://portal.wikwio.org/species/show/205",  "Melinis repens (Willd.) Zizka"]  ],  "Herbe rouge": [[  "http://portal.wikwio.org/species/show/319",  "Striga asiatica (L.) Kuntze"]  ],  "Herbe ruban": [[  "http://portal.wikwio.org/species/show/252",  "Phalaris arundinacea L."]  ],  "Herbe sensible": [[  "http://portal.wikwio.org/species/show/212",  "Mimosa pudica L."]  ],  "Herbe sergent": [[  "http://portal.wikwio.org/species/show/8",  "Achyranthes aspera L."]  ],  "Herbe siflette": [[  "http://portal.wikwio.org/species/show/116",  "Echinochloa colona (L.) Link"],[  "http://portal.wikwio.org/species/show/237",  "Paspalidium geminatum (Forssk.) Stapf"],[  "http://portal.wikwio.org/species/show/237",  "Paspalidium geminatum (Forssk.) Stapf"]  ],  "Herbe sirop": [[  "http://portal.wikwio.org/species/show/239",  "Paspalum dilatatum Poir."]  ],  "Herbe soleil": [[  "http://portal.wikwio.org/species/show/330",  "Tribulus cistoides L."]  ],  "Herbe solférino": [[  "http://portal.wikwio.org/species/show/24",  "Ambrosia tenuifolia Spreng."]  ],  "Herbe sornette": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "Herbe tam-tam": [[  "http://portal.wikwio.org/species/show/160",  "Hydrocotyle bonariensis Lam."]  ],  "Herbe tapage": [[  "http://portal.wikwio.org/species/show/86",  "Crotalaria retusa L."]  ],  "Herbe tourterelle": [[  "http://portal.wikwio.org/species/show/293",  "Setaria verticillata (L.) P.Beauv."],[  "http://portal.wikwio.org/species/show/332",  "Trichodesma zeylanicum (Burm.f.) R.Br."]  ],  "Herbe touterelle": [[  "http://portal.wikwio.org/species/show/291",  "Setaria barbata (Lam.) Kunth"]  ],  "Herbe tricorne": [[  "http://portal.wikwio.org/species/show/7",  "Acanthospermum hispidum DC."]  ],  "Herbe villebague": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "Herbe zinde": [[  "http://portal.wikwio.org/species/show/8",  "Achyranthes aspera L."]  ],  "Hérisson rouge": [[  "http://portal.wikwio.org/species/show/336",  "Urena lobata L."]  ],  "Hisabazaha": [[  "http://portal.wikwio.org/species/show/7",  "Acanthospermum hispidum DC."]  ],  "Hisatra": [[  "http://portal.wikwio.org/species/show/330",  "Tribulus cistoides L."]  ],  "Horompotsilahy": [[  "http://portal.wikwio.org/species/show/314",  "Sporobolus africanus (Poir.) Robyns & Tournay"]  ],  "Horse vine": [[  "http://portal.wikwio.org/species/show/323",  "Teramnus labialis (L.f.) Spreng."]  ],  "Hosy hosy": [[  "http://portal.wikwio.org/species/show/188",  "Leersia hexandra Sw."]  ],  "Houlque laineuse": [[  "http://portal.wikwio.org/species/show/159",  "Holcus lanatus L."]  ],  "Idwadzia": [[  "http://portal.wikwio.org/species/show/138",  "Euphorbia hirta L."]  ],  "Immortelle marronne": [[  "http://portal.wikwio.org/species/show/150",  "Gnaphalium purpureum L."]  ],  "Indian rhododendron": [[  "http://portal.wikwio.org/species/show/66",  "Clidemia hirta (L.) D.Don."]  ],  "Indigo marron": [[  "http://portal.wikwio.org/species/show/322",  "Tephrosia purpurea (L.) Pers."]  ],  "Indigo rouge": [[  "http://portal.wikwio.org/species/show/322",  "Tephrosia purpurea (L.) Pers."]  ],  "Indigo sauvage": [[  "http://portal.wikwio.org/species/show/322",  "Tephrosia purpurea (L.) Pers."]  ],  "Ipamlendje": [[  "http://portal.wikwio.org/species/show/173",  "Ipomoea obscura (L.) Ker-Gawler"],[  "http://portal.wikwio.org/species/show/174",  "Ipomoea purpurea (L.) Roth"],[  "http://portal.wikwio.org/species/show/176",  "Ipomoea triloba L. "]  ],  "Ipéca": [[  "http://portal.wikwio.org/species/show/245",  "Passiflora suberosa L."]  ],  "Irudali": [[  "",  ""]  ],  "Itsuzi": [[  "http://portal.wikwio.org/species/show/229",  "Paederia foetida L."]  ],  "Itswamli": [[  "http://portal.wikwio.org/species/show/71",  "Commelina benghalensis L."],[  "http://portal.wikwio.org/species/show/72",  "Commelina diffusa Burm.f."]  ],  "Jamaican crabgrass": [[  "http://portal.wikwio.org/species/show/110",  "Digitaria horizontalis Willd."]  ],  "Jamalanjirike": [[  "http://portal.wikwio.org/species/show/236",  "Parthenium hysterophorus L."]  ],  "Jambélon": [[  "http://portal.wikwio.org/species/show/181",  "Kyllinga erecta Schumach."]  ],  "Jean-Belon": [[  "http://portal.wikwio.org/species/show/181",  "Kyllinga erecta Schumach."]  ],  "Jean-Robert": [[  "http://portal.wikwio.org/species/show/138",  "Euphorbia hirta L."]  ],  "Jean-Robert lahy": [[  "http://portal.wikwio.org/species/show/140",  "Euphorbia prostrata Aiton"]  ],  "Jungle rice": [[  "http://portal.wikwio.org/species/show/116",  "Echinochloa colona (L.) Link"]  ],  "Kadambi masera": [[  "http://portal.wikwio.org/species/show/315",  "Stachytarpheta jamaicensis (L.) Vahl"]  ],  "Kahakaha": [[  "http://portal.wikwio.org/species/show/157",  "Hibiscus surattensis L."]  ],  "Kalay": [[  "http://portal.wikwio.org/species/show/276",  "Rottboellia cochinchinensis (Lour.) W.Clayton"]  ],  "Kalimen": [[  "http://portal.wikwio.org/species/show/234",  "Panicum repens L."]  ],  "Kalisso": [[  "",  ""]  ],  "Kandza": [[  "http://portal.wikwio.org/species/show/220",  "Ocimum americanum L."]  ],  "Karaotintsoavaly": [[  "http://portal.wikwio.org/species/show/91",  "Cyclospermum leptophyllum (Pers.) Eichler"]  ],  "Karepoka": [[  "http://portal.wikwio.org/species/show/96",  "Cyperus esculentus L."]  ],  "Kaspiant": [[  "http://portal.wikwio.org/species/show/288",  "Senna occidentalis (L.) Roxb."]  ],  "Katsi": [[  "http://portal.wikwio.org/species/show/37",  "Boerhavia diffusa L."]  ],  "Keliantitry": [[  "http://portal.wikwio.org/species/show/322",  "Tephrosia purpurea (L.) Pers."]  ],  "Keraneli rouz": [[  "http://portal.wikwio.org/species/show/256",  "Phyllanthus urinaria L."]  ],  "Kerneli": [[  "http://portal.wikwio.org/species/show/254",  "Phyllanthus niruroides M"],[  "http://portal.wikwio.org/species/show/255",  "Phyllanthus tenellus Roxb."],[  "http://portal.wikwio.org/species/show/256",  "Phyllanthus urinaria L."]  ],  "Kibatritra": [[  "http://portal.wikwio.org/species/show/20",  "Amaranthus dubius H.Martius ex Thell."]  ],  "Kidiadiamborona": [[  "http://portal.wikwio.org/species/show/225",  "Oxalis corniculata L."],[  "http://portal.wikwio.org/species/show/227",  "Oxalis latifolia Kunth"]  ],  "Kidresy": [[  "http://portal.wikwio.org/species/show/93",  "Cynodon dactylon (L.) Pers."]  ],  "Kifafalahy": [[  "http://portal.wikwio.org/species/show/65",  "Cleome viscosa L."]  ],  "Kiforo": [[  "",  ""]  ],  "Kikuyu": [[  "http://portal.wikwio.org/species/show/248",  "Pennisetum clandestinum Hochst.ex Chiov."]  ],  "Kikuyu grass": [[  "http://portal.wikwio.org/species/show/248",  "Pennisetum clandestinum Hochst.ex Chiov."]  ],  "Kimenamena": [[  "http://portal.wikwio.org/species/show/138",  "Euphorbia hirta L."]  ],  "Kimotondoha": [[  "http://portal.wikwio.org/species/show/181",  "Kyllinga erecta Schumach."]  ],  "Kiranéli": [[  "http://portal.wikwio.org/species/show/253",  "Phyllanthus amarus Schumach. & Thonn."]  ],  "Kirganéli": [[  "http://portal.wikwio.org/species/show/253",  "Phyllanthus amarus Schumach. & Thonn."]  ],  "Kirijy": [[  "http://portal.wikwio.org/species/show/336",  "Urena lobata L."]  ],  "Kirindrala": [[  "http://portal.wikwio.org/species/show/181",  "Kyllinga erecta Schumach."]  ],  "Kisarisarimbomanga": [[  "http://portal.wikwio.org/species/show/174",  "Ipomoea purpurea (L.) Roth"]  ],  "Kitsakitsanakizy": [[  "http://portal.wikwio.org/species/show/86",  "Crotalaria retusa L."]  ],  "Kitsotritsotry": [[  "http://portal.wikwio.org/species/show/47",  "Cajanus scarabaeoides (L.) Thouars"]  ],  "Koket": [[  "http://portal.wikwio.org/species/show/335",  "Turnera ulmifolia L."]  ],  "Koromoke": [[  "",  ""]  ],  "Kourpie": [[  "http://portal.wikwio.org/species/show/264",  "Portulaca oleracea L."]  ],  "Kozity": [[  "http://portal.wikwio.org/species/show/337",  "Verbena bonariensis L."]  ],  "Kunu": [[  "http://portal.wikwio.org/species/show/126",  "Eleusine indica (L.) Gaertn."]  ],  "La bolzé": [[  "http://portal.wikwio.org/species/show/294",  "Sida acuta Burm.f."]  ],  "La coquette": [[  "http://portal.wikwio.org/species/show/335",  "Turnera ulmifolia L."]  ],  "La liane": [[  "http://portal.wikwio.org/species/show/209",  "Merremia dissecta (Jacq.) Hallier f."]  ],  "La ville-bague": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "La zinde": [[  "http://portal.wikwio.org/species/show/8",  "Achyranthes aspera L."]  ],  "Lahiriky": [[  "",  ""]  ],  "Laïche": [[  "http://portal.wikwio.org/species/show/96",  "Cyperus esculentus L."],[  "http://portal.wikwio.org/species/show/99",  "Cyperus rotundus L."]  ],  "Laitron": [[  "http://portal.wikwio.org/species/show/183",  "Lactuca indica L."]  ],  "Laitue d'eau": [[  "http://portal.wikwio.org/species/show/260",  "Pistia stratiotes L."]  ],  "Lanoro": [[  "http://portal.wikwio.org/species/show/256",  "Phyllanthus urinaria L."]  ],  "Lantana": [[  "http://portal.wikwio.org/species/show/186",  "Lantana camara L."]  ],  "Lastron": [[  "http://portal.wikwio.org/species/show/128",  "Emilia sonchifolia (L.) DC. ex DC."],[  "http://portal.wikwio.org/species/show/183",  "Lactuca indica L."],[  "http://portal.wikwio.org/species/show/306",  "Sonchus asper (L.) Hill."],[  "http://portal.wikwio.org/species/show/306",  "Sonchus asper (L.) Hill."],[  "http://portal.wikwio.org/species/show/307",  "Sonchus oleraceus L."]  ],  "Lastron bâtard": [[  "http://portal.wikwio.org/species/show/128",  "Emilia sonchifolia (L.) DC. ex DC."],[  "http://portal.wikwio.org/species/show/342",  "Youngia japonica (L.) DC."]  ],  "Lastron cheval": [[  "http://portal.wikwio.org/species/show/183",  "Lactuca indica L."]  ],  "Lastron doux": [[  "http://portal.wikwio.org/species/show/307",  "Sonchus oleraceus L."]  ],  "Lastron marron": [[  "http://portal.wikwio.org/species/show/187",  "Lapsana communis L."]  ],  "Lastron piquant": [[  "http://portal.wikwio.org/species/show/306",  "Sonchus asper (L.) Hill."]  ],  "Lastron sauvage": [[  "http://portal.wikwio.org/species/show/161",  "Hypochaeris radicata L."]  ],  "Lastron tendre": [[  "http://portal.wikwio.org/species/show/307",  "Sonchus oleraceus L."]  ],  "Lawn grass": [[  "http://portal.wikwio.org/species/show/33",  "Axonopus compressus (Sw.) P.Beauv."]  ],  "Lengo": [[  "http://portal.wikwio.org/species/show/229",  "Paederia foetida L."]  ],  "Lentille sauvage": [[  "http://portal.wikwio.org/species/show/340",  "Vicia sativa L."]  ],  "Lepeka": [[  "http://portal.wikwio.org/species/show/245",  "Passiflora suberosa L."]  ],  "Lerb banbou": [[  "http://portal.wikwio.org/species/show/291",  "Setaria barbata (Lam.) Kunth"]  ],  "Lerb bourik": [[  "http://portal.wikwio.org/species/show/100",  "Dactyloctenium aegyptium (L.) P.Beauv."]  ],  "Lerb dife": [[  "http://portal.wikwio.org/species/show/319",  "Striga asiatica (L.) Kuntze"]  ],  "Lerb dir": [[  "http://portal.wikwio.org/species/show/203",  "Malvastrum coromandelianum (L.) Garcke"],[  "http://portal.wikwio.org/species/show/207",  "Melochia pyramidata L."],[  "http://portal.wikwio.org/species/show/294",  "Sida acuta Burm.f."],[  "http://portal.wikwio.org/species/show/295",  "Sida cordifolia L."]  ],  "Lerb diri": [[  "http://portal.wikwio.org/species/show/116",  "Echinochloa colona (L.) Link"],[  "http://portal.wikwio.org/species/show/319",  "Striga asiatica (L.) Kuntze"]  ],  "Lerb kalimen": [[  "http://portal.wikwio.org/species/show/234",  "Panicum repens L."]  ],  "Lerb kay": [[  "http://portal.wikwio.org/species/show/333",  "Tridax procumbens L."]  ],  "Lerb koko": [[  "http://portal.wikwio.org/species/show/318",  "Stenotaphrum dimidiatum (L.) Brongn."]  ],  "Lerb koson": [[  "http://portal.wikwio.org/species/show/71",  "Commelina benghalensis L."],[  "http://portal.wikwio.org/species/show/72",  "Commelina diffusa Burm.f."]  ],  "Lerb kreson": [[  "http://portal.wikwio.org/species/show/114",  "Drymaria cordata (L) Willd.ex Roem. &Schult "]  ],  "Lerb loulou": [[  "http://portal.wikwio.org/species/show/100",  "Dactyloctenium aegyptium (L.) P.Beauv."]  ],  "Lerb ma tant": [[  "http://portal.wikwio.org/species/show/240",  "Paspalum paniculatum L."],[  "http://portal.wikwio.org/species/show/249",  "Pennisetum polystachion (L.) Schult."]  ],  "Lerb sat": [[  "http://portal.wikwio.org/species/show/5",  "Acalypha indica L."]  ],  "Lerb zonnyon": [[  "http://portal.wikwio.org/species/show/96",  "Cyperus esculentus L."],[  "http://portal.wikwio.org/species/show/99",  "Cyperus rotundus L."],[  "http://portal.wikwio.org/species/show/180",  "Kyllinga bulbosa P.Beauv."],[  "http://portal.wikwio.org/species/show/181",  "Kyllinga erecta Schumach."],[  "http://portal.wikwio.org/species/show/269",  "Pycreus polystachyos (Rottb.) P.Beauv."]  ],  "Leti delo": [[  "http://portal.wikwio.org/species/show/260",  "Pistia stratiotes L."]  ],  "Liane bleue": [[  "http://portal.wikwio.org/species/show/171",  "Ipomoea indica (Burm.) Merr."]  ],  "Liane caca": [[  "http://portal.wikwio.org/species/show/229",  "Paederia foetida L."]  ],  "Liane cochon": [[  "http://portal.wikwio.org/species/show/172",  "Ipomoea nil (L.) Roth"]  ],  "Liane coup de pet": [[  "http://portal.wikwio.org/species/show/229",  "Paederia foetida L."]  ],  "Liane cuscute": [[  "http://portal.wikwio.org/species/show/88",  "Cuscuta campestris Yunck."]  ],  "Liane de miel": [[  "http://portal.wikwio.org/species/show/26",  "Anredera cordifolia (Ten.) Steenis"]  ],  "Liane lingue": [[  "http://portal.wikwio.org/species/show/229",  "Paederia foetida L."]  ],  "Liane margoze": [[  "http://portal.wikwio.org/species/show/210",  "Mikania micrantha Kunth"]  ],  "Liane poc poc": [[  "http://portal.wikwio.org/species/show/244",  "Passiflora foetida L."],[  "http://portal.wikwio.org/species/show/245",  "Passiflora suberosa L."]  ],  "Liane pocpoc": [[  "",  ""]  ],  "Liane sans feuille": [[  "http://portal.wikwio.org/species/show/88",  "Cuscuta campestris Yunck."]  ],  "Liane savon": [[  "http://portal.wikwio.org/species/show/26",  "Anredera cordifolia (Ten.) Steenis"]  ],  "Liane sensitive": [[  "http://portal.wikwio.org/species/show/211",  "Mimosa diplotricha Sauvalle"]  ],  "Liane toupie": [[  "",  ""]  ],  "Lilac oxalis": [[  "http://portal.wikwio.org/species/show/226",  "Oxalis debilis var. corymbosa (DC.) Lourteig"]  ],  "Lipeka": [[  "http://portal.wikwio.org/species/show/245",  "Passiflora suberosa L."]  ],  "Liseron": [[  "http://portal.wikwio.org/species/show/174",  "Ipomoea purpurea (L.) Roth"]  ],  "Liseron fleur bleue": [[  "http://portal.wikwio.org/species/show/172",  "Ipomoea nil (L.) Roth"]  ],  "Long-leaved pondweed": [[  "http://portal.wikwio.org/species/show/265",  "Potamogeton nodosus Poir."]  ],  "Ma tante": [[  "http://portal.wikwio.org/species/show/240",  "Paspalum paniculatum L."],[  "http://portal.wikwio.org/species/show/249",  "Pennisetum polystachion (L.) Schult."]  ],  "Macatia vert": [[  "http://portal.wikwio.org/species/show/37",  "Boerhavia diffusa L."]  ],  "Madeira-vine": [[  "http://portal.wikwio.org/species/show/26",  "Anredera cordifolia (Ten.) Steenis"]  ],  "Madjimbi": [[  "http://portal.wikwio.org/species/show/69",  "Colocasia esculenta (L.) Schott"]  ],  "Madzanuni": [[  "http://portal.wikwio.org/species/show/244",  "Passiflora foetida L."]  ],  "Mahabanky": [[  "http://portal.wikwio.org/species/show/178",  "Ischaemum rugosum Salisb."],[  "http://portal.wikwio.org/species/show/240",  "Paspalum paniculatum L."]  ],  "Maintsoririnina": [[  "http://portal.wikwio.org/species/show/74",  "Conyza sumatrensis (Retz.) E.Walker"]  ],  "Maïs cafre": [[  "http://portal.wikwio.org/species/show/308",  "Sorghum arundinaceum (Desv.) Stapf"]  ],  "Makunu": [[  "http://portal.wikwio.org/species/show/96",  "Cyperus esculentus L."],[  "http://portal.wikwio.org/species/show/126",  "Eleusine indica (L.) Gaertn."],[  "http://portal.wikwio.org/species/show/181",  "Kyllinga erecta Schumach."]  ],  "Malimatse": [[  "http://portal.wikwio.org/species/show/76",  "Corchorus olitorius L. "]  ],  "Mamakihoho": [[  "http://portal.wikwio.org/species/show/40",  "Brachiaria deflexa (Schumach.) C.E.Hubb. ex Robyns"],[  "http://portal.wikwio.org/species/show/41",  "Brachiaria eruciformis (Sm.) Griseb."],[  "http://portal.wikwio.org/species/show/42",  "Brachiaria nana Stapf"],[  "http://portal.wikwio.org/species/show/43",  "Brachiaria reptans (L.) C.A.Gardner & C.E.Hubb."],[  "http://portal.wikwio.org/species/show/109",  "Digitaria ciliaris (Retz.) Koeler"],[  "http://portal.wikwio.org/species/show/110",  "Digitaria horizontalis Willd."]  ],  "Mampivena": [[  "http://portal.wikwio.org/species/show/163",  "Hyptis spicigera Lam."]  ],  "Mandalodiaraikitra": [[  "http://portal.wikwio.org/species/show/105",  "Desmodium incanum DC."]  ],  "Mandraidrota": [[  "http://portal.wikwio.org/species/show/53",  "Cenchrus biflorus Roxb."]  ],  "Mandravasarotra": [[  "http://portal.wikwio.org/species/show/294",  "Sida acuta Burm.f."]  ],  "Mandravasarotse": [[  "http://portal.wikwio.org/species/show/203",  "Malvastrum coromandelianum (L.) Garcke"],[  "http://portal.wikwio.org/species/show/295",  "Sida cordifolia L."]  ],  "Manevika": [[  "",  ""]  ],  "Mange tout": [[  "http://portal.wikwio.org/species/show/32",  "Asystasia gangetica (L.) T.Anderson"]  ],  "Manz tou": [[  "http://portal.wikwio.org/species/show/32",  "Asystasia gangetica (L.) T.Anderson"]  ],  "Margose": [[  "http://portal.wikwio.org/species/show/216",  "Momordica charantia L."],[  "http://portal.wikwio.org/species/show/216",  "Momordica charantia L."]  ],  "Margose marron": [[  "http://portal.wikwio.org/species/show/216",  "Momordica charantia L."]  ],  "Margose sauvage": [[  "http://portal.wikwio.org/species/show/216",  "Momordica charantia L."]  ],  "Margoz marron": [[  "http://portal.wikwio.org/species/show/216",  "Momordica charantia L."]  ],  "Margoz sovaz": [[  "http://portal.wikwio.org/species/show/216",  "Momordica charantia L."]  ],  "Marie éreintée": [[  "http://portal.wikwio.org/species/show/314",  "Sporobolus africanus (Poir.) Robyns & Tournay"]  ],  "Marie reintée": [[  "http://portal.wikwio.org/species/show/314",  "Sporobolus africanus (Poir.) Robyns & Tournay"]  ],  "Marie-Thérèse": [[  "http://portal.wikwio.org/species/show/31",  "Artemisia verlotiorum Lamotte"]  ],  "Marigozi": [[  "http://portal.wikwio.org/species/show/216",  "Momordica charantia L."]  ],  "Marorantsana": [[  "http://portal.wikwio.org/species/show/109",  "Digitaria ciliaris (Retz.) Koeler"],[  "http://portal.wikwio.org/species/show/110",  "Digitaria horizontalis Willd."]  ],  "Marvel of Peru": [[  "http://portal.wikwio.org/species/show/213",  "Mirabilis jalapa L."]  ],  "Masandzé": [[  "http://portal.wikwio.org/species/show/110",  "Digitaria horizontalis Willd."]  ],  "Mauve": [[  "",  ""]  ],  "Mauve à feuilles veloutées": [[  "http://portal.wikwio.org/species/show/295",  "Sida cordifolia L."]  ],  "Mauve bâtard": [[  "",  ""]  ],  "Mauve sauvage": [[  "http://portal.wikwio.org/species/show/203",  "Malvastrum coromandelianum (L.) Garcke"]  ],  "Mazambody": [[  "http://portal.wikwio.org/species/show/66",  "Clidemia hirta (L.) D.Don."]  ],  "Mbaba unandzo": [[  "",  ""]  ],  "Mbabawure": [[  "http://portal.wikwio.org/species/show/264",  "Portulaca oleracea L."]  ],  "Mbidambe": [[  "",  ""]  ],  "Mbitsi": [[  "http://portal.wikwio.org/species/show/304",  "Solanum mauritianum Scop."]  ],  "Mbuha": [[  "http://portal.wikwio.org/species/show/178",  "Ischaemum rugosum Salisb."]  ],  "Mbwadigo": [[  "http://portal.wikwio.org/species/show/279",  "Rubus rosifolius Sm."]  ],  "Mdudu": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "Melogasy": [[  "",  ""]  ],  "Menapaka": [[  "http://portal.wikwio.org/species/show/205",  "Melinis repens (Willd.) Zizka"]  ],  "Menavavy": [[  "http://portal.wikwio.org/species/show/241",  "Paspalum scrobiculatum L."]  ],  "Mexican oxalis": [[  "http://portal.wikwio.org/species/show/227",  "Oxalis latifolia Kunth"]  ],  "Mexican prickly poppy": [[  "http://portal.wikwio.org/species/show/29",  "Argemone mexicana L."]  ],  "Mfulera": [[  "",  ""]  ],  "Mille feuille": [[  "http://portal.wikwio.org/species/show/74",  "Conyza sumatrensis (Retz.) E.Walker"]  ],  "Mille marron": [[  "http://portal.wikwio.org/species/show/308",  "Sorghum arundinaceum (Desv.) Stapf"]  ],  "Millet": [[  "http://portal.wikwio.org/species/show/308",  "Sorghum arundinaceum (Desv.) Stapf"]  ],  "Millet sauvage": [[  "http://portal.wikwio.org/species/show/308",  "Sorghum arundinaceum (Desv.) Stapf"]  ],  "Mnavu": [[  "",  ""]  ],  "Mnunka": [[  "",  ""]  ],  "Moita": [[  "http://portal.wikwio.org/species/show/99",  "Cyperus rotundus L."]  ],  "Morelle": [[  "",  ""]  ],  "Morelle noire": [[  "",  ""]  ],  "Morning glory": [[  "http://portal.wikwio.org/species/show/172",  "Ipomoea nil (L.) Roth"]  ],  "Mouron": [[  "http://portal.wikwio.org/species/show/317",  "Stellaria media (L.)Vill."]  ],  "Mouron blanc": [[  "http://portal.wikwio.org/species/show/317",  "Stellaria media (L.)Vill."]  ],  "Mouron des oiseaux": [[  "http://portal.wikwio.org/species/show/308",  "Sorghum arundinaceum (Desv.) Stapf"],[  "http://portal.wikwio.org/species/show/317",  "Stellaria media (L.)Vill."]  ],  "Msi wamasera": [[  "http://portal.wikwio.org/species/show/304",  "Solanum mauritianum Scop."]  ],  "Msihantsi": [[  "http://portal.wikwio.org/species/show/140",  "Euphorbia prostrata Aiton"]  ],  "Msiuha": [[  "http://portal.wikwio.org/species/show/211",  "Mimosa diplotricha Sauvalle"]  ],  "Mugwort": [[  "http://portal.wikwio.org/species/show/31",  "Artemisia verlotiorum Lamotte"]  ],  "Mwadjumbe": [[  "http://portal.wikwio.org/species/show/5",  "Acalypha indica L."]  ],  "Namara": [[  "http://portal.wikwio.org/species/show/114",  "Drymaria cordata (L) Willd.ex Roem. &Schult "]  ],  "Natal red-top grass": [[  "http://portal.wikwio.org/species/show/205",  "Melinis repens (Willd.) Zizka"]  ],  "Ndawe": [[  "http://portal.wikwio.org/species/show/95",  "Cyperus difformis L."],[  "http://portal.wikwio.org/species/show/99",  "Cyperus rotundus L."],[  "http://portal.wikwio.org/species/show/100",  "Dactyloctenium aegyptium (L.) P.Beauv."]  ],  "Ndjenimsiru": [[  "http://portal.wikwio.org/species/show/336",  "Urena lobata L."]  ],  "Nkunu": [[  "http://portal.wikwio.org/species/show/100",  "Dactyloctenium aegyptium (L.) P.Beauv."],[  "http://portal.wikwio.org/species/show/181",  "Kyllinga erecta Schumach."]  ],  "Nkunu ndredje": [[  "http://portal.wikwio.org/species/show/93",  "Cynodon dactylon (L.) Pers."]  ],  "Noyau vine": [[  "http://portal.wikwio.org/species/show/209",  "Merremia dissecta (Jacq.) Hallier f."]  ],  "Nrambantsi": [[  "http://portal.wikwio.org/species/show/71",  "Commelina benghalensis L."],[  "http://portal.wikwio.org/species/show/72",  "Commelina diffusa Burm.f."]  ],  "Ntrunda dzaha": [[  "http://portal.wikwio.org/species/show/66",  "Clidemia hirta (L.) D.Don."]  ],  "Ntsohoho": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "Ntsohomaele": [[  "http://portal.wikwio.org/species/show/8",  "Achyranthes aspera L."]  ],  "Nuriri": [[  "http://portal.wikwio.org/species/show/253",  "Phyllanthus amarus Schumach. & Thonn."]  ],  "Nyambwibwiyi": [[  "http://portal.wikwio.org/species/show/245",  "Passiflora suberosa L."]  ],  "Oreille Jacquot": [[  "http://portal.wikwio.org/species/show/160",  "Hydrocotyle bonariensis Lam."]  ],  "Oriental hawksbeard": [[  "http://portal.wikwio.org/species/show/342",  "Youngia japonica (L.) DC."]  ],  "Oseille": [[  "http://portal.wikwio.org/species/show/226",  "Oxalis debilis var. corymbosa (DC.) Lourteig"],[  "http://portal.wikwio.org/species/show/227",  "Oxalis latifolia Kunth"],[  "http://portal.wikwio.org/species/show/280",  "Rumex abyssinicus Jacq."],[  "http://portal.wikwio.org/species/show/281",  "Rumex crispus L."]  ],  "Oseille indigene": [[  "http://portal.wikwio.org/species/show/157",  "Hibiscus surattensis L."]  ],  "Oseille malabar": [[  "http://portal.wikwio.org/species/show/157",  "Hibiscus surattensis L."]  ],  "Oseille malbar": [[  "http://portal.wikwio.org/species/show/157",  "Hibiscus surattensis L."]  ],  "Oseille malbare": [[  "http://portal.wikwio.org/species/show/157",  "Hibiscus surattensis L."]  ],  "Oseille sauvage": [[  "http://portal.wikwio.org/species/show/280",  "Rumex abyssinicus Jacq."]  ],  "Oumine": [[  "http://portal.wikwio.org/species/show/99",  "Cyperus rotundus L."]  ],  "Oviala": [[  "http://portal.wikwio.org/species/show/173",  "Ipomoea obscura (L.) Ker-Gawler"]  ],  "Pagode": [[  "http://portal.wikwio.org/species/show/330",  "Tribulus cistoides L."]  ],  "Paillatère": [[  "http://portal.wikwio.org/species/show/22",  "Amaranthus spinosus L."],[  "http://portal.wikwio.org/species/show/23",  "Amaranthus viridis L."]  ],  "Paipaikatianomby": [[  "http://portal.wikwio.org/species/show/276",  "Rottboellia cochinchinensis (Lour.) W.Clayton"]  ],  "Paka": [[  "http://portal.wikwio.org/species/show/336",  "Urena lobata L."]  ],  "Pariétaire": [[  "http://portal.wikwio.org/species/show/20",  "Amaranthus dubius H.Martius ex Thell."],[  "http://portal.wikwio.org/species/show/23",  "Amaranthus viridis L."]  ],  "Pariétaire piquante": [[  "http://portal.wikwio.org/species/show/22",  "Amaranthus spinosus L."]  ],  "Pariétaire rouge": [[  "http://portal.wikwio.org/species/show/20",  "Amaranthus dubius H.Martius ex Thell."]  ],  "Paspalum": [[  "http://portal.wikwio.org/species/show/239",  "Paspalum dilatatum Poir."]  ],  "Pat de poul": [[  "http://portal.wikwio.org/species/show/126",  "Eleusine indica (L.) Gaertn."]  ],  "Patate marrone": [[  "http://portal.wikwio.org/species/show/172",  "Ipomoea nil (L.) Roth"]  ],  "Patience": [[  "http://portal.wikwio.org/species/show/281",  "Rumex crispus L."]  ],  "Patte de poule": [[  "http://portal.wikwio.org/species/show/126",  "Eleusine indica (L.) Gaertn."]  ],  "Petit acacia": [[  "http://portal.wikwio.org/species/show/103",  "Desmanthus virgatus (L.) Willd. "]  ],  "Petit cassie": [[  "http://portal.wikwio.org/species/show/103",  "Desmanthus virgatus (L.) Willd. "]  ],  "Petit cassis": [[  "http://portal.wikwio.org/species/show/103",  "Desmanthus virgatus (L.) Willd. "]  ],  "Petit chiendent": [[  "http://portal.wikwio.org/species/show/93",  "Cynodon dactylon (L.) Pers."]  ],  "Petit Datura": [[  "http://portal.wikwio.org/species/show/102",  "Datura stramonium L."]  ],  "Petit lastron": [[  "http://portal.wikwio.org/species/show/128",  "Emilia sonchifolia (L.) DC. ex DC."],[  "http://portal.wikwio.org/species/show/128",  "Emilia sonchifolia (L.) DC. ex DC."]  ],  "Petit meinki": [[  "http://portal.wikwio.org/species/show/113",  "Digitaria radicosa (C.Presl) Miq."]  ],  "Petit mimosa": [[  "http://portal.wikwio.org/species/show/103",  "Desmanthus virgatus (L.) Willd. "]  ],  "Petit mota": [[  "http://portal.wikwio.org/species/show/180",  "Kyllinga bulbosa P.Beauv."]  ],  "Petit piquant": [[  "http://portal.wikwio.org/species/show/147",  "Galinsoga parviflora Cav."]  ],  "Petit plantain": [[  "http://portal.wikwio.org/species/show/261",  "Plantago lanceolata L."]  ],  "Petit poinsettia": [[  "http://portal.wikwio.org/species/show/136",  "Euphorbia cyathophora Murrill"],[  "http://portal.wikwio.org/species/show/137",  "Euphorbia heterophylla L."]  ],  "Petit tamarin": [[  "http://portal.wikwio.org/species/show/255",  "Phyllanthus tenellus Roxb."]  ],  "Petit tamarin blanc": [[  "http://portal.wikwio.org/species/show/253",  "Phyllanthus amarus Schumach. & Thonn."],[  "http://portal.wikwio.org/species/show/254",  "Phyllanthus niruroides M"]  ],  "Petit tamarin rouge": [[  "http://portal.wikwio.org/species/show/256",  "Phyllanthus urinaria L."]  ],  "Petit trèfle": [[  "http://portal.wikwio.org/species/show/105",  "Desmodium incanum DC."],[  "http://portal.wikwio.org/species/show/225",  "Oxalis corniculata L."]  ],  "Petite cressonnette": [[  "http://portal.wikwio.org/species/show/49",  "Cardamine hirsuta L."]  ],  "Petite herbe cochon": [[  "http://portal.wikwio.org/species/show/72",  "Commelina diffusa Burm.f."]  ],  "Petite herbe d'eau": [[  "http://portal.wikwio.org/species/show/72",  "Commelina diffusa Burm.f."]  ],  "Petite herbe de l'eau": [[  "http://portal.wikwio.org/species/show/72",  "Commelina diffusa Burm.f."]  ],  "Petite marguerite": [[  "http://portal.wikwio.org/species/show/320",  "Synedrella nodiflora (L.) Gaertn."]  ],  "Petite oseille": [[  "http://portal.wikwio.org/species/show/225",  "Oxalis corniculata L."]  ],  "Petite réglisse": [[  "http://portal.wikwio.org/species/show/110",  "Digitaria horizontalis Willd."]  ],  "Pilipili": [[  "http://portal.wikwio.org/species/show/114",  "Drymaria cordata (L) Willd.ex Roem. &Schult "]  ],  "Piquant": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "Piquant blanc": [[  "http://portal.wikwio.org/species/show/147",  "Galinsoga parviflora Cav."]  ],  "Piquant loulou": [[  "http://portal.wikwio.org/species/show/277",  "Rubus alceifolius Poir. "]  ],  "Piquant lulu": [[  "http://portal.wikwio.org/species/show/277",  "Rubus alceifolius Poir. "]  ],  "Piquant noir": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "Pisar lisyen": [[  "http://portal.wikwio.org/species/show/65",  "Cleome viscosa L."]  ],  "Pissat de chien": [[  "http://portal.wikwio.org/species/show/65",  "Cleome viscosa L."],[  "http://portal.wikwio.org/species/show/65",  "Cleome viscosa L."]  ],  "Pistache marrone": [[  "http://portal.wikwio.org/species/show/323",  "Teramnus labialis (L.f.) Spreng."]  ],  "Pistache marronne": [[  "http://portal.wikwio.org/species/show/47",  "Cajanus scarabaeoides (L.) Thouars"]  ],  "Plantain": [[  "http://portal.wikwio.org/species/show/261",  "Plantago lanceolata L."]  ],  "Poc poc": [[  "http://portal.wikwio.org/species/show/244",  "Passiflora foetida L."]  ],  "Poc poc fleur bleue": [[  "http://portal.wikwio.org/species/show/41",  "Brachiaria eruciformis (Sm.) Griseb."]  ],  "Pocke pocke à fleurs bleues": [[  "http://portal.wikwio.org/species/show/41",  "Brachiaria eruciformis (Sm.) Griseb."]  ],  "Pois de merveille": [[  "",  ""]  ],  "Pois rond marron": [[  "http://portal.wikwio.org/species/show/86",  "Crotalaria retusa L."]  ],  "Pokepoke": [[  "",  ""]  ],  "Pokpok": [[  "http://portal.wikwio.org/species/show/244",  "Passiflora foetida L."]  ],  "Pororotsy": [[  "http://portal.wikwio.org/species/show/3",  "Abelmoschus ficulneus (L.) Wight & Arn."]  ],  "Pourpie": [[  "http://portal.wikwio.org/species/show/264",  "Portulaca oleracea L."]  ],  "Pourpier": [[  "http://portal.wikwio.org/species/show/264",  "Portulaca oleracea L."],[  "http://portal.wikwio.org/species/show/264",  "Portulaca oleracea L."]  ],  "Pourpier de Madagascar": [[  "http://portal.wikwio.org/species/show/260",  "Pistia stratiotes L."]  ],  "Pourpier rouge": [[  "http://portal.wikwio.org/species/show/264",  "Portulaca oleracea L."]  ],  "Puncture weed": [[  "http://portal.wikwio.org/species/show/330",  "Tribulus cistoides L."]  ],  "Queue de rat": [[  "http://portal.wikwio.org/species/show/8",  "Achyranthes aspera L."],[  "http://portal.wikwio.org/species/show/315",  "Stachytarpheta jamaicensis (L.) Vahl"]  ],  "Quinquange": [[  "",  ""]  ],  "Quinquenge": [[  "",  ""]  ],  "Radredreka": [[  "http://portal.wikwio.org/species/show/186",  "Lantana camara L."]  ],  "Radriaka": [[  "http://portal.wikwio.org/species/show/186",  "Lantana camara L."]  ],  "Raisin d´Amérique": [[  "http://portal.wikwio.org/species/show/258",  "Phytolacca americana L."]  ],  "Raisin marron": [[  "http://portal.wikwio.org/species/show/277",  "Rubus alceifolius Poir. "]  ],  "Rambonalika": [[  "http://portal.wikwio.org/species/show/249",  "Pennisetum polystachion (L.) Schult."],[  "http://portal.wikwio.org/species/show/315",  "Stachytarpheta jamaicensis (L.) Vahl"]  ],  "Ramiary": [[  "http://portal.wikwio.org/species/show/102",  "Datura stramonium L."]  ],  "Ramirena": [[  "http://portal.wikwio.org/species/show/212",  "Mimosa pudica L."]  ],  "Ramity": [[  "http://portal.wikwio.org/species/show/186",  "Lantana camara L."]  ],  "Ravenelle": [[  "http://portal.wikwio.org/species/show/270",  "Raphanus raphanistrum L."]  ],  "Ravindramiary": [[  "http://portal.wikwio.org/species/show/102",  "Datura stramonium L."]  ],  "Reed canary grass": [[  "http://portal.wikwio.org/species/show/252",  "Phalaris arundinacea L."]  ],  "Ref": [[  "http://portal.wikwio.org/species/show/122",  "Eleocharis dulcis (Burm.f.) Trin. ex Hensch."]  ],  "Rèfle": [[  "http://portal.wikwio.org/species/show/122",  "Eleocharis dulcis (Burm.f.) Trin. ex Hensch."]  ],  "Remanotaky": [[  "http://portal.wikwio.org/species/show/178",  "Ischaemum rugosum Salisb."]  ],  "Rice grass": [[  "http://portal.wikwio.org/species/show/188",  "Leersia hexandra Sw."]  ],  "Ricegrass": [[  "http://portal.wikwio.org/species/show/116",  "Echinochloa colona (L.) Link"]  ],  "Rimorimo": [[  "http://portal.wikwio.org/species/show/255",  "Phyllanthus tenellus Roxb."]  ],  "Roberabera": [[  "http://portal.wikwio.org/species/show/138",  "Euphorbia hirta L."]  ],  "Rohitra": [[  "http://portal.wikwio.org/species/show/212",  "Mimosa pudica L."]  ],  "Roifotsy": [[  "http://portal.wikwio.org/species/show/279",  "Rubus rosifolius Sm."]  ],  "Roimena": [[  "http://portal.wikwio.org/species/show/212",  "Mimosa pudica L."]  ],  "Rombabe": [[  "http://portal.wikwio.org/species/show/220",  "Ocimum americanum L."]  ],  "Roneza": [[  "http://portal.wikwio.org/species/show/279",  "Rubus rosifolius Sm."]  ],  "Rougette": [[  "http://portal.wikwio.org/species/show/140",  "Euphorbia prostrata Aiton"]  ],  "Roy": [[  "http://portal.wikwio.org/species/show/279",  "Rubus rosifolius Sm."]  ],  "Sanamaka": [[  "http://portal.wikwio.org/species/show/288",  "Senna occidentalis (L.) Roxb."]  ],  "Sanatrindolo": [[  "http://portal.wikwio.org/species/show/288",  "Senna occidentalis (L.) Roxb."]  ],  "Sandzani": [[  "http://portal.wikwio.org/species/show/220",  "Ocimum americanum L."]  ],  "Sandze": [[  "http://portal.wikwio.org/species/show/110",  "Digitaria horizontalis Willd."],[  "http://portal.wikwio.org/species/show/241",  "Paspalum scrobiculatum L."]  ],  "Sandzemadji": [[  "http://portal.wikwio.org/species/show/276",  "Rottboellia cochinchinensis (Lour.) W.Clayton"]  ],  "Sansib": [[  "http://portal.wikwio.org/species/show/212",  "Mimosa pudica L."]  ],  "Saranti": [[  "http://portal.wikwio.org/species/show/16",  "Alternanthera philoxeroides (H.Martius) Griseb."]  ],  "Sariromba": [[  "http://portal.wikwio.org/species/show/220",  "Ocimum americanum L."]  ],  "Sarisarimbomanga": [[  "http://portal.wikwio.org/species/show/169",  "Ipomoea eriocarpa R.Br."],[  "http://portal.wikwio.org/species/show/171",  "Ipomoea indica (Burm.) Merr."],[  "http://portal.wikwio.org/species/show/172",  "Ipomoea nil (L.) Roth"]  ],  "Saritaho": [[  "http://portal.wikwio.org/species/show/169",  "Ipomoea eriocarpa R.Br."],[  "http://portal.wikwio.org/species/show/172",  "Ipomoea nil (L.) Roth"]  ],  "Saritongolo": [[  "",  ""]  ],  "Sarivoanjo": [[  "http://portal.wikwio.org/species/show/287",  "Senna obtusifolia (L.) H.S.Irwin & Barneby"]  ],  "Satrikoazamaratra": [[  "http://portal.wikwio.org/species/show/300",  "Sigesbeckia orientalis L."]  ],  "Semen contra": [[  "",  ""]  ],  "Semencine": [[  "",  ""]  ],  "Sensible": [[  "http://portal.wikwio.org/species/show/212",  "Mimosa pudica L."]  ],  "Sensitive": [[  "http://portal.wikwio.org/species/show/212",  "Mimosa pudica L."]  ],  "Sensive": [[  "http://portal.wikwio.org/species/show/212",  "Mimosa pudica L."]  ],  "Sentrosima": [[  "http://portal.wikwio.org/species/show/56",  "Centrosema pubescens Benth."]  ],  "Sergent rouge": [[  "http://portal.wikwio.org/species/show/90",  "Cyathula prostrata (L.) Blume "]  ],  "Sevabe": [[  "http://portal.wikwio.org/species/show/304",  "Solanum mauritianum Scop."]  ],  "Shack shack": [[  "http://portal.wikwio.org/species/show/86",  "Crotalaria retusa L."]  ],  "Shani": [[  "http://portal.wikwio.org/species/show/319",  "Striga asiatica (L.) Kuntze"]  ],  "Sheliladzia": [[  "http://portal.wikwio.org/species/show/138",  "Euphorbia hirta L."]  ],  "Shidadi": [[  "http://portal.wikwio.org/species/show/319",  "Striga asiatica (L.) Kuntze"]  ],  "Shifungadziya": [[  "http://portal.wikwio.org/species/show/295",  "Sida cordifolia L."]  ],  "Shifungandziya": [[  "http://portal.wikwio.org/species/show/294",  "Sida acuta Burm.f."]  ],  "Shikoni": [[  "",  ""]  ],  "Shirovurovu": [[  "http://portal.wikwio.org/species/show/114",  "Drymaria cordata (L) Willd.ex Roem. &Schult "]  ],  "Shisinyantsi": [[  "http://portal.wikwio.org/species/show/140",  "Euphorbia prostrata Aiton"]  ],  "Shitsumadzila": [[  "http://portal.wikwio.org/species/show/226",  "Oxalis debilis var. corymbosa (DC.) Lourteig"],[  "http://portal.wikwio.org/species/show/227",  "Oxalis latifolia Kunth"]  ],  "Sinapodiom": [[  "",  ""]  ],  "Sindambo": [[  "http://portal.wikwio.org/species/show/325",  "Themeda quadrivalvis (L.) Kuntze"]  ],  "Siramboalavo": [[  "http://portal.wikwio.org/species/show/225",  "Oxalis corniculata L."],[  "http://portal.wikwio.org/species/show/227",  "Oxalis latifolia Kunth"]  ],  "Sofinakanga": [[  "http://portal.wikwio.org/species/show/71",  "Commelina benghalensis L."]  ],  "Sofindambo": [[  "http://portal.wikwio.org/species/show/106",  "Desmodium intortum (Mill.) Urb."]  ],  "Soho": [[  "http://portal.wikwio.org/species/show/8",  "Achyranthes aspera L."]  ],  "Soinette": [[  "http://portal.wikwio.org/species/show/192",  "Lepidium didymum L."]  ],  "Solonalika": [[  "http://portal.wikwio.org/species/show/249",  "Pennisetum polystachion (L.) Schult."]  ],  "Songe": [[  "http://portal.wikwio.org/species/show/69",  "Colocasia esculenta (L.) Schott"]  ],  "Songe blanc": [[  "http://portal.wikwio.org/species/show/69",  "Colocasia esculenta (L.) Schott"]  ],  "Songe gris": [[  "http://portal.wikwio.org/species/show/69",  "Colocasia esculenta (L.) Schott"]  ],  "Songe Maurice": [[  "http://portal.wikwio.org/species/show/69",  "Colocasia esculenta (L.) Schott"]  ],  "Songe noir": [[  "http://portal.wikwio.org/species/show/69",  "Colocasia esculenta (L.) Schott"]  ],  "Songe violet": [[  "http://portal.wikwio.org/species/show/69",  "Colocasia esculenta (L.) Schott"]  ],  "Sonze de Chine": [[  "http://portal.wikwio.org/species/show/69",  "Colocasia esculenta (L.) Schott"]  ],  "Sonze du pays": [[  "http://portal.wikwio.org/species/show/69",  "Colocasia esculenta (L.) Schott"]  ],  "Sorgho": [[  "http://portal.wikwio.org/species/show/308",  "Sorghum arundinaceum (Desv.) Stapf"]  ],  "Sornette": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "Souchet comestible": [[  "http://portal.wikwio.org/species/show/96",  "Cyperus esculentus L."]  ],  "Sour grass": [[  "http://portal.wikwio.org/species/show/238",  "Paspalum conjugatum P.J.Bergius"]  ],  "Souveraine": [[  "http://portal.wikwio.org/species/show/288",  "Senna occidentalis (L.) Roxb."],[  "http://portal.wikwio.org/species/show/300",  "Sigesbeckia orientalis L."]  ],  "Spanish needle": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "Speading hogweed": [[  "http://portal.wikwio.org/species/show/37",  "Boerhavia diffusa L."]  ],  "Stellaire": [[  "http://portal.wikwio.org/species/show/317",  "Stellaria media (L.)Vill."]  ],  "Stramonium": [[  "http://portal.wikwio.org/species/show/102",  "Datura stramonium L."]  ],  "Sweet basil": [[  "http://portal.wikwio.org/species/show/220",  "Ocimum americanum L."]  ],  "Symena": [[  "http://portal.wikwio.org/species/show/325",  "Themeda quadrivalvis (L.) Kuntze"]  ],  "T-grass": [[  "http://portal.wikwio.org/species/show/238",  "Paspalum conjugatum P.J.Bergius"]  ],  "Tabac bœuf": [[  "http://portal.wikwio.org/species/show/66",  "Clidemia hirta (L.) D.Don."]  ],  "Tabac marron": [[  "http://portal.wikwio.org/species/show/304",  "Solanum mauritianum Scop."],[  "http://portal.wikwio.org/species/show/304",  "Solanum mauritianum Scop."]  ],  "Taimboriky": [[  "http://portal.wikwio.org/species/show/178",  "Ischaemum rugosum Salisb."]  ],  "Taimborotsiloza": [[  "",  ""]  ],  "Tainakoho": [[  "http://portal.wikwio.org/species/show/287",  "Senna obtusifolia (L.) H.S.Irwin & Barneby"]  ],  "Taindalitra": [[  "http://portal.wikwio.org/species/show/141",  "Fimbristylis dichotoma (L.) Vahl"],[  "http://portal.wikwio.org/species/show/142",  "Fimbristylis littoralis Gaudich."],[  "http://portal.wikwio.org/species/show/292",  "Setaria pumila (Poir.) Roem. & Schult."]  ],  "Takohoka": [[  "http://portal.wikwio.org/species/show/277",  "Rubus alceifolius Poir. "]  ],  "Talapetraka": [[  "http://portal.wikwio.org/species/show/55",  "Centella asiatica (L.) Urb."],[  "http://portal.wikwio.org/species/show/161",  "Hypochaeris radicata L."]  ],  "Tamarin bourbon": [[  "http://portal.wikwio.org/species/show/287",  "Senna obtusifolia (L.) H.S.Irwin & Barneby"]  ],  "Tanandalitra": [[  "http://portal.wikwio.org/species/show/292",  "Setaria pumila (Poir.) Roem. & Schult."]  ],  "Tanatsangorita": [[  "http://portal.wikwio.org/species/show/100",  "Dactyloctenium aegyptium (L.) P.Beauv."]  ],  "Teloravy": [[  "http://portal.wikwio.org/species/show/323",  "Teramnus labialis (L.f.) Spreng."]  ],  "Tenina": [[  "",  ""]  ],  "Tephrosia": [[  "http://portal.wikwio.org/species/show/322",  "Tephrosia purpurea (L.) Pers."]  ],  "Thé du Mexique": [[  "",  ""]  ],  "Thorn apple": [[  "http://portal.wikwio.org/species/show/102",  "Datura stramonium L."]  ],  "Thym marron": [[  "http://portal.wikwio.org/species/show/24",  "Ambrosia tenuifolia Spreng."]  ],  "Ti fatak": [[  "http://portal.wikwio.org/species/show/314",  "Sporobolus africanus (Poir.) Robyns & Tournay"]  ],  "Ti Kasi": [[  "http://portal.wikwio.org/species/show/103",  "Desmanthus virgatus (L.) Willd. "]  ],  "Ti kreson": [[  "http://portal.wikwio.org/species/show/114",  "Drymaria cordata (L) Willd.ex Roem. &Schult "]  ],  "Ti trèfle": [[  "http://portal.wikwio.org/species/show/225",  "Oxalis corniculata L."]  ],  "Ti-plantain": [[  "http://portal.wikwio.org/species/show/261",  "Plantago lanceolata L."]  ],  "Ti-tamarin blanc": [[  "http://portal.wikwio.org/species/show/253",  "Phyllanthus amarus Schumach. & Thonn."]  ],  "Titoupi": [[  "http://portal.wikwio.org/species/show/173",  "Ipomoea obscura (L.) Ker-Gawler"]  ],  "Toc maria": [[  "http://portal.wikwio.org/species/show/220",  "Ocimum americanum L."]  ],  "Trailing crabgrass": [[  "http://portal.wikwio.org/species/show/113",  "Digitaria radicosa (C.Presl) Miq."]  ],  "Traînasse": [[  "http://portal.wikwio.org/species/show/72",  "Commelina diffusa Burm.f."],[  "http://portal.wikwio.org/species/show/140",  "Euphorbia prostrata Aiton"],[  "http://portal.wikwio.org/species/show/291",  "Setaria barbata (Lam.) Kunth"],[  "http://portal.wikwio.org/species/show/318",  "Stenotaphrum dimidiatum (L.) Brongn."]  ],  "Tramba mzungu": [[  "http://portal.wikwio.org/species/show/186",  "Lantana camara L."]  ],  "Tranomdahitra": [[  "http://portal.wikwio.org/species/show/100",  "Dactyloctenium aegyptium (L.) P.Beauv."]  ],  "Tref": [[  "http://portal.wikwio.org/species/show/105",  "Desmodium incanum DC."],[  "http://portal.wikwio.org/species/show/225",  "Oxalis corniculata L."],[  "http://portal.wikwio.org/species/show/323",  "Teramnus labialis (L.f.) Spreng."]  ],  "Trèfle": [[  "http://portal.wikwio.org/species/show/105",  "Desmodium incanum DC."],[  "http://portal.wikwio.org/species/show/225",  "Oxalis corniculata L."],[  "http://portal.wikwio.org/species/show/226",  "Oxalis debilis var. corymbosa (DC.) Lourteig"],[  "http://portal.wikwio.org/species/show/227",  "Oxalis latifolia Kunth"],[  "http://portal.wikwio.org/species/show/323",  "Teramnus labialis (L.f.) Spreng."]  ],  "Trèfle rose": [[  "http://portal.wikwio.org/species/show/226",  "Oxalis debilis var. corymbosa (DC.) Lourteig"]  ],  "Trenas": [[  "http://portal.wikwio.org/species/show/140",  "Euphorbia prostrata Aiton"]  ],  "Trompe la mort": [[  "http://portal.wikwio.org/species/show/212",  "Mimosa pudica L."]  ],  "Tsanganday": [[  "http://portal.wikwio.org/species/show/276",  "Rottboellia cochinchinensis (Lour.) W.Clayton"]  ],  "Tsiavotrondry": [[  "http://portal.wikwio.org/species/show/124",  "Eleocharis minuta Boeckeler"]  ],  "Tsibora": [[  "http://portal.wikwio.org/species/show/100",  "Dactyloctenium aegyptium (L.) P.Beauv."]  ],  "Tsihitafototra": [[  "http://portal.wikwio.org/species/show/88",  "Cuscuta campestris Yunck."]  ],  "Tsikafona": [[  "http://portal.wikwio.org/species/show/260",  "Pistia stratiotes L."]  ],  "Tsikalabana": [[  "http://portal.wikwio.org/species/show/178",  "Ischaemum rugosum Salisb."]  ],  "Tsikerakerana": [[  "",  ""]  ],  "Tsikobokobondanitra": [[  "http://portal.wikwio.org/species/show/264",  "Portulaca oleracea L."]  ],  "Tsilavondrivotra": [[  "http://portal.wikwio.org/species/show/11",  "Aeschynomene indica L."]  ],  "Tsilo": [[  "http://portal.wikwio.org/species/show/277",  "Rubus alceifolius Poir. "]  ],  "Tsimbatrimbatry": [[  "http://portal.wikwio.org/species/show/47",  "Cajanus scarabaeoides (L.) Thouars"]  ],  "Tsimparifary": [[  "http://portal.wikwio.org/species/show/232",  "Panicum maximum Jacq."]  ],  "Tsindahoro": [[  "http://portal.wikwio.org/species/show/203",  "Malvastrum coromandelianum (L.) Garcke"],[  "http://portal.wikwio.org/species/show/294",  "Sida acuta Burm.f."],[  "http://portal.wikwio.org/species/show/295",  "Sida cordifolia L."],[  "http://portal.wikwio.org/species/show/298",  "Sida rhombifolia subsp. alnifolia (L.) Ugbor."]  ],  "Tsingarivary": [[  "http://portal.wikwio.org/species/show/251",  "Persicaria chinensis (L.) H.Gross"]  ],  "Tsingetse": [[  "http://portal.wikwio.org/species/show/97",  "Cyperus iria L."]  ],  "Tsingetsetse": [[  "http://portal.wikwio.org/species/show/95",  "Cyperus difformis L."],[  "http://portal.wikwio.org/species/show/96",  "Cyperus esculentus L."],[  "http://portal.wikwio.org/species/show/99",  "Cyperus rotundus L."]  ],  "Tsingetsietsy": [[  "http://portal.wikwio.org/species/show/126",  "Eleusine indica (L.) Gaertn."]  ],  "Tsingirifotse": [[  "http://portal.wikwio.org/species/show/188",  "Leersia hexandra Sw."]  ],  "Tsiotsiona": [[  "http://portal.wikwio.org/species/show/89",  "Cyanthillium cinereum (L.) H.Rob."]  ],  "Tsipihipihina": [[  "http://portal.wikwio.org/species/show/126",  "Eleusine indica (L.) Gaertn."]  ],  "Tsipipina": [[  "http://portal.wikwio.org/species/show/241",  "Paspalum scrobiculatum L."]  ],  "Tsipokipoky": [[  "http://portal.wikwio.org/species/show/41",  "Brachiaria eruciformis (Sm.) Griseb."]  ],  "Tsipolitra": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "Tsipotika": [[  "http://portal.wikwio.org/species/show/90",  "Cyathula prostrata (L.) Blume "]  ],  "Tsipotiky": [[  "http://portal.wikwio.org/species/show/8",  "Achyranthes aspera L."]  ],  "Tsiripotaka": [[  "",  ""]  ],  "Tsiriry": [[  "http://portal.wikwio.org/species/show/188",  "Leersia hexandra Sw."]  ],  "Tsivahadrenikely": [[  "http://portal.wikwio.org/species/show/147",  "Galinsoga parviflora Cav."]  ],  "Tsotsorinangatra": [[  "http://portal.wikwio.org/species/show/288",  "Senna occidentalis (L.) Roxb."]  ],  "Udzia": [[  "http://portal.wikwio.org/species/show/225",  "Oxalis corniculata L."],[  "http://portal.wikwio.org/species/show/226",  "Oxalis debilis var. corymbosa (DC.) Lourteig"],[  "http://portal.wikwio.org/species/show/227",  "Oxalis latifolia Kunth"]  ],  "Umbara": [[  "http://portal.wikwio.org/species/show/232",  "Panicum maximum Jacq."]  ],  "Usite": [[  "http://portal.wikwio.org/species/show/32",  "Asystasia gangetica (L.) T.Anderson"]  ],  "Valatendro": [[  "http://portal.wikwio.org/species/show/265",  "Potamogeton nodosus Poir."]  ],  "Vangairindrano": [[  "http://portal.wikwio.org/species/show/84",  "Crotalaria ononoides Benth."]  ],  "Varimbivy": [[  "http://portal.wikwio.org/species/show/116",  "Echinochloa colona (L.) Link"]  ],  "Vasey grass": [[  "http://portal.wikwio.org/species/show/242",  "Paspalum urvillei Steud."]  ],  "Vatofosandrano": [[  "http://portal.wikwio.org/species/show/32",  "Asystasia gangetica (L.) T.Anderson"]  ],  "Vendrakely": [[  "http://portal.wikwio.org/species/show/267",  "Pycreus macrostachyos (Lam.) Raynal"]  ],  "Vendranamalona": [[  "http://portal.wikwio.org/species/show/144",  "Fuirena ciliaris (L.) Roxb."]  ],  "Verokely": [[  "http://portal.wikwio.org/species/show/325",  "Themeda quadrivalvis (L.) Kuntze"]  ],  "Verotsanga": [[  "http://portal.wikwio.org/species/show/232",  "Panicum maximum Jacq."]  ],  "Verovahiny": [[  "http://portal.wikwio.org/species/show/325",  "Themeda quadrivalvis (L.) Kuntze"]  ],  "Verveine": [[  "http://portal.wikwio.org/species/show/337",  "Verbena bonariensis L."]  ],  "Verveine bleue": [[  "http://portal.wikwio.org/species/show/315",  "Stachytarpheta jamaicensis (L.) Vahl"]  ],  "Verveine marron": [[  "http://portal.wikwio.org/species/show/154",  "Heliotropium amplexicaule Vahl"]  ],  "Verveine sauvage": [[  "http://portal.wikwio.org/species/show/154",  "Heliotropium amplexicaule Vahl"],[  "http://portal.wikwio.org/species/show/337",  "Verbena bonariensis L."]  ],  "Vetch": [[  "http://portal.wikwio.org/species/show/340",  "Vicia sativa L."]  ],  "Vieille fille": [[  "http://portal.wikwio.org/species/show/186",  "Lantana camara L."]  ],  "Vigne de Judée": [[  "http://portal.wikwio.org/species/show/258",  "Phytolacca americana L."]  ],  "Vigne marronne": [[  "http://portal.wikwio.org/species/show/277",  "Rubus alceifolius Poir. "]  ],  "Vilaqua": [[  "http://portal.wikwio.org/species/show/55",  "Centella asiatica (L.) Urb."]  ],  "Vilbag": [[  "http://portal.wikwio.org/species/show/320",  "Synedrella nodiflora (L.) Gaertn."]  ],  "Viliantsahona": [[  "http://portal.wikwio.org/species/show/160",  "Hydrocotyle bonariensis Lam."]  ],  "Villaqua": [[  "http://portal.wikwio.org/species/show/55",  "Centella asiatica (L.) Urb."]  ],  "Villebague": [[  "http://portal.wikwio.org/species/show/36",  "Bidens pilosa L."]  ],  "Vilona": [[  "http://portal.wikwio.org/species/show/188",  "Leersia hexandra Sw."]  ],  "Vilonondry": [[  "http://portal.wikwio.org/species/show/124",  "Eleocharis minuta Boeckeler"]  ],  "Violette marron": [[  "http://portal.wikwio.org/species/show/55",  "Centella asiatica (L.) Urb."]  ],  "Voafo": [[  "http://portal.wikwio.org/species/show/173",  "Ipomoea obscura (L.) Ker-Gawler"]  ],  "Voampolera": [[  "http://portal.wikwio.org/species/show/213",  "Mirabilis jalapa L."]  ],  "Voandramiary": [[  "http://portal.wikwio.org/species/show/102",  "Datura stramonium L."]  ],  "Voaroisaka": [[  "http://portal.wikwio.org/species/show/279",  "Rubus rosifolius Sm."]  ],  "Voatondro": [[  "http://portal.wikwio.org/species/show/100",  "Dactyloctenium aegyptium (L.) P.Beauv."]  ],  "Volondrano": [[  "",  ""]  ],  "Volonondry": [[  "http://portal.wikwio.org/species/show/44",  "Brachiaria umbellata (Trin.) Clayton"]  ],  "Volubilis": [[  "http://portal.wikwio.org/species/show/174",  "Ipomoea purpurea (L.) Roth"]  ],  "Vomanganalika": [[  "http://portal.wikwio.org/species/show/174",  "Ipomoea purpurea (L.) Roth"]  ],  "Vovokomby": [[  "http://portal.wikwio.org/species/show/268",  "Pycreus mundtii Nees"]  ],  "Vyey fiy": [[  "http://portal.wikwio.org/species/show/186",  "Lantana camara L."]  ],  "Water lettuce": [[  "http://portal.wikwio.org/species/show/260",  "Pistia stratiotes L."]  ],  "Watouck": [[  "http://portal.wikwio.org/species/show/66",  "Clidemia hirta (L.) D.Don."]  ],  "Wild millet": [[  "http://portal.wikwio.org/species/show/116",  "Echinochloa colona (L.) Link"]  ],  "Wild poinsettia": [[  "http://portal.wikwio.org/species/show/136",  "Euphorbia cyathophora Murrill"],[  "http://portal.wikwio.org/species/show/137",  "Euphorbia heterophylla L."]  ],  "Wild sorghum": [[  "http://portal.wikwio.org/species/show/308",  "Sorghum arundinaceum (Desv.) Stapf"]  ],  "Wild sour": [[  "http://portal.wikwio.org/species/show/157",  "Hibiscus surattensis L."]  ],  "Yellow grass": [[  "http://portal.wikwio.org/species/show/238",  "Paspalum conjugatum P.J.Bergius"]  ],  "Yisambaha": [[  "http://portal.wikwio.org/species/show/157",  "Hibiscus surattensis L."]  ],  "Z'herbe bleue": [[  "http://portal.wikwio.org/species/show/315",  "Stachytarpheta jamaicensis (L.) Vahl"]  ],  "Zamal marron": [[  "http://portal.wikwio.org/species/show/74",  "Conyza sumatrensis (Retz.) E.Walker"]  ],  "Zan Rober": [[  "http://portal.wikwio.org/species/show/138",  "Euphorbia hirta L."]  ],  "Zepi ble": [[  "http://portal.wikwio.org/species/show/315",  "Stachytarpheta jamaicensis (L.) Vahl"]  ],  "Zerbe rose": [[  "http://portal.wikwio.org/species/show/205",  "Melinis repens (Willd.) Zizka"]  ],  "Zerisson blanc": [[  "",  ""]  ],  "Zoumine": [[  "http://portal.wikwio.org/species/show/99",  "Cyperus rotundus L."]  ]};
							str += "<li><strong>Common names in 'français'</strong>";
							str += "<ul>";
							var tablename = "communs_" +langFull;
							var franslength = Object.keys(communs_frans).length; 
							//alert(Object.keys(seaspecies).length);
								for (var j = 0; j < franslength; j++)
								{
									//alert("hellopopo");
									var langcname = communs_frans[j]["Nom"];
									//alert(typeof(langcname));
									str +=  "<li>" +  langcname;
									str +=  "<ul>";	
									alert(Object.keys(seaspecies[langcname]).length);
									if(Object.keys(seaspecies[langcname]).length>1) {
										for (var k =0; k < Object.keys(seaspecies[langcname]).length ; k++){

											url = seaspecies[langcname][k][0];
											str +=  "<li><a href='"+url+"' target='_blank'>"+ seaspecies[langcname][k][1]  +"</a></li>";
										}
									}
									else
									{
										url = seaspecies[langcname][0][0];
										str +=  "<li><a href='"+url+"' target='_blank'>"+ seaspecies[langcname][0][1]  +"</a></li>";
									}
									str += "</ul>";
									str += "</li>";
									//alert(seaspecies[langcname][0][0]);
									//var commonsql = "select a.Code, a.portal_url, a.Espece  from flore a, "+tablename+" b where ";
									//commonsql += 'a.Code = b.Code and b.Nom="' + langcname+ '"';
    								//str += "<br></ul>";
									//str += "</li>";
    							}
    							str +=  "</ul></li>";
    							//$("#tree").html(str);
    							
    						}*/


function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


 function markselected(cid, svgdoc) {	

	alert(cid);

		//var svgdoc = document.svgquest.contentDocument;		
alert(svgdoc);
//alert($("#Tige_P").html());
alert(svgdoc.getElementById(cid));
	var bbox = svgdoc.getElementById(cid).getBBox();	
	//alert(bbox);
	//return false;
	var node = svgdoc.getElementById("imgtick");
	var nwidth = bbox.width;

	var newx = bbox.x+nwidth/2;
	var newy = bbox.y+2 +20;

	node.setAttribute("x", newx);
	node.setAttribute("y", newy);

 }
 /*
var http = createRequestObject();

function showtooltip(cid, tiptext)
{
	if (returnie())
		svgdoc = document.svgquest.getSVGDocument();
	else
		svgdoc = document.svgquest.contentDocument;	
		
	var mid = svgdoc.getElementById(cid);
	
	if (!(mid.hasAttribute("fill-opacity")))
		mid.setAttribute("style", "fill-opacity:0.85");
	
	var bbox = svgdoc.getElementById(cid).getBBox();	
	
	var rectbox = svgdoc.getElementById("recttooltip");
	var node = svgdoc.getElementById("textboxid");
	var nwidth = bbox.width;
	var newx = bbox.x+nwidth/2-23;
	var newy = bbox.y+2 +20;

	var child = node.firstChild;
	while (child != null)
	{
		if (child.nodeName == "tspan" && child.hasChildNodes()) 
				child.firstChild.nodeValue = " ";
		
		child = child.nextSibling;
	}

	rectbox.setAttribute("x", newx);
	rectbox.setAttribute("y", newy);	
	rectbox.setAttribute("style", "fill:#FAFE90;stroke:#474746;stroke-width:18;fill-opacity:0.85");
	node.setAttribute("x", newx + 100);
	node.setAttribute("y", newy + 400);
	node.setAttribute("style", "font:380px verdana,Trebuchet MS, sans-serif;pointer-events:none;fill:#black");

	response = tiptext;
	response = response.replace("&gt;", ">");
	response = response.replace("&lt;", "<");
	response = response.replace("&amp;", "&");
	response = response.replace("&#232;", "è");
	response = response.replace("&#233;", "é");
	newtip = response;		   
//	new_width = response.length * 1.5 + response.length * 0.5 ;		   
	new_width = response.length * 2 ;		   
	calwidth = new_width + newx;
	node.firstChild.nodeValue = " ";
	flag = 1;
	
    if (calwidth > 23000)
    {	
		flag = 0;
		var mysplit = response.split(" ");
		newtip = "";
		remtip = ""
		addbr = mysplit.length/2;
		addbr = Math.floor(addbr);
		for(i = 0; i < mysplit.length; i++)
		{
			if (i <= addbr)
				newtip = newtip + mysplit[i] + " ";					
			else
				remtip = remtip + mysplit[i] + " ";
		}
		newstr = remtip.replace(/^s+|s+$/g,"");
		if (newstr.length > 0 )
		{
			// wrap the tooltip in two lines, if the tooltip is too big
			fspan = svgdoc.createElementNS(svgns, "tspan");
			var textnode = svgdoc.createTextNode(newtip);				
			fspan.appendChild(textnode);
			fspan.setAttribute("x", newx +2);
			fspan.setAttribute("y", newy+5);				
			node.appendChild(fspan);
			
			
			fspan = svgdoc.createElementNS(svgns, "tspan");
			var textnode = svgdoc.createTextNode(remtip);
			fspan.appendChild(textnode);
			fspan.setAttribute("x", newx+2);
			fspan.setAttribute("y", newy + 10);
			node.appendChild(fspan);
			
			rectbox.setAttribute("width", newtip.length * 1.5 + newtip.length * 0.35);
			rectbox.onclick = function() { parent.replacechar(cid)}
			node.onclick = function() { parent.replacechar(cid)}
			rectbox.setAttribute("height", 14);
		}					
		else
		   flag = 1
      }
      if (flag == 1) 
      {					
		rectbox.setAttribute("height", 6*100);	
		rectbox.setAttribute("width",new_width*100 + 300);
		node.firstChild.nodeValue = response;
		rectbox.onclick = function() { parent.replacechar(cid)}
		node.onclick = function() { parent.replacechar(cid)}
       }
}

*/
function showrobotip(cid, tiptext)
{
	/*
	if (returnie())
		svgdoc = document.svgquest.getSVGDocument();
	else
		svgdoc = document.svgquest.contentDocument;	
		
	var bbox = svgdoc.getElementById(cid).getBBox();	
	
	var mid = svgdoc.getElementById(cid);
	if (!(mid.hasAttribute("fill-opacity")))
		mid.setAttribute("style", "fill-opacity:0.85");
	
	var rectbox = svgdoc.getElementById("recttooltip");
	var node = svgdoc.getElementById("textboxid");
	var nwidth = bbox.width;
	var newx = bbox.x + nwidth / 2 - 2500;
	if (newx < 0)
		newx = newx + 2000;
	var newy = bbox.y + 2; 	
	
	response = tiptext;

	new_width = response.length * 1.5 + response.length * 0.4 + 6;			
	rectbox.setAttribute("width",new_width*100);
	
	calwidth = new_width + newx;
	if (calwidth > 240)
		newx = newx - 28;
		
	rectbox.setAttribute("x", newx);
	rectbox.setAttribute("y", newy);	
	rectbox.setAttribute("style", "fill:#FAFE90;stroke:#474746;stroke-width:18;fill-opacity:0.85");
	node.setAttribute("x", newx + 100);
	node.setAttribute("y", newy + 400);
	node.setAttribute("style", "font:380px verdana,Trebuchet MS, sans-serif;pointer-events:none;fill:#black");
	node.firstChild.nodeValue = response;
	rectbox.onclick = function() { parent.showquest(cid)}
	node.onclick = function() { parent.showquest(cid)}
	*/
}


function hidetooltip(cid)
{	
	/*
	if (returnie())
		svgdoc = document.svgquest.getSVGDocument();
	else
		svgdoc = document.svgquest.contentDocument;
	
	var mid = svgdoc.getElementById(cid);
	if (isNaN(parseInt(mid.getAttribute("fill-opacity"))))
	{
		//alert ("I am here")
		mid.setAttribute("style", "fill-opacity:1");
	}
	
	var rectbox = svgdoc.getElementById("recttooltip");
	var node = svgdoc.getElementById("textboxid");	
	rectbox.setAttribute("x", "-10000");
	rectbox.setAttribute("y", "-10000");
	node.setAttribute("x", "-10000");
	node.setAttribute("y", "-10000");
	//node.firstChild.nodeValue = " ";

	var child = node.firstChild;
	while (child != null)
	{
		//see if child is a tspan and has child nodes
		if (child.nodeName == "tspan" && child.hasChildNodes()) 
				child.firstChild.nodeValue = " ";
		
		child = child.nextSibling;
	}
	*/
}

/*
function popupBlank(url) { 
	var proprietes;
	
	if (pop) {
	pop.window.close();
	}
	
	var top= 50;
	var left=50;
	
	width_ = screen.width - 200;
	height_ = screen.height - 300;
	proprietes = "toolbar=yes, location=yes, directories=yes, scrollbars=yes, resizable=yes, status=yes, menubar=yes, width="+width_+", height="+height_+",  left="+left+",top="+top+"";
	var pop=window.open(url,"1",proprietes);
	pop.focus();	
}

function returnie()
{
	if (navigator.userAgent.toLowerCase().indexOf('msie') != -1)
		return true;
	else
		return false;
}

function createRequestObject() {
    var ro;
    var browser = navigator.appName;

    if(browser == "Microsoft Internet Explorer"){
        ro = new ActiveXObject("Microsoft.XMLHTTP");
    }else{
        ro = new XMLHttpRequest();
    }
    return ro;
}*/
 	function addLeadingZero(n) {
 	//alert("add leading function");
        return (n < 10) ? ("0" + n) : n;
    }

    function showtreespecies() {
    /*	
	    cat = document.getElementById("cbotype").value;
	    if (cat == "0")
		cat = "1";
	    
	    if (cat == "1")
	    {
		document.getElementById("clang").style.display = "block";
	    }
	    else
	    {
		document.getElementById("clang").style.display = "none";
		//http.open('get', 'searchspecies.php?searchtype='+cat);

	    }
	    show_loader();
	    searchspecies(cat);

	    //var sspecies = { "catval": cat}
        //localStorage.setItem('searchspecies', JSON.stringify(sspecies));
        */
	}

function showcnames()
{
	/*
	//alert("hello");
	cat = document.getElementById("cbolang").value;
	
	if(cat == ""){
		$('#tree').html('<li style="background: none;text-align: center;"></li>');
		return false;
	}
	show_loader(cat);
	searchspecies(cat);
	//var listvalues = localStorage.getItem('searchspecies'); 
  // var finalvalue = JSON.parse(listvalues);
   //alert("showquest"+finalvalue.txtstore+"another "+finalvalue.txtcharname);
   //finalvalue.catval = cat;
	// Added ajax loader by Stahish on 09-05-2014
	//show_loader();
	

	//http.open('get', 'searchspecies.php?searchtype='+cat);
	*/
}

function show_loader(cat){
	//alert("hi");
	 //var node = document.createElement("LI");
    //var textnode = document.createTextNode("<img src='img/ajax-loader.gif'>");
   // node.appendChild(textnode);
    //document.getElementById("tree").appendChild(node);
    //if(cat==2)
	$('#tree').html('<li style="background: none;text-align: center;"><img src="img/ajax-loader.gif"></img></li>');
	//location.reload();
	//alert($('#tree').html());
	//searchspecies(cat);
	
}

