
  var listvalues = localStorage.getItem('formvalues'); 

  var finalvalue = JSON.parse(listvalues);

console.log("aekfksdkf caluclate");
  //console.log(JSON.stringify(finalvalue));
 //alert("caluclate.js");
   //console.log(flore_full);
	var userselcount = 0;	// Find number of components selected by the user
	var usrstore1 = new Array(); // user selected components
	var flag = false;
	var ntopcount = 0;
	var topval;
	var outputarr = new Array();

function carDB(store1){

    var carac;

    //$(".result").append( "storevalue= "+store1+"<br>");

	for (var i = 0; i < Object.keys(caract_full).length; i++)
	{
		carac =  caract_full[i]["ID_CARAC"];	
		usrstore1[carac] = store1.substr(i, 1); // convert the user selection string to array
		if (store1.substr(i, 1) == "1")
			userselcount++;
	}	
queryusrDB();

}

function queryusrDB()
{
	//alert("queryusrDB Called");
	var countif=0;
	
	//alert("count= "+countofone);
	//$(".result").append( "usrstore1= "+usrstore1.Tige_P+"<br>");

	//alert("usrstore1 "+ Object.keys(usrstore1).length);
	for (var key in usrstore1)
	{

		//alert("function clld");

			//$(".result").append( "key= "+key+"value= "+usrstore1[key]+"<br>");
		if (usrstore1[key] == "1")
		{
			countif++;
			//$(".result").append( "select * from flore where "+key+"=1");
			var eMpty =0;
			for(var te = 0; te < Object.keys(flore_full).length; te++){
						if(flore_full[te][key] == 1){
							eMpty++;
							var mnmn = flore_full[te]["Code"];
							perarray[mnmn]++ ;
							//$(".result").append( "key = "+key+" "+ flore_full[te][key]+"<br>");
						}
			}
			//alert("=============="+eMpty);
			//alert("countif ="+countif);
			//alert("userselcount ="+userselcount);
			if(countif == userselcount){
				flag = true;
			}
			
		}

	
	}
	
	toDo();
	

}
function toDo(){
	var per;

	for (var key in perarray)
	{
		//$(".end").append( " key= "+key+"value= "+perarray[key]+"<br>");
		if (perarray[key] > 0)
		{
			per = (perarray[key]/userselcount) * 100;
			perarray[key] = Math.round(per);
		}
		//$(".end").append( " key= "+key+"value= "+perarray[key]+"<br>");
	}

	 outputarr = perarray.slice();
	
	
	// Sort the percentage array in descending order
	var sortable = [];

	for (var spename in perarray)
      sortable.push([spename, perarray[spename]])

	sortable.sort(function(a, b) {
		return b[1] - a[1]
	});

	for (var key in sortable)
	{

		//$(".end").append( " key= "+key+"value= "+sortable[key]+"<br>");
		//$(".end").append( " key= "+key+"value= "+sortable[key][0]+"<br>");
		topval =sortable[key][1];
		//print $topval;
		//$(".end").append( "topval ="+topval);

		break;
		
	}


	for (var key in sortable)
	{
		if (sortable[key][1] == topval)
			ntopcount++;
	}

	//alert("called");
	//$("#progress").val(topval);
	//alert($("#progress").val());

$(".end").html("<p>" +  ntopcount + " espèces à </p>");

var values = localStorage.getItem('percentage'); 

var value = JSON.parse(values);

value.count = ntopcount;

value.val = topval;
//al = 0;
//sim = setInterval(function() { progressSim(ntopcount,topval); }, 50);


localStorage.setItem('percentage', JSON.stringify(value));


//resultss(outputarr);

}

function errorflorObjCB(e){
   alert("some error"+ e );
$(".message").append("hierachie table error: " + e + " rows found.");
                    }