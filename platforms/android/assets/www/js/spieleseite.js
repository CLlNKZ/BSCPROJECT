window.name = "DoubleCardOn";

var feldanzahl, zeilenanzahl, spaltenanzahl, anzahl_bildpaare;
feldanzahl = 6;
zeilenanzahl = 2;
spaltenanzahl = 3;
anzahl_bildpaare=3;

var timer_start, timer_ende, timer_gestartet = "no";
var pic1, pic2;

//Merken welches Bild das erste bzw. zweite war, damit der Orange Rand zugeordnet werden kann
var image_number_first_click, image_number_second_click;

//Wird hochgezählt, damit man weiß, wieviele Versuche notwendig waren, um alle Paare richtig zuzuordnen
var anzahl_versuche=0;

//Später für Überprüfung ob die Anzahl der richtig ausgewählten Paare gleich 3 ist
var richtig_angeklickte_paare=0;

//Je nachdem, welches Bildset ausgewählt ist, muss dies in die Variable bildset hineingeschrieben werden (der Ordner)
var bildsets = localStorage.getItem("einstellungen");
	obj = JSON.parse(bildsets);
	var bildset = obj.set;
	var playernr = obj.name;

var firstimage=0;
var image_number;

var first_clicked_image=0;
var allow_click=1;

var bild=new Array(); 

var datensatz_bilder = new Array(1,2,3,4,5,6,7,8,9,10);
var rnd1, rnd2, rnd3;

rnd1 = Math.floor((Math.random() * datensatz_bilder.length) + 1);  

do{
rnd2 = Math.floor((Math.random() * datensatz_bilder.length) + 1); 
}
while(rnd1 == rnd2);

do{
rnd3 = Math.floor((Math.random() * datensatz_bilder.length) + 1); 
}
while(rnd3 == rnd2 || rnd3 == rnd1);

bild[0]=new Array(2); 
bild[0]["A"]=new Image;
bild[0]["A"].src="img/" + bildset + "/" + rnd1 + "_1.png"; 
bild[0]["B"]=new Image; 
bild[0]["B"].src="img/" + bildset + "/" + rnd1 + "_2.png"; 

bild[1]=new Array(2); 
bild[1]["A"]=new Image; 
bild[1]["A"].src="img/" + bildset + "/" + rnd2 + "_1.png"; 
bild[1]["B"]=new Image; 
bild[1]["B"].src="img/" + bildset + "/" + rnd2 + "_2.png"; 

bild[2]=new Array(2); 
bild[2]["A"]=new Image; 
bild[2]["A"].src="img/" + bildset + "/" + rnd3 + "_1.png"; 
bild[2]["B"]=new Image; 
bild[2]["B"].src="img/" + bildset + "/" + rnd3 + "_2.png"; 

var covered = new Image;
covered.src="img/icons/right.png"; 

var image_numbers = new Array(); 
for (var t=0; t < feldanzahl; t++) { 
image_numbers[t]=new Array(); 
image_numbers[t]["zahl"]=t; 
image_numbers[t]["status"]=0; 
}

var temp_numbers= new Array(); 

/*----------------------------------------------------function init() start-------------------------------------------------*/

function init() {
for (var i=0; i < feldanzahl; i++) { 
temp_numbers[i]=i; 
}

for (var i=0; i < feldanzahl; i++) { 
	do{
	random_number = Math.round(Math.random() * (feldanzahl)); 
	} 
	while (random_number > (feldanzahl-1));
	
 	var temp=temp_numbers[i]; 
 	temp_numbers[i]=temp_numbers[(random_number)]; 
 	temp_numbers[(random_number)]=temp; 
} 

for (i=0; i < feldanzahl; i++) { 
 	image_numbers[i]["zahl"]=temp_numbers[i]; 
} 
}	
/*------------------------------------------------function init() ende------------------------------------------*/
	
	
	
	function nothing(pic1,pic2) { 
		allow_click=1; 
	}
	
	//Überfülle covered.src mit den Bildern
	function anfang(x,y){
		image_number=(x*spaltenanzahl+y);
 		if ((firstimage==0) && (image_numbers[image_number]["status"]<3)) {
		pic1=Math.floor(image_numbers[image_number]["zahl"]/2);  
		if ((image_numbers[image_number]["zahl"] % 2)==0) {
			window.document.images[image_number].src=bild[pic1]["B"].src; 
			}
  		else window.document.images[image_number].src=bild[pic1]["A"].src;
 		}
	}

	function clickIt(x,y) {
	
	image_number=(x*spaltenanzahl+y);
	

	//Wenn das erste Bild angeklickt wird
 	if ((firstimage==0) && (image_numbers[image_number]["status"]<3)) {
  	allow_click=0; 
  	firstimage=1;
	//Angeklicktes Bild wird grün;
	if(window.document.images[image_number].style.borderColor == "orange"){
	image_number_first_click = 100;
	}
	else{
	window.document.images[image_number].style.borderColor = "orange"; 
	//Wenn dies das erste Bild ist, diese image_number speichern, falls 2. falsch ist, auch dieses wieder auf schwarzen Rand zurücksetzen kann
	image_number_first_click = image_number;
	}
	
  	pic1=Math.floor(image_numbers[image_number]["zahl"]/2); 
  	first_clicked_image=image_number; 
  	allow_click=1; 
 	}
  
  	//Wenn bereits ein Bild angeklickt ist und das zweite hinzukommt
    else if ((firstimage==1) && (image_numbers[image_number]["status"]<3)) {
		//Wenn das 2.Bild bereits als richtiges Paar Orange markiert wurde
		if(window.document.images[image_number].style.borderColor == "orange"){
		image_number_second_click = 100;
		}
		else{
		image_number_second_click = 0;
		}
		
		//Wenn das Bildpaar bereits als richtig markiert wurde, muss der Counter verringert werden, weil er bei richtigem Paar unten erhöht wird
		if(window.document.images[image_number].style.borderColor == "orange" && window.document.images[image_number_first_click].style.borderColor == "orange"){
		richtig_angelickte_paare--;
		}
	window.document.images[image_number].style.borderColor = "orange"; 
    allow_click=0; 
	firstimage=0; 
	anzahl_versuche++; 
	pic2=Math.floor(image_numbers[image_number]["zahl"]/2); 
	if (pic1!=pic2) {
		window.setTimeout("nothing(first_clicked_image,image_number)",500);
		
		if(image_number_first_click != 100){
		window.document.images[image_number_first_click].style.borderColor = "black";  
		}
		if(image_number_second_click != 100){
		window.document.images[image_number].style.borderColor = "black";
		}
		
	}
	else { 
	richtig_angeklickte_paare++; 
	allow_click=1;
	}
	
	}
	
	//Wenn alle Bildpaare gefunden sind
	if (richtig_angeklickte_paare==anzahl_bildpaare) { 
	storeSpielerstatus();
	//alert("Gratulation, du hast das Spiel mit "+anzahl_versuche+" Versuchen geschafft!"); 
	} 
	
	}
	
	function storeSpielerstatus(){
		//Abfragen welche Einstellungen ausgewählt sind wird schon am Anfang
		var set_selected_spielerstatus = localStorage.getItem("spielerstatus");
		selected_status = JSON.parse(set_selected_spielerstatus);
		//Die Tabelle Statistik laden, damit wir später wenn das Spiel fertig ist, Punkte speichern können
		var set_statistik_tabelle = localStorage.getItem("statistik");
		statistik_tabelle = JSON.parse(set_statistik_tabelle);
		
		var richtige_Stelle_im_Array;
		for (i = 0; i < selected_status.selected.length; i++) {
    		if(selected_status.selected[i] == "true"){
				var erstes_mal_in_schleife = 0; //hier wird der Wert auf 0 gesetzt um später in Statistik richtig zuzuordnen
				selected_status.status[i] += 1; //erhöhe status um 1 bei jeder Runde
				selected_status.punkte[i] += anzahl_versuche;
				if(selected_status.status[i] >= 3){ //sobald die dritte Runde fertig gespielt wurde
					selected_status.status[i] = 0; //setze status auf 0
					//alert(selected_status.punkte[i]);
					if(selected_status.besterVersuch[i] > selected_status.punkte[i] || selected_status.besterVersuch[i] == 0){	
					selected_status.besterVersuch[i] = selected_status.punkte[i]; //Speichere den besten Versuch ab
					}
					
						//Speichere die Punkte bevor sie auf 0 gestellt werden in die Statistiktabelle
						//Daher müssen wir die ganze Statistiktabelle durchsuchen, wo der Name und das Set übereinstimmen
						//Nachdem er durch das true hier sowieso nur einmal hereinkommt
						for(b = 0; b < statistik_tabelle.names.length; b++){
							if(statistik_tabelle.names[b] == playernr && statistik_tabelle.sets[b] == bildset){
								//Wenn das erste mal in der Schleife
								if(erstes_mal_in_schleife == 0){
								//Schiebe das Array nach rechts um 4 Werte
								statistik_tabelle.spielpunkte[b+4] = statistik_tabelle.spielpunkte[b+3];
								statistik_tabelle.spielpunkte[b+3] = statistik_tabelle.spielpunkte[b+2];
								statistik_tabelle.spielpunkte[b+2] = statistik_tabelle.spielpunkte[b+1];
								statistik_tabelle.spielpunkte[b+1] = statistik_tabelle.spielpunkte[b];
								//Schreibe neuen Datensatz in das erste Array //An erster Stelle steht nun letzer Versuch
								statistik_tabelle.spielpunkte[b] = selected_status.punkte[i];
								erstes_mal_in_schleife = 1;
								}
							}
						}
					
					selected_status.punkte[i] = 0; //setze Punkte auch wieder auf 0 für das nächste Spiell
					selecting = JSON.stringify(selected_status);
					localStorage.setItem("spielerstatus", selecting);
					selecting_statistik = JSON.stringify(statistik_tabelle);
					localStorage.setItem("statistik", selecting_statistik);
					window.document.location.href = "endbildschirm.html";
				}
				else{
					selecting = JSON.stringify(selected_status);
					localStorage.setItem("spielerstatus", selecting);
					window.location.reload();
				}
			}
		} 
	}
	
	