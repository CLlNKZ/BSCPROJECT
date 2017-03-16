//Add or Replace rows in PermStatistik
addItemPermStatistik(1, Früchte, 4);

//Add rows to Statistik
addItemStatistik(1, 1, Werkzeug, 3);

//Update rows Einstellungen
updateItemEinstellungen(2, Werkzeug);

//Update rows SpielerStatus
updateItemSpielerStatus(1, Autos, 0, 20, 1);

//Read Einstellungen
getDataEinstellungen();

//Read Statistik
getDataStatistik(1, Werkzeug);

//Read PermStatistik
getDataPermStatistik(1, Früchte);

//Read SpielerStatus
getDataStatus(1);

//Delete Statistik
//deleteItemsStatistik()

//Close DB
closeDB();