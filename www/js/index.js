			
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() { alert("bindEvents");
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() { alert("device");
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
	obj = JSON.parse(text);
	var playerName = obj.name;
	var setToPlay = obj.set;
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
						 "false", "false", "false", "false", "false",
						 "false", "false", "false", "false", "false"]
			};
			myJSON = JSON.stringify(objects);
			localStorage.setItem("spielerstatus", myJSON);
		}
}


