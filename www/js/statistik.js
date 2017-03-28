function readBest(){
	//Wenn noch kein bester Versuch gespeichert ist, dann wurde auch noch kein Spiel gespielt...gib
	var set_selected_spielerstatus = localStorage.getItem("spielerstatus");
	selected_status = JSON.parse(set_selected_spielerstatus);
	for(i=0;i<selected_status.selected.length; i++){
		if(selected_status.selected[i]=="true"){
			if(selected_status.besterVersuch[i]==0){
			alert ("Keine Statistik vorhanden");
			}
			else{
			window.document.location.href="statistik.html";
			}
		}
	}
}

function besterUndLetzterVersuch(){
		var einstellungen_herausholen = localStorage.getItem("einstellungen");
		obj = JSON.parse(einstellungen_herausholen);
		var bildset = obj.set;
		var spieler = obj.name;
		var besterVersuch;
		
		var set_selected_spielerstatus = localStorage.getItem("spielerstatus");
		selected_status = JSON.parse(set_selected_spielerstatus);
		for(i=0;i<selected_status.selected.length; i++){
			if(selected_status.selected[i]=="true"){
				besterVersuch = selected_status.besterVersuch[i];
			}
		}
		
		document.getElementById("best").innerHTML = besterVersuch;
		
}
