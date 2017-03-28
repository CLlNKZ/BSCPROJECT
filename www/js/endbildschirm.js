function PunkteAusgabe(){
	
		var einstellungen_herausholen = localStorage.getItem("einstellungen");
		obj = JSON.parse(einstellungen_herausholen);
		var bildset = obj.set;
		var spieler = obj.name;
		var letzerVersuch;
		var erstes_mal_in_schleife = 0;
		var image;
		
		var set_statistik_tabelle = localStorage.getItem("statistik");
		statistik_tabelle = JSON.parse(set_statistik_tabelle);
						
		for(b = 0; b < statistik_tabelle.names.length; b++){
			if(statistik_tabelle.names[b] == spieler && statistik_tabelle.sets[b] == bildset){
			//Wenn das erste mal in der Schleife
					if(erstes_mal_in_schleife == 0){
					letzerVersuch = statistik_tabelle.spielpunkte[b];
					erstes_mal_in_schleife = 1;
					}
			}
		}
		
		document.getElementById("letzterVersuch").innerHTML = letzerVersuch;
		
		
}