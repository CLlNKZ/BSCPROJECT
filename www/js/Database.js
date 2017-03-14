window.alert("Start");
var db = null;

//open DB 
 document.addEventListener('deviceready', function() {
	window.alert("Hallo");
	db = window.sqlitePlugin.openDatabase({ name: 'doublecardon.db', location: 'default' })}
	, function (error) {
    window.alert('Open database ERROR: ' + JSON.stringify(error));
}); 

//create Tables
/*
selected true:1 false:0
*/
db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Einstellungen (spieler TEXT, kartenset TEXT)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS PermStatistik (spieler TEXT, kartenset TEXT, besterVersuch INTEGER, UNIQUE(spieler, kartenset))');
	tx.executeSql('CREATE TABLE IF NOT EXISTS SpielerStatus (ID_spieler TEXT PRIMARY KEY, kartenset TEXT, SPstatus INTEGER, punkte INTEGER, selected INTEGER)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS Statistik (ID_Statistik INTEGER PRIMARY KEY, spieler TEXT, kartenset TEXT, versuche INTEGER)');
  }, function(error) {
    window.alert('Transaction ERROR: ' + error.message);
  }, function() {
    window.alert('Populated database OK');
  });


//Default Values for DB Einstellungen and SpielerStatus
db.transaction(function(tx){
	tx.executeSql('INSERT INTO IF NOT EXISTS Einstellungen VALUES (?,?)', ['1', '1']);
	tx.executeSql('INSERT INTO IF NOT EXISTS SpielerStatus VALUES (?,?,?,?)', ['1', '1', 0, 0, 1]);
	tx.executeSql('INSERT INTO IF NOT EXISTS SpielerStatus VALUES (?,?,?,?)', ['2', '1', 0, 0, 0]);
	tx.executeSql('INSERT INTO IF NOT EXISTS SpielerStatus VALUES (?,?,?,?)', ['3', '1', 0, 0, 0]);
	});


//Add or Replace rows in PermStatistik
function addItemPermStatistik(spieler, kartenset, besterVersuch) {

    db.transaction(function (tx) {

        var query = "INSERT or REPLACE INTO PermStatistik (spieler, kartenset besterVersuch) VALUES (?,?,?)";

        tx.executeSql(query, [spieler, kartenset, besterVersuch], function(tx, res) {
            window.alert("insertId: " + res.insertId + " -- probably 1");
            window.alert("rowsAffected: " + res.rowsAffected + " -- should be 1");
        },
        function(tx, error) {
            window.alert('INSERT error: ' + error.message);
        });
    }, function(error) {
        window.alert('transaction error: ' + error.message);
    }, function() {
        window.alert('transaction ok');
    });
}

//Add rows to Statistik
function addItemStatistik(id_Statistik, spieler, kartenset, versuche) {

    db.transaction(function (tx) {

        var query = "INSERT INTO Statistik (ID_Statistik, spieler, kartenset, versuche) VALUES (?,?,?,?)";

        tx.executeSql(query, [id_Statistik, spieler, kartenset, versuche], function(tx, res) {
            window.alert("insertId: " + res.insertId + " -- probably 1");
            window.alert("rowsAffected: " + res.rowsAffected + " -- should be 1");
        },
        function(tx, error) {
            window.alert('INSERT error: ' + error.message);
        });
    }, function(error) {
        window.alert('transaction error: ' + error.message);
    }, function() {
        window.alert('transaction ok');
    });
}

//Update rows Einstellungen
function updateItemEinstellungen(spieler, kartenset) {
 
    db.transaction(function (tx) {

        var query = "UPDATE Einstellungen SET spieler = ?, kartenset = ?";

        tx.executeSql(query, [spieler, kartenset], function(tx, res) {
            window.alert("insertId: " + res.insertId);
            window.alert("rowsAffected: " + res.rowsAffected);
        },
        function(tx, error) {
            window.alert('UPDATE error: ' + error.message);
        });
    }, function(error) {
        window.alert('transaction error: ' + error.message);
    }, function() {
        window.alert('transaction ok');
    });
}

//Update rows SpielerStatus
function updateItemSpielerStatus(ID_spieler, kartenset, SPstatus, punkte) {
 
    db.transaction(function (tx) {

        var query = "UPDATE SpielerStatus SET kartenset = ?, SPstatus = ?, punkte = ? WHERE ID_spieler = ?";

        tx.executeSql(query, [ID_spieler, kartenset, SPstatus, punkte], function(tx, res) {
            window.alert("insertId: " + res.insertId);
            window.alert("rowsAffected: " + res.rowsAffected);
        },
        function(tx, error) {
            window.alert('UPDATE error: ' + error.message);
        });
    }, function(error) {
        window.alert('transaction error: ' + error.message);
    }, function() {
        window.alert('transaction ok');
    });
}

//Read Einstellungen
function getDataEinstellungen() {

    db.transaction(function (tx) {

        var query = "SELECT spieler, kartenset FROM Einstellungen";

        tx.executeSql(query, [], function (tx, resultSet) {

            for(var x = 0; x < resultSet.rows.length; x++) {
				//Hier habe ich window.alert auf window.alert
                window.alert(resultSet.rows.item(x).spieler +
                    ", " + resultSet.rows.item(x).kartenset);
            }
        },
        function (tx, error) {
            window.alert('SELECT error: ' + error.message);
        });
    }, function (error) {
        window.alert('transaction error: ' + error.message);
    }, function () {
        window.alert('transaction ok');
    });
}

//Read Statistik
function getDataStatistik(spieler, kartenset) {

    db.transaction(function (tx) {

        var query = "SELECT ID_Statistik, spieler, kartenset, versuche FROM Statistik WHERE spieler = ? AND kartenset= ? ORDER BY ID_Statistik DESC";

        tx.executeSql(query, [spieler, kartenset], function (tx, resultSet) {

            for(var x = 0; x < resultSet.rows.length; x++) {
                window.alert(resultSet.rows.item(x).ID_Statistik +
                    ", " + resultSet.rows.item(x).versuche);
            }
        },
        function (tx, error) {
            window.alert('SELECT error: ' + error.message);
        });
    }, function (error) {
        window.alert('transaction error: ' + error.message);
    }, function () {
        window.alert('transaction ok');
    });
}

//Read PermStatistik
function getDataPermStatistik(spieler, kartenset) {

    db.transaction(function (tx) {

        var query = "SELECT besterVersuch FROM PermStatistik WHERE spieler = ? AND kartenset = ?";

        tx.executeSql(query, [spieler, kartenset], function (tx, resultSet) {

                window.alert(resultSet.rows.item(0).besterVersuch);
        },
        function (tx, error) {
            window.alert('SELECT error: ' + error.message);
        });
    }, function (error) {
        window.alert('transaction error: ' + error.message);
    }, function () {
        window.alert('transaction ok');
    });
}
//Read SpielerStatus
function getDataStatus(spieler) {

    db.transaction(function (tx) {

        var query = "SELECT ID_spieler, kartenset, SPstatus, punkte FROM SpielerStatus WHERE ID_spieler = ?";

        tx.executeSql(query, [spieler], function (tx, resultSet) {

            for(var x = 0; x < resultSet.rows.length; x++) {
                window.alert(resultSet.rows.item(x).ID_spieler +
                    ", " + resultSet.rows.item(x).kartenset + 
					", "+ resultSet.rows.item(x).SPstatus + 
					", "+ resultSet.rows.item(x).punkte);
            }
        },
        function (tx, error) {
            window.alert('SELECT error: ' + error.message);
        });
    }, function (error) {
        window.alert('transaction error: ' + error.message);
    }, function () {
        window.alert('transaction ok');
    });
}
//Delete Statistik
function deleteItemsStatistik() {
 
    db.transaction(function (tx) {

        var query = "DELETE FROM Statistik";

        tx.executeSql(query, [], function(tx, res) {
            window.alert("rowsAffected: " + res.rowsAffected);
        },
        function(tx, error) {
            window.alert('Delete error: ' + error.message);
        });
    }, function(error) {
        window.alert('transaction error: ' + error.message);
    }, function() {
        window.alert('transaction ok');
    });
}
//Close DB
function closeDB() {
    db.close(function () {
        window.alert("DB closed!");
    }, function (error) {
        window.alert("Error closing DB:" + error.message);
    });
}
