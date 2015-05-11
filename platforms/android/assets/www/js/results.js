

	var userselcount = 0;	
	var usrstore1 = new Array(); 
	var perarray = new Array(); 
	var flag = false;
	var outputarr = new Array();
	var floresult = new Array();

	var listvalues = localStorage.getItem('formvalues'); 
    var finalvalue = JSON.parse(listvalues);
    var store1 = finalvalue.txtstore;
	var errorflag = 0;

	var globalval = localStorage.getItem('globalVar'); 

  	var glbvalue = JSON.parse(globalval);

 	 var cname  = glbvalue.no_state;

	if(store1.length == "1"){

		}else{
	for ( var i=0; i<cname; i++){		
		var intval = parseInt(store1.substr(i, 1));
		errorflag = parseInt(errorflag) + intval;		

	}
}
	
	var htmlelement="";
	
        
 document.addEventListener("deviceready", onDeviceReady, false);


 function onDeviceReady() {

    $(".loading-icon").show();
	floreDB();
}

function floreDB(){


	var lang = 'fr';
         $(".languagecheck").each(function(){         		
         		var that = $(this);
         		if(that.hasClass('ui-btn-active')){
         			lang = that.attr('rel');	
         		}
         });


	var target_url;
	var portal_url;
	var species_name;
	var temp;
	for (var i = 0; i < Object.keys(flore_asc).length; i++){
		perarray[flore_asc[i]["Code"]] = 0;

		target_url = "species/" + lang + "/";
		temp = flore_asc[i]["Code"];

		target_url +=  temp + ".html";

		target_url = target_url.toLowerCase();

		species_name = flore_asc[i]["Espece"];

		portal_url = flore_asc[i]["portal_url"];
	
		floresult[temp] = [ species_name, portal_url, target_url ];
	}

	
carDB();
}

function carDB(){

	var listvalues = localStorage.getItem('formvalues'); 
    var finalvalue = JSON.parse(listvalues);
    var store1 = finalvalue.txtstore;
    var carac;
	for (var i = 0; i < Object.keys(caract_full).length; i++)
	{
		carac =  caract_full[i]["ID_CARAC"];	
		usrstore1[carac] = store1.substr(i, 1); 
		if (store1.substr(i, 1) == "1")
			userselcount++;
	}

	if(store1.length == 1) {

		toDo();
	}else{
		queryusrDB();
	}
	
}

function queryusrDB()
{
	var countif=0;
	
	for (var key in usrstore1)
	{

		if (usrstore1[key] == "1")
		{
			countif++;
			
			var eMpty =0;
			for(var te = 0; te < Object.keys(flore_full).length; te++){
						if(flore_full[te][key] == 1){
							eMpty++;
							var mnmn = flore_full[te]["Code"];
							perarray[mnmn]++ ;
						}
			}
			
			if(countif == userselcount){
				flag = true;
			}
		}
	}
	toDo();
	
}

function toDo(){
	var per;
	for (var key in perarray)
	{
		if (perarray[key] > 0)
		{
			per = (perarray[key]/userselcount) * 100;
			perarray[key] = Math.round(per);
		}
	}
	
resultss();

}




function resultss(){

	var usrpercent = 0;
	var trow = 0 ;

	var totspecies = Object.keys(perarray).length;
	var max = 100;
	while (max >= 0)
	{
		for (var key in perarray)
		{
			if (perarray[key] == max)
				outputarr[key] = max;
		}
		max--;
	}
	
	htmlelement += "<div align='center'>";
	htmlelement += "<div style=' overflow-y: scroll;'>";
	htmlelement += ' <table data-role="table" id="movie-table-custom" data-mode="reflow" class="movie-list ui-responsive">';
	htmlelement += "<thead><tr class='rowtop'>";
	htmlelement += "<th class=\"resultlistspec\" style=\"width:25%; height:30px;\">Nom d'espèce</th>";
	htmlelement += "<th class=\"resultpercentage\" style=\"width:15%;height:30px;\">Pourcentage</th>";

	if (errorflag != "0")	{
		htmlelement += "<th class=\"resulterror\"  style=\"width:15%;height:30px;\">Erreurs</th>";
	}
	htmlelement += "</tr></thead><tbody>";
	for (var key in outputarr)
	{
		if (trow % 2 == 0)
			htmlelement += "<tr class='rowone'>";
		else
			htmlelement += "<tr class='rowtwo'>";

	
		var val = floresult.hasOwnProperty(key); 
		if(val == true){

			htmlelement += "<td style=\"padding-left: 10px; text-align:center: height:50px\">";
			htmlelement += "<a href=\"#\"  onclick=\"popup('"+floresult[key][1]+"' , '"+floresult[key][2] +"')\" style=\"color:white;\">"+floresult[key][0]+"</a>";
			htmlelement += "</td><td style=\"text-align:center\">";
			htmlelement +=  perarray[key] + "%";
			htmlelement +=  "</td>";

			if (errorflag != "0" )
				{
					htmlelement += "<td style=\"text-align:center\">";
					if (outputarr[key] != "100"){
						htmlelement += "<a href='#' class=\"resultview\" onclick=\"showerrors('" +key + "');\" style=\"color:white;\">View</a>";
					}
					else{
						htmlelement += "-";
					}

					htmlelement += "</td>";
				}
			htmlelement +=  "</tr>";
		}
		trow++;
	}
	htmlelement +=  "</tbody></table></div></div>";

	$(".loading-icon").hide();
	$(".selectResultWrapper").html(htmlelement);
}


