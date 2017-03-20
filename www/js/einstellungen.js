function storeCardSets(){
	var myObj, myJSON, obj;
	var fruits = document.getElementById("mySelect").value;
	var store = document.getElementById("mySelect3").value;
	
	//JSON Code store Data
	myObj = { "set":fruits, "name":store };
	myJSON = JSON.stringify(myObj);
	localStorage.setItem("einstellungen", myJSON);
}