


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

var s = new Array();
var tri = new Array();	
var etat = new Array();

var usrstore = new Array();

var	max = 1;
var compteur = 0;

var questname;
var qname;
var cname;

var compare = "";

for (var z=0; z<appstr.length; z++){

	compare+=0;
}

$(".loading-icon").show();


if (store.length == 1){
		for (var i=0; i < state; i++){
			store += "0";
		}
}

for (var i=0; i<state; i++){
	usrstore[i] = store.substr( i, 1);
}

var appellable = new Array();

for (var i = 0; i < appstr.length; i++){
	appellable[i] = appstr.substr( i, 1);
}

	appellable[ddno] = 0;
	var appstrlen = appstr.length;
	appstr = "";
	for (var i = 0; i < appstrlen; i++){
		 appstr += appellable[i];
	}

	if(appstr == compare){
	$('.nextbutton').hide();
	$(".SearchWrapper").html("<p class='warning' >Pas plus d\'options disponibles </p>");
}

	searchquest();



                 function searchquest(){
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
							var temp = "";
							questname = "quest/" + object_asc[numero]["Popup"];	
							qname = object_asc[numero]["Desc_Num"];
							cname = object_asc[numero]["Objet"];
							$(".loading-icon").hide();
							temp = '<object id="svgquest" type="image/svg+xml" data="'+questname+'" width="100%" height="100%" ><param name="src" value="'+questname+'" ></object>';
								$(".SearchWrapper").html(temp);
							
						}
						else
						{
							
						}	
						fnlvalue.txtcurquest = qname;
				      	fnlvalue.txtquest = cname;
				      	fnlvalue.txtappstr = appstr;
						 localStorage.setItem('formvalues', JSON.stringify(fnlvalue));


					}
                 

