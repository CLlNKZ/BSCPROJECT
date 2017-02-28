var db = null;

//open DB 
document.addEventListener('deviceready', function() {
  db = window.sqlitePlugin.openDatabase({ name: 'doublecardon.db', location: 'default' }, function (error) {
    console.log('Open database ERROR: ' + JSON.stringify(error));
});

//create Tables
db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Einstellungen (ID_Einstellungen INTEGER PRIMARY KEY, spieler TEXT, kartenset TEXT)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS PermStatistik (spieler TEXT, kartenset TEXT, besterVersuch INTEGER, UNIQUE(spieler, kartenset))');
	tx.executeSql('CREATE TABLE IF NOT EXISTS SpielerStatus (ID_spieler TEXT PRIMARY KEY, kartenset TEXT, status INTEGER, punkte INTEGER)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS Statistik (ID_Statistik INTEGER PRIMARY KEY, spieler TEXT, kartenset TEXT, versuche INTEGER)');
  }, function(error) {
    console.log('Transaction ERROR: ' + error.message);
  }, function() {
    console.log('Populated database OK');
  });


//Default Values for DB Einstellungen and SpielerStatus
db.transaction(function(tx){
	tx.executeSql('INSERT INTO IF NOT EXISTS Einstellungen VALUES (?,?,?)', [1, '1', '1']);
	tx.executeSql('INSERT INTO IF NOT EXISTS SpielerStatus VALUES (?,?,?,?)', ['1', '1', 0, 0]);
	tx.executeSql('INSERT INTO IF NOT EXISTS SpielerStatus VALUES (?,?,?,?)', ['2', '1', 0, 0]);
	tx.executeSql('INSERT INTO IF NOT EXISTS SpielerStatus VALUES (?,?,?,?)', ['3', '1', 0, 0]);
	}


//Add or Replace rows in PermStatistik
function addItemPermStatistik(spieler, kartenset, besterVersuch) {

    db.transaction(function (tx) {

        var query = "INSERT or REPLACE INTO PermStatistik (spieler, kartenset besterVersuch) VALUES (?,?,?)";

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

//Add rows to Statistik
function addItemStatistik(id_Statistik, spieler, kartenset, versuche) {

    db.transaction(function (tx) {

        var query = "INSERT INTO Statistik (ID_Statistik, spieler, kartenset, versuche) VALUES (?,?,?,?)";

        tx.executeSql(query, [id_Statistik, spieler, kartenset, versuche], function(tx, res) {
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

//Update rows Einstellungen
function updateItemEinstellungen(spieler, kartenset) {
 
    db.transaction(function (tx) {

        var query = "UPDATE Einstellungen SET spieler = ?, kartenset = ? WHERE ID_Einstellungen = 1";

        tx.executeSql(query, [spieler, kartenset], function(tx, res) {
            console.log("insertId: " + res.insertId);
            console.log("rowsAffected: " + res.rowsAffected);
        },
        function(tx, error) {
            console.log('UPDATE error: ' + error.message);
        });
    }, function(error) {
        console.log('transaction error: ' + error.message);
    }, function() {
        console.log('transaction ok');
    });
}

//Update rows SpielerStatus
function updateItemSpielerStatus(ID_spieler, kartenset, status, punkte) {
 
    db.transaction(function (tx) {

        var query = "UPDATE SpielerStatus SET kartenset = ?, status = ?, punkte = ? WHERE ID_spieler = ?";

        tx.executeSql(query, [ID_spieler, kartenset, status, punkte], function(tx, res) {
            console.log("insertId: " + res.insertId);
            console.log("rowsAffected: " + res.rowsAffected);
        },
        function(tx, error) {
            console.log('UPDATE error: ' + error.message);
        });
    }, function(error) {
        console.log('transaction error: ' + error.message);
    }, function() {
        console.log('transaction ok');
    });
}

//Read

//Delete Statistik
function deleteItemsStatistik() {
 
    db.transaction(function (tx) {

        var query = "DELETE FROM Statistik";

        tx.executeSql(query, [], function(tx, res) {
            console.log("rowsAffected: " + res.rowsAffected);
        },
        function(tx, error) {
            console.log('Delete error: ' + error.message);
        });
    }, function(error) {
        console.log('transaction error: ' + error.message);
    }, function() {
        console.log('transaction ok');
    });
}
//Close DB
function closeDB() {
    db.close(function () {
        console.log("DB closed!");
    }, function (error) {
        console.log("Error closing DB:" + error.message);
    });
}