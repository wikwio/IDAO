
  var listvalues = localStorage.getItem('formvalues'); 

  var finalvalue = JSON.parse(listvalues);

console.log("aekfksdkf caluclate");
 
	var userselcount = 0;	
	var usrstore1 = new Array(); 
	var flag = false;
	var ntopcount = 0;
	var topval;
	var outputarr = new Array();

function carDB(store1){

    var carac;

	for (var i = 0; i < Object.keys(caract_full).length; i++)
	{
		carac =  caract_full[i]["ID_CARAC"];	
		usrstore1[carac] = store1.substr(i, 1);
		if (store1.substr(i, 1) == "1")
			userselcount++;
	}	
queryusrDB();

}

function queryusrDB()
{
	var countif=0;

	for (var key in usrstore1)
	{

		if (usrstore1[key] == "1")
		{
			countif++;
			var eMpty =0;
			for(var te = 0; te < Object.keys(flore_full).length; te++){
						if(flore_full[te][key] == 1){
							eMpty++;
							var mnmn = flore_full[te]["Code"];
							perarray[mnmn]++ ;
						}
			}
	
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
		if (perarray[key] > 0)
		{
			per = (perarray[key]/userselcount) * 100;
			perarray[key] = Math.round(per);
		}
	}

	 outputarr = perarray.slice();
	
	var sortable = [];

	for (var spename in perarray)
      sortable.push([spename, perarray[spename]])

	sortable.sort(function(a, b) {
		return b[1] - a[1]
	});

	for (var key in sortable)
	{

	
		topval =sortable[key][1];
		break;
		
	}


	for (var key in sortable)
	{
		if (sortable[key][1] == topval)
			ntopcount++;
	}

	
$(".end").html("<p>" +  ntopcount + " espèces à </p>");

var values = localStorage.getItem('percentage'); 

var value = JSON.parse(values);

value.count = ntopcount;

value.val = topval;

localStorage.setItem('percentage', JSON.stringify(value));

}
