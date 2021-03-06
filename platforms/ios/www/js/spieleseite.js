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
var bildset = "fruits";

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
		//window.document.images[pic1].src=covered.src; 
		//image_numbers[pic1]["status"]=0; 
		//window.document.images[pic2].src=covered.src; 
		//image_numbers[pic2]["status"]=0; 
		
		allow_click=1; 
	}
	
	//Überfülle covered.src mit den Bildern
	function anfang(x,y){
		image_number=(x*spaltenanzahl+y);
 		if ((firstimage==0) && (image_numbers[image_number]["status"]<3)) {
		//bei Image_numbers[image_number hier sind nur 4 eingespeichert!!!]
		pic1=Math.floor(image_numbers[image_number]["zahl"]/2);  
		//pic1=Math.floor(image_numbers[image_number*2]["zahl"]/2);
		if ((image_numbers[image_number]["zahl"] % 2)==0) {
			window.document.images[image_number].src=bild[pic1]["B"].src; 
			}
  		else window.document.images[image_number].src=bild[pic1]["A"].src;
 		}
	}

	function look(x,y) {
	//Timer aktivieren und auf true setzen
	
	if (timer_gestartet=='no') { 
		timer_gestartet='yes';
		timer_start=new Date();  
	}
	
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
	
	if (richtig_angeklickte_paare==anzahl_bildpaare) timer_ende=new Date(); 
	}
	
	//Wenn alle Bildpaare gefunden sind
	if (richtig_angeklickte_paare==anzahl_bildpaare) { 
	var zeit=Math.floor(eval( ( (timer_ende.getTime() - timer_start.getTime()) ) / 1000)); 
	alert("Gratulation, du hast das Spiel mit "+anzahl_versuche+" Versuchen und in "+zeit+" Sekunden geschafft!"); 
	window.location.reload();
	} 
	
	}
	
	var game;
	/*
	function loadmemory() { 
	var start=0; 
	//hier könnten wir rausladen, welches Set ausgewählt ist?
	if (document.spiel.settings[0].checked == true) { game="r4c4"; start=1; } 
	if (document.spiel.settings[1].checked == true) { game="r4c6"; start=1; } 
	if (document.spiel.settings[2].checked == true) { game="r6c6"; start=1; } 
	window.name="DoubleCardON"; location.reload(); 
	} 
	*/