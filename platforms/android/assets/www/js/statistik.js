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

function statistikWerte(){
		var einstellungen_herausholen = localStorage.getItem("einstellungen");
		obj = JSON.parse(einstellungen_herausholen);
		var bildset = obj.set;
		spieler = obj.name;
		var erstes_mal_in_schleife = 0;
		
		var set_statistik_tabelle = localStorage.getItem("statistik");
		statistik_tabelle = JSON.parse(set_statistik_tabelle);
						
		for(b = 0; b < statistik_tabelle.names.length; b++){
			if(statistik_tabelle.names[b] == spieler && statistik_tabelle.sets[b] == bildset){
			//Wenn das erste mal in der Schleife
					if(erstes_mal_in_schleife == 0){
					wert5 = statistik_tabelle.spielpunkte[b];
					wert4 = statistik_tabelle.spielpunkte[b+1];
					wert3 = statistik_tabelle.spielpunkte[b+2];
					wert2 = statistik_tabelle.spielpunkte[b+3];
					wert1 = statistik_tabelle.spielpunkte[b+4];
					erstes_mal_in_schleife = 1;
					}
			}
		}
}

function datenloeschen(){
		var einstellungen_herausholen = localStorage.getItem("einstellungen");
		obj = JSON.parse(einstellungen_herausholen);
		var bildset = obj.set;
		var spieler = obj.name;
		var erstes_mal_in_schleife = 0;
		
		var set_statistik_tabelle = localStorage.getItem("statistik");
		statistik_tabelle = JSON.parse(set_statistik_tabelle);
		
		var set_selected_spielerstatus = localStorage.getItem("spielerstatus");
		selected_status = JSON.parse(set_selected_spielerstatus);
					
		var loeschen=confirm("Daten wirklich entfernen?");
		if (loeschen == true){
			for(b = 0; b < statistik_tabelle.names.length; b++){
			if(statistik_tabelle.names[b] == spieler && statistik_tabelle.sets[b] == bildset){
					if(erstes_mal_in_schleife == 0){
					statistik_tabelle.spielpunkte[b] = 0;
					statistik_tabelle.spielpunkte[b+1] = 0;
					statistik_tabelle.spielpunkte[b+2] = 0;
					statistik_tabelle.spielpunkte[b+3] = 0;
					statistik_tabelle.spielpunkte[b+4] = 0;
					erstes_mal_in_schleife = 1;
					}
			}
			}
			
			for(i=0;i<selected_status.selected.length; i++){
			if(selected_status.selected[i]=="true"){
					selected_status.besterVersuch[i] = 0;
			}
			}
			alert("Daten wurden erfolgreich entfernt");
			select_loeschen = JSON.stringify(statistik_tabelle);
			localStorage.setItem("statistik", select_loeschen);
			select_versuch = JSON.stringify(selected_status);
			localStorage.setItem("spielerstatus", select_versuch);
			window.document.location.href = "index.html";
		}
}
