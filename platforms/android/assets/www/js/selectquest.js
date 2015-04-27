 
 //alert("selectquet-js");

  var listvalues = localStorage.getItem('formvalues'); 

  var finalvalue = JSON.parse(listvalues);

  var cname  = finalvalue.txtquest;

  //alert(cname);

  //var appstr = finalvalue.txtappstr;

  var store  = finalvalue.txtstore;

  var elemflag = 0;

  //alert(store.length);

  var charvalues = [];  

  //var char_val = new Array();  
  var charfound = 0;
  var is_append=false;
  var charpos;
  var no_of_car;
  var start;
 //alert("alert sqe");
  var usrstore = [];

  if(store.length > 1){

    store  = finalvalue.txtstore;
    elemflag = 1;
  }
  else {

    store = "";
    elemflag = 0;

    for (var i=0; i<no_state; i++){
        store += "0";
    }
  }
   //alert("this is cname= "+cname);
   //extractFromObjDB();
    
 
   document.addEventListener("deviceready", onDeviceReady, false);

                function onDeviceReady() {
                    //alert("select quest");

                    extractFromObjDB();
                      
                }
                
                 function extractFromObjDB(){

                    /*var carac;
                   // var charval = new Array();  
                        for ( var i = 0; i < Object.keys(caract_full).length; i++)
                        {
                          carac = caract_full[i]["ID_CARAC"];  
                          char_val[carac] = caract_full[i]["NUM"];
                         // console.log(charval);
                        } */
                        //console.log('Size of object: '+ Object.keys(my_object).length);

                     //   $(".result").append("this is var char result "+char_val+"<br>");
                       //$(".result").append("this is var char length result "+Object.keys(char_val).length+"<br>");
                      // $(".result").append("this is Gramineen result "+char_val.Gramineen+"<br>"); 
                      // $(".result").append("this is Fru_biv result "+char_val.Fru_biv+"<br>");
                     //  $(".result").append("this is var size result "+char_val.size()+"<br>");

                     show();
                 }

                function queryObjDB(tx) {
                     tx.executeSql('select * from objets_fic where Objet="'+cname+'"', [], show, errorObjCB);
                     console.log("querydb method called===--==--");
                     //alert("queryDB found");
                }

                function show(){

                  //console.log(char_val);
                  var new_arr = [];
                  for(var i=0; i < Object.keys(object_asc).length; i++){
                        if(object_asc[i]['Objet'].toLowerCase() == cname.toLowerCase()){
                          new_arr.push(object_asc[i]);
                        }
                  }

                    var len= Object.keys(new_arr).length;
                    console.log("length value  "+ len);

                    //console.log(new_arr);
                    //return false;
                   // alert("table found"); 
                    var questname='';
                    var temp='';
                    //var j=0;
                   

                    if( len == 1) {

                      if( new_arr[0]["Contrainte"] == null) {

                        questname = "quest/" +  new_arr[0]["Popup"] ;//"robot/00/"+results.rows.item(i).Nom ;
                        console.log("robot no values=== "+questname);
                        //alert("hi");
                        temp = '<object id="svgquest" type="image/svg+xml" data="'+questname+'" width="100%" height="100%" ><param name="src" value="'+questname+'" ></object>';
//alert(temp)           
                          //alert(temp.find('svg'));
                        $(".selectQuestWrapper").html(temp);

                       /* $.get(questname, function(data) {
                           temp+=data;
                           $(".selectQuestWrapper").html(temp);
                           is_append=true;
                          
                        },dataType="text");*/
                        no_of_car = new_arr[0]["Nb_Car"];
                        start = new_arr[0]["Index_Car"];
                    }
                  }

                 else
                  {
                    for (var i = 0; i < len; i++)
                    {
                      if (new_arr[i]["Contrainte"] != null)
                        // check whether the constraint value in array is 1
                      {       
                        if (char_val[new_arr[i]["Contrainte"]] == 1)
                        {
                          questname = "quest/" + new_arr[i]["Popup"] ;

                           temp = '<object id="svgquest" type="image/svg+xml" data="'+questname+'" width="100%" height="100%" ><param name="src" value="'+questname+'" ></object>';
//alert(temp)
                          $(".selectQuestWrapper").html(temp);
                            /*$.get(questname, function(data) {
                              temp+=data;
                              $(".selectQuestWrapper").html(temp);
                              is_append=true;
                          
                        },dataType="text");*/

                          no_of_car = new_arr[i]["Nb_Car"];
                          start = new_arr[i]["Index_Car"];
                          break;
                        }
                      }
                      else
                      {
                        questname = "quest/" + new_arr[i]["Popup"];

                        temp = '<object id="svgquest" type="image/svg+xml" data="'+questname+'" width="100%" height="100%" ><param name="src" value="'+questname+'" ></object>';
//alert(temp)
                        $(".selectQuestWrapper").html(temp);
                        /*$.get(questname, function(data) {
                              temp+=data;
                              $(".selectQuestWrapper").html(temp);
                                    is_append=true;

                        },dataType="text");*/
                         no_of_car = new_arr[i]["Nb_Car"];
                         start = new_arr[i]["Index_Car"];
                        break;
                      }     
                    }
                  }


                  for (var i=0; i<no_state; i++){
                    usrstore[i] = store.substr( i, 1);
                  }
                  
                  if (elemflag == 1)
                  {
                    
                    var incrval = 0;
                    while (incrval < no_of_car)
                    {
                      if (usrstore[start] == "1")
                      {
                         charpos = start;
                        charfound = 1; 
                        break;
                      }
                      start++;
                      incrval++;
                    }
                  }


                  
                   if (charfound == 1)
                      {
                       //alert("charfound");
                       //alert(char_val_arr[charpos]);

                       var cid = char_val_arr[charpos];
                        var a = document.getElementById("svgquest");
                        //alert(a);
                        //it's important to add an load event listener to the object, as it will load the svg doc asynchronously
                        a.addEventListener("load",function(){
                        var svgDoc = a.contentDocument; //get the inner DOM of alpha.svg
                        //alert(svgdoc.getElementById(cid));
                        var bbox = svgdoc.getElementById(cid).getBBox();  
                        //alert(bbox);
                        //return false;
                        var node = svgdoc.getElementById("imgtick");
                        //alert(node);
                        //markselected(cid,svgDoc);
                        // var delta = svgDoc.getElementById("delta"); //get the inner element by id
                        //delta.addEventListener("mousedown",function(){alert('hello world!')},false);    //add behaviour
                        },false);
                        return false;
                      }
                    
                        
                }

                //alert("new store " +store)
               
                /*var replacevalues = { "txtstore": store, "txtappstr": appstr , "txtcharname": "", "txtquest":cname}
                localStorage.setItem('squestvalues', JSON.stringify(replacevalues));*/
                //alert(store);
                //alert(cname);
                  var listvalues = localStorage.getItem('formvalues'); 
                  var finalvalue = JSON.parse(listvalues);
                  //finalvalue.txtquest = cname;
                  finalvalue.txtstore = store;
                  //finalvalue.txtappstr = appstr;
                  localStorage.setItem('formvalues', JSON.stringify(finalvalue));
                
                 


                 function errorObjCB(e){
                    alert("some error"+ e );
                    $(".message").append("hierachie table error: " + e + " rows found.");
                    }