window.alert("Start");

var db;
var shortName = 'DoubleCardOndbDB';
var version = '1.0';
var displayName = 'DoubleCardOndbDB';
var maxSize = 8192;

window.alert("Variables");

// Wait for device API libraries to load
//
function onLoad() {
	window.alert("Inload");
    document.addEventListener("deviceready", onDeviceReady, false);
}
window.alert("Ready");


function onDeviceReady() {
	window.alert("DVReady");
    var db = window.sqlitePlugin.openDatabase(shortName, version, displayName, maxSize);
    db.transaction(populateDB, errorCB, successCB);
}

// this is called when an error happens in a transaction
function errorHandler(transaction, error) {
   alert('Error: ' + error.message + ' code: ' + error.code);

}

// this is called when a successful transaction happens
function successCallBack() {
   alert("DEBUGGING: success");

}

function nullHandler(){};

db.transaction(function(tx){

   tx.executeSql( 'CREATE TABLE IF NOT EXISTS Statistik(Spiel_ID INTEGER PRIMAR KEY, Spieler TEXT NOT NULL, Datum TEXT NOT NULL, Versuche INTEGER NOT NULL, Kartenset TEXT NOT NULL)',
[],nullHandler,errorHandler);
 },errorHandler,successCallBack);




/*var myDB = window.sqlitePlugin.openDatabase({name: "database.db", location: 'default'});
window.alert("After DB");
myDB.transaction(function(transaction) {
transaction.executeSql('CREATE TABLE IF NOT EXISTS statistik (Spiel_ID integer primary key, Spieler text, Datum text, Versuche integer, Kartenset string)', [],
function(tx, result) {
window.alert("Table created successfully");
},
function(error) {
window.alert("Error occurred while creating the table.");
});
});

myDB.transaction(function(transaction) {
transaction.executeSql('CREATE TABLE IF NOT EXISTS spieler (Spieler_ID integer primary key, name text)', [],
function(tx, result) {
window.alert("Table created successfully");
},
function(error) {
window.alert("Error occurred while creating the table.");
});
});

window.alert("Worked");*/