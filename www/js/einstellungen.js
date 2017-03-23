function storeCardSets(){
	var myObj, myJSON, obj;
	//Einstellungen von HTML holen
	var playset = document.getElementById("mySelect").value;
	var store = document.getElementById("mySelect3").value;
	
	//JSON Code store Data
	myObj = { "set":playset, "name":store };
	myJSON = JSON.stringify(myObj);
	localStorage.setItem("einstellungen", myJSON);
}

function loadEinstellungen(){
	var einstellungen = localStorage.getItem("einstellungen");
	obj = JSON.parse(einstellungen);
	var setauswahl = obj.set;
	var playernr = obj.name;
	document.getElementById("mySelect").value = setauswahl;
	document.getElementById("mySelect3").value = playernr;
}