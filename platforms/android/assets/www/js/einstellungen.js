function storeCardSets(){
	var myObj, myJSON, obj;
	//Einstellungen von HTML holen
	var playset = document.getElementById("mySelect").value;
	var store = document.getElementById("mySelect3").value;
	
	//JSON Code store Data, wenn auch speichern Button geklickt wurde
	myObj = { "set":playset, "name":store };
	myJSON = JSON.stringify(myObj);
	localStorage.setItem("einstellungen", myJSON);
	
	
	var set_selected_spielerstatus = localStorage.getItem("spielerstatus");
	selected_status = JSON.parse(set_selected_spielerstatus);
	/*Gehe durch und schaue auf welchem Punkt vom Array wir uns befinden -->
	also schaue, wo im Array der Spieler und das Set übereinstimmen, damit wir wissen,
	welche Wert wir auf true setzen müssen; alle anderen müssen auf false gesetzt werden
	*/
	
	//var richtige_Stelle_im_Array;
	for (i = 0; i < selected_status.name.length; i++) {
    	if(store == selected_status.name[i] && playset == selected_status.set[i]){
			selected_status.selected[i] = "true";
		}
		else{
			selected_status.selected[i] = "false";
		}
	} 
	
	selecting = JSON.stringify(selected_status);
	localStorage.setItem("spielerstatus", selecting);

}

function loadEinstellungen(){
	//Für die richtige Anzeige der DropDowns, welche Speichereinstellung bereits eingestellt ist
	var einstellungen = localStorage.getItem("einstellungen");
	obj = JSON.parse(einstellungen);
	var setauswahl = obj.set;
	var playernr = obj.name;
	document.getElementById("mySelect").value = setauswahl;
	document.getElementById("mySelect3").value = playernr;
}