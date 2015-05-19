 

  var listvalues = localStorage.getItem('formvalues'); 

  var finalvalue = JSON.parse(listvalues);

  var questname  = finalvalue.txtquest;

  var charname = finalvalue.txtcharname;

  var appstr  = finalvalue.txtappstr;

  var store = finalvalue.txtstore;

  var no_of_car;

  var usrstore = [];

  var perarray = new Array(); 


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
    usrstore[i] = store.substr( i, 1);
    } 
 
   document.addEventListener("deviceready", onDeviceReady, false);

                function onDeviceReady() {
                    $(".loading-icon").show();
                     extractFromObjDB();

                }
                function extractFromObjDB(){
                     var db = window.sqlitePlugin.openDatabase({name: "wikwio_idao.db"});
                     db.transaction(queryObjDB, errorObjCB);
                     db.transaction(queryroboDB, errorObjCB);

                }

               
                
                function queryObjDB(tx) {
                     tx.executeSql('select * from objets_fic where Objet="'+questname+'"', [], show, errorObjCB);
                }

                function show(tx,results){

                    var len= results.rows.length;
                    console.log("length value  "+ len);
                    userval = char_val[charname];
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

                        var new_temp = parseInt(start) + parseInt(no_of_car);
                    
                        var user_temp;
                      for (var i =  start; i < (new_temp) - 1; i++)
                        {
                          user_temp = parseInt(usrstore[i]);
                          dependancy  +=  user_temp ;
                          console.log(dependancy);
                          if (usrstore[i] == "1"){
                             depval = i;
                          }
                        }
                    
                        if (dependancy != 0) 
                          {
                            desloop(depval);
                          }

                          if (presentflag == 1) {
                             usrstore[userval] = "0";  
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
                            usrstore[userval] = "1";  
                          }

                          store = "";
                      for ( var i=0; i< no_state; i++) {

                         store += usrstore[i];
                       }
                        var listvalues = localStorage.getItem('formvalues'); 

                        var finalvalue = JSON.parse(listvalues);

                        finalvalue.txtstore = store;

                        var appstrval =  localStorage.getItem('appstrvalue'); 
                        var appstrvalue = JSON.parse(appstrval);

                        var newappstr = appstrvalue.txtappstr;

                        finalvalue.txtappstr = newappstr;
                        localStorage.setItem('formvalues', JSON.stringify(finalvalue));

                        for (var i = 0; i < Object.keys(flore_asc).length; i++){
                            perarray[flore_asc[i]["Code"]] = 0;
                          }
                          carDB(store);

                 }

                 function desloop(carval){

                  var new_charname;
                  var objetName;
                   var new_arr = [];
                   var new_arr1 = [];
                  for(var i=0; i < Object.keys(caract_full).length; i++){
                        if(caract_full[i]['NUM'] == carval){
                          new_arr.push(caract_full[i]);
                        }
                  }

                        var leng= Object.keys(new_arr).length;

                       if( leng == 1) {

                         new_charname = new_arr[0]["ID_CARAC"];

                       }

                      for(var j=0; j<Object.keys(descendance_full).length;j++){

                        if(descendance_full[j]["ID_CARAC"] == new_charname){

                          objetName = descendance_full[j]["Objet"];

                          for(var k=0; k < Object.keys(object_full).length; k++){

                            if(object_full[k]["Objet"] == objetName){

                              new_arr1.push(object_full[k]);
                              k=Object.keys(object_full).length;

                            }
                            
                          }

                          var temp_var = parseInt(new_arr1[0]["Index_Car"]) + parseInt(new_arr1[0]["Nb_Car"]);

                          for (var l = new_arr1[0]["Index_Car"]; l <=  (temp_var)  - 1; l++)
                            {
                              usrstore[l]  = 0;
                              desloop(l);
                            }   

                        }
                      }

                 }

                function queryroboDB(tx){

                   for (var i = 0; i < no_robot; i++)
                  {
                      flag = false;
                      tx.executeSql('select * from hierarchie where Robot_Num="'+i+'"', [],redrawquery,errorObjCB);

                  }
                 
                } 

                function redrawquery(tx,values){

                  count++;
                   var no_records = values.rows.length;
                        var j = 0;
                        var flag = 0;
                        var path;
                        while ( j < no_records && flag == 0 && no_records > 1)
                          {
                            var k = 0;
                            while ( k < no_constraints && flag == 0)
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
                          if(count == no_robot){
                            getsvgData();
                          }
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
                            },dataType="text")
                           .fail(function() {
                                 j++;
                                 });
                         }(i));
                        }
                      }
                
                function svgData(temp){
                    $(".loading-icon").hide();
                     var a = window.innerHeight;
                      var h;
                      var style_h = '';
                      if(a>700){
                          h= a-60;
                          style_h = 'style="height:'+h+'px;"';
                      }else {
                          h = a;
                          style_h = 'style="height:'+h+'px;"';

                      }
                    $(".selectRedrawWrapper").html('<svg  xmlns="http://www.w3.org/2000/svg" id="homesvg" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" '+style_h+' image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24000 18000" xmlns:xlink="http://www.w3.org/1999/xlink"> ' + temp + '</svg>')
                 active_touch();
                  updateProcess(ntopcount,topval);
                }
                 
                 function errorObjCB(e){
                    alert("some error"+ e );
                    $(".message").append("hierachie table error: " + e + " rows found.");
                    }