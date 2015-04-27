 
 //alert("rawdefault-js");

  var listvalues = localStorage.getItem('squestvalues'); 

  var finalvalue = JSON.parse(listvalues);

  var questname  = finalvalue.txtquest;

  var charname = finalvalue.txtcharname;

  var appstr  = finalvalue.txtappstr;

  var store = finalvalue.txtstore;

 // var charvalues = [];  

  var char_val = [];  

  var no_of_car;

  var usrstore = [];

  var str = "";

  var userval;

  var flag;

  var count = 0;

  if(store.length == 1){

    for ( var i=0; i<no_state; i++){

      store += "0";
   }
  }
 

  for ( var i=0; i<no_state; i++){
  //print  substr($store, $i, 1);
    usrstore[i] = store.substr( i, 1);
    }
   //alert("this is cname= "+cname+"this is another "+ hname);
 
 
   document.addEventListener("deviceready", onDeviceReady, false);

                function onDeviceReady() {
                    //alert("select quest");
                    $(".loading-icon").show();
                     extractFromObjDB();

                }
                function extractFromObjDB(){
                     var db = window.sqlitePlugin.openDatabase({name: "wikwio_idao.db"});
                     //alert("query db");
                     //db.transaction(querycarDB, errorObjCB);
                     caract();
                     db.transaction(queryObjDB, errorObjCB);
                     db.transaction(queryflorDB, errorflorObjCB);
                     db.transaction(queryroboDB, errorObjCB);

                }

               
                 function caract(){

                  var carac;
                  //alert("select length "+len);
                    for (var i = 0; i < Object.keys(caract_full).length; i++)
                      {
                        carac = caract_full[i]["ID_CARAC"];  
                        char_val[carac] = caract_full[i]["NUM"];
                      }
                       //$(".end").append( " char_val= "+char_val+"<br>");
                 }

                function queryObjDB(tx) {
                     tx.executeSql('select * from objets_fic where Objet="'+questname+'"', [], show, errorObjCB);
                    // console.log("querydb method called===--==--");
                     //alert("queryDB found");
                }

                function show(tx,results){

                    var len= results.rows.length;
                    alert("length value  "+ len);
                    console.log("length value  "+ len);
                    //alert("table rawdefault found"); 
                    userval = char_val[charname];
                    //console.log("uservalllllll"+userval);
                    var start;
                    var presentflag;
                    var dependancy = 0 ;
                    var depval = -1;
                    

                    if (len > 0)
                      {
                        no_of_car = results.rows.item(0).Nb_Car; 
                        start = results.rows.item(0).Index_Car;
                      }

                      if (usrstore[userval] == "1") {
                          presentflag = 1;
                      }

                        // find whether descendance (dependancy of layers) has to be eliminated or not 
                      for (var i =  start; i < (start + no_of_car) - 1; i++)
                        {
                          
                          dependancy = Number(dependancy) + Number(usrstore[i]) ;
                          if (usrstore[i] == "1"){
                             depval = i;
                          }
                        }
                         //console.log("dependency========"+dependancy);

                        /*if (dependancy != 0) // userselection already there in the same quest
                          {
                            desloop(depval);
                          }*/

                          // If the character is already selected, toggle it.
                          if (presentflag) {

                             usrstore[userval] = "0";  // deselect the character
                           }
                          else
                          {
                            var incrval = 0;
                            while (incrval < no_of_car)
                            {
                              usrstore[start] = "0";
                              start++;
                              incrval++;
                            }
                            // Mark the user selected character as "1"      
                            usrstore[userval] = "1";  
                          }

                          store = "";
                      for ( var i=0; i< no_state; i++) {

                         store += usrstore[i];
                       }
                        var listvalues = localStorage.getItem('formvalues'); 

                        var finalvalue = JSON.parse(listvalues);

                        finalvalue.txtstore = store;
                        localStorage.setItem('formvalues', JSON.stringify(finalvalue));

                 }

                function queryroboDB(tx){

                   for (var i = 0; i < no_robot; i++)
                  {
                    //alert("hi");
                      flag = false;
                      tx.executeSql('select * from hierarchie where Robot_Num="'+i+'"', [],redrawquery,errorObjCB);

                  }
                 
                } 

                function redrawquery(tx,values){

                  count++;
                   var no_records = values.rows.length;
                   //alert("no_records= "+ no_records);
                        var j = 0;
                        var flag = 0;
                        var path;
                        while ( j < no_records && flag == 0 && no_records > 1)
                          {
                            var k = 0;
                            while ( k < no_constraints && flag == 0)
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
                          if(count == no_robot){
                            getsvgData();
                          }
                      }

                      function getsvgData(){
                        // alert(typeof(str));
                       //console.log("str value = "+str);
                        var myarr = str.split("|");
                        //console.log("myarray= "+myarr.toString())
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
                    $(".loading-icon").hide();
                     var a = window.innerHeight;
                      //alert(typeof(a));
                     // alert(a);
                      var h;
                      if(a>700){
                          h= a-100;
                          //alert("hval"+h);
                      }else {
                          h = a;
                      }
                    $(".selectRedrawWrapper").html('<svg  xmlns="http://www.w3.org/2000/svg" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" style="height:'+h+'px;" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24000 18000" xmlns:xlink="http://www.w3.org/1999/xlink"> ' + temp + '</svg>')
                }
                 




                 function errorObjCB(e){
                    alert("some error"+ e );
                    $(".message").append("hierachie table error: " + e + " rows found.");
                    }