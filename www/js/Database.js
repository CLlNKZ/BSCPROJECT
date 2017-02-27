//create DB + Tables
var db = window.sqlitePlugin.openDatabase({ name: 'doublecardon.db', location: 'default' }, function (db) {

    db.transaction(function (tx) {
		
    tx.executeSql('CREATE TABLE Einstellungen (spieler, kartenset)');
	tx.executeSql('CREATE TABLE PermStatistik (spieler, kartenset, besterVersuch)');
	tx.executeSql('CREATE TABLE SpielerStatus (spieler, kartenset, status, punkte)');
	tx.executeSql('CREATE TABLE Einstellungen (spielID, spieler, kartenset, versuche)');
}, function (error) {
    console.log('transaction error: ' + error.message);
}, function () {
    console.log('transaction ok');
});

}, function (error) {
    console.log('Open database ERROR: ' + JSON.stringify(error));
});

//Add rows to Einstellungen
function addItemEinstellungen(spieler, kartenset) {

    db.transaction(function (tx) {

        var query = "INSERT INTO Einstellungen (spieler, kartenset) VALUES (?,?)";

        tx.executeSql(query, [spieler, kartenset], function(tx, res) {
            console.log("insertId: " + res.insertId + " -- probably 1");
            console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
        },
        function(tx, error) {
            console.log('INSERT error: ' + error.message);
        });
    }, function(error) {
        console.log('transaction error: ' + error.message);
    }, function() {
        console.log('transaction ok');
    });
}

//Add rows to PermStatistik
function addItemPermStatistik(spieler, kartenset, besterVersuch) {

    db.transaction(function (tx) {

        var query = "INSERT INTO Einstellungen (spieler, kartenset) VALUES (?,?,?)";

        tx.executeSql(query, [spieler, kartenset, besterVersuch], function(tx, res) {
            console.log("insertId: " + res.insertId + " -- probably 1");
            console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
        },
        function(tx, error) {
            console.log('INSERT error: ' + error.message);
        });
    }, function(error) {
        console.log('transaction error: ' + error.message);
    }, function() {
        console.log('transaction ok');
    });
}

//Add rows to SpielerStatus

function addItemSpielerStatus(spieler, kartenset, status, punkte) {

    db.transaction(function (tx) {

        var query = "INSERT INTO SpielerStatus (spieler, kartenset, status, punkte) VALUES (?,?,?,?)";

        tx.executeSql(query, [spieler, kartenset, status, punkte], function(tx, res) {
            console.log("insertId: " + res.insertId + " -- probably 1");
            console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
        },
        function(tx, error) {
            console.log('INSERT error: ' + error.message);
        });
    }, function(error) {
        console.log('transaction error: ' + error.message);
    }, function() {
        console.log('transaction ok');
    });
}

//Add rows to Statistik

function addItemStatistik(spielID, spieler, kartenset, versuche) {

    db.transaction(function (tx) {

        var query = "INSERT INTO SpielerStatus (spieler, kartenset, status, punkte) VALUES (?,?,?,?)";

        tx.executeSql(query, [spielID, spieler, kartenset, versuche], function(tx, res) {
            console.log("insertId: " + res.insertId + " -- probably 1");
            console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
        },
        function(tx, error) {
            console.log('INSERT error: ' + error.message);
        });
    }, function(error) {
        console.log('transaction error: ' + error.message);
    }, function() {
        console.log('transaction ok');
    });
}

//Read rows from Einstellungen

