global $store, $_GLOBALS, $conn;	

		
	$userselcount = 0;	// Find number of components selected by the user
	$usrstore = array(); // user selected components
	$perarray = array(); // percentage for each species

	$query = "select * from flore order by Espece";
	$data = $conn->select($query, 'OBJECT');
	
		// Initialize the percentage array to 0
	for ($i = 0; $i < sizeof($data); $i++)
		$perarray[$data[$i]->Code] = 0;
	
		// Get the caracters		
	$query = "select * from caracteres";
	$data = $conn->select($query, 'OBJECT');
	for ($i = 0; $i < sizeof($data); $i++)
	{
		$carac =  $data[$i]->ID_CARAC;	
		$usrstore[$carac] = substr($store, $i, 1); // convert the user selection string to array
		if (substr($store, $i, 1) == "1")
			$userselcount++;
	}	
	

	foreach ($usrstore as $key=>$val)
	{
		if ($val == "1")
		{
			$query = "select * from flore where $key=1";
			$data = $conn->select($query, 'OBJECT');
			if (sizeof($data) == 1)
				$perarray[$data->Code]++;
			else
				for ($i = 0; $i < sizeof($data) ; $i++)
					$perarray[$data[$i]->Code]++;
		}
	}

	foreach ($perarray as $key=>$val)
	{
		if ($val > 0)
		{
			$per = ($val/$userselcount) * 100;
			$perarray[$key] = round($per);
		}
	}
	
	$outputarr = $perarray;
	
	arsort($perarray); // Sort the percentage array in descending order
		
	// Get the top value
	
	foreach ($perarray as $key=>$val)
	{
		$topval = $val;
		break;
	}	
	
	// Find number of species with top value
	$ntopcount = 0;
	foreach ($perarray as $key=>$val)
	{
		if ($val == $topval)
			$ntopcount++;
	}
	
	$_GLOBALS['topcount'] = $ntopcount;
	$_GLOBALS['pertop']= $topval;
	//echo "<p class='result'>" . $ntopcount . " espèces à " . $topval . "%</p>";
	return $outputarr;




	var arrOfObj = [
{
"Name": "Zak",
"Age": 25
},
{
"Name": "Adel",
"Age": 38
},
{
"Name": "Yori",
"Age": 28
}
];

// sort an array of objects
/*
arrOfObj.sort(function (a, b) {
return a.Name > b.Name;
});
*/

sortArrOfObjectsByParam(arrOfObj, "Name");
alert("ASCENDING: " + arrOfObj[0].Name + ", " + arrOfObj[1].Name + ", " + arrOfObj[2].Name);

sortArrOfObjectsByParam(arrOfObj, "Name", false);
alert("DECENDING: " + arrOfObj[0].Name + ", " + arrOfObj[1].Name + ", " + arrOfObj[2].Name);


/*
Sorts an array of objects (note: sorts the original array and returns nothing)

@arrToSort array javascript array of objects
@strObjParamToSortBy string name of obj param to sort by, and an 
@sortAsc bool (optional) sort ascending or decending (defaults to true and sorts in ascending order)
returns void because the original array that gets passed in is sorted
*/
function sortArrOfObjectsByParam(arrToSort /* array */, strObjParamToSortBy /* string */, sortAscending /* bool(optional, defaults to true) */) {
if(sortAscending == undefined) sortAscending = true; // default to true

if(sortAscending) {
arrToSort.sort(function (a, b) {
return a[strObjParamToSortBy] > b[strObjParamToSortBy];
});
}
else {
arrToSort.sort(function (a, b) {
return a[strObjParamToSortBy] < b[strObjParamToSortBy];
});
}
}