


document.addEventListener("deviceready", onDeviceReady, false);


			function onDeviceReady() {
                    console.log("device success=======================");
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

                    }
                }
                function dbremove(){
                    window.plugins.sqlDB.remove("wikwio_idao.db",rmsuccess, dbcopy);
                }

                function dbcopy()
                {
                       
                    window.plugins.sqlDB.copy("wikwio_idao.db",copysuccess,errorinc);
                }

                function rmsuccess(){

                }

                function copysuccess(){

                }
			
                 function success(){
                 	var appstr = "";
					var i;	
                 	var appellable = [];                 	
    				for( i =0; i < Object.keys(object_asc).length; i++) {

    					var desc_num = object_asc[i]["Desc_Num"];
    					appellable[desc_num] = object_asc[i]["Joker"];
    				}
    				for ( i =0; i < appellable.length; i++){

					appstr += appellable[i];

					}
                    var localappstr = { "txtappstr": appstr,"contracode":"" ,"linkresult": "" ,"linkspecies": ""}
                    localStorage.setItem('appstrvalue',JSON.stringify(localappstr));

					var replacevalues = { "txtstore": "0", "txtappstr": appstr , "txtcharname": "", "txtquest":"", "txtcurquest": ""}
                    localStorage.setItem('formvalues', JSON.stringify(replacevalues));


				}
			function errorinc(e)
                {
                     console.log("ERROR at include file: " + e.message);
                    }
     		
  		
 
	