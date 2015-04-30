
	
	var char_val = [];  
	var usrstore = []; 
	var buttonscontra = "";

	var frmvalues = localStorage.getItem('formvalues'); 
  var fnlvalue = JSON.parse(frmvalues);
  var ctrstore = fnlvalue.txtstore;
  var globval = localStorage.getItem('globalVar'); 
  var globvalue = JSON.parse(globval);

 	var state       = globvalue.no_state;
	var constraints	= globvalue.no_constraints;
	var robot		= globvalue.no_robot;
	var species		= globvalue.no_species;

	var ctrName = localStorage.getItem('errorPage'); 
  var ctrvalue = JSON.parse(ctrName);
  var ctrcode = ctrvalue.spcode;
  var str = "";
  var count = 0;


  for ( var i=0; i < state; i++){
  	usrstore[i] = ctrstore.substr( i, 1);
  }
 
document.addEventListener("deviceready", onDeviceReady, false);

                function onDeviceReady() {                  
                     extractForContraDB();
                     
                }

                 function extractForContraDB(){
                     var db = window.sqlitePlugin.openDatabase({name: "wikwio_idao.db"});
                    
                     caracterDb();
                     db.transaction(queryctrroboDB, errorObjCB);                     
                }
                function caracterDb(){

                  var caracter;
                    for (var i = 0; i < Object.keys(caract_full).length; i++)
                      {
                        caracter = caract_full[i]["ID_CARAC"];  
                        char_val[caracter] = caract_full[i]["NUM"];
                      }
                 }

                  function queryctrroboDB(tx){

                   for (var i = 0; i < robot; i++)
                  {
                      flag = false;
                      tx.executeSql('select * from hierarchie where Robot_Num="'+i+'"', [],contraquery,errorObjCB);

                  }
                 
                }

                function contraquery(tx,values){

                 count++;
                   var no_records = values.rows.length;
                        var j = 0;
                        var flag = 0;
                        var path;
                        while ( j < no_records && flag == 0 )
                          {
                            var k = 0;
                            while ( k < constraints && flag == 0 && no_records > 1)
                            {
                             var fldname = "C_" + k;
                              var dbvalue = values.rows.item(j)[fldname];
                              var cval = char_val[dbvalue];                              
                              if ( dbvalue == "Fin")
                              { 
                                var robot_num = addLeadingZero(values.rows.item(j).Robot_Num);
                                if (robot_num.length == 1){

                                    robot_num = addLeadingZero(values.rows.item(j).Robot_Num);
                                }

                                path =  "robot" + "/" + robot_num + "/" + values.rows.item(j).Nom;

                                if (str.length > 0 ) {
                                  str += "|" +path;
                                }
                                else {
                                  str += path;
                                }

                                 flag = 1;
                              }
                              
                              if (usrstore[cval] == "0") {
                                break;      
                              }
                            
                              k++;
                            }
                            j++;
                          }
                          if(count == robot){
                             getContraelements();
                          }
                         
                }

                function  getContraelements(){
                	var floreColumn;
                	var contraColumn;
                	var key;
                	 for (var i = 0; i < Object.keys(object_full).length; i++) {
                	 	var objet = object_full[i]["Objet"];
                	 	var popup = object_full[i]["Popup"];
						var nocar = object_full[i]["Nb_Car"];
						var cindex = object_full[i]["Index_Car"];
			
						var o = parseInt(cindex)+parseInt(nocar);
						var z = o-1;
		
						for (var j= cindex; j <= z; j++)
						{
							if (usrstore[j] == "1")
							{
								key = arraySearch(char_val, j); // find the character name, whose index is 1

								for (var m = 0; m < Object.keys(flore_full).length; m++) {
									
									if(flore_full[m]["Code"] == ctrcode){
										floreColumn = flore_full[m];
									}
								}
                
								if(floreColumn[key] != "1"){

								for (var n = 0; n < Object.keys(contradiction_full).length; n++) {
									if(contradiction_full[n]["Objet"] == objet){
										contraColumn = contradiction_full[n];
									}
								}

									if (contraColumn["Bouton"] == "-1"){

										 str += "|" + "robot" + "/contra/" + contraColumn["Popup"] + ".svg";
									} else {
										buttonscontra += "|" + objet;
									}
								}

							}
						}
                	 }
                	 getsvgData();
                }

                function getsvgData(){
                        var myarr = str.split("|");

                        var temp='';
                         var j=0;
                         var path;
                        for(var i = 0; i < myarr.length; i++){
                          (function(i) {
                          path = myarr[i];
                      
                         $.get(path, function(data) { 
                                  j++;
                                   temp+=data;
                                    if(j == myarr.length){
                                        svgData(temp);
                                    }
                            },dataType="text");
                         }(i));
                        }
                      }

                function svgData(temp){
                   var a = window.innerHeight;

                   var h;
                   if(a>700){
                     h= a-100;
                    }else {
                        h = a;
                      }
                    $(".selectContraWrapper").html('<svg  xmlns="http://www.w3.org/2000/svg" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" style="height:'+h+'px;" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24000 18000" xmlns:xlink="http://www.w3.org/1999/xlink"> ' + temp + '</svg>')
                }

                function arraySearch(arr,val) {
                	for (var key in arr){
                		if(arr[key]==val)
                			return key;
                	}
				   
				}


                 function errorObjCB(e){
                    alert("some error"+ e );
                    $(".message").append("hierachie table error: " + e + " rows found.");
                    }