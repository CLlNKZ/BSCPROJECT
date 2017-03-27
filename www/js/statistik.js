function readBest(){
var set_selected_spielerstatus = localStorage.getItem("spielerstatus");
selected_status = JSON.parse(set_selected_spielerstatus);for(i=0;i<selected_status.selected.length; i++){if(selected_status.selected[i]=="true"){
if(selected_status.besterVersuch[i]==0){alert ("Keine Statistik vorhanden");}else{document.getElementById("schrift2").value = selected_status.besterVersuch[i];window.document.location.href="statistik.html";}}
}

}