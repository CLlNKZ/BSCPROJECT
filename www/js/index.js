			
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() { 
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() { 
        app.receivedEvent('deviceready');
		
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
	
};

function loadCardSets(){
 //Get Data
	var text = localStorage.getItem("einstellungen");
	if(text == null){
		var myObj = { "set":"fruits", "name":"player1" };
		var myJSON = JSON.stringify(myObj);
		localStorage.setItem("einstellungen", myJSON);
	}
}

function CreateTableSpielerstatus(){
		var newspielerstatus, myJSON;
		newspielerstatus = localStorage.getItem("spielerstatus");
		//Wenn Tabelle spielerstatus noch nicht existiert, erstellen
		//true-Wert ist am anfang auf player1 und fruits, bei der Erstinstallation
		if(newspielerstatus ==  null){
			objects = { 
			"name":[ "player1", "player1", "player1", "player1", "player1", 
					"player2", "player2", "player2", "player2", "player2",
					"player3", "player3", "player3", "player3", "player3"],
			"set":[ "fruits", "animals", "food", "vehicles", "tools",
				   "fruits", "animals", "food", "vehicles", "tools",
				   "fruits", "animals", "food", "vehicles", "tools"],
			"status":[ 0,0,0,0,0,
					   0,0,0,0,0,
					   0,0,0,0,0],
			"punkte":[ 0,0,0,0,0,
					   0,0,0,0,0,
					   0,0,0,0,0],
			"selected": [ "true", "false", "false", "false", "false",
						 "false", "false", "false", "false", "false",
						 "false", "false", "false", "false", "false"],
			"besterVersuch": [ 0,0,0,0,0,
					   		   0,0,0,0,0,
					   	  	   0,0,0,0,0]
			};
			myJSON = JSON.stringify(objects);
			localStorage.setItem("spielerstatus", myJSON);
		}
}

function CreateTableStatistik(){
		var statistik_tabelle, JS;
		statistik_tabelle = localStorage.getItem("statistik");
		//Wenn Tabelle statistik noch nicht existiert, erstellen
		//Wir haben hier 75 Eintr�ge 3Spieler*5Sets=15*5letzteEintr�ge= 75 Eintr�ge
		if(statistik_tabelle ==  null){
			objects = { 
			"names":[ "player1", "player1", "player1", "player1", "player1", "player1", "player1", "player1", "player1", "player1",
					"player1", "player1", "player1", "player1", "player1", "player1", "player1", "player1", "player1", "player1",
					"player1", "player1", "player1", "player1", "player1",
					"player2", "player2", "player2", "player2", "player2", "player2", "player2", "player2", "player2", "player2",
					"player2", "player2", "player2", "player2", "player2", "player2", "player2", "player2", "player2", "player2",
					"player2", "player2", "player2", "player2", "player2",
					"player3", "player3", "player3", "player3", "player3", "player3", "player3", "player3", "player3", "player3",
					"player3", "player3", "player3", "player3", "player3", "player3", "player3", "player3", "player3", "player3",
					"player3", "player3", "player3", "player3", "player3"],
			"sets":[ "fruits", "fruits", "fruits", "fruits", "fruits", "animals", "animals", "animals", "animals", "animals", 
				   "food", "food", "food", "food", "food", "vehicles", "vehicles", "vehicles", "vehicles", "vehicles",
				   "tools", "tools", "tools", "tools", "tools",
				   "fruits", "fruits", "fruits", "fruits", "fruits", "animals", "animals", "animals", "animals", "animals", 
				   "food", "food", "food", "food", "food", "vehicles", "vehicles", "vehicles", "vehicles", "vehicles",
				   "tools", "tools", "tools", "tools", "tools",
				   "fruits", "fruits", "fruits", "fruits", "fruits", "animals", "animals", "animals", "animals", "animals", 
				   "food", "food", "food", "food", "food", "vehicles", "vehicles", "vehicles", "vehicles", "vehicles",
				   "tools", "tools", "tools", "tools", "tools"],
			"spielpunkte":[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
					  	   0,0,0,0,0]
			};
			JS = JSON.stringify(objects);
			localStorage.setItem("statistik", JS);
		}
		
}


