 
  var listvalues = localStorage.getItem('formvalues'); 

  var finalvalue = JSON.parse(listvalues);

  var cname  = finalvalue.txtquest;

  var store  = finalvalue.txtstore;

  var elemflag = 0;

  var charvalues = [];  

  var charfound = 0;
  var is_append=false;
  var charpos;
  var no_of_car;
  var start;
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
 
   document.addEventListener("deviceready", onDeviceReady, false);

                function onDeviceReady() {

                  show();                      
                }
              

                function show(){

                  var new_arr = [];
                  for(var i=0; i < Object.keys(object_asc).length; i++){
                        if(object_asc[i]['Objet'].toLowerCase() == cname.toLowerCase()){
                          new_arr.push(object_asc[i]);
                        }
                  }

                    var len= Object.keys(new_arr).length;
                    console.log("length value  "+ len);

                    var questname='';
                    var temp='';

                    if( len == 1) {

                      if( new_arr[0]["Contrainte"] == null) {

                        questname = "quest/" +  new_arr[0]["Popup"] ;
                        console.log("robot no values=== "+questname);
                        temp = '<object id="svgquest" type="image/svg+xml" data="'+questname+'" width="100%" height="100%" ><param name="src" value="'+questname+'" ></object>';
                        $(".selectQuestWrapper").html(temp);

                        no_of_car = new_arr[0]["Nb_Car"];
                        start = new_arr[0]["Index_Car"];
                    }
                  }

                 else
                  {
                    for (var i = 0; i < len; i++)
                    {
                      if (new_arr[i]["Contrainte"] != null)
                      {       
                        if (char_val[new_arr[i]["Contrainte"]] == 1)
                        {
                          questname = "quest/" + new_arr[i]["Popup"] ;

                           temp = '<object id="svgquest" type="image/svg+xml" data="'+questname+'" width="100%" height="100%" ><param name="src" value="'+questname+'" ></object>';
                          $(".selectQuestWrapper").html(temp);
                     
                          no_of_car = new_arr[i]["Nb_Car"];
                          start = new_arr[i]["Index_Car"];
                          break;
                        }
                      }
                      else
                      {
                        questname = "quest/" + new_arr[i]["Popup"];

                        temp = '<object id="svgquest" type="image/svg+xml" data="'+questname+'" width="100%" height="100%" ><param name="src" value="'+questname+'" ></object>';
                        $(".selectQuestWrapper").html(temp);
                   
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
              
                       var cid = char_val_arr[charpos];
                        var a = document.getElementById("svgquest");
                        a.addEventListener("load",function(){
                        var svgDoc = a.contentDocument; 
                        var bbox = svgdoc.getElementById(cid).getBBox();  
                        var node = svgdoc.getElementById("imgtick");
                        
                        },false);
                        return false;
                      }
                    
                        
                }

              
                  var listvalues = localStorage.getItem('formvalues'); 
                  var finalvalue = JSON.parse(listvalues);
                  finalvalue.txtstore = store;
                  localStorage.setItem('formvalues', JSON.stringify(finalvalue));
                
                 
                 function errorObjCB(e){
                    alert("some error"+ e );
                    $(".message").append("hierachie table error: " + e + " rows found.");
                    }