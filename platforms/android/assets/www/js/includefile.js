


document.addEventListener("deviceready", onDeviceReady, false);


			function onDeviceReady() {
                    //alert("ondevice include file.jsready");
                    console.log("device success=======================");
                  //  dbcopy();
                    //hello();
                    searchmatrix();
                    dbCheck();
                    success();
                }

                function dbCheck(){
                   
                    if (localStorage.getItem("uninstalled") == null) {
                       
                        dbremove();
                        

                      localStorage.setItem("uninstalled", true);
                    }
                    else {

                        //extractFromDB();
                        //apparrayinit();
                    }
                }
                function dbremove(){
                    window.plugins.sqlDB.remove("wikwio_idao.db",rmsuccess, dbcopy);
                }

                function dbcopy()
                {
                        //Database filename to be copied is demo.db
                    //alert("Application is ready to use");
                    window.plugins.sqlDB.copy("wikwio_idao.db",copysuccess,errorinc);
                }

                function rmsuccess(){

                   // alert("remove success");
                   

                }

                function copysuccess(){
                    // alert("copy success");
                    //apparrayinit();
                }
			
                 function success(){
                 	var appstr = "";
					var i;	
                 	var appellable = [];                 	
                 	//alert("lennnnnnnnnnnnnnnnnnnnnn" + len)
    				for( i =0; i < Object.keys(object_asc).length; i++) {

    					var desc_num = object_asc[i]["Desc_Num"];

    					//console.log("dessss+++===++ " +desc_num);
    					//$(".error").append(desc_num+" <br>");
    					appellable[desc_num] = object_asc[i]["Joker"];
    				}

    				//$(".result").append(appellable);
    				//var count=appellable.length;
    				//console.log("sount========================= "+count);

    				for ( i =0; i < appellable.length; i++){

					appstr += appellable[i];

					}
					//console.log("apppppppp========================= "+appstr);
					//alert("iijjbkjhhff"+ appstr);

                    var localappstr = { "txtappstr": appstr }
                    localStorage.setItem('appstrvalue',JSON.stringify(localappstr));

					var replacevalues = { "txtstore": "0", "txtappstr": appstr , "txtcharname": "", "txtquest":"", "txtcurquest": ""}
                    localStorage.setItem('formvalues', JSON.stringify(replacevalues));


				}


			function errorinc(e)
                {
                	//alert(e);
                     console.log("ERROR at include file: " + e.message);
                    }
     		
  		
 
	