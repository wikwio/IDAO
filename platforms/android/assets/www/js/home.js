
            
        
           


            document.addEventListener("deviceready", onDeviceReady, false);

        
                function onDeviceReady() {
                    //alert("ondevice ready");
                    console.log("device success=======================");
                  //  dbcopy();
                    success();
                    //extractFromDB();
                   dbCheck();
                    
                    //hello();
                }


                function dbCheck(){
                   
                    if (localStorage.getItem("uninstalled") == null) {
                       
                        dbremove();
                        

                      localStorage.setItem("uninstalled", true);
                    }
                    else {

                        extractFromDB();
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
                    window.plugins.sqlDB.copy("wikwio_idao.db",copysuccess,errorCB);
                }

                function rmsuccess(){

                   // alert("remove success");
                   

                }

                function copysuccess(){
                    // alert("copy success");
                     extractFromDB();
                     //apparrayinit();
                }

            /*    function extractFromDB(){
                     var db = window.sqlitePlugin.openDatabase({name: "wikwio_idao.db"});
                     db.transaction(queryDB, errorCB);
                } 

                function extractFromDB(tx) {
                     tx.executeSql('select * from hierarchie where C_0 = "Fin" ;', [], hello, errorCB);
                     console.log("querydb method called===--==--");
                    // alert("queryDB found");
                }*/

                 function extractFromDB(){

                    var len= Object.keys(hierarchie_order_by_fin).length;
                    //console.log("length value  "+ len);
                    //alert("table found"); 
                    var test='';
                    var temp='';
                    var j=0;
                   

                    for(var i=0;i< len;i++){
                        test = "robot/" + addLeadingZero(hierarchie_order_by_fin[i]["Robot_Num"]) +"/" + hierarchie_order_by_fin[i]["Nom"] ;//"robot/00/"+results.rows.item(i).Nom ;
                        //console.log("robot no"+i+" values=== "+test);
                        $.get(test, function(data) {
                            j++;
                           temp+=data;
                          // console.log("====j====="+j);
                           //console.log("====len====="+len);
                            if(j==33){
                                svgData(temp);
                            }
                        },dataType="text");
                        }
                        
                    }

                function svgData(temp){
                  alert(window.innerWidth);
                  var h = window.innerHeight-160;

                    var a = '<svg  xmlns="http://www.w3.org/2000/svg" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" style="height:'+h+'px;"  image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24000 18000" xmlns:xlink="http://www.w3.org/1999/xlink"> ' + temp + '</svg>';
                    console.log(a);
                   // alert(a);
                    //$(".message").html(a);
                }
                 


                 function errorCB(e)
                {
                    alert("some error"+ e );
                    $(".message").append("hierachie table error: " + e + " rows found.");
                    }
              /* function rmerrorCB(e)
                {
                    alert("rme error"+ e );
                     dbcopy();
                    
                     
                    }*/
               
