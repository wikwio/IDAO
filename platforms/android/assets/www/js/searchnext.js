


var globval = localStorage.getItem('globalVar'); 

var globvalue = JSON.parse(globval);

var state       = globvalue.no_state;
var constraints	= globvalue.no_constraints
var robot		= globvalue.no_robot
var species		= globvalue.no_species

var frmvalues = localStorage.getItem('formvalues'); 
var fnlvalue = JSON.parse(frmvalues);
var store = fnlvalue.txtstore;
var appstr = fnlvalue.txtappstr;
var ddno = fnlvalue.txtcurquest;


//alert(fnlvalue.txtcurquest +"    "+fnlvalue.txtquest );

var s = new Array();
var tri = new Array();	
var etat = new Array();

var usrstore = new Array();// convert the user selections from string to an array

//var nombre ;
var	max = 1;
var compteur = 0;

var questname;
var qname;
var cname;

if (store.length == 1){
		for (var i=0; i < state; i++){
			store += "0";
		}
}

	// convert the user selections from string to an array
for (var i=0; i<state; i++){
	usrstore[i] = store.substr( i, 1);
}

// get the appellable string and convert it to array
var appellable = new Array();

for (var i = 0; i < appstr.length; i++){
	appellable[i] = appstr.substr( i, 1);
}

// do manipulation with appellable array
	appellable[ddno] = 0;
	
	//again change the appellable array to string
	var appstrlen = appstr.length;
	appstr = "";
	for (var i = 0; i < appstrlen; i++){
		 appstr += appellable[i];
	}

$(".loading-icon").show();
	searchquest();

/*document.addEventListener("deviceready", onDeviceReady, false);

                function onDeviceReady() {
                    //alert("contra");
                     $(".loading-icon").show();
                     extractForsNextDB();
                     
                }

                 function extractForsNextDB(){
                     
                     //alert("query db");
                     //db.transaction(querycarDB, errorObjCB);
                     florDb();
                     //db.transaction(queryctrroboDB, errorObjCB);
                    // getContraelements();
                     
                }
                function florDb(){

                  
                       //$(".end").append( " char_val= "+char_val+"<br>");
                       searchquest();
                 }*/

                 function searchquest(){
                 	//alert("hi");
                 	var tempvar;
                 	var provenance;
                 	var index_car;
                 	var nb_car;
                 	var etats = [];
                 	var dno;
                 	for (var ij =0; ij < Object.keys(object_asc).length; ij++)
					{
						dno = object_asc[ij]["Desc_Num"];
						if (appellable[object_asc[ij]["Desc_Num"]] == 1)
						{
							provenance  = -1;
							index_car= object_asc[ij]["Index_Car"];
							nb_car = object_asc[ij]["Nb_Car"];

							for (var i = index_car; i <= parseInt(index_car) + parseInt(nb_car) -1 ; i++){
								if (usrstore[i] != "0"){
									provenance = i - object_asc[ij]["Index_Car"];
								}
							}

						}
						else
						{
							provenance = 1;	
							s[compteur] = 0;
						}

						if (provenance == -1)
							{

								for (var j = 0; j <=  nb_car - 1; j++){
									etats[j] = 0;
								}
										 
								for (var i = 0; i <= nombre - 1 ; i++)
								{
									for (var k = 0; k <= nb_car - 1; k++)
									{	

										tempvar = parseInt(k) + parseInt(index_car);
										etats[k] = parseInt(etats[k])  + parseInt(matrice[i][tempvar]);
									}
								}
								
								s[compteur] = 0;
								for (var i = 0; i <= nb_car - 1 ; i++)
								{
									if (etats[i] != "0")
									{
										s[compteur] = s[compteur] - etats[i] / nombre * Math.log(nombre / etats[i]) / Math.log(nb_car);
									}	
								}		
								s[compteur] = Math.abs(s[compteur]);
					 		}
							else{
								s[compteur] = 0;
							}
							compteur = compteur + 1;
						}

						// sort the array and get the maximum
						max = 0;
						var numero;
						for (var i = 0; i <= compteur - 1; i++)
						{
							if (max < s[i])
							{
								max = s[i];		   
								numero = i;
							}
						}
						if (max != "0")
						{		
							//alert("hello");
							var temp = "";
							//dno = object_asc[numero]["Desc_Num"];
							questname = "quest/" + object_asc[numero]["Popup"];	
							qname = object_asc[numero]["Desc_Num"];
							cname = object_asc[numero]["Objet"];
							$(".loading-icon").hide();
							temp = '<object id="svgquest" type="image/svg+xml" data="'+questname+'" width="100%" height="100%" ><param name="src" value="'+questname+'" ></object>';
								$(".SearchWrapper").html(temp);
							/*$.get(questname, function(data) {
	                           temp+=data;
	                           $(".loading-icon").hide();
	                           $(".SearchWrapper").html(temp);
	                           //console.log(data);
                          
                       		},dataType="text");*/
						}
						else
						{
							
						}	



						

						fnlvalue.txtcurquest = qname;
				      	fnlvalue.txtquest = cname;
				      	fnlvalue.txtappstr = appstr;
						 localStorage.setItem('formvalues', JSON.stringify(fnlvalue));


					}
                 

