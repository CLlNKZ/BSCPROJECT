var myDB = window.sqlitePlugin.openDatabase({name: "database.db", location: 'default'});

myDB.transaction(function(transaction) {
transaction.executeSql('CREATE TABLE IF NOT EXISTS statistik (Spiel_ID integer primary key, Spieler text, Datum text, Versuche integer, Kartenset string)', [],
function(tx, result) {
alert("Table created successfully");
},
function(error) {
alert("Error occurred while creating the table.");
});
});

myDB.transaction(function(transaction) {
transaction.executeSql('CREATE TABLE IF NOT EXISTS spieler (Spieler_ID integer primary key, name text)', [],
function(tx, result) {
alert("Table created successfully");
},
function(error) {
alert("Error occurred while creating the table.");
});
});
