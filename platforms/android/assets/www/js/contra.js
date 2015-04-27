
	
	var char_val = [];  

	//var charvalues = []; 

	var usrstore = []; 

	var buttonscontra = "";

	var frmvalues = localStorage.getItem('formvalues'); 
    var fnlvalue = JSON.parse(frmvalues);
    var ctrstore = fnlvalue.txtstore;

   // console.log("store - "+ ctrstore);

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
  //print  substr($store, $i, 1);
    	usrstore[i] = ctrstore.substr( i, 1);
    }
   /* for(var i=0; i < usrstore.length; i++){
    	console.log(usrstore[i]);
    }*/

document.addEventListener("deviceready", onDeviceReady, false);

                function onDeviceReady() {
                    //alert("contra");
                     
                     extractForContraDB();
                     
                }

                 function extractForContraDB(){
                     var db = window.sqlitePlugin.openDatabase({name: "wikwio_idao.db"});
                     //alert("query db");
                     //db.transaction(querycarDB, errorObjCB);
                     caracterDb();
                     db.transaction(queryctrroboDB, errorObjCB);
                    // getContraelements();
                     
                }
                function caracterDb(){

                  var caracter;
                  //alert("caracter");
                    for (var i = 0; i < Object.keys(caract_full).length; i++)
                      {
                        caracter = caract_full[i]["ID_CARAC"];  
                        char_val[caracter] = caract_full[i]["NUM"];
                      }
                       //$(".end").append( " char_val= "+char_val+"<br>");
                 }

                  function queryctrroboDB(tx){

                   for (var i = 0; i < robot; i++)
                  {
                    //alert("hi");
                      flag = false;
                      tx.executeSql('select * from hierarchie where Robot_Num="'+i+'"', [],contraquery,errorObjCB);

                  }
                 
                }

                function contraquery(tx,values){

                 count++;
                   var no_records = values.rows.length;
                   //alert("no_records= "+ no_records);
                        var j = 0;
                        var flag = 0;
                        var path;
                        while ( j < no_records && flag == 0 )
                          {
                            var k = 0;
                            while ( k < constraints && flag == 0 && no_records > 1)
                            {
                             var fldname = "C_" + k;
                              //echo $fldname;
                              //echo $data[$j]->$fldname;
                              var dbvalue = values.rows.item(j)[fldname];
                              //console.log("dbvalue====="+JSON.stringify(dbvalue));
                              var cval = char_val[dbvalue];
                              //echo " => $dbvalue -- $usrstore[$cval]";
                              
                              if ( dbvalue == "Fin")
                              { 
                                var robot_num = addLeadingZero(values.rows.item(j).Robot_Num);
                                if (robot_num.length == 1){

                                    robot_num = addLeadingZero(values.rows.item(j).Robot_Num);
                                }

                                path =  "robot" + "/" + robot_num + "/" + values.rows.item(j).Nom;

                                // $(".result").append( " path11= "+path+"<br>");

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
                          //alert("str value= " +str)
                          if(count == robot){
                             getContraelements();
                          }
                          //console.log("str value = "+str);
                         
                }

                function  getContraelements(){
                	//alert("hi");
                	var floreColumn;
                	var contraColumn;
                	var key;
                	 for (var i = 0; i < Object.keys(object_full).length; i++) {
                	 	var objet = object_full[i]["Objet"];
                	 	var popup = object_full[i]["Popup"];
						var nocar = object_full[i]["Nb_Car"];
						var cindex = object_full[i]["Index_Car"];
						
						
						//console.log("cin= "+cindex);
						//console.log("non= "+nocar);
						var o = parseInt(cindex)+parseInt(nocar);
						var z = o-1;
						//alert("O "+ o +" Z "+z);
						//console.log("noCAr= "+((cindex+nocar)-1));

						for (var j= cindex; j <= z; j++)
						{
							//console.log("usrstore[j]= "+usrstore[j]);
							if (usrstore[j] == "1")
							{
								key = arraySearch(char_val, j); // find the character name, whose index is 1

								for (var m = 0; m < Object.keys(flore_full).length; m++) {
									//console.log("flore_full[m]['Code'] = "+flore_full[m]["Code"]);
									//alert("ctrcode= "+ctrcode);
									if(flore_full[m]["Code"] == ctrcode){
										//alert("length"+ flore_full[m]["Code"]);
										floreColumn = flore_full[m];
									}
								}
                
								if(floreColumn[key] != "1"){

								for (var n = 0; n < Object.keys(contradiction_full).length; n++) {
									//console.log("contradiction_full[n]['Objet'] = "+contradiction_full[n]["Objet"]);
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
                        // alert(typeof(str));
                       //console.log("str value = "+str);
                        var myarr = str.split("|");
                       // console.log("myarray= "+myarr.toString())
                        //alert("myarr"+myarr[0]);
                        var temp='';
                         var j=0;
                         var path;
                        for(var i = 0; i < myarr.length; i++){
                          (function(i) {
                          path = myarr[i];
                         //$(".result").append(path);
                       // $(".result").append( " i= "+i+"<br>");
                        //$(".result").append( " path= "+path+"<br>");
                         $.get(path, function(data) { 
                            //alert("my arr = "+myarr[i]);
                                  j++;
                                 // alert("data="+data);
                                   temp+=data;
                                   //$(".result").append("j="+j+" array= "+myarr.length+"path= "+path+"<br>");
                                   //alert("j="+j)
                                    if(j == myarr.length){
                                        svgData(temp);
                                    }
                            },dataType="text");
                         }(i));
                        }
                      }

                function svgData(temp){
                   //alert("svgdata= "+temp);
                   var a = window.innerHeight;
                   //alert(typeof(a));
                   //alert(a);
                   var h;
                   if(a>700){
                     h= a-100;
                     //alert(h);
                    }else {
                        h = a;
                      }
                    $(".selectContraWrapper").html('<svg  xmlns="http://www.w3.org/2000/svg" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" style="height:'+h+'px;" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24000 18000" xmlns:xlink="http://www.w3.org/1999/xlink"> ' + temp + '</svg>')
                }

                function arraySearch(arr,val) {
                	//alert("search");
                	for (var key in arr){
                		if(arr[key]==val)
                			return key;
                	}
				   
				}



 					


                 function errorObjCB(e){
                    alert("some error"+ e );
                    $(".message").append("hierachie table error: " + e + " rows found.");
                    }