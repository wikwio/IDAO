
// alert("caluclate.js");

	var userselcount = 0;	// Find number of components selected by the user
	var usrstore1 = new Array(); // user selected components
	var perarray = new Array(); // percentage for each species
	var flag = false;
	//var topval;
	var outputarr = new Array();
	var floresult = new Array();

	var listvalues = localStorage.getItem('formvalues'); 
    var finalvalue = JSON.parse(listvalues);
    var store1 = finalvalue.txtstore;
    //alert(store1);
	var errorflag = 0;

	var globalval = localStorage.getItem('globalVar'); 

  	var glbvalue = JSON.parse(globalval);

 	 var cname  = glbvalue.no_state;

	if(store1.length == "1"){

		}else{
	for ( var i=0; i<cname; i++){
		//alert(errorflag);
		
		var intval = parseInt(store1.substr(i, 1));
		errorflag = parseInt(errorflag) + intval;		
		//$(".clipp").append(errorflag+"<br>");

	}
}
	//alert("flg"+errorflag);
	//errorflag = parseInt(store1) || 0;
	//alert(errorflag);

	var htmlelement="";
	
        
 document.addEventListener("deviceready", onDeviceReady, false);


 function onDeviceReady() {
    // alert("select calculate quest");
    //extractFromcalucDB();
    $(".loading-icon").show();
	floreDB();
}
function extractFromcalucDB(){
	var db = window.sqlitePlugin.openDatabase({name: "wikwio_idao.db"});
	//alert("query db");
	//db.transaction(queryflorDB, errorflorObjCB);
	//$(".result").append( "queryflorDB done ");
	//db.transaction(querycaractDB, errorflorObjCB);
	//$(".result").append( "querycaractDB done ");
	

	//db.transaction(queryusrDB, errorflorObjCB);
	//db.transaction(queryresDB, errorflorObjCB);
	floreDB();

	}

function queryflorDB(tx)
{
	
	 //tx.executeSql('select * from flore order by Espece', [], floreDB, errorflorObjCB);

	
	}
function floreDB(){
	//alert(result.rows.length);
	var target_url;
	var portal_url;
	var species_name;
	var temp;
	for (var i = 0; i < Object.keys(flore_asc).length; i++){
		perarray[flore_asc[i]["Code"]] = 0;

		target_url = "species/";
		temp = flore_asc[i]["Code"];

		target_url += temp.substr(0,1) + "/" + temp + "/";

		target_url = target_url + temp +"_fr.html";

		target_url = target_url.toLowerCase();

		species_name = flore_asc[i]["Espece"];

		portal_url = flore_asc[i]["portal_url"];

		floresult[temp] = [ species_name, portal_url, target_url ];
	}

	/*$(".message").append( "floresult size after"+Object.keys(floresult).length+"<br>");
	for (var key in floresult)
	{
		$(".clip").append( " flores key= "+key+"value[0]= "+floresult[key][0]+"value[1]= "+floresult[key][1]+"value[2]= "+floresult[key][2]+"<br>");
	}*/

carDB();
}

function carDB(){

	//alert(finalval.rows.length);

	var listvalues = localStorage.getItem('formvalues'); 
    var finalvalue = JSON.parse(listvalues);
    var store1 = finalvalue.txtstore;
   // alert("store"+store1.length);
    var carac;
	for (var i = 0; i < Object.keys(caract_full).length; i++)
	{
		carac =  caract_full[i]["ID_CARAC"];	
		usrstore1[carac] = store1.substr(i, 1); // convert the user selection string to array
		if (store1.substr(i, 1) == "1")
			userselcount++;
	}

	/*for (var key in usrstore1)
	{
		$(".message").append( " flores key= "+key+"value[0]= "+usrstore1[key]+"<br>");
	}*/
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
			/*var query = "select * from flore where "+key+"=1";
			tx.executeSql( query , [], function(tx, res){
				//alert(res.rows.length);
			if (res.rows.length == 1) {
				perarray[res.rows.item(0).Code]++;
			}
			else {
				for (var i = 0; i < res.rows.length ; i++) {
					perarray[res.rows.item(i).Code]++ ;
				}
				//alert("userselcount= "+userselcount);
			}
			if(countif == userselcount){
				flag = true;
			}
			});*/
			var eMpty =0;
			for(var te = 0; te < Object.keys(flore_full).length; te++){
						if(flore_full[te][key] == 1){
							eMpty++;
							var mnmn = flore_full[te]["Code"];
							perarray[mnmn]++ ;
							//$(".result").append( "key = "+key+" "+ flore_full[te][key]+"<br>");
						}
			}
			//alert("=============="+eMpty);
			
			if(countif == userselcount){
				flag = true;
			}
		}
	}
	toDo();
	/*var intervalvar = setInterval(function getFlag() {
			//alert(flag);
			if(flag){
				clearInterval(intervalvar);
				toDo();
			}
			}, 1000);*/
}

function toDo(){
	var per;
	//alert("todo");
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


/*function queryresDB(tx){

	 tx.executeSql('select * from flore', [], resultDB, errorflorObjCB);
}

function resultDB(tx,valueres){

	

for(var i = 0; i < valueres.rows.length; i++){

	
}

}*/

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
	/*for (var key in outputarr)
	{
		$(".clip").append( " flores key= "+key+"value[0]= "+outputarr[key]+"<br>");
	}*/

	
	htmlelement += "<div align='center'>";
	htmlelement += "<div style=' overflow-y: scroll;'>";
	//htmlelement += "<table width='100%' class='tablesorter'  id=\"resultstable\" cellpadding=\"3\">";
	htmlelement += ' <table data-role="table" id="movie-table-custom" data-mode="reflow" class="movie-list ui-responsive">';
	htmlelement += "<thead><tr class='rowtop'>";
	htmlelement += "<th style=\"width:25%; height:30px;\">Nom d'espèce</th>";
	htmlelement += "<th style=\"width:15%;height:30px;\">Pourcentage</th>";

	if (errorflag != "0")	{
		htmlelement += "<th style=\"width:15%;height:30px;\">Erreurs</th>";
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
						htmlelement += "<a href='#' onclick=\"showerrors('" +key + "');\" style=\"color:white;\">View</a>";
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

	//console.log(htmlelement);
	$(".loading-icon").hide();
	$(".selectResultWrapper").html(htmlelement);
}

function errorflorObjCB(e){
   //alert("some error"+ e );
	//$(".message").append("hierachie table error: " + e + " rows found.");
 }


